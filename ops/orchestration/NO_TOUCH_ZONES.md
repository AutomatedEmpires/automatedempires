# Portfolio No-Touch Zones

**Snapshot:** 2026-07-12
**Default:** Absence of proof is not permission. No destructive, money-moving, provider-mutating, deployment, or credential action is authorized by this document.

| Zone | Why locked | Current dependency / owner | Unlock condition |
|---|---|---|---|
| Canonical product definitions and conflicting legacy flows | Existing code/providers can silently reintroduce stale models: Sweepza operation, Redis-first LogLoads, marketing-only Lake & Pine, public/tracked ORAN, live BidSpace, or agency-style AutomatedEmpires | Founder definition in `docs/VENTURE_OPERATING_DEFINITIONS.md` | A new dated founder decision plus reconciled docs/prompts/growth/runbooks; legacy behavior remains inactive until explicitly dispositioned |
| Live Stripe money and customer state | Customer, subscription, invoice, payment, payout, tax, dispute, or Connect changes can be irreversible or legally material | Founder plus venture money owner. Sweepza has foreign E&E endpoint and unclassified residue | Written object-specific approval, replacement proof, test-mode rehearsal, rollback/reconciliation plan |
| Old/shared Mapbox token | Still a rollback dependency; E&E Production remains on the old bundle and remote replacement use is incomplete | E&E Phase 2 owner; other mapped ventures | Replacement deployed, intended/denied origins proven, usage observation shows zero old-token use, rollback rehearsed, founder approves retirement |
| Production credentials and recovery material | Display, copying, rotation, or revocation can break every lane and expose secrets | Provider owner plus backup admin | Create → install → deploy → verify → zero-use → retire sequence, with values never recorded in Git |
| Live Supabase data, schemas, migrations, RLS, storage, and ledgers | E&E and ORAN ledgers are ambiguous; LogLoads live migration is unproven | Venture data owner | Backup and safe restore, read-only diff, disposable-lane tests, reviewed migration, rollback and explicit write approval |
| ORAN deployment, DNS, schema, Azure, Mailgun, tracking, and public access | Civic MVP requires protected regional source/provenance/stale/verification/support gates, no user/behavioral tracking or pixels, no advice/partnership claims; security/schema/recovery/billing remain unresolved | ORAN recovery/security/product owner and founder | All civic product/data/runtime/support/recovery gates pass; behavioral tracking/pixels remain prohibited for MVP; separate approval is still required for public access or infrastructure change |
| Cloudinary media, presets, folders, and URLs | One shared administrative boundary; moves/deletes can break 945 active E&E assets | Media owner and founder | Export/checksum/reference map, disposable fixture, URL/rollback proof, transfer-boundary decision, explicit mutation approval |
| Provider billing, plans, RBAC, MFA, recovery, invitations, and transfers | Agent 3 proved widespread owner/recovery unknowns and several one-owner control planes | Existing Agent 7 registry lane; founder/provider owners | Registry accepted, named primary/backup owners, secure recovery design, provider-by-provider approval and witnessed change |
| Explore&Earn current design/product work | Founder checkout contains extensive uncommitted design/product changes; readiness work deliberately avoids visual churn | Founder/design owner | Separate design brief approval and isolated design branch after runtime baseline is preserved |
| Production deployments, aliases, DNS, and domains | A `READY` build is not a functional rollout or rollback | Founder/release owner | Candidate SHA, functional smoke, full rollback, DNS/mail preservation, observability, and explicit promotion window |
| Email sending, aliases, forwarding, and domain activation | Address ownership does not prove Resend capacity, mailbox delivery, reply routing, suppression handling, or tenant governance | E&E mail owner; Sweepza/LogLoads founder decisions | Venture-specific sender/account/capacity, scoped key, controlled delivery/reply proof, support ownership and recovery |
| Credential or token retirement | No current replacement has all deployment/rollback/zero-use gates | Provider-specific owner | Replacement is proven in intended lanes and rollback remains viable through the observation window |
| Branches, PRs, worktrees, and files owned by other agents | Several worktrees have unique commits, untracked work, or mode-only drift | Named agent lane on the task board | Owner handoff or merged/archived outcome; never cleanup by inference |

## Active repository locks

- PR #8 / `codex/pass5-mapbox-posthog`: Pass 5 portfolio, secret-map, and venture-map files.
- PR #9 / `codex/security-ci-readiness`: `ops/security-readiness/`, `package.json`, `pnpm-lock.yaml`.
- PR #244 / `codex/explore-and-earn-production-readiness`: E&E readiness report and the already-open Phase 2 worktree.
- `codex/rollout-readiness-docs`: Agent 2's six committed rollout documents.
- `codex/account-governance-inventory`: Agent 3's five untracked audit reports.
- `codex/provider-governance-registry`: Agent 7's six untracked registry documents.
- `codex/sweepza-independence-preflight`: Agent 8's five untracked Sweepza documents.
- `codex/portfolio-orchestrator`: Agent 5 owns only `ops/orchestration/`.

## Filesystem hazard

The Agent 2, Agent 3, and provider-governance worktrees are Windows-mounted copies of WSL worktrees. WSL reports widespread `100644 → 100755` mode changes that are not intended content. Do not bulk-stage, reset, clean, normalize, or commit those trees. Move only the named artifacts to a fresh clean branch.

## Superseded evidence lock

Do not copy or cite `PORTFOLIO_ACTIVATION_STATE.md` or `portfolio-activation-state.json` from the stale `codex/production-public-site` branch. They were deliberately excluded from merged PR #5 and contain superseded readiness claims/provider identifiers.

