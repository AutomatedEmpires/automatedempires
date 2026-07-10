# Explore&Earn Doppler Map

**Doppler project:** `explore-and-earn`
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
| `CLERK_SECRET_KEY` | Server-side Clerk API authentication | `dev` | `unknown` | Not present in `stg` or `prd` |
| `CLOUDINARY_API_KEY` | Cloudinary API identifier | `dev` | `unknown` | — |
| `CLOUDINARY_API_SECRET` | Cloudinary server-side API authentication | `dev` | `unknown` | — |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary environment/cloud identifier | `dev` | `unknown` | — |
| `CLOUDINARY_URL` | Combined Cloudinary connection configuration | `dev` | `unknown` | — |
| `DATABASE_URL` | Application database connection | `dev` | `unknown` | — |
| `DOPPLER_CONFIG` | Identifies the active Doppler config | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_ENVIRONMENT` | Identifies the active Doppler environment | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_PROJECT` | Identifies the Doppler project | `dev`, `stg`, `prd` | `metadata` | — |
| `MAPBOX_ACCESS_TOKEN` | Mapbox access for server-side mapping/geocoding work | `dev` | `unknown` | Do not assume it matches the public token without separate verification |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Browser-visible Clerk application identifier | `dev` | `unknown` | — |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Clerk sign-in route | `dev` | `unknown` | — |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Clerk sign-up route | `dev` | `unknown` | — |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Browser-visible Cloudinary cloud identifier | `dev` | `unknown` | — |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Browser-visible Mapbox token | `dev` | `configured` | Known to be shared with BidSpace and LogLoads; separation required |
| `NEXT_PUBLIC_POSTHOG_HOST` | Browser-visible PostHog ingestion host | `dev` | `unknown` | — |
| `NEXT_PUBLIC_POSTHOG_KEY` | Browser-visible PostHog project key | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SENTRY_DSN` | Browser-visible Sentry event endpoint | `dev` | `unknown` | — |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Browser-visible Stripe account identifier | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Browser-visible Supabase anonymous key | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Browser-visible Supabase publishable key | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_URL` | Browser-visible Supabase project URL | `dev` | `unknown` | — |
| `RESEND_API_KEY` | Resend API authentication | `dev` | `configured` | This credential differs from LogLoads' credential; both access the same Resend account and sending-domain boundary under the current paid-plan limit |
| `SENTRY_AUTH_TOKEN` | Sentry build/release API authentication | `dev` | `unknown` | — |
| `SENTRY_DSN` | Server-side Sentry event endpoint | `dev` | `unknown` | — |
| `SENTRY_ORG` | Sentry organization slug | `dev` | `configured` | Corrected to the non-secret slug `automated-empires` |
| `SENTRY_PROJECT` | Sentry project slug | `dev` | `unknown` | — |
| `STRIPE_SECRET_KEY` | Server-side Stripe API authentication | `dev` | `unknown` | — |
| `SUPABASE_ACCESS_TOKEN` | Supabase management API authentication | `dev` | `unknown` | — |
| `SUPABASE_PROJECT_REF` | Primary Supabase project reference | `dev` | `unknown` | — |
| `SUPABASE_PROJECT_REF_STAGING` | Staging Supabase project reference | `dev` | `unknown` | A staging reference name exists in `dev`, while the Doppler `stg` config has metadata only |
| `SUPABASE_SERVICE_ROLE_KEY` | Privileged server-side Supabase access | `dev` | `unknown` | — |

The `stg` and `prd` configs currently contain Doppler metadata only. No variable is classified as `empty` because that state was not safely established.

## Separation findings

- The public Mapbox token is shared with BidSpace and LogLoads. Create venture/environment-specific Mapbox tokens with URL restrictions, deploy replacements, then retire the shared token.
- Explore&Earn and LogLoads use distinct Resend credentials, confirmed by differing fingerprints that are intentionally omitted here, but both credentials access the same Resend account/domain because the current paid plan supports only one domain. This is account/domain cross-contamination, not credential reuse or an approved transfer-ready state.
- Do not populate `stg` or `prd` by copying all of `dev`; verify the correct provider resource for each variable first.
