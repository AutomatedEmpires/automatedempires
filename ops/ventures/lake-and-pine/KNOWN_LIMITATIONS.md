# Lake & Pine known limitations

| Limitation | Classification | Operational effect |
|---|---|---|
| Current source includes PRs #2/#3 through `e65b3b6`; clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` is last-deployed evidence from `1b6a877bc054a9239c2a430aaf668996de8a0302` | **Current/deployed source split verified** | Revalidate current source before rollout; old prototype/dirty artifacts remain historical |
| Doppler dev is metadata-only; stg/prd contain the verified current runtime contract | **Verified current** | Non-production parity and rotation ownership are incomplete |
| Legacy READY production-target deployments came from dirty `122dd312` | **Historical rollback-only evidence** | Do not use the dirty artifact as current production truth; prefer clean `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` rollback |
| The pinned `validate` workflow does not invoke the later application/regression/smoke suites | **CI coverage gap; tests exist** | PRs #2/#3 add DOM-XSS regression and disposable-PostgreSQL migration/RLS/booking/dashboard smoke; wire or separately require them before Production acceptance |
| Supabase has 14 public tables with RLS/policies and two remote migrations; backup/recovery and environment separation remain unverified | **Verified current / owner gap** | Preserve the database; do not reset or seed without review |
| No committed environment-variable contract exists | **Observed in repository** | Configuration names must be designed with the application |
| `lakeandpinecleaning.com` is owned and its full GoDaddy zone is verified, but functional rollback/domain smoke remains | **Domain blocker completed / production-risk gate** | No purchase is needed; web/auth/email cutover waits only for functional proof |
| Separate Sentry project/governance and Doppler bindings exist; Vercel install/event does not | **Provider fixed / runtime proof open** | Install without display through an authorized Vercel surface and verify a controlled event |
| Clerk, Resend, and PostHog are possible Phase 1 consumers; Stripe is Phase 2; none is a verified live resource | **Product phase / target state** | Implement booking/planning slices with only reviewed providers; do not create or reuse resources blindly, and do not pull payments into Phase 1 |
| Operational slug and provider/repository spelling differ | **Verified current** | Automation must map `lake-and-pine` ↔ `lakeandpine` explicitly |
| Disposable-PostgreSQL proof now covers booking persistence and dashboard fixtures, but capacity-backed scheduling, broader Phase 1 workflows, and Production backend authority remain unproven; billing remains prototype/Phase 2 | **Partial backend proof / Production implementation gap** | Use the disposable proof as evidence, not a live-service claim; complete the remaining Phase 1 slices and capacity/Production acceptance before representing them as operational |

The safest next step is to complete functional provider-host/rollback smoke on clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk`, then plan a reversible `lakeandpinecleaning.com` web-record cutover while preserving mail/DMARC.

Product scope is not a blocker: Lake & Pine is an intelligent cleaning/local-service operating system. The remaining decisions are Phase 1 implementation, operations, data, communication, and rollout details.
