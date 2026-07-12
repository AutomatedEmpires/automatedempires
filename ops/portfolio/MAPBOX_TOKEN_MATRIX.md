# Mapbox Token Matrix

**Verified snapshot:** 2026-07-12 (Pass 5 provisioning safety gate)
**Temporary operating model:** One public token per application, shared across Doppler `dev`, `stg`, and `prd`. Environment-specific rotation is deferred until each application is live and stable.

## Security result

Founder-created venture-named tokens exist, but authenticated provider inspection classifies every one as a secret `sk` token. They are unrestricted, report zero usage, and must never be placed in `NEXT_PUBLIC_MAPBOX_TOKEN`, Vercel browser runtime configuration, source, reports, screenshots, or chat. No raw value or fingerprint was read or recorded.

No Pass 5 Mapbox credential was installed or synchronized. The existing unrestricted shared public token remains active only as rollback in the previously audited lanes. Replacement requires a public `pk` token per proven application consumer, followed by secure founder-to-Doppler placement and deployment verification.

Authenticated billing is pay-as-you-go with `$0` upcoming and January–July 2026 invoices. Token creation has no base cost and the first 50,000 Mapbox GL JS web loads per month are free. No monthly spending cap is configured/available, so staged activation must include usage monitoring. Invoice numbers are intentionally excluded.

## Placement table

| Venture | Doppler project / configs | Required variable | Vercel project / environments | Exact source consumer | Current shared-token state | Pass 5 state | Verification before replacement |
|---|---|---|---|---|---|---|---|
| Explore&Earn | `explore-and-earn` / `dev`, `stg`, `prd` | `NEXT_PUBLIC_MAPBOX_TOKEN` | `explore-and-earn` / Development, Preview, Production | `apps/web/components/map/MapView.tsx` | Shared public token remains in audited Doppler `dev` and Vercel Development/Production and remains rollback | Public replacement **blocked**; founder-created token is secret and cannot enter a browser variable | Confirm public `pk` class and minimum read scopes; allow actual localhost, Preview, `exploreandearn.com`, and `www` origins only; deploy exact-SHA Preview; smoke `/map`, styles, fonts, attribution, CSP, and rejected origins before Production |
| LogLoads | `logloads` / `dev`, `stg`, `prd` | `NEXT_PUBLIC_MAPBOX_TOKEN` | `logloads` / Development, Preview, Production | `apps/web/components/v3/RealMap.tsx` | Shared public token remains in audited `dev`/`prd`; keyless MapLibre/Carto fallback remains available | Public replacement **blocked**; no new value installed. `MAPBOX_ACCESS_TOKEN` is not a second boundary and must not receive the browser token | Confirm public token class, actual localhost/Preview/`logloads.com` origins, fallback, and provider selection; deploy Preview before any Production replacement |
| BidSpace | `bidspace` / `dev`, `stg`, `prd` | `NEXT_PUBLIC_MAPBOX_TOKEN` | `bidspace` / Development and Preview now; Production custom-domain restriction deferred | `apps/web/components/explore-map.tsx` | Shared public token remains in audited `dev` as rollback | Public replacement **blocked**; no custom domain exists. Use only exact local and current Vercel Preview/development origins when a public token is created | Prove current source/Preview, public token class, allowed local/exact Preview origins, and rejection elsewhere. Do not invent or authorize a production custom domain |
| Lake & Pine | `lake-and-pine` / `dev`, `stg`, `prd` if approved | `NEXT_PUBLIC_MAPBOX_TOKEN` | `lakeandpine` / Development, Preview, Production if approved | `apps/web/src/components/AreaMap.tsx` | No existing Mapbox value in Lake & Pine Doppler; branded SVG fallback remains current | Unexpected consumer newly confirmed; **requires founder decision** before a safe public replacement is created or installed. Available named token is secret and unusable | Preserve the fallback; if approved, confirm actual local, exact Preview, `lakeandpinecleaning.com`, and `www` origins before public-token placement; Preview-smoke before Production |
| ORAN | `oran` | None | `oran` | No Mapbox consumer; migration candidate uses Leaflet/OpenStreetMap | None | **Completed no-resource decision**; do not provision or install Mapbox | Recheck only if reviewed source intentionally adopts Mapbox and the civic privacy posture permits it |
| AutomatedEmpires / Sweepza | Their own projects | None | Their own projects | No Mapbox consumer verified | None | **Completed no-resource decision** | Do not provision speculative tokens |

## Token and rollback rules

- `NEXT_PUBLIC_MAPBOX_TOKEN` is intentionally browser-visible and therefore accepts only a public `pk` token with the minimum demonstrated read scopes. A secret `sk` token is a hard no-go.
- One application token may cover that application's actual dev/stg/prd origins during this temporary phase; it must never be shared across applications.
- Restrictions must enumerate actual origins. Do not authorize a broad hosting-provider domain, invent a domain, or use wildcard syntax unsupported by Mapbox.
- Keep the old shared public token until every active consumer has a verified replacement or tested no-token fallback, exact-SHA Preview/Production checks pass, provider usage is quiet, and rollback is documented.
- Creating a token, documenting a placement, or observing zero usage is not equivalent to installation or runtime verification.

See `MAPBOX_TOKEN_SEPARATION_PLAN.md` for the secure handoff and execution sequence.
