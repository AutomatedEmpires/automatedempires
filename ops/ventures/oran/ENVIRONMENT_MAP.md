# ORAN environment map

## Current and target lanes

| Lane | Doppler | Runtime | Data | Status |
|---|---|---|---|---|
| Development | oran / dev, metadata only | Local branch/runtime | Dedicated Supabase project is referenced by migration work | Target mappings must be documented before population |
| Staging | oran / stg, metadata only | No canonical Vercel preview yet | Same remote project appears to be the only discovered database | Blocked on migration/schema strategy |
| Production | oran / prd, metadata only | Public Azure address is broken; empty Vercel shell is not connected | Supabase project exists, but deployed schema is not explained by its remote ledger | Not production-ready |

One database appears to serve the current ORAN data boundary. Separate dev/stg/prd database strategy is not established. Do not pretend that the three Doppler configs create three data environments.

## Vercel target contract

| Setting | Intended value/status |
|---|---|
| Project | oran |
| Framework / Node | Next.js / Node 24 |
| Root | repository root |
| Git connection | Deferred until migration branch merge |
| Production branch | main after merge |
| Domain | Deferred until preview and rollback verification |
| Required contract gaps | CRON_SECRET ownership; canonical NEXT_PUBLIC site variable; Supabase mapping; stale Azure CSP/docs |

The untracked deploy-vercel workflow in the developer checkout is not committed authority. It expects Vercel enablement and project/team/token configuration; review it before adding it to the repository.

## Database posture

The healthy Supabase project has 97 public tables including the PostGIS system table. RLS is enabled on 96 application tables, but roughly 90 have no policies. The remote migration ledger contains only one security-lockdown migration. Before any schema write or cutover, compare the committed migrations, remote schema, ledger, service-role consumers, and backup/restore path.
