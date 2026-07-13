# AutomatedEmpires — Studio Site Agent Contract

This contract is binding for every contributor and agent working in this repository. Snapshot facts are dated 2026-07-12; refresh PR and rollout status before acting.

## 1. App purpose

AutomatedEmpires is the public venture-studio and portfolio site, not one of the portfolio's product applications. It is a Next.js App Router marketing surface, and `lib/ventures.ts` is the source of truth for the venture list rendered by the site. Preserve the source-of-truth doctrine: product and vision decisions belong in the durable product canon, while this repository is implementation truth for this site.

The pinned baseline is Node `24.16.0`, pnpm `10.12.4`, Next.js App Router, and TypeScript. Routes live in `app/`, shared visual building blocks in `components/`, and rendered venture data in `lib/ventures.ts`. A toolchain, framework, or ownership-boundary change requires a dated approved decision.

## 2. Business vision

Provide a credible public front door for an independent venture portfolio. Copy and UI must describe the portfolio honestly without overstating rollout, partnerships, customers, legal status, ownership, traction, or production readiness.

## 3. Current rollout status

Status: `active · docs-only · security-risk`.

This is a 2026-07-12 snapshot. No venture in the portfolio is money-ready or transfer-ready. Refresh current PRs, blockers, ownership, and rollout facts before beginning work or making public claims.

## 4. Branch naming rules

- Before work, run `git status -sb` and `git branch --show-current`, then inspect open PRs and owned artifacts.
- Agent branches use `agent/<scope>-<short-description>`.
- Normal work may use `feat/`, `fix/`, `docs/`, or `chore/` followed by a short kebab-case scope.
- One agent owns one artifact and one branch at a time. Do not start from a branch containing unrelated changes or overwrite another agent's artifact.
- Use branches and PRs for all work. Implementing agents/builders never push directly to `main`, merge their own PRs, or delete unmerged branches. A designated maintainer or approved automation may merge after independent review and green required checks, then delete the merged branch.
- Use durable issues, PRs, or repository documentation for handoff.

## 5. Required checks before PR

- When dependencies are needed, run `pnpm install --frozen-lockfile`.
- Run `pnpm typecheck`.
- Run `pnpm lint`.
- Run `pnpm build`.
- Run `git diff --check`.
- This repository currently has no test script; do not claim that tests ran.
- Review the resulting diff for scope, public-claim accuracy, and unintended changes to `lib/ventures.ts`.

## 6. Forbidden actions

- Do not push to `main`, self-merge or bypass independent review, delete unmerged branches, overwrite another agent's artifact, or work from a branch with unrelated changes.
- Do not deploy, promote, link projects, change environments, domains, or DNS, or perform destructive operations.
- Do not invent venture, customer, partnership, legal, security, revenue, or readiness claims.
- Do not introduce a replacement runtime, framework, provider, or source of truth without a dated approved decision.
- Do not expose secrets, private customer or user data, cookies, tokens, sensitive provider IDs, or recovery material.

## 7. Provider no-touch zones

Provider no-touch means no dashboard, CLI, or API writes. Do not deploy, promote, link, or change environment variables, domains, or DNS; change Doppler secrets; run Supabase live migrations or SQL or alter auth/storage; change Clerk; create Stripe charges, products, prices, webhooks, refunds, or payouts; use Resend or send email; or change telemetry or media providers. This includes Vercel, Doppler, Supabase, Clerk, Stripe, Resend/DNS, PostHog, Sentry, and Cloudinary. Read-only provider inspection requires explicit scope.

## 8. Data, money, email, and auth guardrails

- Treat venture metadata and public copy as governed content. Keep `lib/ventures.ts` authoritative for the rendered venture list and avoid parallel sources.
- No venture is approved for money movement. Do not activate billing, charges, refunds, payouts, purchases, subscriptions, or financial claims.
- Do not send production email, activate domains, import recipients, or change templates or deliverability settings.
- Do not activate or alter live authentication, authorization, user records, sessions, or recovery flows.
- Never commit, log, paste, or expose secrets, private user or customer data, cookies, tokens, sensitive provider IDs, or recovery material.

## 9. Design notes

Preserve the existing public marketing and portfolio information architecture, established design tokens, and shared components. Make scoped changes rather than redesigning the site. Do not visually or verbally inflate any venture's status, maturity, availability, or endorsement.

## 10. Current known PRs and blockers

Snapshot date: 2026-07-12. Open draft PRs are #13, `docs: record portfolio execution commander pass`, and #14, `docs: add canonical operations documentation index`.

Known blockers are concentrated provider and governance control, incomplete rollback and DNS smoke validation, the absence of an app test suite, and other documentation work in flight. Refresh these facts and check artifact ownership before acting.

## 11. Output format for future agents

Every PR or handoff must report:

- Branch name and HEAD commit.
- Files changed and exact scope.
- Exact checks run and their results, including checks not run and why.
- Provider or live-system actions; normally state `none` explicitly.
- Risks and blockers.
- PR URL.
- For UI work, screenshots and accessibility notes.
