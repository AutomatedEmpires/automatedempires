# Canonical Venture Operating Definitions

**Effective:** 2026-07-12
**Authority:** Founder vision correction
**Scope:** Product direction, planning, design, growth, provider selection, rollout, and future-agent instructions across the AutomatedEmpires portfolio

## Precedence and use

This document is the repository's canonical product-definition source. It supersedes older product labels, plans, prompts, provider assumptions, and implementation copy where they conflict. Historical evidence remains valid as evidence of what existed or ran at a particular time; it does not override the definitions below.

Future agents must:

1. read this file before proposing product, design, growth, provider, rollout, or launch work;
2. separate **canonical product direction** from **observed implementation** and **verified provider/runtime state**;
3. treat an existing route, provider account, schema, payment object, or workflow as evidence—not automatic product authority;
4. stop and record a conflict when implementation contradicts this file instead of activating the conflicting behavior; and
5. require a new dated founder decision before changing a definition below.

## Explore&Earn

Explore&Earn is a **seeker-first seasonal/work-travel marketplace**.

Preserve these core mechanics unless repository evidence demonstrates a concrete usability, accessibility, safety, or product failure and a dated decision approves a change:

- the Discovery Card as the core primitive;
- the **Seek / Swipe / Map / Profile** bottom navigation;
- exactly four categories: **Farm, Maritime, Remote, Seasonal**;
- clear housing, meals, and pay information;
- host and seeker trust; and
- map, list, and swipe discovery.

Future design work should prioritize the homepage, visual hierarchy, typography, color, spacing, layout composition, information placement, premium marketplace feel, dashboard surfaces, and responsive polish. A design pass must not reopen core mechanics merely to appear novel.

The overhaul must be repo-contextual and visionary. Before proposing it, locate the local and GitHub repositories, inspect the actual routes, components, data, and current states, and explain what already exists. Preserve correct mechanics, then overhaul the visual system, homepage, layout, hierarchy, typography, information placement, and overall product feel from that evidence. Do not redesign from scratch detached from the repository, but do not reduce the work to superficial polish.

## Sweepza

Sweepza is a **catchy, enticing, modern sweepstakes and giveaway discovery platform**. It sources or posts promotions from official public sources and lets hosts, sponsors, or partners submit promotions for listing.

Sweepza is **not the sweepstakes operator by default**. It does not, by default:

- run a sweepstakes or giveaway;
- set official rules;
- select winners;
- determine eligibility;
- process entries;
- guarantee legality;
- claim to improve a user's odds; or
- run payments.

The canonical listing model is:

- sourced public promotions from official sources;
- sponsor, host, or partner submissions;
- link-out to the official rules and official entry page; and
- source verification and transparent listing state.

Allowed listing statuses are:

- `sourced_unverified`
- `source_verified`
- `host_claimed`
- `partner_verified`
- `expired`
- `removed`
- `disputed`

Use clear disclaimers. Do not copy long descriptions, images, or official rules without rights. Do not imply partnerships that do not exist. Do not collect live entries unless a later legal and product approval explicitly authorizes Sweepza to operate that flow.

Existing entry tracking, winner, approval/hold, host billing, or winner-publication surfaces are implementation history and require an explicit keep, repurpose, or retire decision. Their existence does not authorize activation or define the product.

Known docs-only handoff: the parent public surface still contains operator-adjacent Sweepza copy in `lib/ventures.ts` and `components/VentureVisual.tsx` (enter/re-enter/win, winner proof/wall, and billing language). Keep that copy non-authoritative and reconcile it in a separate reviewed product-code PR; this documentation correction does not authorize or silently rewrite application behavior.

## LogLoads

LogLoads is **forestry and logistics coordination software**. It is not currently a freight broker, carrier, payment processor, or dispatch-for-hire operator.

Its production rate limit requires **shared, atomic state across serverless instances**. Evaluate the implementation in this order:

1. a Supabase-backed shared limiter, if it is sufficient and aligned with the accepted architecture;
2. a Vercel-integrated KV or Upstash Redis service only if Supabase is not appropriate; and
3. an in-memory limiter for local development only.

A provider-neutral Redis adapter or an existing Redis-shaped implementation is evidence of a possible adapter, not a decision to provision a standalone Redis provider. Production must not fall back to instance-local state.

## Lake & Pine

Lake & Pine is an **intelligent cleaning and local-service operating system**, not merely a marketing site.

Phase 1 includes:

- booking requests;
- service planning;
- home and property profiles;
- room and checklist preferences;
- pet and access notes;
- recurring service plans;
- an internal job pipeline;
- service status and follow-up;
- customer communication;
- an admin/operator dashboard; and
- an intelligent estimate and planning direction.

Payments are Phase 2. The open decisions concern how Phase 1 works—not whether booking and planning belong in the product.

## ORAN

ORAN is **chat-first, intelligence-driven civic resource navigation infrastructure**. Its product is not “browse a huge list.” A person explains what is wrong; ORAN understands the situation and rapidly identifies the right next step and verified provider/service.

ORAN intake and routing should account for:

- user need;
- location;
- age;
- urgency;
- eligibility;
- household context when relevant;
- transportation and access constraints;
- language and accessibility needs; and
- the applicable service domain, including crisis, food, shelter, legal aid, employment, youth/family help, or disability support.

Core product concepts are chat-first intake, service matching, verified providers, eligibility- and location-aware routing, issue reporting, community volunteer/admin review, agentic sourcing with human verification, stale-record detection, source provenance, and escalation for urgent/crisis cases.

Its MVP is a protected preview with:

- chat-first guided intake;
- verified provider/service recommendations rather than a generic resource dump;
- an initial North Idaho and Eastern Washington geography;
- eligibility- and location-aware routing;
- an issue-reporting flow;
- an admin/volunteer review queue;
- an agentic sourcing pipeline with human verification;
- source-backed provider records, provenance, and stale-record handling; and
- urgent/crisis escalation that routes to appropriate services without claiming to provide emergency advice.

Do not expand ORAN into broad directories—such as generic lists of stores that accept EBT—unless the content directly answers an evidenced user need. ORAN permits no user or behavioral tracking and no pixels. Privacy-scrubbed operational health logging may be used only for runtime safety, never profiling, attribution, advertising, or product analytics. ORAN must not provide medical, legal, political, or emergency advice or imply partnerships. Do not open a public launch until data, runtime, and support gates pass.

## BidSpace

BidSpace is a **temporary vendor-space marketplace** connecting hosts and vendors. It is not a generic auction site and is not a marketplace for bidding on physical goods.

Hosts may offer temporary commercial/vendor spaces such as booths, market stalls, food-truck pads, kiosks, pop-up retail space, event vendor spaces, sponsor placements, table spaces, yard/farm/vendor spaces, local commercial placements, and other short-term sales locations. Bidding is the method vendors use to acquire a space.

The product should support:

- host profiles covering the venue, event, property, or business; available spaces; rules; expected foot traffic; requirements; photos; and terms;
- vendor profiles covering the vendor, products, setup, requirements, history, and trust signals;
- space listings and site/space maps where relevant;
- a bidding/application workflow;
- host–vendor communication;
- vendor discovery by hosts and host outreach to vendors;
- verification of methods and terms; and
- marketplace trust.

The intended revenue comes from hosts, potentially through listing, placement, promotion, or subscription fees. That direction does not authorize live billing.

It is not live. Do not enable live payments or Stripe Connect until the legal entity, operating model, and payment model are approved. Any real/public bidding or booking rollout also remains gated by the applicable marketplace, legal, trust, runtime, and support acceptance. Builds, previews, provider projects, schemas, and demo flows do not change this status.

## AutomatedEmpires

AutomatedEmpires is the **parent operator and command layer**, not a generic AI agency site.

Its product direction is:

- portfolio status dashboard;
- provider map;
- rollout board;
- governance registry;
- cost and risk visibility;
- task orchestration; and
- venture transfer-readiness tracking.

The current public portfolio site is an implementation surface, not the full product definition. Command-layer features must remain evidence-backed, access-controlled where appropriate, and free of child-venture secrets or customer data.

## Decisions that remain open

The corrected definitions above are decided. The following implementation choices remain open and must not be used to reopen the product identities:

- **Explore&Earn:** evidence standards for trust marks and pay/housing/meals claims; repo-grounded overhaul deliverables; information placement; homepage and dashboard composition; responsive behavior.
- **Sweepza:** submission moderation and verification ownership; source freshness; treatment of legacy entry/winner/billing flows; future monetization that does not make Sweepza the operator by default.
- **LogLoads:** whether Supabase satisfies the shared-limiter latency, atomicity, availability, observability, and cost requirements; outage behavior and migration sequencing.
- **Lake & Pine:** estimate methodology, capacity and scheduling rules, customer/staff roles, communication channels, and the exact Phase 1 rollout slices.
- **ORAN:** guided-intake and match explanation, approved source classes, agentic-sourcing controls, human/volunteer review roles, urgent escalation, verification service levels, stale thresholds, support ownership, and later geographic expansion.
- **BidSpace:** host-fee model, legal entity, marketplace responsibilities, domain, bidding/application rules, trust/verification, expected-foot-traffic representations, and payment/Stripe Connect model before activation.
- **AutomatedEmpires:** command-layer access model, evidence freshness policy, data architecture, and what—if anything—is safe to expose publicly.
