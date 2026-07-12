# Mapbox Token Separation Plan

**Prepared:** 2026-07-12
**Policy correction:** Use one public token per application across `dev`, `stg`, and `prd` for now. Separate per-environment tokens are a later production-hardening rotation, not a Pass 5 requirement.

## Execution state

Source inspection confirms Mapbox browser consumers in Explore&Earn, LogLoads, BidSpace, and Lake & Pine. ORAN uses Leaflet/OpenStreetMap and has no Mapbox consumer. AutomatedEmpires and Sweepza also have no proven consumer.

Founder-created named tokens were inspected without displaying their values. Every available named token is a secret `sk` token, unrestricted, and at zero usage. A secret token cannot be placed in the browser-visible `NEXT_PUBLIC_MAPBOX_TOKEN` variable, so installation and Vercel synchronization were safely stopped. No token was changed, copied, printed, installed, or revoked.

Authenticated cost evidence is green for creation: the account is pay-as-you-go, token creation has no base cost, the first 50,000 GL JS web loads/month are free, and the upcoming plus January–July 2026 invoices are `$0`. There is no monthly spending cap, so usage monitoring remains an activation control rather than a payment blocker.

## Approved and conditional target inventory

| Application | Required replacement | Doppler destination | Vercel destination | Current gate |
|---|---|---|---|---|
| Explore&Earn | One venture-specific public `pk` token | `explore-and-earn` / `dev`, `stg`, `prd` as `NEXT_PUBLIC_MAPBOX_TOKEN` | `explore-and-earn` / Development, Preview, Production | **Blocked by secure public-token creation/handoff and Preview proof** |
| LogLoads | One venture-specific public `pk` token | `logloads` / `dev`, `stg`, `prd` as `NEXT_PUBLIC_MAPBOX_TOKEN` | `logloads` / Development, Preview, Production | **Blocked by secure public-token creation/handoff and production-risk proof** |
| BidSpace | One venture-specific public `pk` token | `bidspace` / `dev`, `stg`, `prd` as `NEXT_PUBLIC_MAPBOX_TOKEN` | `bidspace` / Development and Preview; Production custom-domain restriction deferred | **Blocked by secure public-token creation/handoff**; production custom-domain restriction **blocked by missing domain** |
| Lake & Pine | One venture-specific public `pk` token only if the founder approves this unexpected consumer | `lake-and-pine` / `dev`, `stg`, `prd` as `NEXT_PUBLIC_MAPBOX_TOKEN` if approved | `lakeandpine` / Development, Preview, Production if approved | **Requires founder decision**, then secure public-token creation/handoff and Preview proof |

Do not populate Explore&Earn or LogLoads `MAPBOX_ACCESS_TOKEN` with these public browser tokens. Current source establishes no required server-side Mapbox credential; LogLoads' legacy server-shaped value duplicates the shared public token.

## Secure handoff

Preferred method:

1. The founder creates one minimum-scope public `pk` token for Explore&Earn, LogLoads, and BidSpace—and for Lake & Pine only if separately approved—then pastes each value directly into that application's Doppler `dev`, `stg`, and `prd` configs under `NEXT_PUBLIC_MAPBOX_TOKEN`.
2. The operator verifies only name presence, configured/non-empty state, token class through a non-disclosing check, and venture/config coverage.
3. Vercel receives the value through the approved Doppler synchronization path only after exact origins are confirmed.

Fallback method:

1. Use the approved temporary handoff file outside every repository.
2. Read it once, write values without terminal echo, verify presence/class only, then securely remove the handoff file.
3. Never record raw values or fingerprints in Git, chat, reports, screenshots, shell history, or deployment logs.

No secure handoff occurred in this pass because the available values were the wrong token class.

## Safe execution

1. Create public `pk` replacements with only scopes demonstrated by Mapbox GL browser use, such as style/font reads. Do not add management, upload, dataset, or write authority.
2. Apply exact current origins for each application. BidSpace may use actual local and exact Vercel Preview/development origins; its custom-domain restriction remains deferred.
3. Place the same application token into its Doppler `dev`, `stg`, and `prd` configs. Do not copy a token between ventures.
4. Synchronize only the corresponding Vercel project/environments. Do not populate unused server-shaped variables.
5. Deploy an exact-SHA Preview and smoke map rendering, style/font requests, attribution, CSP/referrer behavior, intended fallback, and rejection from an unrelated origin.
6. Promote one consumer at a time. Observe provider usage and deployment health through a quiet period.
7. Remove the old shared token from one verified consumer at a time. Revoke it only after configuration searches and provider usage establish zero remaining use.
8. Track aggregate GL JS loads against the 50,000/month included allowance and review the upcoming invoice after each staged activation; no provider spending cap is available.

## Rollback and no-go conditions

- The existing shared public token remains rollback until all active consumers are verified. Do not revoke it during the blocked handoff state.
- A secret `sk` token in any `NEXT_PUBLIC_` variable is an immediate stop condition.
- Never broaden a production token to a hosting-provider parent domain or remove restrictions merely to make arbitrary previews work.
- Stop if the application's referrer policy prevents restricted Mapbox requests; fix and re-verify the application rather than weakening the token blindly.
- Lake & Pine and LogLoads retain tested no-token fallbacks; use them if a safe public replacement is unavailable.
- Documentation and provider token creation alone are not remediation. Completion requires Doppler placement, Vercel synchronization where needed, and verified runtime behavior.
