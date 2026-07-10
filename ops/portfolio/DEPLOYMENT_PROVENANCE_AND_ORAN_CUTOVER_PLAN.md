# Deployment Provenance and ORAN Cutover Plan

**Prepared:** 2026-07-10  
**Scope:** Lake & Pine, LogLoads, and ORAN  
**Execution state:** Plans complete. No deployment, alias, domain, database, provider project, or feature branch was changed.

## Decision table

| Venture | Current source truth | Current provider artifact | Pass 2 classification | Required decision |
|---|---|---|---|---|
| Lake & Pine | `main` `0b7116f72878ba3f67e3ff9948a11da83cc5bab7`; candidate `feat/production-foundation` `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a`, five commits ahead and zero behind | READY production `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt`, aliased to `lakeandpine.vercel.app`, created from a dirty CLI redeploy that cannot be tied to an exact committed SHA | Plan completed; cutover blocked by production risk; custom domain blocked by missing domain | Review and merge/reproduce the exact feature head before replacing the current recovery artifact |
| LogLoads | `main` `e78b48c292c57339a0610fcdbf2effa08827dc40`; feature `cce1c4494ae49d28aacc42724ab7245668474ab7`; 8 main-only and 22 feature-only commits after merge base `f096520d95f2e601799de718378f2319536c255c` | Dirty READY preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF`; dirty ERROR production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` | Plan completed; blocked by production risk; requires founder architecture decision | Choose persistent single-node hosting or re-architect for stateless/multi-instance Vercel before any production promotion |
| ORAN | `main` `1dc1291d61cc9f27ee830f980e32eabd52248083`; migration candidate `feat/portfolio-convergence-azure-exit` `217cd962de1633321cae49327dbc089fc4ad7377`, nine commits ahead and zero behind | Empty canonical Vercel shell; no deployment or alias | Plan completed; cutover blocked by production risk | Approve the reviewed migration only after CI, env, database, preview, observability, and functional rollback gates are green |

## Lake & Pine normalization

The current alias is working, but it is not reproducible from `main`. The candidate branch adds 74 files and more than 11,000 lines, including the application tree that `main` currently lacks. Treat this as an application merge, not a small infrastructure patch.

### Gates

1. Preserve the current READY deployment, deployment ID, aliases, creation time, and rollback owner before any automatic deployment is enabled.
2. Review exact candidate `e1fe8f0` through a PR or reproduce it on an approved branch. Confirm the resulting `main` includes `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, and `apps/web` before Vercel builds `main` at root `apps/web`.
3. Add CI. Pin Node `24.16.0` and pnpm `10.12.4`; require frozen install, lint, typecheck, and production build.
4. Deploy an exact-SHA preview against Doppler `stg`. Verify critical pages, business contact content, Supabase/RLS behavior, auth-disabled behavior, booking/quote routes, and safe provider-failure states. Do not modify remote schema while normalizing source provenance.
5. Create a `main`/`prd` candidate on the provider hostname. Record its deployment ID and SHA, then compare it with the current alias before promotion.
6. Keep domain work separate. `lakepinecleaning.com` is unregistered, so custom-domain setup remains a founder purchase decision even after source normalization.

### Rollback

- Keep `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` and its alias intact until the clean candidate passes.
- On failure, restore the alias to that recorded deployment; do not reset or reverse the database.
- The dirty artifact is temporary recovery evidence, not a transfer-ready release. Replace it only with a clean, exact-SHA artifact.

## LogLoads architecture and provenance gate

LogLoads must not be promoted to Vercel production merely by repairing the observed `.pnpm`/tracing `ENOENT`.

Repository evidence establishes that:

- `docs/DECISIONS.md` defines a single-writer engine with local disk as primary storage and reserves Vercel until an asynchronous database layer exists.
- `docs/DEPLOYMENT.md` requires exactly one process and a persistent `/data` volume, with container-image rollback while preserving the volume.
- `apps/web/lib/services.ts` uses a local state file and process-global state; Supabase is a boot-time/write-through mirror rather than the canonical transaction store.
- Vercel already has the intended Next.js framework, Node 24, and root `apps/web`. The local tracing change may address packaging, but cannot make the runtime safe across restarts or concurrent instances.

### Founder decision

| Path | Required implementation | Production target |
|---|---|---|
| A — preserve the current architecture | Produce one reviewed container, mount a durable volume, ensure exactly one writer, test restart restoration and the Supabase mirror, and deploy to Fly.io, Railway, a VM, or equivalent single-node host | Persistent-volume host; Vercel remains preview/non-production |
| B — converge on Vercel | Make Supabase/Postgres the canonical transactional store; remove process-local authoritative state and in-memory-only rate limiting; prove concurrent-instance, retry, and restart correctness; update the architecture decision | Vercel only after stateless/multi-instance gates pass |

### Source gates after the architecture decision

1. Reconcile the eight `main`-only CI/release commits with the twenty-two feature-only commits. Do not force-push, discard, or blindly replace either history.
2. Commit and review the tracing change only if Vercel remains a selected target. Never promote or reuse ignored `.vercel/output`; build from a clean exact SHA.
3. Require frozen install, lint, typecheck, tests, guardrails, build, E2E, `/api/health`, restart/state restoration, and concurrency tests appropriate to the selected host.
4. Treat the READY preview as diagnostic only. It proves that pages can be packaged, not that authoritative state survives or remains consistent.
5. Keep `logloads.com` on GoDaddy Website Builder until the chosen runtime and rollback pass. That current site is the public web rollback target.

### Rollback

- Path A: redeploy the recorded prior image while preserving the persistent volume and Supabase mirror. Database/schema correction remains forward-only.
- Path B: promote one recorded prior Vercel artifact; do not reverse database migrations destructively.
- Never use deletion of state, customers, provider resources, or the volume as rollback.

## ORAN preview-first migration and DNS cutover

The public Azure IP currently returns a 404 and invalid TLS. Restoring that A record after a failed cutover would restore the old DNS value, not a functioning service. ORAN therefore needs a functional recovery artifact before DNS can change.

### Repository and CI gates

1. Review exact migration head `217cd962`; do not connect the Vercel project to stale `main` and let it auto-deploy.
2. Commit the currently untracked Vercel workflow separately. Pin the Vercel CLI and add an exact-SHA preview/build/smoke path before any production job.
3. Repair existing CI: align Node 20/24, remove the deleted `build:functions` contract, and replace Azure Maps variable checks with the migration branch's actual map/runtime contract.
4. Remove or justify stale Application Insights/Azure CSP endpoints while preserving every endpoint still required during coexistence.
5. Define ORAN-owned Doppler `stg` variables for canonical URL, database, Clerk, `CRON_SECRET`, `INTERNAL_API_KEY`, mail, logs, and monitoring. Current Doppler configs are metadata-only.
6. Back up and reconcile the 97-table Supabase schema, one-row migration ledger, and RLS/policy intent before any data mutation.

### Preview gates

1. Produce a clean prebuilt preview from the reviewed SHA without attaching the custom domain.
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
