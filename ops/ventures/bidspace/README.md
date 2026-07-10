# BidSpace infrastructure operations

This directory is the venture-specific operations pack for BidSpace. It records resource identities and operating boundaries without storing secret values.

## Evidence labels

- **Verified current** — confirmed during the 2026-07-10 provider inventory or explicitly supplied to this alignment pass.
- **Observed in repository** — present in committed code or documentation, but not proof that a live provider resource is configured.
- **Target state** — intended operating model that still needs verification or implementation.
- **Unknown / founder verification required** — cannot be established safely from the repository.

## Identity summary

| Area | Status | Current record |
|---|---|---|
| Canonical slug | **Verified current** | `bidspace` |
| GitHub repository | **Verified current** | `AutomatedEmpires/bidspace` |
| Secrets boundary | **Verified current** | Doppler project `bidspace`; `dev` has 16 names, `stg` and `prd` contain metadata only |
| Deployment boundary | **Verified current** | Vercel project `bidspace` connects the canonical repo, `main`, root `apps/web`, Next.js/Node 24; no deployment/domain |
| Database boundary | **Verified current** | Supabase project ref `hnjjcgxflxlfsqslgxcv` |
| Custom domain | **Unknown / founder verification required** | No candidate production domain was discovered; do not invent one |
| Product maturity | **Observed in repository** | Early Next.js/pnpm monorepo; a dedicated development Clerk instance and Supabase project exist, but production routes/providers are not ready |

## Pack index

- [RUNBOOK.md](RUNBOOK.md) — safe operating sequence and escalation gates
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md) — environment ownership and variable-name contract
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md) — non-secret resource locators
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md) — handoff and ownership steps
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md) — blockers, stale assumptions, and unresolved risks

## Boundary rule

BidSpace may share AutomatedEmpires governance and provider accounts, but it must not reuse another venture's runtime secrets, webhooks, database, auth application, payment resource, or deployment project. Stripe Connect is a money-moving founder gate.

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; BidSpace `README.md`, `docs/ARCHITECTURE.md`, `docs/INTEGRATIONS.md`, `docs/AUDIT.md`, `BIDSPACE_NEXT_STEPS.md`, and `.env.example` variable names only.
