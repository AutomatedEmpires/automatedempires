# Lake & Pine known limitations

| Limitation | Classification | Operational effect |
|---|---|---|
| `main` `0b7116f72878ba3f67e3ff9948a11da83cc5bab7` is prototype-only and lacks configured root `apps/web`; candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` is five commits ahead | **Verified current** | A main-triggered deployment can fail or replace the application; production cannot be reproduced from `main` today |
| Doppler dev is metadata-only; stg/prd contain the verified current runtime contract | **Verified current** | Non-production parity and rotation ownership are incomplete |
| Vercel deployment `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` is healthy, but was produced from a dirty feature snapshot and is not proven equal to the current clean branch head | **Verified current** | It can serve as temporary rollback evidence only; its source cannot be rebuilt exactly from committed Git evidence |
| No GitHub Actions workflow exists on the inspected default branch or candidate branch | **Verified current** | Source convergence has no automated frozen-install/lint/typecheck/build gate |
| Supabase has 14 public tables with RLS/policies and two remote migrations; backup/recovery and environment separation remain unverified | **Verified current / owner gap** | Preserve the database; do not reset or seed without review |
| No committed environment-variable contract exists | **Observed in repository** | Configuration names must be designed with the application |
| `lakepinecleaning.com` is unregistered | **Verified missing / founder gate** | Owned-domain web, email, auth, and transfer work cannot proceed |
| Clerk, Stripe, Resend, PostHog, and Sentry are production requirements/plans, not verified live resources | **Target state** | Do not create or reuse resources blindly |
| Operational slug and provider/repository spelling differ | **Verified current** | Automation must map `lake-and-pine` ↔ `lakeandpine` explicitly |
| Booking, customer dashboard, billing, and AI concierge are prototype states without a confirmed backend | **Observed in repository** | Do not represent them as operational services |

The safest next step is to preserve the current deployment metadata, review/merge candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a`, add CI and the environment contract, and prove an exact-SHA Preview plus `main` Production before purchasing or attaching a domain.
