# LogLoads infrastructure operations

This pack documents LogLoads as an independent logistics venture. Provider intent in the scaffold is not treated as proof of a production integration.

## Evidence labels

- **Verified current** — confirmed during the 2026-07-10 provider inventory or explicitly supplied to this alignment pass.
- **Observed in repository** — present in committed code/docs, not live-provider proof.
- **Target state** — intended after implementation and verification.
- **Unknown / provider-owner verification required** — cannot be established safely from current evidence.

## Identity summary

| Area | Status | Current record |
|---|---|---|
| Canonical slug | **Verified current** | `logloads` |
| GitHub repository | **Verified current** | `AutomatedEmpires/logloads` |
| Secrets boundary | **Verified current** | Doppler project `logloads`; pre-convergence names-only counts dev 22, stg 11, prd 18 |
| Deployment boundary | **Source/merge/deployment fixed / live activation open** | PR #6 final source `f280ef4fef4b992f94457aad61cfe27e8ec91791` passed required checks and Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4`; it merged as current `main` `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`, whose production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` is `READY` |
| Database boundary | **Safely fixed in code / live unchanged** | `135cff673255cfc1b99c66552479e32cba370940` makes Supabase canonical and passes fresh PostgreSQL 17/RLS/grant/E2E gates; final work is merged/deployed, but no live migration or data cutover occurred |
| Domain | **Verified public** | `logloads.com` is registered at GoDaddy and serves Website Builder; no MX is present and it is not attached to Vercel |
| Runtime architecture | **Implementation/Preview complete / production-risk gate** | Supabase-canonical candidate passes atomic/retry/cold-start/concurrency tests; distributed rate limiting/live-upgrade/production rollback remain |
| Product maturity | **Verified merged candidate** | Product/main automation converged through `5ada1dc…`, integrity fixed at `4cc386c…`, canonical work at `135cff6…`; final source `f280ef4…` explicitly initializes Supabase before E2E and merged as `9c9e107…` |

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)

Boundary rule: LogLoads is coordination software and marketplace visibility, not a freight broker or payment handler. Its decision log limits Stripe to subscriptions unless a new dated decision changes that scope.

Deployment rule: canonical checks, merge, final-source Preview, and current-main source deployment pass. Do not activate live data/providers or attach `logloads.com` until backup/live-shape upgrade, environment provenance, distributed rate limiting, and functional production rollback pass.

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; LogLoads `README.md`, `docs/DECISIONS.md`, `LOGLOADS_NEXT_STEPS.md`, and committed `.env.example` names only.
