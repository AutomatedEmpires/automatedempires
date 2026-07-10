# AutomatedEmpires transfer checklist

Last reviewed: 2026-07-10

Use this checklist when transferring operations to a new maintainer, business owner, or provider account. Do not paste values into tickets, chat, or this file.

## Scope and authority

- [ ] **Target state** — Record transferor, transferee, effective date, business owner, technical owner, and emergency contact.
- [ ] **Target state** — Confirm the transfer covers only the AutomatedEmpires portfolio site and not child-venture production resources.
- [ ] **Unknown / founder verification required** — Obtain founder approval for domain, billing, account-owner, or destructive changes.

## Source and deployment

- [ ] **Observed in repository** — Confirm the canonical repository is `AutomatedEmpires/automatedempires` and review outstanding branches and pull requests.
- [ ] **Unknown / founder verification required** — Verify GitHub admin access, branch protection, required review, and Vercel Git integration.
- [ ] **Verified current** — Locate Vercel project `automatedempires`; verify the recipient can view deployments without changing configuration.
- [ ] **Target state** — Run typecheck and build, deploy a non-production change, and demonstrate rollback to the recipient.

## Configuration and access

- [ ] **Verified current** — Locate Doppler project `automatedempires` and configs `dev`, `stg`, `prd`; supplied inventory found metadata only.
- [ ] **Target state** — Transfer access through provider membership/RBAC. Never copy a value into transfer documentation.
- [ ] **Unknown / founder verification required** — Reconcile Vercel variables and Doppler metadata by variable name and environment, without displaying values.
- [ ] **Target state** — Remove old access only after the recipient proves independent access and rollback capability.

## Domain and optional providers

- [ ] **Observed in repository** — Confirm the application expects `automatedempires.com`.
- [ ] **Unknown / founder verification required** — Verify registrar, authoritative DNS, registrant contact, renewal billing, recovery access, Vercel attachment, and certificate health.
- [ ] **Unknown / founder verification required** — Determine whether AutomatedEmpires-specific Resend, PostHog, Cloudinary, or Sentry resources exist; do not assume child-venture resources are shared.
- [ ] **Verified current** — Record that no Supabase project is required for this runtime.

## Handoff proof

- [ ] **Target state** — Recipient can open GitHub, Doppler, Vercel, and DNS control planes with least-privilege access and MFA.
- [ ] **Target state** — Recipient can identify the active production deployment and last known-good deployment.
- [ ] **Target state** — Recipient can complete the smoke test in `RUNBOOK.md`.
- [ ] **Target state** — Both parties sign a non-secret inventory containing provider, resource name, environment, owner, billing owner, and recovery owner.
