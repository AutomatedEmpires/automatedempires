# Explore & Earn environment map

Last reviewed: 2026-07-10
Pass 2 provider refresh: Clerk, Resend, Mapbox, and Cloudinary were checked through read-only APIs and sanitized environment comparisons.

This map contains configuration names and resource identities only.

## Environment lanes

| Environment | Secrets/config | Deployment | Data and external services | Status |
| --- | --- | --- | --- | --- |
| Development | Doppler `explore-and-earn` / `dev` has 32 names. | Local monorepo development. | Clerk development instance has one user; only this lane has Clerk, Resend, Cloudinary, and Mapbox configuration. Resend's domain is failed; the Cloudinary folder is the only one with assets; Mapbox public access is shared. | **Verified development lane; production promotion is unsafe** |
| Staging | Doppler `explore-and-earn` / `stg` contains metadata only. | Vercel Preview is the intended lane. | No independently populated provider lane is established. | **Blocked:** do not promote development values |
| Production | Doppler `explore-and-earn` / `prd` contains metadata only; Vercel values are write-only. | Canonical Vercel production is `READY` at `exploreandearn.com`; `/api/health` returns healthy. | Dedicated Supabase project; production Clerk is missing and the Resend domain is `failed`; the live Stripe account resource is mixed with Sweepza and runtime identity is not provable from the write-only key. | **Operational web runtime; provider activation incomplete** |

## Configuration-name map

| Capability | Representative names used by the repository | Status / owner rule |
| --- | --- | --- |
| Application URL | `NEXT_PUBLIC_APP_URL` | **Target state** — environment-specific and owned by the matching Vercel environment. |
| Clerk | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`, `ADMIN_CLERK_USER_ID` | **Verified development only** — one dev user; no production config; webhook signing name absent. Development users do not transfer to production. |
| Supabase | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` | **Verified current** — project ref exists; **Unknown / founder verification required** — confirm the exact environment role and any non-production isolation. |
| Stripe | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, six subscription price names, and the current announcement price name | **Verified current** — account identity/provisioning is blocked; use the latest activation runbook rather than older nine-price documentation. |
| Resend | `RESEND_API_KEY`, `RESEND_FROM_EMAIL` | **Verified blocked** — broad dev key reaches the same team as LogLoads; domain is `failed`; explicit from-address is absent. Replace with sending-only/domain-restricted access after DNS verification. |
| PostHog | `NEXT_PUBLIC_POSTHOG_KEY` and host/config names | Repository docs identify US project `exploreandearn` (ID `291166`); dashboard settings and live ingestion were not authenticated. |
| Cloudinary | Cloud name and server/client upload configuration names | Free single product environment; only Explore&Earn has assets and only `dev` has credentials. Signed presets are not folder-bound and overwrite is enabled. |
| Mapbox | Public token and server token names | Public token is active and shared with BidSpace/LogLoads; the server token is unusable. Metadata/rotation require owner access with `tokens:read` and `tokens:write`. |
| Sentry | DSN, organization, project, and source-map upload configuration names | Verified org `automated-empires`, project `explore-and-earn`; development org slug corrected. Five unresolved issues remain. |
| Cron and AI | Cron authorization and OpenAI/AI Gateway configuration names | **Observed in repository** — integration points exist; live resource identity is unverified in this pass. |

## Promotion and separation contract

- **Target state** — Development uses non-production provider resources and synthetic or approved data.
- **Target state** — Staging uses isolated webhooks and test-mode payments; no callback may target production accidentally.
- **Target state** — Production uses only the verified Explore & Earn domain and provider resources.
- **Target state** — Doppler `dev`, `stg`, and `prd` map only to their matching Vercel and provider environments.
- **Unknown / founder verification required** — Confirm whether Supabase uses separate projects, branches, or another documented isolation mechanism for non-production.

## Evidence notes

- Explore & Earn `docs/runbooks/production-activation-gates.md` is the strongest repository status source.
- `apps/web/package.json`, `apps/web/middleware.ts`, `apps/web/next.config.ts`, `packages/db/`, `packages/mailer/`, and `apps/web/app/api/webhooks/` evidence the configuration surface.
- Provider existence facts labeled **Verified current** were supplied for the alignment pass; contents and values were not inventoried here.
- Pass 2 status records only provider response codes, resource state, counts, and equality results; it contains no credential values or fingerprints.
