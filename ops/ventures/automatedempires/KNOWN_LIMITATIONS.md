# AutomatedEmpires known limitations

Last reviewed: 2026-07-10

| Limitation | Status | Operational consequence | Required next action |
| --- | --- | --- | --- |
| PR #5 merged as `bb9a063e0cf4c08175cd698dbc6611abbbbca802`; current `main` is `ed91ece423583318fd7481278a7478311d867add` and clean production `dpl_5scDXWyVV2wq1ypwhcjmiBkQLpzT` is `READY`, but functional rollback/DNS smoke remains. | **Source/main provenance fixed / production-risk gate** | Functional rollback proof still precedes DNS. | Verify provider-host behavior and rollback, then plan domain cutover. |
| Doppler `dev`, `stg`, and `prd` contain only the parent Sentry identity beyond metadata. | **Verified current** | Other runtime configuration is intentionally absent; Vercel Sentry sync/event is unproven. | Install Sentry through authorized Vercel write access and add other values only for real consumers. |
| `automatedempires.com` authenticated GoDaddy control/full zone are verified and it serves Website Builder; multiple SPF records may conflict. | **Registrar completed / production-risk gate** | Careless SPF or web changes could disrupt mail/site. | Export the zone, repair SPF only after mail review, and cut over only after functional Vercel rollback smoke. |
| Strict real `verify` and `design` checks are required on current `main`; the earlier inspected checkout lacked the referenced workflow directory. | **Historical checkout gap / current protection fixed** | The historical local absence is not current branch authority. | Preserve the required checks and verify them on each release PR. |
| The first Vercel preview exposed blocked Next.js 15.1.6 and a missing lockfile. | **Corrected, reviewed, and merged** | Downgrading or dropping the lockfile could reintroduce the blocked baseline. | Preserve the dated decision, Next.js 15.5.20 / React 19.0.4 pins, synchronized pnpm lockfile, and required checks. |
| Separate Sentry project/governance/Doppler bindings exist, but Vercel runtime event is unproven; Resend/PostHog/Cloudinary remain no-resource/namespace-only decisions. | **Mixed fixed/no-resource/runtime gate** | Monitoring cannot be called ingesting yet; other optional providers remain intentionally absent. | Install Sentry through authorized Vercel write surface and verify a controlled event; create other resources only for real consumers. |
| The current code has no application-level environment-variable reads. | **Observed in repository** | Adding configuration without a consuming feature would create unused operational surface. | Introduce variables only with the feature, owner, environment map, and removal plan. |
| The parent site has no Supabase requirement. | **Verified current** | A database would add unnecessary cost and access surface. | Preserve the no-database design unless a dated product decision requires one. |

## Evidence notes

- Repository scan: `README.md`, `AGENTS.md`, `package.json`, `app/layout.tsx`, `app/`, `components/`, `lib/`, and `next.config.mjs`.
- Portfolio context: `EMPIRE_INFRA_ALIGNMENT_PLAN.md`.
- Provider facts labeled **Verified current** were supplied for this alignment pass; no secret-bearing provider pages were copied into this repository.
