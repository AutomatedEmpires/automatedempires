# Just Jesus Bro — Deferred Brand Placeholder Agent Contract

This scoped contract applies in addition to the AutomatedEmpires parent contract. Where rules differ, follow the more restrictive rule. Snapshot facts are dated 2026-07-12; refresh PR and rollout status before acting.

## 1. App purpose

Just Jesus Bro is a deferred brand placeholder only, not an application contract or authorization to build. Brand or domain evidence does not prove an active venture, legal ownership, product scope, audience, content doctrine, ministry or charity status, or provider authority.

## 2. Business vision

No product, ministry, charity, editorial, or brand vision is approved yet. Founder, legal, and editorial direction is required before design, implementation, provider activation, or public content. Evidence must be preserved without turning it into religious, organizational, or commercial claims.

## 3. Current rollout status

Status: `deferred · design-needed · docs-only`.

As of 2026-07-12 there is no canonical repository, runtime, provider map, governance record, or transfer record. Refresh classification, PRs, ownership, and rollout facts before acting.

## 4. Branch naming rules

- Before work, run `git status -sb` and `git branch --show-current`, then inspect open PRs and owned artifacts.
- Agent branches use `agent/<scope>-<short-description>`.
- Normal work may use `feat/`, `fix/`, `docs/`, or `chore/` followed by a short kebab-case scope.
- One agent owns one artifact and one branch at a time. Do not start from a branch containing unrelated changes or overwrite another agent's artifact.
- Use branches and PRs for all work. Implementing agents/builders never push directly to `main`, merge their own PRs, or delete unmerged branches. A designated maintainer or approved automation may merge after independent review and green required checks, then delete the merged branch.
- Use durable issues, PRs, or repository documentation for handoff.

## 5. Required checks before PR

- Run `git diff --check`.
- Perform a parent-repository Markdown and link review.
- No app commands exist. Do not invent or claim application tests, builds, linting, or runtime validation.
- Review the diff for scope and unsupported religious, legal, ownership, readiness, or affiliation claims.

## 6. Forbidden actions

- Do not push to `main`, self-merge or bypass independent review, delete unmerged branches, overwrite another agent's artifact, or work from a branch with unrelated changes.
- Do not create an app, choose a runtime, activate providers, or treat the placeholder as a build specification.
- Do not invent doctrine, religious claims, affiliations, endorsements, donation flows, imagery, identity assets, ministry status, or charity status.
- Keep advertising, donations, and email off.
- Do not expose secrets, private customer or user data, cookies, tokens, sensitive provider IDs, or recovery material.

## 7. Provider no-touch zones

Provider no-touch means no dashboard, CLI, or API writes. Do not deploy, promote, link, change environment variables, domains, or DNS; change Doppler secrets; run Supabase live migrations or SQL or alter auth/storage; change Clerk; create Stripe charges, products, prices, webhooks, refunds, payouts, or donation flows; use Resend or send email; or change telemetry, media, advertising, or design providers. Read-only provider inspection requires explicit scope.

## 8. Data, money, email, and auth guardrails

- Do not collect, migrate, import, or publish congregant, donor, supporter, customer, audience, or user data.
- Keep payments, donations, ads, purchases, subscriptions, refunds, and payouts off.
- Keep email capture, domains, campaigns, and email sends off.
- Keep authentication and account provisioning off.
- Never commit, log, paste, or expose secrets, private user or customer data, cookies, tokens, sensitive provider IDs, or recovery material.

## 9. Design notes

Do not invent or create doctrine, religious claims, affiliations, endorsements, donation flows, imagery, logos, identity systems, or other brand assets. Brand and domain evidence may be inventoried read-only and must remain explicitly unverified. Keep ads, donations, and email off.

## 10. Current known PRs and blockers

Snapshot date: 2026-07-12. There is no canonical repository or app PR. Blockers are founder classification, legal and editorial ownership, approved scope and audience, content doctrine, canonical repository selection, and a provider and governance map. Refresh facts before acting.

## 11. Output format for future agents

Every PR or handoff must report:

- Branch name and HEAD commit.
- Files changed and exact scope.
- Exact checks run and their results, including checks not run and why.
- Provider, donation, advertising, email, or other live-system actions; normally state `none` explicitly.
- Risks and blockers.
- PR URL.
- For any approved future UI work, screenshots and accessibility notes.
