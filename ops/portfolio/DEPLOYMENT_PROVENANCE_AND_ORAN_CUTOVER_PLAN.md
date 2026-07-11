# Deployment Provenance and ORAN Cutover Plan

**Prepared:** 2026-07-10

**Scope:** Lake & Pine, LogLoads, and ORAN

**Pass 4 execution state:** Lake PR #1 source `a55ccff…` passed CI/Vercel, merged as `1b6a877…`, and produced clean `READY` main production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk`. LogLoads Supabase-canonical PR #6 final source `f280ef4fef4b992f94457aad61cfe27e8ec91791` passed its required checks, merged to default `9c9e107…`, produced clean `READY` Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4`, and produced clean `READY` main production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF`; live Supabase/data/provider cutover did not occur. ORAN green/fail-closed hardening remains draft PR #58 at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da` with zero deployments. No DNS cutover, ORAN Preview, live database mutation, or destructive resource change occurred.

## Decision table

| Venture | Current source truth | Current provider artifact | Pass 4 classification | Required decision |
|---|---|---|---|---|
| Lake & Pine | PR #1 source `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` merged as default `1b6a877bc054a9239c2a430aaf668996de8a0302` | Preview `dpl_BBy…` and clean merged-main production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` are `READY`; dirty artifact historical only | Source/CI/Preview/main production provenance **fixed and verified**; DNS cutover smoke **blocked by production risk** | Finish functional rollback/domain smoke before web-record change |
| LogLoads | Supabase-canonical PR #6 final source `f280ef4fef4b992f94457aad61cfe27e8ec91791` passed required `verify`, `migrations`, and `dependency-review` checks and merged to default `9c9e107082942e5bce782eac2ce71aa63eb7d9c0` | Exact-source Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` and merged-main production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` are `READY`; live Supabase/data/provider configuration is unchanged | Canonical source/checks/merge/main production provenance **fixed and verified**; live upgrade/provider/DNS cutover **blocked by production risk** | Prove backup/live-shape upgrade, environment provenance, distributed rate limiting, and rollback before live migration or provider activation |
| ORAN | Green hardening remains draft PR #58 at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; migration execution remains fail-closed and stale Azure assumptions are removed | Vercel project `oran` (`…X9QLy`) remains Node 24, `live=false`, with no domains/deployments | Required Build/Lint/Test/Type Check/Security Audit/Runtime Readiness checks are green; Codecov patch, Visual Regression, and runbook freshness are failing; Preview/cutover remains **blocked by production risk** | Keep the PR draft; create scoped Preview data/credential lane, reconcile schema authority without unsafe replay, repair ancillary gates, then prove Preview/rollback |

## Lake & Pine normalization

The original provider artifact worked but was not reproducible from `main`. Pass 4 treated source convergence as an application merge, preserved the old dirty artifact as historical recovery evidence, and established clean reviewed `main` authority.

Source `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` adds pinned Node `24.16.0` / pnpm `10.12.4` CI and moves `toast.ts` to `toast-events.ts` to remove the Windows/Linux collision with `Toast.tsx`. Frozen install, lint, typecheck, build, workflow parse, and diff checks pass; no tests exist. PR #1 passed CI/Vercel and squash-merged as `1b6a877bc054a9239c2a430aaf668996de8a0302`. Preview `dpl_BBy…` and clean main production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` are `READY`.

### Gates

1. Preserve clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk`, its SHA/aliases, and a named rollback owner.
2. Record explicitly that the pinned `validate` workflow has no application tests because none exist.
3. Verify critical pages, business contact content, Supabase/RLS behavior, auth-disabled behavior, booking/quote routes, and safe provider-failure states on the clean provider hostname.
4. Keep domain work separate. Authenticated GoDaddy control of `lakeandpinecleaning.com` is confirmed, so no purchase is required; custom-domain change remains blocked until functional smoke and rollback pass.

### Rollback

- Prefer restoring the alias to clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` or another recorded clean exact-SHA artifact; do not reset or reverse the database.
- The old dirty artifact is historical recovery evidence, not current release authority or transfer truth.

## LogLoads architecture and provenance gate

LogLoads must not be promoted to Vercel production merely by repairing packaging. Pass 4 explicitly prefers Supabase as canonical when a bounded implementation is possible.

Current repository/provider evidence establishes that:

- The audited feature source still uses process-global/local state as primary and writes Supabase asynchronously; documentation describing a persistent single writer is therefore accurate for that source, but not the selected Pass 4 target.
- Live Supabase has the application schema and one `operating_state` row, but that row is missing a current state key. Existing code rejects that shape, so the mirror is not production authority.
- The convergence work reconciles product and main automation and makes Supabase canonical. PR #6 is merged to default `9c9e107…`; that source and its clean production artifact are release provenance, but they are not evidence that live data or provider cutover occurred.
- Vercel's framework/root/Node settings and a packaged Preview do not prove atomic state, cold-start restoration, or concurrent-instance correctness.

### Pass 4 selected path

| Path | Required implementation | Status |
|---|---|---|
| B — Supabase-canonical Vercel | Reconciled histories; version/schema compatibility; awaited load; atomic compare-and-swap/retry; local fallback non-production; concurrency/cold-start tests | **Implemented at final PR source `f280ef4…`; required checks green; merged to default `9c9e107…`; Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` and production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` `READY`; not live-migrated or provider-activated** |
| A — persistent single writer | Use only if implementation evidence proves Path B requires a material rewrite. Produce one reviewed container/durable volume and prove restart/single-writer behavior | **Fallback only; not selected by default** |

### Source and data gates

1. Preserve the merged required-check evidence and default source `9c9e107…`; do not bypass strict protection for future changes.
2. Preserve green evidence: lint/workflow, 9/9 typecheck, 101/101 unit, build, guardrails, PostgreSQL 17 reset, RLS/grants, 37 E2E with 5 intentional skips, wrapper smoke, `verify`, `migrations`, and `dependency-review`.
3. Before live migration, back up and prove upgrade against the actual live schema/row; verify environment provenance and implement distributed rate limiting.
4. Preserve clean final-source Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4`, merged-main production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF`, and their rollback provenance. Dirty artifacts remain diagnostic only.
5. Keep `logloads.com` on Website Builder until live-data, provider, functional rollback, and DNS gates pass.

### Rollback

- Selected Path B: promote one recorded prior Vercel artifact and keep database/schema correction forward-only; do not reverse migrations destructively.
- Fallback Path A, only if selected later: redeploy the recorded prior image while preserving the durable volume and Supabase mirror.
- Never use deletion of state, customers, provider resources, or the volume as rollback.

## ORAN preview-first migration and DNS cutover

The public Azure IP currently returns a 404 and invalid TLS. Restoring that A record after a failed cutover would restore the old DNS value, not a functioning service. ORAN therefore needs a functional recovery artifact before DNS can change.

### Repository and CI gates

1. Review draft PR #58 at exact head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da`; do not connect the Vercel project to stale `main` or treat an unmerged draft as release authority.
2. The hardening retains a reviewable exact-SHA Preview path but separates validation from credentialed deployment and requires a safe scoped Preview lane. Production promotion remains outside this workflow.
3. The hardening fail-closes the dangerous database-migration workflow and removes stale Azure runtime assumptions. Do not re-enable migration execution until schema authority is reconciled and a disposable or read-only Preview lane exists.
4. The local patch removes stale CSP configuration while retaining current runtime requirements. Re-review CSP in the actual Preview.
5. Define ORAN-owned Doppler `stg` variables for canonical URL, database, Clerk, `CRON_SECRET`, `INTERNAL_API_KEY`, mail, logs, and monitoring. Current Doppler configs are metadata-only.
6. Back up and reconcile the 97-table Supabase schema and RLS/policy intent. The repository contains 53 migrations while the managed ledger exposes one entry; this mismatch blocks Preview writes and every production cutover.

### Completed source verification

- Pass 3 verification on predecessor `5ec3561…` covered install, lint, typecheck, runtime/workflow checks, 3,753 tests, 149-page build, and production dependency audit.
- Draft PR #58 head `6d5caf226bb4940c6bc0f270f77c43e3cb30b1da` passes required Build, Lint, Test, Type Check, Security Audit, and Runtime Readiness checks.
- Codecov patch, Visual Regression, and runbook freshness remain failing. These are source-check evidence, not release authority; no exact-SHA Vercel Preview exists, and no production or data change occurred.

### Preview gates

1. Use the reviewed exact draft-PR head and provide narrowly scoped `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` through the approved GitHub environment. Populate ORAN-owned Preview runtime variables without exposing values, then produce a clean prebuilt Preview without attaching the domain.
2. Verify public and authenticated pages, Clerk redirects, database isolation, OpenStreetMap/map behavior, CSP, mail, Sentry/logging, health, and error handling.
3. Verify every cron route: unauthorized requests return `401`, missing internal configuration returns `503`, and an approved scheduled request completes exactly once.
4. Record build command, install command, Node/package-manager versions, deployment ID, artifact SHA, environment source, and test evidence.

### Production-candidate gates

1. Merge only after the preview and data-contract reviews pass.
2. Deploy to the Vercel provider hostname without attaching `openresourceaccessnetwork.com`.
3. Establish observability baselines and a named rollback operator.
4. Produce at least one known-good prior Vercel artifact or repair and verify Azure as a functional fallback. A broken Azure IP is not an acceptable rollback.
5. Export the authenticated GoDaddy zone immediately before cutover. Change web records only; preserve Mailgun MX/SPF and DMARC.
6. Verify apex, `www`, TLS, Clerk, database, mail, cron, logs, and rollback after propagation. Do not delete Azure, Key Vault, database, or mail resources during stabilization.

### Rollback

- Prefer moving the Vercel production alias to the recorded prior known-good deployment.
- Restore the Azure A record only if Azure has first been repaired and smoke-tested as a functional target.
- If neither target is functional, DNS cutover is a no-go.
