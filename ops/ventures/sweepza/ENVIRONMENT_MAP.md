# Sweepza environment map

## Environment ownership

| Logical environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Local development | `sweepza` / `dev` (25 names) | Local Next.js | Dedicated Supabase; Clerk development instance; Stripe sandbox | **Verified current** |
| Personal development | `sweepza` / `dev_personal` | Local only | Must not be assumed safe for production | **Observed in repository** |
| Staging / preview | `sweepza` / `stg` (22 names) | Vercel Preview | Same Clerk development instance as dev/prd; Stripe sandbox; data isolation strategy not proven | **Cross-environment identity contamination** |
| Production | `sweepza` / `prd` (26 names) | Vercel Production `READY` at `sweepza.com` | Ref `ojwhsntcpmoxnzisuomq`; Clerk is still development; Stripe live account is mixed with Explore&Earn | **Live web runtime; identity/payment separation blocked** |

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

Authenticated health reports app URL, Supabase public/service, Clerk app, Stripe app/webhook, and GitHub worker present. Clerk webhook, PostHog, Sentry, and Notion report absent. Doppler names exist, but names do not prove correct values or account boundaries.

That list is incomplete relative to the current runtime contract: price variables, Resend variables, and `CRON_SECRET` must also be verified before production.

## Rules

- Preview and Production must use different webhook endpoints/configurations where the provider supports them.
- Service-role, server, webhook, CI, and cron values are server-only.
- `NEXT_PUBLIC_APP_URL` should use the verified custom domain in production and provider/preview hosts outside production.
- A variable's presence is not proof that it belongs to the correct provider account; verify account/project IDs independently.
