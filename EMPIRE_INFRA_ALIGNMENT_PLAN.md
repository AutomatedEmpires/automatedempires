# AutomatedEmpires Portfolio Infrastructure Alignment Plan

**Prepared:** 2026-07-10
**Last reconciled:** 2026-07-10

> Product-definition correction (2026-07-12): `docs/VENTURE_OPERATING_DEFINITIONS.md` is canonical for product scope. This plan's dated provider and implementation observations remain historical evidence, but they do not authorize a conflicting product model.

**Operating model:** Shared ownership. Separated operations.
**Status:** Historical 2026-07-10 alignment baseline. Use `ops/execution/PORTFOLIO_EXECUTION_COMMANDER_LOG.md`, current `ops/portfolio/` records, and the canonical definitions for forward execution.

This plan contains resource names and configuration-variable names only. It must never contain secret values.

## 1. Ventures discovered

| Venture | Canonical slug | Role | Implementation state observed 2026-07-10 |
|---|---|---|---|
| AutomatedEmpires | `automatedempires` | Parent operator and command layer | Current implementation is a Next.js public portfolio surface; protected Vercel PR preview is `READY` after the security dependency patch |
| Explore&Earn | `explore-and-earn` | Seeker-first seasonal/work-travel marketplace | Mature Next.js monorepo; canonical Vercel production is `READY` and a dedicated Supabase project is healthy |
| ORAN | `oran` | Civic resource infrastructure | Mature Next.js application; an unmerged branch intentionally removes Azure deployment assets for Vercel, and an empty Vercel shell is reserved but deliberately unconnected/undeployed |
| BidSpace | `bidspace` | Non-live vendor/temporary-space/auction-like marketplace infrastructure | Early Next.js monorepo; Vercel Git connection and healthy Supabase project verified, initial deployment pending |
| Lake & Pine | `lake-and-pine` | Intelligent cleaning/local-service operating system | Next.js workspace with `READY` Vercel deployment and healthy Supabase project; owned custom domain is still missing |
| Sweepza | `sweepza` | Sweepstakes/giveaway discovery and host/partner listing platform; non-operator by default | Next.js application; canonical Vercel production is `READY` and a dedicated Supabase project is healthy |
| LogLoads | `logloads` | Forestry/logistics coordination software; non-broker/carrier/payment/dispatch-for-hire | Early Next.js monorepo; Vercel preview is `READY`, production fails with `ENOENT`, and its dedicated Supabase project is healthy |

## 2. Repositories discovered

All requested repositories are owned by the authenticated GitHub user account `AutomatedEmpires`. This is intentional shared ownership, not shared runtime identity.

| Venture | GitHub repository | Default branch | Local inspection state |
|---|---|---|---|
| AutomatedEmpires | `AutomatedEmpires/automatedempires` | `main` | Clean clone; working branch `codex/infra-alignment-2026-07-10` |
| Explore&Earn | `AutomatedEmpires/explore-and-earn` | `main` | Clean inspection clone |
| ORAN | `AutomatedEmpires/Open-Resource-Access-Network` | `main` | Clean inspection clone |
| BidSpace | `AutomatedEmpires/bidspace` | `main` | Clean inspection clone |
| Lake & Pine | `AutomatedEmpires/lakeandpine` | `main` | Clean inspection clone |
| Sweepza | `AutomatedEmpires/sweepza` | `main` | Clean inspection clone |
| LogLoads | `AutomatedEmpires/logloads` | `main` | Clean inspection clone |

No pre-existing local venture checkout with uncommitted work was modified. An empty local placeholder checkout at `OneDrive/Documents/AutomatedEmpires` was left untouched.

## 3. Provider resources discovered

Repository-level dependency discovery and subsequent provider verification found the following surface. Providers described only as referenced or planned are not proof of an account resource.

| Venture | Provider surface evidenced in code or committed documentation |
|---|---|
| AutomatedEmpires | GitHub; Doppler project with `dev`/`stg`/`prd` metadata only; Vercel project with Git connected and a `READY` protected PR preview; Resend, PostHog, Cloudinary, and Sentry remain referenced/planned |
| Explore&Earn | GitHub; Doppler project (`dev` populated by name, `stg`/`prd` metadata only); Vercel production `READY`; healthy Supabase project; Clerk, Stripe, Resend, PostHog, Cloudinary, Mapbox, and Sentry integration names present; OpenAI/AI Gateway also referenced |
| ORAN | GitHub; current Azure App Service/PostgreSQL/Key Vault/Maps/AI/Communication Services architecture; Doppler metadata-only configs; healthy Supabase project referenced by the convergence work; empty deferred Vercel shell; Sentry and remaining Azure resources require ownership reconciliation |
| BidSpace | GitHub; Doppler project (`dev` populated by name, `stg`/`prd` metadata only); Vercel Git connected with no deployment; healthy Supabase project; Clerk, Stripe Connect, PostHog, Cloudinary, Mapbox, Sentry, and OpenAI referenced |
| Lake & Pine | Vercel production `READY`; healthy Supabase project; Doppler `stg`/`prd` contain verified Vercel imports while `dev` is metadata only; Clerk, Stripe, Resend, PostHog, and Sentry remain to be verified |
| Sweepza | GitHub; Doppler variables present across `dev`/`stg`/`prd`; Vercel production `READY`; healthy Supabase project; Clerk, Stripe, Resend, PostHog, and Sentry integrations present; Cloudinary and Mapbox also appear in planning material |
| LogLoads | GitHub; Doppler variables present across configs; Vercel preview `READY` and production `ERROR` with `ENOENT`; healthy Supabase project; Clerk, Stripe, Resend, PostHog, Cloudinary, Mapbox, and Sentry names are present or planned |

## 4. Known domains

| Domain | Venture | Evidence | Ownership / DNS status |
|---|---|---|---|
| `automatedempires.com` | AutomatedEmpires | Public RDAP/DNS | Registered at GoDaddy with GoDaddy nameservers; apex resolves to GoDaddy Website Builder |
| `exploreandearn.com` | Explore&Earn | Public RDAP/DNS | Registered at GoDaddy with GoDaddy nameservers; apex and `www` resolve to Vercel; no MX found |
| `openresourceaccessnetwork.com` | ORAN | Public RDAP/DNS | Registered at GoDaddy with GoDaddy nameservers; apex A record points to a broken Azure target (HTTP 404 and invalid TLS) and Mailgun MX is present |
| `lakepinecleaning.com` | Lake & Pine | Public RDAP/DNS | Unregistered; no DNS |
| `sweepza.com` | Sweepza | Public RDAP/DNS | Registered at GoDaddy with GoDaddy nameservers; apex and `www` resolve to Vercel; Microsoft 365/Outlook MX is present |
| `logloads.com` | LogLoads | Public RDAP/DNS | Registered at GoDaddy with GoDaddy nameservers; apex resolves to GoDaddy Website Builder; no MX found |

Provider-generated hosts such as `*.vercel.app`, `*.azurewebsites.net`, and `*.supabase.co` are runtime endpoints, not owned portfolio domains.

## 5. Missing domains

Domain blockers now verified are:

- `bidspace` — domain decision/purchase is a known blocker; no domain will be invented.
- `lake-and-pine` — candidate `lakepinecleaning.com` is unregistered and has no DNS; purchase requires human approval.

The BidSpace state is **not discovered**, not proof that the user lacks every possible domain. Public registration results do not prove authenticated registrar-account control for registered domains. Domain changes remain blocked until that control is verified.

## 6. Cross-contamination observed at the baseline

- Automated scanning found no committed live-key pattern shared across two venture repositories.
- No duplicate secret fingerprint was found across tracked files.
- No real `.env` file is committed in the inspected default branches; committed `.env.example` files contain variable names/placeholders.
- GitHub ownership is shared under the parent account, while repository boundaries are separate.
- A Cloudinary-shaped example URI exists in `explore-and-earn/docs/audit/INTEGRATIONS_STATE.md`. It appears instructional, but it is quarantined as a documentation-hygiene finding until confirmed and normalized.
- Explore&Earn, BidSpace, and LogLoads currently share one browser-visible Mapbox token. Replacement tokens must be venture/environment-specific before the shared token is retired.
- Explore&Earn and LogLoads have distinct Resend credentials, but both access the same Resend account/domain because the current paid plan supports one domain. This is account/domain coupling, not credential reuse, and prevents independent transfer until separated.
- Vercel duplicate candidates `sweepza-canary` and `explore-and-earn-vercel-fix` are classified `delete-review` only; neither is authorized for deletion.
- Other provider-dashboard contamination remains possible until Clerk, Stripe, PostHog, Cloudinary, webhook, and environment ownership are verified.

## 7. Provider resources verified or unresolved at the baseline

The initial all-provider unknown state is no longer current:

- **Doppler:** all seven venture projects exist with root `dev`, `stg`, and `prd` configs. AutomatedEmpires and ORAN contain metadata only. Detailed names-only state is recorded under `ops/secrets/`.
- **Vercel:** venture projects exist for all seven slugs. ORAN is an intentionally empty shell pending merge/preview verification of the existing convergence branch. AutomatedEmpires has a `READY` protected PR preview; BidSpace has no deployment; Explore&Earn, Lake & Pine, and Sweepza are `READY`; LogLoads preview is `READY` while production fails with `ENOENT`.
- **Supabase:** healthy dedicated project references exist for Explore&Earn, ORAN, BidSpace, Lake & Pine, Sweepza, and LogLoads. AutomatedEmpires has no project and no current need. ORAN's project is referenced by the convergence work, but its one-row remote migration ledger does not explain the deployed schema.
- **Domains/DNS:** public RDAP and DNS state is recorded in `ops/portfolio/DOMAIN_DNS_MATRIX.md`. Public records do not prove authenticated registrar control.
- **Still unresolved:** production boundaries for Clerk, Stripe, Resend, Mapbox, some PostHog/Sentry resources, Cloudinary transfer isolation, webhooks, and the live Azure estate remain blocked or incomplete. Provider-specific matrices record the verified identities and exact gaps.

Likely intentional non-requirements:

- ORAN's repository already contains an intentional Azure-to-Vercel convergence branch. Portfolio policy does not authorize connecting/deploying it before merge, preview, schema, CSP, cron, and rollback verification.
- Lake & Pine now has a Vercel runtime and Supabase project. Booking and planning are Phase 1; payments are Phase 2. Auth, communication, and payment resources still require a reviewed consumer and environment plan.
- AutomatedEmpires' current runtime is a public portfolio surface; its product direction is the parent command layer. Add providers only for reviewed command-layer consumers, never merely for stack symmetry.

## 8. Unsafe or ambiguous areas

- Production keys, database ownership, customer/payment data, webhook consumers, and live deployment routing are unknown at account level.
- Stripe account creation may trigger legal identity, business, tax, or payout verification.
- Domain purchase and ownership transfer require human action.
- Resend domain activation requires verified DNS ownership.
- ORAN contains mature Azure infrastructure and a deliberate migration branch; the move must follow that reviewed intent and a reversible cutover, not generic portfolio pressure.
- Secret rotation is unsafe until replacement resources are deployed and verified end to end.
- Stale provider projects must be categorized before any deletion; deletion is out of scope without clear production-safety evidence.

## 9. Proposed target state

Each venture receives its own documented runtime identity:

- one canonical GitHub repository boundary;
- one business-specific secrets project with `dev`, `stg`, and `prd` configs where the provider and plan support them;
- one intended deployment project or an explicitly documented Azure equivalent;
- venture-specific database, auth, payment, email, analytics, media, maps, error-monitoring, DNS, and webhook resources only when the product uses them;
- secret-name maps with no values, business-specific webhook inventories, and environment ownership;
- an independent transfer checklist and an explicit record of shared parent-level governance.

AutomatedEmpires owns portfolio policy and metadata. It does not supply another venture's production runtime secrets.

## 10. Execution order

1. **Completed:** local repository and dependency inventory.
2. **Completed:** public domain/DNS snapshot and provider-generated endpoint inventory.
3. **Completed for accessible surfaces:** provider verification without revealing secret values; inaccessible ownership/settings are explicit blockers.
4. **Completed:** current-state, target-state, contamination, provider, blocker, and transfer matrices exist under `ops/`.
5. **Partially completed:** all seven Doppler projects/configs exist; safe population and environment separation remain.
6. **Partially completed:** intended Vercel projects and Git links are recorded; ORAN is deliberately deferred, LogLoads production is broken, and undeployed shells remain.
7. **Completed read-only inventory:** database, auth, Stripe, Resend/DNS, analytics, media, maps, and error-monitoring resources; writes requiring payment, identity, unavailable permissions, or production risk were deferred.
8. **Completed review:** GitHub Actions and secret-name usage; five write-only Explore&Earn repository secrets remain until replacements exist.
9. **Completed:** redacted cross-venture fingerprint checks and safe rotation plans.
10. **Completed in proportion to changes:** provider settings, public pages/health endpoints, and preview state; no app source was changed.
11. **Completed:** portfolio and venture runbooks under `ops/`.
12. **Completed:** unresolved billing, identity, domain, dashboard, ownership-transfer, and production-risk gates are exact actions in `OPEN_BLOCKERS.md` and `NEXT_ACTIONS.md`.
