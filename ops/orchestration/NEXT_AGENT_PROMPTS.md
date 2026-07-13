# Next Agent Prompts

**Prepared:** 2026-07-12
**Important:** Agents 6–8 appear to be already active. These prompts are handoff/acceptance contracts for the existing single writers, not instructions to spawn duplicate agents. Agent 5 did not start any of these tasks.

## Binding product definitions for every prompt

Before acting, read `docs/VENTURE_OPERATING_DEFINITIONS.md`. The founder correction supersedes conflicting routes, code copy, provider resources, historical plans, and earlier prompts.

- Explore&Earn: preserve the Discovery Card, Seek/Swipe/Map/Profile, exactly Farm/Maritime/Remote/Seasonal, clarity/trust, and map/list/swipe discovery; prioritize homepage and visual/responsive polish over mechanics churn.
- Sweepza: official-source discovery plus host/sponsor/partner submissions and official rules/entry link-outs; non-operator by default; no rules, eligibility, entry/payment processing, winner selection, legality/odds claims, fake partnerships, or live entry collection.
- LogLoads: forestry/logistics coordination, not broker/carrier/payment/dispatch-for-hire; shared atomic limiter evaluation is Supabase first, Vercel KV/Upstash second only if needed, memory local/dev only.
- Lake & Pine: cleaning/local-service operating system; booking/planning and the supporting operator/customer surfaces are Phase 1, payments Phase 2.
- ORAN: chat-first guided intake and eligibility/location-aware routing to verified providers in a protected North Idaho/Eastern Washington MVP, with issue reporting, agentic sourcing plus human/volunteer/admin review, provenance/stale handling, urgent escalation, no resource dump, no tracking/pixels, no advice/partnership claims, and no public launch.
- BidSpace: non-live host–vendor temporary-space marketplace for booths/stalls/food-truck pads/kiosks/pop-ups/event/table/sponsor/yard/farm/local-commercial placements; bidding/application allocates space. It is not a generic/physical-goods auction; real/public bidding or booking, live payments, and Stripe Connect remain disabled pending the applicable gates.
- AutomatedEmpires: parent command layer for portfolio status, providers, rollout, governance, cost/risk, orchestration, and transfer readiness; not a generic AI agency site.

## Agent 6 — Explore&Earn Phase 2 NO-GO blocker closer

```text
You are the single writer for Explore&Earn Phase 2 blocker closure.

Start by reconciling the existing uncommitted "Phase 2 — NO-GO blocker closure" freeze in the isolated `codex/explore-and-earn-production-readiness` worktree. Preserve PR #244 head `04c67fd7` as the Phase 1 evidence baseline. Do not touch the founder's dirty WSL design/product checkout and do not run a second overlapping lane.

Goal: close as many NO-GO gates as can be proven in dark Preview, test mode, or a disposable Supabase branch without Production promotion, live-money/customer mutation, live schema/data mutation, credential retirement, or design changes.

Required work:
1. Reconfirm immutable source, deployment, provider, and rollback state before every write.
2. In a founder-attended Clerk session, configure only the approved dark Preview surface: allowed origins/redirects, Supabase JWT template/claims, signed webhook, synthetic seeker/host identities, admin/recovery and rollback-user proof.
3. Use a disposable Supabase branch/database for schema/ledger diff, two-user JWT/RLS tests, owner-folder Storage tests, internal-grant and policy candidates, and non-sensitive mapped fixtures. Never replay or repair live history blindly.
4. Create a public-safe Stripe test webhook endpoint and test signing binding; prove signed receipt, retries/idempotency, app Checkout, and zero live-mode objects.
5. Complete the controlled Resend receipt/reply/suppression observation without broad-key retirement.
6. Exercise the restricted Mapbox token remotely with isolated coordinate fixtures and prove intended/denied origins.
7. Rehearse a complete Preview rollback bundle across deployment and environment bindings. Do not move the Production alias.
8. Update the readiness report with exact non-secret evidence, pass/fail/blocked results, and a fresh hard go/no-go.

Hard stops: Production users, live Stripe, live Supabase, DNS, Cloudinary mutation, token/key revocation, paid upgrades, email to external/customer recipients, and UI/design implementation. Ask for founder approval before any provider write not explicitly enumerated above.

Output: updated report, changed-file list, exact branch/PR state, evidence table, remaining blockers, rollback status, and an explicit Production-users/money verdict. Do not claim readiness from a build alone.
```
## Agent 7 — Provider governance registry implementation

```text
You are the single writer for the non-secret provider-governance registry on `codex/provider-governance-registry`.

Reconcile the six existing untracked documents under `ops/provider-governance/` with Agent 3's five account-governance reports. Do not create a duplicate registry lane. The original Windows-mounted worktree has broad mode-only drift: never bulk-stage it.

Goal: produce one authoritative, non-secret operating registry for provider ownership, billing, recovery, MFA posture, resource/venture mapping, backup-admin requirements, transfer blockers, and fix order.

Required work:
1. Preserve Known / Recorded / Inferred / Unknown / Blocked evidence states.
2. Start the remediation sequence with GitHub, Vercel, and GoDaddy; explain the order and dependencies.
3. Record primary owner role, backup-admin requirement, billing owner role, recovery type (never the private value), MFA evidence state, venture resources, shared-account risk, recipient-transfer path, and last verification date.
4. Reconcile GitHub personal-account concentration, Vercel one-owner/MFA conflict, GoDaddy sign-in/recovery/renewal uncertainty, and the other priority providers.
5. Include a provider-by-provider founder decision and witnessed-change checklist.
6. Secret-scan and diff-check the six files, then move only those files to a fresh branch for commit/PR publication after Agent 3's evidence is accepted.

Hard stops: no invitations, role changes, MFA/recovery changes, plan/billing changes, DNS, transfers, credential rotation, provider deletion, or recording recovery details/secrets. Documentation does not prove backup-admin readiness.

Output: the six registry documents, source-to-registry traceability, unknowns/conflicts, recommended fix sequence, branch/PR state, and explicit provider mutations not performed.
```

## Agent 8 — Sweepza controlled independence preflight

```text
You are the single writer for Sweepza independence preflight on `codex/sweepza-independence-preflight`.

Continue the five existing untracked `ops/sweepza/` documents. Do not launch another Sweepza lane. Treat Explore&Earn's webhook/Resend evidence and the foreign E&E endpoint as shared operational dependencies.

Goal: finish an evidence-backed Sweepza NO-GO/GO gate without activating Production providers or touching live money/customer state.

Canonical product contract: Sweepza is a third-party sweepstakes/giveaway discovery and host/partner listing platform, not the promotion operator by default. Listings require official sources, official rules/entry link-outs, disclaimers, and `sourced_unverified`, `source_verified`, `host_claimed`, `partner_verified`, `expired`, `removed`, or `disputed` status. Do not set rules, determine eligibility, process entries/payments, select winners, guarantee legality/odds, copy long source content without rights, imply partnerships, or collect live entries.

Required work:
1. Freeze exact `main`, current Production, domain, names-only environment contract, and rollback state.
2. Inventory entry, winner, approval/hold, rules, eligibility, partnership, notification, and billing surfaces; produce a keep/repurpose/retire plan and keep operator-style behavior inactive.
3. Define and test only the source/provenance/status/link-out/disclaimer/expiry/dispute model in an exact-current-main Preview if it can be done without Production alias changes; record build versus runtime evidence separately.
4. Inventory Supabase lanes, migration/ledger/RLS/storage/backup/restore/cron evidence read-only; propose disposable tests rather than touching live data or collecting entries.
5. Finish the dark Production Clerk plan only for approved source-claim/host/partner roles, including origins, redirects, least privilege, webhooks, recovery, staging/dev-user strategy, and rollback. Do not install Production keys.
6. Classify the foreign E&E webhook, two customer objects, and `$0` draft invoice using only approved non-sensitive evidence. Delete or mutate nothing; do not test checkout without a later approved non-operator monetization model.
7. Record `support@sweepza.com` ownership and alias options, Resend capacity gap, support operators, and a later source/claim/listing-status delivery/reply plan. Do not activate aliases or sending or imply Sweepza selects winners.
8. Record Sentry/PostHog test requirements, privacy/retention, cost, incident, support, provider-escalation, and transfer-owner gaps.

Hard stops: no sweepstakes operation, official-rule authorship, eligibility decision, entry collection/processing, winner selection, odds/legality guarantee, unverified partnership, copied source content, live Stripe object mutation, foreign endpoint removal, Production Clerk cutover, email send/alias activation, Production promotion/DNS, live database changes, credential rotation, purchase, or plan upgrade. Wait for E&E replacement endpoint proof before recommending endpoint retirement.

Output: the five preflight documents, exact evidence inventory, founder decisions, dependency on E&E, safe execution sequence, rollback requirements, and explicit Production/money verdict.
```

## Optional future Agent 9 — Explore&Earn design pass

```text
Run only after the founder accepts a stable Explore&Earn runtime/rollback baseline and explicitly approves the design brief.

Goal: design—not ship—a premium, seeker-first visual and responsive refinement centered on the homepage, visual hierarchy, typography, colors, spacing, layout composition, information placement, dashboard surfaces, and responsive polish. Preserve Seek, Swipe, Map, Profile, the shared Discovery Card, housing/meals/pay clarity, trust, and map/list/swipe discovery.

Before designing, locate and verify the local checkout and canonical GitHub repository. Inspect the real routes, layouts, components, content/data models, current responsive states, dashboards, and screenshots. Produce an existing-system map, then make the overhaul visionary and implementation-aware: neither a repo-detached redesign from scratch nor a superficial polish pass.

Use `ops/rollout-readiness/EXPLORE_AND_EARN_FUTURE_DESIGN_PASS_BRIEF.md` as directional input, not immutable truth. Keep exactly four categories (Farm, Maritime, Remote, Seasonal) and the four-item bottom navigation unless the founder changes them. Separate approved, revise, and exploratory decisions.

Do not redesign a core mechanic unless repository evidence identifies a concrete usability, accessibility, safety, or product failure; record that evidence and obtain a dated decision first.

Hard stops: no product-code edits, provider changes, deployment, data/schema changes, design lock-in, or production-readiness claims. Do not work in the founder's dirty product checkout.

Output: design decision record, information architecture, component/state contract, accessibility/privacy checklist, prototype plan, migration slices, and founder review queue.
```

