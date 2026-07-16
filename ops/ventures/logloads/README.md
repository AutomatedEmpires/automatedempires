# LogLoads infrastructure operations

This pack documents LogLoads as independent forestry/logistics coordination software. Provider intent in the scaffold is not treated as proof of a production integration.

## Canonical product and limiter boundary

LogLoads is not currently a freight broker, carrier, payment processor, or dispatch-for-hire operator. Its production limiter needs shared, atomic state across serverless instances; this is a capability requirement, not a standalone-provider requirement.

Evaluate a Supabase-backed limiter first. Use Vercel-integrated KV or Upstash Redis only if Supabase cannot satisfy the reviewed atomicity, latency, availability, observability, and cost requirements. Instance-local memory is local/development-only. Existing Redis-shaped code remains an adapter candidate, not provisioning authority.

## Evidence labels

- **Verified current** — confirmed during the 2026-07-10 provider inventory or explicitly supplied to this alignment pass.
- **Observed in repository** — present in committed code/docs, not live-provider proof.
- **Target state** — intended after implementation and verification.
- **Unknown / provider-owner verification required** — cannot be established safely from current evidence.

## Identity summary

| Area | Status | Current record |
|---|---|---|
| Canonical slug | **Verified current** | `logloads` |
| GitHub repository | **Verified current** | `AutomatedEmpires/logloads` |
| Secrets boundary | **Verified current** | Doppler project `logloads`; pre-convergence names-only counts dev 22, stg 11, prd 18 |
| Deployment boundary | **Current source / prior deployed evidence verified / live activation open** | Current `main` includes hardening PRs #21/#22 through `6f7ebcd`. PR #6 merge `9c9e107082942e5bce782eac2ce71aa63eb7d9c0` remains the last verified deployed source, with Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` and production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF` `READY` |
| Database boundary | **Safely fixed in code / live unchanged** | `135cff673255cfc1b99c66552479e32cba370940` makes Supabase canonical and passes fresh PostgreSQL 17/RLS/grant/E2E gates; final work is merged/deployed, but no live migration or data cutover occurred |
| Domain | **Verified public** | `logloads.com` is registered at GoDaddy and serves Website Builder; no MX is present and it is not attached to Vercel |
| Runtime architecture | **Application-state implementation/Preview complete / separate limiter gate** | Supabase-canonical application state passes atomic/retry/cold-start/concurrency tests; production rate limiting still needs Supabase-first shared atomic state plus multi-instance/outage proof, live upgrade, and rollback |
| Product maturity | **Verified merged candidate; deployment revalidation open** | Product/main automation converged through #6/`9c9e107…`; later #21/#22 at `6f7ebcd` add dependency/rate-limit hardening and a provider-neutral shared-limiter adapter without provisioning its state provider |

## Pack index

- [RUNBOOK.md](RUNBOOK.md)
- [ENVIRONMENT_MAP.md](ENVIRONMENT_MAP.md)
- [PROVIDER_LINKS.md](PROVIDER_LINKS.md)
- [TRANSFER_CHECKLIST.md](TRANSFER_CHECKLIST.md)
- [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md)

Boundary rule: LogLoads is coordination software and marketplace visibility, not a freight broker, carrier, payment processor, or dispatch-for-hire service. Its decision log limits Stripe to subscriptions unless a new dated decision changes that scope.

Deployment rule: canonical checks, merge, final-source Preview, and current-main source deployment pass. Do not activate live data/providers or attach `logloads.com` until backup/live-shape upgrade, environment provenance, the Supabase-first shared atomic limiter decision and multi-instance/outage proof, and functional production rollback pass.

Evidence baseline: parent `EMPIRE_INFRA_ALIGNMENT_PLAN.md`; LogLoads `README.md`, `docs/DECISIONS.md`, `LOGLOADS_NEXT_STEPS.md`, and committed `.env.example` names only.
