# AutomatedEmpires Portfolio Rollout Plan

- **Evidence baseline:** Passes 1–5 and the July 12, 2026 read-only portfolio synthesis
- **Operating state:** The Explore&Earn Controlled Production-Readiness Pass is active in a separate lane
- **This document's authority:** Sequencing and gates; it does not promote a deployment or declare a venture ready

## Executive decision

After the active Explore&Earn pass closes, use vertical, evidence-driven rollout passes in this default order:

1. Sweepza
2. LogLoads
3. Lake & Pine
4. BidSpace
5. ORAN last
6. AutomatedEmpires parent dashboard only when the underlying provider evidence is reliable

Sweepza is the default next venture because it is the closest independent revenue product. If the goal changes to the fastest low-complexity public-service launch, Lake & Pine may move ahead of LogLoads. If the active Explore&Earn pass cannot prove the replacement for the foreign Stripe webhook retained in Sweepza, continue the other Sweepza gates without touching that endpoint or move Lake & Pine ahead temporarily.

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
- Accepted source for six deployed ventures converged to protected `main`; ORAN remains an intentional draft/non-release.
- Six Vercel Production artifacts were recorded `READY`; ORAN has zero Vercel deployments. Artifact status is not functional product proof.
- Seven venture-specific Doppler projects have `dev`, `stg`, and `prd` config names. Name presence does not prove value authority or lane isolation.
- Dedicated Supabase projects exist for the six data ventures; AutomatedEmpires correctly has no established data requirement.
- Separate Sentry projects exist for all seven ventures.
- Six separate PostHog projects were prepared; ORAN remains intentionally without PostHog pending a civic privacy decision.
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
| Sweepza | **3.5/5** | Closest separated operating/revenue asset | Current-main Preview; Production Clerk; Stripe foreign endpoint/residue; telemetry; email remains deliberately deferred |
| AutomatedEmpires | **3.0/5** | Clean public-site asset, not a trustworthy parent dashboard | Website Builder versus Vercel authority; rollback; telemetry; support/recovery |
| Lake & Pine | **2.75/5** | Viable simpler service-site/data asset | Product scope; functional Production/rollback; DNS truth; backup; telemetry |
| BidSpace | **2.25/5** | Deployable provider-host demo | Domain; Production identity/mail; RLS intent; Stripe Connect legal/operating model |
| LogLoads | **2.0/5** | Converged source without live data authority | Backup/live-shape upgrade; provenance; distributed rate limiting; rollback; provider activation |
| ORAN | **1.25/5** | Preserved recovery/redevelopment candidate | Schema/security/check failures; no deployment; broken public target; no recovery artifact |

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

The future Explore&Earn design is not final and must not be locked by the readiness pass. The separate future brief records the expected shared Discovery Card, Seek/Swipe/Map modes, pinned Seek/Swipe/Map/Profile navigation, four-category model, mirrored host/seeker cards, map variants, related cards, and premium/simple/beautiful direction.

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

### 1. Sweepza — independent revenue-product cleanup

Why next:

- It has the strongest current independence score.
- Clean source, owned live domain, dedicated Supabase, and dedicated Stripe live/test boundaries already exist.
- `support@sweepza.com` is founder-owned, and additional aliases are available.
- The remaining pass is bounded enough to reuse the Explore&Earn readiness method.

Scope:

- exact-current-main Preview and functional rollback;
- dark Production Clerk configuration, roles, webhooks, recovery, staging decision, and dev-user handling;
- Supabase backup/restore, lane, RLS ordinary-user, and cron evidence;
- Sentry release/event/alert and PostHog controlled event/privacy proof;
- non-sensitive Stripe residue classification and replacement-before-retirement proof for the foreign Explore&Earn endpoint;
- cost, support, incident, and transfer-owner records.

Constraints:

- Do not remove the foreign endpoint unless the active Explore&Earn pass proves the replacement and Sweepza passes its own rollback gate.
- Do not delete the two unclassified customers or `$0` draft invoice without a separate approved disposition.
- Mail features remain truthfully disabled. Sweepza email activation, sender domain/key, delivery smoke, and alias configuration are deferred to the later Sweepza-specific email stage, despite mailbox ownership.

### 2. LogLoads — establish live data/runtime authority

Why second:

- Its Supabase-canonical source convergence is recent and should be converted into authoritative runtime evidence before it drifts.
- The highest risks are knowable and testable: backup/restore, live-shape upgrade, migration ledger, environment provenance, distributed rate limiting, rollback, and provider activation.
- Resolving this gap prevents a `READY` artifact from masking an unauthoritative live service.

Scope:

- read-only live inventory and encrypted backup;
- migration/schema diff and restore rehearsal against a safe copy;
- environment/lane decision, service-role provenance, RLS ordinary-user tests, and production dev-login disposition;
- distributed rate-limit design/test and exact-main Preview repair;
- functional rollback before any migration;
- then, and only then, Production Clerk, independent email, subscription/account, telemetry, maps, and DNS decisions.

Cost/risk gate: the founder approves the live migration window, operating entity/subscription model, and independent email capacity before those actions.

### 3. Lake & Pine — simpler public-service rollout

Why third:

- It has clean source, owned domain, healthy Supabase/RLS evidence, and the strongest non-Explore&Earn map Preview proof.
- It can be a materially simpler rollout if the product remains a public marketing/lead service.
- Its remaining work is mainly functional Production/rollback, DNS truth, backup, telemetry, operator/support ownership, and explicit scope.

Founder choice: define marketing/lead-generation versus full booking/operations. For marketing-only scope, unused Clerk, Stripe, Resend, and authenticated-user gates may be documented `not applicable` or intentionally deferred. For a full service, create a separate product/auth/payment pass.

Ordering exception: move Lake & Pine ahead of LogLoads if the explicit objective is fastest lower-risk public launch rather than highest-risk authority cleanup.

### 4. BidSpace — decision-gated marketplace preparation

Why fourth:

- Source and a provider-host artifact exist, but rollout is blocked by absent domain and Production identity/mail.
- Stripe Connect requires legal/entity/tax/payout/refund/dispute architecture, not merely technical provisioning.
- Supabase deny-all RLS may be correct for a server-only model or may make the product unusable; intent must be resolved first.

Scope before purchases or live money:

- direct protected-Preview functional proof;
- environment/migration/RLS intent and generated-type reconciliation;
- product role/moderation/support model;
- founder decisions on domain and Connect charge/liability model;
- test-mode-only payment design after those decisions.

Do not purchase a guessed domain or create Production email/Stripe resources early.

### 5. ORAN — recovery-first and last

Why last:

- It has no Vercel deployment and its public Azure target is broken.
- Repository/managed/live schema authority is unreconciled across a large database.
- Security and ancillary checks remain open.
- Azure, Mailgun, data recovery, renewal, ownership, and cost evidence is incomplete.
- Its civic context raises privacy and operator-risk requirements.

Scope:

- authenticated read-only Azure/Mailgun/resource/cost inventory;
- security and ancillary-check triage;
- backup plus schema/migration-ledger reconciliation without blind replay;
- safe Preview data/credential lane;
- exact-SHA Preview for functions, cron, CSP, Leaflet/OpenStreetMap, logs/Sentry, privacy, and rollback;
- only then consider merge, Production candidate, or reversible DNS cutover.

Keep ORAN PostHog-free unless a civic analytics, consent, retention, and owner decision is approved. Do not treat the broken Azure endpoint as rollback.

### 6. AutomatedEmpires parent dashboard — evidence consumer, not evidence source

Why after provider proof:

- The parent public site's technical cutover is simpler, but a portfolio dashboard can make stale or unauthenticated states look authoritative.
- Build it only when child venture records use the common evidence schema and have fresh provider/runtime timestamps.

Initial scope should be private and read-only: venture gate state, evidence age, deployment/rollback IDs, spend, risks, provider links, and owners. It must expose no credentials or customer data and must never infer `pass` from resource existence.

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

1. **Sweepza:** approve the later email-independence budget/timing and aliases; decide Clerk staging/dev-user handling and the eventual non-destructive disposition process for Stripe residue.
2. **LogLoads:** approve the data migration/rollback window, subscription operating entity/pricing, and when independent email capacity should be funded.
3. **Lake & Pine:** choose marketing/lead service versus full booking product; if full service, name the billing entity, refund/cancellation owner, and support model.
4. **BidSpace:** choose the domain and budget, legal entity, Connect charge model, tax, payouts, refunds, and disputes before production provisioning.
5. **ORAN and parent governance:** approve ORAN schema authority/Azure-Mailgun/civic analytics posture, and keep the AutomatedEmpires dashboard deferred until evidence consumers can trust the source records.

## Definition of portfolio rollout progress

The portfolio may be described as **structurally aligned with rollout work in progress**. It must not be described as production-ready, user-ready, money-ready, independent, sellable, or transfer-ready as a whole until every applicable venture gate has current evidence and each claimed transferable venture has passed recipient acceptance.
