# LogLoads environment map

Pass 4 refresh: Supabase-canonical target and corrected provider gates added; no credential material is recorded.

## Environment ownership

| Logical environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Local development | `logloads` / `dev` (22 pre-convergence names) | Local pnpm workspace | Dedicated Supabase; zero-user Clerk development instance; shared public Mapbox under public/server-looking names; broad same-team Resend key | **Partially verified; shared-provider gaps** |
| Staging / preview | `logloads` / `stg` (11 pre-convergence names) | Final-source Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` from `f280ef4fef4b992f94457aad61cfe27e8ec91791` is `READY` | Same zero-user Clerk development instance; data lane separation unproven; no Resend/Mapbox names | **Source/build proven; data/provider runtime gates remain** |
| Production | `logloads` / `prd` (18 pre-convergence names) | Clean production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` from current `main` `9c9e107082942e5bce782eac2ce71aa63eb7d9c0` is `READY` | Live Supabase remains pre-Pass-4. Dark Clerk DNS/SSL is verified but runtime cutover is absent. Broad same-team Resend key/no sender/domain, shared Mapbox, and dev-login name remain gated. | **Source/main deployed; live data/provider cutover and rollback proof blocked by production risk** |

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

## Pass 3 provider findings

- `MAPBOX_ACCESS_TOKEN` duplicates `NEXT_PUBLIC_MAPBOX_TOKEN`; it is not a server credential. Feature `cce1c449…` has an actual optional Mapbox GL consumer and a keyless MapLibre/Carto fallback; `main` has no runtime consumer.
- One broad LogLoads key is reused in `dev`/`prd`, absent in `stg`, and shares the Explore&Earn 1/1-domain team. Feature code sends contact inquiries using `RESEND_API_KEY`, `LOGLOADS_EMAIL_FROM`, and `LOGLOADS_CONTACT_EMAIL`; there is no domain/from identity, so activation is intentionally deferred.
- Clerk `dev`/`stg` share a zero-user dev instance. Separate dark production has DNS Verified/SSL Issued; config/runtime install pending.
- The distinct LogLoads Sentry project now has ownership routing, one alert, scrubbers, and IP scrubbing, but no first event/environment. No LogLoads PostHog project exists.
- Cloudinary names exist in the scaffold, but no credential exists in LogLoads Doppler. Required empty `logloads/` namespace exists; it is organization only.

## Rules

- This is a broad scaffold contract; populate only variables with a reviewed current consumer.
- Provider/CI administration credentials should not be copied into application runtime environments by default.
- Agent webhook endpoints/tokens must be venture-specific, least-privilege, and optional; their names do not prove a service exists.
- Server, database, webhook, CI, and provider-management values remain server-only.
- A separate staging database decision is still required; do not assume one Supabase ref is safe for every environment.
- `LOGLOADS_ENABLE_DEV_LOGIN` exists by name in production. Confirm production behavior is disabled without copying its value into documentation.
- Do not treat public Mapbox access as a server secret. Replacement creation is approved but blocked by provider owner confirmation; never grant management scopes to runtime tokens.
