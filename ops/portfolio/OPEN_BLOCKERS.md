# Open Infrastructure Blockers

**Verified snapshot:** 2026-07-10

These are the remaining gates after all safe, non-destructive work available in the authenticated session. No blocker below was bypassed by guessing, purchasing, deleting, or changing production traffic.

| Priority | Venture(s) | Blocker | Why execution stopped | Exact owner action |
|---|---|---|---|---|
| P0 | Explore&Earn, Sweepza | Shared live Stripe account, mixed webhooks, and inconsistent business identity | Separating live money movement may require legal identity verification and customer/payment migration approval | Decide the legal Stripe account owner for each venture and authorize creation/verification plus a no-data-loss migration plan |
| P0 | Explore&Earn, LogLoads | One-domain Resend plan couples both ventures to the Explore&Earn account/domain | Creating the LogLoads domain returned HTTP 403; upgrade/payment or a separate account is required | Approve a plan upgrade or create/provide a separate LogLoads Resend account, then authorize DNS records |
| P0 | Explore&Earn, Sweepza, LogLoads | Production Clerk separation is missing | Creating production instances and custom domains requires authenticated dashboard ownership and may invoke plan/identity controls | Create or authorize venture-specific production Clerk instances and complete custom-domain/OAuth/webhook setup |
| P0 | ORAN | Public site target is broken, while the Vercel convergence branch is unmerged and unverified | Connecting/deploying the wrong branch or changing DNS could break recovery and production data flows | Review/merge the convergence branch only after its runtime/CSP/env gaps and Supabase ledger are reconciled; approve a staged cutover |
| P0 | LogLoads | Canonical Vercel production deployment is in ERROR with a missing Next.js server runtime | Promoting the ready preview would deploy unmerged feature work and would not prove a reproducible production build | Fix the package/runtime build on a reviewed branch, produce a clean preview, then deploy main before DNS cutover |
| P0 | Lake & Pine | Ready Vercel production alias is a dirty redeploy from `feat/production-foundation`, not the configured `main` branch | The live app cannot be reproduced from the default-branch snapshot and a later main deploy could replace it | Merge/reproduce the application cleanly, commit its environment contract, and prove preview plus main production before domain work |
| P1 | Explore&Earn, ORAN | Supabase remote migration ledgers do not cleanly explain deployed schemas | Ledger repair is a destructive/high-risk database governance action | Approve a dedicated migration-reconciliation pass with backups and schema diffs |
| P1 | BidSpace | No final production domain is known | Domain naming/purchase is a founder and payment decision | Select the final name and purchase or identify the owned domain |
| P1 | Lake & Pine | lakepinecleaning.com is unregistered | Domain purchase requires payment and ownership choice | Purchase the chosen domain or select a replacement |
| P1 | AutomatedEmpires, LogLoads | Domains still route to GoDaddy Website Builder | No verified production Vercel deployment/rollback target exists for the parent; LogLoads production is broken | Approve DNS cutover only after each canonical deployment passes and the existing zone is exported |
| P1 | All registered domains | Authenticated registrar control and full DNS-zone export were not available through the stopped Chrome session | Public DNS proves routing, not account authority | Launch Chrome with the Codex extension, open the authenticated GoDaddy account, and permit a non-destructive ownership/zone review |
| P1 | Explore&Earn, BidSpace, LogLoads | Shared Mapbox public token; Explore&Earn server token is revoked | Current credential cannot create replacements and no token with tokens:write is available | Create venture/environment-specific restricted tokens in Mapbox and provide them through Doppler |
| P1 | Explore&Earn | Five GitHub repository secrets remain outside Doppler | GitHub values are write-only; removal before tested replacement could break CI | Authorize replacement tokens/password reset where needed, then migrate workflows to Doppler and remove confirmed-unused secrets |
| P2 | Sweepza | Health reports missing Clerk webhook, PostHog, Sentry, and Notion configuration | Missing resources/settings require provider-specific product decisions and credentials | Decide which integrations are production requirements, then provision separate projects/keys and test each endpoint |
| P2 | Multiple ventures | Cloudinary isolation is folder-level inside one free cloud | Independent environments/subaccounts may require a paid plan and media migration | Decide whether transfer-grade separation justifies plan changes; otherwise retain documented signed-folder boundaries |
| P2 | Multiple ventures | PostHog, Sentry, and some provider ownership/retention settings could not be dashboard-verified | No management credentials or active Chrome extension session were available | Provide authenticated dashboard access in a follow-up pass and confirm billing owners, retention, alerts, and data residency |

## Deferred deletion review

Do not delete the Vercel projects explore-and-earn-vercel-fix or sweepza-canary, or the Doppler project example-project, until a human confirms that each is unused and no rollback, CI, domain, or billing dependency remains.
