# Lake & Pine transfer checklist

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / provider-owner verification required**.

## Product and repository

- [x] Prototype/dirty deployment are recorded as historical evidence; reviewed authority is merged `main` at `1b6a877…`.
- [x] `AutomatedEmpires/lakeandpine` strict `validate`, linear/squash history, conversation resolution, no force push/deletion, security alerts, and Dependabot updates are verified; recipient access remains transfer-specific.
- [ ] Canonical operational slug `lake-and-pine` and provider spelling divergence `lakeandpine` are documented in receiving systems.
- [ ] Product truth and recovery provenance are handed off intact.

## Existing provider boundaries

- [ ] Doppler access is transferred; dev metadata-only and stg/prd verified runtime mappings are understood.
- [x] Clean reproducible `main` production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` replaces dirty source as release authority.
- [ ] Vercel project, root `apps/web`, aliases, clean deployment source, environment mapping, functional smoke, and rollback owner are demonstrated to the recipient.
- [ ] Supabase ownership, 14-table schema, two-row migration ledger, data, policies, backups, and recovery are inspected without destructive writes.

## Product and authority decisions before activation

- [ ] Production application architecture and runtime contract are approved.
- [ ] Customer/staff auth model and data-retention obligations are approved.
- [ ] Quote, booking, cancellation, scheduling, and payment policies are approved.
- [x] Authenticated ownership/privacy/renewal and full-zone inventory for `lakeandpinecleaning.com` are recorded; attachment remains gated by clean release/rollback.
- [ ] Provider-specific projects are created only where the approved application consumes them.

## Acceptance

- [ ] No secret value was placed in this repository or transfer notes.
- [ ] Recipient can distinguish observed prototype behavior from implemented backend behavior.
- [x] Clean Preview `dpl_BBy…` and main-based Production `dpl_EHGPmtPpkLu5fYC5jawYA87MDWVk` are `READY`; functional rollback ownership remains transfer-specific.
- [x] Pinned CI/Windows case fix is reviewed, merged, and run remotely; absence of application tests is explicitly recorded.
