# Portfolio Activation State

Updated: 2026-07-07T21:55:29Z

This file is the central control surface for Automated Empires activation work.
It records verified production facts only. Secret values are intentionally
omitted.

## Summary

| Product | Repository | Domain | Production URL | Core state |
| --- | --- | --- | --- | --- |
| Automated Empires | AutomatedEmpires/automatedempires | automatedempires.com | https://automatedempires.com | OWNER-BLOCKED |
| Sweepza | AutomatedEmpires/sweepza | sweepza.com | https://sweepza.com | REVENUE PATH LIVE · AWAITING FOUNDER REAL-MONEY PROOF |
| Lake and Pine Cleaning | AutomatedEmpires/lakeandpine | lakeandpinecleaning.com | https://lakeandpinecleaning.com | OWNER-BLOCKED |
| PinnedAtlas | AutomatedEmpires/pinnedatlas | pinnedatlas.com | https://pinnedatlas.com | BUILD |
| Explore and Earn | AutomatedEmpires/explore-and-earn | exploreandearn.com | https://exploreandearn.com | INFRA OPERATING · LIQUIDITY NOT ACTIVATED |
| LogLoads | AutomatedEmpires/logloads | logloads.com | none verified | OWNER-BLOCKED |
| BidSpace | AutomatedEmpires/bidspace | not selected | none verified | OWNER-BLOCKED |

## Product Tracks

### Automated Empires

- Domain: `automatedempires.com`
- Verification: `https://automatedempires.com` and `https://www.automatedempires.com` return HTTPS 200.
- DNS/content status: both are served by GoDaddy DPS (`Server: DPS/2.0.0+sha-3a478bc`), not the Vercel company-site app.
- Vercel status: company-site repository exists at `AutomatedEmpires/automatedempires`; production domain is not verified on the app from this run.
- Decision: left unchanged because no verified company-site Vercel target is attached for this domain.
- Founder gate: company-site hosting target approval/deploy is required before changing `automatedempires.com` DNS.
- State: OWNER-BLOCKED.

### Sweepza

Provisioning pass 2026-07-07T21:55Z (Claude Opus 4.8, repo-resident). Secret values omitted.

- Repository: `AutomatedEmpires/sweepza` · Supabase project `ojwhsntcpmoxnzisuomq`.
- Domain/HTTPS: `https://sweepza.com` + `www` return HTTPS 200 from Vercel; DNS + certificate verified for project `sweepza`. Public pages `/`, `/discover`, `/winners`, `/sign-in`, `/host` all return 200.
- Source: `main` at `8c39db444508c18c8424eeadd227632e29d162f5` (PR #45 + #46 merged). Fresh production deploy from `origin/main` built with the live Stripe env.
- Health: `/api/health` returns 200 — Supabase public+service-role present, Clerk app present, **Stripe app+webhook present**, GitHub worker present. Clerk webhook / PostHog / Sentry / Notion intentionally off.
- Cron: `/api/cron/expire-stale` returns 401 without the bearer token (route deployed, `CRON_SECRET` active). `vercel.json` schedules it daily.
- **Payments (Stripe): LIVE AND CONFIGURED — one founder charge from proven revenue.** Account `acct_1SpxXpDtcwz0cxzo` (the founder's shared live account, also used by E&E) has **KYC complete**: `charges_enabled`, `payouts_enabled`, `details_submitted` all true. Sweepza-namespaced **live** products/prices provisioned this session: baseline **$19/mo** `price_1TqghWDtcwz0cxzoYtZp1XYv`, extra-listing add-on **$5/mo** `price_1TqghWDtcwz0cxzogpcLYkdP`; **live webhook** `we_1TqghXDtcwz0cxzobypz5Rl9` → `https://sweepza.com/api/webhooks/stripe` (subscription events). Live secret/publishable/whsec/price IDs stored in Doppler `prd` and Vercel Production; site redeployed. Live money path **proven without a charge**: a real `cs_live_` Checkout Session was created (`livemode: true`, subscription, $19.00 USD) and expired. The complete checkout→signed-webhook→subscription-row→entitlement→billing-UI loop was already **E2E-verified in test mode** with identical code. Remaining: one real-card checkout (founder).
- **Auth (Clerk): dedicated Sweepza DEV instance in production.** Instance `ins_3EhjrYiNBzhqkZlG9kIc2Gh4dSy` is Sweepza's own (separate from E&E's `calm-panther-70`). Sign-up / sign-in / sign-out / host-onboarding **E2E-proven** on it. On-demand `app_user` upsert (`ensureCurrentAppUser`) syncs identity on every authed request, so signup works without the webhook. Founder gate: create a dedicated **production** Clerk instance (dashboard + `clerk.sweepza.com` DNS + OAuth provider secrets), swap keys, set `CLERK_WEBHOOK_SECRET`.
- **Data: CLEAN, honest empty state.** All synthetic rows removed with scoped predicates — 14 `sponsor_notes_internal='dev-seed'` listings, 2 expired demo listings (`dream-cash-10k`, `maui-getaway`), 2 hosts, 2 subscriptions, 2 synthetic users (dev-seed host + E2E). Zero real user/host/listing data existed. Final counts: listings 0, hosts 0, subscriptions 0. The owner-bootstrap user (`clerk_user_id=dev_owner`, `is_owner`) was retained — but its Clerk id is a placeholder, so **real founder admin access requires mapping his real Clerk user to `is_owner`/`is_admin`** after he first signs in.
- Resend / PostHog / Sentry: intentionally **off** in prod (no keys set → no misconfiguration, no E&E pollution). Founder gates below.
- **State: REVENUE PATH LIVE · AWAITING FOUNDER REAL-MONEY PROOF.** The revenue path is live-configured, the app is deployed and healthy, and production data is clean. Not OWNER-BLOCKED: the KYC gate is cleared and money can flow the moment a real card is entered.

### Lake and Pine Cleaning

- Repository: `AutomatedEmpires/lakeandpine`
- Supabase project: `fftnqsvxxsxcsiwvtmwr`
- Vercel app URL: `https://lakeandpine.vercel.app` returns HTTPS 200 with title `Lake & Pine Cleaning Co. | Premium Home Cleaning in Coeur d'Alene + Spokane`.
- Custom domain status: `https://lakeandpinecleaning.com` and `https://www.lakeandpinecleaning.com` return HTTPS 200 from Vercel.
- DNS status: GoDaddy authoritative DNS has apex A records `216.150.1.1` and `216.150.16.1`; `www` CNAME is `85dfa2d9035653ce.vercel-dns-017.com.`.
- Vercel domain status: `lakeandpinecleaning.com` and `www.lakeandpinecleaning.com` verify as valid for project `lakeandpine`.
- Phone status: placeholder `(208) 555-0198` was removed from production contact paths; phone CTAs are suppressed when no real phone is configured.
- Source status: `feat/production-foundation` pushed to GitHub at `e1fe8f0`.
- Validation: `pnpm typecheck`, `pnpm lint`, and `pnpm build` passed after the phone cleanup.
- Email: notification code is present but real Resend delivery was not verified because Resend admin/key management was unavailable.
- Founder gate: a real local business phone number requires founder approval/purchase.
- State: OWNER-BLOCKED.

### PinnedAtlas

- Repository: `AutomatedEmpires/pinnedatlas`
- Supabase project: `mrizaiftntoznmwhulwc`
- Vercel app URL: `https://pinnedatlas.vercel.app` returns HTTPS 200 with title `PinnedAtlas - Caves, Waterfalls & Hot Springs`.
- Custom domain status: `https://pinnedatlas.com` and `https://www.pinnedatlas.com` return HTTPS 200 from Vercel.
- DNS status: GoDaddy authoritative DNS has apex A records `216.150.1.1` and `216.150.16.1`; `www` CNAME is `8546866c305c3a77.vercel-dns-017.com.`.
- Vercel domain status: `pinnedatlas.com` and `www.pinnedatlas.com` verify as valid for project `pinnedatlas`.
- Data: `location` table has 3,725 rows.
- Supabase advisory: `public.spatial_ref_sys` has RLS disabled; do not enable blindly without confirming PostGIS access requirements.
- Clerk, Stripe, Resend, PostHog, Sentry: unverified in this runtime.
- Founder gate: service admin access may be required before monetized/account features can be externally verified.
- State: BUILD.

### Explore and Earn

Infrastructure pass verified 2026-07-07 (Claude, repo-resident). Secret values omitted.

- Repository: `AutomatedEmpires/explore-and-earn`
- Supabase project: `mamosbzcbigcclafhmmr`
- Production URL: `https://exploreandearn.com` + `www` return HTTPS 200; `/api/health` returns 200 `{"status":"ok"}`; homepage 200. Domain/DNS/HTTPS verified for project `explore-and-earn`.
- **Database: OPERATING.** 79 migration versions applied; schema complete through numbered 057. Prod tables reachable (queried directly).
- **Migration CI pipeline: SECRETS PROVISIONED, one reconcile pending.** GitHub Actions secrets set + verified: `SUPABASE_ACCESS_TOKEN`, `SUPABASE_PROJECT_ID` (`mamosbzcbigcclafhmmr`), `SUPABASE_DB_PASSWORD` (corrected — the Doppler `DATABASE_URL` had bracket-wrapped the real 14-char password), plus `SUPABASE_DB_URL` (session-pooler fallback). Workflow `db-migrate.yml` now links + lists prod successfully. `db push` fails only on a pre-existing history-ledger divergence: 049–057 were applied via MCP under timestamp versions, and 33 legacy pre-numbering timestamp rows are orphaned. Fix = one non-destructive `supabase migration repair` (mark 049–057 applied + 33 timestamps reverted; bookkeeping only, no schema change). Held for founder approval (auto-mode blocked a prod-ledger write).
- **Analytics (PostHog): OPERATING.** Dedicated project `291166` (`phc_67Nw…`, us.posthog.com). Actively ingesting: `$autocapture`, `$pageview`, `$web_vitals`, `$rageclick`, `$pageleave`, `$opt_in` (last 30d). Custom funnel events (signup/application/checkout) are NOT instrumented — a product gap, not infra.
- **Error monitoring (Sentry): OPERATING.** Org `o4509295717711872` / project `4511510781624320`. Test event ingested (HTTP 200, event id returned). Source-map upload configured (`SENTRY_AUTH_TOKEN` + org/project set in Vercel).
- **Email (Resend): KEY VALID, REAL DELIVERY PROVEN, DOMAIN AWAITING DNS.** `RESEND_API_KEY` works; a real test email delivered to the founder. Sending domain `exploreandearn.com` registered in Resend (id `6b253845…`, status `not_started`). DNS records to add at GoDaddy, then verify: DKIM `TXT resend._domainkey`, SPF `TXT send = v=spf1 include:amazonses.com ~all`, bounce `MX send → feedback-smtp.us-east-1.amazonses.com` (pri 10). Until verified, prod cannot send from `notifications@exploreandearn.com`.
- **Cron: OPERATING.** `CRON_SECRET` generated + set (was absent → all 3 jobs were fail-closed 401). `vercel.json` schedules expire-listings / new-match-alerts / saved-search-alerts; Vercel injects the bearer on schedule. No-auth requests correctly 401.
- **Auth (Clerk): DEV INSTANCE IN PRODUCTION — top launch blocker.** Prod runs on `calm-panther-70.clerk.accounts.dev` (`pk_test`), not a dedicated production instance. Needs founder: create the E&E production Clerk instance (custom domain + DNS + OAuth callbacks), swap keys in Vercel, and set `CLERK_WEBHOOK_SECRET` (the `/api/webhooks/clerk` handler that creates `seeker_profiles` on signup is unconfigured, so real signups don't get profile rows).
- **Payments (Stripe): PROD KEY IS A DIFFERENT ACCOUNT/MODE THAN AVAILABLE CLI ACCESS — founder-gated.** Proven: a signed webhook the prod key processed returned "No such customer" for a customer that exists in the CLI's account (`acct_1RMjIWIH4Hw2pSG9` test) → prod's `STRIPE_SECRET_KEY` is that account in a different mode (live/sandbox) or a separate account. Cannot be provisioned from current CLI (test-only). Founder-locked pricing catalog (6 tiers + $149 announcement) exists in the CLI account's TEST mode and matches the contract exactly, but is unusable by prod. Needs founder to confirm the prod Stripe account + mode and complete KYC (live money). Prod webhook + price IDs deliberately left UNSET → honest 503 "not configured". `CRON_SECRET` (set this session) is account-independent and retained.
- **Marketplace liquidity: NOT ACTIVATED.** `listings` 0 · `host_profiles` 0 · `seeker_profiles` 0 · `users_profile_shadow` 0 · `applications` 0. A founder/business activation problem, fully separate from infrastructure.
- **State: INFRASTRUCTURE OPERATING (named founder gates: Clerk prod instance, Stripe account+KYC, Resend DNS, migration-ledger repair) · MARKETPLACE LIQUIDITY NOT ACTIVATED.** Not "BUILD".

### LogLoads

- Repository: `AutomatedEmpires/logloads`
- Supabase project: `fdzohbiiyzgvjzfsjyxo`
- Domain: `logloads.com` discovered in GoDaddy/public DNS inventory.
- Hosting: no Vercel project found in the Automated Empires Vercel team.
- DNS status: left unchanged; no verified hosting target exists in the Vercel team.
- Supabase advisory: 15 public application tables have RLS disabled, including `driver_profiles`, `availability_windows`, `trailer_profiles`, `loader_profiles`, `notifications`, `dispatcher_profiles`, `rates`, `audit_events`, `haul_routes`, `message_threads`, `mills`, `message_events`, `truck_profiles`, and `landings`; `spatial_ref_sys` also has RLS disabled.
- Clerk, Stripe, Resend, PostHog, Sentry: unverified in this runtime.
- Founder gate: hosting target/domain activation plan and service admin access are required before production activation.
- State: OWNER-BLOCKED.

### BidSpace

- Repository: `AutomatedEmpires/bidspace`
- Supabase project: `hnjjcgxflxlfsqslgxcv`
- Domain: no public domain selected; premium `.com` purchase remains out of scope.
- Hosting: no Vercel project found in the Automated Empires Vercel team.
- Data: seeded marketplace exists (`users`, `orgs`, venues, events, opportunities, inventory units, bids, documents).
- Supabase advisory: app tables have RLS enabled; `public.spatial_ref_sys` has RLS disabled.
- Stripe Connect: implementation still requires external account/path verification before real money.
- Clerk, Mapbox, PostHog, Sentry: unverified in this runtime.
- Founder gate: Stripe Connect KYC/beneficial-owner details and final domain decision are human-only gates.
- State: OWNER-BLOCKED.

## Current Smallest Founder Gates

1. Company-site hosting target approval/deploy before changing `automatedempires.com` off GoDaddy DPS.
2. Stripe account access/KYC for products that will process live money, especially BidSpace Connect. (Sweepza: KYC already complete on `acct_1SpxXpDtcwz0cxzo`; only a single real-card checkout on https://sweepza.com/host remains to prove live revenue.)
2b. Sweepza — dedicated production Clerk instance (dashboard + `clerk.sweepza.com` DNS + OAuth secrets) to replace the working dev instance; then map the founder's real Clerk user to `is_owner`/`is_admin`, and (optional) set `CLERK_WEBHOOK_SECRET`.
2c. Sweepza — dedicated PostHog project, dedicated Sentry project, and a Resend account + `send.sweepza.com` sending domain/DNS (all currently off, not misconfigured).
3. Real Lake and Pine local phone number approval/purchase.
4. LogLoads hosting target/domain activation plan before changing `logloads.com`.
5. Explore & Earn — production Clerk instance (dashboard + custom-domain DNS + OAuth), then key swap in Vercel + `CLERK_WEBHOOK_SECRET`. Prod currently runs the dev Clerk instance.
6. Explore & Earn — confirm the production Stripe account + mode and complete KYC; prod's `STRIPE_SECRET_KEY` is not the CLI's test account, so the money path can't be provisioned from repo tooling.
7. Explore & Earn — add the Resend DKIM/SPF/MX records for `exploreandearn.com` at GoDaddy and verify (domain already registered in Resend).
8. Explore & Earn — approve the one-time `supabase migration repair` to reconcile the prod migration ledger (bookkeeping only) so the db-migrate pipeline runs green.

## Verification Notes

- GitHub, Vercel project inventory, Supabase project/table inventory, and public HTTPS checks were available.
- GoDaddy was accessed through an authenticated browser session and left available for additional DNS/email routing work.
- GoDaddy authoritative DNS and Vercel verification passed for `exploreandearn.com`, `sweepza.com`, `lakeandpinecleaning.com`, and `pinnedatlas.com`, including `www` hostnames.
- Stripe connector was present but failed read calls, so Stripe account state could not be trusted from this runtime.
- No authenticated Clerk, Doppler, PostHog, Sentry, or Resend admin connector was available in this runtime.
- No secret values were printed or stored in this artifact.
