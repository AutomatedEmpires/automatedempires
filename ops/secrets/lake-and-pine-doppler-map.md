# Lake & Pine Doppler Map

**Doppler project:** `lake-and-pine`
**Names-only snapshot:** 2026-07-12
**Configs inspected:** `dev`, `stg`, `prd`

Inventory used Doppler CLI names-only JSON mode with environment reads disabled. No secret value was requested, returned, or documented. The `stg` and `prd` statuses below rely on a separate verified import from the Lake & Pine Vercel project; values were not displayed during this inventory.

## Status legend

- `configured` — non-empty configuration was established by separate safe verification; the value is not recorded here.
- `empty` — an empty value was safely established without displaying it.
- `metadata` — Doppler-managed project/config/environment metadata.
- `unknown` — the name exists, but names-only output cannot establish whether its value is configured or empty.

## Variable inventory

| Variable | Purpose | Configs present | Status | Notes |
|---|---|---|---|---|
| `DATABASE_URL` | Application database connection | `stg`, `prd` | `configured` | Verified Vercel import |
| `DOPPLER_CONFIG` | Identifies the active Doppler config | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_ENVIRONMENT` | Identifies the active Doppler environment | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_PROJECT` | Identifies the Doppler project | `dev`, `stg`, `prd` | `metadata` | — |
| `NEXT_PUBLIC_APP_URL` | Browser-visible canonical application URL | `stg`, `prd` | `configured` | Verified Vercel import |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | Browser-visible business contact email | `stg`, `prd` | `configured` | Verified Vercel import |
| `NEXT_PUBLIC_BUSINESS_PHONE` | Browser-visible business contact phone | `stg`, `prd` | `configured` | Verified Vercel import |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Browser-visible Lake & Pine-specific Mapbox token | `dev`, `stg`, `prd` | `configured` | Masked; 7 allowed origins; founder placement directive satisfied |
| `NEXT_PUBLIC_POSTHOG_HOST` | Browser-visible PostHog ingestion host | `dev`, `stg`, `prd` | `configured` | Presence-only checks passed |
| `NEXT_PUBLIC_POSTHOG_KEY` | Browser-visible Lake & Pine PostHog project key | `dev`, `stg`, `prd` | `configured` | Presence-only checks passed; value excluded |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Browser-visible Supabase anonymous key | `stg`, `prd` | `configured` | Verified Vercel import |
| `NEXT_PUBLIC_SUPABASE_URL` | Browser-visible Supabase project URL | `stg`, `prd` | `configured` | Verified Vercel import |
| `SENTRY_DSN` | Venture-specific Sentry event endpoint | `dev`, `stg`, `prd` | `configured` | Installed write-only in Pass 4 |
| `SENTRY_ORG` | Sentry organization slug | `dev`, `stg`, `prd` | `configured` | Installed write-only in Pass 4 |
| `SENTRY_PROJECT` | Lake & Pine Sentry project slug | `dev`, `stg`, `prd` | `configured` | Installed write-only in Pass 4 |

The `dev` config contains metadata plus the Lake & Pine-specific Sentry identity; its broader application/data contract remains absent. No variable is classified as `empty` because that state was not safely established.

## Pass 5 provider delta

PostHog project `509088` exists as separately recorded. The labeled founder handoff directed Mapbox placement and resolved the prior decision gate. A Lake & Pine-specific public token now spans all Doppler lanes and Vercel Development/Preview/Production; exact origin enforcement, local Chrome, and fresh protected Preview are green.

## Follow-up

- Confirm whether `stg` and `prd` intentionally share the same backing Vercel/Supabase resources; presence in both configs does not prove environment separation.
- Populate other `dev` values only from a development-specific resource set.
- Verify the repository consumes these exact variable names before removing any Vercel-side copy.
- Install the Sentry identity into Vercel without display and prove a controlled event/release before calling monitoring active.
- Mapbox environment installation/Preview proof is complete; Production remains unchanged and requires the normal promotion gate. Never place the secret authorizer in `NEXT_PUBLIC_MAPBOX_TOKEN`.
