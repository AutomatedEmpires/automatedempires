# Doppler Portfolio Secret Map

**Verified snapshot:** 2026-07-10
**Policy:** Doppler is the intended source of truth. Structure is complete; value migration is not yet complete.

Counts below are names-only provider results and include Doppler-managed metadata names. No secret values or fingerprints are stored in this repository.

| Venture | Doppler project | dev names | stg names | prd names | Current state |
|---|---|---:|---:|---:|---|
| AutomatedEmpires | automatedempires | 3 | 3 | 3 | Structure created; metadata only |
| Explore&Earn | explore-and-earn | 32 | 3 | 3 | Development populated; staging/production metadata only |
| ORAN | oran | 3 | 3 | 3 | Structure created; metadata only pending the runtime migration decision |
| BidSpace | bidspace | 16 | 3 | 3 | Development populated; staging/production metadata only |
| Lake & Pine | lake-and-pine | 3 | 9 | 9 | Verified Vercel/Supabase configuration imported to staging and production |
| Sweepza | sweepza | 25 | 22 | 26 | Populated, but identity/payment/telemetry mappings contain known gaps |
| LogLoads | logloads | 18 | 7 | 14 | Partially populated; production lacks Clerk and runtime parity |

Every listed project has dev, stg, and prd configs. Personal development configs created by Doppler are not production environments.

## Changes performed

- Created the missing AutomatedEmpires, ORAN, and Lake & Pine projects and their environment configs.
- Imported Lake & Pine's verified Vercel/Supabase values into Lake & Pine staging and production without displaying them.
- Corrected Explore&Earn's SENTRY_ORG in Doppler development and its matching Vercel development environment.
- Generated one names-and-purpose map per venture under ops/secrets.
- Compared redacted value fingerprints across projects to locate shared provider context without recording values.

## Known migration gaps

| Gap | Why it remains | Required next action |
|---|---|---|
| Explore&Earn staging and production contain only metadata | Vercel production values and GitHub secret values are write-only; the database password cannot be recovered safely | Provision or retrieve authoritative venture-owned replacements with founder access, test in preview, then inject through Doppler |
| GitHub still holds five Explore&Earn repository secrets | Values cannot be read or compared, and deleting them could break workflows | Map each workflow consumer, replace it with a tested Doppler integration/token, then remove only confirmed-unused secrets |
| Sweepza populated configs are not fully production-safe | Production shares a Clerk development instance and a live Stripe account with Explore&Earn; health reports missing providers | Create separated provider resources first, then update Doppler and redeploy |
| LogLoads production is incomplete | Production runtime is in error, production Clerk is absent, and Resend is account-coupled | Repair the build and create separated provider resources before completing prd |
| Vercel values outside Lake & Pine were not re-imported | The API returns write-only values and no safe authoritative replacement was available | Treat Vercel as legacy storage until each value is replaced and verified through Doppler |
| Doppler example-project is unexplained | It may be a template or dependency and contains sample-looking names | Confirm ownership and usage, then delete only with explicit approval |

## Hygiene rules

1. Add or rotate a secret in Doppler first.
2. Use a business-specific service token/integration for Vercel or CI; do not copy values across ventures.
3. Keep development, staging, and production values distinct even when variable names match.
4. Record names, purpose, owner, and rotation procedure only; never record values in Git or tickets.
5. Rotate only after the replacement is deployed and its dependent flows pass.
6. Review the venture-specific maps in ops/secrets before changing an environment.
