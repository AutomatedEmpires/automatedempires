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
| Deployment boundary | **Verified current** | Vercel deployment `dpl_AaAEZZz9Ma442TDNygN6ypLsQCMt` is `READY` at `lakeandpine.vercel.app`; project is configured for repo/main/root `apps/web`, but the deployment is a dirty feature-branch redeploy and is not proven equal to a committed SHA |
| Database boundary | **Verified current** | Supabase project ref `fftnqsvxxsxcsiwvtmwr` |
| Candidate domain | **Verified missing** | `lakepinecleaning.com` is unregistered and has no DNS; purchase requires founder action |
| Product maturity | **Mixed current state** | `main` `0b7116f72878ba3f67e3ff9948a11da83cc5bab7` is prototype-only and lacks `apps/web`; clean candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` is five commits ahead and contains the application |

The provider hostname is live, but a dirty feature-branch redeploy is not a reproducible production release. Record the deployment's source metadata and retain it as temporary rollback evidence, then merge/reproduce candidate `e1fe8f00f3e50ede86a2f6e3af75ea1e8cdded1a` through review and prove a clean `main` release before domain or transfer work.

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; Lake & Pine `README.md`, `docs/product/recovered-product-truth.md`, recovery provenance, and the recovered prototype.
