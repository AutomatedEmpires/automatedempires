# Mapbox Token Matrix

**Verified provider snapshot:** 2026-07-10
**Pass 2 status:** Refreshed through read-only token equality and live API capability checks; no token material is recorded.
**Security note:** Token values, token fragments, credential fingerprints, and secret URLs are intentionally excluded.

The browser-visible public token is currently shared across three venture contexts. A public token is designed for browser use, but cross-venture reuse creates a common quota, restriction, billing, and transfer boundary and is not the target architecture.

## Current venture boundaries

| Venture | Current token evidence | Environment separation | Contamination or blocker | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | No active Mapbox token requirement was verified | Not applicable | No contamination confirmed | Do not inherit the portfolio token for a site without map features. |
| Explore&Earn | Uses the currently shared public token, which remains active for style reads. A probe using an unrelated Origin also succeeded, consistent with no URL restriction. Its separate former server-side token returns HTTP `401` and is unusable | Public access is shared across ventures/environments; no current source consumer requires a server token | **Confirmed public-token coupling. Metadata and rotation blocked:** current authorization cannot list token metadata or create a replacement | An account owner must inventory metadata with `tokens:read`, then create least-privilege Explore&Earn public dev/prd tokens with `tokens:write`. Create a server token only if reviewed code proves a server API need. Restrict runtime tokens to required read scopes and approved origins; deploy replacements before retirement. |
| ORAN | No active Mapbox token was verified | Not applicable | No contamination confirmed | Preserve the current provider decision; do not copy the shared public token into ORAN. |
| BidSpace | `dev` uses the currently shared public token; no separate server token is configured | Venture and environment restrictions are not independent; final production-origin restriction is blocked by the missing domain decision | **Confirmed public-token coupling** | After the final domain is selected, create a BidSpace public token with URL restrictions. Add non-public access only if reviewed server code demonstrates a requirement. |
| Lake & Pine | No active Mapbox token was verified | Unknown | No contamination confirmed | Confirm a map requirement and final domain before provisioning. |
| Sweepza | No active Mapbox token was provider-verified; references are planning-level | Unknown | Unknown | Do not copy the shared token unless a map feature and ownership plan are approved. |
| LogLoads | `dev` and `prd` use the shared public token. The value stored under `MAPBOX_ACCESS_TOKEN` is identical to that public token in both lanes, so it is not a separate server credential | Venture and environment restrictions are not independent; the variable name overstates its privilege boundary | **Confirmed public-token coupling and misclassified server variable** | Create LogLoads-specific public tokens for active environments with verified origin restrictions. Remove or rename the misleading server variable unless reviewed server code proves a separate least-privilege token is needed. |

## Rotation constraint and sequence

The current authenticated Mapbox context cannot list token metadata or create/rotate tokens. Mapbox requires `tokens:read` to list or retrieve metadata, `tokens:write` to create/update/delete, and `scopes:list` to enumerate available scopes. Runtime tokens must never receive these management scopes.

1. Have the account owner or a temporary management credential with `tokens:read` produce a names/scopes/restrictions inventory.
2. Use `tokens:write` only in the management context to create venture- and environment-specific replacements. Grant runtime tokens only the read scopes demonstrated by each application's requests.
3. Record token names, scopes, restrictions, and consumers without recording token material.
4. Deploy replacements one venture at a time and verify maps, geocoding, quota reporting, and origin rejection.
5. Keep the shared public token active until every confirmed consumer has migrated. Retire it only after usage reaches zero; do not attempt to restore the revoked Explore&Earn server token.
