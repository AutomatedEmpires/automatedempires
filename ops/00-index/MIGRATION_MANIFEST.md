# Documentation Migration Manifest

**Prepared:** 2026-07-12

**Base:** `AutomatedEmpires/automatedempires@064952b`

**Phase:** Compatibility index; source reports are not moved or rewritten in this PR.

## Accepted repository documentation

All 102 Markdown files below are tracked on `main` at the base commit. Their report-level claims remain bounded by their own dates and evidence statements.

| Current path | Files | Canonical area | Lifecycle | This PR |
|---|---:|---|---|---|
| `ops/portfolio/*.md` | 28 | `ops/01-portfolio/` | Accepted on `main` | Indexed; current paths preserved |
| `ops/ventures/<venture>/*.md` | 42 | `ops/02-ventures/<venture>/` | Accepted on `main` | Indexed; current paths preserved |
| `ops/provider-governance/*.md` | 6 | `ops/03-providers/governance/` | Accepted through PR #11 | Indexed; current paths preserved |
| `ops/secrets/*.md` | 7 | `ops/03-providers/secret-contracts/` | Accepted names-only contracts | Indexed; current paths preserved |
| `ops/rollout-readiness/*.md` | 6 | `ops/04-rollout/` | Accepted through PR #12 | Indexed; current paths preserved |
| `ops/security-readiness/*.md` | 5 | `ops/06-security/` | Accepted through PR #9 | Indexed; current paths preserved |
| `ops/orchestration/*.md` | 7 | `ops/07-execution/orchestration/` | Accepted through PR #10 | Indexed; current paths preserved |
| `ops/execution/*.md` | 1 | `ops/07-execution/` | Accepted on `main` | Indexed; current paths preserved |

## Wave artifacts not admitted as accepted repository truth

| Source set | Intended canonical area | Lifecycle at normalization | Disposition |
|---|---|---|---|
| `ops/account-governance/` authoring-lane reports | `ops/05-governance/` | Local agent report set at original intake | Remains in the external normalized package pending review |
| Sweepza `ops/sweepza/` execution evidence | `ops/02-ventures/sweepza/execution-wave/` | Venture-branch evidence with per-file verdicts | Remains in the external normalized package; not promoted by this PR |
| Venture fix-factory outputs | `ops/07-execution/venture-fix-factory/` | Local execution outputs | Remains in the external normalized package pending review |
| ZIP report packages | `ops/08-archive/packages/` | Historical delivery containers | Remains archive-only outside the repository |

## Compatibility and cutover rules

1. New documentation follows the numbered filing standard after this index is accepted.
2. Existing report paths stay stable while open PRs and external references are audited.
3. A later docs-only cutover may use `git mv` after link consumers are known; it must preserve history and add redirects or update every tracked reference in the same PR.
4. No draft becomes accepted merely because it has an intended canonical destination.
5. No legacy directory is deleted until the founder approves the cutover manifest.
