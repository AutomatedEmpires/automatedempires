# Next Infrastructure Actions

**Prepared:** 2026-07-10 (reconciled in Pass 2)

This sequence completes the highest-risk separation work without mixing it with feature development.

## Founder-gated decisions

1. Select Stripe separation option A, B, or C in `STRIPE_LIVE_ACCOUNT_SEPARATION_PLAN.md`; name the retaining legal account owner and assign the two customer records and one draft invoice. Plan approval does not authorize live mutation or cutover.
2. Keep the existing Resend team/domain for Explore&Earn and approve authenticated DNS repair. For LogLoads, approve a separate paid team (recommended) or a documented shared-plan exception; decide whether Sweepza transactional email is required and fund its separate team if so.
3. Authorize dark venture-specific Clerk production activation for Explore&Earn, Sweepza, and LogLoads. Decide that the one Explore&Earn and one Sweepza development users are test identities or must re-register; Clerk cannot transfer them to production.
4. Choose LogLoads hosting Path A (single persistent-volume writer) or Path B (Supabase/Postgres-canonical stateless Vercel). Do not treat ENOENT repair as production readiness.
5. Choose temporary/shared, paid-parent, or standalone Cloudinary ownership. Standalone venture accounts are the transfer-grade target; Plus currently begins at $99/month.
6. Choose/purchase the BidSpace and Lake & Pine domains.
7. Approve launching Chrome and opening the ChatGPT Chrome Extension page, install/enable it, then authenticate GoDaddy and provider dashboards for the remaining non-destructive ownership checks.

## Engineering pass 1: restore safe runtime baselines

1. Lake & Pine: review exact candidate `e1fe8f0`, merge or faithfully reproduce it, add pinned CI, deploy an exact-SHA `stg` preview, and replace the dirty artifact only from clean `main`. Preserve `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` as rollback until promotion passes.
2. LogLoads: after the founder chooses Path A or B, reconcile the eight `main`-only and twenty-two feature-only commits. Test persistence/restart/concurrency for the selected host. Keep logloads.com on GoDaddy Website Builder until production and rollback pass.
3. ORAN: review exact candidate `217cd962`, repair Node/functions/Azure-oriented CI, pin an exact-SHA Vercel preview workflow, reconcile Doppler/Supabase/CSP/cron contracts, and prove a functional recovery artifact. Restoring the currently broken Azure IP is not rollback.
4. AutomatedEmpires: review/merge the green protected preview, then verify a `main` production provider host before DNS. BidSpace: create its first reviewed preview before attaching domains or production variables.
5. Re-run page, health, console, webhook-route, and deployment checks for every affected runtime.

## Engineering pass 2: identity, money, and email separation

1. Activate Clerk production instances without overwriting development, configure domains/redirects/OAuth/JWT templates/lifecycle webhooks/admin recovery, and verify re-registration and cross-origin rejection before replacing `prd`. Use a separate app/domain only for strict long-lived staging.
2. Provision independent Stripe sandboxes/live accounts per the written plan; migrate only after end-to-end checkout, signature, entitlement, refund-path, portal, live-smoke, and rollback gates plus a separate live authorization.
3. Repair Explore&Earn's failed Resend DKIM/SPF records and reach `verified`. Provision LogLoads in its approved separate team/domain and Sweepza only after its product decision. Replace broad keys with sending-only keys only after delivery passes.
4. Update Doppler first, propagate through scoped integrations, deploy previews, then promote. Never paste secrets into GitHub, docs, or chat.

## Engineering pass 3: data and observability

1. Back up and reconcile Explore&Earn and ORAN migration ledgers before any remote mutation.
2. Confirm service-only intent for RLS tables with zero policies in Explore&Earn, ORAN, BidSpace, and LogLoads.
3. With account-owner token authority, create restricted Explore&Earn dev/prd Mapbox tokens with only `styles:read` and `fonts:read`; defer BidSpace until its domain and LogLoads until its map/runtime consumer exist. Retire the shared token only after provider usage is zero.
4. Complete Sweepza's required PostHog/Sentry/webhook integrations and verify live ingestion/alerts.
5. Decide whether Cloudinary folder separation is sufficient; if not, plan a checksum-based media migration to independent environments.

## Governance and cleanup

1. Migrate the five Explore&Earn GitHub secrets only after every workflow consumer has a tested Doppler-backed replacement.
2. Review the two duplicate Vercel projects and the Doppler example-project; delete only with explicit owner approval and rollback evidence.
3. Export each registered DNS zone. Review—do not blindly merge—the two AutomatedEmpires SPF records; preserve mailbox MX and every approved transactional-mail return path, then document rollback before any web cutover.
4. Review these matrices quarterly and before any venture sale, ownership transfer, billing change, or credential rotation.

## Definition of transfer-ready

A venture is transfer-ready only when its production repo, secrets, runtime, data, auth, money, email, analytics/media/maps, DNS, webhooks, billing owner, emergency owner, and recovery path are all venture-specific or explicitly documented as a parent-governed project boundary, and its transfer checklist can be completed without another venture's credential or production account.
