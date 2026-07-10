# Supabase Project Matrix

**Verified snapshot:** 2026-07-10

Supabase project references are non-secret identifiers. URLs, anon keys, service-role keys, database credentials, and secret fingerprints are intentionally excluded.

## Current projects

| Venture | Supabase project ref | Region | Provider health | Current interpretation |
|---|---|---|---|---|
| AutomatedEmpires | — | — | Not applicable | No Supabase project exists and none is currently needed for the public studio site |
| Explore&Earn | `mamosbzcbigcclafhmmr` | `us-west-2` | Healthy | Dedicated venture project |
| ORAN | `tpatxospkuqvajusuryw` | `us-east-1` | Healthy | Dedicated venture project referenced by candidate `217cd962de1633321cae49327dbc089fc4ad7377`; remote migration history is not reconciled and blocks preview writes/cutover |
| BidSpace | `hnjjcgxflxlfsqslgxcv` | `us-west-1` | Healthy | Dedicated venture project |
| Lake & Pine | `fftnqsvxxsxcsiwvtmwr` | `us-west-1` | Healthy | Dedicated venture project; current Vercel binding was verified/imported, but source normalization from `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` must not include schema writes |
| Sweepza | `ojwhsntcpmoxnzisuomq` | `us-east-1` | Healthy | Dedicated venture project |
| LogLoads | `fdzohbiiyzgvjzfsjyxo` | `us-west-1` | Healthy | Dedicated venture project currently used as a snapshot mirror; process-local JSON state remains primary, so this project does not yet make the app stateless or Vercel-safe |

## Schema and security posture

| Venture | Public schema | RLS / policy observation | Storage / auth / functions | Migration observation |
|---|---|---|---|---|
| Explore&Earn | 45 public tables | RLS enabled on all; six tables have no policy and therefore require service-only/deny-all intent review | Three public media buckets; no auth users or edge functions observed | 79 remote ledger rows include legacy/current naming overlap; reconcile before writes |
| ORAN | 97 public tables, including the PostGIS system table | 96 application tables have RLS; roughly 90 have no policies | No buckets, auth users, or edge functions observed | One remote security-lockdown migration does not explain the deployed schema; reconcile before writes |
| BidSpace | 26 public tables, including the PostGIS system table | 25 application tables have RLS but no policies | No buckets, auth users, or edge functions observed | 13 remote migrations; Data API access is effectively deny-all unless service-role use is intentional |
| Lake & Pine | 14 public tables | RLS and policies observed on all | No buckets, auth users, or edge functions observed | Two remote migrations |
| Sweepza | 17 public tables | RLS and policies observed on all | No buckets, auth users, or edge functions observed | Eight remote migrations |
| LogLoads | 37 public tables, including the PostGIS system table | 36 application tables have RLS; `operating_state` has no policy | No buckets, auth users, or edge functions observed | Six remote migrations |
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
7. For LogLoads, do not treat the `operating_state` mirror as a canonical transactional data layer. Choose the single-node host or complete a reviewed async-database refactor before any Vercel production decision.
8. Record secret names and ownership in the venture's Doppler map only after the project-to-venture match is verified; never copy secret values into this matrix.
