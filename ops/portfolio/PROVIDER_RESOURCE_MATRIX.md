# Provider Resource Matrix

**Verified snapshot:** 2026-07-10
**Operating model:** Shared ownership. Separated operations.

This is the portfolio-level routing table. Resource identifiers are documented in the provider-specific matrices; secret values are never recorded here.

| Venture | Code and secrets | Runtime and data | Identity and money | Email | Analytics, media, maps, errors | Transfer posture |
|---|---|---|---|---|---|---|
| AutomatedEmpires | Dedicated GitHub repository; Doppler dev/stg/prd structure exists | Empty dedicated Vercel shell; no Supabase need identified | No Clerk or Stripe runtime need established | No dedicated Resend resource verified | No dedicated runtime resources verified; create only for an implemented feature | **Partial.** Repo, secrets structure, domain, and runtime shell are separated; deployment and authenticated domain control remain open |
| Explore&Earn | Dedicated repository and Doppler project; only dev currently contains application names | Canonical Vercel deployment is healthy; dedicated Supabase project | Dedicated development Clerk instance; live Stripe account is contaminated with Sweepza | Distinct credential in a Resend account that is also used by LogLoads; domain is not verified | Dedicated PostHog and Sentry project evidence; media folders in a shared Cloudinary cloud; public Mapbox token is shared and server token is revoked | **Not ready.** Production identity, Stripe, email, migration ledger, Mapbox, and shared media boundaries must be resolved |
| ORAN | Dedicated repository and empty Doppler configs | Empty Vercel shell reserved; unmerged Azure-to-Vercel branch; current public Azure target is broken; dedicated Supabase project | No active Clerk or Stripe resource verified | Existing DNS uses Mailgun; no Resend need established | Azure services and Sentry appear in code/docs; live resource ownership remains to be reconciled | **Not ready.** Complete the migration branch, preview verification, schema reconciliation, and controlled DNS cutover |
| BidSpace | Dedicated repository and Doppler project; application names are present only in dev | Empty dedicated Vercel shell; dedicated Supabase project | Dedicated development Clerk instance; no Stripe account verified | Blocked until a final domain is selected and owned | No dedicated live PostHog/Cloudinary/Mapbox/Sentry resource verified; the public Mapbox token is shared in dev | **Not ready.** Domain, deployable runtime, database policy intent, and production provider resources are missing |
| Lake & Pine | Dedicated repository and Doppler project | Vercel alias is healthy and Supabase binding is verified/imported, but production is a dirty feature-branch redeploy rather than reproducible main | No Clerk or Stripe need/resource verified | Blocked until a domain is purchased; no Resend resource | No dedicated analytics/media/maps/error resource verified | **Not ready.** First converge source/deployment; domain and product-dependent providers remain founder decisions |
| Sweepza | Dedicated repository and populated Doppler project | Canonical Vercel deployment and health endpoint are live; dedicated Supabase project | One development Clerk instance is reused across dev/stg/prd; live Stripe account is contaminated with Explore&Earn | No dedicated verified Resend domain | PostHog and Sentry are absent at runtime health; other integrations are incomplete | **Not ready.** Separate production identity and Stripe, then finish missing webhook/telemetry configuration |
| LogLoads | Dedicated repository and populated Doppler project | Vercel preview is healthy, production is in error, and both are dirty feature-branch artifacts; dedicated Supabase project | One development Clerk instance is reused across dev/stg and production auth is absent; no Stripe account verified | Distinct credential reaches the same one-domain Resend account used by Explore&Earn; no LogLoads sending domain exists there | Shared public Mapbox token; other provider resources are absent or unverified | **Not ready.** Converge source, repair production build, separate email/identity, and verify every production mapping |

## Separation rules

- Shared parent ownership, billing visibility, GitHub ownership, and a parent-level Sentry organization are acceptable only when every venture retains a separate project/resource boundary.
- A shared live Stripe account, shared Clerk instance across production and non-production, shared email account/domain context, or shared privileged runtime credential is not transfer-ready.
- Provider absence is acceptable when the product does not use the provider. Empty placeholder resources are not created merely to make the matrix look complete.
- Write-only values in Vercel and GitHub are not copied or guessed. They remain migration blockers until an authoritative replacement can be created and tested.

## Companion matrices

See the Vercel, Supabase, Doppler, Stripe, Clerk, Resend, PostHog, Cloudinary, Mapbox, domain/DNS, contamination, blocker, and next-action matrices in this directory.
