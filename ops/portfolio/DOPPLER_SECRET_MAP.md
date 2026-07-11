# Doppler Portfolio Secret Map

**Verified snapshot:** 2026-07-10
**Policy:** Doppler is the intended source of truth. Structure is complete. Pass 4 records a credential as installed only when direct names-only/provider evidence exists; installation is still not delivery or production activation.

Counts below are the Pass 3 names-only baseline and include Doppler metadata. Pass 4 added Explore&Earn Resend/Stripe names and AutomatedEmpires/Lake & Pine/ORAN Sentry DSN/org/project identifiers, so the old counts are retained only as history; rerun names-only counts before parity work. No values or fingerprints are stored here.

| Venture | Doppler project | Pass 3 dev | Pass 3 stg | Pass 3 prd | Current Pass 4 state |
|---|---|---:|---:|---:|---|
| AutomatedEmpires | automatedempires | 3 | 3 | 3 | Baseline superseded: separate Sentry DSN/org/project identifiers installed write-only in all lanes; broader runtime values absent |
| Explore&Earn | explore-and-earn | 36 | 7 | 7 | Baseline counts superseded: scoped Resend key/From/Reply-To now span `dev`/`stg`/`prd`; twelve expected Stripe test names are verified in `dev`/`stg`. Clerk production remains absent; do not infer full lane parity |
| ORAN | oran | 3 | 3 | 3 | Baseline superseded: ORAN-only Sentry identifiers installed in all lanes; draft #58 head `6d5caf2…` has required checks green but zero deployments and broader runtime config pending a safe migration Preview |
| BidSpace | bidspace | 16 | 3 | 3 | Development populated; staging/production metadata only |
| Lake & Pine | lake-and-pine | 3 | 9 | 9 | Baseline superseded: own Sentry identifiers added all lanes; Vercel/Supabase configuration remains in staging/production; no Mapbox token |
| Sweepza | sweepza | 25 | 22 | 26 | Populated; all lanes still use dev Clerk. Resend absent/PostHog empty. Stripe lanes aligned; Sentry provider governance fixed, deployed health/event proof open |
| LogLoads | logloads | 22 | 11 | 18 | Canonical PR #6 final source `f280ef4…` merged to default `9c9e107…`; clean production `dpl_Xxr…8dPtF` is `READY`, but live Supabase/data/provider configs remain unchanged. Production Clerk absent; legacy same-team Resend access has no LogLoads sending domain |

Every listed project has dev, stg, and prd configs. Personal development configs created by Doppler are not production environments.

## Changes performed

- Created the missing AutomatedEmpires, ORAN, and Lake & Pine projects and their environment configs.
- Imported Lake & Pine's verified Vercel/Supabase values into Lake & Pine staging and production without displaying them.
- Corrected Explore&Earn's SENTRY_ORG in Doppler development and its matching Vercel development environment.
- Generated one names-and-purpose map per venture under ops/secrets.
- Compared redacted value fingerprints across projects to locate shared provider context without recording values.
- Confirmed that Pass 3-created Clerk resources and verified Resend DNS did not silently change Doppler. Provider existence is recorded separately from credential installation.
- Pass 4 installed the scoped Explore&Earn Resend key and explicit From/Reply-To in all three configs without displaying values, and verified the twelve-name Stripe test contract in `dev`/`stg`.
- Created separate Sentry projects for AutomatedEmpires, Lake & Pine, and ORAN and installed each venture's own DSN/org/project identifiers write-only into its `dev`/`stg`/`prd` configs. Vercel installation/runtime events are not claimed.

## Known migration gaps

| Gap | Why it remains | Required next action |
|---|---|---|
| Explore&Earn lanes are only partially converged | Resend is now present in all lanes and Stripe test names in `dev`/`stg`, but Clerk/data/full runtime parity remains incomplete; GitHub/Vercel legacy values may be write-only | Replace each remaining consumer with an authoritative venture-owned value through exact-SHA Preview; never bulk-copy `dev` |
| GitHub still holds five Explore&Earn repository secrets | Values cannot be read or compared, and deleting them could break workflows | Map each workflow consumer, replace it with a tested Doppler integration/token, then remove only confirmed-unused secrets |
| Sweepza populated configs are not fully production-safe | All lanes still use Clerk development; PostHog is empty; Resend names absent. Dedicated Stripe accounts/prices are verified in Vercel, but residual objects/config and Doppler parity remain | Configure dark Clerk after Preview; keep mail truthfully disabled under the no-upgrade decision; finish telemetry and verify Doppler/Vercel Stripe name parity |
| LogLoads production activation is incomplete | Canonical source/checks are merged and clean main production exists, but live Supabase migration, environment provenance, distributed rate limiting, provider activation, and functional rollback remain; legacy Resend is coupled | Prove live-shape upgrade and production rollback before live migration or Clerk activation. Keep mail deferred until an independent paid domain/team |
| Explore&Earn delivery and identity remain open | Scoped Resend is installed, but delivery/zero broad-key use is unproven; no production Clerk credentials are installed | Complete exact-SHA mail smoke, then revoke broad rollback only after zero use; configure Clerk through dark Preview |
| Vercel values outside Lake & Pine were not re-imported | The API returns write-only values and no safe authoritative replacement was available | Treat Vercel as legacy storage until each value is replaced and verified through Doppler |
| Doppler example-project is unexplained | It may be a template or dependency and contains sample-looking names | Confirm ownership and usage, then delete only with explicit approval |

## Hygiene rules

1. Add or rotate a secret in Doppler first.
2. Use a business-specific service token/integration for Vercel or CI; do not copy values across ventures.
3. Keep development, staging, and production values distinct even when variable names match.
4. Record names, purpose, owner, and rotation procedure only; never record values in Git or tickets.
5. Rotate only after the replacement is deployed and its dependent flows pass.
6. Review the venture-specific maps in ops/secrets before changing an environment.
