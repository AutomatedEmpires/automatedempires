# LogLoads Doppler Map

**Doppler project:** `logloads`
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
| `CLERK_SECRET_KEY` | Server-side Clerk API authentication | `dev`, `stg` | `unknown` | Absent from `prd` |
| `DOPPLER_CONFIG` | Identifies the active Doppler config | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_ENVIRONMENT` | Identifies the active Doppler environment | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_PROJECT` | Identifies the Doppler project | `dev`, `stg`, `prd` | `metadata` | — |
| `LOGLOADS_ENABLE_DEV_LOGIN` | Enables the development-login path | `dev`, `prd` | `unknown` | Presence in `prd` requires security review; value was not inspected |
| `LOGLOADS_SESSION_SECRET` | Signs or encrypts LogLoads application sessions | `dev`, `prd` | `unknown` | — |
| `LOGLOADS_STATE_FILE` | Filesystem location for local application state | `dev` | `unknown` | Development only |
| `MAPBOX_ACCESS_TOKEN` | Mapbox access for server-side mapping/geocoding work | `dev`, `prd` | `unknown` | Do not assume it matches the public token without separate verification |
| `NEXT_PUBLIC_APP_URL` | Browser-visible canonical application URL | `dev` | `unknown` | Absent from `stg` and `prd` |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Browser-visible Clerk application identifier | `dev`, `stg` | `unknown` | Absent from `prd` |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Browser-visible Mapbox token | `dev`, `prd` | `configured` | Known to be shared with Explore&Earn and BidSpace; separation required |
| `NEXT_PUBLIC_MAP_PROVIDER` | Browser-visible map-provider selector | `dev`, `prd` | `unknown` | — |
| `RESEND_API_KEY` | Resend API authentication | `dev`, `prd` | `configured` | This credential differs from Explore&Earn's credential; both access the same Resend account and sending-domain boundary under the current paid one-domain plan limit |
| `SENTRY_DSN` | Server-side Sentry event endpoint | `dev`, `stg`, `prd` | `unknown` | — |
| `SUPABASE_ANON_KEY` | Supabase anonymous/public API key | `dev`, `prd` | `unknown` | — |
| `SUPABASE_PROJECT_REF` | Supabase project reference | `dev`, `prd` | `unknown` | — |
| `SUPABASE_SERVICE_ROLE_KEY` | Privileged server-side Supabase access | `dev`, `stg`, `prd` | `unknown` | — |
| `SUPABASE_URL` | Supabase project URL | `dev`, `prd` | `unknown` | — |

No variable is classified as `empty` because names-only inspection does not expose that state and no separate safe evidence established it.

## Separation findings

- The public Mapbox token is shared with Explore&Earn and BidSpace. Create LogLoads-specific tokens for each active environment, apply URL restrictions, deploy replacements, then retire the shared token.
- The LogLoads and Explore&Earn Resend credentials have different fingerprints, intentionally omitted here, but both access the same Resend account/domain because the paid plan supports one domain. This documented account/domain coupling prevents independent transfer; it is not credential reuse.
- A clean separation requires a LogLoads-owned Resend account and sending domain, or an approved scoped subdomain strategy. Do not revoke either distinct credential until the replacement boundary is deployed and verified.
- `LOGLOADS_ENABLE_DEV_LOGIN` is present in `prd`. Verify that production behavior is disabled through a safe runtime/configuration check without documenting its value.
