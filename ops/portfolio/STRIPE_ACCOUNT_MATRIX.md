# Stripe Account Matrix

**Verified provider snapshot:** 2026-07-10 (Pass 4 account-switcher/API execution refresh)
**Security note:** Account credentials, signing material, customer records, and credential fingerprints are intentionally excluded.

This matrix distinguishes live provider evidence from repository intent. `Unknown` means the audit did not prove the resource or boundary; it does not mean the resource is absent.

## Current venture boundaries

| Venture | Product intent | Current provider evidence | Environment separation | Contamination status | Safe next action |
|---|---|---|---|---|---|
| AutomatedEmpires | Parent-company billing only if a defined product requires it | No AutomatedEmpires-specific account was verified | Not applicable until a billing use case is approved | Unknown; no sharing was confirmed | Do not create speculative products or an account. Record the legal entity, billing owner, and product decision first. |
| Explore&Earn | Subscription and marketplace billing | Dedicated live account `acct_1RM…pSG9` was verified empty before a canonical five-product/ten-price live catalog was created. Dedicated test account `acct_1Te…gdTF` was seeded. No customer, invoice, payment, subscription, payout, tax, or legal state changed | Twelve expected test variables are verified in Doppler `dev`/`stg` and Vercel Preview. Production binding remains unactivated because the current deployed credential's account identity is not yet safely proven and the correct live webhook is absent | **Dedicated account boundary verified; test/catalog preparation safely fixed; production activation blocked by production risk** | Prove the current production account ID without revealing the key, create/verify the E&E live webhook, pass exact-SHA Preview, then promote the verified binding. |
| ORAN | No active Stripe requirement was provider-verified | No ORAN-specific account was verified | Unknown | Unknown; no sharing was confirmed | Confirm a real payment use case before any account work. Do not copy another venture's billing configuration. |
| BidSpace | Stripe Connect platform is the repository target | No BidSpace-specific platform/account was verified | Unknown | Unknown | Treat Connect creation as a legal, identity, payout, and tax gate. Define the marketplace money flow before provisioning. |
| Lake & Pine | Customer payment methods and invoices are planned | No Lake & Pine-specific account was verified | Unknown | Unknown | Finalize the operating entity and billing workflow, then provision test mode before any live activation. |
| Sweepza | Host subscriptions and additional-listing billing | Dedicated sandbox `acct_1Te…88pB` and live `acct_1Sp…cxzo` are verified. The $19 base and $5 add-on prices resolve in the intended modes. Live account retains a foreign Explore&Earn webhook, two unclassified customers, and one $0 draft invoice; payments, subscriptions, and related money activity remain zero | All Vercel lanes are aligned to the intended Sweepza account/mode and prices | **Dedicated account/environment boundary safely fixed; residual foreign configuration/non-money objects blocked by production risk** | Keep the foreign endpoint until Explore&Earn's replacement is verified. Classify the customers/invoice using non-sensitive metadata; do not delete or irreversibly mutate them without explicit approval. |
| LogLoads | Subscriptions only; brokerage, Connect, and freight-payment handling are out of scope | No LogLoads-specific live account was verified | Unknown | Unknown | Preserve the subscriptions-only product boundary. Provision only after pricing and the operating entity are approved. |

## Corrected account-boundary rules

Pass 4 authenticated account-switcher/API evidence corrected the Pass 2 mixed-account interpretation. `acct_1RM…pSG9` is the dedicated Explore&Earn live account; `acct_1Sp…cxzo` is the dedicated Sweepza live account. The remaining cross-venture artifact is the Explore&Earn webhook in the Sweepza account, not shared payment processing. The current Explore&Earn production runtime credential still needs a safe account-ID proof.

1. Do not move customers, subscriptions, balances, payouts, disputes, tax settings, or live-mode data without explicit founder approval and a provider-supported migration plan.
2. Record product, price, portal, webhook endpoint, event subscription, and application-consumer names before activating or retiring any binding.
3. Prove each dedicated test-mode account, checkout, and signed webhook path before live cutover and retain the current working integration for rollback.
4. Use venture- and environment-specific webhook endpoints and signing configuration. A distinct endpoint inside a shared account does not make the account independently transferable.
5. Do not revoke current credentials or remove live webhooks until every consumer has been migrated and verified.

## Pass 2 snapshot and Pass 4 correction

Pass 2 read-only counts found two customers, no stored card or US-bank payment methods, no subscriptions, charges, PaymentIntents, refunds, or disputes, one draft invoice, three products, five prices, and two venture-domain webhooks in what was then treated as a mixed live account. Pass 4 established that account as Sweepza's dedicated live account. The two customers, $0 draft invoice, and foreign Explore&Earn webhook remain unclassified/unretired.

Pass 4 safely created only catalog/configuration state in the previously empty Explore&Earn live account and seeded its test account; it aligned Sweepza's existing account/price variables. No customer, invoice, payment, subscription, payout, tax, or legal state was mutated. Remaining activation and residual cleanup gates are in [STRIPE_LIVE_ACCOUNT_SEPARATION_PLAN.md](./STRIPE_LIVE_ACCOUNT_SEPARATION_PLAN.md).
