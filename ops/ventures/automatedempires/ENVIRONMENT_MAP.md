# AutomatedEmpires environment map

Last reviewed: 2026-07-10

This file maps environment ownership without recording values.

## Environment mapping

| Environment | Secrets/config | Deployment | Domain | Status |
| --- | --- | --- | --- | --- |
| Development | Doppler `automatedempires` / `dev` exists; supplied inventory found metadata only. | Local Next.js development is documented. | Localhost only. | **Verified current** for Doppler; **Observed in repository** for local development |
| Staging | Doppler `automatedempires` / `stg` exists; metadata only. | Protected Vercel PR preview is `READY`. | Provider preview hostname, protected by Vercel authentication. | **Verified current** |
| Production | Doppler `automatedempires` / `prd` exists; metadata only. | Vercel project is connected to main at root `.`; production-target artifact `dpl_3FCYsGgYNJEnJJEMhmQjksbjL7zm` is `ERROR`, so no functional production deployment exists. | `automatedempires.com` remains on GoDaddy Website Builder. | **Verified current**; clean main production and cutover pending |

## Runtime configuration surface

| Area | Status | Map |
| --- | --- | --- |
| Application variables | **Observed in repository** | No application-level `process.env` or `NEXT_PUBLIC_` reads were found in `app/`, `components/`, `lib/`, or `next.config.mjs` during this pass. |
| Database | **Verified current** | No Supabase project or database runtime is needed for the current site. |
| Vercel environment bindings | **Verified current** | Canonical repo, root `.`, branch `main`, Next.js, and Node 24 are configured; no application environment is needed and the PR preview is `READY`. |
| Doppler-to-Vercel flow | **Target state** | Each config maps only to its same-purpose environment; do not reuse another venture's service token or runtime identity. |
| Domain and DNS | **Verified public / authenticated control pending** | GoDaddy registration/nameservers and Website Builder routing are public; export the authenticated zone and verify possible duplicate SPF before any Vercel attachment. |

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
