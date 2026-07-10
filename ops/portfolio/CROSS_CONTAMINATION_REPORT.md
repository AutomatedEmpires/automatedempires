# Cross-Contamination Report

**Verified snapshot:** 2026-07-10

The review compared repository configuration names, Doppler value fingerprints without displaying values, Vercel/GitHub metadata, and provider account identities. Confirmed findings are separated from suspected or acceptable shared ownership.

## Confirmed contamination and unsafe coupling

| Finding | Ventures | Severity | Evidence | Status | Safe remediation |
|---|---|---:|---|---|---|
| One live Stripe account contains Sweepza products and webhooks for both sweepza.com and exploreandearn.com; the Stripe business name still references Explore&Earn | Explore&Earn, Sweepza | Critical | Authoritative live Stripe account, product, price, and webhook inventory | **Unresolved: identity and money-moving gate** | Founder chooses legal/account structure; create or identify separate live accounts, map products/webhooks, test in sandbox, then migrate without moving customer/payment data unless explicitly approved |
| Distinct Resend credentials for Explore&Earn and LogLoads reach the same account and its sole Explore&Earn domain | Explore&Earn, LogLoads | High | Authoritative Resend account/domain inventory; LogLoads domain creation returned HTTP 403 because the plan permits one domain | **Unresolved: paid/account gate** | Upgrade only with approval or create a separate LogLoads Resend account; add a LogLoads-owned sending domain, deploy its scoped credential, verify delivery, then rotate the old credential |
| One public Mapbox token is configured in three venture contexts | Explore&Earn, BidSpace, LogLoads | Medium | Redacted cross-Doppler fingerprint comparison and Mapbox token validation | **Unresolved: management permission gate** | Create venture/environment-specific least-privilege public tokens, restrict allowed URLs, deploy and verify replacements, then retire the shared token |
| One free Cloudinary cloud contains venture folders for Explore&Earn, BidSpace, LogLoads, Sweepza, and unrelated namespaces | Multiple ventures | Medium | Authenticated Cloudinary cloud, preset, and root-folder inventory | **Documented limitation** | Preserve strict folders and signed presets now; move to separate environments/subaccounts only with plan support and a tested media migration |

## Environment contamination within a venture

| Finding | Severity | Status | Safe remediation |
|---|---:|---|---|
| Sweepza dev, staging, and production configuration resolve to the same Clerk development instance; no custom domain or allowed-origin separation was observed | High | Unresolved | Create a production Clerk instance, configure domains/OAuth/JWT/webhook, test preview, then replace production keys |
| LogLoads dev and staging resolve to the same Clerk development instance; production Clerk configuration is absent | High | Unresolved | Keep non-production explicitly labeled, create production identity only after the production runtime/domain is stable, and never promote the development keys |
| Explore&Earn production configuration cannot be proven separate because Doppler stg/prd are metadata-only and Vercel values are write-only | High | Unresolved | Provision authoritative production resources and migrate via Doppler after preview tests |

## Corrected during this pass

| Finding | Correction | Verification |
|---|---|---|
| Explore&Earn used an incorrect Sentry organization slug in Doppler development | Updated Doppler development and the matching Vercel development variable to the verified organization slug | Sentry API resolved the organization/project and the provider writes succeeded |
| Lake & Pine had runtime values only in Vercel and empty Doppler application configs | Imported the verified Lake & Pine Vercel/Supabase environment into Doppler staging and production without printing values | Names-only Doppler validation and Supabase project-ref comparison passed |
| LogLoads Vercel project had no Git source binding | Connected the canonical GitHub repository, production branch main, and root apps/web | Vercel project metadata now shows the intended binding; no production promotion occurred |
| AutomatedEmpires, ORAN, and Lake & Pine lacked the required Doppler project/config structure | Created dedicated projects and dev/stg/prd configs | Doppler names-only inventory passed |
| AutomatedEmpires, BidSpace, and ORAN lacked dedicated canonical Vercel shells | Created business-specific shells and set framework/root/Node settings where known | Vercel project inventory passed; none was deployed blindly |

## Reviewed and not classified as contamination

- Every venture has its own GitHub repository, Doppler project, and Supabase project where Supabase is used.
- Shared GitHub ownership under AutomatedEmpires is parent governance, not runtime sharing.
- A shared Sentry organization is acceptable because Explore&Earn has a separate project; other ventures still need project-level verification.
- Repeated Doppler metadata variables and common local development URLs are structural defaults, not shared secrets.
- Explore&Earn and LogLoads Resend credentials are different. The contamination is account/domain coupling, not credential reuse.
- No committed live-key pattern or identical secret fingerprint was found across the seven default-branch repository snapshots.

## Delete-review anomalies

The Vercel projects explore-and-earn-vercel-fix and sweepza-canary, plus the Doppler project example-project, are categorized as delete-review. They were not deleted because production ownership and rollback relevance were not conclusively disproven.
