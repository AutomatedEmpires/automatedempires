# BidSpace environment map

Pass 2 provider refresh: 2026-07-10; Mapbox and Cloudinary status was refreshed read-only without recording credential material.

## Environment ownership

| Logical environment | Secrets source | Deployment target | Database target | Status |
|---|---|---|---|---|
| Local development | Doppler `bidspace` / `dev`, 16 names | Local Next.js workspace | Dedicated Supabase project and Clerk development instance `ins_3EhjtEaNHw8zCMMwPWby7O6tsWB`; shared public Mapbox token; empty Cloudinary placeholder folder with no credential | **Verified provider identities/placeholders**; end-to-end runtime not tested |
| Staging / preview | Doppler `bidspace` / `stg` | Vercel project `bidspace` Preview | BidSpace-only staging boundary | Mapping is **target state** |
| Production | Doppler `bidspace` / `prd`, metadata only | Vercel project `bidspace`, Git/main/root configured but undeployed | Supabase ref `hnjjcgxflxlfsqslgxcv`; no production Clerk/domain/Stripe | **Not production-ready** |

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

## Pass 2 provider findings

- Only `NEXT_PUBLIC_MAPBOX_TOKEN` is configured in Doppler. It is active and identical to the Explore&Earn and LogLoads public token; no separate `MAPBOX_ACCESS_TOKEN` is configured.
- Current Mapbox authorization cannot list token metadata or create replacements. Management requires `tokens:read` and `tokens:write`; runtime tokens must not receive those scopes.
- Cloudinary names exist in repository examples, but no BidSpace Cloudinary credential is present in Doppler. The `bidspace` root folder is empty and is not an active venture media boundary.

## Rules

- Public-prefixed values may be browser-readable, but still belong to the BidSpace resource boundary.
- Server, database, webhook, CI, and provider-management variables must never be exposed to the client.
- A variable name documents a potential consumer; it is not proof that the provider resource exists or is ready.
- Keep CI/admin credentials out of Vercel runtime environments unless a deployed process demonstrably consumes them.
- Final Mapbox URL restrictions remain blocked until the production domain is selected. Do not treat the shared public token as a server credential.
