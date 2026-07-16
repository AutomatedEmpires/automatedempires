# Venture Operations Documentation Agent Contract

> Binding for every agent editing a file under `ops/ventures/`.

## Product authority

Read `docs/VENTURE_OPERATING_DEFINITIONS.md` before planning or editing. That dated founder correction is canonical for product scope. Venture code, provider resources, historical plans, and older readiness evidence describe what existed; they do not silently override product direction.

When facts conflict:

1. preserve dated historical evidence;
2. label it as historical, observed, or superseded for forward planning;
3. update active instructions so they follow the canonical definition; and
4. record any implementation conflict that needs a separate product-code decision.

## Venture boundaries

- Explore&Earn is a seeker-first seasonal/work-travel marketplace. Inspect the actual repo/routes/components/data before a repo-contextual, visionary visual overhaul; preserve the Discovery Card, Seek/Swipe/Map/Profile navigation, four categories, clarity, trust, and map/list/swipe discovery.
- Sweepza discovers and lists third-party sweepstakes/giveaways and supports host/sponsor/partner submissions. It is not the operator by default and must link to official rules/entry.
- LogLoads is forestry/logistics coordination software, not a broker, carrier, payment processor, or dispatch-for-hire service. Production rate limiting needs shared atomic state; evaluate Supabase before Vercel KV/Upstash, and keep in-memory limiting local/development-only.
- Lake & Pine is a cleaning/local-service operating system. Booking and planning are Phase 1; payments are Phase 2.
- ORAN is chat-first civic resource navigation: guided intake, eligibility/location-aware verified-provider matching, issue reporting, agentic sourcing plus human review, provenance/stale handling, urgent escalation, no resource dump, no tracking/pixels, no medical/legal/political/emergency advice, no implied partnerships, and no public launch before its gates pass.
- BidSpace connects hosts and vendors for temporary commercial/vendor spaces; bidding allocates space. It is non-live and not a generic/physical-goods auction; real/public bidding or booking, live money, and Stripe Connect remain disabled pending the applicable gates and approval.
- AutomatedEmpires is the parent command layer for status, providers, rollout, governance, cost/risk, orchestration, and transfer readiness.

## Documentation rules

- Do not infer product requirements from provisioned providers or environment-variable names.
- Do not turn a build, Preview, `READY` deployment, or data schema into a launch claim.
- Do not erase prior evidence to make current planning look cleaner.
- Do not copy secrets, recovery details, customer data, or private provider URLs into documentation.
- Product-definition changes require a new dated founder decision and updates to the canonical definitions, affected venture README/runbook, rollout docs, prompt bank, and growth guardrails.
