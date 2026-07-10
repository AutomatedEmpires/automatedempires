# Sweepza Doppler Map

**Doppler project:** `sweepza`
**Names-only snapshot:** 2026-07-10
**Configs inspected:** `dev`, `stg`, `prd`

Inventory used Doppler CLI names-only JSON mode with environment reads disabled. No secret value was requested, returned, or documented.

## Status legend

- `configured` — non-empty configuration was established by separate safe verification; the value is not recorded here.
- `empty` — an empty value was safely established without displaying it.
- `metadata` — Doppler-managed project/config/environment metadata.
- `unknown` — the name exists, but names-only output cannot establish whether its value is configured or empty.

## Variable inventory

| Variable | Purpose | Configs present | Status | Notes |
|---|---|---|---|---|
| `CLERK_SECRET_KEY` | Server-side Clerk API authentication | `dev`, `stg`, `prd` | `unknown` | — |
| `CLERK_WEBHOOK_SECRET` | Clerk webhook signature verification | `dev`, `stg`, `prd` | `unknown` | — |
| `CRON_SECRET` | Authorization for scheduled-task endpoints | `prd` | `unknown` | Production only |
| `DOPPLER_CONFIG` | Identifies the active Doppler config | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_ENVIRONMENT` | Identifies the active Doppler environment | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_PROJECT` | Identifies the Doppler project | `dev`, `stg`, `prd` | `metadata` | — |
| `GITHUB_OWNER` | GitHub owner used by repository automation | `dev`, `stg`, `prd` | `unknown` | — |
| `GITHUB_REPO` | GitHub repository used by automation | `dev`, `stg`, `prd` | `unknown` | — |
| `GITHUB_TOKEN` | GitHub API authentication for automation | `dev`, `stg`, `prd` | `unknown` | Verify minimum scopes per environment |
| `NEXT_PUBLIC_APP_URL` | Browser-visible canonical application URL | `dev`, `stg`, `prd` | `unknown` | — |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Browser-visible Clerk application identifier | `dev`, `stg`, `prd` | `unknown` | — |
| `NEXT_PUBLIC_POSTHOG_HOST` | Browser-visible PostHog ingestion host | `dev`, `stg`, `prd` | `unknown` | — |
| `NEXT_PUBLIC_POSTHOG_KEY` | Browser-visible PostHog project key | `dev`, `stg`, `prd` | `unknown` | — |
| `NEXT_PUBLIC_SENTRY_DSN` | Browser-visible Sentry event endpoint | `dev`, `stg`, `prd` | `unknown` | — |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Browser-visible Stripe account identifier | `dev`, `stg`, `prd` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Browser-visible Supabase anonymous key | `dev`, `stg`, `prd` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_URL` | Browser-visible Supabase project URL | `dev`, `stg`, `prd` | `unknown` | — |
| `NOTION_API_TOKEN` | Notion API authentication for synchronization | `dev`, `stg`, `prd` | `unknown` | Verify production use is intentional |
| `SENTRY_AUTH_TOKEN` | Sentry build/release API authentication | `dev`, `stg`, `prd` | `unknown` | — |
| `SENTRY_ORG` | Sentry organization slug | `dev`, `stg`, `prd` | `unknown` | — |
| `SENTRY_PROJECT` | Sentry project slug | `dev`, `stg`, `prd` | `unknown` | — |
| `STRIPE_PRICE_ADDITIONAL_LISTING` | Stripe price identifier for additional listings | `dev`, `prd` | `unknown` | Absent from `stg` |
| `STRIPE_PRICE_HOST_BASELINE` | Stripe price identifier for the baseline host plan | `dev`, `prd` | `unknown` | Absent from `stg` |
| `STRIPE_SECRET_KEY` | Server-side Stripe API authentication | `dev`, `stg`, `prd` | `unknown` | — |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signature verification | `dev`, `prd` | `unknown` | Absent from `stg` |
| `SUPABASE_SERVICE_ROLE_KEY` | Privileged server-side Supabase access | `dev`, `stg`, `prd` | `unknown` | — |

No variable is classified as `empty` because names-only inspection does not expose that state and no separate safe evidence established it.

## Follow-up

- Verify that `dev`, `stg`, and `prd` point to venture-specific environment resources rather than duplicated production credentials.
- Resolve the missing staging Stripe price and webhook names only after the staging product/account strategy is confirmed.
- Review GitHub and Notion token scopes; environment presence alone does not establish least privilege.
