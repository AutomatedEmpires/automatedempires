# ORAN environment map

## Current and target lanes

| Lane | Doppler | Runtime | Data | Status |
|---|---|---|---|---|
| Development | `oran` / `dev`, metadata only | Candidate `217cd962de1633321cae49327dbc089fc4ad7377`; no approved deployed runtime | Dedicated Supabase project is referenced by migration work | CI/runtime contracts and safe local mappings must be documented before population |
| Staging | `oran` / `stg`, metadata only | Empty Vercel shell; exact-SHA prebuilt Preview required before merge | Same remote project appears to be the only discovered database | Blocked on values, migration/schema strategy, and CI correction |
| Production | `oran` / `prd`, metadata only | Public Azure address is broken; Vercel has no production artifact or domain | Supabase project exists, but deployed schema is not explained by its remote ledger | Not production-ready; no functional rollback target |

One database appears to serve the current ORAN data boundary. Separate dev/stg/prd database strategy is not established. Do not pretend that the three Doppler configs create three data environments.

## Vercel target contract

| Setting | Intended value/status |
|---|---|
| Project | oran |
| Framework / Node | Next.js / Node 24 |
| Root | repository root |
| Git connection | Deferred until candidate preview passes and migration branch is merged; connecting old `main` early could deploy Azure-oriented code |
| Production branch | main after merge |
| Domain | Deferred until preview and rollback verification |
| Required contract gaps | `CRON_SECRET` and `INTERNAL_API_KEY` ownership; canonical `NEXT_PUBLIC_SITE_URL`; Clerk/Supabase mapping; stale Azure CSP/runtime references; Node 20 CI versus Node 24 target |

The untracked deploy-vercel workflow is not committed authority. It deploys production from `main`, installs an unpinned Vercel CLI, and has no Preview/smoke/rollback stage. Existing CI still invokes removed `build:functions`, validates Azure Maps names, and runs Node 20. Correct both workflows before merge.

## Preview and rollback contract

- Build an exact-SHA Preview for `217cd962de1633321cae49327dbc089fc4ad7377` or an approved descendant with a pinned CLI and ORAN-owned `stg` configuration; do not deploy production or attach the custom domain.
- Verify pages, Clerk redirects, data read/write boundaries, maps/CSP, mail behavior, Sentry/logs, and cron behavior. Cron handlers already fail closed in production; prove unauthorized `401`, missing internal configuration `503`, and approved scheduled execution.
- Before DNS, produce and retain a production-configured Vercel artifact on the provider hostname and record deployment ID, SHA, aliases, error baseline, and rollback owner.
- Current Azure A `20.115.232.12` returns 404/invalid TLS. A functional rollback therefore requires a repaired/tested Azure target or a second verified Vercel deployment; restoring broken DNS alone is insufficient.

## Database posture

The healthy Supabase project has 97 public tables including the PostGIS system table. RLS is enabled on 96 application tables, but roughly 90 have no policies. The remote migration ledger contains only one security-lockdown migration. Before any schema write or cutover, compare the committed migrations, remote schema, ledger, service-role consumers, and backup/restore path.
