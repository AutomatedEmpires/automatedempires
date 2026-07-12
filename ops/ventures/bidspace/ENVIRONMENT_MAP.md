# BidSpace environment map

Pass 5 provider refresh: 2026-07-12; Mapbox consumer/token class and PostHog project state were refreshed without recording credential material.

## Environment ownership

| Logical environment | Secrets source | Deployment target | Database target | Status |
|---|---|---|---|---|
| Local development | Doppler `bidspace` / `dev` | Local Next.js workspace | Dedicated Supabase/Clerk dev; shared Mapbox rollback; PostHog project `509087` own key/host present across all lanes; empty Cloudinary namespace | **Provider/environment boundary fixed; map and post-write analytics runtime proof open** |
| Staging / preview | Doppler `bidspace` / `stg` | Accepted Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S` is `READY` | BidSpace-only staging boundary remains to prove at runtime | **Source/build proven; product-provider lane incomplete** |
| Production | Doppler `bidspace` / `prd`, metadata only | Clean production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp` from current `main` `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8` is `READY` | Supabase fingerprint `…fsqslgxcv`; no production Clerk/domain/Stripe | **Source/build live; product providers/custom domain incomplete** |

The Supabase project has 25 application tables with RLS enabled and no policies. This creates deny-all ordinary Data API behavior unless the application intentionally uses privileged server access; verify intent before deployment.

Do not infer that one Supabase project safely represents every environment. A separate staging database decision remains open.

## Observed variable-name contract

The following names were extracted from committed `.env.example` files; values were not read or copied.

| Provider / purpose | Names observed in repository |
|---|---|
| Clerk | `CLERK_PUBLISHABLE_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` |
| Supabase / Postgres | `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` |
| Stripe Connect | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_CONNECT_CLIENT_ID` |
| Mapbox | `NEXT_PUBLIC_MAPBOX_TOKEN`, `MAPBOX_ACCESS_TOKEN` |
| Cloudinary | `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` |
| PostHog | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` |
| Sentry | `SENTRY_DSN`, `SENTRY_AUTH_TOKEN` |
| OpenAI | `OPENAI_API_KEY` |
| GitHub/Notion worker tools | `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_TOKEN`, `NOTION_API_TOKEN` |

## Pass 3 provider findings (historical)

- Only `NEXT_PUBLIC_MAPBOX_TOKEN` is configured in Doppler. It is active and identical to the Explore&Earn and LogLoads public token; no separate `MAPBOX_ACCESS_TOKEN` is configured.
- Branch-qualified scan of `main` `0b20189658f2…` found docs/config placeholders but no runtime Mapbox consumer. Accepted recovered feature `511b763…` does contain an active Mapbox GL `light-v11` consumer, so the shared value cannot be treated as globally unused. Do not provision production replacement until the reviewed source and domain are selected.
- At the Pass 3 snapshot, founder approval was recorded but provider owner confirmation blocked creation. Pass 5 supersedes that gate with the token-class result below; production remains deferred until an owned domain exists.
- Cloudinary names exist in repository examples, but no BidSpace credential is present in Doppler. The required empty `bidspace/` namespace now exists; it is organization only, not an active media boundary.
- A distinct BidSpace Sentry project/DSN recorded its first production event on 2026-07-10 and had zero unresolved issues in the 14-day query. Ownership routing, exactly one alert, scrubbers, and IP scrubbing are now configured.

## Pass 5 provider delta

- Current source consumer is `apps/web/components/explore-map.tsx`. One BidSpace public `pk` token is intended across Doppler `dev`/`stg`/`prd`, but every available founder-created named token is a secret `sk` token and was rejected. No value was installed or synchronized.
- Use exact local and current Vercel Preview/development origins only. Production custom-domain restriction remains deferred until an owned domain exists.
- Separate PostHog project `509087` has autocapture, replay, and console capture disabled. Own key/host are presence-verified in Doppler all lanes and Vercel `bidspace` Development plus combined Preview/Production. Source `2fe90a3…` consumes them; no fresh deployment/event smoke occurred.

## Rules

- Public-prefixed values may be browser-readable, but still belong to the BidSpace resource boundary.
- Server, database, webhook, CI, and provider-management variables must never be exposed to the client.
- A variable name documents a potential consumer; it is not proof that the provider resource exists or is ready.
- Keep CI/admin credentials out of Vercel runtime environments unless a deployed process demonstrably consumes them.
- Mapbox public replacement and Preview proof remain blocked by secure handoff; production custom-domain restriction is separately blocked by the missing domain. Do not treat the shared public token as a server credential.
