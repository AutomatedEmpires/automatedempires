# Cross-Contamination Report

**Verified snapshot:** 2026-07-12 (Pass 5 Mapbox/PostHog refresh)

The review compared repository configuration names, Doppler value fingerprints without displaying values, Vercel/GitHub metadata, and provider account identities. Confirmed findings are separated from suspected or acceptable shared ownership.

## Confirmed contamination and unsafe coupling

| Finding | Ventures | Severity | Evidence | Status | Safe remediation |
|---|---|---:|---|---|---|
| Sweepza's dedicated live Stripe account retains a foreign Explore&Earn webhook plus two unclassified customers and one $0 draft invoice; Explore&Earn's deployed production account binding is unproven | Explore&Earn, Sweepza | High | Pass 4 account-switcher/API evidence proves separate live/test accounts. Sweepza account prices/lanes align; payments/subscriptions and related money activity remain zero. No customer identity or credential was recorded | **Partially remediated:** dedicated accounts and intended environment/price bindings are verified; residual objects and E&E production activation remain **blocked by production risk** | Prove E&E's account ID and replacement webhook first. Classify the two customers/invoice using non-sensitive metadata; do not delete or irreversibly mutate them without explicit approval. Retire the foreign endpoint only after replacement and zero-use proof |
| A legacy broad LogLoads credential still reaches the one-domain Explore&Earn Resend team; mailbox availability does not create an independent sending boundary | Explore&Earn, LogLoads | High | Authenticated dashboard and names-only environment evidence. Explore&Earn now has a scoped domain-only runtime key; LogLoads has `support@logloads.com` but no Resend domain/from/delivery proof | **Partially remediated:** E&E credential/environment separation is **safely fixed now**; E&E delivery is production-risk-gated; LogLoads independent sending is **blocked by payment/plan** | Prove E&E delivery, then retire its broad rollback key after zero use. Keep LogLoads transactional mail disabled and remove/disable legacy shared-team authority only through a verified deployment-safe change; do not send as E&E |
| Old/shared public Mapbox token remains active at provider level and a legacy server-shaped LogLoads name remains; new browser runtime values are venture-specific | Explore&Earn, BidSpace, LogLoads; Lake & Pine now separately provisioned | Low/rollback | Four separate least-scope public tokens installed; E&E legacy duplicate removed after exact replacement; allowed origins `200`, unrelated origins `403`; old/shared token retained only for rollback | Environment separation **safely fixed now**; provider retirement **blocked by remaining Preview/Production proof** | Repair E&E/Log Preview paths, verify protected Bid Preview, stage Production separately, then prove zero old/shared use before revocation |

## Environment contamination within a venture

| Finding | Severity | Status | Safe remediation |
|---|---:|---|---|
| Sweepza dev, staging, and production still resolve to one development instance with one user | High | **Partially remediated:** dark production instance, DNS Verified, SSL Issued; runtime install remains open | Configure OAuth/webhook/admin recovery, prove dark Preview, then replace `prd`; decide `stg` strategy |
| LogLoads dev/stg resolve to one zero-user development instance; `prd` absent | High | **Partially remediated:** dark production instance, DNS Verified, SSL Issued; runtime/architecture gates remain | Keep dark until hosting/source decided; configure callbacks/webhooks and prove Preview before installing keys |
| Explore&Earn has one dev user and no runtime production keys | High | **Partially remediated:** dark production instance, DNS Verified, SSL Issued | Configure OAuth/JWT/webhook/admin recovery and prove auth in dark Preview; dev user re-registers if retained |

## Cloudinary structural sharing (not active cross-venture writes)

The Free Cloudinary account has one dynamic-folder product environment using 1.93/25 credits. It contains 1,009 source and 156 derived objects: 974 source objects were under Explore&Earn, while 35 sample/provider/root objects need classification. Pass 4 safely created the nine required top-level namespaces without moving/deleting media. Fifty-five former E&E icon raws are no longer runtime icon refs but retain possible manifest/docs dependencies. Only Explore&Earn `dev` has credentials. Four signed presets remain folder-unbound/overwrite-enabled. No active cross-venture writes were confirmed, and folder taxonomy does not make the single admin environment transfer-grade.

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
- A shared Sentry organization is acceptable because all seven ventures now have distinct projects/DSNs. Ownership, one alert/project, scrubbers, IP scrubbing, and issue assignment are configured; the remaining credential risk is an owner-grade build token that must stay until a narrow replacement is installed/deployed/verified.
- PostHog now has six separate projects: preserved Explore&Earn plus AutomatedEmpires, Sweepza, LogLoads, BidSpace, and Lake & Pine. Five new projects have autocapture/replay/console capture disabled. Each approved consumer's own key/host pair is presence-verified; no cross-app reuse was introduced. Fresh deployment/event proof is open. ORAN behavioral analytics/pixels are product-prohibited for the MVP and classified `no resource`, not deferred.
- Repeated Doppler metadata variables and common local development URLs are structural defaults, not shared secrets.
- Explore&Earn and LogLoads Resend credentials are different. The contamination is account/domain coupling, not credential reuse.
- The three Clerk instance IDs are distinct. The problem is missing production and within-venture environment coupling, not cross-venture Clerk reuse.
- Empty Cloudinary folders do not prove active venture environments or credential sharing.
- No committed live-key pattern or identical secret fingerprint was found across the seven default-branch repository snapshots.

## Pass 4 remediation boundary

Pass 3 history remains: registrar control, Explore&Earn Resend DNS, dark Clerk resources, and 15 Clerk CNAMEs. Pass 4 added E&E scoped Resend/environment/source configuration; verified dedicated E&E/Sweepza Stripe accounts and safe catalog/test/price bindings; created Cloudinary taxonomy; proved PostHog non-reuse/privacy defaults; established seven governed Sentry projects; merged accepted AutomatedEmpires/E&E/BidSpace/Lake/Sweepza work; configured seven-repo protections/security; and pruned proven-obsolete branches. It did not claim mail delivery, production Stripe/Clerk activation, Mapbox token creation, Cloudinary transfer separation/media mutation, ORAN Preview, LogLoads live migration, full local-clone convergence, or production DNS cutover.

Pass 5 added PostHog separation and four venture-specific Mapbox public-token boundaries through a secure outside-repo handoff. Mapbox scopes/origins, Doppler/Vercel placement, origin enforcement, exact-main Previews, and isolated Chrome runtimes are evidenced; E&E/Log app paths and Bid protected Preview remain gates. It did not claim Production deployment, old/shared token retirement, PostHog event ingestion, or ORAN analytics.

## Delete-review anomalies

The Vercel projects explore-and-earn-vercel-fix and sweepza-canary, plus the Doppler project example-project, are categorized as delete-review. They were not deleted because production ownership and rollback relevance were not conclusively disproven.
