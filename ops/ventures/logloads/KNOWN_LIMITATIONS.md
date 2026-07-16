# LogLoads known limitations

Pass 2 provider refresh: 2026-07-10; no provider state was changed.

| Limitation | Classification | Operational effect |
|---|---|---|
| Repository is an early foundation/scaffold and most provider integrations are placeholders | **Observed in repository** | Provider names and env variables do not prove runtime readiness |
| Canonical #6 work is fully tested and deployed from `9c9e107082942e5bce782eac2ce71aa63eb7d9c0` as Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4` and production `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF`; current source later advanced through #21/#22 to `6f7ebcd`; no live data/provider cutover occurred | **Current/deployed source split / production-risk gate** | Revalidate current source; do not confuse a `READY` older-source deployment with live migration, provider activation, rate-limit, provenance, or rollback proof |
| Historical dirty Preview/failed production and the earlier `35b5e40…` / `dpl_DrDM…` evidence pair are superseded | **Diagnostic historical evidence** | Use the final source/Preview/current-main production above for source/build provenance, not live state |
| Product/main histories converged through #6/`9c9e107…`; current source adds #21/#22 through `6f7ebcd` | **Source convergence plus later hardening fixed** | Live Supabase/provider state remains separate production authority and is unchanged; later source needs deployment revalidation |
| Live Supabase remains unchanged; local migration passes PostgreSQL 17 reset/RLS/grants, but backup/live-shape upgrade/lane provenance unverified | **Production-risk gate** | Prove upgrade/rollback before live migration |
| `logloads.com` authenticated GoDaddy control/full zone are verified and it still serves Website Builder; no MX exists | **Registrar completed / cutover blocked** | Web/email cutover still waits for runtime architecture and provider proof |
| Dev/stg share zero-user dev Clerk; dark production DNS Verified/SSL Issued but config/runtime install pending | **Partially remediated contamination** | Production auth absent; staging not isolated |
| Distinct LogLoads Resend credential reaches Explore&Earn's team; dev/prd reuse that broad key, no LogLoads domain or explicit from-address exists, and a create attempt returned HTTP 403 at the current domain quota | **Confirmed account coupling / current-plan purchase gate** | Email is not independently transferable or production-ready; code falls back to the provider testing sender |
| Venture-specific Mapbox and PostHog boundaries exist; MapLibre fallback and misleading server-shaped legacy name remain. Fresh Mapbox Preview hits an app error boundary; Sentry/PostHog events are open | **Provider/config fixed; runtime gates** | Repair/re-smoke Preview and verify telemetry events; keep fallback/rollback |
| Environment example includes provider-admin and multiple agent-webhook credentials | **Observed in repository** | Avoid unnecessarily broad runtime blast radius; apply least privilege |
| First schema, auth mapping, and core logistics domain model remain planned in next-steps docs | **Observed in repository** | Do not operate or market as a production logistics platform |
| Stripe is intentionally subscriptions-only; Connect/brokerage/payment handling is out of scope | **Dated product boundary** | Any scope expansion requires legal/product review and a new decision |
| Staging database and webhook isolation are not documented | **Unknown / production-risk verification required** | `stg` may not yet represent a safe independent environment |
| Current custom webhook endpoints are not documented in source | **Observed gap** | Do not provision external callbacks until handlers and event contracts exist |
| `LOGLOADS_ENABLE_DEV_LOGIN` is present by name in prd | **Security-review required** | A development bypass could be exposed if the runtime interprets it as enabled |
| Mapbox environment/origin/local proof is complete, but fresh Preview route fails before map initialization | **Blocked by application path / production risk** | Repair/re-smoke Preview; promote Production separately and retain old/shared rollback until zero use |
| A provider-neutral Redis REST limiter adapter was implemented later, but provider choice was treated as settled in earlier execution notes | **Product/architecture correction required** | The requirement is shared atomic state. Evaluate a Supabase-backed limiter first, then Vercel-integrated KV/Upstash only if Supabase is unsuitable; use memory only in local/dev |

Canonical implementation, required checks, merge, and the #6 source deployments are complete; current #22 source needs deployment revalidation. Immediate work is live-upgrade/provenance, a documented shared-limiter evaluation in the required order, exact-SHA multi-instance/outage proof, and functional production rollback—not reflexive Redis provisioning or packaging repair.
