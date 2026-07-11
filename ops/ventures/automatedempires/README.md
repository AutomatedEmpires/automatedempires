# AutomatedEmpires infrastructure identity

Last reviewed: 2026-07-10

This pack describes the parent portfolio site's runtime boundary. AutomatedEmpires owns portfolio policy and public venture metadata; it must not become the secret store or production runtime identity for a child venture.

## Status vocabulary

- **Verified current** — explicitly supplied or live-verified provider fact.
- **Observed in repository** — supported by code or committed documentation, but not proof of live provider state.
- **Target state** — the intended separated operating model.
- **Unknown / provider-owner verification required** — requires an authenticated provider, account owner, billing owner, or DNS owner to confirm.

## Identity snapshot

| Area | Status | Current statement | Evidence |
| --- | --- | --- | --- |
| Role | **Observed in repository** | Public Next.js studio and portfolio site; not a product application. | `AGENTS.md`, `README.md`, `lib/ventures.ts` |
| GitHub | **Observed in repository** | Canonical repository is `AutomatedEmpires/automatedempires`. | `EMPIRE_INFRA_ALIGNMENT_PLAN.md` §2 |
| Secrets inventory | **Verified current** | Doppler project `automatedempires` has `dev`/`stg`/`prd`; own Sentry DSN/org/project identifiers are installed write-only in every lane. | Pass 4 provider evidence |
| Hosting | **Verified current** | Vercel is connected to canonical repo/main/root. Current `main` is `ed91ece423583318fd7481278a7478311d867add`; clean production `dpl_5scDXWyVV2wq1ypwhcjmiBkQLpzT` is `READY`; functional rollback/custom-domain cutover remain. | Pass 4 evidence |
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
