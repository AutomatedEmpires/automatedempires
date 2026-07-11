# LogLoads known limitations

Pass 2 provider refresh: 2026-07-10; no provider state was changed.

| Limitation | Classification | Operational effect |
|---|---|---|
| Repository is an early foundation/scaffold and most provider integrations are placeholders | **Observed in repository** | Provider names and env variables do not prove runtime readiness |
| Canonical `135cff6…` work is fully tested; final PR #6 source `f280ef4fef4b992f94457aad61cfe27e8ec91791` passed required checks and Preview `dpl_8RY71TfokWZNaVZgbZgmDvMWyRf4`, merged as current `main` `9c9e107082942e5bce782eac2ce71aa63eb7d9c0`, and is deployed as `dpl_XxrZAJ1567EbtnkSg2XxWq88dPtF`; no live data/provider cutover occurred | **Source/merge/deployment safely fixed / production-risk gate** | Do not confuse a `READY` source deployment with live migration, provider activation, rate-limit, provenance, or rollback proof |
| Historical dirty Preview/failed production and the earlier `35b5e40…` / `dpl_DrDM…` evidence pair are superseded | **Diagnostic historical evidence** | Use the final source/Preview/current-main production above for source/build provenance, not live state |
| Product/main histories are converged through `5ada1dc…`, with integrity/canonical commits, final PR source `f280ef4…`, and current `main` `9c9e107…` | **Source convergence/merge fixed** | Live Supabase/provider state remains separate production authority and is unchanged |
| Live Supabase remains unchanged; local migration passes PostgreSQL 17 reset/RLS/grants, but backup/live-shape upgrade/lane provenance unverified | **Production-risk gate** | Prove upgrade/rollback before live migration |
| `logloads.com` authenticated GoDaddy control/full zone are verified and it still serves Website Builder; no MX exists | **Registrar completed / cutover blocked** | Web/email cutover still waits for runtime architecture and provider proof |
| Dev/stg share zero-user dev Clerk; dark production DNS Verified/SSL Issued but config/runtime install pending | **Partially remediated contamination** | Production auth absent; staging not isolated |
| Distinct LogLoads Resend credential reaches Explore&Earn's team; dev/prd reuse that broad key, no LogLoads domain or explicit from-address exists, and a create attempt returned HTTP 403 at the current domain quota | **Confirmed account coupling / current-plan purchase gate** | Email is not independently transferable or production-ready; code falls back to the provider testing sender |
| Feature has optional Mapbox/MapLibre fallback; shared public/server-mislabelled token remains. Empty `logloads/` namespace has no credential. No PostHog project; distinct governed Sentry project has no first event | **Mixed confirmed state** | Maps/media/telemetry runtime proof is open; Mapbox/media can remain disabled during convergence |
| Environment example includes provider-admin and multiple agent-webhook credentials | **Observed in repository** | Avoid unnecessarily broad runtime blast radius; apply least privilege |
| First schema, auth mapping, and core logistics domain model remain planned in next-steps docs | **Observed in repository** | Do not operate or market as a production logistics platform |
| Stripe is intentionally subscriptions-only; Connect/brokerage/payment handling is out of scope | **Dated product boundary** | Any scope expansion requires legal/product review and a new decision |
| Staging database and webhook isolation are not documented | **Unknown / production-risk verification required** | `stg` may not yet represent a safe independent environment |
| Current custom webhook endpoints are not documented in source | **Observed gap** | Do not provision external callbacks until handlers and event contracts exist |
| `LOGLOADS_ENABLE_DEV_LOGIN` is present by name in prd | **Security-review required** | A development bypass could be exposed if the runtime interprets it as enabled |
| Mapbox replacement is approved, but provider requires account-owner confirmation | **Blocked by MFA/account-owner confirmation** | Create only `logloads-dev-public` after confirmation; production waits for source convergence |

Canonical implementation, required checks, merge, final-source Preview, and current-main production deployment are complete. Immediate work is live-upgrade/provenance/distributed-rate-limit/provider proof and functional production rollback—not packaging repair.
