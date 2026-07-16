# AutomatedEmpires environment map

Last reviewed: 2026-07-12

This file maps environment ownership without recording values.

## Environment mapping

| Environment | Secrets/config | Deployment | Domain | Status |
| --- | --- | --- | --- | --- |
| Development | Doppler `automatedempires` / `dev` has metadata plus own Sentry identity. | Local Next.js development is documented. | Localhost only. | **Monitoring boundary verified**; broader dev contract absent |
| Staging | Doppler `automatedempires` / `stg` has metadata plus own Sentry identity. | PR #5 exact-source Preview `dpl_BLh…Xvjyf` was `READY`; PR merged as `bb9a063e0cf4c08175cd698dbc6611abbbbca802`. | Provider preview hostname. | **Source review/merge and Preview verified; Vercel Sentry event open** |
| Production | Doppler `automatedempires` / `prd` includes metadata plus own Sentry DSN/org/project identifiers. | Clean production `dpl_4b8tDpSmz71WTGmrgRigPb7k5bT9` from last deployed source `664cda67bc7bc91e4f1577d76bbe7758290f3a2d` is `READY`/rollback candidate; current source includes #12 at `408fca3` without a recorded later production deployment. | `automatedempires.com` remains Website Builder. | **Current source and deployed-source boundary recorded**; functional smoke/DNS cutover pending |

## Runtime configuration surface

| Area | Status | Map |
| --- | --- | --- |
| Application variables | **Observed in repository** | No application-level `process.env` or `NEXT_PUBLIC_` reads were found in `app/`, `components/`, `lib/`, or `next.config.mjs` during this pass. |
| Database | **Verified current** | No Supabase project or database runtime is needed for the current site. |
| Sentry | **Provider/governance fixed** | Separate project; own identifiers in Doppler all lanes; ownership, one alert, scrubbers, and IP scrubbing configured. Vercel install/runtime event open. |
| PostHog | **Provider/environment boundary fixed; runtime pending controlled event proof** | Project `509081`; privacy defaults off. Doppler `dev` pair is restricted/browser write-confirmed and CLI-null by design; `stg`/`prd` presence verified. Vercel Development directly repaired/exact-match verified; combined Preview/Production present. Ops PR #8 auto-triggered a Preview, but no controlled event/ingestion smoke or production deployment occurred. |
| Mapbox | **Completed no-resource decision** | No source consumer and no token required. Do not copy another venture's token. |
| Vercel environment bindings | **Verified current** | Canonical repo, root `.`, branch `main`, Next.js, and Node 24 are configured; no application environment is needed and the PR preview is `READY`. |
| Doppler-to-Vercel flow | **Target state** | Each config maps only to its same-purpose environment; do not reuse another venture's service token or runtime identity. |
| Domain and DNS | **Authenticated control / full zone verified** | GoDaddy ownership/privacy/renewal and 23-record zone verified; Website Builder remains public. Review mail/SPF deliberately before Vercel attachment. |

## Promotion contract

- **Target state** — `dev` changes are validated locally.
- **Target state** — `stg` changes are validated in an isolated Vercel Preview deployment.
- **Target state** — `prd` receives only the reviewed commit and production-specific configuration.
- **Target state** — If a new integration is added, document its resource name, owner, and per-environment mapping before deployment.

## Evidence notes

- `package.json` and `README.md` describe the local and production build.
- `app/layout.tsx` supplies the repository-observed canonical domain.
- `AGENTS.md` supplies the intended provider family.
- Provider existence statements come from the supplied 2026-07-10 inventory, not from values in this repository.
- Pass 5 provider state comes from authenticated 2026-07-12 metadata inspection; no credential value or fingerprint is recorded.
