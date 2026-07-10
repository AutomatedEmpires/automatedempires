# LogLoads infrastructure operations

This pack documents LogLoads as an independent logistics venture. Provider intent in the scaffold is not treated as proof of a production integration.

## Evidence labels

- **Verified current** — confirmed during the 2026-07-10 provider inventory or explicitly supplied to this alignment pass.
- **Observed in repository** — present in committed code/docs, not live-provider proof.
- **Target state** — intended after implementation and verification.
- **Unknown / founder verification required** — cannot be established safely from current evidence.

## Identity summary

| Area | Status | Current record |
|---|---|---|
| Canonical slug | **Verified current** | `logloads` |
| GitHub repository | **Verified current** | `AutomatedEmpires/logloads` |
| Secrets boundary | **Verified current** | Doppler project `logloads`; names-only counts dev 18, stg 7, prd 14 |
| Deployment boundary | **Verified current** | Vercel project `logloads` is connected to canonical repo/main/root `apps/web`; preview is `READY`, production is `ERROR` with `ENOENT` |
| Database boundary | **Verified current** | Supabase ref `fdzohbiiyzgvjzfsjyxo` |
| Domain | **Verified public** | `logloads.com` is registered at GoDaddy and serves Website Builder; no MX is present and it is not attached to Vercel |
| Product maturity | **Observed/verified** | Early Next.js/pnpm monorepo with a healthy preview and dedicated Supabase data, but production build, auth, email, maps, and telemetry are not transfer-ready |

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)

Boundary rule: LogLoads is coordination software and marketplace visibility, not a freight broker or payment handler. Its decision log limits Stripe to subscriptions unless a new dated decision changes that scope.

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; LogLoads `README.md`, `docs/DECISIONS.md`, `LOGLOADS_NEXT_STEPS.md`, and committed `.env.example` names only.
