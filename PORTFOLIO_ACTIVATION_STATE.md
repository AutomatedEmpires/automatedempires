# Portfolio Activation State

Updated: 2026-07-08T02:49:52Z

This file is the central control surface for Automated Empires activation work.
It records verified production facts only. Secret values are intentionally
omitted.

## Summary

| Product | Repository | Domain | Production URL | Core state |
| --- | --- | --- | --- | --- |
| Automated Empires | AutomatedEmpires/automatedempires | automatedempires.com | https://automatedempires.com | OWNER-BLOCKED |
| Sweepza | AutomatedEmpires/sweepza | sweepza.com | https://sweepza.com | DEPLOYED · LIVE BILLING CONFIGURED · REAL REVENUE PROOF PENDING |
| Lake and Pine Cleaning | AutomatedEmpires/lakeandpine | lakeandpinecleaning.com | https://lakeandpinecleaning.com | OWNER-BLOCKED |
| PinnedAtlas | AutomatedEmpires/pinnedatlas | pinnedatlas.com | https://pinnedatlas.com | OPERATING (free product live; accounts/payments founder-gated, non-blocking) |
| Explore and Earn | AutomatedEmpires/explore-and-earn | exploreandearn.com | https://exploreandearn.com | INFRA OPERATING · LIQUIDITY NOT ACTIVATED |
| LogLoads | AutomatedEmpires/logloads | logloads.com | none verified | SECURITY VERIFIED · DEPLOYMENT-READY · SERVICES FOUNDER-GATED |
| BidSpace | AutomatedEmpires/bidspace | not selected | none verified | SOFTWARE COMPLETE · ENGINE VERIFIED · FOUNDER-GATED (Clerk + Stripe) |

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
- **Payments (Stripe): LIVE BILLING CONFIGURED AND CHECKOUT CREATION PROVEN — real revenue not yet proven.** Account `acct_1SpxXpDtcwz0cxzo` (the founder's shared live account, also used by E&E) has **KYC complete**: `charges_enabled`, `payouts_enabled`, `details_submitted` all true. Sweepza-namespaced **live** products/prices provisioned this session: baseline **$19/mo** `price_1TqghWDtcwz0cxzoYtZp1XYv`, extra-listing add-on **$5/mo** `price_1TqghWDtcwz0cxzogpcLYkdP` (metadata `venture=sweepza`); **live webhook** `we_1TqghXDtcwz0cxzobypz5Rl9` → `https://sweepza.com/api/webhooks/stripe` (subscription events), separate from E&E's webhook. Live secret/publishable/whsec/price IDs stored in Doppler `prd` and Vercel Production; fresh prod build. A `cs_live_` Checkout Session was created (`livemode: true`, subscription, $19.00 USD) and expired cleanly — this proves `app → live account → live product → live price → live checkout creation`. It does **not** prove `real card payment → successful payment → signed live webhook → subscription row → entitlement → billing UI → cancellation`; that final loop is the **last revenue proof** (one real-card checkout, founder). The identical loop is **E2E-verified in test mode**. `scripts/verify-live-checkout.mjs` is ready to confirm the loop immediately after payment.
- **Facet status:** domain VERIFIED · HTTPS VERIFIED · API health VERIFIED · cron VERIFIED · production data CLEAN · Stripe account LIVE ACCOUNT IDENTIFIED · KYC COMPLETE · products/prices LIVE · webhook LIVE · live checkout creation VERIFIED · **real payment NOT YET PROVEN** · **production Clerk BLOCKED (dev instance still active)** · PostHog NOT PROVISIONED · Sentry NOT PROVISIONED · Resend NOT PROVISIONED.
- **Launch runbook:** `AutomatedEmpires/sweepza` `docs/LAUNCH_RUNBOOK.md` reduces every remaining gate to its smallest founder action (real-card proof, production Clerk transition + owner/admin bootstrap, dedicated PostHog/Sentry/Resend) with exact expected objects, DNS records, env var names, and verification steps; `scripts/verify-live-checkout.mjs` is the automated post-payment check.
- **Auth (Clerk): dedicated Sweepza DEV instance in production.** Instance `ins_3EhjrYiNBzhqkZlG9kIc2Gh4dSy` is Sweepza's own (separate from E&E's `calm-panther-70`). Sign-up / sign-in / sign-out / host-onboarding **E2E-proven** on it. On-demand `app_user` upsert (`ensureCurrentAppUser`) syncs identity on every authed request, so signup works without the webhook. Founder gate: create a dedicated **production** Clerk instance (dashboard + `clerk.sweepza.com` DNS + OAuth provider secrets), swap keys, set `CLERK_WEBHOOK_SECRET`.
- **Data: CLEAN, honest empty state.** All synthetic rows removed with scoped predicates — 14 `sponsor_notes_internal='dev-seed'` listings, 2 expired demo listings (`dream-cash-10k`, `maui-getaway`), 2 hosts, 2 subscriptions, 2 synthetic users (dev-seed host + E2E). Zero real user/host/listing data existed. Final counts: listings 0, hosts 0, subscriptions 0. The owner-bootstrap user (`clerk_user_id=dev_owner`, `is_owner`) was retained — but its Clerk id is a placeholder, so **real founder admin access requires mapping his real Clerk user to `is_owner`/`is_admin`** after he first signs in.
- Resend / PostHog / Sentry: intentionally **off** in prod (no keys set → no misconfiguration, no E&E pollution). Founder gates below.
- **State: PRODUCTION DEPLOYED · LIVE BILLING CONFIGURED · REAL REVENUE PROOF PENDING · PRODUCTION IDENTITY PENDING · OBSERVABILITY/EMAIL PENDING.** The app is deployed and healthy, billing is live-configured with KYC complete, and production data is clean. Not OWNER-BLOCKED (the KYC gate is cleared) and not yet OPERATING (real revenue, production Clerk, and observability/email remain). Every remaining step is reduced to its smallest founder action in the launch runbook.

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

Verified 2026-07-08 (Fable 5, repo-resident). Deployed commit `97381bd`; CI + CodeQL green.

- Repository: `AutomatedEmpires/pinnedatlas`; Supabase project: `mrizaiftntoznmwhulwc`.
- Owned domain: VERIFIED. `https://pinnedatlas.com` and `https://www.pinnedatlas.com` return HTTPS 200 over valid SSL with HSTS; `www` 308-redirects to the apex; canonical/OG/sitemap use the owned domain.
- Product: map-first homepage is LIVE — full MapLibre map on landing with a Zillow-style listing panel synced to the viewport (nearest-to-center order, list/pin hover sync, mobile map/list toggle), type filters, name search, geolocation.
- Map provider: MapLibre GL + free CARTO dark vector tiles (no token). On-map OSM (ODbL) + CARTO attribution present. Mapbox is OPTIONAL (one-variable `STYLE_URL` swap), not a blocker; dead Mapbox env config removed.
- Data: `location` table has 14,894 public rows — 11,162 springs, 2,710 waterfalls, 654 caves, 368 hot springs (OSM/Overpass, `community` status). Verified live: geojson serves all 14,894; `spring` filter 11,162; `cave` 654; sitemap lists 14,900 URLs.
- Auth (Clerk): NOT configured; the core map/browse/search/detail product is fully public and requires none. Only secondary features (saves, visit log, notes, submissions, reports, admin, premium) are gated → dormant, non-blocking.
- Money (Stripe): NOT configured. The paid-access flow (pricing, server-enforced entitlements, checkout, portal, webhook) is fully implemented but dormant; the free product operates without it. FUTURE monetization.
- Analytics (PostHog): product events instrumented in code (map_opened, viewport_changed, filter_applied, search_used, list_opened_mobile, spot_opened; privacy-conscious — zoom + counts, no coordinates). Dedicated project NOT created (MCP has no project-create; must not reuse the `exploreandearn` project). Founder gate: create project + set `NEXT_PUBLIC_POSTHOG_KEY`.
- Errors (Sentry): NOT installed; connector needs interactive OAuth. Error visibility today = Vercel runtime logs. Founder gate: authorize connector or provide DSN.
- Supabase advisory: `public.spatial_ref_sys` (PostGIS system table) reports RLS disabled — expected for PostGIS; do not "fix" blindly.
- True founder gates (all optional/future, none blocking the operating free product): PostHog key, Sentry DSN, Clerk keys (accounts), Stripe keys+prices+webhook (monetization), legal counsel-confirm of `/legal/terms` before paid scale.
- State: OPERATING (free product live; account + payment features founder-gated and non-blocking).

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

- Repository: `AutomatedEmpires/logloads` (branch `feature/backend-foundation`, HEAD `b77347e`).
- Supabase project: `fdzohbiiyzgvjzfsjyxo` (live).
- Domain: `logloads.com` (unchanged — waits on a verified host).
- **Security: VERIFIED.** The RLS discrepancy is reconciled and fixed. Root cause: the foundation migration predated RLS and left 14 tables uncovered; phase-2 protected a different subset (both prior reports were true subsets). **Critical exposure found and closed:** `operating_state` (full-state PII blob) was anon read/write → now service-role only, proven denied from outside with the live anon key. 36 public tables → **35 RLS-enabled**; `spatial_ref_sys` is the one accepted PostGIS exception. Migration `20260707050000_security_rls_coverage.sql`; full record in `docs/SECURITY.md`. Supabase advisor: zero app-table ERRORs.
- **Core operating loop: VERIFIED AFTER the security fix** — request → approve → trip progress → message. `pnpm validate` green (lint 5/5, typecheck 9/9, 36 unit tests, build 31/31, guardrails); **Playwright 22/22** (mobile + desktop).
- Architecture: single-writer in-memory engine + local disk snapshot + Supabase mirror (service-role only). SINGLE-NODE LAUNCH: acceptable/verified. Horizontal scaling deferred (Postgres must become canonical first).
- **Deployment: prepared to the last inch.** `Dockerfile` + `fly.toml` (single machine, `/data` 1 GB volume, port 3002, `/api/health`), `docs/DEPLOYMENT.md` (migration order, first-boot, backup/restore, rollback), `ops/production-env-contract.json` (all 24 env vars), and `tools/production-smoke.mjs` (post-deploy proof, verified locally). Founder gate reduces to "approve/create the Fly.io app + volume."
- **Clerk: FOUNDER-GATED (code complete).** Sign-in loop fixed; a signed-in Clerk user with no profile routes to onboarding. No Clerk Organizations/webhook/JWT-template needed for launch. Runbook `docs/ACTIVATION_CLERK.md` → gate = create the LogLoads Clerk app + 2 keys.
- **Stripe: FOUNDER-GATED (code complete).** Checkout + billing portal + webhook (`/api/billing/webhook`, 3 events) wired; expects Prices `STRIPE_PRICE_FLEET` ($149/mo), `STRIPE_PRICE_HOST` ($249/mo) with inline fallback; unit-tested state mapping. Can reuse the shared KYC-complete founder account `acct_1SpxXpDtcwz0cxzo`. Runbook `docs/ACTIVATION_STRIPE.md` + `tools/verify-billing.mjs`.
- **Resend: FOUNDER-GATED (code complete, fail-open honest).** `docs/ACTIVATION_RESEND.md` → gate = account + `send.logloads.com` domain/DNS + API key.
- **PostHog: code ready, project key missing.** 7-event taxonomy wired (UUID distinct_ids, no PII/secrets). Gate = create LogLoads project, set `NEXT_PUBLIC_POSTHOG_KEY`.
- **Sentry: code ready, DSN missing.** Server capture via `instrumentation.ts`, `sendDefaultPii:false`. Gate = create LogLoads project, set `SENTRY_DSN`.
- Founder gates (smallest possible): (1) approve/create the Fly.io host + 1 GB volume; (2) create the LogLoads Clerk app + keys; (3) bind the Stripe account + 2 prices + webhook; (4) Resend/PostHog/Sentry keys + Resend DNS. After the host exists, attach `logloads.com`.
- State: **SECURITY VERIFIED · CORE LOOP VERIFIED · SINGLE-NODE DEPLOYMENT-READY · EXTERNAL SERVICES FOUNDER-GATED.**

### BidSpace

- Repository: `AutomatedEmpires/bidspace` — branch `integration/recovered-bidspace-product` (PR #58 → main, mergeable). All work pushed to origin.
- Software: **SOFTWARE COMPLETE** — 43 routes, typecheck 5/5, 62 unit tests, green build.
- Internal marketplace loop: **VERIFIED** against the live DB (`tools/live-loop-check.ts`): bid → counter → accept → award → booking → payment → settlement; $280 gross / $28 fee (10%, D018) / $252 payout; recurring copy-forward also verified.
- Supabase project: `hnjjcgxflxlfsqslgxcv` — migrations 0001–0011 + advisor hardening applied, demo seed loaded, public pages + viewport API serve real data. (0011 revokes `spatial_ref_sys`/`st_estimatedextent` from API roles; deny-all RLS is the intentional D025 posture.)
- Stripe Connect: **architecture MODERNIZED (D028)** — controller-property accounts (off deprecated `type:express`); destination-charge/fee/webhook code current and unchanged; webhook settlement hardened (process-first, record-on-success) so a crash mid-settlement can’t strand a paid booking. Activation gated on founder KYC; runbooks: `docs/CONNECT-RUNBOOK.md`, `docs/MONEY-PROOF-FIXTURE.md`.
- Clerk: **code contract complete** + verified current (v7). Exact hand-off in `docs/CLERK-CONTRACT.md`. No Clerk API/MCP — app creation is dashboard-only (founder gate). `CLERK_ENCRYPTION_KEY` required in prod; no Clerk webhook consumer.
- Vercel: no project yet; **deploy-ready** (`apps/web/vercel.json`, turbo cache fix, exact settings in `docs/PRODUCTION-ACTIVATION.md`). Deploy intentionally gated on Clerk — no broken artifact shipped.
- Mapbox / PostHog / Sentry: code complete and env-gated; `/map` degrades honestly; 7 PII-free analytics events instrumented; branded error boundaries added as the Sentry seam. All need only a founder-supplied key/project. Env contract: `docs/ENVIRONMENT.md`.
- Founder gates (only two): **(1)** create the Clerk application + provide production keys; **(2)** Stripe Connect KYC / beneficial-owner / bank. Everything else is a key paste.
- State: **SOFTWARE COMPLETE · INTERNAL ENGINE VERIFIED · CONNECT MODERNIZED · EXTERNAL IDENTITY & MONEY FOUNDER-GATED**.

## Current Smallest Founder Gates

1. Company-site hosting target approval/deploy before changing `automatedempires.com` off GoDaddy DPS.
2. Stripe account access/KYC for products that will process live money, especially BidSpace Connect. (Sweepza: KYC already complete on `acct_1SpxXpDtcwz0cxzo`; only a single real-card checkout on https://sweepza.com/host remains to prove live revenue.)
2b. Sweepza — dedicated production Clerk instance (dashboard + `clerk.sweepza.com` DNS + OAuth secrets) to replace the working dev instance; then map the founder's real Clerk user to `is_owner`/`is_admin`, and (optional) set `CLERK_WEBHOOK_SECRET`.
2c. Sweepza — dedicated PostHog project, dedicated Sentry project, and a Resend account + `send.sweepza.com` sending domain/DNS (all currently off, not misconfigured).
3. Real Lake and Pine local phone number approval/purchase.
4. LogLoads — approve/create the Fly.io host + 1 GB `/data` volume (deploy is mechanical: `Dockerfile` + `fly.toml` ready); then create the LogLoads Clerk app + keys, bind Stripe (reuse `acct_1SpxXpDtcwz0cxzo` + 2 prices + webhook), and set Resend/PostHog/Sentry keys. Security is already verified (RLS fixed, `operating_state` locked); core loop proven 22/22. Runbooks: `docs/ACTIVATION_{CLERK,STRIPE,RESEND}.md`, `docs/DEPLOYMENT.md`.
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
