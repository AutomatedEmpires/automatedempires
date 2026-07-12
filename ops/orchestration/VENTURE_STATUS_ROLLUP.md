# Venture Status Rollup

**Snapshot:** 2026-07-12
**Status vocabulary:** blocked, active, next, deferred, no-go, docs-only, security-risk, design-needed, production-ready, money-ready, transfer-ready.

No venture is classified as `money-ready` or `transfer-ready`. No new `production-ready` classification is granted by this rollup.

| Venture | Current status | What is proven | What blocks the next status | Next controlled action |
|---|---|---|---|---|
| AutomatedEmpires | **active · docs-only · security-risk** | Current-main site deployment provenance exists; parent dependency fix in PR #9 is locally and remotely green | Functional rollback/DNS smoke incomplete; no test suite; orchestration/Pass 5/security docs unmerged; governance concentrated | Review #8, then #9; merge orchestration after refresh; keep provider/dashboard work read-only |
| Explore&Earn | **active · blocked · no-go** | Exact-main Preview `dpl_LW9LvGWrjRT1fzpMQXwGaAxoTm2B` serves `/`, `/seek`, `/map` against hosted Supabase; test Stripe catalog/unpaid Checkout, accepted Resend identity, Sentry, and consented PostHog ingestion passed | Dark Clerk, signed Stripe webhooks/app Checkout, incomplete `prd`, Supabase ledger/storage/tenant tests, delivery/reply, functional rollback, remote Mapbox fixture; no credential can retire | Accept PR #244 as NO-GO evidence; confirm the existing Phase 2 single writer; run only dark/test/disposable gates with founder attendance |
| Sweepza | **next · active · blocked** | Clean technical baseline, dedicated Supabase and Stripe boundaries, owned domain/support address; an evidence-only preflight is already underway | Production uses Clerk development; no current-main Preview yet in preflight; foreign E&E Stripe endpoint/residue; email capacity/alias activation; rollback/data/telemetry evidence | Complete the existing preflight. Do not activate Clerk/email or mutate Stripe residue until founder decisions and E&E replacement proof |
| LogLoads | **blocked · security-risk** | Supabase-canonical source is merged; strong exact-main CI and clean Production provenance exist | Live data authority/backup/restore/upgrade, distributed rate limiting, fail-open dependency review, advisories, provider activation, rollback, independent email | After Sweepza sequencing review, run a read-only live-data/runtime provenance pass, then seek architecture and migration-window decisions |
| Lake & Pine | **blocked · security-risk · design-needed** | Merged clean source and Production deployment provenance; owned domain | High DOM-XSS alert, no automated tests, product scope unclear, functional rollback/DNS/data/telemetry/support gates | Fix/review the XSS sink in an isolated security lane; founder chooses marketing/lead service versus booking product before provider rollout |
| BidSpace | **blocked · security-risk · design-needed** | Exact-main CI and core deployment provenance; dev/test infrastructure exists | Tar-chain alerts, missing final domain, RLS/product intent, Production auth/mail, Stripe Connect legal/operating model | Resolve dependency strategy and founder decisions on domain/legal/Connect before Production provisioning |
| ORAN | **blocked · security-risk · no-go** | Draft convergence PR has substantial core checks, but no safe deployment baseline | Critical/high dependency findings, CodeQL alerts, failing ancillary gates, schema/ledger mismatch, zero safe Preview/recovery, Azure/Mailgun uncertainty | Keep last. Run recovery-first security/schema authority work; no deploy, DNS, migration replay, or provider retirement |
| Komfort Killz | **deferred · design-needed · docs-only** | A Canva folder/brand namespace is visible | No canonical venture/account/provider map, brand-kit ownership discrepancy, product/runtime scope unknown | Inventory ownership and assets read-only; founder defines venture scope before design or build work |
| Just Jesus Bro | **deferred · design-needed · docs-only** | Brand/domain evidence is recorded | No canonical repo, provider, governance, product, runtime, or transfer record | Founder decides whether it is an active venture; then create a non-secret inventory before any build/provider work |

## Readiness interpretation

- `READY` in Vercel means the deployment built and the provider considers it ready; it does not prove functional Production, rollback, data, auth, money, email, or operations.
- `docs-only` means the artifact can improve the operating picture; it does not close a provider or runtime gate.
- `next` identifies sequencing priority, not permission to mutate providers.
- `design-needed` does not authorize implementation. Explore&Earn's future design pass remains separately deferred even though the current application is not final.

## Portfolio-wide gates

The portfolio cannot claim Production, money, or transfer readiness while these shared controls remain unresolved:

1. authoritative owner/billing/recovery/RBAC registry and tested backup-admin paths;
2. venture-specific deployment and functional rollback evidence;
3. live data/schema/backup/restore authority;
4. signed auth/payment webhook proof and safe identity recovery;
5. venture-specific email delivery/reply/support ownership;
6. credential replacement and zero-use retirement evidence;
7. recipient-accepted billing, recovery, and transfer operations.
