# Mapbox Token Matrix

**Verified provider snapshot:** 2026-07-10
**Security note:** Token values, token fragments, credential fingerprints, and secret URLs are intentionally excluded.

The browser-visible public token is currently shared across three venture contexts. A public token is designed for browser use, but cross-venture reuse creates a common quota, restriction, billing, and transfer boundary and is not the target architecture.

## Current venture boundaries

| Venture | Current token evidence | Environment separation | Contamination or blocker | Safe next action |
|---|---|---|---|---|
| AutomatedEmpires | No active Mapbox token requirement was verified | Not applicable | No contamination confirmed | Do not inherit the portfolio token for a site without map features. |
| Explore&Earn | Uses the currently shared public token. Its former server-side token is **revoked** | Public access is shared across ventures/environments; a working venture-specific server token is absent | **Confirmed public-token coupling. Blocked server-token rotation:** current Mapbox authorization lacks `tokens:write` | An account owner with token-write authority must create least-privilege Explore&Earn public and server tokens. Deploy and verify replacements before retiring the shared public token. |
| ORAN | No active Mapbox token was verified | Not applicable | No contamination confirmed | Preserve the current provider decision; do not copy the shared public token into ORAN. |
| BidSpace | Uses the currently shared public token | Venture and environment restrictions are not independent; final production-origin restriction is blocked by the missing domain decision | **Confirmed public-token coupling** | After the final domain is selected, create a BidSpace public token with URL restrictions and separate non-public access only if the server requires it. |
| Lake & Pine | No active Mapbox token was verified | Unknown | No contamination confirmed | Confirm a map requirement and final domain before provisioning. |
| Sweepza | No active Mapbox token was provider-verified; references are planning-level | Unknown | Unknown | Do not copy the shared token unless a map feature and ownership plan are approved. |
| LogLoads | Uses the currently shared public token; server-token identity was not independently verified | Venture and environment restrictions are not independent | **Confirmed public-token coupling** | Create LogLoads-specific public tokens for active environments with verified origin restrictions; create a separate least-privilege server token only for documented server work. |

## Rotation constraint and sequence

The current authenticated Mapbox context cannot create or rotate tokens because it lacks `tokens:write`. This is an access blocker, not permission to broaden an existing token.

1. Have the account owner create venture- and environment-specific replacements with least privilege and URL restrictions.
2. Record token names, scopes, restrictions, and consumers without recording token material.
3. Deploy replacements one venture at a time and verify maps, geocoding, quota reporting, and origin rejection.
4. Keep the shared public token active until every confirmed consumer has migrated.
5. Retire the shared token only after a usage review shows no remaining traffic; do not attempt to restore the revoked Explore&Earn server token.
