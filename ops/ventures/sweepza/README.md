# Sweepza infrastructure operations

This pack records Sweepza's independent runtime identity and the remaining provider activation work. It contains no secret values.

## Evidence labels

- **Verified current** — confirmed during the 2026-07-10 provider inventory or explicitly supplied to this alignment pass.
- **Observed in repository** — stated by committed docs/code, not independently confirmed in a live dashboard.
- **Target state** — required end state that remains incomplete.
- **Unknown / provider-owner verification required** — not safely established from current evidence.

## Identity summary

| Area | Status | Current record |
|---|---|---|
| Canonical slug | **Verified current** | `sweepza` |
| GitHub repository | **Verified current** | `AutomatedEmpires/sweepza` |
| Secrets boundary | **Verified current** | Doppler project `sweepza`; configs `dev`, `stg`, `prd` (repo docs also reference `dev_personal`) |
| Deployment boundary | **Verified current** | Vercel project `sweepza`, canonical repo/main/root `.`, final #44 Preview `dpl_DyK72pRkkjYCjAzTd7RJNE9uV7iN`, current `main` `4c0aad183fe9442e4546985b373b26498e38e6e7`, and production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` are `READY` |
| Deployed aliases | **Verified current** | `https://sweepza.com`, `https://www.sweepza.com`, and `https://sweepza.vercel.app` |
| Database boundary | **Verified current** | Supabase fingerprint `…nzisuomq` |
| Custom domain | **Verified current** | `sweepza.com` is registered at GoDaddy, attached to Vercel, and serves apex/`www`; Outlook MX is preserved |
| Product maturity | **Observed in repository** | Next.js app with Supabase, Clerk, Stripe, Resend, PostHog, Sentry, and a Vercel cron wired in code |

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)

Boundary rule: Sweepza must use Sweepza-specific provider resources. Dedicated Stripe live/sandbox accounts and prices are verified, but a foreign E&E webhook and unclassified non-money objects remain under the no-mutation gate. Production Clerk still points to a development instance. These are active residual/runtime blockers, not documentation-only concerns.

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; Sweepza `docs/SWEEPZA_PROVIDER_PROVISIONING.md`, `README.md`, current source/config, and the dated readiness reports as historical evidence only.
