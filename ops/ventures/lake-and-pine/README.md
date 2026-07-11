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
| Domain | **Authenticated owned** | `lakeandpinecleaning.com` full 8-record GoDaddy zone verified; attachment waits for clean exact-SHA release and rollback |
| Product maturity | **Mixed current state** | `main` `0b7116f72878ba3f67e3ff9948a11da83cc5bab7` is prototype-only and lacks `apps/web`; base candidate `e1fe8f00…` contains the application, and validated local head `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` adds pinned CI/case repair but is unpushed |

The provider hostname is live, but a dirty feature-branch redeploy is not a reproducible production release. Retain the deployment metadata as temporary rollback evidence, then review/push `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` and prove a clean exact-SHA Preview plus `main` release before domain attachment or transfer work.

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; Lake & Pine `README.md`, `docs/product/recovered-product-truth.md`, recovery provenance, and the recovered prototype.
