# LogLoads known limitations

| Limitation | Classification | Operational effect |
|---|---|---|
| Repository is an early foundation/scaffold and most provider integrations are placeholders | **Observed in repository** | Provider names and env variables do not prove runtime readiness |
| Vercel Git/main/root are now aligned, but the healthy preview and errored production were both dirty `feature/backend-foundation` artifacts; production also fails with `ENOENT` | **Verified current** | No reproducible main-based production deployment or safe DNS cutover exists |
| Supabase has 36 RLS application tables, one zero-policy table, and six migrations; backups/lane separation remain unverified | **Verified current / owner gap** | No remote DB operation is safe without comparison |
| `logloads.com` is registered at GoDaddy and serves Website Builder, but authenticated control and Vercel cutover are pending; no MX exists | **Verified public / founder verification required** | OAuth, webhook, and branded-email work remain gated |
| Dev/stg share Clerk development instance `ins_3EhjpXH8SIg9bCKF9TYYv7RsHYW`; prd has no Clerk | **Confirmed cross-environment contamination** | Production auth is absent and staging is not isolated |
| Distinct LogLoads Resend credential reaches Explore&Earn's one-domain account; adding a LogLoads domain returned HTTP 403 plan limit | **Confirmed account coupling / paid gate** | Email is not independently transferable |
| Public Mapbox token is shared with Explore&Earn/BidSpace; Cloudinary is folder-only in one free cloud; Stripe/PostHog/Sentry resources are unverified | **Mixed confirmed/unknown state** | Maps/media/telemetry/billing are not transfer-ready |
| Environment example includes provider-admin and multiple agent-webhook credentials | **Observed in repository** | Avoid unnecessarily broad runtime blast radius; apply least privilege |
| First schema, auth mapping, and core logistics domain model remain planned in next-steps docs | **Observed in repository** | Do not operate or market as a production logistics platform |
| Stripe is intentionally subscriptions-only; Connect/brokerage/payment handling is out of scope | **Dated product boundary** | Any scope expansion requires legal/product review and a new decision |
| Staging database and webhook isolation are not documented | **Unknown / founder verification required** | `stg` may not yet represent a safe independent environment |
| Current custom webhook endpoints are not documented in source | **Observed gap** | Do not provision external callbacks until handlers and event contracts exist |
| `LOGLOADS_ENABLE_DEV_LOGIN` is present by name in prd | **Security-review required** | A development bypass could be exposed if the runtime interprets it as enabled |

Reassess after each implemented product slice; remove unused provider variables rather than carrying speculative access indefinitely.
