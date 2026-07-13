# Lake & Pine transfer checklist

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

## Product and repository

- [x] Prototype/dirty deployments are historical; current source is `e65b3b6`, while `1b6a877…` remains the last verified deployed source.
- [x] `AutomatedEmpires/lakeandpine` strict `validate`, linear/squash history, conversation resolution, no force push/deletion, security alerts, and Dependabot updates are verified; recipient access remains transfer-specific.
- [ ] Canonical operational slug `lake-and-pine` and provider spelling divergence `lakeandpine` are documented in receiving systems.
- [ ] Product truth and recovery provenance are handed off intact.

## Existing provider boundaries

- [ ] Doppler access is transferred; dev metadata-only and stg/prd verified runtime mappings are understood.
- [x] Clean production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` from `1b6a877…` replaces dirty source as the deployed baseline; current source `e65b3b6` still requires deployment revalidation.
- [ ] Vercel project, root `apps/web`, aliases, clean deployment source, environment mapping, functional smoke, and rollback owner are demonstrated to the recipient.
- [ ] Supabase ownership, 14-table schema, two-row migration ledger, data, policies, backups, and recovery are inspected without destructive writes.

## Product and authority decisions before activation

- [ ] Phase 1 operating-system scope—booking requests, planning, property/preferences, recurring plans, job pipeline/status, follow-up/communication, operator dashboard, and estimate direction—is accepted; payments are recorded as Phase 2.
- [ ] Production application architecture and runtime contract for the approved Phase 1 slices are approved.
- [ ] Customer/staff auth model and data-retention obligations are approved.
- [ ] Quote/estimate, booking-request, cancellation, scheduling/capacity, service-status, communication, and data policies are approved; payment policy may remain a Phase 2 gate.
- [x] Authenticated ownership/privacy/renewal and full-zone inventory for `lakeandpinecleaning.com` are recorded; attachment remains gated by clean release/rollback.
- [ ] Provider-specific projects are created only where the approved application consumes them.

## Acceptance

- [ ] No secret value was placed in this repository or transfer notes.
- [ ] Recipient can distinguish observed prototype behavior from implemented backend behavior.
- [x] Clean Preview `dpl_BBy…` and Production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` from `1b6a877…` are `READY`; current source is later and functional rollback ownership remains transfer-specific.
- [x] Pinned CI/Windows case fix is reviewed and merged; PRs #2/#3 add DOM-XSS regression and disposable-database booking/dashboard smoke. The remaining gap is that pinned `validate` does not invoke those suites and Production/capacity proof is absent.
