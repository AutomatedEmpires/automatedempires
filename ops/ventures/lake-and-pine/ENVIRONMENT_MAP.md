# Lake & Pine environment map

Last reviewed: 2026-07-12

## Current map

| Environment | Doppler | Vercel | Supabase | Status |
|---|---|---|---|---|
| Development | `lake-and-pine` / `dev`; own Sentry DSN/org/project identifiers now included | Reviewed merged source lineage from PR #1 | Separate local/data strategy not established | Source/monitoring boundary exists; development data contract incomplete |
| Staging | `lake-and-pine` / `stg`; verified runtime plus own Sentry identifiers | Exact-source Preview `dpl_BBy…` is `READY` | Dedicated staging database not discovered | CI/Preview fixed; data isolation and Vercel Sentry runtime smoke open |
| Production | `lake-and-pine` / `prd`; verified runtime plus own Sentry identifiers | PR #1 merge/current `main` `1b6a877bc054a9239c2a430aaf668996de8a0302`; clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` `READY` | Dedicated Supabase fingerprint `…vtmwr`; 14 RLS/policy-covered tables and two remote migrations | Source/main provenance fixed; functional rollback/domain cutover open |

## Provenance and release gates

- Source `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` adds pinned CI and the Windows `Toast.tsx`/`toast.ts` case repair. PR #1 passed CI/Vercel and squash-merged as `1b6a877bc054a9239c2a430aaf668996de8a0302`.
- Preview `dpl_BBy…` and clean current-main production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` are `READY`; no latest merged-main deployment is dirty. Old dirty artifacts are historical evidence only.
- GitHub `main` requires strict `validate`; linear/squash history, conversation resolution, no force push/deletion, automation bypass, vulnerability alerts, and Dependabot security updates are configured.
- Authenticated GoDaddy control/full zone for `lakeandpinecleaning.com` is verified: dual Vercel apex A records, Vercel `www`, GoDaddy NS/domain-connect/SOA, quarantine DMARC, and no MX/SPF. DNS must not be attached/promoted before clean release/rollback.
- Preview must use `stg` and must not mutate production data, send production email, or exercise live payments. Clean `main` production now exists, but functional provider-host/rollback smoke still precedes domain work.

## Variable-name contract

The default-branch recovery snapshot has no application environment contract. Names safely imported from the verified Vercel runtime include the application URL/business contact contract and Supabase/database contract; see the venture Doppler map. Values are not documented.

Do not populate guessed variables merely because other ventures use them. App URL/Supabase and the separate Sentry identity are verified where listed. PostHog project `509088` has autocapture/replay/console off; own key/host are presence-verified in Doppler all lanes and Vercel `lakeandpine` Development plus combined Preview/Production. Clerk, Stripe, and Resend remain target-state categories.

## Pass 5 map and analytics delta

- `apps/web/src/components/AreaMap.tsx` is a real optional Mapbox consumer; the branded SVG fallback remains current.
- No Mapbox name/value is installed in Doppler. Every available founder-created named token was a secret `sk` token and was rejected for browser use. A future activation requires one Lake & Pine public `pk` token across `dev`/`stg`/`prd`, actual origins, and Preview proof.
- PostHog provider/environment separation is safely fixed. Source `1b6a877…` consumes the pair, but no fresh deployment/event smoke occurred; runtime activation remains pending that proof.

## Environment rules

- Development, staging, and production must not share mutable customer data or webhook secrets.
- Server-only database/payment/provider-management values must never be exposed to the browser.
- Preview must not route to production booking, payment, or email resources unless explicitly designed and approved.
- Provider metadata should include venture slug, environment, owner, and purpose; it must not contain a secret value.
