# Lake & Pine known limitations

| Limitation | Classification | Operational effect |
|---|---|---|
| PR #1 merged the application/pinned CI/case repair as current `main` `1b6a877bc054a9239c2a430aaf668996de8a0302`; clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` is `READY` | **Source/main provenance fixed and verified** | Old prototype/dirty artifacts are historical, not current authority |
| Doppler dev is metadata-only; stg/prd contain the verified current runtime contract | **Verified current** | Non-production parity and rotation ownership are incomplete |
| Legacy READY production-target deployments came from dirty `122dd312` | **Historical rollback-only evidence** | Do not use the dirty artifact as current production truth; prefer clean `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` rollback |
| No application tests exist in the pinned `validate` workflow | **Explicit accepted gap** | Frozen install/lint/typecheck/build still pass; add tests as product behavior stabilizes |
| Supabase has 14 public tables with RLS/policies and two remote migrations; backup/recovery and environment separation remain unverified | **Verified current / owner gap** | Preserve the database; do not reset or seed without review |
| No committed environment-variable contract exists | **Observed in repository** | Configuration names must be designed with the application |
| `lakeandpinecleaning.com` is owned and its full GoDaddy zone is verified, but functional rollback/domain smoke remains | **Domain blocker completed / production-risk gate** | No purchase is needed; web/auth/email cutover waits only for functional proof |
| Separate Sentry project/governance and Doppler bindings exist; Vercel install/event does not | **Provider fixed / runtime proof open** | Install without display through an authorized Vercel surface and verify a controlled event |
| Clerk, Stripe, Resend, and PostHog are requirements/plans, not verified live resources | **Target state** | Do not create or reuse resources blindly |
| Operational slug and provider/repository spelling differ | **Verified current** | Automation must map `lake-and-pine` ↔ `lakeandpine` explicitly |
| Booking, customer dashboard, billing, and AI concierge are prototype states without a confirmed backend | **Observed in repository** | Do not represent them as operational services |

The safest next step is to complete functional provider-host/rollback smoke on clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk`, then plan a reversible `lakeandpinecleaning.com` web-record cutover while preserving mail/DMARC.
