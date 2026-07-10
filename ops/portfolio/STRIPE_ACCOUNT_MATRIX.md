# Stripe Account Matrix

**Verified provider snapshot:** 2026-07-10 (Pass 2 read-only refresh)
**Security note:** Account credentials, signing material, customer records, and credential fingerprints are intentionally excluded.

This matrix distinguishes live provider evidence from repository intent. `Unknown` means the audit did not prove the resource or boundary; it does not mean the resource is absent.

## Current venture boundaries

| Venture | Product intent | Current provider evidence | Environment separation | Contamination status | Safe next action |
|---|---|---|---|---|---|
| AutomatedEmpires | Parent-company billing only if a defined product requires it | No AutomatedEmpires-specific account was verified | Not applicable until a billing use case is approved | Unknown; no sharing was confirmed | Do not create speculative products or an account. Record the legal entity, billing owner, and product decision first. |
| Explore&Earn | Subscription and marketplace billing | Dedicated development test account `acct_1TepcWIUt5N2gdTF` has no catalog/webhooks. Live account `acct_1SpxXpDtcwz0cxzo` contains an Explore&Earn webhook alongside the Sweepza-oriented catalog, but Explore&Earn's current Vercel production key is write-only and could not be matched | Development is separate; the authoritative production runtime-to-account mapping remains unproven, while the live account itself is mixed | **Confirmed mixed live account resource; production runtime identity unresolved** | Freeze nonessential live changes. Prove the production runtime account and select account-retention option A, B, or C in the written separation plan before any live mutation. |
| ORAN | No active Stripe requirement was provider-verified | No ORAN-specific account was verified | Unknown | Unknown; no sharing was confirmed | Confirm a real payment use case before any account work. Do not copy another venture's billing configuration. |
| BidSpace | Stripe Connect platform is the repository target | No BidSpace-specific platform/account was verified | Unknown | Unknown | Treat Connect creation as a legal, identity, payout, and tax gate. Define the marketplace money flow before provisioning. |
| Lake & Pine | Customer payment methods and invoices are planned | No Lake & Pine-specific account was verified | Unknown | Unknown | Finalize the operating entity and billing workflow, then provision test mode before any live activation. |
| Sweepza | Host subscriptions and additional-listing billing | Test account `acct_1TeqgHD7Yqq488pB` serves dev/stg with the two Sweepza products. Production uses live account `acct_1SpxXpDtcwz0cxzo`, which contains Sweepza catalog plus Sweepza and Explore&Earn webhooks and retains mixed business identity | Test and live modes are distinct; the live account boundary is mixed across ventures | **Confirmed cross-venture live account, branding, catalog, and webhook contamination** | Do not delete or repoint live endpoints. Current live counts lower migration complexity, but the founder must select the retaining venture and approve customer/draft-invoice disposition before execution. |
| LogLoads | Subscriptions only; brokerage, Connect, and freight-payment handling are out of scope | No LogLoads-specific live account was verified | Unknown | Unknown | Preserve the subscriptions-only product boundary. Provision only after pricing and the operating entity are approved. |

## Shared-account remediation rules

An additional authenticated CLI default test account, `acct_1RMjIWIH4Hw2pSG9`, is labeled for Explore&Earn but did not match the verified Doppler development account. It is categorized as an account anomaly until ownership and use are confirmed; it was not modified.

1. Do not move customers, subscriptions, balances, payouts, disputes, tax settings, or live-mode data without explicit founder approval and a provider-supported migration plan.
2. Record product, price, portal, webhook endpoint, event subscription, and application-consumer names before deciding which venture keeps the current account.
3. Establish the replacement account in test mode, prove checkout and signed webhook handling, then plan live cutover and rollback.
4. Use venture- and environment-specific webhook endpoints and signing configuration. A distinct endpoint inside a shared account does not make the account independently transferable.
5. Do not revoke current credentials or remove live webhooks until every consumer has been migrated and verified.

## Pass 2 live-state snapshot and plan status

Read-only API counts on 2026-07-10 found two customer records, no stored card or US-bank payment methods, no subscriptions, charges, PaymentIntents, refunds, or disputes, one draft invoice, three products, five prices, and two venture-domain webhook endpoints. No live Stripe object or setting was changed.

This is still a production-risk and founder-decision blocker: the two customers, draft invoice, legal/payout/tax ownership, and unresolved Explore&Earn runtime identity must be assigned before execution. The complete preview, cutover, rollback, and approval sequence is in [STRIPE_LIVE_ACCOUNT_SEPARATION_PLAN.md](./STRIPE_LIVE_ACCOUNT_SEPARATION_PLAN.md).
