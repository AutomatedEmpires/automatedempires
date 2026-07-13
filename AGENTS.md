# AutomatedEmpires — Parent Operator Agent Contract

This contract governs work in this repository. Snapshot facts are dated 2026-07-12; refresh repository, pull-request, provider, and rollout facts before relying on them.

## 1. Venture thesis

AutomatedEmpires is the parent operating layer for a portfolio of early ventures. Its job is to turn scattered repository and provider evidence into a trustworthy operating picture, clear priorities, and well-sequenced execution. It is not a generic AI agency, a collection of inflated launch claims, or an excuse to build an ornamental dashboard.

## 2. Primary user and buyer

The primary user and decision-maker is the founder/operator managing the portfolio. A small internal operating team is the next user. There is no validated external buyer for this product today; do not invent enterprise personas, customer demand, or a SaaS sales motion.

## 3. Product destination

The destination is a private operator command layer for portfolio governance, venture status, deployment awareness, provider and ownership maps, cost visibility, risk tracking, and task orchestration. Canonical operations documents are the current control plane. A private operator dashboard may progressively replace manual views only after its source data, freshness, ownership, and error states are trustworthy.

The existing Next.js site remains an honest public portfolio front door. `lib/ventures.ts` is its rendered venture-list source of truth. Public-site work should clarify real portfolio activity, not turn AutomatedEmpires into a vague corporate site.

## 4. Current stage and zero-user posture

Status: `active · pre-customer · docs-led · security-risk`.

The portfolio currently has zero real users and zero real customers. There are no production customer accounts, purchases, support obligations, or customer datasets to preserve. This means agents should use synthetic fixtures, disposable test accounts, protected previews, and reversible migrations freely instead of designing elaborate compatibility or migration programs for users who do not exist. Do preserve repository history, provider ownership, public brand identities, and any real operational evidence.

The current implementation is a Next.js App Router site using React and TypeScript. Node `24.16.0` and pnpm `10.12.4` are pinned. Routes live in `app/`, shared UI in `components/`, and portfolio display data in `lib/ventures.ts`. Operations truth lives under `ops/`; do not silently fork it into an ungoverned dashboard dataset.

## 5. Operating doctrine

Agents are expected to ship meaningful, tested improvements, not produce endless audits that restate known uncertainty. Each work cycle should close a decision, remove a blocker, improve a canonical source, or deliver a usable product slice. Use reversible branches, protected previews, test data, sandbox payments, internal-only email tests, and reversible dev/preview migrations aggressively when they shorten the path to evidence.

An audit is useful only when it changes priority, names an owner, defines a safe next action, or supplies evidence needed to execute. When evidence is good enough, implement the next reversible step and record the result.

## 6. Execution authority

Agents may independently perform reversible, non-destructive work within their assigned repository and provider lane, including:

- product code, tests, UI, accessibility, documentation, refactors, bug fixes, and small feature slices;
- canonical operations documents, venture-status rollups, provider maps, reusable templates, orchestration tools, and dashboard data foundations;
- local development, protected preview deployments, preview configuration, and smoke testing;
- additive or reversible dev/preview migrations, synthetic test data, disposable accounts, and rollback rehearsals;
- Stripe or other payment-provider sandbox work with test instruments only, with no live-mode objects or real charges;
- internal email tests sent only to controlled team addresses, with no imported audience or public campaign;
- dependency updates, vulnerability remediation, security hardening, CI workflows, observability tests, and failure-injection exercises;
- read-only provider inspection and scoped, reversible writes to isolated development, preview, or sandbox resources;
- committing and pushing an owned branch, opening or updating its draft PR, and responding to review feedback.

Default provider work to dev, preview, test, or sandbox lanes. A production mutation must be part of an explicitly assigned production lane with a reviewed runbook, owner, rollback, and verification; do not infer production scope from a code task. That is a scope boundary, not a generic founder-approval gate.

## 7. True hard stops

Stop and obtain explicit founder approval before any of the following:

- upgrading to a paid plan or accepting a new recurring paid commitment;
- purchasing a domain;
- cutting DNS over to a new service or changing records as part of a live cutover;
- moving live money, using a real payment instrument, or creating a real charge, refund, payout, or transfer;
- destructively deleting a provider project, account, environment, dataset, domain, or other provider resource;
- running a destructive production database migration or irreversible production-data mutation;
- rotating or revoking a credential, token, signing secret, recovery method, or service key;
- transferring account, repository, domain, billing, or provider ownership;
- publishing a public launch announcement;
- launching ads, boosted posts, or external campaigns;
- making a legal filing or submitting a legally binding registration; or
- proceeding when required MFA is unavailable. Pause for the account owner instead of weakening or bypassing MFA.

These are the hard stops. Do not turn ordinary reversible engineering, design, documentation, preview, security, or test work into a founder queue.

## 8. Priorities

Work in roughly this order unless an assigned incident or dependency changes it:

1. Keep canonical operations documentation navigable, current, and explicit about evidence quality.
2. Improve orchestration, portfolio status clarity, ownership, and clean PR sequencing.
3. Make provider governance, environment separation, cost, risk, and recovery posture trustworthy.
4. Build reusable venture templates and automation that reduce repeated setup and reporting work.
5. Establish typed, freshness-aware dashboard data foundations; build operator UI only from reliable sources.
6. Close security, dependency, CI, preview, rollback, and deployment-awareness gaps.
7. Improve the public portfolio site when doing so communicates verified reality more clearly.

## 9. Low-value work and anti-patterns

Avoid:

- repeated inventories or readiness reports that add no evidence, owner, decision, or executable next step;
- dashboards built on stale documents, duplicated provider data, or ambiguous ownership;
- vague corporate-site copy, empire imagery, generic AI-agency positioning, vanity metrics, and speculative scale claims;
- premature auth, databases, billing, CRM, or provider resources without a real consuming workflow;
- broad redesigns when a focused information or usability change closes the actual gap;
- duplicate canons, copied child-venture configuration, and documents that hide uncertainty behind polished status language;
- protecting hypothetical users with complex migrations, feature flags, or compatibility layers when clean replacement is safer.

## 10. Provider, data, money, email, auth, and legal boundaries

- Keep each venture's credentials, customer data, billing configuration, webhooks, and runtime identity inside that venture's boundary. The parent may record non-secret resource names, owners, environments, costs, and evidence status; it is not a cross-venture secret store.
- Never commit, log, paste, or expose secrets, tokens, cookies, private provider URLs, recovery material, or private user/customer data. Redact sensitive identifiers from screenshots and handoffs.
- Treat `ops/` provider facts as dated evidence, not eternal truth. Preserve labels such as verified, observed, target, and unknown. Refresh before making a consequential decision.
- Prefer synthetic data. Do not copy production data into development or previews. If real user data appears in the future, minimize access, document purpose and retention, and follow applicable privacy requirements.
- Test-mode payment work is allowed; live-money actions are a hard stop. Internal delivery tests are allowed only to controlled addresses; audience imports and public campaigns are not.
- Draft legal, policy, and compliance analysis may support a decision, but agents must not claim legal approval, invent registrations or ownership, make filings, or present unreviewed text as settled legal advice.
- Do not add Supabase, auth, email, analytics, media, or another provider to the parent simply for architectural symmetry. Add it when a real feature consumes it and document its owner, environment map, cost, removal path, and data boundary.

## 11. Branch and collaboration rules

- Before work, run `git status -sb`, confirm the current branch, inspect recent history and open PRs, and identify overlapping artifacts.
- Agent branches use `agent/<scope>-<short-description>`; normal work may use `feat/`, `fix/`, `docs/`, or `chore/` plus a short kebab-case scope.
- One writer owns an artifact and branch at a time. Preserve user changes, do not repurpose another agent's branch, and coordinate overlapping work before editing.
- Use branches and PRs. Do not push directly to `main`, self-merge, bypass independent review, delete an unmerged branch, or overwrite another writer's artifact.
- Keep PRs narrowly scoped and sequence documentation, dependency, schema, and UI changes so reviewers can reason about each one. Record durable handoffs in the PR, issue, or canonical operations docs.

## 12. Repository checks and PR requirements

Use the repository scripts exactly as defined in `package.json`:

```text
pnpm lint
pnpm typecheck
pnpm build
```

When dependencies are needed, run `pnpm install --frozen-lockfile`. There is currently no `pnpm test` script; do not claim application tests ran. Add focused tests when introducing testable behavior, and add a real test script deliberately rather than inventing a command in a handoff.

For code or dependency changes, run lint, typecheck, build, relevant focused checks, and `git diff --check`. For documentation-only changes, run `git diff --check`, validate affected Markdown links or structured content, verify public/provider claims, and confirm exact file scope; application build commands are optional unless the documentation changes a generated or runtime-consumed artifact. For UI work, include screenshots at relevant widths and accessibility notes. For migrations or provider work, record the environment, fixtures, smoke result, and rollback evidence without recording secret values.

Every PR must explain the user/operator outcome, files and scope, validation, provider or live-system impact, risks, rollback, and any intentionally deferred work.

## 13. Definition of done

Work is done when:

- it delivers a usable operator or portfolio outcome, not just activity;
- acceptance criteria and repository-native checks pass with fresh evidence;
- UI and workflows handle empty, loading, error, and narrow-screen states where relevant;
- data sources, owners, freshness, environment, and evidence status are explicit;
- preview, migration, provider, payment, or email work has a bounded test and rollback record;
- security, privacy, cost, accessibility, and legal-claim risks are addressed in proportion to the change;
- the diff is focused, contains no secrets or unsupported public claims, and has independent review through a PR; and
- canonical docs and the future-agent handoff describe what changed, what remains, and the next executable step.

## 14. Current PRs and blockers

Snapshot date: 2026-07-12.

- Draft PR #14, `docs: add canonical operations documentation index`, adds the navigation layer for operations truth. It is currently behind `main` and should be sequenced deliberately before building new canonical paths.
- Draft PR #15, `docs: add Meta and social setup system`, records social identities, asset-group evidence, and unpublished content drafts. It is behind `main`; preserve its asset ownership and do not duplicate or publish its drafts.
- Draft PR #16, `docs: add agent operating standards`, is this branch's docs-only contract PR. The local branch was synchronized with `main` during this standards pass; keep its diff limited to the three intended `AGENTS.md` files and refresh remote checks after every push.

Current blockers include fragmented-but-improving operations navigation, concentrated provider ownership and recovery, incomplete functional rollback and DNS smoke evidence, no application test suite, provider facts that must remain fresh, and zero validated users or customers. These blockers justify reliable sources and small execution loops; they do not justify a decorative dashboard or generic founder gating.

## 15. Future-agent output format

Every PR or handoff must report:

- `Status:` `DONE`, `DONE_WITH_CONCERNS`, or `BLOCKED`;
- branch name, HEAD commit, and PR URL;
- operator/user outcome and acceptance criteria closed;
- files changed and exact scope;
- exact commands and checks run, with results and anything not run plus why;
- preview, migration, provider, data, payment, email, auth, DNS, or other live-system actions; state `none` explicitly when none occurred;
- screenshots and accessibility notes for UI work;
- risks, blockers, rollback, evidence freshness, and any hard stop encountered; and
- the next highest-value executable step.
