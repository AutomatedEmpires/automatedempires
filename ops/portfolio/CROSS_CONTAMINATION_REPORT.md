# Cross-Contamination Report

**Verified snapshot:** 2026-07-10 (Pass 2 refresh)

The review compared repository configuration names, Doppler value fingerprints without displaying values, Vercel/GitHub metadata, and provider account identities. Confirmed findings are separated from suspected or acceptable shared ownership.

## Confirmed contamination and unsafe coupling

| Finding | Ventures | Severity | Evidence | Status | Safe remediation |
|---|---|---:|---|---|---|
| One live Stripe account contains the Sweepza-oriented catalog and webhooks for both sweepza.com and exploreandearn.com while account identity remains mixed | Explore&Earn, Sweepza | Critical | Authoritative live Stripe inventory; Pass 2 counted two customers, no stored payment methods/subscriptions/charges, and one draft invoice without displaying customer data | **Unresolved: identity, founder decision, and live-money gate; written plan complete** | Founder selects which venture retains the account, assigns the two customers/draft invoice, activates replacements, proves sandbox/live smoke and rollback, then separately authorizes any live mutation |
| Distinct broad Resend credentials for Explore&Earn and LogLoads reach the same team and its sole failed Explore&Earn domain | Explore&Earn, LogLoads | High | Both keys list the same team resources; domain has one failed DKIM and two failed SPF checks; current one-domain behavior is consistent with Free but billing plan is API-unverified | **Unresolved: domain quota, payment, DNS, and account-owner gate** | Verify Explore&Earn DNS first; create a separate LogLoads team after founder cost approval; deploy sending-only venture keys and verified from addresses before retiring broad keys |
| One apparently unrestricted public Mapbox token is configured in three venture contexts; LogLoads also stores that same public token under a server-shaped variable | Explore&Earn, BidSpace, LogLoads | Medium | Redacted equality comparison, successful style read, and unrelated-Origin probe; current auth lacks token-management scopes | **Unresolved: authenticated token-owner permission gate** | Create venture/environment public tokens with SDK-only scopes and narrow origins; do not create server tokens without a server consumer; retire the shared token only after usage is zero |

## Environment contamination within a venture

| Finding | Severity | Status | Safe remediation |
|---|---:|---|---|
| Sweepza dev, staging, and production resolve to the same Clerk development instance and reuse the same webhook signing configuration; the instance has one user | High | Unresolved | Activate a dark production instance, configure domain/OAuth/production webhook, test the complete role/profile flow, then replace `prd`; decide whether `stg` is ephemeral-dev or a separate app/domain |
| LogLoads dev and staging resolve to the same Clerk development instance with zero users; production Clerk configuration is absent | High | Unresolved | Keep non-production explicitly labeled and activate production identity only after the runtime architecture and auth/webhook contracts are stable |
| Explore&Earn has one development user, but only `dev` is configured; `stg`/`prd` and production webhook config are absent | High | Unresolved | Activate and verify the production instance without overwriting dev; the dev user cannot be transferred and must re-register if needed |

## Cloudinary structural sharing (not active cross-venture writes)

The Free Cloudinary account has one product environment. Six venture-shaped root folders exist, but only `explore-and-earn` contains assets; the other five are empty. Only Explore&Earn `dev` has Cloudinary credentials. No active cross-venture writes or credential reuse were confirmed. This remains a transfer limitation because the signed Explore&Earn presets are not folder-bound and allow overwrite, and the single admin boundary can access the whole environment. The transfer-grade account/paid-plan decision is documented; no media was migrated.

## Corrected safely in Pass 1

| Finding | Correction | Verification |
|---|---|---|
| Explore&Earn used an incorrect Sentry organization slug in Doppler development | Updated Doppler development and the matching Vercel development variable to the verified organization slug | Sentry API resolved the organization/project and the provider writes succeeded |
| Lake & Pine had runtime values only in Vercel and empty Doppler application configs | Imported the verified Lake & Pine Vercel/Supabase environment into Doppler staging and production without printing values | Names-only Doppler validation and Supabase project-ref comparison passed |
| LogLoads Vercel project had no Git source binding | Connected the canonical GitHub repository, production branch main, and root apps/web | Vercel project metadata now shows the intended binding; no production promotion occurred |
| AutomatedEmpires, ORAN, and Lake & Pine lacked the required Doppler project/config structure | Created dedicated projects and dev/stg/prd configs | Doppler names-only inventory passed |
| AutomatedEmpires, BidSpace, and ORAN lacked dedicated canonical Vercel shells | Created business-specific projects and set framework/root/Node settings where known | AutomatedEmpires now has a reviewed PR preview; BidSpace and ORAN remain intentionally undeployed |

## Reviewed and not classified as contamination

- Every venture has its own GitHub repository, Doppler project, and Supabase project where Supabase is used.
- Shared GitHub ownership under AutomatedEmpires is parent governance, not runtime sharing.
- A shared Sentry organization is acceptable because Explore&Earn has a separate project; other ventures still need project-level verification.
- Repeated Doppler metadata variables and common local development URLs are structural defaults, not shared secrets.
- Explore&Earn and LogLoads Resend credentials are different. The contamination is account/domain coupling, not credential reuse.
- The three Clerk instance IDs are distinct. The problem is missing production and within-venture environment coupling, not cross-venture Clerk reuse.
- Empty Cloudinary folders do not prove active venture environments or credential sharing.
- No committed live-key pattern or identical secret fingerprint was found across the seven default-branch repository snapshots.

## Pass 2 remediation boundary

Pass 2 produced approved-safe read-only evidence and executable Stripe, Clerk, Resend, Mapbox, Cloudinary, provenance, and ORAN cutover plans. Plan completion is not provider remediation. The live Stripe account, Clerk production instances, Resend team/domain/DNS state, shared Mapbox token, and Cloudinary ownership boundary remain open until their recorded founder, payment, authenticated-dashboard, or production-risk gates are satisfied.

## Delete-review anomalies

The Vercel projects explore-and-earn-vercel-fix and sweepza-canary, plus the Doppler project example-project, are categorized as delete-review. They were not deleted because production ownership and rollback relevance were not conclusively disproven.
