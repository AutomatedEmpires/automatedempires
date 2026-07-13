# AutomatedEmpires operations runbook

Last reviewed: 2026-07-10

Use this runbook for the current parent portfolio surface and future command-layer slices only. Do not use it to operate a child venture or to build a generic AI agency site.

## Current operating facts

| Fact | Status | Evidence |
| --- | --- | --- |
| Vercel project `automatedempires` exists. | **Verified current** | Provider fact supplied for this alignment pass |
| Doppler project `automatedempires` has `dev`, `stg`, and `prd`; own Sentry identifiers are installed write-only in all lanes. | **Verified current** | Pass 4 provider evidence |
| Current source includes merged #12 at `408fca3`; last verified deployed source `664cda67bc7bc91e4f1577d76bbe7758290f3a2d` is deployed as `dpl_4b8tDpSmz71WTGmrgRigPb7k5bT9` and is `READY`. | **Current source / prior deployed evidence verified** | Pass 5 plus execution-log reconciliation |
| The site uses Next.js and pins Node 24.16.0 and pnpm 10.12.4. | **Observed in repository** | `.nvmrc`, `package.json`, `AGENTS.md` |
| The current application has no database requirement. | **Verified current** | Supplied parent-venture provider decision |

## Safe release path

1. **Target state** — Work on a lane or feature branch and open a reviewed pull request. Do not push directly to `main`.
2. **Target state** — Confirm the change stays within the parent command layer/current public surface, consumes only authorized non-secret evidence, and does not mutate a child runtime or introduce child credentials.
3. **Target state** — For command-layer work, name the status/provider/rollout/governance/cost-risk/orchestration/transfer-readiness consumer, its evidence source, access boundary, freshness policy, and removal path.
4. **Target state** — Select the matching Doppler config: `dev` for local development, `stg` for pre-production validation, and `prd` for production. Only the parent Sentry identity is currently present beyond metadata; do not assume any other runtime value exists.
5. **Observed in repository** — Install and validate with the pinned toolchain:

   ```text
   pnpm install
   pnpm typecheck
   pnpm build
   ```

6. **Verified current / remaining runtime gate** — Git/root/branch policy and clean production are verified. Confirm environment bindings, functional rollback, and domain attachment before relying on cutover automation.
7. **Target state** — Deploy first to a non-production Vercel environment, review the rendered portfolio or command-layer slice, then promote the exact reviewed commit.
8. **Target state** — Smoke-test the home page, venture cards, navigation, contact link, metadata, canonical URL, and common mobile widths; command-layer slices also require evidence-age, access-control, empty/error, and secret/PII-exclusion checks.

## Production change gates

- **Owner/approval boundary** — DNS changes, domain transfers, billing changes, access removal, and provider-resource deletion require the recorded owner and the applicable paid/destructive/production-risk gate.
- **Target state** — Add a provider only when a site feature consumes it; record the provider resource and environment in `PROVIDER_LINKS.md` and `ENVIRONMENT_MAP.md` first.
- **Target state** — Store values only in the venture-specific secrets system and deployment environment. Documentation records names and ownership, never values.

## Incident response

1. **Target state** — Record the affected deployment, first observed time, user-visible symptom, and whether the issue is limited to content or affects all requests.
2. **Verified boundary** — Current source includes #12 at `408fca3`; last verified deployed source `664cda67bc7bc91e4f1577d76bbe7758290f3a2d` is cleanly deployed as `dpl_4b8tDpSmz71WTGmrgRigPb7k5bT9` and `READY`. Revalidate the current source and verify functional provider-host smoke/rollback before any DNS change.
3. **Target state** — If the regression is deployment-specific, restore the last known-good Vercel deployment without changing child-venture systems.
4. **Target state** — If DNS is implicated, preserve current records before any edit and obtain owner approval.
5. **Target state** — Re-run the smoke tests and document the restoration commit or deployment.

## Rollback rules

- **Target state** — Prefer a Vercel deployment rollback or a reviewed revert commit.
- **Target state** — Do not rotate secrets as a generic rollback step; rotate only after a confirmed exposure or provider-specific incident plan.
- **Target state** — Never delete the Vercel project, Doppler project/config, or DNS zone during incident response.

## Runtime security baseline

The dated decision at docs/decisions/2026-07-10-nextjs-security-patch.md pins the patched Next.js 15.5 and React 19.0 releases selected after Vercel blocked the first preview and the package audit exposed later advisories. Keep the pnpm lockfile synchronized and do not downgrade below that baseline.

## Evidence notes

- Engineering contract: `AGENTS.md`
- Build and toolchain: `package.json`, `.nvmrc`
- Application identity and domain: `README.md`, `app/layout.tsx`
- Portfolio metadata: `lib/ventures.ts`
- Cross-venture policy: `EMPIRE_INFRA_ALIGNMENT_PLAN.md`
