# Explore&Earn Doppler Map

**Doppler project:** `explore-and-earn`
**Names-only snapshot:** 2026-07-10
**Configs inspected:** `dev`, `stg`, `prd`
**Pass 2 status:** Configured values were used only in transient, read-only provider calls; only sanitized status, equality, and resource metadata were retained.
**Pass 4 delta:** Scoped Resend key/From/Reply-To are verified in `dev`/`stg`/`prd`; twelve expected Stripe test names are verified in `dev`/`stg`. The detailed Pass 2 inventory below is retained as the baseline where unchanged.

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
| `CLOUDINARY_CLOUD_NAME` | Cloudinary environment/cloud identifier | `dev` | `configured` | Explore&Earn is the only confirmed active consumer; nine top-level namespaces now exist without asset moves |
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
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Browser-visible Stripe account identifier | `dev`, `stg` | `configured` | Dedicated test account; part of the twelve-name test contract |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Browser-visible Supabase anonymous key | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Browser-visible Supabase publishable key | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SUPABASE_URL` | Browser-visible Supabase project URL | `dev` | `unknown` | — |
| `RESEND_API_KEY` | Resend API authentication | `dev`, `stg`, `prd` | `configured` | Sending-only and restricted to verified `exploreandearn.com`; broad provider key retained only as rollback pending delivery proof |
| `RESEND_FROM_EMAIL` | Transactional From identity | `dev`, `stg`, `prd` | `configured` | `notifications@exploreandearn.com`; identity only, no key material |
| `RESEND_REPLY_TO_EMAIL` | Support Reply-To identity | `dev`, `stg`, `prd` | `configured` | `support@exploreandearn.com`; verified mailbox identity |
| `SENTRY_AUTH_TOKEN` | Sentry build/release API authentication | `dev` | `unknown` | — |
| `SENTRY_DSN` | Server-side Sentry event endpoint | `dev` | `unknown` | — |
| `SENTRY_ORG` | Sentry organization slug | `dev` | `configured` | Corrected to the non-secret slug `automated-empires` |
| `SENTRY_PROJECT` | Sentry project slug | `dev` | `unknown` | — |
| `STRIPE_SECRET_KEY` | Server-side Stripe API authentication | `dev`, `stg` | `configured` | Dedicated test account; part of the twelve-name contract. Production key/account binding remains unproven |
| `SUPABASE_ACCESS_TOKEN` | Supabase management API authentication | `dev` | `unknown` | — |
| `SUPABASE_PROJECT_REF` | Primary Supabase project reference | `dev` | `unknown` | — |
| `SUPABASE_PROJECT_REF_STAGING` | Staging Supabase project reference | `dev` | `unknown` | A staging reference name exists in `dev`, while the Doppler `stg` config has metadata only |
| `SUPABASE_SERVICE_ROLE_KEY` | Privileged server-side Supabase access | `dev` | `unknown` | — |

The Pass 2 statement that `stg`/`prd` were metadata-only is superseded by the Pass 4 entries above. No unlisted variable should be inferred present, and no value is reproduced.

## Separation findings

- The public Mapbox token is shared with BidSpace and LogLoads. Create venture/environment-specific Mapbox tokens with URL restrictions, deploy replacements, then retire the shared token.
- Mapbox replacement is approved but blocked by account-owner confirmation. Management scopes never belong in application runtime.
- Explore&Earn's runtime key is now scoped; the legacy LogLoads key still reaches the same team. This is account coupling, not shared key material.
- `CLERK_WEBHOOK_SECRET` remains absent from the recorded lanes; production auth synchronization is unconfigured. Resend From/Reply-To are now explicit.
- The Resend domain is verified. Exact-SHA delivery/reply smoke and broad-key retirement remain open.
- Only Explore&Earn `dev` has Cloudinary credentials. Nine namespaces exist, but do not copy Admin authority to empty venture folders.
- Do not populate `stg` or `prd` by copying all of `dev`; verify the correct provider resource for each variable first.
