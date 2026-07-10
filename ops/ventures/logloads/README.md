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
| Deployment boundary | **Verified current** | Vercel preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF` is `READY`; production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` is `ERROR` with `ENOENT`; both are dirty feature artifacts, not reproducible `main` releases |
| Database boundary | **Verified current / interim architecture** | Supabase ref `fdzohbiiyzgvjzfsjyxo` is a durability mirror; process-local JSON remains the primary operating state |
| Domain | **Verified public** | `logloads.com` is registered at GoDaddy and serves Website Builder; no MX is present and it is not attached to Vercel |
| Runtime architecture | **Dated decision / production gate** | Current engine is exactly one writer with a persistent volume. Vercel serverless is reserved until an asynchronous canonical database layer replaces process-local authority |
| Product maturity | **Observed/verified** | Feature head `cce1c4494ae49d28aacc42724ab7245668474ab7` has 22 commits not in `main`; `main` `e78b48c292c57339a0610fcdbf2effa08827dc40` has 8 commits not in the feature, and the working tree has three uncommitted deployment files |

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)

Boundary rule: LogLoads is coordination software and marketplace visibility, not a freight broker or payment handler. Its decision log limits Stripe to subscriptions unless a new dated decision changes that scope.

Deployment rule: correcting Vercel root/build output or `ENOENT` is secondary. Do not promote Vercel production until the founder approves and tests either the dated single-node persistent-volume runtime or a completed stateless/async-database Vercel architecture.

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; LogLoads `README.md`, `docs/DECISIONS.md`, `LOGLOADS_NEXT_STEPS.md`, and committed `.env.example` names only.
