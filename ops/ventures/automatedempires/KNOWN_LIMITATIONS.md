# AutomatedEmpires known limitations

Last reviewed: 2026-07-10

| Limitation | Status | Operational consequence | Required next action |
| --- | --- | --- | --- |
| PR #5 merged as `bb9a063e0cf4c08175cd698dbc6611abbbbca802`; current `main` is `664cda67bc7bc91e4f1577d76bbe7758290f3a2d` and clean production `dpl_4b8tDpSmz71WTGmrgRigPb7k5bT9` is `READY`, but functional rollback/DNS smoke remains. | **Source/main provenance fixed / production-risk gate** | Functional rollback proof still precedes DNS. | Verify provider-host behavior and rollback, then plan domain cutover. |
| Doppler `dev`, `stg`, and `prd` contain only the parent Sentry identity beyond metadata. | **Verified current** | Other runtime configuration is intentionally absent; Vercel Sentry sync/event is unproven. | Install Sentry through authorized Vercel write access and add other values only for real consumers. |
| `automatedempires.com` authenticated GoDaddy control/full zone are verified and it serves Website Builder; multiple SPF records may conflict. | **Registrar completed / production-risk gate** | Careless SPF or web changes could disrupt mail/site. | Export the zone, repair SPF only after mail review, and cut over only after functional Vercel rollback smoke. |
| Strict real `verify` and `design` checks are required on current `main`; the earlier inspected checkout lacked the referenced workflow directory. | **Historical checkout gap / current protection fixed** | The historical local absence is not current branch authority. | Preserve the required checks and verify them on each release PR. |
| The first Vercel preview exposed blocked Next.js 15.1.6 and a missing lockfile. | **Corrected, reviewed, and merged**; the later public-site rebuild now owns the runtime graph | Downgrading or dropping the lockfile could reintroduce the blocked baseline. | Preserve current `main` pins (Next.js 15.5.19, React 19.2.4, PostCSS 8.5.10), the synchronized pnpm lockfile, and required checks; remediate the separately recorded open dependency alert through a fresh checked PR. |
| Separate Sentry and PostHog project/environment bindings exist, but fresh deployment/runtime events are unproven; Resend remains absent and Cloudinary is namespace-only. | **Provider/config fixed; runtime gate** | Monitoring/analytics cannot be called post-write ingesting yet. | Fresh-deploy and verify controlled Sentry/PostHog events; create other resources only for real consumers. |
| The current code has no application-level environment-variable reads. | **Observed in repository** | Adding configuration without a consuming feature would create unused operational surface. | Introduce variables only with the feature, owner, environment map, and removal plan. |
| The parent site has no Supabase requirement. | **Verified current** | A database would add unnecessary cost and access surface. | Preserve the no-database design unless a dated product decision requires one. |

## Evidence notes

- Repository scan: `README.md`, `AGENTS.md`, `package.json`, `app/layout.tsx`, `app/`, `components/`, `lib/`, and `next.config.mjs`.
- Portfolio context: `EMPIRE_INFRA_ALIGNMENT_PLAN.md`.
- Provider facts labeled **Verified current** were supplied for this alignment pass; no secret-bearing provider pages were copied into this repository.
