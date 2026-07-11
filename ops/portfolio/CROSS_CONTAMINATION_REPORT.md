# Cross-Contamination Report

**Verified snapshot:** 2026-07-10 (Pass 3 execution refresh)

The review compared repository configuration names, Doppler value fingerprints without displaying values, Vercel/GitHub metadata, and provider account identities. Confirmed findings are separated from suspected or acceptable shared ownership.

## Confirmed contamination and unsafe coupling

| Finding | Ventures | Severity | Evidence | Status | Safe remediation |
|---|---|---:|---|---|---|
| One live Stripe account contains the Sweepza-oriented catalog and webhooks for both sweepza.com and exploreandearn.com while account identity remains mixed | Explore&Earn, Sweepza | Critical | Authoritative live Stripe inventory; Pass 2 counted two customers, no stored payment methods/subscriptions/charges, and one draft invoice without displaying customer data | **Unresolved: identity, founder decision, and live-money gate; written plan complete** | Founder selects which venture retains the account, assigns the two customers/draft invoice, activates replacements, proves sandbox/live smoke and rollback, then separately authorizes any live mutation |
| Distinct broad/full-access Resend credentials for Explore&Earn and LogLoads reach the same one-domain team | Explore&Earn, LogLoads | High | Authenticated dashboard: plan uses 1/1 domain and has two broad keys. Explore&Earn DNS is now publicly resolving and provider-verified; LogLoads has no domain/from address and the current key spans the same team | **Partially remediated:** Explore&Earn domain verification completed; account/key separation is **blocked by payment/plan** and production proof | Keep the team for Explore&Earn, replace its broad key only after scoped-key delivery passes, and create a separate LogLoads team/domain after founder cost approval |
| One apparently unrestricted public Mapbox token is configured in three venture contexts; LogLoads also stores it under a server-shaped variable | Explore&Earn, BidSpace, LogLoads | Medium | Equality comparison and unrelated-origin probe; branch-qualified scan proves an Explore&Earn consumer and a LogLoads feature-branch consumer/fallback, while BidSpace has placeholders only. Lake & Pine has an independent optional consumer but no active token | **Unresolved: management-authority and production gates** | Use non-default public `styles:read`/`fonts:read` tokens with venture HTTPS-domain restrictions; do not create server tokens; retain tested MapLibre/SVG fallbacks and retire the shared token only after zero use |

## Environment contamination within a venture

| Finding | Severity | Status | Safe remediation |
|---|---:|---|---|
| Sweepza dev, staging, and production still resolve to one development instance with one user | High | **Partially remediated:** dark production instance, DNS Verified, SSL Issued; runtime install remains open | Configure OAuth/webhook/admin recovery, prove dark Preview, then replace `prd`; decide `stg` strategy |
| LogLoads dev/stg resolve to one zero-user development instance; `prd` absent | High | **Partially remediated:** dark production instance, DNS Verified, SSL Issued; runtime/architecture gates remain | Keep dark until hosting/source decided; configure callbacks/webhooks and prove Preview before installing keys |
| Explore&Earn has one dev user and no runtime production keys | High | **Partially remediated:** dark production instance, DNS Verified, SSL Issued | Configure OAuth/JWT/webhook/admin recovery and prove auth in dark Preview; dev user re-registers if retained |

## Cloudinary structural sharing (not active cross-venture writes)

The Free Cloudinary account has one dynamic-folder product environment using 1.93/25 credits. It contains 1,009 source and 156 derived objects: 974 source objects are under Explore&Earn, while 35 sample/provider/root objects need classification. Only Explore&Earn `dev` has Cloudinary configuration. Four signed presets are not folder-bound and allow overwrite. No active cross-venture writes were confirmed, but the single admin/product-environment boundary is not transfer-grade. No media or preset was changed.

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
- A shared Sentry organization is acceptable because BidSpace, Explore&Earn, LogLoads, and Sweepza have distinct projects/DSNs. Team/alert ownership is still shared and unassigned; an owner-grade token in Explore&Earn `dev` is overprivileged.
- Repeated Doppler metadata variables and common local development URLs are structural defaults, not shared secrets.
- Explore&Earn and LogLoads Resend credentials are different. The contamination is account/domain coupling, not credential reuse.
- The three Clerk instance IDs are distinct. The problem is missing production and within-venture environment coupling, not cross-venture Clerk reuse.
- Empty Cloudinary folders do not prove active venture environments or credential sharing.
- No committed live-key pattern or identical secret fingerprint was found across the seven default-branch repository snapshots.

## Pass 3 remediation boundary

Pass 3 completed authenticated registrar ownership, Explore&Earn Resend DNS/provider verification, three dark Clerk production resources, and 15 non-colliding Clerk CNAME writes. It also prepared validated local Lake & Pine, ORAN, and Sweepza code/CI remediations. Those local changes are not pushed or deployed. Stripe live state, production Clerk credentials/flows, scoped Resend keys/delivery, Resend team separation, Mapbox tokens, and Cloudinary ownership remain open.

## Delete-review anomalies

The Vercel projects explore-and-earn-vercel-fix and sweepza-canary, plus the Doppler project example-project, are categorized as delete-review. They were not deleted because production ownership and rollback relevance were not conclusively disproven.
