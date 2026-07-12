# Explore & Earn environment map

Last reviewed: 2026-07-12
Pass 5 refresh: PostHog separation and venture-specific Mapbox installation/verification added; no credential material is recorded.

This map contains configuration names and resource identities only.

## Environment lanes

| Environment | Secrets/config | Deployment | Data and external services | Status |
| --- | --- | --- | --- | --- |
| Development | Doppler `explore-and-earn` / `dev` has application configuration by name. | Local monorepo plus reviewed current source. | Clerk dev; scoped Resend; dedicated Stripe test; Cloudinary/PostHog/Sentry; venture-specific Mapbox public token | **Map local runtime/origin enforcement verified; Clerk/media gates open** |
| Staging | Doppler `explore-and-earn` / `stg` includes scoped Resend and the verified twelve-variable Stripe test contract. | Exact-source Preview `dpl_BgD…` passed the GitHub Vercel status; PR #243 merged at `b616b9e…`. | Dedicated test account/config; real custom-domain delivery not authorized/proven. Clerk/data isolation incomplete. | **Source/Preview green; delivery/auth proof open** |
| Production | Doppler/Vercel contain the scoped Resend identity; current Stripe production binding remains unactivated/unproven | Clean production `dpl_5HCPaCNCQuyip2iZTHpoMvSxjQFY` from current `main` `b616b9e10fa434422dd34442f6cb24194cf8d5ec` is `READY` | Dedicated Supabase. Dark Clerk DNS Verified/SSL Issued; runtime pending. Resend scoped key and explicit From/Reply-To installed, delivery pending. Dedicated Stripe live catalog exists, but credential/account ID and live webhook are not proven. | **Operational web runtime; auth/billing/mail delivery activation incomplete** |

## Configuration-name map

| Capability | Representative names used by the repository | Status / owner rule |
| --- | --- | --- |
| Application URL | `NEXT_PUBLIC_APP_URL` | **Target state** — environment-specific and owned by the matching Vercel environment. |
| Clerk | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`, `ADMIN_CLERK_USER_ID` | **Dark production resource created** — DNS Verified, SSL Issued; config/runtime install pending. One dev user cannot transfer automatically. |
| Supabase | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` | **Verified current** — project exists; **production-risk verification required** — confirm exact lane roles and non-production isolation. |
| Stripe | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, six subscription price names, and the announcement price names | Dedicated live/test accounts verified; canonical five-product/ten-price live catalog and seeded test contract exist. Production credential/account proof and correct webhook remain **blocked by production risk**. |
| Resend | `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_REPLY_TO_EMAIL` | Domain verified; scoped domain-only key installed across Doppler/Vercel; From `notifications@…` and support Reply-To configured. Exact-source Preview passed; delivery smoke and broad-key retirement remain open. |
| PostHog | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` | Existing project `291166` preserved unchanged. Own pair is presence-verified in Doppler all lanes and Vercel `explore-and-earn` Development plus combined Preview/Production; source `b616b9e…` consumes them. No fresh deployment/release event after the writes. `7893756…` disables replay/console capture. |
| Cloudinary | Cloud name and server/client upload configuration names | Free single environment; nine top-level namespaces now exist without media moves. Only Explore&Earn has active assets/credentials. Signed presets remain folder-unbound/overwrite-enabled; 55 former icon raws need docs/manifest classification. |
| Mapbox | `NEXT_PUBLIC_MAPBOX_TOKEN`; unused server-shaped legacy name remains separate | Venture-specific public token spans Doppler/Vercel lanes with 7 restrictions and exact origin enforcement. Exact-source local Chrome is green; fresh `READY` Preview at `b616b9e…` hits a pre-existing app error boundary before map initialization. Shared provider token stays rollback. |
| Sentry | DSN, organization, project, and source-map upload configuration names | Distinct active project. Ownership/one alert/scrubbers/IP scrubbing configured; 15 previously unassigned portfolio issues assigned to the AutomatedEmpires team. Owner-grade build token remains overprivileged pending safe replacement. |
| Cron and AI | Cron authorization and OpenAI/AI Gateway configuration names | **Observed in repository** — integration points exist; live resource identity is unverified in this pass. |

## Promotion and separation contract

- **Target state** — Development uses non-production provider resources and synthetic or approved data.
- **Target state** — Staging uses isolated webhooks and test-mode payments; no callback may target production accidentally.
- **Target state** — Production uses only the verified Explore & Earn domain and provider resources.
- **Target state** — Doppler `dev`, `stg`, and `prd` map only to their matching Vercel and provider environments.
- **Production-risk verification required** — Confirm whether Supabase uses separate projects, branches, or another documented non-production isolation mechanism.

## Evidence notes

- Explore & Earn `docs/runbooks/production-activation-gates.md` is the strongest repository status source.
- `apps/web/package.json`, `apps/web/middleware.ts`, `apps/web/next.config.ts`, `packages/db/`, `packages/mailer/`, and `apps/web/app/api/webhooks/` evidence the configuration surface.
- Provider existence facts labeled **Verified current** were supplied for the alignment pass; contents and values were not inventoried here.
- Pass 2 status records only provider response codes, resource state, counts, and equality results; it contains no credential values or fingerprints.
