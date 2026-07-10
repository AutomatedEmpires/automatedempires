# Mapbox Token Separation Plan

**Prepared:** 2026-07-10  
**Execution state:** Consumer and permission analysis complete. No token was created, broadened, rotated, deleted, or installed.

## Verified state

- One public token is shared by Explore&Earn `dev`, BidSpace `dev`, and LogLoads `dev`/`prd`.
- A live origin probe succeeded from an unrelated origin, consistent with no effective URL restriction.
- LogLoads' `MAPBOX_ACCESS_TOKEN` is the same public token as `NEXT_PUBLIC_MAPBOX_TOKEN`; it is not a server secret and is mislabelled as a privilege boundary.
- Explore&Earn's separate server token is revoked/invalid. No current Explore&Earn source consumer requires a secret Mapbox token; its active use is Mapbox GL JS through `NEXT_PUBLIC_MAPBOX_TOKEN`.
- Current authorization cannot list token metadata or create/update/delete tokens; it lacks the necessary `tokens:read` and `tokens:write` authority. Authenticated account-owner dashboard access is required.

## Target tokens

| Venture / environment | Consumer | Target token | Scopes | URL restriction | Status |
|---|---|---|---|---|---|
| Explore&Earn production | Active Mapbox GL JS map | `explore-and-earn-prd-public` | `styles:read`, `fonts:read` | `https://exploreandearn.com` | Safely spec'd; creation blocked by account-owner token authority |
| Explore&Earn development | Local Mapbox GL JS | `explore-and-earn-dev-public` | `styles:read`, `fonts:read` | `http://localhost:3000` and the explicitly used local origin(s) | Safely spec'd; creation blocked by account-owner token authority |
| Explore&Earn server | No active consumer found | None | None | None | Completed decision: do not replace the revoked secret token until a reviewed server API use exists |
| LogLoads production | No active map consumer in current clean source; runtime architecture unresolved | `logloads-prd-public` only after a verified map consumer and production candidate exist | Least public scopes required by the implementation | `https://logloads.com` | Blocked by production risk and token authority; remove the mislabelled server variable only after consumer verification |
| LogLoads development | No active map consumer in current clean source | Create only with the implementing feature | Least public scopes | Explicit localhost origin(s) | Deferred safely; no reason to provision an unused token |
| BidSpace | Configuration placeholders only; no final domain | Create after map implementation and final domain | Least public scopes | Final owned domain | Blocked by missing domain |
| Other ventures | No verified Mapbox requirement | None | None | None | Completed decision: do not copy the portfolio token |

Mapbox documents `styles:read` and `fonts:read` as the scopes needed to initialize and render a Mapbox GL JS map. Public tokens should not receive secret write/list/upload scopes.

## Safe rotation sequence

1. An account owner creates the Explore&Earn development and production public tokens with the names, scopes, and restrictions above. Do not edit or delete the shared token yet.
2. Store the new public values directly in the correct Doppler configs. Do not place token values in documentation, Git, screenshots, or chat.
3. Sync development first and verify map style/font loading from the allowed local origin.
4. Sync the production token to a protected preview that uses an allowed Explore&Earn origin, then verify map load, network errors, Mapbox usage attribution, and application CSP.
5. Promote to production and verify apex/`www`. Prove that an unrelated origin receives `403` for billable services.
6. Inventory any remaining traffic on the shared token. Replace only confirmed consumers; do not create speculative server tokens.
7. Remove the shared token from a venture's Doppler config only after that venture passes. Delete the shared token only when provider statistics and all configuration searches show zero remaining consumers.
8. Remove or rename LogLoads' `MAPBOX_ACCESS_TOKEN` only after code and job searches confirm it is unused; a public token stored under a server-shaped name must not be treated as privileged.

## Preview-domain constraint

Mapbox does not support wildcard URL restrictions. Authorizing `vercel.app` would authorize unrelated Vercel subdomains and is not acceptable. For protected previews, use one of:

1. a stable venture-owned preview origin explicitly added to a staging token;
2. local development with the restricted dev token; or
3. a temporary, deliberately broader token confined to non-production and retired after the test.

Do not weaken the production token to make arbitrary preview URLs work.

## No-go conditions

- The operator cannot confirm the Mapbox account owner and token-write authority.
- A requested token includes secret/write scopes for a browser consumer.
- Production URL restrictions include another venture or a broad hosting-provider domain.
- The shared token is removed before every consumer is deployed and provider traffic is quiet.
- A secret token is created without a documented server-side API consumer and secure storage path.

## Provider references

- [Mapbox token management, scopes, rotation, and restrictions](https://docs.mapbox.com/accounts/guides/tokens/)
- [Mapbox Tokens API permissions](https://docs.mapbox.com/api/accounts/tokens/)
