# AutomatedEmpires infrastructure identity

Last reviewed: 2026-07-10

This pack describes the parent runtime boundary. AutomatedEmpires is the portfolio operator and command layer; the checked-in site is its current public surface. It owns portfolio policy and non-secret operating metadata, but it must not become the secret store or production runtime identity for a child venture.

## Canonical product direction

AutomatedEmpires should become the evidence-backed portfolio status dashboard, provider map, rollout board, governance registry, cost/risk view, task-orchestration layer, and venture transfer-readiness tracker. It is not a generic AI agency site. The command layer may identify child resources and evidence, but it must not expose child secrets or customer data.

## Status vocabulary

- **Verified current** — explicitly supplied or live-verified provider fact.
- **Observed in repository** — supported by code or committed documentation, but not proof of live provider state.
- **Target state** — the intended separated operating model.
- **Unknown / provider-owner verification required** — requires an authenticated provider, account owner, billing owner, or DNS owner to confirm.

## Identity snapshot

| Area | Status | Current statement | Evidence |
| --- | --- | --- | --- |
| Role | **Founder direction / observed current surface** | Parent operator and command layer; current runtime is a public Next.js portfolio surface, not a child product application. | `docs/VENTURE_OPERATING_DEFINITIONS.md`, `AGENTS.md`, current application |
| GitHub | **Observed in repository** | Canonical repository is `AutomatedEmpires/automatedempires`. | `EMPIRE_INFRA_ALIGNMENT_PLAN.md` §2 |
| Secrets inventory | **Verified current** | Doppler project `automatedempires` has `dev`/`stg`/`prd`; own Sentry DSN/org/project identifiers are installed write-only in every lane. | Pass 4 provider evidence |
| Hosting | **Current source / prior deployed evidence verified** | Vercel is connected to canonical repo/main/root. Current `main` includes merged #12 at `408fca3`; clean production `dpl_4b8tDpSmz71WTGmrgRigPb7k5bT9` remains last-deployed evidence from `664cda67bc7bc91e4f1577d76bbe7758290f3a2d`; functional rollback/custom-domain cutover remain. | Pass 5 plus execution-log reconciliation |
| Database | **Verified current** | No Supabase project is required for the current portfolio site. | Provider fact supplied for this alignment pass |
| Domain | **Verified current** | `automatedempires.com` is registered at GoDaddy and currently serves GoDaddy Website Builder; Outlook MX and a possible duplicate-SPF condition are present. | Public RDAP/DNS and HTTP snapshot |
| Optional integrations | **Observed in repository** | The repo contract names Resend, PostHog, Cloudinary, and Sentry as the provider family to use if features require them. | `AGENTS.md` §4 |

## Separation rules

- **Target state** — AutomatedEmpires has its own GitHub, Doppler, Vercel, DNS, and any feature-specific provider resources.
- **Target state** — Child-venture credentials, webhook signing material, customer data, and billing configuration never transit through this site's runtime.
- **Target state** — Portfolio records may identify a child venture's resource by non-secret name, owner, and environment, but must not duplicate values.
- **Verified current / production-risk gate** — Authenticated registrar control and clean Vercel production are proven. Complete functional rollback/DNS smoke before any web-record cutover; optional providers remain unnecessary unless a feature uses them.

## Evidence hierarchy

1. Provider verification supplied during the 2026-07-10 alignment pass.
2. `EMPIRE_INFRA_ALIGNMENT_PLAN.md` for portfolio scope and separation policy.
3. `AGENTS.md` for the site's engineering and provider contract.
4. Current code, especially `app/layout.tsx` and `lib/ventures.ts`.

No secret values, provider tokens, connection strings, or key material belong in this pack.
