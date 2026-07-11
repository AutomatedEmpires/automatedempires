# Explore & Earn environment map

Last reviewed: 2026-07-10
Pass 3 refresh: authenticated GoDaddy/Resend/Clerk evidence plus branch-qualified Mapbox, live PostHog/Sentry, and Cloudinary inventory; no credential material is recorded.

This map contains configuration names and resource identities only.

## Environment lanes

| Environment | Secrets/config | Deployment | Data and external services | Status |
| --- | --- | --- | --- | --- |
| Development | Doppler `explore-and-earn` / `dev` has 32 names. | Local monorepo development at inspected `main` `528d28ccfb36…`. | Clerk dev has one user; broad Resend key, Cloudinary, PostHog, Sentry, and shared Mapbox public access are configured. Resend domain itself is now verified. | **Verified development lane; broad credentials are not production separation** |
| Staging | Doppler `explore-and-earn` / `stg` contains metadata only. | Vercel Preview is the intended lane. | No independently populated provider lane is established. | **Blocked:** do not promote development values |
| Production | Doppler `explore-and-earn` / `prd` metadata only; Vercel values write-only | Canonical Vercel production `READY`; health healthy | Dedicated Supabase. Dark Clerk DNS Verified/SSL Issued; OAuth/JWT/webhook/admin/runtime keys pending. Resend domain verified; scoped key/sender/smoke pending. Stripe mixed | **Operational web runtime; identity/money/mail activation incomplete** |

## Configuration-name map

| Capability | Representative names used by the repository | Status / owner rule |
| --- | --- | --- |
| Application URL | `NEXT_PUBLIC_APP_URL` | **Target state** — environment-specific and owned by the matching Vercel environment. |
| Clerk | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`, `ADMIN_CLERK_USER_ID` | **Dark production resource created** — DNS Verified, SSL Issued; config/runtime install pending. One dev user cannot transfer automatically. |
| Supabase | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` | **Verified current** — project ref exists; **Unknown / founder verification required** — confirm the exact environment role and any non-production isolation. |
| Stripe | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, six subscription price names, and the current announcement price name | **Verified current** — account identity/provisioning is blocked; use the latest activation runbook rather than older nine-price documentation. |
| Resend | `RESEND_API_KEY`, `RESEND_FROM_EMAIL` | **DNS completed / runtime blocked** — domain verified; broad dev key reaches the same 1/1-domain team as LogLoads; explicit sender and scoped replacement are absent. |
| PostHog | `NEXT_PUBLIC_POSTHOG_KEY` and host/config names | Live project `exploreandearn` (ID `291166`) is the organization's only project; ingestion is active and 39 pageviews were queried for 30 days. Policy/owner settings remain open. |
| Cloudinary | Cloud name and server/client upload configuration names | Free single product environment; only Explore&Earn has assets and only `dev` has credentials. Signed presets are not folder-bound and overwrite is enabled. |
| Mapbox | Public token and server token names | `main` has a real `/map` Mapbox GL JS consumer. Public token is shared/apparently unrestricted; no server consumer exists and server token is invalid. Create restricted public dev/prd replacements only. |
| Sentry | DSN, organization, project, and source-map upload configuration names | Distinct project. Last 14 days: production 7 issues/6,489 occurrences, Vercel production 2/5, development 5/1,024; all unassigned. Owner-grade dev token is overprivileged. |
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
