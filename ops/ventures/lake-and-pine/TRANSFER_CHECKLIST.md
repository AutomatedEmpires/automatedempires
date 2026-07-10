# Lake & Pine transfer checklist

Status key: **Verified current** · **Observed in repository** · **Target state** · **Unknown / founder verification required**.

## Product and repository

- [ ] Recipient understands that the prototype is historical evidence and the live app currently comes from `feat/production-foundation`.
- [ ] GitHub access to `AutomatedEmpires/lakeandpine` and branch protections are verified.
- [ ] Canonical operational slug `lake-and-pine` and provider spelling divergence `lakeandpine` are documented in receiving systems.
- [ ] Product truth and recovery provenance are handed off intact.

## Existing provider boundaries

- [ ] Doppler access is transferred; dev metadata-only and stg/prd verified runtime mappings are understood.
- [ ] The dirty feature-branch deployment is replaced by a clean reproducible commit on the intended production branch.
- [ ] Vercel project, root `apps/web`, aliases, deployment source, environment mapping, and rollback are demonstrated.
- [ ] Supabase ownership, 14-table schema, two-row migration ledger, data, policies, backups, and recovery are inspected without destructive writes.

## Founder decisions before activation

- [ ] Production application architecture and runtime contract are approved.
- [ ] Customer/staff auth model and data-retention obligations are approved.
- [ ] Quote, booking, cancellation, scheduling, and payment policies are approved.
- [ ] A final domain is purchased/owned; `lakepinecleaning.com` was unregistered at this snapshot.
- [ ] Provider-specific projects are created only where the approved application consumes them.

## Acceptance

- [ ] No secret value was placed in this repository or transfer notes.
- [ ] Recipient can distinguish observed prototype behavior from implemented backend behavior.
- [ ] A clean Preview uses staging-only resources and a main-based Production deployment has a documented rollback.
