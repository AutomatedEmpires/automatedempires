# Stripe Live-Account Separation Plan

**Prepared:** 2026-07-10  
**Scope:** Explore&Earn and Sweepza  
**Current mixed live account:** `acct_1SpxXpDtcwz0cxzo`  
**Execution state:** Plan complete; no live Stripe object, credential, webhook, customer, invoice, product, price, payout, or account setting was changed.

## Decision summary

The current account is not transfer-ready because it combines Explore&Earn account identity or legacy resources with Sweepza catalog and webhook resources. The founder must choose which venture, if either, retains the account. No migration begins until that written decision names the legal owner, business identity, payout owner, tax owner, support owner, and recovery administrators.

| Option | Result | Risk / cost | Recommendation condition |
|---|---|---|---|
| A — Sweepza retains the account | Create a new Explore&Earn live account and remove Explore&Earn consumers only after replacement verification | Lowest runtime change if Sweepza is the active catalog owner, but the account's legal/business identity must be made unambiguously Sweepza-owned | Use only if the founder confirms the account and payout/legal profile belong to Sweepza and the Explore&Earn production runtime can be migrated cleanly |
| B — Explore&Earn retains the account | Create a new Sweepza live account and recreate its catalog, portal, webhook, and runtime configuration | Preserves the existing Explore&Earn-shaped account identity, but moves the currently dominant Sweepza catalog surface | Use only if the founder confirms the legal account belongs to Explore&Earn and Sweepza has no unrecorded live dependency |
| C — Neither venture retains it | Create one live account per venture; leave the mixed account as a read-only historical account after all consumers are removed | Highest verification and administration cost; cleanest ownership if the mixed legal identity cannot be assigned safely | Use when neither venture can accept the mixed account's legal, tax, payout, or audit history |

**Founder approval required:** select A, B, or C and approve the named retaining venture. This plan deliberately does not make that legal/business decision.

## Redacted read-only baseline

Provider data was counted through read-only API requests on 2026-07-10. No customer names, addresses, payment details, keys, or signing secrets were displayed or recorded.

| Resource | Observed live count / state |
|---|---|
| Account activation | Charges and payouts enabled; details submitted; United States / USD |
| Customers | 2 |
| Stored payment methods | 0 cards; 0 US bank accounts |
| Subscriptions | 0 |
| Charges / PaymentIntents | 0 / 0 |
| Refunds / disputes | 0 / 0 |
| Invoices | 1 draft; no paid/open invoice observed |
| Products / prices | 3 products; 5 prices; current catalog is primarily Sweepza-shaped, with legacy Explore&Earn evidence retained from Pass 1 |
| Webhook endpoints | 2: one on `sweepza.com`, one on `exploreandearn.com` |

This snapshot lowers—but does not eliminate—migration risk. The two customer records and draft invoice require an ownership decision. The Explore&Earn production runtime-to-account mapping also remains unproven because the deployed production credential is write-only in the hosting provider.

## Preconditions

All preconditions are mandatory:

1. Record the founder's account-retention decision and legal owner.
2. Export a redacted inventory of live products, prices, tax settings, portal configuration, webhook event sets, customer IDs, invoice IDs/statuses, and application database references.
3. Decide the owner and disposition of each of the two customer records and the draft invoice. Do not finalize, void, delete, or move them during discovery.
4. Confirm whether Explore&Earn production currently uses this account through an authenticated runtime check that reveals only the account ID, never the key.
5. Create and activate each replacement live account with venture-specific legal identity, payout account, tax profile, statement descriptor, support URL, administrators, and recovery controls.
6. Establish venture-specific test-mode accounts and prove the application flow before any live credential is generated or installed.
7. Take a timestamped configuration backup and define named operators for execution and rollback.

## Build and verification sequence

### Phase 1 — replacement sandboxes

1. Recreate each venture's products and prices with a recorded old-to-new ID mapping. Do not reuse another venture's price ID.
2. Configure separate Customer Portal settings, tax behavior, branding, statement descriptors, and notification settings.
3. Create venture-specific webhook endpoints with only the events consumed by that application.
4. Store test credentials and webhook signing material in the venture's Doppler `stg` config, sync only to the matching Vercel Preview environment, and deploy a reviewed preview.
5. Prove checkout creation, signed webhook verification, idempotent entitlement updates, portal access, cancellation, failed-payment handling, refund behavior, and replay handling. Confirm that a Sweepza event cannot mutate Explore&Earn data and vice versa.

### Phase 2 — replacement live accounts, still dark

1. Create the approved replacement live account or accounts and complete provider identity/activation requirements.
2. Recreate the verified catalog and portal configuration in live mode. Keep all new live prices undiscoverable until the cutover window.
3. Create new webhook endpoints but point them at a dark or verification-only route until the corresponding production deployment is ready.
4. Install new live keys in the correct Doppler `prd` config without removing the old values. Use distinct temporary variable names for dual verification; never paste keys into Git, chat, or documentation.
5. Deploy with billing initiation still pinned to the old account or disabled by an explicit feature flag. Verify that the new account ID can be read by the server and that webhook signatures validate.

### Phase 3 — customer and invoice disposition

The current snapshot has no subscriptions or stored payment methods, so a PAN or subscription migration is not presently indicated. Recheck immediately before execution because live state can change.

- If stored payment data appears, use Stripe's supported account-to-account customer/payment-data copy. Stripe documents that this copies customer and supported payment data; it does not move or merge charges, invoices, subscriptions, products, prices, events, or logs.
- If subscriptions appear, use Stripe's Billing migration toolkit and an explicit old/new customer, price, and subscription mapping. Do not simulate renewal with ad hoc PaymentIntent jobs.
- Assign the two current customer records to a venture or historical-only state. Preserve identifier mappings in the application database where those IDs are referenced.
- Assign the draft invoice to a named owner and approved action. Any finalization, void, deletion, or recreation is a separate live-money approval.

### Phase 4 — cutover

1. Freeze nonessential Stripe configuration changes and record fresh counts.
2. Switch exactly one venture at a time. First route new checkout sessions to the replacement account, then enable the replacement webhook consumer.
3. Complete a low-risk live transaction approved by the founder; verify customer creation, tax/amount, statement descriptor, webhook delivery, entitlement state, receipt, portal, refund path, and observability.
4. Hold for an agreed observation window. Confirm that the other venture remains unchanged.
5. Only after successful observation, remove the temporary dual-read configuration and make the replacement variables canonical in Doppler and Vercel.

### Phase 5 — retirement

1. Disable, rather than delete, superseded webhook endpoints only after a zero-traffic review and application log check.
2. Archive obsolete products/prices only after all consumers and database references are mapped. Never delete historical money records.
3. Rotate the old application credentials only after every runtime, job, CI workflow, and recovery tool is verified on replacement credentials.
4. Retain the original account and export/mapping evidence for audit and rollback according to the founder's retention decision.

## Rollback

Rollback is permitted only while the old integration remains intact:

1. Stop new checkout creation through the replacement account using the billing feature flag.
2. Restore the prior Doppler variable references and redeploy the last known-good production commit.
3. Keep replacement webhooks enabled long enough to process events already created there; do not repoint signatures across accounts.
4. Reconcile every event and customer created during the attempted window before retrying.
5. Do not roll back by deleting customers, invoices, payments, products, prices, or logs.

## Go / no-go gates

| Gate | Required evidence | Owner |
|---|---|---|
| Legal/account ownership | Written A/B/C decision and venture-specific legal/payout/tax owners | Founder |
| Live-state freeze | Fresh redacted counts, customer/draft-invoice disposition, no unexplained new subscriptions or stored methods | Billing operator |
| Preview | End-to-end checkout, webhook, entitlement, portal, failure, and refund-path evidence | Engineering |
| Secrets | Doppler-to-Vercel mapping verified; no raw values in files/logs; old credentials retained for rollback | Infrastructure |
| Live smoke | Founder-approved low-risk transaction and full event reconciliation | Founder + billing operator |
| Retirement | Observation window complete; zero unexplained traffic on old endpoints; audit export retained | Billing operator |

## Approval record

- Retaining account choice: **Pending founder decision**
- Replacement live-account activation: **Not authorized yet**
- Customer or invoice mutation: **Not authorized**
- Live cutover: **Not authorized**
- Old credential or endpoint retirement: **Not authorized**

## Provider references

- [Stripe data-migration overview](https://docs.stripe.com/get-started/data-migrations/overview)
- [Copy customer and payment data across Stripe accounts](https://docs.stripe.com/get-started/data-migrations/pan-copy-self-serve)
- [Stripe Billing subscription migration toolkit](https://docs.stripe.com/billing/subscriptions/import-subscriptions-toolkit)
- [Stripe Billing integration guidance](https://docs.stripe.com/billing)
