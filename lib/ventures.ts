export type VentureClassification =
  | "active-company"
  | "mission-system"
  | "operating-business"
  | "emerging-system";

export type VentureStage =
  | "Operating Company"
  | "Active Build"
  | "Foundation"
  | "Mission System"
  | "Live Surface"
  | "Emerging"
  | "Concept";

export type VentureReadiness =
  | "Concept"
  | "Scaffolded"
  | "Active development"
  | "Preview ready"
  | "Pilot candidate"
  | "Live surface";

export type PublicAvailability =
  | "Live product"
  | "Public preview"
  | "Protected preview"
  | "No public demo"
  | "Repository placeholder";

export type IntegrationState =
  | "Verified"
  | "Configured"
  | "Gated"
  | "Pending"
  | "Dormant";

export type VentureIntegration = {
  name: string;
  state: IntegrationState;
  detail: string;
};

export type PlatformProfile =
  | "AE Commercial Platform"
  | "AE Civic Infrastructure"
  | "AE Operating Business"
  | "AE Emerging System";

export type ShowcaseMode = "product" | "system" | "mission" | "operating";

export type VentureProof = {
  label: string;
  detail: string;
  href?: string;
};

export type VentureMilestone = {
  date: string;
  title: string;
  detail: string;
};

export type VenturePalette = {
  base: string;
  accent: string;
  support: string;
  wash: string;
};

export type Venture = {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  classification: VentureClassification;
  stage: VentureStage;
  category: string;
  targetUsers: string[];
  readiness: VentureReadiness;
  publicAvailability: PublicAvailability;
  pilotReadiness: string;
  marketingReadiness: string;
  strongestCapability: string;
  verifiedAt: string;
  verifiedRevision?: {
    sha: string;
    label: string;
    deployment?: string;
  };
  publicStatus: string;
  thesis: string;
  problem: string;
  system: string;
  dataAdvantage: string;
  business: string;
  vision: string;
  humanTruth: string;
  emotionalQuality: string;
  visualPhysics: string[];
  industries: string[];
  capabilities: string[];
  coreWorkflows: string[];
  completedCapabilities: string[];
  pendingCapabilities: string[];
  integrations: VentureIntegration[];
  techStack: string[];
  operatingBoundary: string;
  nextMilestones: string[];
  contactIntent: string;
  platformProfile: PlatformProfile;
  repository?: string;
  website?: string;
  showcaseMode: ShowcaseMode;
  featured: boolean;
  palette: VenturePalette;
  proof: VentureProof[];
  milestones: VentureMilestone[];
};

export const ventures = [
  {
    id: "explore-and-earn",
    slug: "explore-and-earn",
    name: "Explore&Earn",
    fullName: "Explore&Earn",
    classification: "active-company",
    stage: "Active Build",
    category: "Seasonal and work-travel marketplace",
    targetUsers: ["Seasonal-work seekers", "Work-travel hosts", "Marketplace operators"],
    readiness: "Pilot candidate",
    publicAvailability: "Public preview",
    pilotReadiness:
      "Candidate for a controlled marketplace pilot after the pending database migrations and founder-controlled activation gates are closed.",
    marketingReadiness:
      "Ready for accurate product storytelling and founding-host conversations; not ready for unqualified launch, placement, or job-availability claims.",
    strongestCapability:
      "A seeker-first Seek / Swipe / Map / Profile discovery system built around explicit housing, meals, and pay facts.",
    verifiedAt: "2026-07-21",
    verifiedRevision: {
      sha: "9d6b9c0c2297c6e3ebc64b30a40c92e60bf8cf5e",
      label: "GitHub main and Vercel production deployment",
      deployment: "dpl_EsAPMWW4yx9KwLowsM3jKzK4NjxE",
    },
    publicStatus:
      "Active development with a public Vercel preview. Main includes the seeker discovery system, host workflows, listing-truth controls, provenance, and lifecycle work; migrations, ingestion, notifications, and payments remain separately gated.",
    thesis:
      "A discovery marketplace built by seekers, for seekers, organized around the three questions that matter: where will I sleep, what will I eat, and what will I earn?",
    humanTruth:
      "Opportunity exists everywhere. Finding it should not be the hardest part of the journey.",
    problem:
      "Travel-forward work is scattered across boards, groups, aging job sites, DMs, and local relationships. Seekers have to assemble pay, housing, meals, trust, and timing by hand.",
    system:
      "A mobile-first, card-first marketplace where every opportunity carries the housing, meals, and pay triad, host context, trust cues, saved state, applications, journey surfaces, and map discovery.",
    dataAdvantage:
      "The valuable data is not just listings. It is structured opportunity truth: host evidence, benefit details, availability windows, categories, seeker preferences, saved behavior, applications, and journey signals.",
    business:
      "Hosts need distribution for hard-to-fill, place-tied opportunities. Seekers need trusted discovery. The marketplace can compound through host tools, featured distribution, and eventually transaction or placement-adjacent products once trust and liquidity exist.",
    vision:
      "Infrastructure for people willing to go where opportunity is.",
    emotionalQuality: "Possibility",
    visualPhysics: ["destinations", "routes", "stacked cards", "working landscapes"],
    industries: ["travel work", "seasonal labor", "hospitality", "agriculture", "maritime"],
    capabilities: [
      "Discovery cards",
      "Map and swipe discovery",
      "Saved and applied journeys",
      "Host surfaces",
      "Admin moderation",
    ],
    coreWorkflows: [
      "Seekers compare opportunities in list, swipe, and map modes",
      "Housing, meals, and pay are presented as explicit host-reported facts",
      "Seekers save, apply, and manage opportunity lifecycle states",
      "Hosts create and manage listings behind publication and provenance controls",
      "Admins review marketplace claims, sources, and moderation state",
    ],
    completedCapabilities: [
      "Seek / Swipe / Map / Profile navigation",
      "Unified listing cards and opportunity detail surfaces",
      "Host listing, invite, claim, and application workflows",
      "Source provenance and publication gating",
      "Responsive public preview deployed from main",
    ],
    pendingCapabilities: [
      "Apply additive migrations 058-065 through the founder pipeline",
      "Approve and activate each listing-ingestion source",
      "Enable notification delivery only after founder environment approval",
      "Keep payments off until explicit activation authority",
      "Integrate or close the unmerged housing-photo work without publishing it early",
    ],
    integrations: [
      { name: "Vercel", state: "Verified", detail: "Main is deployed as a public preview." },
      { name: "Supabase", state: "Configured", detail: "Dedicated project; additive migrations remain pending." },
      { name: "Clerk", state: "Configured", detail: "Authentication provider is fixed for deployed environments." },
      { name: "Cloudinary", state: "Verified", detail: "Dedicated Explore & Earn media tenancy." },
      { name: "Resend", state: "Gated", detail: "Outbound delivery requires founder activation." },
      { name: "Anthropic", state: "Configured", detail: "Guide and assistant surfaces use the approved provider." },
      { name: "PostHog", state: "Configured", detail: "Dedicated product analytics project." },
      { name: "Stripe", state: "Gated", detail: "Charging is not authorized." },
    ],
    techStack: ["Next.js", "TypeScript", "pnpm", "Supabase/Postgres", "Clerk", "Vercel"],
    operatingBoundary:
      "Explore&Earn does not guarantee jobs, immigration or work authorization, housing safety, employer endorsement, pay accuracy, or placement. Host-reported facts and source evidence must stay visibly qualified.",
    nextMilestones: [
      "Close the migration and runtime-configuration gates",
      "Verify a controlled founding-host supply cohort",
      "Prove the seeker application loop with source-backed listings",
    ],
    contactIntent: "Founding host or controlled marketplace pilot inquiry",
    platformProfile: "AE Commercial Platform",
    repository: "https://github.com/AutomatedEmpires/explore-and-earn",
    website: "https://explore-and-earn.vercel.app",
    showcaseMode: "product",
    featured: true,
    palette: {
      base: "#263f34",
      accent: "#66a96f",
      support: "#d4a35f",
      wash: "#f0efe6",
    },
    proof: [
      {
        label: "Product principle",
        detail:
          "Repo canon defines Explore&Earn as a mobile-first, card-first marketplace where housing, meals, and pay remain first-class.",
        href: "https://github.com/AutomatedEmpires/explore-and-earn",
      },
      {
        label: "Current implementation signal",
        detail:
          "GitHub main at 9d6b9c0 includes the current merged marketplace state; active local branches are treated as pending, not shipped.",
      },
      {
        label: "Public preview",
        detail: "The public Vercel alias renders the seeker-first marketplace without changing the launch gates.",
        href: "https://explore-and-earn.vercel.app",
      },
    ],
    milestones: [
      {
        date: "2026-07-19",
        title: "Unbacked Founding Host pricing removed",
        detail:
          "Main stopped presenting pricing that did not yet have an approved operating basis.",
      },
      {
        date: "2026-07-17",
        title: "Listing truth and provenance controls hardened",
        detail:
          "The publication gate, lifecycle truth, host-reported logistics, and source provenance received another verified mainline pass.",
      },
    ],
  },
  {
    id: "bidspace",
    slug: "bidspace",
    name: "BidSpace",
    fullName: "BidSpace",
    classification: "active-company",
    stage: "Active Build",
    category: "Temporary vendor-space marketplace",
    targetUsers: ["Venue and event hosts", "Pop-up vendors", "Food trucks", "Marketplace operators"],
    readiness: "Active development",
    publicAvailability: "No public demo",
    pilotReadiness:
      "Not yet pilot ready. A controlled preview needs a working public deployment, operating rules, trust ownership, and approved bidding/application policy.",
    marketingReadiness:
      "Ready for product-definition conversations only; not ready for real bidding, booking, leasing, permitting, insurance, or payment claims.",
    strongestCapability:
      "A host-vendor foundation that models temporary spaces, vendor discovery, applications, and allocation state without activating money movement.",
    verifiedAt: "2026-07-21",
    verifiedRevision: {
      sha: "6f63a6fc08a5a65894311315837ee24691999239",
      label: "GitHub main; Vercel production artifact is READY but the project alias returns 404",
      deployment: "dpl_HVV21Dq7kSxV3jgShVaxE2fpa3hk",
    },
    publicStatus:
      "Active development on main with the host-vendor marketplace foundation merged. Vercel has a READY production artifact, but the public project alias currently returns deployment-not-found, so no demo link is presented.",
    thesis:
      "A temporary vendor-space marketplace where hosts publish short-term commercial spaces and vendors apply or bid for the right placement.",
    humanTruth:
      "Some of the most valuable commercial opportunities in a city are almost impossible to find.",
    problem:
      "Vendors and businesses still discover temporary commercial inventory through relationships, forms, calls, emails, PDFs, and last-minute luck.",
    system:
      "Hosts describe venues, events, available spaces, rules, terms, expected foot traffic, and requirements. Vendors present their business and setup, discover spaces, communicate with hosts, and move through an application or bidding allocation flow.",
    dataAdvantage:
      "BidSpace compounds around geospatial inventory truth, bid history, host selection behavior, performance data, trust provenance, and fit signals across physical locations.",
    business:
      "The intended revenue direction is host-side listing, placement, promotion, or subscription value. The fee model and any money movement remain unapproved and inactive.",
    vision:
      "Infrastructure for pricing, distributing, and transacting temporary physical opportunity.",
    emotionalQuality: "Opportunity in motion",
    visualPhysics: ["map activity", "inventory geometry", "bids", "market movement"],
    industries: ["spatial commerce", "events", "venues", "local retail", "sponsorship"],
    capabilities: [
      "Inventory units",
      "Venue and event objects",
      "Map/list discovery",
      "Application and bidding allocation",
      "Trust and fit services",
      "Host-to-vendor discovery",
    ],
    coreWorkflows: [
      "Hosts create profiles for a venue, event, property, or business",
      "Hosts describe temporary spaces, terms, rules, and requirements",
      "Vendors create business and setup profiles",
      "Vendors discover and apply or bid for a placement",
      "Hosts review vendors, communicate, and select an allocation outcome",
    ],
    completedCapabilities: [
      "Temporary-space marketplace domain model",
      "Host and vendor profile foundations",
      "Marketplace-state and application services",
      "Host-side vendor discovery surface",
      "Additive database migration through 0014",
    ],
    pendingCapabilities: [
      "Repair or intentionally publish the public preview alias",
      "Approve application and bidding rules",
      "Define verification, dispute, and support ownership",
      "Decide legal entity, marketplace responsibilities, and host-fee model",
      "Keep Stripe Connect and all live payments disabled",
    ],
    integrations: [
      { name: "Vercel", state: "Pending", detail: "Production artifact is READY; public alias is not usable." },
      { name: "Supabase", state: "Configured", detail: "Dedicated database project and additive migrations." },
      { name: "Clerk", state: "Configured", detail: "Authentication is present in the foundation." },
      { name: "Payments", state: "Dormant", detail: "No live payment provider is approved or active." },
    ],
    techStack: ["Next.js", "TypeScript", "pnpm", "Supabase/Postgres", "Clerk", "Vercel"],
    operatingBoundary:
      "BidSpace is not live, is not a generic auction for physical goods, and does not yet provide completed leasing, permitting, insurance, booking, settlement, or Stripe Connect infrastructure for real transactions.",
    nextMilestones: [
      "Restore a truthful protected or public preview",
      "Approve the allocation and marketplace operating rules",
      "Run a synthetic host-vendor workflow before any real marketplace pilot",
    ],
    contactIntent: "Host or vendor workflow research conversation",
    platformProfile: "AE Commercial Platform",
    repository: "https://github.com/AutomatedEmpires/bidspace",
    showcaseMode: "product",
    featured: true,
    palette: {
      base: "#1f3440",
      accent: "#3ba5c7",
      support: "#e3b24f",
      wash: "#eef5f6",
    },
    proof: [
      {
        label: "Locked marketplace primitive",
        detail: "Inventory Unit is the canonical primitive, separate from Opportunity.",
        href: "https://github.com/AutomatedEmpires/bidspace",
      },
      {
        label: "Service layer evidence",
        detail:
          "Main includes marketplace state, applications, host-side vendor discovery, domain services, and the current database foundation.",
      },
      {
        label: "Public demo truth",
        detail:
          "The Vercel project reports a READY production artifact, but bidspace.vercel.app returns deployment-not-found and is not linked as a demo.",
      },
    ],
    milestones: [
      {
        date: "2026-07-16",
        title: "Host-vendor marketplace foundation merged",
        detail:
          "Main gained the temporary-space model, host vendor discovery, applications service, and marketplace-state foundation.",
      },
      {
        date: "2026-07-13",
        title: "Dependency security chain patched",
        detail:
          "The current foundation received a focused dependency security update before marketplace continuation.",
      },
    ],
  },
  {
    id: "logloads",
    slug: "logloads",
    name: "LogLoads",
    fullName: "LogLoads",
    classification: "active-company",
    stage: "Active Build",
    category: "Forestry logistics coordination",
    targetUsers: ["Timber landings and hosts", "Drivers", "Fleet operators", "Dispatch teams"],
    readiness: "Pilot candidate",
    publicAvailability: "Public preview",
    pilotReadiness:
      "A controlled software pilot is plausible after LogLoads receives its own Cloudinary tenancy and the open workflow PRs are independently reviewed.",
    marketingReadiness:
      "Ready for targeted forestry-operations discovery and pilot conversations; not ready for broker, carrier, dispatch-for-hire, payment, or managed-transaction claims.",
    strongestCapability:
      "Organization-scoped load publishing and assignment-aware route information across host, driver, fleet, and admin workspaces.",
    verifiedAt: "2026-07-21",
    verifiedRevision: {
      sha: "f614eae50119bcca7c87487a07dab2334cdb90b7",
      label: "GitHub main and Vercel production deployment",
      deployment: "dpl_4V1WNYypQ4ffos8RBpEB6NM1JvWp",
    },
    publicStatus:
      "Active development with a public Vercel preview. Main now enforces organization ownership for posting sources; direct-offer, rich landing-detail, and Cloudinary-edge work remain open PRs and are not presented as shipped.",
    thesis:
      "The timber truck operating network, connecting available timber loads with transportation capacity across routes, mills, landings, carriers, timing, and regional capacity.",
    humanTruth:
      "A truck waiting for a load and a load waiting for a truck should be able to find each other.",
    problem:
      "Timber movement still depends on fragmented coordination, private networks, manual dispatch, sensitive access details, and incomplete visibility across loads and capacity.",
    system:
      "Hosts publish timber movement. Drivers and fleets see work that fits their equipment and unlock route packs, access details, live trip state, and document history only after assignment.",
    dataAdvantage:
      "The durable value is the operating network: load demand, truck capacity, route timing, equipment fit, assignment history, private access controls, and regional movement patterns.",
    business:
      "The current direction is coordination software and marketplace visibility, with subscription billing paths. Managed transaction mode is intentionally disabled.",
    vision:
      "A connected operating network for timber transportation.",
    emotionalQuality: "Movement. Infrastructure. Coordination.",
    visualPhysics: ["roads", "topography", "industrial movement", "capacity"],
    industries: ["timber", "logistics", "trucking", "forestry", "regional operations"],
    capabilities: [
      "Driver cockpit",
      "Fleet cockpit",
      "Host cockpit",
      "Admin cockpit",
      "Route packs",
      "Assignment and availability services",
    ],
    coreWorkflows: [
      "Hosts publish and manage timber loads within organization ownership",
      "Drivers evaluate work, equipment fit, timing, and pay context",
      "Fleets coordinate capacity and assigned work",
      "Approved assignments unlock private route-pack and access details",
      "Operators track haul state, completion evidence, and exceptions",
    ],
    completedCapabilities: [
      "Driver, fleet, host, and admin workspace foundations",
      "Organization-owned posting sources",
      "Shared Supabase-backed production rate limiting",
      "Assignment-aware private route and access redaction",
      "Production health and operating-loop smoke coverage",
    ],
    pendingCapabilities: [
      "Create a dedicated LogLoads Cloudinary account before media activation",
      "Complete independent review of PRs #42, #46, and #47",
      "Prove the direct-offer lifecycle after merge, not from branch state",
      "Keep managed transactions, payments, and dispatch-for-hire inactive",
    ],
    integrations: [
      { name: "Vercel", state: "Verified", detail: "Current main is deployed and the public preview renders." },
      { name: "Supabase", state: "Verified", detail: "Canonical operating state and shared limiter are implemented." },
      { name: "Clerk", state: "Configured", detail: "Organization-aware authentication is part of the product." },
      { name: "Cloudinary", state: "Gated", detail: "Current tenancy is cross-wired to Explore & Earn; media activation is blocked." },
      { name: "Email", state: "Pending", detail: "No active LogLoads email provider is claimed." },
      { name: "Payments", state: "Dormant", detail: "No payment processing is active." },
    ],
    techStack: ["Next.js", "TypeScript", "pnpm", "Supabase/Postgres", "Clerk", "Vercel"],
    operatingBoundary:
      "LogLoads is coordination software. It is not a motor carrier, freight broker, payment processor, or dispatch-for-hire operator, and it must not expose private access details before assignment.",
    nextMilestones: [
      "Separate LogLoads media into its own provider tenancy",
      "Land the reviewed offer and landing-detail workflow sequence",
      "Run a controlled end-to-end haul pilot with explicit operator ownership",
    ],
    contactIntent: "Forestry operations or controlled pilot inquiry",
    platformProfile: "AE Commercial Platform",
    repository: "https://github.com/AutomatedEmpires/logloads",
    website: "https://logloads.vercel.app",
    showcaseMode: "product",
    featured: true,
    palette: {
      base: "#28392d",
      accent: "#7c9a4e",
      support: "#a97943",
      wash: "#f1efe4",
    },
    proof: [
      {
        label: "Name and domain locked",
        detail: "Repo canon locks LogLoads and logloads.com; retired placeholders are explicitly banned.",
        href: "https://github.com/AutomatedEmpires/logloads",
      },
      {
        label: "Backend reality",
        detail:
          "Main includes canonical operating state, organization ownership, shared limiting, route-pack rules, server actions, and service packages.",
      },
      {
        label: "Safety boundary",
        detail:
          "Sensitive coordinates, gate instructions, private roads, and route packs are redacted server-side until the viewer is assigned or owns the load.",
      },
    ],
    milestones: [
      {
        date: "2026-07-21",
        title: "Posting-source ownership merged",
        detail:
          "Every posting source is now enforced inside organization ownership on main.",
      },
      {
        date: "2026-07-17",
        title: "Host workspace and publishing prerequisites landed",
        detail:
          "Hosts can build the workspace the publishing workflow requires while media-provider separation remains explicitly unfinished.",
      },
    ],
  },
  {
    id: "sweepza",
    slug: "sweepza",
    name: "Sweepza",
    fullName: "Sweepza",
    classification: "active-company",
    stage: "Live Surface",
    category: "Sweepstakes and giveaway discovery",
    targetUsers: ["Promotion seekers", "Hosts and sponsors", "Listing reviewers"],
    readiness: "Live surface",
    publicAvailability: "Live product",
    pilotReadiness:
      "The discovery surface is live, but operational activation remains founder-controlled. Ingestion, outbound email, and any future monetization require separate approval.",
    marketingReadiness:
      "Ready for careful discovery-product marketing that preserves the third-party, non-operator boundary and avoids odds, eligibility, partnership, or winner claims.",
    strongestCapability:
      "A fast discovery routine for source-backed third-party promotions with transparent listing state and official rules and entry link-outs.",
    verifiedAt: "2026-07-21",
    verifiedRevision: {
      sha: "b9ce56fbc63f9aa17e0b36d5025d238437a99f77",
      label: "GitHub main, live domain, scheduled production smoke",
      deployment: "dpl_p6Pzq7NDRwcUr6pUF5cfon3fd5fL",
    },
    publicStatus:
      "Live at sweepza.com with exact-main deployment and production smoke evidence. Sweepza is a third-party discovery and listing platform; ingestion and outbound delivery stay off until founder and compliance gates are satisfied.",
    thesis:
      "A modern discovery platform for finding third-party sweepstakes and giveaways from official public sources and qualified host, sponsor, or partner submissions.",
    humanTruth:
      "The internet is full of chances to win. Finding the real ones should not feel like losing.",
    problem:
      "Sweepstakes discovery is often ugly, spammy, noisy, difficult to trust, visually poor, and unpleasant to browse.",
    system:
      "A photo-forward discovery surface with source verification, transparent listing state, saved organization, host submission, moderation, and link-outs to the official rules and official entry destination.",
    dataAdvantage:
      "Sweepza can compound around source quality, freshness, listing verification state, disputes, host reputation, moderation evidence, and clear provenance without owning third-party promotions.",
    business:
      "Future value may come from qualified host listing, placement, or promotion products. The model must not turn Sweepza into the default operator, judge, entry processor, or fulfillment party.",
    vision:
      "A trusted discovery layer for legitimate chances to win.",
    emotionalQuality: "Anticipation",
    visualPhysics: ["reveals", "cards", "countdowns", "visual discovery"],
    industries: ["sweepstakes", "consumer promotions", "creator campaigns", "brand growth"],
    capabilities: [
      "Official-source discovery",
      "Transparent listing status",
      "Saved organization",
      "Host and sponsor submission",
      "Admin source review",
      "Official rules and entry link-outs",
    ],
    coreWorkflows: [
      "Seekers browse and filter third-party promotion listings",
      "Listings disclose source and verification state",
      "Seekers follow official rules and entry links off-platform",
      "Hosts, sponsors, or partners submit promotions for listing review",
      "Reviewers verify, dispute, expire, or remove listings",
    ],
    completedCapabilities: [
      "Live responsive discovery surface",
      "Source-verification and listing-state foundations",
      "Host submission and admin review surfaces",
      "Default-off outbound email activation gate",
      "Scheduled production smoke with issue escalation",
    ],
    pendingCapabilities: [
      "Approve each ingestion source before cron activation",
      "Resolve the founder launch-gate decisions",
      "Keep outbound email disabled until approved",
      "Decide whether legacy entry, winner, approval, and billing surfaces are kept, repurposed, or retired",
      "Maintain strict provider isolation from Explore & Earn",
    ],
    integrations: [
      { name: "Vercel", state: "Verified", detail: "Exact main is deployed to sweepza.com." },
      { name: "Supabase", state: "Verified", detail: "Dedicated Sweepza database project." },
      { name: "Clerk", state: "Configured", detail: "Authentication is product-scoped." },
      { name: "Resend", state: "Gated", detail: "Dedicated identity; outbound sending is default-off." },
      { name: "Anthropic", state: "Gated", detail: "Approved for ingestion extraction only when ingestion is activated." },
      { name: "Payments", state: "Dormant", detail: "No payments are active." },
    ],
    techStack: ["Next.js", "TypeScript", "pnpm", "Supabase/Postgres", "Clerk", "Vercel"],
    operatingBoundary:
      "Sweepza does not run third-party promotions, set official rules, select winners, determine eligibility, process entries, guarantee legality, improve odds, or fulfill prizes. Official rules and entry stay with the source unless a later approved promotion says otherwise.",
    nextMilestones: [
      "Complete the founder launch-gate decisions",
      "Approve a source-by-source ingestion policy",
      "Disposition legacy operator-adjacent flows before broader marketing",
    ],
    contactIntent: "Host, sponsor, source, or listing-partner inquiry",
    platformProfile: "AE Commercial Platform",
    repository: "https://github.com/AutomatedEmpires/sweepza",
    website: "https://sweepza.com",
    showcaseMode: "product",
    featured: true,
    palette: {
      base: "#3c2f4f",
      accent: "#d05793",
      support: "#f2bb57",
      wash: "#f8edf2",
    },
    proof: [
      {
        label: "Live alias",
        detail: "The verified production deployment is served from the canonical Sweepza domain.",
        href: "https://sweepza.com",
      },
      {
        label: "Discovery and listing surfaces",
        detail:
          "The live product includes discovery, saved state, host submission, review, and listing-detail surfaces; operator-adjacent legacy routes are not public authority.",
      },
      {
        label: "Activation truth",
        detail:
          "Production is deployed and monitored, while ingestion and outbound email remain explicitly gated and payments remain inactive.",
      },
    ],
    milestones: [
      {
        date: "2026-07-20",
        title: "Scheduled production smoke went live",
        detail:
          "A read-only production smoke workflow now validates the live surface and escalates failures through a separate least-privilege job.",
      },
      {
        date: "2026-07-20",
        title: "Provider isolation and outbound gates hardened",
        detail:
          "Stripe tooling was bound to approved account identity and outbound email remained default-off rather than silently activated.",
      },
    ],
  },
  {
    id: "lake-and-pine",
    slug: "lake-and-pine",
    name: "Lake & Pine",
    fullName: "Lake & Pine",
    classification: "operating-business",
    stage: "Active Build",
    category: "Cleaning and property-care operating system",
    targetUsers: ["Property-care customers", "Service operators", "Field teams", "Operations managers"],
    readiness: "Active development",
    publicAvailability: "Public preview",
    pilotReadiness:
      "Not yet ready for unsupervised customer booking. A controlled service-intake pilot depends on migration, scheduling, communication, and operator-capacity decisions.",
    marketingReadiness:
      "Ready to show the premium property-care direction and operations system; not ready to promise live booking, real-time capacity, payments, or customer service coverage.",
    strongestCapability:
      "A premium property-care intake and operations model that captures property context before promising work.",
    verifiedAt: "2026-07-21",
    verifiedRevision: {
      sha: "43d157d401e7bcce48dd630bb313c4bf3aa60bbc",
      label: "GitHub main and Vercel production deployment",
      deployment: "dpl_2TJHCGfEtPRbjzNoT6BMjJBHXmum",
    },
    publicStatus:
      "Active development with a polished public Vercel preview. Main contains the national team-operations foundation, service-case intake, organization and workforce scope, and RLS; customer booking work remains unmerged and cannot be claimed as live.",
    thesis:
      "A real cleaning company proving the AutomatedEmpires instinct applies beyond software concepts: brand, booking, operations, communication, trust, and repeatability.",
    humanTruth:
      "A clean home should give you time back, not another system to manage.",
    problem:
      "Home service customers need trust, clear pricing anchors, scheduling confidence, notes, communication, repeat quality, and billing clarity. Many service businesses still stitch this together manually.",
    system:
      "A conversion and operations surface for services, pricing, estimates, booking, service areas, reviews, customer dashboard, billing history, home notes, support, and concierge assistance.",
    dataAdvantage:
      "Value compounds in service preferences, home details, recurring schedules, local demand, customer notes, quote history, reviews, billing records, and operational feedback loops.",
    business:
      "Revenue comes from the actual cleaning operation. Software improves conversion, communication, scheduling, service quality, repeatability, and local SEO.",
    vision:
      "A cleaner, calmer operating system for a local service business.",
    emotionalQuality: "Relief",
    visualPhysics: ["calm", "order", "space", "restoration"],
    industries: ["home services", "cleaning", "local operations", "customer experience"],
    capabilities: [
      "Service modules",
      "Instant estimate concept",
      "Booking flow",
      "Customer dashboard",
      "Reviews",
      "Service-area content",
    ],
    coreWorkflows: [
      "Customers describe the property, service need, access, pets, and preferences",
      "Operators turn intake into a scoped service case and plan",
      "Teams coordinate organization, workforce, and job ownership",
      "Service status and follow-up move through an internal pipeline",
      "Recurring-service direction preserves customer and property context",
    ],
    completedCapabilities: [
      "Premium property-care public surface",
      "Service-case intake foundation",
      "Organization, team, and workforce scope",
      "Fresh-database migration verification in CI",
      "Row-level security foundation for operations data",
    ],
    pendingCapabilities: [
      "Complete the customer booking journey on a reviewed branch",
      "Approve estimate methodology and scheduling rules",
      "Apply migrations only through the governed workflow",
      "Establish the real reply inbox before customer communication",
      "Keep payments in Phase 2 until explicitly approved",
    ],
    integrations: [
      { name: "Vercel", state: "Verified", detail: "Public preview renders from the main production artifact." },
      { name: "Supabase", state: "Configured", detail: "Dedicated project; migrations are founder-gated." },
      { name: "Clerk", state: "Configured", detail: "Organization and team authentication foundation." },
      { name: "Resend", state: "Gated", detail: "Sending and reply-to ownership require explicit verification." },
      { name: "Stripe", state: "Dormant", detail: "Webhook code exists; payments are Phase 2 and inactive." },
    ],
    techStack: ["Next.js", "TypeScript", "pnpm", "Supabase/Postgres", "Clerk", "Vercel"],
    operatingBoundary:
      "The preview does not prove live customer booking, available service capacity, confirmed pricing, payment operations, or customer-support ownership. Intake and planning are Phase 1; payments remain Phase 2.",
    nextMilestones: [
      "Finish and review the gated customer booking journey",
      "Decide estimate, capacity, scheduling, and communication rules",
      "Run a controlled operator-owned service-intake pilot",
    ],
    contactIntent: "Property-care operations or service-pilot inquiry",
    platformProfile: "AE Operating Business",
    repository: "https://github.com/AutomatedEmpires/lakeandpine",
    website: "https://lakeandpine.vercel.app",
    showcaseMode: "operating",
    featured: true,
    palette: {
      base: "#31423d",
      accent: "#7fa88e",
      support: "#c7a869",
      wash: "#f4f1e8",
    },
    proof: [
      {
        label: "Service-system truth",
        detail:
          "Canonical scope includes booking requests, planning, property profiles, preferences, notes, recurring plans, an internal pipeline, status, follow-up, and operator tooling.",
        href: "https://github.com/AutomatedEmpires/lakeandpine",
      },
      {
        label: "Production foundation",
        detail:
          "The production branch establishes a Next.js App Router foundation rather than directly shipping the recovered prototype.",
      },
      {
        label: "Scope honesty",
        detail:
          "Invoices, referrals, support, and concierge are represented concepts until production infrastructure is wired.",
      },
    ],
    milestones: [
      {
        date: "2026-07-16",
        title: "National team operations foundation on main",
        detail:
          "Main now carries the organization, workforce, service-case, and policy foundation for a scalable property-care operation.",
      },
      {
        date: "2026-06-24",
        title: "Recovered service-system prototype",
        detail:
          "The historical prototype preserved the service, estimate, booking, dashboard, review, and local SEO model.",
      },
    ],
  },
  {
    id: "oran",
    slug: "oran",
    name: "ORAN",
    fullName: "Open Resource Access Network",
    classification: "mission-system",
    stage: "Mission System",
    category: "Civic resource navigation infrastructure",
    targetUsers: ["People seeking services", "Verified service providers", "Community reviewers", "Civic partners"],
    readiness: "Active development",
    publicAvailability: "No public demo",
    pilotReadiness:
      "Not pilot ready until current-source deployment, verified regional data, guided intake, support ownership, safety escalation, and privacy gates are proven together.",
    marketingReadiness:
      "Ready for partner and technical conversations about the protected MVP; not ready for public launch, eligibility guarantees, advice claims, or broad directory marketing.",
    strongestCapability:
      "Source-backed, eligibility- and location-aware resource matching with provenance, stale-record handling, and human review.",
    verifiedAt: "2026-07-21",
    verifiedRevision: {
      sha: "412b3266a84d74fdfe0d05e75417b09747475f19",
      label: "GitHub main; no trustworthy current-source public deployment",
    },
    publicStatus:
      "Active development on the Vercel + Supabase + Clerk platform direction. GitHub main includes migration, ETL, provenance, security, and verification work, while chat-first intake and comparison work remain open or leased. The oran.vercel.app alias is cross-wired to an unrelated travel application and is not a valid demo.",
    thesis:
      "Public infrastructure for finding help: a modern, trustworthy system that rapidly connects people with the resources most applicable to them.",
    humanTruth:
      "Resources may exist. That does not mean people can find the right help in time.",
    problem:
      "Resource discovery is fragmented, slow, stale, confusing, contradictory, and difficult to trust. People in need are often forced to become experts in finding help first.",
    system:
      "ORAN uses verified inputs, provenance, staging, review, deterministic trust and match scoring, geographic relevance, retrieval-first responses, crisis hard gates, and human verification.",
    dataAdvantage:
      "The moat is verification and governance: source evidence, confidence scores, eligibility and constraint fit, coverage workflows, stale-record detection, auditability, and reproducible results.",
    business:
      "ORAN is not framed as a normal commercial marketplace. It is a civic infrastructure system seeking aligned investors, government and nonprofit partners, universities, youth-facing programs, and technical collaborators.",
    vision:
      "A trusted operating layer between people, organizations, and real-world services.",
    emotionalQuality: "Clarity under pressure",
    visualPhysics: ["verified networks", "evidence", "eligibility", "action"],
    industries: ["civic technology", "resource navigation", "human services", "public infrastructure"],
    capabilities: [
      "Verified-provider retrieval",
      "Eligibility and location context",
      "Verification workflow",
      "Deterministic scoring",
      "Crisis hard gate",
      "Source provenance and stale handling",
    ],
    coreWorkflows: [
      "A person explains the need through guided, chat-first intake",
      "The system accounts for location, urgency, eligibility, household, access, language, and accessibility context",
      "Verified provider and service records are retrieved with provenance",
      "Recommendations explain fit without guaranteeing eligibility",
      "Issues and stale records enter a human review queue",
      "Urgent or crisis-adjacent needs route to appropriate services without pretending ORAN is emergency care",
    ],
    completedCapabilities: [
      "Vercel, Supabase, and Clerk platform convergence on main",
      "Rebuildable migration chain and fresh-database verification",
      "Idempotent canonical normalization",
      "Source provenance and seeker-facing record evidence",
      "Security and participation guardrails",
    ],
    pendingCapabilities: [
      "Deploy current main to a correctly owned ORAN preview",
      "Remove the cross-wired travel-app alias",
      "Complete guided intake and match explanation",
      "Define approved source classes, verification service levels, and support ownership",
      "Prove urgent escalation and no-tracking enforcement before public launch",
    ],
    integrations: [
      { name: "Vercel", state: "Pending", detail: "Project exists, but current public alias is cross-wired and unsafe to present." },
      { name: "Supabase", state: "Configured", detail: "Dedicated database is the current platform direction." },
      { name: "Clerk", state: "Configured", detail: "Authentication is part of the off-Azure convergence." },
      { name: "Azure AI", state: "Dormant", detail: "Legacy provider code remains pending replacement; Azure services must not be re-enabled." },
      { name: "Analytics", state: "Dormant", detail: "User tracking and pixels are prohibited." },
      { name: "Payments", state: "Dormant", detail: "No payment role is approved." },
    ],
    techStack: ["Next.js", "TypeScript", "pnpm", "Supabase/Postgres", "Clerk", "Vercel"],
    operatingBoundary:
      "ORAN provides guided civic-resource navigation, not medical, legal, financial, political, emergency, or guaranteed-eligibility advice. It must not imply provider partnerships, track users, run advertising pixels, or publicly launch before data, runtime, and support gates pass.",
    nextMilestones: [
      "Publish a correctly isolated protected preview from current main",
      "Complete the chat-first guided-intake and explanation loop",
      "Verify an initial North Idaho and Eastern Washington provider corpus with human review",
    ],
    contactIntent: "Civic data, nonprofit, government, or protected-pilot conversation",
    platformProfile: "AE Civic Infrastructure",
    repository: "https://github.com/AutomatedEmpires/Open-Resource-Access-Network",
    showcaseMode: "mission",
    featured: true,
    palette: {
      base: "#173c4a",
      accent: "#2f9d8c",
      support: "#e2bf65",
      wash: "#edf7f5",
    },
    proof: [
      {
        label: "Mission canon",
        detail:
          "ORAN states that every recommendation must come from retrieved database records and crisis routing precedes normal flow.",
        href: "https://github.com/AutomatedEmpires/Open-Resource-Access-Network",
      },
      {
        label: "Scoring model",
        detail:
          "Public scores are Verification Confidence, Eligibility Match, and Constraint Fit with documented deterministic weighting.",
      },
      {
        label: "Platform profile",
        detail:
          "The founder-locked platform direction is now Vercel, Supabase, and Clerk; Azure AI remains legacy code pending replacement, not an activation plan.",
      },
    ],
    milestones: [
      {
        date: "2026-07-18",
        title: "Database harness and engineering handoff landed",
        detail:
          "Main gained disposable-Postgres verification evidence and a current engineering continuation point.",
      },
      {
        date: "2026-07-17",
        title: "Search, migrations, and provenance hardened",
        detail:
          "Main made search indexing real, rebuilt the migration chain, improved source provenance, and tightened the security perimeter.",
      },
    ],
  },
  {
    id: "pinnedatlas",
    slug: "pinnedatlas",
    name: "PinnedAtlas",
    fullName: "PinnedAtlas",
    classification: "active-company",
    stage: "Live Surface",
    category: "Travel destination discovery map",
    targetUsers: ["Curious travelers", "Road-trip planners", "Outdoor destination explorers"],
    readiness: "Live surface",
    publicAvailability: "Live product",
    pilotReadiness:
      "The free map is live and usable. Accounts and paid tiers remain deliberately dormant and are outside the current product experience.",
    marketingReadiness:
      "Ready for free-product discovery and destination-quality storytelling; not ready for paid, account, premium, or transaction claims.",
    strongestCapability:
      "A live, map-led collection of real caves, waterfalls, hot springs, and other destinations built for lightweight exploration.",
    verifiedAt: "2026-07-21",
    verifiedRevision: {
      sha: "07fc7cfc29549dbdbad9b53ff5c5177ff572d3f0",
      label: "GitHub main and live pinnedatlas.com deployment",
      deployment: "dpl_C64EubUgwDfqBGujaZjRAnXa8cUB",
    },
    publicStatus:
      "Live and free at pinnedatlas.com. The current mainline includes the real-destination data-quality pass, product branding, and control-plane contract; accounts and paid tiers exist only as dormant implementation paths.",
    thesis:
      "A fast travel-discovery map for finding interesting real-world destinations without turning lightweight exploration into a planning chore.",
    humanTruth:
      "The best nearby place is often the one you did not know to search for.",
    problem:
      "Destination discovery is scattered across generic search results, social posts, saved screenshots, and map pins with inconsistent context.",
    system:
      "PinnedAtlas leads with a browsable map and a curated destination layer so people can quickly find, inspect, and remember places worth exploring.",
    dataAdvantage:
      "Value comes from destination quality, categorization, geographic coverage, useful context, and a steadily improved map corpus rather than account lock-in.",
    business:
      "The product is intentionally free today. Any future account or paid-tier model requires a new founder activation decision and isolated provider credentials.",
    vision:
      "A lightweight atlas for the places that make a trip memorable.",
    emotionalQuality: "Curiosity",
    visualPhysics: ["maps", "terrain", "pins", "discovery"],
    industries: ["travel", "outdoors", "destination discovery", "maps"],
    capabilities: [
      "Interactive destination map",
      "Real destination records",
      "Caves, waterfalls, and hot-springs discovery",
      "Responsive public experience",
      "Branded product metadata",
    ],
    coreWorkflows: [
      "Open the live map without creating an account",
      "Browse destinations geographically",
      "Inspect real places by category and location",
      "Continue exploring while the product remains free",
    ],
    completedCapabilities: [
      "Live free map at pinnedatlas.com",
      "Real-destination data-quality pass",
      "Product logo, icons, and social metadata",
      "Responsive public destination discovery",
    ],
    pendingCapabilities: [
      "Continue destination-quality and coverage work",
      "Keep accounts dormant until founder activation",
      "Keep paid tiers and Stripe dormant",
      "Never reuse Explore & Earn payment credentials",
    ],
    integrations: [
      { name: "Vercel", state: "Verified", detail: "Main is deployed to the live domain." },
      { name: "Supabase", state: "Configured", detail: "Dedicated project supports the current data layer." },
      { name: "Map provider", state: "Verified", detail: "The live discovery map renders current destination data." },
      { name: "Clerk", state: "Dormant", detail: "Accounts are built but intentionally inactive." },
      { name: "Stripe", state: "Dormant", detail: "Paid tiers are built but intentionally inactive and isolated." },
    ],
    techStack: ["Next.js", "TypeScript", "Supabase/Postgres", "Vercel", "Web mapping"],
    operatingBoundary:
      "PinnedAtlas is a free travel-discovery product. It does not currently sell subscriptions, activate accounts, take payments, guarantee access conditions, or replace official land, weather, safety, or travel guidance.",
    nextMilestones: [
      "Expand and verify destination coverage",
      "Improve place context without adding account friction",
      "Keep paid and account paths dormant until an explicit founder decision",
    ],
    contactIntent: "Destination-data or travel-discovery collaboration",
    platformProfile: "AE Commercial Platform",
    repository: "https://github.com/AutomatedEmpires/pinnedatlas",
    website: "https://pinnedatlas.com",
    showcaseMode: "product",
    featured: true,
    palette: {
      base: "#203b45",
      accent: "#3d9a8a",
      support: "#d09a52",
      wash: "#edf4f1",
    },
    proof: [
      {
        label: "Live product",
        detail: "pinnedatlas.com renders the free map from the current governed Vercel project.",
        href: "https://pinnedatlas.com",
      },
      {
        label: "Current source",
        detail:
          "GitHub main at 07fc7cf includes the control-plane contract after the real-destination and brand passes.",
        href: "https://github.com/AutomatedEmpires/pinnedatlas",
      },
      {
        label: "Activation boundary",
        detail:
          "The registry explicitly keeps accounts and paid tiers dormant and forbids Explore & Earn payment credentials.",
      },
    ],
    milestones: [
      {
        date: "2026-07-16",
        title: "Governed live-product contract merged",
        detail:
          "Main now records the live-domain and dormant-account/payment boundaries agents must preserve.",
      },
      {
        date: "2026-07-13",
        title: "Real destinations moved to the front",
        detail:
          "The map received a focused data-quality pass so discovery leads with real places rather than placeholder density.",
      },
    ],
  },
  {
    id: "automated-interviewer",
    slug: "automated-interviewer",
    name: "AutomatedInterviewer",
    fullName: "AutomatedInterviewer",
    classification: "emerging-system",
    stage: "Concept",
    category: "Qualification and decision-support concept",
    targetUsers: ["Not yet validated"],
    readiness: "Concept",
    publicAvailability: "Repository placeholder",
    pilotReadiness:
      "Not pilot ready. There is no committed application, validated workflow, user cohort, or deployment.",
    marketingReadiness:
      "Name and strategic space may be acknowledged; no product capability, buyer, traction, or launch claim is supportable.",
    strongestCapability:
      "No implemented capability is verified; the current evidence is an empty public repository reservation.",
    verifiedAt: "2026-07-21",
    publicStatus:
      "Emerging concept. The public GitHub repository currently has no committed implementation, so the site presents only the strategic space, not a shipped product.",
    thesis:
      "A future qualification and decision-support system for defining an opportunity, running structured interviews, collecting evidence, scoring against criteria, and supporting human decisions.",
    humanTruth:
      "Good decisions need structured evidence, not loose conversations that disappear after the call.",
    problem:
      "Across ventures, qualification often requires repeated interviews, inconsistent criteria, missing evidence, and unclear reasoning.",
    system:
      "The likely shape is reusable interview structure, evidence capture, rubric scoring, explanations, and decision support, but the implementation is not yet public repo truth.",
    dataAdvantage:
      "If built, the durable value would be structured qualification data, reusable rubrics, evidence trails, and decision explanations across opportunity types.",
    business:
      "It may become an independent venture or a shared portfolio capability. The repo does not yet support a stronger maturity claim.",
    vision:
      "A reusable qualification layer for opportunities that require judgment.",
    emotionalQuality: "Discernment",
    visualPhysics: ["conversation", "criteria", "evidence", "decision structure"],
    industries: ["recruiting", "marketplaces", "screening", "operations"],
    capabilities: ["Structured interviews", "Evidence capture", "Rubric scoring", "Human decision support"],
    coreWorkflows: [
      "Potential structured interviews",
      "Potential evidence capture and rubric scoring",
      "Potential human decision support",
    ],
    completedCapabilities: ["Public GitHub repository reservation"],
    pendingCapabilities: [
      "Define the product and primary user",
      "Validate a concrete interview workflow",
      "Choose whether this is a venture or a shared portfolio capability",
      "Build and deploy only after the definition is approved",
    ],
    integrations: [
      { name: "GitHub", state: "Verified", detail: "Public repository exists and contains no commits." },
      { name: "Runtime", state: "Pending", detail: "No runtime or deployment exists." },
    ],
    techStack: ["Not selected"],
    operatingBoundary:
      "AutomatedInterviewer is not a deployed hiring, screening, employment-decision, assessment, or autonomous decision system. No user, buyer, rubric, fairness, privacy, or legal model has been approved.",
    nextMilestones: [
      "Choose one narrow qualification problem",
      "Define the human decision boundary and evidence standard",
      "Create a small protected prototype before any public product claim",
    ],
    contactIntent: "Product-definition or qualification-workflow conversation",
    platformProfile: "AE Emerging System",
    repository: "https://github.com/AutomatedEmpires/AutomatedInterviewer",
    showcaseMode: "system",
    featured: false,
    palette: {
      base: "#323846",
      accent: "#8b8fc8",
      support: "#c8a45d",
      wash: "#f2f1f6",
    },
    proof: [
      {
        label: "Maturity boundary",
        detail:
          "GitHub reports the public AutomatedInterviewer repository as empty, so the site does not claim a shipped implementation.",
        href: "https://github.com/AutomatedEmpires/AutomatedInterviewer",
      },
      {
        label: "Strategic fit",
        detail:
          "The concept belongs in the lab because qualification appears repeatedly across marketplace, workforce, and decision-support workflows.",
      },
    ],
    milestones: [
      {
        date: "2026-06-09",
        title: "Public repo placeholder",
        detail:
          "The empty public repository marks intent without enough implementation evidence to present as an active company.",
      },
    ],
  },
  {
    id: "certstack",
    slug: "certstack",
    name: "CertStack",
    fullName: "CertStack",
    classification: "emerging-system",
    stage: "Concept",
    category: "Undisclosed concept",
    targetUsers: ["Not yet defined"],
    readiness: "Concept",
    publicAvailability: "Repository placeholder",
    pilotReadiness:
      "Not pilot ready. No committed product definition, implementation, user, workflow, or deployment has been verified.",
    marketingReadiness:
      "The name may be listed as a portfolio reservation only. Its market, product, and capability must remain undefined until founder direction is recorded.",
    strongestCapability:
      "No implemented capability is verified; the current evidence is an empty public repository reservation.",
    verifiedAt: "2026-07-21",
    publicStatus:
      "Repository placeholder. GitHub reports a public CertStack repository with no committed implementation, and no canonical product definition was found in the governed portfolio registry.",
    thesis:
      "Product direction is intentionally withheld until a dated founder definition and real implementation evidence exist.",
    humanTruth:
      "A reserved name is not yet a product.",
    problem:
      "No customer problem has been verified for public presentation.",
    system:
      "No system is currently claimed. The portfolio preserves the name while leaving room for a future evidence-backed definition.",
    dataAdvantage:
      "No data strategy or advantage is approved.",
    business:
      "No buyer, pricing, revenue, or commercialization path is approved.",
    vision:
      "Define the right problem before presenting a solution.",
    emotionalQuality: "Reserved",
    visualPhysics: ["placeholder", "definition", "evidence", "future"],
    industries: ["not yet defined"],
    capabilities: ["Repository reservation"],
    coreWorkflows: ["No product workflow is currently verified"],
    completedCapabilities: ["Public GitHub repository reservation"],
    pendingCapabilities: [
      "Record a canonical product definition",
      "Identify the primary user and problem",
      "Validate a workflow before choosing infrastructure",
      "Create implementation evidence before public marketing",
    ],
    integrations: [
      { name: "GitHub", state: "Verified", detail: "Public repository exists and contains no commits." },
      { name: "Runtime", state: "Pending", detail: "No runtime or deployment exists." },
    ],
    techStack: ["Not selected"],
    operatingBoundary:
      "CertStack must not be described as certification, compliance, credentialing, verification, training, or any other product category until a canonical founder definition and supporting implementation are recorded.",
    nextMilestones: [
      "Define or retire the portfolio reservation",
      "Approve one narrow user problem",
      "Build a protected proof only after scope is explicit",
    ],
    contactIntent: "Founder-definition conversation",
    platformProfile: "AE Emerging System",
    repository: "https://github.com/AutomatedEmpires/certstack",
    showcaseMode: "system",
    featured: false,
    palette: {
      base: "#31383d",
      accent: "#7a9187",
      support: "#c4a767",
      wash: "#f1f2ee",
    },
    proof: [
      {
        label: "Repository state",
        detail:
          "GitHub lists AutomatedEmpires/certstack as a public repository with size zero and no implementation evidence.",
        href: "https://github.com/AutomatedEmpires/certstack",
      },
      {
        label: "Definition boundary",
        detail:
          "The governed venture registry and canonical operating definitions do not yet assign CertStack a product role.",
      },
    ],
    milestones: [
      {
        date: "2026-07-21",
        title: "Portfolio reservation verified",
        detail:
          "The name is represented honestly as an empty repository placeholder rather than a fictional product.",
      },
    ],
  },
] satisfies Venture[];

export const featuredVentures = ventures.filter((venture) => venture.featured);

export const activeCompanies = ventures.filter(
  (venture) => venture.classification === "active-company",
);

export const missionSystems = ventures.filter(
  (venture) => venture.classification === "mission-system",
);

export const operatingBusinesses = ventures.filter(
  (venture) => venture.classification === "operating-business",
);

export const emergingSystems = ventures.filter(
  (venture) => venture.classification === "emerging-system",
);

export type PortfolioReservation = {
  name: string;
  evidence: string;
  status: string;
  href?: string;
};

export const portfolioReservations: PortfolioReservation[] = [
  {
    name: "Workproof",
    evidence: "Empty public GitHub repository verified 2026-07-21.",
    status: "Name reserved; no public product definition or implementation.",
    href: "https://github.com/AutomatedEmpires/workproof",
  },
  {
    name: "PMI",
    evidence: "Empty public GitHub repository verified 2026-07-21.",
    status: "Name reserved; no public product definition or implementation.",
    href: "https://github.com/AutomatedEmpires/pmi",
  },
  {
    name: "Traffic",
    evidence: "Empty public GitHub repository verified 2026-07-21.",
    status: "Name reserved; no public product definition or implementation.",
    href: "https://github.com/AutomatedEmpires/traffic",
  },
  {
    name: "Just Jesus Bro",
    evidence: "Founder-confirmed brand contract in the parent repository.",
    status: "Private docs-and-creative-system placeholder; no app, ministry, offer, users, or launch.",
    href: "https://github.com/AutomatedEmpires/automatedempires/tree/main/ops/ventures/just-jesus-bro",
  },
  {
    name: "Komfort Killz",
    evidence: "Founder-confirmed brand contract in the parent repository.",
    status: "Private docs-and-creative-system placeholder; no app, product catalog, customers, or launch.",
    href: "https://github.com/AutomatedEmpires/automatedempires/tree/main/ops/ventures/komfort-killz",
  },
];

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}

export const platformProfiles = [
  {
    name: "AE Commercial Platform" as const,
    description:
      "Shared engineering standards with venture-specific providers, activation gates, and ownership boundaries. Stack family is guidance, never permission to share credentials or provision unused services.",
    members: ["Explore&Earn", "BidSpace", "LogLoads", "Sweepza", "PinnedAtlas"],
  },
  {
    name: "AE Civic Infrastructure" as const,
    description:
      "ORAN now follows the founder-locked Vercel, Supabase, and Clerk direction while prioritizing verification, safety, privacy, evidence, reproducibility, and public trust over stack symmetry.",
    members: ["ORAN"],
  },
  {
    name: "AE Operating Business" as const,
    description:
      "Technology exists to improve the real operating business: booking, communication, scheduling, service quality, payments, reviews, local SEO, and operational efficiency.",
    members: ["Lake & Pine"],
  },
  {
    name: "AE Emerging System" as const,
    description:
      "Pre-company or shared-capability systems that need room to mature before being presented as operating companies.",
    members: ["AutomatedInterviewer", "CertStack"],
  },
];
