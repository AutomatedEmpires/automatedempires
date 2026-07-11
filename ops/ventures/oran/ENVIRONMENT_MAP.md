# ORAN environment map

## Current and target lanes

| Lane | Doppler | Runtime | Data | Status |
|---|---|---|---|---|
| Development | `oran` / `dev`, metadata only | Base `217cd962…`; isolated local remediation `5ec356195eb2bc13efc1e07c536a83a76bf036e7`; no deployed runtime | Dedicated Supabase | Local source checks pass; commit unpushed and config absent |
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

Local commit `5ec3561…` replaces the unsafe workflow with a Vercel CLI `55.0.0` exact-40-character-SHA Preview workflow, proves checkout identity, aligns CI on Node 24, removes deleted `build:functions`, and updates stale Azure Maps/NextAuth runtime names. It is local/unpushed and has not run in GitHub or Vercel.

## Preview and rollback contract

- Review/push `5ec356195eb2bc13efc1e07c536a83a76bf036e7`, install scoped Preview credentials/runtime vars, then run its exact-SHA Preview; do not attach domain.
- Verify pages, Clerk redirects, data read/write boundaries, maps/CSP, mail behavior, Sentry/logs, and cron behavior. Cron handlers already fail closed in production; prove unauthorized `401`, missing internal configuration `503`, and approved scheduled execution.
- Before DNS, produce and retain a production-configured Vercel artifact on the provider hostname and record deployment ID, SHA, aliases, error baseline, and rollback owner.
- Current Azure A `20.115.232.12` returns 404/invalid TLS. A functional rollback therefore requires a repaired/tested Azure target or a second verified Vercel deployment; restoring broken DNS alone is insufficient.

## Database posture

The healthy Supabase project has 97 public tables. RLS is enabled on 96 application tables, roughly 90 with no policies. Repository has 53 migrations while managed ledger exposes one entry. Reconcile/backup before any Preview write or cutover.

Local verification on `5ec3561…`: `npm ci`, lint, typecheck, runtime contract, workflow lint, 3,753 tests, 149-page production build, and production audit (zero vulnerabilities) pass. This is source validation, not provider deployment evidence.
