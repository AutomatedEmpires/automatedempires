# AutomatedEmpires Portfolio Rollout Plan

- **Evidence baseline:** Passes 1–5 and the July 12, 2026 read-only portfolio synthesis
- **Operating state:** The Explore&Earn Controlled Production-Readiness Pass is active in a separate lane
- **This document's authority:** Sequencing and gates; it does not promote a deployment or declare a venture ready
- **Product authority:** `docs/VENTURE_OPERATING_DEFINITIONS.md`; implementation/provider evidence cannot override it

## Executive decision

After the active Explore&Earn pass closes, use vertical, evidence-driven rollout passes in this default order:

1. Sweepza
2. LogLoads
3. Lake & Pine
4. BidSpace
5. ORAN last
6. AutomatedEmpires parent dashboard only when the underlying provider evidence is reliable

Sweepza is the default next venture for a discovery-platform/source-verification preflight because its relatively separated technical boundary makes product drift easy to isolate. This is not revenue, payment, or sweepstakes-operator activation. Lake & Pine may move ahead of LogLoads when the goal is to advance lower-risk Phase 1 booking/planning slices. If the active Explore&Earn pass cannot prove the replacement for the foreign Stripe webhook retained in Sweepza, continue only read-only product/source work or move Lake & Pine ahead temporarily.

No venture is currently proven transfer-ready. A `READY` deployment, a dedicated provider project, or a completed checklist is not equivalent to a functional release or recipient-tested transfer.

## Evidence used

This plan consolidates the accepted Passes 1–5 reports and the repository evidence in:

- [`../portfolio/VENTURE_REGISTRY.md`](../portfolio/VENTURE_REGISTRY.md)
- [`../portfolio/PROVIDER_RESOURCE_MATRIX.md`](../portfolio/PROVIDER_RESOURCE_MATRIX.md)
- [`../portfolio/OPEN_BLOCKERS.md`](../portfolio/OPEN_BLOCKERS.md)
- [`../portfolio/NEXT_ACTIONS.md`](../portfolio/NEXT_ACTIONS.md)
- [`../portfolio/PASS5_REMEDIATION_STATUS.md`](../portfolio/PASS5_REMEDIATION_STATUS.md)
- the provider-specific matrices under `ops/portfolio/`;
- the per-venture runbooks, environment maps, known limitations, and transfer checklists under `ops/ventures/`;
- `INDEPENDENCE_STATUS_AND_NEXT_STEPS.md`, dated July 12, 2026.

The active Explore&Earn agent's final report will supersede older Explore&Earn runtime evidence. Reconcile that report before beginning Sweepza; do not edit, restate as completed, or pre-judge it here.

## Current portfolio state after Passes 1–5

### What is structurally established

- Seven canonical repositories and seven canonical Vercel projects/shells are identified.
- Accepted source for all seven ventures reached protected `main`; ORAN #67 is merged but remains a protected non-release shell/product candidate.
- Six Vercel Production artifacts were recorded `READY`; ORAN now has protected noindex Preview `dpl_9QdKsovZZcASrdgCqENysSF9XSNd` at `8da2101`. Artifact status is not functional product proof.
- Seven venture-specific Doppler projects have `dev`, `stg`, and `prd` config names. Name presence does not prove value authority or lane isolation.
- Dedicated Supabase projects exist for the six current data ventures; AutomatedEmpires' current public surface has no established data requirement, while future command-layer architecture remains undecided.
- Separate Sentry projects exist for all seven ventures.
- Six separate PostHog projects were prepared; ORAN's MVP prohibits user/behavioral tracking and pixels, so PostHog is not applicable to that MVP.
- Four venture-specific least-scope, origin-restricted Mapbox tokens were created for Explore&Earn, LogLoads, BidSpace, and Lake & Pine.
- Explore&Earn and Sweepza have distinct Stripe account boundaries. Sweepza still retains a foreign Explore&Earn webhook and unclassified non-transactional residue.
- Ten domains were authenticated in prior passes; BidSpace intentionally has no production domain. Public routing and transfer evidence remain mixed.
- Pass 5's verified recurring-spend increase was `$0`; this does not establish a portfolio-wide monthly cost total.

### What remains unproved portfolio-wide

- exact-main functional Preview for the intended release candidate;
- functional Production proof tied to the exact source and environment contract;
- functional rollback, including data and webhook safety;
- authoritative Doppler-to-runtime configuration parity;
- Supabase migration-ledger, ordinary-user RLS, backup, and restore evidence;
- Production Clerk origins, roles, webhooks, recovery, and user-flow proof;
- Stripe test-mode flow, account/runtime identity, legal/tax/payout ownership, and safe live-object disposition;
- independent email tenancy, delivery/reply/bounce proof, support ownership, and safe legacy-key retirement;
- controlled Sentry release/event and PostHog ingestion for most ventures;
- Cloudinary transfer-grade boundaries; folders in the shared Free environment are organization, not access control;
- authenticated Meta, Canva, AI/dev-tool, mailbox, Azure/Mailgun, and other-provider inventories;
- recipient-led transfer rehearsals, billing/recovery acceptance, and post-transfer access removal.

### Venture snapshot

Scores below are operational-independence estimates, not sale valuations. They convert the July 12 evidence scores to a five-point scale.

| Venture | Independence | Current interpretation | Primary next blocker |
|---|---:|---|---|
| Sweepza | **3.5/5** | Separated technical boundary with unresolved non-operator product drift | Source/status/link-out/disclaimer model; legacy entry/winner/billing disposition; Preview/rollback; Clerk; Stripe residue |
| AutomatedEmpires | **3.0/5** | Clean current public surface; command layer remains evidence-dependent | Evidence schema/freshness/access; Website Builder versus Vercel authority; rollback; support/recovery |
| Lake & Pine | **2.75/5** | Cleaning/local-service operating-system foundation | Phase 1 slice/operations decisions; functional Production/rollback; DNS; backup; telemetry |
| BidSpace | **2.25/5** | Non-live provider-host demo | Domain; Production identity/mail; RLS intent; legal/entity/payment model before real bidding/booking/Connect |
| LogLoads | **2.0/5** | Converged coordination source without live data authority | Backup/live-shape upgrade; provenance; shared atomic limiter (Supabase-first); rollback; provider activation |
| ORAN | **1.25/5** | Protected civic-infrastructure recovery candidate | Regional source/provenance/verification/support gates; schema/security/check failures; recovery; no public launch |

Explore&Earn was previously assessed at 3.25/5, but the active controlled pass owns its current score and readiness finding. Do not reuse the older score after that report closes without reconciliation.

## Active Explore&Earn lane

The active agent owns:

- production-readiness investigation and exact-main Preview proof;
- Preview error-boundary diagnosis and rollback proof;
- Clerk dark Preview and auth evidence;
- Stripe test-mode/account/webhook proof;
- Resend smoke;
- Sentry and PostHog events;
- Mapbox Production-readiness;
- Supabase/RLS/ledger sanity;
- `ops/explore-and-earn/PRODUCTION_READINESS_PASS.md` and any related PR.

This parallel pass intentionally avoided:

- Explore&Earn code and all files under `ops/explore-and-earn/`;
- every Explore&Earn provider project/account/app/token/domain/resource;
- Preview, Production, DNS, environment, credential, billing, and live-data mutations;
- deployment, merge, branch closure, credential retirement, deletion, purchase, upgrade, or cleanup;
- implementation of the future Explore&Earn redesign.

The future Explore&Earn design is not final and must not be locked by the readiness pass. Preserve the shared Discovery Card, Seek/Swipe/Map/Profile navigation, exactly four categories, housing/meals/pay clarity, trust, and map/list/swipe discovery. The next design pass prioritizes the homepage, visual hierarchy, typography, color, spacing, layout composition, information placement, premium marketplace feel, dashboard surfaces, and responsive polish. Reopen a core mechanic only with concrete repository evidence of failure and a dated decision.

## Rollout philosophy

Run one venture at a time through one evidence chain:

```text
exact source
  → exact environment contract
  → exact-main functional Preview
  → functional rollback
  → auth/data/email/money/telemetry/maps/media proof
  → explicit go/no-go
  → controlled Production promotion
  → post-promotion verification
  → recipient transfer rehearsal
```

The order is mandatory even if provider resources already exist:

1. **Exact source:** canonical repo, protected clean `main`, candidate full SHA, green required checks, classified security alerts, and known rollback SHA.
2. **Exact environment:** names-only Doppler contract, exact Vercel bindings, provider resource IDs, environment/lane decision, owners, and no foreign consumers.
3. **Exact Preview:** deploy that SHA, then exercise the real route and role flows. A successful build is insufficient.
4. **Rollback:** return to the last-good runtime without breaking data, auth, mail, money, webhooks, DNS, or users. Record recovery time.
5. **Capability proof:** test every applicable provider with ordinary-user, negative, signature, privacy, and alert paths. Mark unused providers `not applicable` with rationale instead of provisioning placeholders.
6. **Promotion decision:** a non-builder reviewer evaluates the completed venture gate. Any required `fail` or `blocked` item is a no-go.
7. **Production:** promote only with explicit authority, monitor, and preserve the tested rollback until exit criteria pass.
8. **Transfer:** a recipient independently deploys, restores, operates, and rolls back before the venture is called transfer-ready.

## Standard artifacts for every venture pass

Create or refresh these artifacts in the venture's operations folder:

1. candidate/release evidence manifest;
2. completed [`VENTURE_GATE_TEMPLATE.md`](VENTURE_GATE_TEMPLATE.md);
3. source, environment, provider, webhook/cron, data, and domain maps;
4. cost inventory with base, month-to-date, forecast, cap/alert, renewal, and owner;
5. deployment, rollback, incident, backup/restore, support/privacy, and provider-escalation runbooks;
6. credential lifecycle register using create → install → verify → zero-use → retire;
7. security/exception register with owner, risk, review date, and closure condition;
8. venture-specific copy of [`TRANSFER_PACKET_TEMPLATE.md`](TRANSFER_PACKET_TEMPLATE.md);
9. recipient acceptance and post-transfer access-removal plan.

Every evidence record should contain:

`evidence ID | venture | gate | provider/resource | environment | immutable SHA/deployment/resource ID | status | verifier | captured time | evidence locator | owner | expiry | dependency/exception`

Use only `pass`, `fail`, `blocked`, `deferred`, or `not applicable` in gate records. Plans and configuration names cannot produce `pass` without runtime/provider evidence.

## Exit check from the active Explore&Earn pass

Before opening the next venture pass:

1. Read the active agent's final report and PR status without modifying its branch or document.
2. Record which Explore&Earn gates passed, failed, remained blocked, or were deferred.
3. Confirm current Production and rollback remain known and no live customer/money state was changed outside approval.
4. Confirm whether a valid Explore&Earn Stripe replacement webhook now exists. This controls Sweepza's foreign-endpoint retirement gate.
5. Confirm whether any shared Resend, Cloudinary, Mapbox, Sentry token, Doppler, or GitHub-secret dependency changed.
6. Update only the new venture's evidence baseline; preserve the active agent's report as the source.
7. If the active pass created an unresolved provider-wide incident, pause operational rollout and work documentation only.

## Recommended post-Explore&Earn venture order

### 1. Sweepza — discovery-platform and source-verification preflight

Why next:

- It has the strongest current operational-independence score, making implementation drift easier to isolate.
- Clean source, owned domain, and dedicated provider boundaries already exist, but they do not authorize operation, entry collection, payments, or winner selection.
- `support@sweepza.com` is founder-owned, and additional aliases are available.
- The correction can begin with a bounded, non-mutating product/source audit before any provider decision.

Scope:

- inventory every entry, winner, rules, eligibility, partnership, notification, and payment surface against the non-operator definition;
- define official-source and host/partner provenance, content rights, official rules/entry link-outs, disclaimers, all seven canonical statuses, expiry, and dispute handling;
- record a keep/repurpose/retire decision for legacy operator-style surfaces and keep them inactive;
- exact-current-main Preview and functional rollback for the accepted discovery/link-out behavior only;
- dark Production Clerk configuration only for approved host/partner listing roles, with least privilege, recovery, webhooks, staging, and dev-user handling;
- Supabase backup/restore, lane, RLS ordinary-user, and cron evidence;
- privacy-bounded Sentry/PostHog proof for approved discovery behavior;
- non-sensitive Stripe residue classification and replacement-before-retirement proof for the foreign Explore&Earn endpoint, with no checkout or billing activation;
- cost, support, incident, and transfer-owner records.

Constraints:

- Do not remove the foreign endpoint unless the active Explore&Earn pass proves the replacement and Sweepza passes its own rollback gate.
- Do not delete the two unclassified customers or `$0` draft invoice without a separate approved disposition.
- Do not run promotions, author rules, determine eligibility, process entries/payments, select winners, guarantee legality/odds, imply partnerships, or collect live entries.
- Do not copy long source descriptions, images, or rules without rights.
- Mail features remain truthfully disabled. Sweepza email activation, sender domain/key, delivery smoke, and alias configuration are deferred to the later Sweepza-specific email stage, despite mailbox ownership.

### 2. LogLoads — establish live data/runtime authority

Why second:

- Its Supabase-canonical source convergence is recent and should be converted into authoritative runtime evidence before it drifts.
- The highest risks are knowable and testable: backup/restore, live-shape upgrade, migration ledger, environment provenance, shared atomic production rate limiting, rollback, and provider activation.
- Resolving this gap prevents a `READY` artifact from masking an unauthoritative live service.

Scope:

- read-only live inventory and encrypted backup;
- migration/schema diff and restore rehearsal against a safe copy;
- environment/lane decision, service-role provenance, RLS ordinary-user tests, and production dev-login disposition;
- Supabase-first shared atomic limiter evaluation; use Vercel-integrated KV/Upstash only if Supabase is documented as unsuitable, and memory only in local/dev; then exact-SHA multi-instance/outage proof and Preview repair;
- functional rollback before any migration;
- then, and only then, Production Clerk, independent email, subscription/account, telemetry, maps, and DNS decisions.

Cost/risk gate: the founder approves the live migration window, operating entity/subscription model, and independent email capacity before those actions.

### 3. Lake & Pine — Phase 1 cleaning-service operating-system rollout

Why third:

- It has clean source, owned domain, healthy Supabase/RLS evidence, and the strongest non-Explore&Earn map Preview proof.
- Its product direction is decided: booking and planning are Phase 1; payments are Phase 2.
- Phase 1 can be sliced across property/preferences, recurring plans, job pipeline/status, communication, operator dashboard, and intelligent estimate direction while Production/rollback, DNS, backup, telemetry, capacity, and support controls mature.

Founder choices: Phase 1 slice order, estimate methodology, scheduling/capacity, customer/staff roles, communication channels, cancellation/support policy, and domain promotion. Stripe/payment/refund/entity work stays in Phase 2. A provider can be `not applicable` only for a specific approved Phase 1 slice, not because Lake & Pine was reduced to a marketing site.

Ordering exception: move Lake & Pine ahead of LogLoads if the explicit objective is fastest lower-risk public launch rather than highest-risk authority cleanup.

### 4. BidSpace — decision-gated marketplace preparation

Why fourth:

- Source and a provider-host artifact exist, but rollout is blocked by absent domain and Production identity/mail.
- Stripe Connect requires legal/entity/tax/payout/refund/dispute architecture, not merely technical provisioning.
- Supabase deny-all RLS may be correct for a server-only model or may make the product unusable; intent must be resolved first.

Scope before purchases or live money:

- direct protected-Preview functional proof;
- environment/migration/RLS intent and generated-type reconciliation;
- host profiles; vendor profiles; temporary-space types/listings/maps; synthetic bidding/application; host–vendor communication; host discovery/outreach; methods/terms verification; trust/moderation/support;
- founder decisions on domain and Connect charge/liability model;
- host-funded listing/placement/promotion/subscription model and test-mode-only payment design after those decisions.

Do not purchase a guessed domain, create Production email/Stripe resources early, or accept real bids/bookings/payments. BidSpace is not live.

### 5. ORAN — recovery-first and last

Why last:

- It has a protected exact-SHA Vercel shell Preview, but runtime provider variables are empty and its public Azure target is broken.
- Repository/managed/live schema authority is unreconciled across a large database.
- Security and ancillary checks remain open.
- Azure, Mailgun, data recovery, renewal, ownership, and cost evidence is incomplete.
- Its civic context raises privacy and operator-risk requirements.

Scope:

- authenticated read-only Azure/Mailgun/resource/cost inventory;
- security and ancillary-check triage;
- backup plus schema/migration-ledger reconciliation without blind replay;
- use the existing protected exact-SHA Preview as the shell/build baseline and establish its safe data/credential lane;
- prove chat-first need/context intake, eligibility/location-aware verified-provider matching, North Idaho/Eastern Washington scope, citations/provenance, stale states, issue reports, agentic sourcing plus human verification, volunteer/admin review, urgent escalation, and no generic resource dump in that controlled candidate;
- prove no user/behavioral tracking or pixels, no medical/legal/political/emergency advice, no implied partnerships, and named support/correction/removal/escalation ownership;
- functions, cron, CSP, Leaflet/OpenStreetMap, privacy-scrubbed runtime logs/Sentry, and rollback;
- only then consider broader access, Production promotion, or reversible DNS cutover.

Keep ORAN free of behavioral analytics and pixels for the MVP. Operational health logs/Sentry must avoid user tracking. Do not treat the broken Azure endpoint as rollback or open public access before data/runtime/support gates pass.

### 6. AutomatedEmpires parent command layer — evidence consumer, not evidence source

Why after provider proof:

- The parent public site's technical cutover is simpler, but a portfolio dashboard can make stale or unauthenticated states look authoritative.
- Build it only when child venture records use the common evidence schema and have fresh provider/runtime timestamps.

Initial scope should be private and read-only: portfolio status, provider map, rollout board, governance registry, cost/risk visibility, task orchestration, and transfer-readiness state with evidence age, deployment/rollback IDs, links, and owners. It must expose no credentials or customer data and must never infer `pass` from resource existence. Do not turn it into a generic AI agency surface.

The parent public domain/Website Builder cutover, Sentry/PostHog proof, rollback, privacy/support, and transfer packet remain a distinct AutomatedEmpires site pass.

## Parallel-work policy

While a venture owns an operational rollout lane, safe parallel work is limited to:

- read-only evidence review for other ventures;
- documentation/templates/design briefs outside the active venture folder;
- founder legal/product decisions;
- cost-inventory preparation from already captured non-secret evidence.

Do not run another full provider or Production pass concurrently. Shared parent organizations, billing, tokens, mail tenancy, and legacy rollback dependencies make apparently separate changes interact. Sweepza in particular depends on Explore&Earn Stripe endpoint proof; LogLoads has an email authority that reaches the Explore&Earn team.

## Stop conditions

Stop promotion and preserve the last-good state when any of these occurs:

- candidate SHA, repository, project, or environment cannot be proven;
- required checks or critical/high security gates fail;
- Preview hits an error boundary or a required flow cannot be exercised;
- rollback is absent, broken, or would corrupt/miss writes;
- migration ledger/schema/RLS intent is unreconciled;
- auth role/recovery/webhook behavior fails;
- money account identity, signature, idempotency, or legal owner is unclear;
- mail domain, reply mailbox, suppression, or reputation boundary is unclear;
- telemetry captures secrets or private data;
- provider billing/transfer/recovery authority is unknown for a release-critical resource;
- the work requires deletion, live-data mutation, credential retirement, a purchase, a plan upgrade, or a broader change without approval.

`blocked` is an honest outcome. A truthful disabled capability is safer than a hidden dependency presented as healthy.

## Founder decisions needed to keep the sequence moving

1. **Sweepza:** approve source classes, verification/moderation ownership, content rights/disclaimers, canonical state transitions, and the legacy-flow keep/repurpose/retire plan; later decide non-operator monetization, email, Clerk roles, and Stripe residue disposition.
2. **LogLoads:** decide whether Supabase meets shared-limiter requirements and approve a fallback provider/cost only if it does not; approve the data migration/rollback window, subscription operating entity/pricing, and independent email timing.
3. **Lake & Pine:** choose Phase 1 slices, estimate and scheduling/capacity rules, customer/staff roles, communication channels, cancellation/support ownership, and domain timing; payment/entity/refund decisions are Phase 2.
4. **BidSpace:** choose the domain and budget, legal entity, Connect charge model, tax, payouts, refunds, and disputes before production provisioning.
5. **ORAN and parent governance:** approve ORAN schema authority, source/verification/stale/support policy, and Azure-Mailgun posture; behavioral analytics/pixels remain prohibited for the MVP. Define AutomatedEmpires command-layer access and freshness before it consumes child evidence.

## Definition of portfolio rollout progress

The portfolio may be described as **structurally aligned with rollout work in progress**. It must not be described as production-ready, user-ready, money-ready, independent, sellable, or transfer-ready as a whole until every applicable venture gate has current evidence and each claimed transferable venture has passed recipient acceptance.
