# LogLoads known limitations

Pass 2 provider refresh: 2026-07-10; no provider state was changed.

| Limitation | Classification | Operational effect |
|---|---|---|
| Repository is an early foundation/scaffold and most provider integrations are placeholders | **Observed in repository** | Provider names and env variables do not prove runtime readiness |
| Dated architecture requires one writer and a persistent local volume; Supabase is a snapshot mirror, while Vercel is multi-instance/serverless | **Production architecture blocker** | Even a successful Vercel build can fork or lose authoritative state; no Vercel production promotion is allowed until host/refactor decision and testing |
| Vercel root/Node settings are aligned, but preview `dpl_Ejx66Z9wZFJiPJ5341j61voT7cHF` and failed production `dpl_5LdZ4qWv7P1B68iYi3zZoJBM7wLN` are dirty artifacts; production also fails with `ENOENT` | **Verified secondary build/provenance blocker** | No reproducible exact-SHA artifact exists; packaging repair cannot supersede the architecture gate |
| Feature head `cce1c4494ae49d28aacc42724ab7245668474ab7` diverges from `main` `e78b48c292c57339a0610fcdbf2effa08827dc40` by 22 feature-only/8 main-only commits and has three uncommitted deployment files | **Verified source-convergence blocker** | Integration must preserve main CI/release work and commit reviewed runtime changes; force replacement is unsafe |
| Supabase has 36 RLS application tables, one zero-policy mirror table, and six migrations; local JSON remains primary and backups/lane separation remain unverified | **Verified current / owner gap** | No remote DB operation or claim of statelessness is safe without comparison and architecture approval |
| `logloads.com` is registered at GoDaddy and serves Website Builder, but authenticated control and Vercel cutover are pending; no MX exists | **Verified public / founder verification required** | OAuth, webhook, and branded-email work remain gated |
| Dev/stg share zero-user Clerk development instance `ins_3EhjpXH8SIg9bCKF9TYYv7RsHYW`; prd has no Clerk | **Confirmed cross-environment contamination** | Production auth is absent and staging is not isolated; the zero-user state lowers migration risk but does not establish callbacks/webhooks |
| Distinct LogLoads Resend credential reaches Explore&Earn's team; dev/prd reuse that broad key, no LogLoads domain or explicit from-address exists, and a create attempt returned HTTP 403 at the current domain quota | **Confirmed account coupling / current-plan purchase gate** | Email is not independently transferable or production-ready; code falls back to the provider testing sender |
| Public Mapbox token is shared with Explore&Earn/BidSpace; the server-looking Mapbox variable is the same public token. Cloudinary's LogLoads folder is empty and no credential is configured; Stripe/PostHog/Sentry resources are unverified | **Mixed confirmed/unknown state** | Maps/media/telemetry/billing are not transfer-ready; no active Cloudinary cross-write was found |
| Environment example includes provider-admin and multiple agent-webhook credentials | **Observed in repository** | Avoid unnecessarily broad runtime blast radius; apply least privilege |
| First schema, auth mapping, and core logistics domain model remain planned in next-steps docs | **Observed in repository** | Do not operate or market as a production logistics platform |
| Stripe is intentionally subscriptions-only; Connect/brokerage/payment handling is out of scope | **Dated product boundary** | Any scope expansion requires legal/product review and a new decision |
| Staging database and webhook isolation are not documented | **Unknown / founder verification required** | `stg` may not yet represent a safe independent environment |
| Current custom webhook endpoints are not documented in source | **Observed gap** | Do not provision external callbacks until handlers and event contracts exist |
| `LOGLOADS_ENABLE_DEV_LOGIN` is present by name in prd | **Security-review required** | A development bypass could be exposed if the runtime interprets it as enabled |
| Current Mapbox authorization lacks `tokens:read` and `tokens:write` | **Access blocker** | Token restrictions cannot be inventoried and venture-specific replacements cannot be created from the current context |

Reassess after each implemented product slice. The immediate next decision is not “repair Vercel”: approve the persistent-volume single-node host or fund/implement the canonical async-database refactor, then remove unused provider variables rather than carrying speculative access indefinitely.
