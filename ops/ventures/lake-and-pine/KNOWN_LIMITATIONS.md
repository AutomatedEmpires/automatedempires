# Lake & Pine known limitations

| Limitation | Classification | Operational effect |
|---|---|---|
| Default branch is prototype-only while the ready production alias is a dirty redeploy from `feat/production-foundation` | **Verified current** | Production cannot be reproduced or transferred from `main` today |
| Doppler dev is metadata-only; stg/prd contain the verified current runtime contract | **Verified current** | Non-production parity and rotation ownership are incomplete |
| Vercel repo/main/root are configured and the alias is healthy, but its actual source branch/dirty state diverges | **Verified current** | A later automatic main deployment could replace the app unexpectedly |
| Supabase has 14 public tables with RLS/policies and two remote migrations; backup/recovery and environment separation remain unverified | **Verified current / owner gap** | Preserve the database; do not reset or seed without review |
| No committed environment-variable contract exists | **Observed in repository** | Configuration names must be designed with the application |
| `lakepinecleaning.com` is unregistered | **Verified missing / founder gate** | Owned-domain web, email, auth, and transfer work cannot proceed |
| Clerk, Stripe, Resend, PostHog, and Sentry are production requirements/plans, not verified live resources | **Target state** | Do not create or reuse resources blindly |
| Operational slug and provider/repository spelling differ | **Verified current** | Automation must map `lake-and-pine` ↔ `lakeandpine` explicitly |
| Booking, customer dashboard, billing, and AI concierge are prototype states without a confirmed backend | **Observed in repository** | Do not represent them as operational services |

The safest next step is to merge/reproduce the production-foundation app cleanly, add its environment contract, and prove a `main` preview/production deployment before purchasing/attaching a domain.
