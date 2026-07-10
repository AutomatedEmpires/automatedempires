# Lake & Pine infrastructure operations

This pack governs the canonical venture slug `lake-and-pine`. The GitHub/Vercel resource spelling `lakeandpine` is a known naming divergence, not a second venture.

## Evidence labels

- **Verified current** — confirmed during the 2026-07-10 provider inventory or explicitly supplied to this alignment pass.
- **Observed in repository** — present in committed material, but not live-provider proof.
- **Target state** — intended only after the production architecture is approved.
- **Unknown / founder verification required** — cannot be established safely from current evidence.

## Identity summary

| Area | Status | Current record |
|---|---|---|
| Canonical slug | **Verified current** | `lake-and-pine` |
| GitHub repository | **Verified current** | `AutomatedEmpires/lakeandpine` |
| Secrets boundary | **Verified current** | Doppler project `lake-and-pine`; `dev` metadata only, verified runtime values imported into `stg` and `prd` |
| Deployment boundary | **Verified current** | Vercel alias `lakeandpine.vercel.app` is `READY`; project is configured for canonical repo/main/root `apps/web`, but the aliased deployment is a dirty redeploy from `feat/production-foundation` |
| Database boundary | **Verified current** | Supabase project ref `fftnqsvxxsxcsiwvtmwr` |
| Candidate domain | **Verified missing** | `lakepinecleaning.com` is unregistered and has no DNS; purchase requires founder action |
| Product maturity | **Mixed current state** | Default branch snapshot is prototype-only, while the local `feat/production-foundation` branch and live Vercel deployment contain the application; source convergence is required |

The provider hostname is live, but a dirty feature-branch redeploy is not a reproducible production release. Merge/reproduce the application cleanly on the intended branch before domain or transfer work.

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; Lake & Pine `README.md`, `docs/product/recovered-product-truth.md`, recovery provenance, and the recovered prototype.
