# Supabase Project Matrix

**Verified snapshot:** 2026-07-10

This public matrix keeps only short project fingerprints. Full references/URLs, keys, credentials, and secret fingerprints are excluded.

## Current projects

| Venture | Supabase project ref | Region | Provider health | Current interpretation |
|---|---|---|---|---|
| AutomatedEmpires | — | — | Not applicable | No Supabase project exists and none is currently needed for the public studio site |
| Explore&Earn | `…lafhmmr` | `us-west-2` | Healthy | Dedicated venture project |
| ORAN | `…vajusuryw` | `us-east-1` | Healthy | Dedicated project; remote migration history unreconciled and blocks writes/cutover |
| BidSpace | `…fsqslgxcv` | `us-west-1` | Healthy | Dedicated venture project |
| Lake & Pine | `…siwvtmwr` | `us-west-1` | Healthy | Dedicated project; preserve binding during source normalization |
| Sweepza | `…nzisuomq` | `us-east-1` | Healthy | Dedicated venture project |
| LogLoads | `…zfsjyxo` | `us-west-1` | Healthy | Supabase-canonical PR #6 final source `f280ef4…` is merged to default `9c9e107…` and clean main production `dpl_Xxr…8dPtF` is `READY`; live Supabase/data/provider cutover did not occur |

## Schema and security posture

| Venture | Public schema | RLS / policy observation | Storage / auth / functions | Migration observation |
|---|---|---|---|---|
| Explore&Earn | 45 public tables | RLS enabled on all; six tables have no policy and therefore require service-only/deny-all intent review | Three public media buckets; no auth users or edge functions observed | 79 remote ledger rows include legacy/current naming overlap; reconcile before writes |
| ORAN | 97 public tables, including the PostGIS system table | 96 application tables have RLS; roughly 90 have no policies | No buckets, auth users, or edge functions observed | One remote security-lockdown migration does not explain the deployed schema; reconcile before writes |
| BidSpace | 26 public tables, including the PostGIS system table | 25 application tables have RLS but no policies | No buckets, auth users, or edge functions observed | 13 remote migrations; Data API access is effectively deny-all unless service-role use is intentional |
| Lake & Pine | 14 public tables | RLS and policies observed on all | No buckets, auth users, or edge functions observed | Two remote migrations |
| Sweepza | 17 public tables | RLS and policies observed on all | No buckets, auth users, or edge functions observed | Eight remote migrations |
| LogLoads | Live: 37 public tables including system table | Live mirror policy incomplete. Local candidate enables RLS and limits service-role operations to select/insert/update | No buckets, auth users, or edge functions observed | Six live migrations; candidate fresh PostgreSQL 17 reset passes, but no live migration occurred |
| AutomatedEmpires | None | Not applicable | Not applicable | Not applicable |

These are read-only Management API observations from 2026-07-10. A table with RLS and no policies denies ordinary Data API access; it may be deliberate for service-only tables, but intent must be confirmed.

## What health does and does not establish

`Healthy` confirms that the project was reachable and healthy in the provider inventory on the snapshot date. It does not by itself prove:

- that a repository's configured project URL points to this exact reference;
- that development, staging, and production are separated;
- that migrations match the deployed schema;
- that row-level security is complete;
- that storage buckets, auth configuration, functions, or webhooks are correctly scoped;
- that no stale keys remain in Vercel, GitHub, local files, or another secrets manager.

## Verification order

1. Compare each repository's configured Supabase host or project-ref metadata to the expected reference without recording credential values.
2. Identify which environment or environments each project serves; do not assume one healthy project represents `dev`, `stg`, and `prd` simultaneously.
3. Compare committed migrations to the remote migration history before any schema change.
4. Inventory RLS, storage buckets, auth providers, edge functions, database webhooks, and scheduled jobs.
5. For ORAN, reconcile committed migrations, the single-row remote migration ledger, and the existing 97-table schema before any cutover or schema write.
6. For Lake & Pine, preserve the verified Vercel/Supabase binding and validate migrations before seeding content or creating auth/payment dependencies.
7. For LogLoads, PR #6 final source `f280ef4…` passed canonical-state, PostgreSQL 17 reset, RLS/grant, unit/build, E2E, `verify`, `migrations`, and `dependency-review`, merged to default `9c9e107…`, and produced clean main production `dpl_Xxr…8dPtF`. Before live use: back up, prove upgrade against production shape, verify environment provenance/distributed rate limiting, and prove functional rollback; do not infer a live data cutover from deployment readiness.
8. Record secret names and ownership in the venture's Doppler map only after the project-to-venture match is verified; never copy secret values into this matrix.
