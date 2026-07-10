# LogLoads environment map

## Environment ownership

| Logical environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Local development | `logloads` / `dev` (18 names) | Local pnpm workspace | Dedicated Supabase; Clerk development instance; shared public Mapbox; Resend credential reaches shared account | **Partially verified; shared-provider gaps** |
| Staging / preview | `logloads` / `stg` (7 names) | Canonical Vercel preview is `READY` | Same Clerk development instance as dev; data lane separation unproven | **Preview healthy; environment isolation incomplete** |
| Production | `logloads` / `prd` (14 names) | Vercel production is `ERROR` with missing Next server runtime | Ref `fdzohbiiyzgvjzfsjyxo`; no Clerk; Resend shared-account coupling; dev-login variable name present | **Blocked; do not cut over domain** |

The Supabase project has 36 application tables with RLS, one zero-policy table (`operating_state`), and six remote migrations. Verify policy intent, backups, and lane separation before writes.

## Observed variable-name contract

Names were extracted from the committed example; values were not read or copied.

| Provider / purpose | Names |
|---|---|
| Application | `NEXT_PUBLIC_APP_URL` |
| Clerk | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` |
| Supabase / Postgres | `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` |
| Mapbox | `NEXT_PUBLIC_MAPBOX_TOKEN`, `MAPBOX_ACCESS_TOKEN` |
| Stripe subscriptions | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` |
| Resend | `RESEND_API_KEY` |
| Cloudinary | `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` |
| PostHog | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` |
| Sentry | `SENTRY_DSN`, `SENTRY_AUTH_TOKEN` |
| AI providers | `OPENAI_API_KEY`, `ANTHROPIC_API_KEY` |
| Provider/CI administration | `DOPPLER_TOKEN`, `VERCEL_TOKEN`, `GITHUB_TOKEN` |
| Agent hooks | `CLAUDE_AGENT_WEBHOOK_URL`, `CLAUDE_AGENT_WEBHOOK_TOKEN`, `CODEX_AGENT_WEBHOOK_URL`, `CODEX_AGENT_WEBHOOK_TOKEN`, `GIT_AGENT_WEBHOOK_URL`, `GIT_AGENT_WEBHOOK_TOKEN`, `SENTRY_AGENT_WEBHOOK_URL`, `SENTRY_AGENT_WEBHOOK_TOKEN` |

## Rules

- This is a broad scaffold contract; populate only variables with a reviewed current consumer.
- Provider/CI administration credentials should not be copied into application runtime environments by default.
- Agent webhook endpoints/tokens must be venture-specific, least-privilege, and optional; their names do not prove a service exists.
- Server, database, webhook, CI, and provider-management values remain server-only.
- A separate staging database decision is still required; do not assume one Supabase ref is safe for every environment.
- `LOGLOADS_ENABLE_DEV_LOGIN` exists by name in production. Confirm production behavior is disabled without copying its value into documentation.
