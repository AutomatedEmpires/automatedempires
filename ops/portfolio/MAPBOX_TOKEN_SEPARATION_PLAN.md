# Mapbox Token Separation Plan

**Prepared/executed:** 2026-07-12
**Operating model:** One public token per application across its `dev`, `stg`, and `prd` lanes for now. Per-environment rotation is deferred.

## Completed secure handoff

The approved outside-repository handoff file was `C:\Users\autom\.codex\mapbox keys.txt`. It contained six labeled secret authorizers. Placement scripts did not emit those secret values, and no authorizer entered browser runtime. Four authorizers were used only server-side to mint venture-specific public tokens; ORAN and Sweepza authorizers were intentionally unused.

After presence and installation verification, the 764-byte handoff file was best-effort overwritten, truncated, and removed. No raw Mapbox credential is stored in source, Markdown, reports, env files, or committed artifacts. Public `pk` values remain intentionally omitted from this documentation.

## Final public-token inventory

| Application | Public scopes | Restriction count | Exact fresh Preview origin | Other allowed-origin categories | Runtime placement |
|---|---|---:|---|---|---|
| Explore&Earn | `styles:read`, `fonts:read` | 7 | `https://explore-and-earn-ofv76eqj6-jackson-coles-projects-dd76106c.vercel.app` | `http://localhost:3000`, real `exploreandearn.com`/`www` and current project origins | Doppler `dev`/`stg`/`prd`; Vercel Development/Preview/Production |
| LogLoads | `styles:read`, `fonts:read` | 6 | `https://logloads-257awwwbb-jackson-coles-projects-dd76106c.vercel.app` | `http://localhost:3000` and current LogLoads Vercel/project origins; no custom-domain origin | Doppler `dev`/`stg`/`prd`; Vercel Development/Preview/Production |
| BidSpace | `styles:read`, `fonts:read` | 3 | `https://bidspace-9uk5bxzx5-jackson-coles-projects-dd76106c.vercel.app` | `http://localhost:3000` and current BidSpace project origin; no production/custom-domain origin | Doppler `dev`/`stg`/`prd`; Vercel Development/Preview only |
| Lake & Pine | `styles:read`, `fonts:read` | 7 | `https://lakeandpine-ewzqk7zxj-jackson-coles-projects-dd76106c.vercel.app` | `http://localhost:3000`, real `lakeandpinecleaning.com`/`www` and current project origins | Doppler `dev`/`stg`/`prd`; Vercel Development/Preview/Production |

The labeled Lake & Pine handoff plus direction to place it where it belongs resolves the prior founder-decision gate. ORAN and Sweepza have no public token and no Mapbox environment variable.

## Completed verification

1. Each public token was installed as masked `NEXT_PUBLIC_MAPBOX_TOKEN` in the matching Doppler `dev`, `stg`, and `prd` configs.
2. Exact encrypted Vercel records were created for Development/Preview/Production, except BidSpace, which intentionally has Development/Preview only.
3. E&E's legacy overlapping record was removed only after exact replacement. The provider old/shared public token remains active rollback.
4. Fresh exact-main Preview builds are `READY` at E&E `b616b9e…`, LogLoads `9c9e107…`, BidSpace `2fe90a3…`, and Lake & Pine `1b6a877…`. No Production deployment was triggered.
5. For every token, HTTP probes with `Referer` set to its exact Preview origin or localhost returned billable-tileset metadata `200`; an unrelated `Referer` returned `403`.
6. Exact-source real-Chrome local runtimes rendered Mapbox for all four applications. Lake's fresh protected Preview also passed directly.

## Remaining promotion gates

- Explore&Earn and LogLoads fresh Preview routes reach pre-existing application error boundaries before map initialization. Their tokens are independently proven by origin enforcement and isolated exact-source runtime, but the Preview application paths must be repaired and re-smoked.
- BidSpace's protected Preview was blocked client-side. No access bypass was created; obtain an authorized verification path. Production/custom-domain Mapbox remains deferred with the domain.
- Lake & Pine Preview and local runtime are green; its Production deployment still requires the ordinary production gate.
- Latest Production IDs, URLs, and SHAs remain unchanged for all four ventures.

## Rollback and cost controls

- Do not revoke any authorizer or replacement token as part of this pass. Keep the old/shared public token active until the remaining Preview paths and separately authorized Production rollout are verified.
- Token creation has no base cost; the first 50,000 GL JS web loads/month are free. The account is pay-as-you-go with `$0` upcoming/January–July 2026 invoices and no spending cap.
- Review load usage and the upcoming invoice after staged Production activation. Pass 5 increased recurring cost by `$0`.
