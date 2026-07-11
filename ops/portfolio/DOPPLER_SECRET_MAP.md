# Doppler Portfolio Secret Map

**Verified snapshot:** 2026-07-10
**Policy:** Doppler is the intended source of truth. Structure is complete; Pass 3 provider resources have not been represented as runtime-ready unless replacement credentials were safely installed and tested.

Counts below are names-only provider results and include Doppler-managed metadata names. No secret values or fingerprints are stored in this repository.

| Venture | Doppler project | dev names | stg names | prd names | Current state |
|---|---|---:|---:|---:|---|
| AutomatedEmpires | automatedempires | 3 | 3 | 3 | Structure created; metadata only |
| Explore&Earn | explore-and-earn | 32 | 3 | 3 | Development populated; staging/production metadata only. Dark production Clerk and verified Resend domain exist, but no production Clerk or scoped Resend credential is installed |
| ORAN | oran | 3 | 3 | 3 | Structure created; metadata only pending the runtime migration decision |
| BidSpace | bidspace | 16 | 3 | 3 | Development populated; staging/production metadata only |
| Lake & Pine | lake-and-pine | 3 | 9 | 9 | Vercel/Supabase configuration imported to staging/production; no Mapbox or newly prepared CI/runtime value was added |
| Sweepza | sweepza | 25 | 22 | 26 | Populated, but all lanes still use dev Clerk identity; Resend key/from names are absent; PostHog key is empty |
| LogLoads | logloads | 18 | 7 | 14 | Partially populated; production Clerk absent. Broad Resend key exists in `dev`/`prd`, is absent in `stg`, and has no explicit sender/domain |

Every listed project has dev, stg, and prd configs. Personal development configs created by Doppler are not production environments.

## Changes performed

- Created the missing AutomatedEmpires, ORAN, and Lake & Pine projects and their environment configs.
- Imported Lake & Pine's verified Vercel/Supabase values into Lake & Pine staging and production without displaying them.
- Corrected Explore&Earn's SENTRY_ORG in Doppler development and its matching Vercel development environment.
- Generated one names-and-purpose map per venture under ops/secrets.
- Compared redacted value fingerprints across projects to locate shared provider context without recording values.
- Confirmed that Pass 3-created Clerk resources and verified Resend DNS did not silently change Doppler. Provider existence is recorded separately from credential installation.

## Known migration gaps

| Gap | Why it remains | Required next action |
|---|---|---|
| Explore&Earn staging and production contain only metadata | Vercel production values and GitHub secret values are write-only; the database password cannot be recovered safely | Provision or retrieve authoritative venture-owned replacements with founder access, test in preview, then inject through Doppler |
| GitHub still holds five Explore&Earn repository secrets | Values cannot be read or compared, and deleting them could break workflows | Map each workflow consumer, replace it with a tested Doppler integration/token, then remove only confirmed-unused secrets |
| Sweepza populated configs are not fully production-safe | `dev`/`stg`/`prd` still use Clerk development; the live Stripe account is mixed; PostHog is empty; Resend names are absent although real code sends approval/winner mail | Configure the dark production Clerk only after Preview proof; decide/fund independent Resend; deploy local email-truthfulness fix before activating mail; provision telemetry separately |
| LogLoads production is incomplete | Runtime architecture/source is unresolved; dark production Clerk is not installed; broad Resend access is account-coupled | Choose hosting, converge source, then configure production Clerk and an independent mail team/domain before completing `prd` |
| Explore&Earn replacement credentials are pending | Resend domain and Clerk DNS/SSL are verified, but current Resend key remains broad and no production Clerk credentials are installed | Create/install through Doppler only after provider config and dark Preview gates; revoke old keys only after smoke |
| Vercel values outside Lake & Pine were not re-imported | The API returns write-only values and no safe authoritative replacement was available | Treat Vercel as legacy storage until each value is replaced and verified through Doppler |
| Doppler example-project is unexplained | It may be a template or dependency and contains sample-looking names | Confirm ownership and usage, then delete only with explicit approval |

## Hygiene rules

1. Add or rotate a secret in Doppler first.
2. Use a business-specific service token/integration for Vercel or CI; do not copy values across ventures.
3. Keep development, staging, and production values distinct even when variable names match.
4. Record names, purpose, owner, and rotation procedure only; never record values in Git or tickets.
5. Rotate only after the replacement is deployed and its dependent flows pass.
6. Review the venture-specific maps in ops/secrets before changing an environment.
