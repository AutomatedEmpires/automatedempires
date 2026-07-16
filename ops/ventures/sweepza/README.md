# Sweepza infrastructure operations

This pack records Sweepza's independent runtime identity and the remaining provider activation work. It contains no secret values.

## Canonical product boundary

Sweepza is a modern sweepstakes/giveaway discovery and listing platform, not the promotion operator by default. It sources public promotions from official sources and accepts sponsor/host/partner submissions, then links out to official rules and entry pages.

Sweepza does not run promotions, set official rules, select winners, determine eligibility, process entries or payments by default, guarantee legality, or improve user odds. Listings use `sourced_unverified`, `source_verified`, `host_claimed`, `partner_verified`, `expired`, `removed`, or `disputed`. Require source provenance and clear disclaimers; do not copy long descriptions/images/rules, imply unverified partnerships, or collect live entries before explicit legal approval.

Existing approval/hold, entry, winner, notification, and host-billing flows are implementation evidence. Keep them inactive until a reviewed keep/repurpose/retire decision aligns them with this boundary.

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
| Deployment boundary | **Current source / deployed evidence verified** | Current source is #53 at `f2977cb`, with corrected protected Preview `dpl_b4bLyYvsoFLou5GxGYnapC14QPzX` `READY`. Production `dpl_9N57qj7PHDteARUpVFWCKAxYutts` remains earlier deployed-source evidence from `4c0aad183fe9442e4546985b373b26498e38e6e7`; no Production redeploy occurred |
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

Boundary rule: Sweepza must use Sweepza-specific provider resources. Dedicated Stripe live/sandbox accounts and prices are verified, but their existence does not authorize payments, entry processing, prize flows, or promotion operation. A foreign E&E webhook and unclassified non-money objects remain under the no-mutation gate. Production Clerk still points to a development instance. These are active residual/runtime blockers, not documentation-only concerns.

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; Sweepza `docs/SWEEPZA_PROVIDER_PROVISIONING.md`, `README.md`, current source/config, and the dated readiness reports as historical evidence only.
