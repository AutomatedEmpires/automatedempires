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

- [ ] Clerk app ID/instance, domains, OAuth settings, subscribed events, webhook endpoint, and admin owners are recorded.
- [ ] Shared live Stripe account `acct_1SpxXpDtcwz0cxzo` is separated through an approved migration; legal entity, mode, products/prices, endpoints, customers/subscriptions, payout/refund ownership, and rollback are reviewed.
- [ ] PostHog project ID and Sentry org/project IDs, alert routes, and retention settings are recorded.
- [ ] Resend sending identity/domain and from-address ownership are verified.
- [ ] GitHub/Notion worker tokens are least-privilege, venture-specific, and assigned to named owners.

## Domain and acceptance

- [ ] `sweepza.com` public Vercel attachment is recorded; authenticated GoDaddy ownership, renewal, recovery, Outlook MX, and DNS zone are proved.
- [ ] Preview smoke tests cover Clerk sync, Supabase RLS, Stripe disabled/enabled states, email, analytics, Sentry, and cron.
- [ ] A production rollback is rehearsed without exposing credentials.
- [ ] Sender and recipient confirm no cross-venture credential or runtime resource remains.
