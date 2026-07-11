# BidSpace infrastructure operations

This directory is the venture-specific operations pack for BidSpace. It records resource identities and operating boundaries without storing secret values.

## Evidence labels

- **Verified current** — confirmed during the 2026-07-10 provider inventory or explicitly supplied to this alignment pass.
- **Observed in repository** — present in committed code or documentation, but not proof that a live provider resource is configured.
- **Target state** — intended operating model that still needs verification or implementation.
- **Unknown / provider-owner verification required** — cannot be established safely from the repository alone.

## Identity summary

| Area | Status | Current record |
|---|---|---|
| Canonical slug | **Verified current** | `bidspace` |
| GitHub repository | **Verified current** | `AutomatedEmpires/bidspace` |
| Secrets boundary | **Verified current** | Doppler project `bidspace`; `dev` has 16 names, `stg` and `prd` contain metadata only; Sentry governance exists at provider level |
| Deployment boundary | **Verified current** | Vercel project `bidspace` connects canonical repo/main/root; PR #62 merged as `c2c15f1582c1f47bcd589b601819597dd7bea767`, green #63 produced current `main` `2fe90a3eb8cd9bffd43be1ac401d151ae4ad39e8`, accepted Preview `dpl_3vFJAPyiQqWr95woTY51mKBT1W1S` and production `dpl_GQ2yhiJjwchgt7rJDSbU8Y8JuVDp` are `READY`; no custom domain |
| Database boundary | **Verified current** | Dedicated Supabase fingerprint `…fsqslgxcv` |
| Custom domain | **Explicitly deferred** | Purchase is deferred; do not invent one |
| Product maturity | **Reviewed source / provider gaps** | Repository fixes are merged; dedicated development Clerk/Supabase/Sentry exist, while production identity, payments, and domain-dependent providers remain incomplete |

## Pack index

- [RUNBOOK.md](RUNBOOK.md) — safe operating sequence and escalation gates
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md) — environment ownership and variable-name contract
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md) — non-secret resource locators
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md) — handoff and ownership steps
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md) — blockers, stale assumptions, and unresolved risks

## Boundary rule

BidSpace may share AutomatedEmpires governance and provider accounts, but it must not reuse another venture's runtime secrets, webhooks, database, auth application, payment resource, or deployment project. Stripe Connect remains a legal/business/tax/payout gate.

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; BidSpace `README.md`, `docs/ARCHITECTURE.md`, `docs/INTEGRATIONS.md`, `docs/AUDIT.md`, `BIDSPACE_NEXT_STEPS.md`, and `.env.example` variable names only.
