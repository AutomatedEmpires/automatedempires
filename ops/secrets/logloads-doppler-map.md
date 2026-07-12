# LogLoads Doppler Map

**Doppler project:** `logloads`
**Names-only snapshot:** 2026-07-12
**Configs inspected:** `dev`, `stg`, `prd`
**Pass 2 status:** Configured values were used only in transient, read-only provider calls; only sanitized status, equality, and resource metadata were retained.
**Pass 4 delta:** `support@logloads.com` exists as a mailbox, but no LogLoads Resend sending domain exists. The legacy broad same-team key is not an acceptable production boundary. Supabase-canonical source convergence precedes runtime completion.
**Pass 5 delta:** PostHog project `509086` exists as separately recorded. A venture-specific public Mapbox token now spans all Doppler lanes and matching Vercel targets; the secret authorizer remained server-side only.

Inventory used Doppler CLI names-only JSON mode with environment reads disabled. No secret value was requested, returned, or documented.

## Status legend

- `configured` — non-empty configuration was established by separate safe verification; the value is not recorded here.
- `empty` — an empty value was safely established without displaying it.
- `metadata` — Doppler-managed project/config/environment metadata.
- `unknown` — the name exists, but names-only output cannot establish whether its value is configured or empty.

## Variable inventory

| Variable | Purpose | Configs present | Status | Notes |
|---|---|---|---|---|
| `CLERK_SECRET_KEY` | Server-side Clerk API authentication | `dev`, `stg` | `configured` | Both authenticate the same development instance, which contains zero users; absent from `prd` |
| `DOPPLER_CONFIG` | Identifies the active Doppler config | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_ENVIRONMENT` | Identifies the active Doppler environment | `dev`, `stg`, `prd` | `metadata` | — |
| `DOPPLER_PROJECT` | Identifies the Doppler project | `dev`, `stg`, `prd` | `metadata` | — |
| `LOGLOADS_ENABLE_DEV_LOGIN` | Enables the development-login path | `dev`, `prd` | `unknown` | Presence in `prd` requires security review; value was not inspected |
| `LOGLOADS_SESSION_SECRET` | Signs or encrypts LogLoads application sessions | `dev`, `prd` | `unknown` | — |
| `LOGLOADS_STATE_FILE` | Filesystem location for local application state | `dev` | `unknown` | Development only |
| `MAPBOX_ACCESS_TOKEN` | Mapbox access for server-side mapping/geocoding work | `dev`, `prd` | `configured` | Direct equality check confirms it is the same browser-visible public token, not a separate server credential |
| `NEXT_PUBLIC_APP_URL` | Browser-visible canonical application URL | `dev` | `unknown` | Absent from `stg` and `prd` |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Browser-visible Clerk application identifier | `dev`, `stg` | `configured` | Same development instance in both lanes; absent from `prd` |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Browser-visible LogLoads-specific Mapbox token | `dev`, `stg`, `prd` | `configured` | Masked; 6 allowed origins; exact Preview/localhost `200`, unrelated origin `403` |
| `NEXT_PUBLIC_MAP_PROVIDER` | Browser-visible map-provider selector | `dev`, `prd` | `unknown` | — |
| `NEXT_PUBLIC_POSTHOG_HOST` | Browser-visible PostHog ingestion host | `dev`, `stg`, `prd` | `configured` | Presence-only checks passed |
| `NEXT_PUBLIC_POSTHOG_KEY` | Browser-visible LogLoads PostHog project key | `dev`, `stg`, `prd` | `configured` | Presence-only checks passed; value excluded |
| `RESEND_API_KEY` | Resend API authentication | `dev`, `prd` | `configured` | Legacy same-team broad key; Explore&Earn domain is verified, but LogLoads has no sending domain and must not use E&E identity |
| `SENTRY_DSN` | Server-side Sentry event endpoint | `dev`, `stg`, `prd` | `unknown` | — |
| `SUPABASE_ANON_KEY` | Supabase anonymous/public API key | `dev`, `prd` | `unknown` | — |
| `SUPABASE_PROJECT_REF` | Supabase project reference | `dev`, `prd` | `unknown` | — |
| `SUPABASE_SERVICE_ROLE_KEY` | Privileged server-side Supabase access | `dev`, `stg`, `prd` | `unknown` | — |
| `SUPABASE_URL` | Supabase project URL | `dev`, `prd` | `unknown` | — |

No variable is classified as `empty` because names-only inspection does not expose that state and no separate safe evidence established it.

## Separation findings

- The venture-specific public token spans all lanes and Vercel Development/Preview/Production. The old/shared provider token remains active rollback until the pre-existing Preview app error path and later Production gate pass.
- `MAPBOX_ACCESS_TOKEN` is misleadingly named: it duplicates the public token and must not receive the replacement browser token. Remove/rename only through a verified deployment after source proves no server consumer.
- The LogLoads and Explore&Earn Resend credentials are distinct by direct equality check but both have broad access to the same team. This account coupling prevents independent transfer; it is not credential reuse.
- `LOGLOADS_EMAIL_FROM` is absent from the recorded configs. `support@logloads.com` is a reply/support mailbox, not a transactional sender resource. Do not use the provider testing sender as production.
- A clean separation requires a LogLoads-owned Resend team and sending domain, or an approved paid-capacity exception with explicit transfer limitations. Do not revoke either current credential until the replacement boundary is deployed and verified.
- No Cloudinary credential exists; the required empty `logloads/` namespace is organization only.
- Clerk `dev` and `stg` share one zero-user development instance; `prd` is absent. Create explicit staging/production identity without copying development values.
- `LOGLOADS_ENABLE_DEV_LOGIN` is present in `prd`. Verify that production behavior is disabled through a safe runtime/configuration check without documenting its value.
- Key/host installation is complete. Fresh-deploy only through the accepted runtime gates, then verify a controlled event reaches project `509086` before calling analytics active.
