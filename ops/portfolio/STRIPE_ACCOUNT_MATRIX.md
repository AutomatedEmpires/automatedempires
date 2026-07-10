# Stripe Account Matrix

**Verified provider snapshot:** 2026-07-10
**Security note:** Account credentials, signing material, customer records, and credential fingerprints are intentionally excluded.

This matrix distinguishes live provider evidence from repository intent. `Unknown` means the audit did not prove the resource or boundary; it does not mean the resource is absent.

## Current venture boundaries

| Venture | Product intent | Current provider evidence | Environment separation | Contamination status | Safe next action |
|---|---|---|---|---|---|
| AutomatedEmpires | Parent-company billing only if a defined product requires it | No AutomatedEmpires-specific account was verified | Not applicable until a billing use case is approved | Unknown; no sharing was confirmed | Do not create speculative products or an account. Record the legal entity, billing owner, and product decision first. |
| Explore&Earn | Subscription and marketplace billing | Dedicated development test account `acct_1TepcWIUt5N2gdTF` has no catalog/webhooks. Live account `acct_1SpxXpDtcwz0cxzo` contains an Explore&Earn webhook alongside Sweepza resources, but Explore&Earn's current Vercel production key is write-only and could not be matched | Development is separate; the authoritative production runtime-to-account mapping remains unproven, while the live account itself is mixed | **Confirmed mixed live account resource; production runtime identity unresolved** | Freeze nonessential live catalog and webhook changes. Prove the production runtime account, decide which venture retains the mixed account, and prepare a founder-approved migration for the other venture. |
| ORAN | No active Stripe requirement was provider-verified | No ORAN-specific account was verified | Unknown | Unknown; no sharing was confirmed | Confirm a real payment use case before any account work. Do not copy another venture's billing configuration. |
| BidSpace | Stripe Connect platform is the repository target | No BidSpace-specific platform/account was verified | Unknown | Unknown | Treat Connect creation as a legal, identity, payout, and tax gate. Define the marketplace money flow before provisioning. |
| Lake & Pine | Customer payment methods and invoices are planned | No Lake & Pine-specific account was verified | Unknown | Unknown | Finalize the operating entity and billing workflow, then provision test mode before any live activation. |
| Sweepza | Host subscriptions and additional-listing billing | Test account `acct_1TeqgHD7Yqq488pB` serves dev/stg with the two Sweepza products. Production uses live account `acct_1SpxXpDtcwz0cxzo`, which contains Sweepza products plus Sweepza and Explore&Earn webhooks and retains an Explore&Earn business name | Test and live modes are distinct; the live account boundary is mixed across ventures | **Confirmed cross-venture live account, branding, catalog, and webhook contamination** | Do not delete or repoint live endpoints. Build a separate-account migration with dual verification, rollback, and explicit treatment of existing subscriptions and customers. |
| LogLoads | Subscriptions only; brokerage, Connect, and freight-payment handling are out of scope | No LogLoads-specific live account was verified | Unknown | Unknown | Preserve the subscriptions-only product boundary. Provision only after pricing and the operating entity are approved. |

## Shared-account remediation rules

An additional authenticated CLI default test account, `acct_1RMjIWIH4Hw2pSG9`, is labeled for Explore&Earn but did not match the verified Doppler development account. It is categorized as an account anomaly until ownership and use are confirmed; it was not modified.

1. Do not move customers, subscriptions, balances, payouts, disputes, tax settings, or live-mode data without explicit founder approval and a provider-supported migration plan.
2. Record product, price, portal, webhook endpoint, event subscription, and application-consumer names before deciding which venture keeps the current account.
3. Establish the replacement account in test mode, prove checkout and signed webhook handling, then plan live cutover and rollback.
4. Use venture- and environment-specific webhook endpoints and signing configuration. A distinct endpoint inside a shared account does not make the account independently transferable.
5. Do not revoke current credentials or remove live webhooks until every consumer has been migrated and verified.
