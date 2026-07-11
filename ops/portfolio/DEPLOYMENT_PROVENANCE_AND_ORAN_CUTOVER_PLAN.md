# Deployment Provenance and ORAN Cutover Plan

**Prepared:** 2026-07-10  
**Scope:** Lake & Pine, LogLoads, and ORAN  
**Pass 3 execution state:** Local, isolated remediation candidates were prepared and validated for Lake & Pine and ORAN. No provider deployment, alias, domain cutover, database mutation, or production resource was changed.

## Decision table

| Venture | Current source truth | Current provider artifact | Pass 3 classification | Required decision |
|---|---|---|---|---|
| Lake & Pine | Base `e1fe8f00…`, five ahead/zero behind `main`; local branch commit `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` adds pinned CI and Windows case repair, worktree clean | Two `READY` production-target deployments from dirty `122dd312`; latest `dpl_AaAE…`. Neither is an exact build of local commit | Local source fix **safely fixed now**; push/PR/Preview/merge/cutover **blocked by production risk** | Obtain approved GitHub auth, push PR, prove exact-SHA Preview, merge before replacing recovery artifact |
| LogLoads | `main` `e78b48c292c57339a0610fcdbf2effa08827dc40`; feature `cce1c4494ae49d28aacc42724ab7245668474ab7`; 8 main-only and 22 feature-only commits after merge base `f096520d95f2e601799de718378f2319536c255c` | Dirty READY preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF`; dirty ERROR production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` | Plan completed; blocked by production risk; requires founder architecture decision | Choose persistent single-node hosting or re-architect for stateless/multi-instance Vercel before any production promotion |
| ORAN | Base candidate `217cd962de1633321cae49327dbc089fc4ad7377`; isolated local remediation commit `5ec356195eb2bc13efc1e07c536a83a76bf036e7` on `codex/pass-3-vercel-preview-217cd962` | Vercel project `prj_pQlCLP4RXGr2eJTo7fzZyMPX9QLy` is Node 24, `live=false`, with no domains or deployments | Local CI/runtime remediation **safely fixed now**; preview/cutover **blocked by production risk** | Review/push the exact local commit, provide scoped Preview credentials/runtime vars, reconcile 53 repository migrations against one managed ledger entry, then prove Preview and rollback |

## Lake & Pine normalization

The provider artifact works, but it is not reproducible from `main`. Both production-target deployments came from dirty SHA `122dd312`; the exact candidate `e1fe8f00` is two commits newer and five commits ahead of prototype `main`. Treat source convergence as an application merge, not a small infrastructure patch.

Pass 3 local commit `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` adds a pinned Node `24.16.0` / pnpm `10.12.4` workflow and moves `toast.ts` to `toast-events.ts` to remove the Windows/Linux collision with `Toast.tsx`. Frozen install, lint, typecheck, build, workflow parse, and diff checks pass; no tests exist. Commit is unpushed with no PR/Preview.

### Gates

1. Preserve the current READY deployment, deployment ID, aliases, creation time, and rollback owner before any automatic deployment is enabled.
2. Review local commit `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` through a PR. Confirm resulting `main` includes workspace files and `apps/web` before Vercel builds root `apps/web`.
3. Require the prepared pinned CI remotely; record explicitly that no tests currently exist.
4. Deploy an exact-SHA preview against Doppler `stg`. Verify critical pages, business contact content, Supabase/RLS behavior, auth-disabled behavior, booking/quote routes, and safe provider-failure states. Do not modify remote schema while normalizing source provenance.
5. Create a `main`/`prd` candidate on the provider hostname. Record its deployment ID and SHA, then compare it with the current alias before promotion.
6. Keep domain work separate. Authenticated GoDaddy control of `lakeandpinecleaning.com` is confirmed, so no purchase is required; custom-domain configuration remains blocked until the clean release and rollback gates pass.

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

1. Review base `217cd962` and local remediation commit `5ec356195eb2bc13efc1e07c536a83a76bf036e7`; do not connect the Vercel project to stale `main` or treat the unpushed local commit as release authority.
2. The local commit pins Vercel CLI `55.0.0`, adds a workflow-dispatch exact-40-character-SHA Preview build/deploy, proves checkout identity, and records the immutable Preview URL. Push it only through review; keep production promotion out of this workflow.
3. The local commit also aligns CI on Node 24, removes the deleted `build:functions` contract, and replaces stale Azure Maps/NextAuth runtime names with the migration branch's web contract.
4. The local patch removes stale CSP configuration while retaining current runtime requirements. Re-review CSP in the actual Preview.
5. Define ORAN-owned Doppler `stg` variables for canonical URL, database, Clerk, `CRON_SECRET`, `INTERNAL_API_KEY`, mail, logs, and monitoring. Current Doppler configs are metadata-only.
6. Back up and reconcile the 97-table Supabase schema and RLS/policy intent. The repository contains 53 migrations while the managed ledger exposes one entry; this mismatch blocks Preview writes and every production cutover.

### Completed local verification

- `npm ci`, lint, typecheck, runtime-contract validation, and workflow lint passed on commit `5ec3561`.
- 3,753 tests passed; the production build generated 149 pages.
- The production dependency audit reported zero vulnerabilities.
- These are local source checks only. The branch is not pushed, the exact-SHA workflow has not run, and no Vercel Preview exists.

### Preview gates

1. Push the reviewed remediation commit and provide narrowly scoped `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` through the approved GitHub environment. Populate ORAN-owned Preview runtime variables without exposing values, then produce a clean prebuilt Preview without attaching the domain.
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
