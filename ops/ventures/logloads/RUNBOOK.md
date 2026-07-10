# LogLoads runbook

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / founder verification required**.

## Safety rules

1. Use GitHub repository `AutomatedEmpires/logloads` and verify resource identities before every provider write.
2. Keep secret values in Doppler; never store or print them in this pack or commits.
3. Do not activate broad placeholder integrations merely because variable names exist.
4. Treat domain/DNS, database migration, live email, Stripe subscriptions, and secret rotation as founder-approved operations.
5. Do not introduce Stripe Connect, freight payments, brokerage, or payout flows without a new dated product/legal decision.

## Verification sequence

1. Confirm Doppler project `logloads` and config `dev`, `stg`, or `prd`.
2. Confirm the linked Vercel project is exactly `logloads` before deploy or environment synchronization.
3. Confirm Supabase ref `fdzohbiiyzgvjzfsjyxo` before any database inspection or migration.
4. Compare repository consumers with the variable-name inventory; populate only variables consumed by the current slice.
5. Run pinned repository validation before Preview.

## Local development

**Observed in repository:** LogLoads documents `doppler run -- pnpm dev`. Use the `dev` config and do not materialize a durable real `.env` as the source of truth.

The scaffold's successful startup or build is not proof that auth, database, maps, payments, email, analytics, or monitoring operate end to end.

## Preview and production

- **Verified current:** canonical repo/main/root `apps/web` are connected; the current dirty `feature/backend-foundation` preview is `READY` and serves successfully.
- **Blocked:** the production artifact from the same dirty feature source is `ERROR` with a missing Next server runtime; do not promote it or cut over `logloads.com`.
- **Target state:** fix/reproduce on a reviewed branch, deploy a clean Preview with stg, then deploy main with prd and verify before DNS work.

Promote only after the current implemented slice is tested with LogLoads-specific resources and production failure modes fail closed.

## Database

The verified project has 36 application tables with RLS, one zero-policy table (`operating_state`), and six remote migrations. Before changes, compare local/remote migrations, data ownership, policies, backups, PostGIS, and rollback. No reset/push/repair without explicit approval.

## Provider activation order

Repair Vercel production first. Then: production Clerk → venture-specific Mapbox tokens → separate Resend account/domain → PostHog/Sentry → Cloudinary boundary → subscription-only Stripe. Do not treat the current shared Mapbox/Resend or folder-only media state as acceptable transfer completion.

## Incident response

If a provider identity or value appears shared with another venture, stop writes. Identify consumers using names-only evidence, prepare replacement and rollback, then rotate after verification. Never delete a stale-looking provider resource without production-safety evidence.
