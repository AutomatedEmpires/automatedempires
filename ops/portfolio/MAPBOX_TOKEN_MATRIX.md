# Mapbox Token Matrix

**Verified snapshot:** 2026-07-12 (Pass 5 executed)
**Operating model:** One venture-specific public token per application, shared across that application's `dev`, `stg`, and `prd` lanes for now. Environment-specific rotation remains a later production-hardening option.

## Secure execution result

The secure outside-repository handoff used `C:\Users\autom\.codex\mapbox keys.txt`. Placement scripts did not emit the secret handoff values. After verification, the 764-byte file was best-effort overwritten, truncated, and removed. No raw Mapbox credential is stored in source, Markdown, reports, env files, or committed artifacts. Public `pk` values are client-visible by design but intentionally omitted here.

Six labeled secret authorizers were validated. Explore&Earn, LogLoads, BidSpace, and Lake & Pine authorizers were used only server-side to mint separate public `pk` browser tokens. ORAN and Sweepza authorizers were intentionally unused, and no Mapbox environment variable was added for either venture. No authorizer was placed in application runtime.

The four public tokens have exactly `styles:read` and `fonts:read`. Their restriction counts are Explore&Earn 7, LogLoads 6, BidSpace 3, and Lake & Pine 7. Each allowlist includes `http://localhost:3000`, the venture's real owned/custom/project origins where applicable, and the exact fresh Preview origin. BidSpace intentionally has no production/custom-domain origin.

| Venture | Exact fresh Preview origin |
|---|---|
| Explore&Earn | `https://explore-and-earn-ofv76eqj6-jackson-coles-projects-dd76106c.vercel.app` |
| LogLoads | `https://logloads-257awwwbb-jackson-coles-projects-dd76106c.vercel.app` |
| BidSpace | `https://bidspace-9uk5bxzx5-jackson-coles-projects-dd76106c.vercel.app` |
| Lake & Pine | `https://lakeandpine-ewzqk7zxj-jackson-coles-projects-dd76106c.vercel.app` |

## Installation and verification matrix

| Venture | Source consumer | Public-token metadata | Doppler | Vercel | Fresh Preview at exact main SHA | Origin enforcement | Exact-source local Chrome | Remaining gate |
|---|---|---|---|---|---|---|---|---|
| Explore&Earn | `apps/web/components/map/MapView.tsx` | Public `pk`; 2 scopes; 7 restrictions | `NEXT_PUBLIC_MAPBOX_TOKEN` populated/masked in `dev`, `stg`, `prd`; one token across lanes | Encrypted Development, Preview, Production records. Legacy duplicate removed only after exact replacement | `READY` at `b616b9e10fa434422dd34442f6cb24194cf8d5ec`; route reaches a pre-existing app error boundary before map initialization | HTTP `Referer` probes: Preview/localhost `200`; unrelated `403` | Canvas `1`; fallback absent; 5 mapped items | Repair/verify the Preview application error path, then production-deploy only with a separate gate |
| LogLoads | `apps/web/components/v3/RealMap.tsx` | Public `pk`; 2 scopes; 6 restrictions | Populated/masked in `dev`, `stg`, `prd`; one token across lanes | Encrypted Development, Preview, Production records | `READY` at `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`; route reaches a pre-existing app error boundary before map initialization | HTTP `Referer` probes: Preview/localhost `200`; unrelated `403` | Provider `mapbox`; canvas `1`; MapLibre `0` | Repair/verify the Preview application error path; retain fallback and production/data gates |
| BidSpace | `apps/web/components/explore-map.tsx` | Public `pk`; 2 scopes; 3 restrictions; no production/custom-domain origin | Populated/masked in `dev`, `stg`, `prd`; one token across lanes | Encrypted Development and Preview only; no Production record | `READY` at `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8`; protected Preview was client-side blocked and no access bypass was created | HTTP `Referer` probes: Preview/localhost `200`; unrelated `403` | Canvas `1`; missing-token fallback absent | Obtain an authorized protected-Preview verification path; production remains deferred until an owned domain exists |
| Lake & Pine | `apps/web/src/components/AreaMap.tsx` | Public `pk`; 2 scopes; 7 restrictions. Founder handoff explicitly directed placement, resolving the prior decision gate | Populated/masked in `dev`, `stg`, `prd`; one token across lanes | Encrypted Development, Preview, Production records | `READY` at `1b6a877bc054a9239c2a430aaf668996de8a0302`; fresh protected Preview passes directly | HTTP `Referer` probes: Preview/localhost `200`; unrelated `403` | Canvas `1`; SVG fallback `0` | Production remains unchanged; promote only through the normal production gate |
| ORAN | No Mapbox consumer; Leaflet/OpenStreetMap | Secret authorizer validated but intentionally unused; no public token minted | Absent | Absent | Not applicable | Not applicable | Not applicable | **Completed no-resource decision**; preserve civic privacy posture |
| Sweepza | No Mapbox consumer | Secret authorizer validated but intentionally unused; no public token minted | Absent | Absent | Not applicable | Not applicable | Not applicable | **Completed no-resource decision** |
| AutomatedEmpires | No Mapbox consumer | No runtime resource required | Absent | Absent | Not applicable | Not applicable | Not applicable | **Completed no-resource decision** |

All fresh builds were Preview deployments. Latest Production deployment IDs, URLs, and SHAs remained unchanged; no Production deployment was triggered.

## Rollback and cost

- The provider's old/shared public token remains active as rollback. No secret authorizer, new public replacement, or old/shared provider token was revoked.
- The old shared value was replaced in the four intended application environments. E&E's overlapping legacy record was removed only after its exact replacement was verified.
- Authenticated billing is pay-as-you-go. Token creation has no base cost, the first 50,000 Mapbox GL JS web loads/month are free, the upcoming and January–July 2026 invoices are `$0`, and no monthly spending cap exists. Pass 5 added `$0` recurring spend.
- The E&E/LogLoads Preview failures are application error-boundary gates, not token failures: origin enforcement and isolated exact-source Chrome runtimes are green.
- A `READY` build, environment presence, or local map render is not a Production deployment. Preserve the old/shared rollback until the remaining Preview gates and a separately approved Production rollout pass.

See `MAPBOX_TOKEN_SEPARATION_PLAN.md` for the completed handoff and remaining promotion sequence.
