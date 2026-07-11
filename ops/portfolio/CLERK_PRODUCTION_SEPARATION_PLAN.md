# Clerk Production and Environment Separation Plan

**Prepared:** 2026-07-10

**Execution state:** Provider identities, user counts, environment coupling, and cutover gates are verified. No production instance, domain, user, webhook, OAuth credential, key, or runtime configuration was changed.

## Current state and classification

| Venture | Current identity | Users | Separation finding | Pass 2 classification |
|---|---|---:|---|---|
| Explore&Earn | Development instance `ins_3Eb…HpMLk`; only Doppler `dev` has Clerk keys | 1 | `stg`/`prd` absent; production webhook signing config absent | Production blocked; safe dark-instance activation pending |
| Sweepza | Development instance `ins_3Eh…Gh4dSy` | 1 | `dev`, `stg`, and live `prd` use the same development instance/signing config | Confirmed cross-environment contamination; production blocked |
| LogLoads | Development instance `ins_3Eh…RsHYW` | 0 | `dev`/`stg` coupled; `prd` absent | Lower-risk activation, blocked by source/provenance |

All three instance IDs are different. No cross-venture Clerk instance reuse was found.

## Provider constraints

- Clerk development instances are not production-safe, are capped at 100 users, and use a weaker development session architecture.
- Users cannot be transferred from a Clerk development instance to its production instance. The one Explore&Earn user and one Sweepza user must be treated as test/dev identities or explicitly re-register in production; no automatic migration may be promised.
- Production activation requires an owned domain, DNS writes, production OAuth credentials/webhooks, and redeployed production key configuration. Key prefixes and values are intentionally omitted.
- Clerk does not offer a native staging instance. Strict long-lived staging needs a separate Clerk application and separate domain. Ephemeral provider previews may explicitly use development keys.
- Production can remain on Hobby when only Hobby features are used; paid features can require Pro. Confirm the enabled feature set before accepting a charge.

## Target boundary

| Environment | Target |
|---|---|
| `dev` | Existing venture-specific development instance; local origins only |
| Ephemeral PR preview | Development instance, explicitly documented as non-production; no production user data |
| Long-lived `stg` | Separate staging Clerk application on a separate owned staging domain, or an explicit defer decision if no long-lived staging domain exists |
| `prd` | Venture application's production instance, custom domain, production OAuth credentials, production webhook, and production-only keys |

## Safe activation sequence

### Common preparation

1. Verify the venture application and workspace owners, recovery administrators, billing state, and enabled paid features.
2. Export the authenticated GoDaddy zone and record web, mail, DMARC, and existing auth-related records before adding Clerk DNS.
3. Inventory sign-in methods, OAuth providers, session claims/JWT templates, roles/public metadata, allowed origins, redirects, paths, webhooks/events, branding, email/SMS settings, and CSP.
4. Record the existing development user count and decide whether each identity is disposable test data or must re-register. Do not claim a dev-to-prod user migration.

### Dark production instance

1. Activate the production instance without changing any deployed application key. Clone only the settings that are safe to clone.
2. Reconfigure settings that Clerk does not copy for security, including SSO connections, integrations, and paths.
3. Attach the correct venture domain and publish only Clerk-issued DNS records. Preserve Vercel web records, Outlook/Mailgun MX, Resend return-path records, and DMARC.
4. Configure production OAuth credentials and exact redirect URLs. Do not use Clerk's shared development OAuth credentials in production.
5. Configure only the webhook events consumed by source. Store its signing secret directly in the venture's Doppler `stg`/`prd` config; never record it in docs or chat.
6. Add allowed origins/subdomain allowlists and application `authorizedParties`; do not authorize another venture or a broad hosting-provider domain.
7. Deploy Clerk certificates and verify the production Frontend API/custom domain before installing application keys.

### Venture-specific gates

**Explore&Earn**

- Production webhook: `https://exploreandearn.com/api/webhooks/clerk` for `user.created`, `user.updated`, and `user.deleted`.
- Verify Svix signature handling, Supabase profile synchronization, duplicate/replay idempotency, deletion behavior, and best-effort welcome mail.
- The current single dev user must re-register if it is a real founder/test account intended for production.

**Sweepza**

- Production webhook: `https://sweepza.com/api/webhooks/clerk` for the events handled by the route, including the current user lifecycle contract.
- Do not overwrite `prd` until a production signup, webhook, Supabase role/profile update, sign-in/out, and protected-route test pass on a controlled candidate.
- Replace the reused dev webhook signing configuration with a production endpoint secret. Keep dev intact for local/preview work.
- Decide whether `stg` is ephemeral preview (dev instance acceptable) or long-lived strict staging (separate app/domain required).

**LogLoads**

- Zero users means no current Clerk dev-user re-registration burden.
- Create/configure the dark production identity only after confirming the app's final auth routes and webhook contract.
- Local canonical state/cold-start/concurrency checks pass. Do not install production keys until the branch is reviewed and exact-SHA Preview/live-upgrade/rollback gates pass.

## Preview and cutover gates

1. Install production keys under temporary, noncanonical Doppler names for a protected candidate; keep the existing dev keys available for rollback.
2. Verify sign-up, verification, sign-in/out, session refresh, protected routes, roles/metadata, OAuth, account portal, webhook signatures, replay behavior, database sync, and observability.
3. Prove that another venture origin is rejected and that development users/sessions do not appear in production.
4. Promote exactly one venture at a time. Replace canonical `prd` variables in Doppler, sync to Vercel Production only, redeploy the exact tested SHA, and repeat smoke tests.
5. Do not revoke or delete development keys/instances. They remain the dev boundary.

## Rollback

1. Revert the application deployment and Doppler variable references to the previous known-good configuration.
2. Keep the new production instance and its users/webhooks intact for reconciliation; do not delete users or rotate keys during incident response.
3. Reconcile any user/profile/webhook events created during the attempted window before retrying.
4. A rollback to a development instance is temporary incident recovery, not an acceptable steady-state production architecture.

## Current blocker

Authenticated provider setup is complete through separate dark production instances plus DNS Verified/SSL Issued for Explore&Earn, Sweepza, and LogLoads. The remaining gate is runtime configuration and isolated Preview proof: OAuth/JWT/webhook/admin settings, venture-specific keys, end-to-end auth flows, staging strategy, and safe replacement of current development-backed production bindings. Paid Phone/SMS MFA cloning remains a payment/plan gate; browser authentication is not the current blocker.

## Provider references

- [Clerk instances and environment architecture](https://clerk.com/docs/guides/development/managing-environments)
- [Clerk production deployment](https://clerk.com/docs/guides/development/deployment/production)
- [Clerk migration limitation](https://clerk.com/docs/guides/development/migrating/overview)
