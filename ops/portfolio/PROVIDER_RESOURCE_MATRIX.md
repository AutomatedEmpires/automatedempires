# Provider Resource Matrix

**Verified snapshot:** 2026-07-10
**Operating model:** Shared ownership. Separated operations.

This is the portfolio-level routing table. Resource identifiers are documented in the provider-specific matrices; secret values are never recorded here.

| Venture | Code and secrets | Runtime and data | Identity and money | Email | Analytics, media, maps, errors | Transfer posture |
|---|---|---|---|---|---|---|
| AutomatedEmpires | Dedicated GitHub repository; Doppler dev/stg/prd structure exists; draft PR #6 is open/mergeable at `cc8000a…` | Dedicated Vercel project; PR preview and Vercel status succeed, but no clean `main` production/custom domain exists | No Clerk or Stripe runtime need established | No dedicated Resend requirement | No dedicated runtime resources required | **Partial.** Authenticated domain control is complete; review/merge/main-production/rollback/DNS remain open |
| Explore&Earn | Dedicated repository and Doppler project; only `dev` contains application values | Canonical Vercel production and dedicated Supabase | Dev Clerk plus dark production with DNS Verified/SSL Issued; runtime settings/keys pending. Live Stripe mixed with Sweepza | Domain verified; existing broad key/team also reaches LogLoads; scoped key/sender/runtime smoke pending | Live PostHog (39 pageviews/30d); distinct active Sentry; Cloudinary shared admin boundary; active Mapbox consumer uses shared token | **Not ready.** Production Clerk runtime, Stripe, scoped mail, ledger, Mapbox, Sentry ownership, media boundary open |
| ORAN | Dedicated repository and metadata-only Doppler; base `217cd962…` plus validated local remediation commit `5ec3561…` | Node 24 Vercel shell has no domains/deployments; Azure public target broken; dedicated Supabase has 53 repo migrations vs one managed ledger entry | No active Clerk or Stripe resource verified | Preserve existing Mailgun; no Resend need | Current candidate uses Leaflet/OpenStreetMap; monitoring/resource ownership still incomplete | **Not ready.** Push/review local fix, install Preview configuration, reconcile database, prove exact-SHA Preview and functional rollback before DNS |
| BidSpace | Dedicated repository/Doppler project; application names only in `dev`; `main` has no map consumer, accepted feature `511b763…` does | Empty Vercel shell; dedicated Supabase | Dev Clerk; distinct Sentry project; no production identity or Stripe verified | Blocked until final owned domain | Accepted feature uses the shared default Mapbox token; no live PostHog/Cloudinary project verified | **Not ready.** Domain, reviewed deployable source, database policy intent, and production boundaries are missing |
| Lake & Pine | Dedicated repository/Doppler; base `e1fe8f00…`; local validated commit `a55ccff…` adds pinned CI/Windows case repair | Two READY production-target artifacts came from dirty `122dd312`; dedicated Supabase binding imported; owned `lakeandpinecleaning.com` is not attached | No production Clerk/Stripe resource verified | No Resend resource; mail intent deferred | Optional Mapbox consumer has a branded no-token fallback; no token/telemetry/media/error resource verified | **Not ready.** Push/review `a55ccff…`, prove exact-SHA Preview/clean main, retain dirty artifact as rollback, then plan domain/provider activation |
| Sweepza | Dedicated repository and populated Doppler; local email-truthfulness commit `89bbe121…` validated but unpushed | Canonical Vercel production/health and dedicated Supabase | Dark production Clerk/DNS exist, but `prd` still uses dev; live Stripe mixed with E&E | Real approval/winner mail consumers; no key/from/domain, so current sends no-op. Independent team is a paid gate | Only E&E has PostHog; Sweepza key empty. Distinct Sentry project exists but has no event/owner routing | **Not ready.** Publish truthful mail fix, then separate Clerk/Stripe/mail and prove telemetry |
| LogLoads | Dedicated repo/Doppler; feature `cce1c449…` diverges 22/8 from `main` | Dirty READY Preview/ERROR production; design needs one persistent-volume writer; Supabase mirror | Dark production Clerk DNS Verified/SSL Issued; runtime install pending; dev reused by staging | Broad distinct key reaches E&E team; no domain/from; mail deferred | Optional Mapbox with MapLibre fallback; distinct Sentry no event | **Not ready.** Choose hosting, converge source, then activate identity/mail/telemetry |

## Separation rules

- Shared parent ownership, billing visibility, GitHub ownership, and a parent-level Sentry organization are acceptable only when every venture retains a separate project/resource boundary.
- A shared live Stripe account, shared Clerk instance across production and non-production, shared email account/domain context, or shared privileged runtime credential is not transfer-ready.
- Provider absence is acceptable when the product does not use the provider. Empty placeholder resources are not created merely to make the matrix look complete.
- Write-only values in Vercel and GitHub are not copied or guessed. They remain migration blockers until an authoritative replacement can be created and tested.

## Companion matrices

See the Vercel, Supabase, Doppler, Stripe, Clerk, Resend, PostHog, Cloudinary, Mapbox, domain/DNS, contamination, blocker, and next-action matrices in this directory.
