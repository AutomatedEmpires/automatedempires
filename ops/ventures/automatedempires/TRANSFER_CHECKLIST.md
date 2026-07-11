# AutomatedEmpires transfer checklist

Last reviewed: 2026-07-10

Use this checklist when transferring operations to a new maintainer, business owner, or provider account. Do not paste values into tickets, chat, or this file.

## Scope and authority

- [ ] **Target state** — Record transferor, transferee, effective date, business owner, technical owner, and emergency contact.
- [ ] **Target state** — Confirm the transfer covers only the AutomatedEmpires portfolio site and not child-venture production resources.
- [ ] **Approval boundary** — Obtain the recorded owner's approval for domain/billing/account transfer and explicit approval for destructive changes.

## Source and deployment

- [ ] **Observed in repository** — Confirm the canonical repository is `AutomatedEmpires/automatedempires` and review outstanding branches and pull requests.
- [x] **Verified current** — Strict `verify`/`design`, linear/squash history, conversation resolution, no force push/deletion, automation bypass, vulnerability alerts, Dependabot updates, and Vercel Git integration are configured; recipient access remains transfer-specific.
- [ ] **Verified current** — Locate Vercel project `automatedempires`, current production `dpl_5scDXWyVV2wq1ypwhcjmiBkQLpzT` from `ed91ece423583318fd7481278a7478311d867add`, and its rollback candidate; verify the recipient can view deployments without changing configuration.
- [ ] **Target state** — Run typecheck and build, deploy a non-production change, and demonstrate rollback to the recipient.

## Configuration and access

- [ ] **Verified current** — Locate Doppler project `automatedempires` and configs `dev`, `stg`, `prd`; each contains only the parent Sentry identity beyond metadata.
- [ ] **Target state** — Transfer access through provider membership/RBAC. Never copy a value into transfer documentation.
- [ ] **Provider verification required** — Reconcile Vercel variables and Doppler names by environment without displaying values.
- [ ] **Target state** — Remove old access only after the recipient proves independent access and rollback capability.

## Domain and optional providers

- [ ] **Observed in repository** — Confirm the application expects `automatedempires.com`.
- [ ] **Partially verified** — Registrar/authoritative DNS/zone are verified; transfer recipient must verify registrant contact, renewal billing, recovery access, Vercel attachment, and certificate health.
- [ ] **Verified current** — Separate Sentry project/governance/Doppler bindings exist; Vercel event proof remains. Resend/PostHog are absent and Cloudinary parent namespace is organizational only; do not assume child resources are shared.
- [ ] **Verified current** — Record that no Supabase project is required for this runtime.

## Handoff proof

- [ ] **Target state** — Recipient can open GitHub, Doppler, Vercel, and DNS control planes with least-privilege access and MFA.
- [ ] **Target state** — Recipient can identify the active production deployment and last known-good deployment.
- [ ] **Target state** — Recipient can complete the smoke test in `RUNBOOK.md`.
- [ ] **Target state** — Both parties sign a non-secret inventory containing provider, resource name, environment, owner, billing owner, and recovery owner.
