# LogLoads environment map

Pass 5 refresh: separate PostHog project and venture-specific Mapbox installation/verification added; no credential material is recorded.

## Environment ownership

| Logical environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Local development | `logloads` / `dev` | Local pnpm workspace | Dedicated Supabase; zero-user Clerk dev; venture-specific public Mapbox; PostHog project `509086`; broad same-team Resend key | **Map local/origin proof green; broader provider gaps remain** |
| Staging / preview | `logloads` / `stg` | Fresh exact-main Preview at `9c9e107…` is `READY` | Venture-specific Mapbox/PostHog present; data lane separation unproven | **Build/origin proof green; route error boundary and data gates remain** |
| Production | `logloads` / `prd` | Existing production from `9c9e107…` remains unchanged | Dark Clerk runtime absent; email/data/dev-login gates remain. Venture-specific Mapbox env is staged but no Production deployment occurred | **No production promotion; live data/provider rollback proof remains** |

Live Supabase remains the pre-Pass-4 mirror. Local `135cff6…` makes state canonical, enables RLS, and limits service-role operations to select/insert/update; fresh PostgreSQL 17 reset passes. No live migration occurred. Backup/live-shape upgrade and lane provenance remain before writes.

## Runtime architecture gate

- **Implemented and merged:** `135cff6…` provides awaited atomic Supabase authority, version/schema compatibility, compare-and-swap/retry, non-production fallback, and concurrency/cold-start tests; final PR #6 source is `f280ef4fef4b992f94457aad61cfe27e8ec91791`.
- `extended-validation`, `ci/verify`, `migrations`, `dependency-review`, and CodeQL passed; PR #6 merged as current `main` `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`. Final-source Preview and current-main production are `READY`, but live Supabase/provider state is unchanged.
- Next gates: backup/live upgrade, environment provenance, distributed rate limiting, provider activation, and functional production rollback.

## Observed variable-name contract

Names were extracted from the committed example; values were not read or copied.

| Provider / purpose | Names |
|---|---|
| Application | `NEXT_PUBLIC_APP_URL` |
| Clerk | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` |
| Supabase / Postgres | `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` |
| Mapbox | `NEXT_PUBLIC_MAPBOX_TOKEN`, `MAPBOX_ACCESS_TOKEN` |
| Stripe subscriptions | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` |
| Resend | `RESEND_API_KEY`, `LOGLOADS_EMAIL_FROM` |
| Cloudinary | `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` |
| PostHog | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` |
| Sentry | `SENTRY_DSN`, `SENTRY_AUTH_TOKEN` |
| AI providers | `OPENAI_API_KEY`, `ANTHROPIC_API_KEY` |
| Provider/CI administration | `DOPPLER_TOKEN`, `VERCEL_TOKEN`, `GITHUB_TOKEN` |
| Agent hooks | `CLAUDE_AGENT_WEBHOOK_URL`, `CLAUDE_AGENT_WEBHOOK_TOKEN`, `CODEX_AGENT_WEBHOOK_URL`, `CODEX_AGENT_WEBHOOK_TOKEN`, `GIT_AGENT_WEBHOOK_URL`, `GIT_AGENT_WEBHOOK_TOKEN`, `SENTRY_AGENT_WEBHOOK_URL`, `SENTRY_AGENT_WEBHOOK_TOKEN` |

## Pass 3 provider findings (historical)

- `MAPBOX_ACCESS_TOKEN` duplicates `NEXT_PUBLIC_MAPBOX_TOKEN`; it is not a server credential. Feature `cce1c449…` has an actual optional Mapbox GL consumer and a keyless MapLibre/Carto fallback; `main` has no runtime consumer.
- One broad LogLoads key is reused in `dev`/`prd`, absent in `stg`, and shares the Explore&Earn 1/1-domain team. Feature code sends contact inquiries using `RESEND_API_KEY`, `LOGLOADS_EMAIL_FROM`, and `LOGLOADS_CONTACT_EMAIL`; there is no domain/from identity, so activation is intentionally deferred.
- Clerk `dev`/`stg` share a zero-user dev instance. Separate dark production has DNS Verified/SSL Issued; config/runtime install pending.
- The distinct LogLoads Sentry project now has ownership routing, one alert, scrubbers, and IP scrubbing, but no first event/environment. At that snapshot, no LogLoads PostHog project existed; Pass 5 supersedes that historical state below.
- Cloudinary names exist in the scaffold, but no credential exists in LogLoads Doppler. Required empty `logloads/` namespace exists; it is organization only.

## Pass 5 provider delta

- Separate PostHog project `509086` has autocapture, replay, and console capture disabled. Own key/host are presence-verified in Doppler all lanes and Vercel `logloads` Development plus combined Preview/Production. Source `9c9e107…` consumes them; no fresh deployment/event smoke occurred.
- `apps/web/components/v3/RealMap.tsx` consumes the venture-specific public token across all Doppler/Vercel lanes. Six restrictions pass exact Preview/localhost `200` and unrelated-origin `403`. Local Chrome reports provider `mapbox`, canvas `1`, MapLibre `0`.
- Fresh `READY` Preview hits a pre-existing app error boundary before map initialization. Keep the keyless fallback and old/shared provider rollback until that application path and later Production gate pass.

## Rules

- This is a broad scaffold contract; populate only variables with a reviewed current consumer.
- Provider/CI administration credentials should not be copied into application runtime environments by default.
- Agent webhook endpoints/tokens must be venture-specific, least-privilege, and optional; their names do not prove a service exists.
- Server, database, webhook, CI, and provider-management values remain server-only.
- A separate staging database decision is still required; do not assume one Supabase ref is safe for every environment.
- `LOGLOADS_ENABLE_DEV_LOGIN` exists by name in production. Confirm production behavior is disabled without copying its value into documentation.
- The public replacement is installed; never put the secret authorizer into `NEXT_PUBLIC_MAPBOX_TOKEN` or the misleading `MAPBOX_ACCESS_TOKEN`. Preview application-path and Production-risk proof remain.
