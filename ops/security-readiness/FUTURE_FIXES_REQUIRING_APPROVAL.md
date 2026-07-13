# Future Fixes Requiring Approval

Date: 2026-07-12. These actions were intentionally not performed because they can alter production behavior, governance, data, provider state, or accepted design truth.

> Later execution supersession (2026-07-12): ORAN PR #67 merged at `8da2101`, the 15 reviewed visual baselines were accepted, and protected noindex Preview `dpl_9QdKsovZZcASrdgCqENysSF9XSNd` was created. Rows below preserve the earlier approval snapshot; they no longer instruct merging #58 or accepting those baselines. Product/data/runtime/support/rollback proof and any broader rollout remain unapproved.

| Fix | Repo | Why approval required | Risk if ignored | Risk if performed | Recommended default |
|---|---|---|---|---|---|
| Merge/cut over draft PR #58 | ORAN | 166-file architecture convergence plus preview-data, rollback, migration, and Azure-exit implications | Azure exit and rollout remain blocked | Data exposure, outage, or irreversible cutover error | Keep draft until isolated data lane and rollback proof are green |
| Accept 15 visual baselines | ORAN | Baselines become design truth | Visual gate remains red | Regressions may be blessed as expected | Generate artifacts, require human visual review, then commit |
| Refresh 26 runbook review dates | ORAN | Dates are operational attestations, not formatting | Stale incident/recovery guidance | False assurance if dates are advanced without review | Owners review content before changing dates |
| Upgrade OpenTelemetry/Application Insights graph | ORAN | Observability/runtime graph has broad compatibility surface | High/medium advisories remain | Telemetry loss or runtime instability | Plan a separate tested dependency PR |
| Merge Next update PR #64 | ORAN | Production framework update still leaves failing audit/base gates | Known Next advisories remain | Runtime/build behavior can change | Fix base gates, test preview, then seek approval |
| Force uuid/PostCSS audit fixes | ORAN | npm proposes breaking downgrades/major graph changes | Advisories remain | Severe framework/auth regressions | Never force; upgrade owning parents deliberately |
| Supabase CLI 1→2 upgrade or tar override | BidSpace | Database tooling major/override can change generated or migration behavior | Six high tar alerts remain | Broken local/database workflows | Test isolated override first; approve major only if required |
| Add rate-limit infrastructure to public write routes | Lake & Pine | Requires architecture/provider/cost choice | Abuse and automation remain easier | Availability/cost impact if misconfigured | Add code-level tests first; choose infrastructure separately |
| Add coordinate database constraints/migration | Lake & Pine | Schema and live-data compatibility must be reviewed | Invalid coordinates can reach runtime | Migration failure or rejected existing data | Validate data and stage a reviewed migration |
| Reconcile discovery/source roles, then activate only approved providers | Sweepza | Current operator-style entry/winner/billing/mail surfaces conflict with the non-operator default; provider changes can affect users, money, and email | Product drift and rollout blockers remain | Unapproved promotion operation, live-user/payment/email incidents | Complete source/status/link-out/disclaimer and legacy-flow decisions first; keep entry, payment, winner, and mail activation disabled unless a later approved consumer requires it |
| Move privileged helpers from exposed schema | LogLoads | Requires reviewed RLS/schema migration plus live advisor verification | Exposed-schema privileged surface remains | Auth/RLS outage if incorrect | Validate locally, then schedule controlled migration |
| Prove shared atomic production rate-limit state | LogLoads | Supabase-first architecture evaluation; provider/cost approval only if fallback is needed | Multi-instance bypass remains until shared state is configured | Added latency/cost/outage mode | Evaluate Supabase atomicity/latency/availability/observability/cost first; use Vercel KV/Upstash only if unsuitable; memory local/dev; prove exact-SHA multi-instance/outage semantics |
| Apply canonical migrations or verify live cutover | LogLoads | Live data/provider operation | Code/live schema may diverge | Data loss or outage | Separate controlled migration pass |
| Enforce human reviews, CodeQL/audit checks, and admin protection | Portfolio repos | Repository-governance change can block urgent workflows | Builder/admin bypass remains | CI deadlock or emergency friction | Founder/repo-owner decision with break-glass plan |
| Bundle major framework/tool upgrades | All | Next 16, ESLint 10, Tailwind 4, TypeScript 7, Zod 4, and similar changes have migration cost | Freshness debt grows | Cross-cutting regressions become hard to isolate | One ecosystem/venture at a time with dedicated validation |

## Approval boundary preserved

No provider configuration, production deployment, DNS, billing, account, RLS, live migration, data, payment, email, or branch-protection changes were made. No PR was merged or closed, and no existing branch was deleted.
