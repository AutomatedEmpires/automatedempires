# LogLoads environment map

Pass 3 refresh: authenticated GoDaddy/Clerk/Resend plus branch-qualified Mapbox/email and Sentry evidence; no credential material is recorded.

## Environment ownership

| Logical environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Local development | `logloads` / `dev` (18 names) | Local pnpm workspace | Dedicated Supabase; zero-user Clerk development instance; shared public Mapbox stored under both public and server-looking names; broad Resend key reaches the Explore&Earn team | **Partially verified; shared-provider gaps** |
| Staging / preview | `logloads` / `stg` (7 names) | Dirty Vercel preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF` is `READY` | Same zero-user Clerk development instance as dev; data lane separation unproven | **Diagnostic only:** healthy HTTP does not prove single-writer persistence or reproducible source |
| Production | `logloads` / `prd` (14 names) | Dirty Vercel production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` is `ERROR` | Supabase mirror. Dark Clerk DNS Verified/SSL Issued; config/runtime keys pending. Broad Resend key, no sender/domain; shared Mapbox; dev-login name | **Blocked:** architecture/source precedes auth/email/build/web cutover |

The Supabase project has 36 application tables with RLS, one zero-policy table (`operating_state`), and six remote migrations. The current application writes authoritative state to a local JSON snapshot and mirrors it to Supabase; the mirror does not make serverless instances stateless. Verify policy intent, backups, and lane separation before writes.

## Runtime architecture gate

- **Current approved launch model:** exactly one Node process with a persistent `/data` volume and `LOGLOADS_STATE_FILE`; use a host that guarantees one writer and durable volume semantics.
- **Vercel alternative:** first move authoritative state and distributed coordination/rate limiting into a transactional async data layer, then prove restart and concurrent-instance behavior. Update the dated decision before promotion.
- Vercel project root `apps/web` and Node 24 settings are already aligned. The uncommitted output-tracing change may address packaging `ENOENT`, but cannot resolve process-local state authority.
- No production environment or domain cutover is valid until one path is selected, tested, and given a host-specific rollback.

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
- A distinct LogLoads Sentry project/DSN exists but has no first event or environment. No LogLoads PostHog project exists.
- Cloudinary names exist in the repository scaffold, but no Cloudinary credential exists in LogLoads Doppler. Its root folder is empty.

## Rules

- This is a broad scaffold contract; populate only variables with a reviewed current consumer.
- Provider/CI administration credentials should not be copied into application runtime environments by default.
- Agent webhook endpoints/tokens must be venture-specific, least-privilege, and optional; their names do not prove a service exists.
- Server, database, webhook, CI, and provider-management values remain server-only.
- A separate staging database decision is still required; do not assume one Supabase ref is safe for every environment.
- `LOGLOADS_ENABLE_DEV_LOGIN` exists by name in production. Confirm production behavior is disabled without copying its value into documentation.
- Do not treat public Mapbox access as a server secret. Authenticated dashboard write control is available, but create restricted replacements only after explicit credential approval and never grant management scopes to runtime tokens.
