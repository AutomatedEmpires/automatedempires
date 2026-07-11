# Sweepza environment map

Pass 3 refresh: authenticated GoDaddy/Clerk plus code-qualified email and live telemetry inventory; no credential material is recorded.

## Environment ownership

| Logical environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Local development | `sweepza` / `dev` (25 names) | Local Next.js | Dedicated Supabase; Clerk development instance with one user; Stripe sandbox | **Verified current** |
| Personal development | `sweepza` / `dev_personal` | Local only | Must not be assumed safe for production | **Observed in repository** |
| Staging / preview | `sweepza` / `stg` (22 names) | Vercel Preview | Same one-user Clerk development instance and same webhook signing configuration as dev/prd; Stripe sandbox; data isolation strategy not proven | **Cross-environment identity contamination** |
| Production | `sweepza` / `prd` (26 names) | Vercel Production `READY` at `sweepza.com` | Live config uses dev Clerk and mixed Stripe. Dark production Clerk DNS Verified/SSL Issued; config/runtime keys pending. Resend names absent although code sends mail. | **Live web runtime; identity/payment/email separation blocked** |

## Current variable-name contract

Names were extracted from the committed example/schema and sync script; values were not read or copied.

| Provider / purpose | Names |
|---|---|
| Application | `NEXT_PUBLIC_APP_URL` |
| Clerk | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET` |
| Supabase | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| Stripe | `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_HOST_BASELINE`, `STRIPE_PRICE_ADDITIONAL_LISTING` |
| Email | `RESEND_API_KEY`, `RESEND_FROM_EMAIL` |
| PostHog | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` |
| Sentry | `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_ORG`, `SENTRY_PROJECT`, `SENTRY_AUTH_TOKEN` |
| Cron | `CRON_SECRET` |
| GitHub worker | `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_TOKEN` |
| Notion worker | `NOTION_API_TOKEN` |

## Documented provisioning state

Authenticated health reports app URL, Supabase public/service, Clerk app, Stripe app/webhook, and GitHub worker present. The deployed health response reports Clerk webhook, PostHog, Sentry, and Notion absent. Pass 2 confirms that Doppler contains the same Clerk webhook signing configuration in all three lanes, so the health result indicates a deployment/sync or endpoint-readiness gap rather than three isolated webhook resources.

That list is incomplete relative to the current runtime contract: price variables and `CRON_SECRET` still require verification. `RESEND_API_KEY` and `RESEND_FROM_EMAIL` are absent from all three lanes. Listing approval/hold and winner publication call the mail helper, so current calls no-op. Local commit `89bbe121…` makes helpers/logs report `skipped` and keeps `sent_at` null unless Resend returns 2xx; its 124 tests, lint, route type generation, typecheck, and build pass, but it is not pushed/deployed. No Mapbox or Cloudinary credential is configured.

PostHog host names exist but its key is empty; the live organization has only the Explore&Earn project. Sweepza has a distinct Sentry project/DSN but no first event, environment, owner routing, or metric alert.

## Rules

- Preview and Production must use different webhook endpoints/configurations where the provider supports them.
- Service-role, server, webhook, CI, and cron values are server-only.
- `NEXT_PUBLIC_APP_URL` should use the verified custom domain in production and provider/preview hosts outside production.
- A variable's presence is not proof that it belongs to the correct provider account; verify account/project IDs independently.
- Clerk production must move to a production instance; strict staging requires a separate Clerk application/domain because Clerk has no native staging instance.
