# Explore&Earn Future Design Pass Brief

- **Document type:** Future product/design direction only
- **Approval state:** Directional; not final until explicitly approved
- **Current-pass constraint:** Do not edit Explore&Earn code, lock the present design, or combine this work with production-readiness remediation.

## Product thesis

Explore&Earn should be simple, beautiful, premium, trusted, and seeker-first. Discovery should feel like choosing a real next chapter, not completing a generic SaaS workflow.

Core public language:

- “Where will you go next?”
- “Built for seekers, by seekers”
- “Seekers free forever”

The next design pass should validate this language in context, establish a coherent discovery system, and leave room for product learning. A polished mockup is not approval to ship.

## Founder-corrected design priority

Treat the information architecture and mechanics below as a preservation contract, not a prompt for novelty. The next pass should primarily improve:

- the homepage;
- visual hierarchy;
- typography and color;
- spacing and layout composition;
- where information lives;
- premium marketplace feel;
- dashboard surfaces; and
- responsive polish.

Do not redesign the Discovery Card, Seek/Swipe/Map/Profile navigation, four categories, or map/list/swipe discovery unless repository evidence identifies a concrete usability, accessibility, safety, or product failure. Record that evidence and obtain a dated decision before changing a core mechanic.

### Required repo-context sequence

1. Locate and verify the local checkout and canonical GitHub repository before design work.
2. Inspect the actual routes, layouts, components, content/data models, responsive states, dashboards, and current evidence/screens—not only planning documents.
3. Map what exists, what is working, what is inconsistent, and where information currently lives.
4. Preserve correct mechanics and product primitives.
5. Produce a visionary overhaul of the visual system and product feel grounded in that map. It must be more than surface polish, but it must not be a from-scratch concept detached from the implementation.

## Information architecture

Use four categories only:

1. Farm
2. Maritime
3. Remote
4. Seasonal

Use three discovery modes:

1. **Seek** — deliberate list/search exploration with explicit actions.
2. **Swipe** — quick, immersive decisions using swipe mechanics.
3. **Map** — place-led exploration using pins and compact bottom sheets.

Use a pinned bottom navigation with exactly:

- Seek
- Swipe
- Map
- Profile

The design pass must define navigation states, safe-area behavior, badges, keyboard/accessibility behavior, deep links, and continuity when a seeker moves between Seek, Swipe, and Map.

## Core product primitive: Discovery Card

The Discovery Card is the main product object. Build one shared content model and compositional skeleton, with deliberate context variants instead of one rigid visual copied into every surface.

### Rules shared across variants

- Show one category tag only.
- A boosted badge and match score/status may coexist.
- Housing and meals that are not included are non-interactive.
- Included housing and meals may open evidence popups.
- Notes and disclaimers do not live on the card; place them in the detail/evidence layer.
- Seek/list mode may show explicit actions.
- Swipe mode uses swipe mechanics and must not repeat the same skip/save/apply button row.
- Map mode uses compact bottom-sheet and pin-popup variants.
- Host applicant review reuses the same or a closely mirrored skeleton, filled with seeker data.
- Community cards belong to the family but are not Discovery Card duplicates.
- Every state needs clear focus, selected, loading, empty, disabled, error, and reduced-motion behavior.

### Seeker viewing a host/listing

Required fields:

- primary photo;
- host avatar or logo with verified mark;
- match score/status;
- one category badge;
- boosted badge where applicable;
- host name;
- role/title;
- location row that opens the map;
- begins/ends timeline;
- housing indicator;
- meals indicator;
- pay/perk;
- actions appropriate to the current discovery mode.

The card must remain understandable if match score or boost is absent. Pay/perk language must distinguish cash pay from estimated non-cash value.

### Host viewing a seeker/applicant

Required fields:

- seeker photo/avatar;
- verified/profile-completeness mark where applicable;
- match score/status;
- seeker name;
- current location;
- availability timeline;
- desired role/category;
- housing, meals, and perk compatibility;
- applicant status/actions.

The mirrored skeleton should feel familiar without pretending a person is a listing. Applicant actions must reflect real review states and permissions.

## Context variants

### Seek/list variant

- Supports scanning and comparison.
- May show explicit save, view, and apply actions.
- Preserves the most important facts without expanding into raw form UI.
- Defines desktop/tablet/mobile density rather than stretching the phone card.

### Swipe variant

- Makes the image and essential decision facts primary.
- Uses gesture and keyboard alternatives with undo/recovery behavior.
- Does not display the Seek-mode skip/save/apply control row.
- Makes destructive or final decisions confirmable; a gesture must not accidentally submit an application.

### Map bottom-sheet variant

- Compact enough to retain map context.
- Expands progressively into evidence/detail.
- Keeps the selected pin, card, and list state synchronized.
- Supports close, drag, and keyboard behavior without trapping focus.

### Map pin-popup variant

- Shows the minimum identity, category, role, and pay/perk signal.
- Opens the associated bottom sheet/card.
- Handles dense clusters, selected/hovered states, and small screens.
- Never becomes the sole place where required accessibility content exists.

### Host applicant-review variant

- Mirrors the Discovery Card hierarchy with seeker information.
- Supports status progression, review notes outside the card, and safe actions.
- Distinguishes shortlist, message, reject, and accept states.
- Does not expose private seeker information before authorization.

## Evidence popups

Evidence popups should be concise, visual, accessible, and tied to the applicable listing. They are proof layers, not marketing carousels.

### Housing popup

Support four uploaded example photos:

1. where you’ll sleep;
2. bathroom;
3. common/entertainment area;
4. outside/miscellaneous.

Show captions, upload date/currentness, accessibility text, and a clear statement that examples must match the offered accommodation. Define missing-photo behavior without implying evidence exists.

### Meals popup

Support four uploaded example photos:

1. meal example;
2. dining area;
3. kitchen access;
4. miscellaneous/storage.

Clarify which meals, frequency, dietary limitations, self-catering expectations, and whether the images are examples. Do not bury operational conditions on the card.

### Pay popup

Support:

- hourly or day rate;
- category comparison;
- regional comparison;
- housing/meals value context.

Comparison data must show source, date, region, sample limitations, and whether values are estimates. Never add housing/meals estimates to cash pay in a way that misrepresents wages.

## Related card family

Define lighter, related primitives for:

- **Host announcement cards** — host identity, audience, urgency, effective dates, and a clear detail action.
- **Blog post cards** — editorial image, title, summary, author/source, publish date, and reading action.
- **Seeker photo upload cards** — upload/progress/retry/moderation/privacy states, with clear ownership and visibility.
- **Admin announcement cards** — platform identity, severity/scope, effective dates, and acknowledgement where required.
- **Community cards** — member/community identity, topic/context, trust/moderation cues, and conversation action.

They should share typography, spacing, trust signals, image treatment, and interaction grammar without inheriting irrelevant listing fields.

## Design tone

The visual system should be:

- premium;
- simple;
- beautiful;
- clear;
- trusted;
- warm enough for travel and community;
- distinct from generic SaaS;
- free of raw form-UI aesthetics;
- not overbuilt;
- not childish;
- not treated as final until explicitly approved.

Premium here means disciplined hierarchy, photography, motion, typography, and detail—not ornament, gloss, or unnecessary interaction.

## Trust, accessibility, and safety requirements

- Meet WCAG 2.2 AA for color, focus, text, semantics, and interaction alternatives.
- Provide non-gesture alternatives for every swipe action.
- Define photo consent, ownership, moderation, retention, and removal for hosts and seekers.
- Distinguish verified facts, host claims, platform estimates, and recommendations.
- Prevent match scores and boosted placement from looking like safety guarantees.
- State sponsorship/boosting clearly.
- Protect seeker location and private applicant data by role and context.
- Specify skeleton/loading, empty, offline, partial-data, validation, and error states.
- Support reduced motion and predictable back/close behavior.

## Design-pass deliverables

1. Verified local/GitHub repository context and an existing-route/component/data inventory.
2. Homepage composition and content hierarchy across mobile, tablet, and desktop.
3. Visual system decisions for hierarchy, typography, color, spacing, layout, imagery, and responsive behavior.
4. Information-placement map covering homepage, discovery, detail, profile, and dashboard surfaces.
5. Premium marketplace direction and dashboard-surface specifications.
6. Preservation validation for Seek, Swipe, Map, Profile, the four categories, and the shared Discovery Card; document evidence before proposing any mechanical change.
7. Shared Discovery Card content schema and variant contract.
8. Seeker-facing and mirrored host-facing card components.
9. Map bottom-sheet and pin-popup specifications.
10. Housing, meals, and pay evidence popup flows.
11. Related-card family with reuse decisions.
12. Accessibility, privacy, moderation, loading/error, and reduced-motion states.
13. Prototype covering responsive homepage-to-discovery and dashboard continuity without changing core mechanics by default.
14. Content rules for category, pay/perk, match, verification, boost, and evidence.
15. Design-token and component migration plan that avoids a risky all-at-once rewrite.
16. Founder review record separating approved, revise, and exploratory decisions.

## Questions the future pass must resolve

- What inputs and explanation make the match score trusted and non-misleading?
- Which actions are reversible in each mode, and when does an application become final?
- What qualifies a host or seeker for a verified mark?
- How fresh must housing/meal evidence be, and who moderates it?
- What source and policy govern regional/category pay comparisons?
- How are boost/sponsorship and organic relevance balanced and disclosed?
- What information may a host see before a seeker applies?
- How do saved/hidden/applied states remain consistent across Seek, Swipe, and Map?
- What belongs in Profile versus application/onboarding flows?

## Explicit non-goals for the current readiness pass

- Do not implement or partially ship this redesign.
- Do not modify the current Explore&Earn application, provider configuration, Preview, or Production deployment.
- Do not lock the current design as final.
- Do not expand beyond four categories or three discovery modes without a new founder decision.
- Do not mix product redesign approval with production-readiness approval.

The future overhaul should begin only after the controlled production-readiness pass has preserved a known runtime and rollback baseline. Design changes then proceed in small, reviewable slices with separate evidence and approval.
