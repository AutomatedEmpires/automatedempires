# Sweepza transfer checklist

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / founder verification required**.

## Repository and environments

- [ ] GitHub access to `AutomatedEmpires/sweepza`, branch protections, CI, and emergency owners are verified.
- [ ] Doppler project `sweepza` and `dev`/`stg`/`prd` role boundaries are transferred.
- [ ] `dev_personal` purpose, owner, and retention are documented or retired safely.
- [ ] The recipient can perform a names-only configuration audit without revealing values.

## Deployment and data

- [ ] Vercel project `sweepza`, team, Git link, root, aliases, Preview, Production, and rollback access are verified.
- [ ] Current deployed alias and custom-domain cutover state are recorded.
- [ ] Supabase ref `ojwhsntcpmoxnzisuomq`, ownership, migration ledger, backups, RLS, storage, and data-retention obligations are reviewed.
- [ ] Cron path, schedule, authentication, last success, and alert owner are documented.

## Product providers

- [ ] Dark production Clerk DNS is Verified and SSL Issued; finish OAuth, events/webhook, admin owners, Preview proof, `prd` replacement, and dev-user re-registration.
- [ ] Shared live Stripe account `acct_1SpxXpDtcwz0cxzo` is separated through an approved migration; legal entity, mode, products/prices, endpoints, customers/subscriptions, payout/refund ownership, and rollback are reviewed.
- [ ] Create/record a distinct PostHog project and prove ingestion; record the distinct Sentry project, first event, venture team/issue owner/alerts, retention and scrubbing policy.
- [ ] Review/publish `89bbe121…`; until mail is funded/configured, verify sends report `skipped` and `sent_at` stays null.
- [ ] Approve and verify an independent Resend team, sending identity/domain, scoped key, from-address ownership, delivery, and rollback.
- [ ] GitHub/Notion worker tokens are least-privilege, venture-specific, and assigned to named owners.

## Domain and acceptance

- [x] `sweepza.com` Vercel attachment plus authenticated GoDaddy ownership, privacy, auto-renew, Outlook MX, and full-zone evidence are recorded; recovery owner still transfers operationally.
- [ ] Preview smoke tests cover Clerk sync, Supabase RLS, Stripe disabled/enabled states, email, analytics, Sentry, and cron.
- [ ] A production rollback is rehearsed without exposing credentials.
- [ ] Sender and recipient confirm no cross-venture credential or runtime resource remains.
