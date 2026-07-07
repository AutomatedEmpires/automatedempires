# Portfolio Activation State

Updated: 2026-07-07T17:01:00Z

This file is the central control surface for Automated Empires activation work.
It records verified production facts only. Secret values are intentionally
omitted.

## Summary

| Product | Repository | Domain | Production URL | Core state |
| --- | --- | --- | --- | --- |
| Automated Empires | AutomatedEmpires/automatedempires | automatedempires.com | https://automatedempires.com | OWNER-BLOCKED |
| Sweepza | AutomatedEmpires/sweepza | sweepza.com | https://sweepza.com | OWNER-BLOCKED |
| Lake and Pine Cleaning | AutomatedEmpires/lakeandpine | lakeandpinecleaning.com | https://lakeandpinecleaning.com | OWNER-BLOCKED |
| PinnedAtlas | AutomatedEmpires/pinnedatlas | pinnedatlas.com | https://pinnedatlas.com | BUILD |
| Explore and Earn | AutomatedEmpires/explore-and-earn | exploreandearn.com | https://exploreandearn.com | BUILD |
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

- Repository: `AutomatedEmpires/sweepza`
- Supabase project: `ojwhsntcpmoxnzisuomq`
- Vercel app URL: `https://sweepza.vercel.app` returns HTTPS 200 with title `Sweepza - Sweepstakes | Simplified`.
- Custom domain status: `https://sweepza.com` and `https://www.sweepza.com` return HTTPS 200 from Vercel.
- DNS status: GoDaddy authoritative DNS has apex A records `216.150.1.1` and `216.150.16.1`; `www` CNAME is `8b91c0d2a92bd777.vercel-dns-017.com.`.
- Vercel domain status: `sweepza.com` and `www.sweepza.com` verify as valid for project `sweepza`; certificate was explicitly issued after DNS verification.
- Production health: `https://sweepza.com/api/health` returns HTTPS 200 with Supabase public/service-role present, Clerk app present, Clerk webhook absent, Stripe app/webhook present, PostHog absent, Sentry absent, GitHub worker present, Notion worker absent.
- Production cron: `https://sweepza.vercel.app/api/cron/expire-stale` returns 401 without the bearer token, proving the route is deployed and `CRON_SECRET` is configured.
- GitHub: PR #45 merged into `main` at `c5045ba32bfd8123bb36bea4a8071537ed891866`; PR #46 merged into `main` at `8c39db444508c18c8424eeadd227632e29d162f5`.
- Stripe: app/webhook environment is present per Sweepza health, but connector calls failed in this runtime, so live/test account mode and real checkout path were not externally verified. Code path now verifies webhook event subscriptions before reusing an endpoint.
- Clerk: app keys present per health; webhook secret absent.
- Resend: unverified.
- PostHog, Sentry: absent per health.
- Data: Supabase has 16 listing rows and 2 app users; synthetic/live classification remains required before revenue launch.
- Founder gate: Stripe account access/KYC may be required before live-money verification.
- State: OWNER-BLOCKED.

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

- Repository: `AutomatedEmpires/explore-and-earn`
- Supabase project: `mamosbzcbigcclafhmmr`
- Production URL: `https://exploreandearn.com` and `https://www.exploreandearn.com` return HTTPS 200 from Vercel.
- Production health: `https://exploreandearn.com/api/health` returns 200 with `{"status":"ok"}`.
- DNS status: GoDaddy authoritative DNS has apex A records `216.150.1.1` and `216.150.16.1`; `www` CNAME is `7b99ac6b0e816456.vercel-dns-017.com.`.
- Vercel domain status: `exploreandearn.com` and `www.exploreandearn.com` verify as valid for project `explore-and-earn`.
- Data: production `listings` table has 0 rows; this is an inventory/business issue, not an infrastructure outage.
- Clerk, Stripe, PostHog, Sentry, migration pipeline secrets: unverified in this runtime.
- Founder gate: live Stripe/Clerk access may be required; no irreversible action was available through current tools.
- State: BUILD.

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
2. Stripe account access/KYC for products that will process live money, especially BidSpace Connect and Sweepza.
3. Real Lake and Pine local phone number approval/purchase.
4. LogLoads hosting target/domain activation plan before changing `logloads.com`.

## Verification Notes

- GitHub, Vercel project inventory, Supabase project/table inventory, and public HTTPS checks were available.
- GoDaddy was accessed through an authenticated browser session and left available for additional DNS/email routing work.
- GoDaddy authoritative DNS and Vercel verification passed for `exploreandearn.com`, `sweepza.com`, `lakeandpinecleaning.com`, and `pinnedatlas.com`, including `www` hostnames.
- Stripe connector was present but failed read calls, so Stripe account state could not be trusted from this runtime.
- No authenticated Clerk, Doppler, PostHog, Sentry, or Resend admin connector was available in this runtime.
- No secret values were printed or stored in this artifact.
