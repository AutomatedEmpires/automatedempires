# Venture Status Rollup

**Snapshot:** 2026-07-12
**Status vocabulary:** blocked, active, next, deferred, no-go, docs-only, security-risk, design-needed, production-ready, money-ready, transfer-ready.

No venture is classified as `money-ready` or `transfer-ready`. No new `production-ready` classification is granted by this rollup.

| Venture | Current status | What is proven | What blocks the next status | Next controlled action |
|---|---|---|---|---|
| AutomatedEmpires | **active · docs-only · security-risk** | Current public-surface deployment provenance and operating registries exist | Functional rollback/DNS smoke; command-layer evidence schema, freshness, access, cost/risk, and secret/PII boundaries; governance concentrated | Keep initial status/provider/rollout/governance/cost-risk/orchestration/transfer-readiness slices private, read-only, and evidence-backed |
| Explore&Earn | **active · blocked · no-go** | Exact-main Preview `dpl_LW9LvGWrjRT1fzpMQXwGaAxoTm2B` serves `/`, `/seek`, `/map` against hosted Supabase; test Stripe catalog/unpaid Checkout, accepted Resend identity, Sentry, and consented PostHog ingestion passed | Dark Clerk, signed Stripe webhooks/app Checkout, incomplete `prd`, Supabase ledger/storage/tenant tests, delivery/reply, functional rollback, remote Mapbox fixture; no credential can retire | Accept PR #244 as NO-GO evidence; confirm the existing Phase 2 single writer; run only dark/test/disposable gates with founder attendance |
| Sweepza | **next · active · blocked · no-go** | Technical/provider boundaries and owned domain exist; an evidence-only preflight is underway | Non-operator source/status/link-out/disclaimer model; legacy entry/winner/billing disposition; Production Clerk; foreign E&E Stripe residue; rollback/data/telemetry | Complete discovery/source verification and keep operator flows inactive. Do not activate Clerk/email/payments or mutate residue before the required decisions |
| LogLoads | **blocked · security-risk** | Supabase-canonical coordination source and clean deployment provenance exist | Live data authority/backup/restore/upgrade; shared atomic limiter across serverless instances; advisories; provider activation; rollback; independent email | Evaluate Supabase limiter first, KV/Upstash only if unsuitable, memory local/dev only; then prove exact-SHA multi-instance/outage behavior and migration/rollback |
| Lake & Pine | **blocked · security-risk · design-needed** | Clean source, disposable-data booking persistence/dashboard fixtures, deployment provenance, and owned domain support the Phase 1 operating-system direction | Phase 1 slice/capacity/estimate/role/communication decisions; functional rollback/DNS/data/telemetry/support proof; broader production behavior unproven | Sequence booking/planning, property/preferences, recurring plans, pipeline/status, communication, dashboard, and estimate direction; keep payments Phase 2 |
| BidSpace | **blocked · security-risk · design-needed · no-go** | Exact-main CI, deployment artifact, and dev/test infrastructure exist | Host/vendor/temporary-space data and RLS; bidding/application/communication/outreach/trust rules; domain; legal entity/host-fee/payment model | Keep non-live and non-generic-auction; synthetic host/vendor/space/bid flows may proceed, but live payments/Stripe Connect require approvals |
| ORAN | **blocked · security-risk · no-go** | Protected exact-SHA shell evidence exists, but chat-first matching/data-backed workflows and public-launch gates do not | Guided intake/matching, source/provenance/stale/issue/review/sourcing/support model; regional scope; schema/security/recovery; Azure/Mailgun | Keep protected and regional; no resource dump, tracking/pixels, public launch/DNS, unsafe migration, advice, partnership claim, or provider retirement |
| Komfort Killz | **deferred · design-needed · docs-only** | A Canva folder/brand namespace is visible | No canonical venture/account/provider map, brand-kit ownership discrepancy, product/runtime scope unknown | Inventory ownership and assets read-only; founder defines venture scope before design or build work |
| Just Jesus Bro | **deferred · design-needed · docs-only** | Brand/domain evidence is recorded | No canonical repo, provider, governance, product, runtime, or transfer record | Founder decides whether it is an active venture; then create a non-secret inventory before any build/provider work |

## Readiness interpretation

- `READY` in Vercel means the deployment built and the provider considers it ready; it does not prove functional Production, rollback, data, auth, money, email, or operations.
- `docs-only` means the artifact can improve the operating picture; it does not close a provider or runtime gate.
- `next` identifies sequencing priority, not permission to mutate providers.
- `design-needed` does not authorize implementation. Explore&Earn's future design pass remains separately deferred even though the current application is not final.
- Product definitions come from `docs/VENTURE_OPERATING_DEFINITIONS.md`; a route, provider account, deployment, or historical plan cannot change them.

## Portfolio-wide gates

The portfolio cannot claim Production, money, or transfer readiness while these shared controls remain unresolved:

1. authoritative owner/billing/recovery/RBAC registry and tested backup-admin paths;
2. venture-specific deployment and functional rollback evidence;
3. live data/schema/backup/restore authority;
4. signed auth/payment webhook proof and safe identity recovery;
5. venture-specific email delivery/reply/support ownership;
6. credential replacement and zero-use retirement evidence;
7. recipient-accepted billing, recovery, and transfer operations.

