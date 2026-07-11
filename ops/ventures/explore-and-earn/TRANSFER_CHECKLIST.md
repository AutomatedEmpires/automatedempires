# Explore & Earn transfer checklist

Last reviewed: 2026-07-10

This checklist transfers control, not secret values. Use provider membership, RBAC, and recovery workflows rather than copying credentials.

## Authority and scope

- [ ] **Target state** — Record transferor, transferee, effective date, business owner, technical owner, billing owner, data owner, and emergency contact.
- [ ] **Target state** — Confirm the transfer covers only Explore & Earn resources.
- [ ] **Authority boundary** — Obtain explicit approval for live irreversible money/customer actions, destructive database/deletion actions, domain/ownership transfer, and legal/tax/payout changes.

## Core access

- [ ] **Observed in repository** — Confirm canonical GitHub repository `AutomatedEmpires/explore-and-earn`, protected branches, environments, Actions workflows, and current pull requests.
- [ ] **Verified current** — Transfer least-privilege access to Doppler project `explore-and-earn` and configs `dev`, `stg`, `prd`.
- [ ] **Verified current** — Transfer least-privilege access to Vercel project `explore-and-earn` and demonstrate Preview, Production, logs, and rollback.
- [ ] **Verified current** — Transfer least-privilege access to Supabase fingerprint `…clafhmmr`; verify backups, migration controls, and emergency database owner.

## Open production gates

- [ ] **Partially remediated** — Dark production Clerk DNS is Verified and SSL Issued; finish configuration, install Preview credentials, and prove custom-domain auth, OAuth, Supabase JWT, webhook, protected routes, admin access, and dev-user re-registration.
- [ ] **Verified current** — Complete the founder-approved migration-ledger repair and produce a green migration workflow result.
- [x] **Completed** — Resend DNS/provider-domain verification.
- [x] **Safely fixed configuration** — A sending-only/domain-restricted replacement and explicit sender/reply identity are installed across approved lanes; prove venture-domain delivery before retiring the broad key.
- [ ] **Verified current** — Dedicated live/test accounts and the current catalog are prepared; prove the deployed production account/mode and correct live webhook before billing activation or customer-state work.

## Domain and provider ownership

- [ ] **Observed in repository** — Confirm the intended domain is `exploreandearn.com`.
- [x] **Completed** — Authenticated GoDaddy ownership, privacy, auto-renew, authoritative DNS, and full-zone inventory were verified; preserve recovery ownership.
- [ ] **Provider verification required** — Reconcile the remaining Clerk/Stripe/Resend/PostHog/Cloudinary/Mapbox/Sentry/AI runtime gates with `PROVIDER_LINKS.md`; established resource identities must not be reclassified as unknown.
- [ ] **Target state** — For every resource, record only provider, resource name, environment, owner roles, and verification date.

## Configuration integrity

- [ ] **Target state** — Compare Doppler, Vercel, GitHub Actions, and provider configuration by variable name and environment without displaying values.
- [ ] **Target state** — Confirm staging uses test-mode payment and isolated webhook resources.
- [ ] **Target state** — Confirm production callbacks and webhooks point only to the production Explore & Earn domain.
- [ ] **Target state** — Rotate sensitive material through providers after access transfer when policy or risk requires it; deploy and verify replacements before revocation.

## End-to-end acceptance

- [ ] **Target state** — Recipient can run repository checks and deploy a harmless Preview change.
- [ ] **Target state** — Recipient can identify and restore the last known-good production deployment.
- [ ] **Target state** — Recipient can prove auth, authenticated data access, email, billing, analytics, media, maps, cron, and error reporting appropriate to production.
- [ ] **Target state** — Recipient and transferor sign the non-secret inventory and access-removal schedule.
