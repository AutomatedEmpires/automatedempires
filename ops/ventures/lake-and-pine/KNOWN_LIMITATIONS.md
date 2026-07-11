# Lake & Pine known limitations

| Limitation | Classification | Operational effect |
|---|---|---|
| `main` `0b7116f72878ba3f67e3ff9948a11da83cc5bab7` is prototype-only and lacks configured root `apps/web`; candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` is five commits ahead | **Verified current** | A main-triggered deployment can fail or replace the application; production cannot be reproduced from `main` today |
| Doppler dev is metadata-only; stg/prd contain the verified current runtime contract | **Verified current** | Non-production parity and rotation ownership are incomplete |
| Two READY production-target deployments came from dirty `122dd312`; exact candidate `e1fe8f00…` is two commits newer | **Verified current** | Latest artifact is temporary rollback evidence only, not an exact reproducible release |
| Pinned CI and Windows case repair are committed locally as `a55ccff…` but unpushed | **Safely fixed locally / not published** | Checks pass, worktree clean; no PR/remote CI/Preview and no tests exist |
| Supabase has 14 public tables with RLS/policies and two remote migrations; backup/recovery and environment separation remain unverified | **Verified current / owner gap** | Preserve the database; do not reset or seed without review |
| No committed environment-variable contract exists | **Observed in repository** | Configuration names must be designed with the application |
| `lakeandpinecleaning.com` is owned and its full GoDaddy zone is verified, but it is not attached to a clean release | **Domain blocker completed / production-risk gate** | No purchase is needed; web/auth/email cutover still waits for clean source and rollback |
| Clerk, Stripe, Resend, PostHog, and Sentry are production requirements/plans, not verified live resources | **Target state** | Do not create or reuse resources blindly |
| Operational slug and provider/repository spelling differ | **Verified current** | Automation must map `lake-and-pine` ↔ `lakeandpine` explicitly |
| Booking, customer dashboard, billing, and AI concierge are prototype states without a confirmed backend | **Observed in repository** | Do not represent them as operational services |

The safest next step is to preserve current deployment metadata, review/push local commit `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c`, and prove an exact-SHA Preview plus clean `main` Production before attaching `lakeandpinecleaning.com`.
