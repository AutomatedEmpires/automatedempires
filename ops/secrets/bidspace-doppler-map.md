# BidSpace Doppler Map

**Doppler project:** `bidspace`
**Names-only snapshot:** 2026-07-10
**Configs inspected:** `dev`, `stg`, `prd`
**Pass 2 status:** Configured values were used only in transient, read-only capability checks; only sanitized status and equality metadata were retained.

Inventory used Doppler CLI names-only JSON mode with environment reads disabled. No secret value was requested, returned, or documented.

## Status legend

- `configured` — non-empty configuration was established by separate safe verification; the value is not recorded here.
- `empty` — an empty value was safely established without displaying it.
- `metadata` — Doppler-managed project/config/environment metadata.
- `unknown` — the name exists, but names-only output cannot establish whether its value is configured or empty.

## Variable inventory

| Variable | Purpose | Configs present | Status | Notes |
|---|---|---|---|---|
| `CLERK_ENCRYPTION_KEY` | Application encryption material associated with Clerk integration | `dev` | `unknown` | — |
| `CLERK_PUBLISHABLE_KEY` | Clerk publishable application identifier | `dev` | `unknown` | Confirm whether this duplicates the `NEXT_PUBLIC_` variable |
| `CLERK_SECRET_KEY` | Server-side Clerk API authentication | `dev` | `unknown` | — |
| `DOPPLER_CONFIG` | Identifies the active Doppler config | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_ENVIRONMENT` | Identifies the active Doppler environment | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_PROJECT` | Identifies the Doppler project | `dev`, `stg`, `prd` | `metadata` | — |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Browser-visible Clerk application identifier | `dev` | `unknown` | — |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Browser-visible Mapbox token | `dev` | `configured` | Active and identical to the Explore&Earn and LogLoads public token; current probe is consistent with no URL restriction |
| `NEXT_PUBLIC_SENTRY_DSN` | Browser-visible Sentry event endpoint | `dev` | `unknown` | — |
| `NEXT_PUBLIC_SITE_URL` | Canonical browser-visible application URL | `dev` | `unknown` | No production domain has been selected |
| `SENTRY_DSN` | Server-side Sentry event endpoint | `dev` | `unknown` | — |
| `SENTRY_ORG` | Sentry organization slug | `dev` | `unknown` | — |
| `SENTRY_PROJECT` | Sentry project slug | `dev` | `unknown` | — |
| `SUPABASE_ANON_KEY` | Supabase anonymous/public API key | `dev` | `unknown` | — |
| `SUPABASE_SERVICE_ROLE_KEY` | Privileged server-side Supabase access | `dev` | `unknown` | — |
| `SUPABASE_URL` | Supabase project URL | `dev` | `unknown` | — |

The `stg` and `prd` configs currently contain Doppler metadata only. No variable is classified as `empty` because that state was not safely established.

## Separation finding

The public Mapbox token is shared with Explore&Earn and LogLoads. Current authorization lacks `tokens:read` for metadata inventory and `tokens:write` for replacement. After the production domain is selected, have the account owner create a BidSpace-specific public token with only the required read scopes and environment-appropriate URL restrictions. Deploy the replacement before retiring the shared token.

No `MAPBOX_ACCESS_TOKEN` or Cloudinary credential name is present in BidSpace Doppler. The repository's server-token and Cloudinary names are scaffold intent only; the empty BidSpace Cloudinary folder is not an active media boundary.
