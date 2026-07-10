# Next Infrastructure Actions

**Prepared:** 2026-07-10

This sequence completes the highest-risk separation work without mixing it with feature development.

## Founder-gated decisions

1. Decide the independent legal/account structure for Explore&Earn and Sweepza Stripe. Do not move customers, subscriptions, payouts, or live payment data until a written migration and rollback plan is approved.
2. Choose either a paid Resend upgrade or a separate LogLoads account. Approve only provider-issued DNS records for the selected LogLoads sending domain.
3. Authorize venture-specific production Clerk instances for Explore&Earn, Sweepza, and LogLoads.
4. Choose/purchase the BidSpace and Lake & Pine domains.
5. Launch Chrome with the Codex extension for authenticated GoDaddy and remaining provider-dashboard ownership checks.

## Engineering pass 1: restore safe runtime baselines

1. Lake & Pine: merge or faithfully reproduce `feat/production-foundation` in clean Git history, commit the environment contract, deploy a clean preview, then replace the dirty production redeploy from main.
2. LogLoads: reproduce and fix the production build from main, verify the Next.js runtime artifact, deploy a clean preview, then deploy production. Keep logloads.com on GoDaddy until the canonical Vercel deployment and rollback target pass.
3. ORAN: reconcile the Azure-to-Vercel branch with the Supabase schema/ledger, add the missing cron and public-site environment contract, remove stale Azure CSP/docs, and verify all cron routes in preview. Connect Git and change DNS only after merge approval.
4. AutomatedEmpires: review/merge the green protected preview, then verify a `main` production provider host before DNS. BidSpace: create its first reviewed preview before attaching domains or production variables.
5. Re-run page, health, console, webhook-route, and deployment checks for every affected runtime.

## Engineering pass 2: identity, money, and email separation

1. Configure production Clerk domains, redirects, OAuth providers, Supabase JWT templates, lifecycle webhooks, and admin recovery per venture.
2. Provision independent Stripe sandboxes/live accounts and business-specific products/webhooks; migrate only after end-to-end checkout, signature, entitlement, refund, and portal tests.
3. Verify Explore&Earn's existing Resend domain DNS and delivery. Provision LogLoads in its approved account/domain and rotate away from the coupled credential only after both sending paths pass.
4. Update Doppler first, propagate through scoped integrations, deploy previews, then promote. Never paste secrets into GitHub, docs, or chat.

## Engineering pass 3: data and observability

1. Back up and reconcile Explore&Earn and ORAN migration ledgers before any remote mutation.
2. Confirm service-only intent for RLS tables with zero policies in Explore&Earn, ORAN, BidSpace, and LogLoads.
3. Create separate restricted Mapbox tokens, replace the shared public token, verify maps/geocoding, then retire the old token.
4. Complete Sweepza's required PostHog/Sentry/webhook integrations and verify live ingestion/alerts.
5. Decide whether Cloudinary folder separation is sufficient; if not, plan a checksum-based media migration to independent environments.

## Governance and cleanup

1. Migrate the five Explore&Earn GitHub secrets only after every workflow consumer has a tested Doppler-backed replacement.
2. Review the two duplicate Vercel projects and the Doppler example-project; delete only with explicit owner approval and rollback evidence.
3. Export each registered DNS zone, correct the possible duplicate SPF on automatedempires.com, preserve mailbox MX records, and document rollback before any web cutover.
4. Review these matrices quarterly and before any venture sale, ownership transfer, billing change, or credential rotation.

## Definition of transfer-ready

A venture is transfer-ready only when its production repo, secrets, runtime, data, auth, money, email, analytics/media/maps, DNS, webhooks, billing owner, emergency owner, and recovery path are all venture-specific or explicitly documented as a parent-governed project boundary, and its transfer checklist can be completed without another venture's credential or production account.
