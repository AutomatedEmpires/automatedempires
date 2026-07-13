# Sweepza environment map

Pass 5 refresh: separate PostHog project/cost/privacy state added; no credential material is recorded.

## Environment ownership

| Logical environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Local development | `sweepza` / `dev` (25 names) | Local Next.js | Dedicated Supabase; Clerk development instance with one user; Stripe sandbox | **Verified current** |
| Personal development | `sweepza` / `dev_personal` | Local only | Must not be assumed safe for production | **Observed in repository** |
| Staging / preview | `sweepza` / `stg` (22 names) | Corrected #53 Preview `dpl_b4bLyYvsoFLou5GxGYnapC14QPzX` at `f2977cb` is `READY` and reports dedicated Clerk/Sentry health | Dedicated Stripe sandbox exists but does not authorize billing; data isolation remains unproven | **Current source technical evidence; product/role/data gates remain** |
| Production | `sweepza` / `prd` (26 names) | Production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` from prior source `4c0aad183fe9442e4546985b373b26498e38e6e7` is `READY` at `sweepza.com`; #53 was not Production-redeployed | Dedicated Clerk keys were configured by the execution pass, but no Production redeploy occurred. Stripe accounts/prices are provider evidence only; foreign E&E webhook/unclassified objects remain. No Resend sender. | **Older live artifact; current source/product/provider acceptance remains gated** |

## Current variable-name contract

Names were extracted from the committed example/schema and sync script; values were not read or copied.

| Provider / purpose | Names |
|---|---|
| Application | `NEXT_PUBLIC_APP_URL` |
| Clerk | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET` |
| Supabase | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| Stripe | `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_HOST_BASELINE`, `STRIPE_PRICE_ADDITIONAL_LISTING` (legacy host-tool billing contract; not operator/payment authority) |
| Email | `RESEND_API_KEY`, `RESEND_FROM_EMAIL` |
| PostHog | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` |
| Sentry | `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_ORG`, `SENTRY_PROJECT`, `SENTRY_AUTH_TOKEN` |
| Cron | `CRON_SECRET` |
| GitHub worker | `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_TOKEN` |
| Notion worker | `NOTION_API_TOKEN` |

## Documented provisioning state

Authenticated health reports app URL, Supabase public/service, Clerk app, Stripe app/webhook, and GitHub worker present. The deployed health response reports Clerk webhook, PostHog, Sentry, and Notion absent. Pass 2 confirms that Doppler contains the same Clerk webhook signing configuration in all three lanes, so the health result indicates a deployment/sync or endpoint-readiness gap rather than three isolated webhook resources.

Pass 4 verifies the $19/$5 prices and aligns Vercel lanes. `CRON_SECRET` still needs verification. Resend names remain absent; mail must report `skipped`. #47/#48/#49 merged; #49 squash is `005af4fdd09ffab279ece37e8d0426847b02ff5b` and its historical accepted Preview `dpl_6WAE…` is `READY`. Rewritten #44 source `4c0aad183fe9442e4546985b373b26498e38e6e7` produced production `dpl_9N57qj7PHDteARUpVFWCKAxYutts`, which remains the rollback candidate. Later #53 current source `f2977cb` has protected Preview `dpl_b4bLyYvsoFLou5GxGYnapC14QPzX`; no Production redeploy occurred. No Mapbox env exists: the labeled secret authorizer was validated but intentionally unused because no consumer exists. Cloudinary remains an empty namespace only.

PostHog project `509084` has autocapture, replay, and console capture disabled. Own pair is presence-verified in all Doppler lanes. Vercel now has exactly Development plus combined Preview+Production after deleting the stale Production-only host duplicate by environment ID. The earlier production source consumes the pair, but no controlled event smoke occurred; #53 health evidence does not replace ingestion proof.

## Rules

- Preview and Production must use different webhook endpoints/configurations where the provider supports them.
- Keep entry, winner-selection, official-rules, eligibility, prize, and payment/operator behavior disabled. Provider variables do not override the discovery/link-out product boundary.
- Service-role, server, webhook, CI, and cron values are server-only.
- `NEXT_PUBLIC_APP_URL` should use the verified custom domain in production and provider/preview hosts outside production.
- A variable's presence is not proof that it belongs to the correct provider account; verify account/project IDs independently.
- Clerk production must move to a production instance; strict staging requires a separate Clerk application/domain because Clerk has no native staging instance.
