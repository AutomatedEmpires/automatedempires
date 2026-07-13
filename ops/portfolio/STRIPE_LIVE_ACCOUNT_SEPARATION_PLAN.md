# Stripe Dedicated-Account Activation and Residual Cleanup Plan

**Prepared:** 2026-07-10

**Scope:** Explore&Earn and Sweepza

**Founder product correction (2026-07-12):** Sweepza is a discovery/listing platform, not the promotion operator by default. Existing Stripe accounts, prices, variables, and lane alignment are historical provider evidence; they do not authorize entry, prize, promotion, winner, or other operator money flows. Even host listing, placement, promotion, or subscription billing remains inactive until a separate legal/product approval defines the model. “Activation” in this plan applies to Explore&Earn only; Sweepza work is limited to non-destructive classification and preservation unless a later dated decision says otherwise.

**Pass 4 correction:** Authenticated account-switcher/API evidence proves separate live and test/sandbox accounts. The Pass 2 A/B/C retaining-account decision is superseded; the remaining work is safe activation plus residual foreign-configuration/object classification.

**Execution boundary:** Canonical catalog/test configuration and environment alignment were authorized and completed. No customer, invoice, payment, subscription, payout, tax, legal, or destructive live-state mutation occurred.

## Corrected account map

| Venture | Live account | Test/sandbox account | Verified Pass 4 state | Classification |
|---|---|---|---|---|
| Explore&Earn | `acct_1RM…pSG9` | `acct_1Te…gdTF` | Live account was empty before a canonical five-product/ten-price catalog was created. Test account was seeded; twelve expected variables are verified across Doppler `dev`/`stg` and Vercel Preview. Current production credential/account identity and the correct live webhook remain unproven | Preparation **safely fixed now**; activation **blocked by production risk** |
| Sweepza | `acct_1Sp…cxzo` | `acct_1Te…88pB` | $19 base and $5 add-on prices resolve in the intended modes; all Vercel lanes are aligned. Live account retains one foreign Explore&Earn webhook, two unclassified customers, and one $0 draft invoice. Payments/subscriptions and related money activity remain zero | Separation **safely fixed now**; residual cleanup **blocked by production risk** and destructive approval |

## Historical Pass 2 interpretation

Pass 2 saw Sweepza-shaped catalog resources, an Explore&Earn webhook, two customers, and one draft invoice in `acct_1Spx…` and therefore conservatively treated it as one mixed account. Pass 4 account-switcher/API evidence establishes that `acct_1Spx…` is Sweepza's dedicated live account and `acct_1RM…` is Explore&Earn's dedicated live account. The historical counts remain useful, but they do not justify moving or merging live accounts.

The two customers and $0 draft invoice still need non-sensitive attribution. No stored payment method, subscription, charge, PaymentIntent, refund, or dispute was found in the recorded snapshot. Recheck counts immediately before any cleanup because live state can change.

## Completed safe work

1. Verified dedicated live and test/sandbox account identities for Explore&Earn and Sweepza.
2. Created the canonical Explore&Earn live catalog only after confirming the account was empty of money/customer/config objects.
3. Seeded the Explore&Earn test catalog and verified twelve expected test variables across approved non-production lanes.
4. Verified Sweepza's $19 base and $5 add-on price resolution and aligned Vercel lanes to the intended account/mode.
5. Left every customer, invoice, foreign webhook, production credential, payout/tax/legal setting, and historical object intact.

## Remaining Explore&Earn activation plan

1. Use a safe server-side/account API check to return only the account ID for the currently deployed production credential. Never print or copy the credential.
2. Compare that ID with the intended Explore&Earn live account. Stop if it differs.
3. Create a venture-owned live webhook with only the events consumed by Explore&Earn. Point it first at a dark/verification route or reviewed exact-SHA candidate.
4. Install the intended live key, publishable key, webhook signing secret, and price mappings through Doppler-to-Vercel with dual-variable or rollback-safe naming. Do not remove the old production binding yet.
5. Prove catalog reads, checkout creation in test mode, signed webhook handling, idempotent entitlements, portal behavior, failure handling, and observability in exact-SHA Preview.
6. Promote the verified binding only after the Preview and rollback evidence pass. A live transaction, customer creation, or invoice mutation remains a separate explicit approval.

## Remaining Sweepza cleanup plan

1. Keep the foreign Explore&Earn webhook until Explore&Earn's replacement endpoint is created, deployed, and verified.
2. Inspect only non-sensitive metadata for the two customers and $0 draft invoice. Record whether each belongs to Sweepza, Explore&Earn, or stale/test history.
3. Ask for precise approval before deleting, voiding, finalizing, moving, or otherwise irreversibly mutating any customer or invoice.
4. Once Explore&Earn's replacement is proven and usage on the foreign endpoint is zero, disable before considering deletion. Preserve endpoint configuration and event history for rollback/audit.
5. Recheck product/price, portal, tax, webhook, and environment mappings after any approved cleanup. Do not change legal/payout/tax ownership in this pass.

## Rollback

1. Keep current credentials and working webhooks intact until replacements are verified.
2. Stop new checkout creation through the candidate binding using the application feature flag or last known-good deployment.
3. Restore prior Doppler variable references and redeploy the recorded known-good commit.
4. Keep candidate webhooks enabled long enough to reconcile events already created there; never reuse a signing secret across accounts.
5. Do not roll back by deleting customers, invoices, payments, products, prices, or logs.

## Go / no-go gates

| Gate | Required evidence | Owner |
|---|---|---|
| Account identity | Intended account ID returned without credential disclosure | Infrastructure |
| Preview | Exact-SHA test-mode checkout, webhook, entitlement, portal, and failure-path evidence | Engineering |
| Secrets | Doppler/Vercel names and account/mode mappings verified; old binding retained for rollback | Infrastructure |
| Live activation | Explore&Earn only: explicit approval for any live transaction or customer/invoice-producing smoke. Sweepza activation requires a separate approved host-monetization model and may not process promotion/operator money flows | Founder + billing operator |
| Residual cleanup | Non-sensitive owner classification plus explicit approval for irreversible customer/invoice action | Founder + billing operator |
| Endpoint retirement | Correct Explore&Earn replacement verified and zero unexplained traffic on the foreign endpoint | Billing operator |

## Approval record

- Dedicated account choice: **Completed by authenticated provider evidence**
- Explore&Earn catalog/test preparation: **Completed**
- Sweepza lane/price alignment: **Completed**
- Sweepza payment or billing activation: **Not authorized; provider evidence does not create product authority**
- Explore&Earn production binding/webhook activation: **Not yet verified; production-risk gate**
- Customer or invoice mutation: **Not authorized**
- Live transaction smoke: **Not authorized**
- Foreign endpoint retirement: **Not authorized until replacement and zero-use proof**
- Legal, payout, tax, or business identity changes: **Out of scope / not authorized**

## Provider references

- [Stripe data-migration overview](https://docs.stripe.com/get-started/data-migrations/overview)
- [Copy customer and payment data across Stripe accounts](https://docs.stripe.com/get-started/data-migrations/pan-copy-self-serve)
- [Stripe Billing subscription migration toolkit](https://docs.stripe.com/billing/subscriptions/import-subscriptions-toolkit)
- [Stripe Billing integration guidance](https://docs.stripe.com/billing)
