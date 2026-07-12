# Sweepza Doppler Map

**Doppler project:** `sweepza`
**Names-only snapshot:** 2026-07-12
**Configs inspected:** `dev`, `stg`, `prd`
**Pass 2 status:** Configured values were used only in transient, read-only provider calls; only sanitized status, equality, and resource metadata were retained.
**Pass 4 delta:** Vercel lanes are verified against dedicated Sweepza sandbox/live accounts and the $19/$5 prices. This file does not claim that every missing Pass 2 Doppler staging name was added.
**Pass 5 delta:** PostHog project `509084` was created with autocapture, replay, and console capture disabled. Its own pair spans all Doppler lanes. Vercel now has exactly Development plus combined Preview+Production for both variables after the stale Production-only host duplicate was deleted by environment ID. No deploy/event smoke occurred.

Inventory used Doppler CLI names-only JSON mode with environment reads disabled. No secret value was requested, returned, or documented.

## Status legend

- `configured` — non-empty configuration was established by separate safe verification; the value is not recorded here.
- `empty` — an empty value was safely established without displaying it.
- `metadata` — Doppler-managed project/config/environment metadata.
- `unknown` — the name exists, but names-only output cannot establish whether its value is configured or empty.

## Variable inventory

| Variable | Purpose | Configs present | Status | Notes |
|---|---|---|---|---|
| `CLERK_SECRET_KEY` | Server-side Clerk API authentication | `dev`, `stg`, `prd` | `configured` | All three authenticate the same development instance, which contains one user |
| `CLERK_WEBHOOK_SECRET` | Clerk webhook signature verification | `dev`, `stg`, `prd` | `configured` | Direct equality check confirms the same configuration in all three lanes; deployed health previously reported webhook inactive |
| `CRON_SECRET` | Authorization for scheduled-task endpoints | `prd` | `unknown` | Production only |
| `DOPPLER_CONFIG` | Identifies the active Doppler config | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_ENVIRONMENT` | Identifies the active Doppler environment | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_PROJECT` | Identifies the Doppler project | `dev`, `stg`, `prd` | `metadata` | — |
| `GITHUB_OWNER` | GitHub owner used by repository automation | `dev`, `stg`, `prd` | `unknown` | — |
| `GITHUB_REPO` | GitHub repository used by automation | `dev`, `stg`, `prd` | `unknown` | — |
| `GITHUB_TOKEN` | GitHub API authentication for automation | `dev`, `stg`, `prd` | `unknown` | Verify minimum scopes per environment |
| `NEXT_PUBLIC_APP_URL` | Browser-visible canonical application URL | `dev`, `stg`, `prd` | `unknown` | — |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Browser-visible Clerk application identifier | `dev`, `stg`, `prd` | `configured` | All lanes identify the same development instance |
| `NEXT_PUBLIC_POSTHOG_HOST` | Browser-visible PostHog ingestion host | `dev`, `stg`, `prd` | `configured` | Presence-only checks passed |
| `NEXT_PUBLIC_POSTHOG_KEY` | Browser-visible Sweepza PostHog project key | `dev`, `stg`, `prd` | `configured` | Presence-only checks passed; value excluded |
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

## Pass 2 provider findings

- `dev`, `stg`, and `prd` are confirmed to share one Clerk development instance and one webhook signing configuration. Production and staging must be separated before identity can be transfer-ready.
- Clerk has no native staging instance. Use a documented separate application/domain for strict staging or deliberately constrain development identity to provider-hosted previews.
- No `RESEND_API_KEY` or `RESEND_FROM_EMAIL` name is present in any lane even though the repository contains email code. Transactional email is inactive.
- No Mapbox or Cloudinary credential name is present in any lane. The required empty `sweepza/` namespace now exists, but it is not an access or media boundary.

## Follow-up

- Replace `prd` with a Sweepza production Clerk instance and give `stg` an explicit strategy; keep `dev` unchanged until replacements pass auth and webhook smoke tests.
- Reconcile any missing Doppler staging Stripe price/webhook names against the already verified Vercel sandbox lane; never copy live values into staging.
- Review GitHub and Notion token scopes; environment presence alone does not establish least privilege.
- Key/host placement is complete. Fresh-deploy a controlled Preview/Production build and verify a non-sensitive event reaches project `509084` before calling runtime activation complete.
