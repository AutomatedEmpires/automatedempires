# Lake & Pine infrastructure operations

This pack governs the canonical venture slug `lake-and-pine`. The GitHub/Vercel resource spelling `lakeandpine` is a known naming divergence, not a second venture.

## Evidence labels

- **Verified current** — confirmed during the 2026-07-10 provider inventory or explicitly supplied to this alignment pass.
- **Observed in repository** — present in committed material, but not live-provider proof.
- **Target state** — intended only after the production architecture is approved.
- **Unknown / provider-owner verification required** — cannot be established safely from current evidence.

## Identity summary

| Area | Status | Current record |
|---|---|---|
| Canonical slug | **Verified current** | `lake-and-pine` |
| GitHub repository | **Verified current** | `AutomatedEmpires/lakeandpine` |
| Secrets boundary | **Verified current** | Doppler project `lake-and-pine`; `dev` contains own Sentry identity beyond metadata, verified runtime values plus Sentry imported/configured in `stg`/`prd` |
| Deployment boundary | **Fixed and verified** | PR #1 merged as current `main` `1b6a877bc054a9239c2a430aaf668996de8a0302`; clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` and exact-source Preview `dpl_BBy…` are `READY` |
| Database boundary | **Verified current** | Supabase project fingerprint `…siwvtmwr` |
| Domain | **Authenticated owned** | `lakeandpinecleaning.com` full 8-record GoDaddy zone verified; attachment waits for clean exact-SHA release and rollback |
| Product maturity | **Reviewed foundation** | Source `a55ccff64a7e758b74c13f5d02a7b70bd143ad5c` adds pinned CI/case repair and is merged; product/backend capabilities still require feature-level acceptance |

The provider hostname now has reproducible reviewed-main authority. Treat old dirty deployment metadata as historical evidence; complete functional rollback/domain smoke before attachment or transfer work.

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; Lake & Pine `README.md`, `docs/product/recovered-product-truth.md`, recovery provenance, and the recovered prototype.
