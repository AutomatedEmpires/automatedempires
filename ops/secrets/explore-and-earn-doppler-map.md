# Explore&Earn Doppler Map

**Doppler project:** `explore-and-earn`
**Names-only snapshot:** 2026-07-10
**Configs inspected:** `dev`, `stg`, `prd`
**Pass 2 status:** Configured values were used only in transient, read-only provider calls; only sanitized status, equality, and resource metadata were retained.

Inventory used Doppler CLI names-only JSON mode with environment reads disabled. No secret value was requested, returned, or documented.

## Status legend

- `configured` — non-empty configuration was established by separate safe verification; the value is not recorded here.
- `empty` — an empty value was safely established without displaying it.
- `metadata` — Doppler-managed project/config/environment metadata.
- `unknown` — the name exists, but names-only output cannot establish whether its value is configured or empty.

## Variable inventory

| Variable | Purpose | Configs present | Status | Notes |
|---|---|---|---|---|
| `CLERK_SECRET_KEY` | Server-side Clerk API authentication | `dev` | `configured` | Authenticates a development instance with one user; not present in `stg` or `prd` |
| `CLOUDINARY_API_KEY` | Cloudinary API identifier | `dev` | `configured` | Authenticates the single Free product environment |
| `CLOUDINARY_API_SECRET` | Cloudinary server-side API authentication | `dev` | `configured` | Broad Admin API access to the product environment; do not copy to another venture |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary environment/cloud identifier | `dev` | `configured` | The Explore&Earn folder is the only root folder with assets |
| `CLOUDINARY_URL` | Combined Cloudinary connection configuration | `dev` | `configured` | Development only; do not promote wholesale |
| `DATABASE_URL` | Application database connection | `dev` | `unknown` | — |
| `DOPPLER_CONFIG` | Identifies the active Doppler config | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_ENVIRONMENT` | Identifies the active Doppler environment | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_PROJECT` | Identifies the Doppler project | `dev`, `stg`, `prd` | `metadata` | — |
| `MAPBOX_ACCESS_TOKEN` | Mapbox access for server-side mapping/geocoding work | `dev` | `configured` | Separate from the public token but unusable; provider returns HTTP `401` |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Browser-visible Clerk application identifier | `dev` | `configured` | Development instance only |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Clerk sign-in route | `dev` | `unknown` | — |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Clerk sign-up route | `dev` | `unknown` | — |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Browser-visible Cloudinary cloud identifier | `dev` | `configured` | Public delivery identity for the shared Free product environment |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Browser-visible Mapbox token | `dev` | `configured` | Active and shared with BidSpace and LogLoads; an unrelated-Origin probe also succeeded, consistent with no URL restriction |
| `NEXT_PUBLIC_POSTHOG_HOST` | Browser-visible PostHog ingestion host | `dev` | `unknown` | — |
| `NEXT_PUBLIC_POSTHOG_KEY` | Browser-visible PostHog project key | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SENTRY_DSN` | Browser-visible Sentry event endpoint | `dev` | `unknown` | — |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Browser-visible Stripe account identifier | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Browser-visible Supabase anonymous key | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Browser-visible Supabase publishable key | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_URL` | Browser-visible Supabase project URL | `dev` | `unknown` | — |
| `RESEND_API_KEY` | Resend API authentication | `dev` | `configured` | Distinct from LogLoads but broad/full-access to the same Resend team; the only domain is `failed` |
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
- Current Mapbox authorization lacks `tokens:read` for metadata inventory and `tokens:write` for replacement. Management scopes belong only in a temporary owner/admin context, never the application runtime.
- Explore&Earn and LogLoads use distinct Resend credentials, established by a direct equality check without retaining identifiers, but both credentials have broad access to the same team. This is account/domain cross-contamination, not credential reuse or an approved transfer-ready state.
- `CLERK_WEBHOOK_SECRET` and `RESEND_FROM_EMAIL` are absent from all three configs. Production auth synchronization and explicit sender identity are therefore unconfigured.
- The Resend domain is `failed` with one DKIM and two SPF checks failed. Fix DNS and replace the broad key with a sending-only, domain-restricted key after verification.
- Only Explore&Earn `dev` has Cloudinary credentials. Keep the Free product environment assigned to Explore&Earn; do not copy the Admin credential to the empty BidSpace, Sweepza, or LogLoads folders.
- Do not populate `stg` or `prd` by copying all of `dev`; verify the correct provider resource for each variable first.
