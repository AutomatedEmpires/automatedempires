# Mapbox Token Separation Plan

**Prepared:** 2026-07-10

**Execution state:** Pass 3 completed the branch-qualified consumer/token-write analysis. Pass 4 approval is recorded, but the browser creation claim failed/reset at account-password confirmation. No active claim or token remains; nothing was created, changed, installed, displayed, or revoked.

## Approved target inventory

| Token | Create when | Public scopes | Allowed URL(s) | Current gate |
|---|---|---|---|---|
| `explore-and-earn-dev-public` | After account-owner confirmation | `styles:read`, `fonts:read` | `http://localhost:3000` | **Blocked by MFA/account-owner confirmation** |
| `explore-and-earn-stg-public` | After one canonical owned or provider staging hostname is selected | `styles:read`, `fonts:read` | Exact canonical HTTPS staging origin | **Intentionally deferred:** two conflicting Vercel aliases are recorded and wildcard restrictions are unsupported |
| `explore-and-earn-prd-public` | After owner confirmation; install first in protected Preview | `styles:read`, `fonts:read` | `https://exploreandearn.com` | Owner confirmation plus Preview replacement-key gate |
| `logloads-dev-public` | After owner confirmation and source consumer recheck | `styles:read`, `fonts:read` | `http://localhost:3002` | Owner confirmation and clean-source gate |
| `lake-and-pine-dev-public` | After the current candidate fixes are committed and clean CI passes | `styles:read`, `fonts:read` | Exact local origins | Clean source/CI gate |
| `lake-and-pine-prd-public` | After exact-SHA preview acceptance | `styles:read`, `fonts:read` | `https://lakeandpinecleaning.com` | Clean deployment and DNS-cutover gate |
| `logloads-prd-public` | Only if Mapbox remains selected after architecture/source convergence | `styles:read`, `fonts:read` | `https://logloads.com` | Accepted architecture and clean production-candidate gate |
| `bidspace-dev-public` | After accepted map source is current and owner confirmation completes | `styles:read`, `fonts:read` | `http://localhost:3000` | Owner confirmation and reviewed-source gate; custom domain not required for dev |
| BidSpace production token | Only after an owned domain exists | Minimum public scopes demonstrated by implementation | Final owned HTTPS production origin | Missing domain |

No Explore&Earn server-token replacement is planned: the revoked server-shaped credential has no current source consumer. LogLoads' `MAPBOX_ACCESS_TOKEN` duplicates a public value and is not an independent privilege boundary. Sweepza, ORAN, and AutomatedEmpires do not need speculative Mapbox resources.

## Safe execution

1. Founder credential-action approval is complete. Resume only after the provider's account-owner confirmation; never put management authority in an application runtime.
2. Inventory token names, scopes, allowed URLs, default/non-default state, and provider usage without recording token material. The current default token cannot be restricted and stays active as rollback.
3. Create the Explore&Earn development token first. Transfer it directly to Doppler `dev` without displaying it; verify the `/map` route, style/font requests, attribution, CSP, and rejection from an unrelated origin.
4. Create the Explore&Earn production token with the HTTPS apex restriction. Because a domain-only restriction includes subdomains and paths, do not add wildcard syntax. Verify apex and `www`; do not authorize `vercel.app`.
5. Install the production value through the approved Doppler-to-preview path. Promote only after the map and non-map fallback/error behavior pass.
6. Repeat per venture only when its source and domain gates are satisfied. Lake & Pine and LogLoads already have safe no-token fallbacks; retain them during remediation.
7. Search source, Doppler names-only mappings, Vercel environment names, and deployment logs for remaining consumers. Observe provider usage through a quiet period.
8. Remove the shared token from one verified consumer at a time. Revoke the shared token only after every consumer is replaced or deliberately deconfigured and usage is zero.

## Rollback and no-go conditions

- Restore the previous token reference only if it remains active and the rollback does not reintroduce another venture's production dependency; otherwise disable the map and use the tested fallback.
- Never broaden a production token to `vercel.app`, add a wildcard, or remove the protocol merely to make arbitrary previews work.
- Stop if the application sends `Referrer-Policy: noreferrer` or `same-origin`, because restricted Mapbox requests may fail.
- Stop if a browser token request includes management, write, upload, dataset, or other scopes not demonstrated by the application.
- Do not retire the shared token while BidSpace configuration, LogLoads feature deployments, or any unknown consumer still uses it.

Provider references: [token management](https://docs.mapbox.com/accounts/guides/tokens/) and [Tokens API](https://docs.mapbox.com/api/accounts/tokens/).
