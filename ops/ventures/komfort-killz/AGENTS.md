# Komfort Killz — Deferred Brand Placeholder Agent Contract

This scoped contract applies in addition to the AutomatedEmpires parent contract. Where rules differ, follow the more restrictive rule. Snapshot facts are dated 2026-07-12; refresh PR and rollout status before acting.

## 1. App purpose

Komfort Killz is a deferred brand placeholder only, not an application contract or authorization to build. A Canva folder or namespace is evidence only, not proof of legal ownership, a locked brand kit, approved product scope, account ownership, or build authority.

## 2. Business vision

No product or brand vision is approved yet. Before design or implementation, the founder must define venture status, legal and asset ownership, intended audience and offer, and the canonical repository. Until then, preserve evidence and avoid implying an active venture.

## 3. Current rollout status

Status: `deferred · design-needed · docs-only`.

As of 2026-07-12 there is no canonical repository, runtime, or provider map. Refresh classification, PRs, ownership, and rollout facts before acting.

## 4. Branch naming rules

- Before work, run `git status -sb` and `git branch --show-current`, then inspect open PRs and owned artifacts.
- Agent branches use `agent/<scope>-<short-description>`.
- Normal work may use `feat/`, `fix/`, `docs/`, or `chore/` followed by a short kebab-case scope.
- One agent owns one artifact and one branch at a time. Do not start from a branch containing unrelated changes or overwrite another agent's artifact.
- Use branches and PRs for all work. Never push directly to `main`, merge a PR, or delete a branch.
- Use durable issues, PRs, or repository documentation for handoff.

## 5. Required checks before PR

- Run `git diff --check`.
- Perform a parent-repository Markdown and link review.
- No app commands exist. Do not invent or claim application tests, builds, linting, or runtime validation.
- Review the diff for scope and for unsupported ownership, readiness, or brand claims.

## 6. Forbidden actions

- Do not push to `main`, merge PRs, delete branches, bypass independent review, overwrite another agent's artifact, or work from a branch with unrelated changes.
- Do not create an app, choose a runtime, activate providers, or treat the placeholder as a build specification.
- Do not create or alter logos, ads, social posts, brand kits, campaign assets, or other identity assets. Inventory may be read-only. Keep ads off.
- Do not infer legal ownership, account control, locked brand direction, product scope, or authority from Canva or other evidence.
- Do not expose secrets, private customer or user data, cookies, tokens, sensitive provider IDs, or recovery material.

## 7. Provider no-touch zones

Provider no-touch means no dashboard, CLI, or API writes. Do not deploy, promote, link, change environment variables, domains, or DNS; change Doppler secrets; run Supabase live migrations or SQL or alter auth/storage; change Clerk; create Stripe charges, products, prices, webhooks, refunds, or payouts; use Resend or send email; or change telemetry, media, advertising, or design providers. Read-only provider inspection requires explicit scope.

## 8. Data, money, email, and auth guardrails

- Do not collect, migrate, import, or publish customer, audience, or user data.
- Keep payments, ads, purchases, subscriptions, refunds, and payouts off.
- Keep email capture, domains, campaigns, and email sends off.
- Keep authentication and account provisioning off.
- Never commit, log, paste, or expose secrets, private user or customer data, cookies, tokens, sensitive provider IDs, or recovery material.

## 9. Design notes

Do not create or alter logos, ads, social posts, brand kits, or other assets. Any existing Canva folder, namespace, or brand material may be inventoried read-only only and must be described as unverified evidence. Do not resolve brand-kit discrepancies by choosing a direction. Keep ads off.

## 10. Current known PRs and blockers

Snapshot date: 2026-07-12. There is no canonical repository or app PR. Blockers are founder classification, the brand-kit discrepancy, undefined audience and offer scope, legal and asset ownership, canonical repository selection, and provider ownership. Refresh facts before acting.

## 11. Output format for future agents

Every PR or handoff must report:

- Branch name and HEAD commit.
- Files changed and exact scope.
- Exact checks run and their results, including checks not run and why.
- Provider, advertising, design-platform, or other live-system actions; normally state `none` explicitly.
- Risks and blockers.
- PR URL.
- For any approved future UI work, screenshots and accessibility notes.
