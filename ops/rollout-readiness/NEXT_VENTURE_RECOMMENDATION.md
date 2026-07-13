# Next Venture Recommendation After Explore&Earn

**Recommendation:** Run the **Sweepza Discovery-Platform and Source-Verification Preflight** next.

`docs/VENTURE_OPERATING_DEFINITIONS.md` controls product scope. This preflight must correct the product boundary before it advances providers or rollout status.

This recommendation assumes the active Explore&Earn agent completes its pass and publishes an evidence-backed outcome. Completion does not mean every Explore&Earn gate passed. Reconcile its result first, especially the status of the replacement Explore&Earn Stripe webhook and any shared Resend, Cloudinary, Mapbox, Sentry-token, Doppler, or GitHub-secret dependency.

## Why Sweepza is next

Sweepza has the highest operational-independence score among the non-Explore&Earn ventures and therefore offers the clearest place to reconcile product direction with existing implementation. Its source, domain, Supabase, Clerk, Stripe, Sentry, and PostHog evidence do not make it a sweepstakes operator or authorize entry/payment/winner flows.

The corrected model is official-source discovery plus sponsor/host/partner submissions, official rules and entry link-outs, clear disclaimers, and canonical states: `sourced_unverified`, `source_verified`, `host_claimed`, `partner_verified`, `expired`, `removed`, and `disputed`. Sweepza does not set rules, determine eligibility, process entries/payments by default, select winners, guarantee legality/odds, or imply partnerships.

The founder now owns `support@sweepza.com`, and many Sweepza aliases can be created later. That materially improves mailbox/support ownership, but it does not prove transactional-email independence. Resend team/domain/key placement, sender verification, quota, delivery/reply, bounce/suppression, and runtime activation remain deferred to the Sweepza-specific pass. Do not activate email during the current parallel work.

Sweepza's blockers are serious but bounded:

- Existing entry, winner, approval/hold, and host-billing surfaces lack a reviewed keep/repurpose/retire disposition under the non-operator model.
- Official-source provenance, content rights, rules/entry link-outs, disclaimers, listing-state transitions, disputes, expiry, and host/partner verification require acceptance.
- Production still uses development Clerk; staging isolation, role/webhook/recovery proof, and dev-user handling remain open.
- A fresh exact-current-main Preview and functional rollback are required.
- The Stripe account retains a foreign Explore&Earn webhook, two unclassified customers, and one `$0` draft invoice.
- The foreign endpoint must remain until the active Explore&Earn pass proves its replacement and Sweepza proves its own safe path.
- No residual customer/invoice object may be deleted without a separate approved disposition.
- Supabase restore/lane/cron evidence and controlled Sentry/PostHog proof remain open.

## Comparative evaluation

Scores are evidence-based independence estimates on a five-point scale, converted from the July 12, 2026 ten-point synthesis. They are not valuations. Difficulty assumes the present documented product scope and can change after founder decisions.

| Venture | Independence | Current blocker | Risk | Cost risk | Production difficulty | Money difficulty | User difficulty | Full pass safely parallel with active E&E? |
|---|---:|---|---|---|---|---|---|---|
| **Sweepza** | **3.5/5** | Non-operator product reconciliation; source verification/status/link-outs; legacy entry/winner/billing disposition; Preview/rollback; Clerk; foreign Stripe residue | High | Medium | High | Deferred by product/legal scope | High | **No.** Docs and non-mutating source review only; endpoint/email dependencies overlap E&E evidence. |
| **LogLoads** | **2.0/5** | Live database upgrade/authority, backup/restore, provenance, shared atomic limiter (Supabase-first), provider activation, rollback | Very high | Medium | Very high | High | Very high | **No.** Read-only preflight only; legacy email authority reaches the E&E team. |
| **Lake & Pine** | **2.75/5** | Phase 1 slice/operations decisions, functional Production/rollback, DNS truth, backups/lanes, telemetry, operator/support flow | Medium | Medium | Medium | Phase 2 | Medium | **Partially.** Isolated read-only/docs work is safe; delay full provider/Production mutations until E&E closes. |
| **BidSpace** | **2.25/5** | No domain; Production auth/mail absent; RLS intent; Stripe Connect legal/operating model | High | Medium–high | High | Very high | High | **Decision work only.** Domain/legal/RLS design may proceed; no purchase or production provisioning. |
| **ORAN** | **1.25/5** | Protected shell Preview with empty runtime providers; broken public target; schema/ledger mismatch; product/data/support/recovery gates | Critical | High/unknown | Very high | N/A — no MVP money flow | Very high | **Read-only inventory and controlled protected-Preview proof only.** A full rollout pass is too risky and unrelated to the current active lane. |
| **AutomatedEmpires dashboard** | **3.0/5** for the site, not the dashboard | Underlying provider evidence is not yet reliable; site DNS/rollback/telemetry also open | Medium | Low–medium | Medium | N/A | Low–medium | **Documentation only.** Building now would encode stale or unproved child states. |

## Recommended next pass by venture

### Sweepza

**Pass:** Discovery-Platform and Source-Verification Preflight.

1. Inventory every route, table, job, notification, rule, entry, winner, eligibility, partnership, and payment behavior against the non-operator definition.
2. Define official-source and host/partner submission provenance, content-rights rules, official rules/entry link-outs, disclaimers, expiry/dispute handling, and all seven canonical statuses.
3. Produce an explicit keep/repurpose/retire plan for legacy entry, winner, approval/hold, notification, and host-billing surfaces; activate none of them.
4. Snapshot current `main`, Vercel Production, domain, names-only environment contract, and rollback; use a controlled Preview only for the accepted discovery/link-out behavior.
5. Reconcile Supabase lanes, RLS ordinary-user behavior, backup/restore, cron authentication, and last-success evidence without collecting live entries.
6. Configure dark Production Clerk only if required for approved host/partner listing roles; prove origins, redirects, recovery, least-privilege roles, webhook signatures/retries, and dev-user handling in Preview.
7. Classify Stripe residue using non-sensitive metadata. Do not provision or test a checkout until a later product/legal decision approves a non-operator monetization model; touch no live customer/money state.
8. Keep transactional email truthfully disabled. A later mail design may support source/claim/listing-status communication but must not imply Sweepza selects winners.
9. Complete privacy-preserving telemetry, cost, incident, support, backup, provider-escalation, and transfer-owner records.

**Founder decision:** approve source classes, verification/moderation ownership, content-rights/disclaimer policy, status transitions, and the keep/repurpose/retire plan; later decide non-operator monetization, Clerk role strategy, email capacity, and the separate non-destructive disposition for Stripe residue.

### LogLoads

**Pass:** Live Data Authority and Runtime Provenance.

Start with read-only shape/ledger/consumer inventory, backup, safe-copy restore and upgrade rehearsal, environment provenance, and functional rollback. For rate limiting, evaluate shared atomic state in this order: Supabase first; Vercel-integrated KV/Upstash Redis only if Supabase is documented as unsuitable; in-memory only for local/dev. Prove exact-SHA multi-instance and outage behavior before other provider or DNS activation.

**Founder decision:** whether Supabase meets limiter atomicity/latency/availability/observability/cost requirements; approval and budget for a fallback state provider only if it does not; migration window and rollback tolerance; subscription operating entity/pricing; independent mail capacity and timing.

### Lake & Pine

**Pass:** Phase 1 Cleaning-Service Operating-System Rollout.

Lake & Pine is already defined as an intelligent cleaning/local-service operating system. Sequence Phase 1 across booking requests, service planning, property profiles, room/checklist preferences, pets/access notes, recurring plans, internal job pipeline, service status/follow-up, customer communication, operator dashboard, and intelligent estimate direction. Reconcile DNS, exact-source Production/rollback, backup/restore, lanes, telemetry, support operations, and mail-preserving web cutover around those slices. Keep payments in Phase 2.

**Founder decision:** Phase 1 slice order, estimate methodology, capacity/scheduling rules, customer/staff roles, communication channels, domain promotion, cancellation policy, and support owner. Payment/refund/entity decisions remain a Phase 2 gate.

### BidSpace

**Pass:** Domain, Data-Intent, and Marketplace Decision Gate.

Model the actual host–vendor temporary-space marketplace: host profiles for venue/event/property/business, space/rules/foot-traffic/requirements/photos/terms; vendor profiles for products/setup/requirements/history/trust; booths/stalls/food-truck pads/kiosks/pop-ups/event/table/sponsor/yard/farm/local-commercial spaces; maps where relevant; bidding/application; communication; host discovery/outreach; methods/terms verification; and marketplace trust. It is not a generic or physical-goods auction.

Prove those surfaces in protected Preview with synthetic/demo-only data, decide whether deny-all RLS is intentional, and reconcile environments/migrations/types/roles/moderation. BidSpace remains non-live. Potential host listing/placement/promotion/subscription fees are future revenue direction only; live payments and Stripe Connect require legal/entity/operating/payment approval.

**Founder decision:** name/domain/budget; legal entity; Connect charge model; tax, payout, refund, dispute, fraud, and support responsibility.

### ORAN

**Pass:** Recovery-First Schema and Deployment Authority.

Keep last. Inventory Azure/Mailgun/RBAC/billing/retention read-only, back up and reconcile migrations/ledger/schema, and use protected exact-SHA Preview `dpl_9QdKsovZZcASrdgCqENysSF9XSNd` as the shell/build baseline. Its runtime provider variables are empty. Prove chat-first guided intake across need, location, age, urgency, eligibility, relevant household context, transportation/access, language/accessibility, and service domain; actionable verified-provider recommendations; North Idaho/Eastern Washington scope; citations/provenance; stale handling; issue reporting; agentic sourcing plus human verification; volunteer/admin review; crisis escalation; no generic resource dump; no user/behavioral tracking or pixels; no medical/legal/political/emergency advice; no implied partnerships; support; and recovery before public access or DNS.

**Founder decision:** authoritative schema/migration method; approved sources and verification service levels; stale thresholds; support owner; Azure/Mailgun disposition; registrar renewal; recovery/cutover risk acceptance. Behavioral analytics/pixels are not an MVP option.

### AutomatedEmpires parent dashboard

**Pass:** Evidence-Backed Parent Command Layer, delivered in read-only slices first.

Do not build until the venture gate/evidence schema is adopted and provider/runtime records are fresh. Start private and read-only; show evidence age, statuses, risks, spend, deployment/rollback IDs, owners, and links without secrets or customer data. Separately prove the parent site's Vercel/Website Builder authority, rollback, telemetry, privacy/support, and transfer access.

**Founder decision:** evidence-freshness policy, who may see cost/risk/user/revenue data, and when public Website Builder replacement is authorized.

## Goal-based alternative

| Founder objective | Best next choice | Reason |
|---|---|---|
| Correct a high-independence product boundary | **Sweepza** | Existing implementation can be reconciled to official-source discovery and non-operator host/partner listing without activating providers |
| Resolve live runtime/data authority | **LogLoads** | Largest gap between converged source and actual live authority |
| Advance a service operating system | **Lake & Pine** | Phase 1 booking/planning is decided and can be sliced without Phase 2 payments |
| Marketplace launch | **BidSpace only after decisions** | Domain and Connect legal/operating model are prerequisites |
| Highest-risk recovery | **ORAN, but not as next rollout** | Critical work, yet unsafe to treat as ordinary production promotion |
| Portfolio reporting | **AutomatedEmpires later** | Dashboard quality depends on trustworthy child evidence |

The default conclusion remains Sweepza, but as a product-boundary/source-verification preflight—not a revenue or operator activation. LogLoads remains second because the portfolio benefits from resolving its live-authority risk while source convergence is fresh. Lake & Pine is the explicit lower-risk ordering alternative.

## Handoff from Explore&Earn to Sweepza

Before opening the Sweepza operational pass, record:

- active Explore&Earn pass result and exact report/PR state;
- current Explore&Earn Production and rollback artifact;
- replacement Stripe endpoint status and whether any Sweepza foreign endpoint retirement precondition passed;
- shared Resend/Cloudinary/Mapbox/Sentry-token/Doppler/GitHub-secret changes or retained rollback assets;
- unresolved provider-wide incident or cost change;
- confirmation that Explore&Earn design remains non-final and separate from readiness evidence.

If the replacement endpoint is not proven, do not block the read-only Sweepza product/source audit. Retain the foreign endpoint and all residue unchanged. Do not advance payment, email, entry, winner, or operator behavior; move Lake & Pine ahead temporarily if the dependency prevents a coherent controlled Preview.

## Decision

Prepare Sweepza's discovery-platform/source-verification preflight next, but start provider or operational work only after the active Explore&Earn lane closes and its dependency status is reconciled. Structural separation is not product, production, money, or transfer authority.
