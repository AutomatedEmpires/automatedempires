# ORAN environment map

## Current and target lanes

| Lane | Doppler | Runtime | Data | Status |
|---|---|---|---|---|
| Development | `oran` / `dev`; own Sentry DSN/org/project identifiers only | Draft PR #58 exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; zero deployments | Dedicated Supabase | Required core checks and Sentry governance green; broader runtime config absent |
| Staging | `oran` / `stg`; own Sentry identifiers only | Empty Vercel shell; exact-SHA prebuilt Preview required before merge | Same remote project appears to be the only discovered database | Blocked on runtime values, migration/schema strategy, and rollback |
| Production | `oran` / `prd`; own Sentry identifiers only | Public Azure address is broken; Vercel has zero deployments/domain | Supabase project exists, but deployed schema is not explained by its remote ledger | Not production-ready; no functional rollback target |

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
| Required contract gaps | Safe scoped Preview data/credential lane; `CRON_SECRET`/`INTERNAL_API_KEY`; canonical `NEXT_PUBLIC_SITE_URL`; Clerk/Supabase mapping; Vercel Sentry binding/runtime event; reconciled schema authority |

Pass 4 hardening lineage `d58ea0…` fail-closes the dangerous database-migration path, removes stale Azure assumptions, and keeps credentialed Preview deployment separate from validation. It is published in draft PR #58 at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`. Required Build, Lint, Test, Type Check, Security Audit, and Runtime Readiness are green; Codecov patch, Visual Regression, and runbook freshness are failing ancillary checks. Vercel still has zero deployments. No database write occurred.

Pass 4 also created a separate ORAN Sentry project, enabled ownership/one alert/scrubbers/IP scrubbing, and installed ORAN-only DSN/org/project identifiers into Doppler `dev`/`stg`/`prd` without display. Traces remain `0`; Vercel installation and a controlled event wait for the safe Preview lane.

## Preview and rollback contract

- Keep PR #58 draft while establishing a scoped read-only/disposable Preview data and credential lane; then run exact-SHA Preview without attaching the domain.
- Verify pages, Clerk redirects, data read/write boundaries, maps/CSP, mail behavior, Sentry/logs, and cron behavior. Cron handlers already fail closed in production; prove unauthorized `401`, missing internal configuration `503`, and approved scheduled execution.
- Before DNS, produce and retain a production-configured Vercel artifact on the provider hostname and record deployment ID, SHA, aliases, error baseline, and rollback owner.
- Current Azure A `20.115.232.12` returns 404/invalid TLS. A functional rollback therefore requires a repaired/tested Azure target or a second verified Vercel deployment; restoring broken DNS alone is insufficient.

## Database posture

The healthy Supabase project has 97 public tables. RLS is enabled on 96 application tables, roughly 90 with no policies. Repository has 53 migrations while managed ledger exposes one entry. Reconcile/backup before any Preview write or cutover.

Predecessor `5ec3561…` passed install, lint, typecheck, runtime/workflow, 3,753 tests, 149-page production build, and production audit. At exact PR head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`, all required core checks are green; the three named ancillary checks remain red. This is source validation, not provider deployment evidence.
