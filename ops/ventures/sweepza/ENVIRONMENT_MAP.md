# Sweepza environment map

Pass 5 refresh: separate PostHog project/cost/privacy state added; no credential material is recorded.

## Environment ownership

| Logical environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Local development | `sweepza` / `dev` (25 names) | Local Next.js | Dedicated Supabase; Clerk development instance with one user; Stripe sandbox | **Verified current** |
| Personal development | `sweepza` / `dev_personal` | Local only | Must not be assumed safe for production | **Observed in repository** |
| Staging / preview | `sweepza` / `stg` (22 names) | Final #44 Preview `dpl_DyK72pRkkjYCjAzTd7RJNE9uV7iN` is `READY` | Same one-user Clerk development instance/signing configuration as dev/prd; dedicated Stripe sandbox `acct_1Teq…` and correct prices; data isolation unproven | **Source/Stripe lane aligned; identity contamination remains** |
| Production | `sweepza` / `prd` (26 names) | Clean production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` from current `main` `4c0aad183fe9442e4546985b373b26498e38e6e7` is `READY` at `sweepza.com` | Dev Clerk still active; dark production Clerk DNS/SSL verified but runtime pending. Dedicated Stripe live `acct_1Spx…` and correct prices aligned; foreign E&E webhook/unclassified objects remain. No Resend sender. | **Live runtime; source/payment boundary fixed, identity/email/residual cleanup open** |

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

Pass 4 verifies the $19/$5 prices and aligns Vercel lanes. `CRON_SECRET` still needs verification. Resend names remain absent; mail must report `skipped`. #47/#48/#49 merged; #49 squash is `005af4fdd09ffab279ece37e8d0426847b02ff5b` and its historical accepted Preview `dpl_6WAE…` is `READY`. Rewritten #44 source `d0f5a3abef0dd6c268e57da4e2a91f3449661517` passed final Preview `dpl_DyK72pRkkjYCjAzTd7RJNE9uV7iN` and merged green as current `main` `4c0aad183fe9442e4546985b373b26498e38e6e7`; current production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` is `READY` and is the rollback candidate. No Mapbox/Cloudinary credential; empty namespace only.

PostHog project `509084` has autocapture, replay, and console capture disabled. Own pair is presence-verified in all Doppler lanes. Vercel now has exactly Development plus combined Preview+Production after deleting the stale Production-only host duplicate by environment ID. Source `4c0aad1…` consumes the pair, but no deploy/event smoke occurred; historical health is not post-write proof.

## Rules

- Preview and Production must use different webhook endpoints/configurations where the provider supports them.
- Service-role, server, webhook, CI, and cron values are server-only.
- `NEXT_PUBLIC_APP_URL` should use the verified custom domain in production and provider/preview hosts outside production.
- A variable's presence is not proof that it belongs to the correct provider account; verify account/project IDs independently.
- Clerk production must move to a production instance; strict staging requires a separate Clerk application/domain because Clerk has no native staging instance.
