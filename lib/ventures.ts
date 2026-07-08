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
  | "Emerging";

// Crisp, badge-ready maturity grounded in verified reality (see PORTFOLIO_ACTIVATION_STATE
// and live-domain checks). Distinct from `stage`, which is the longer classification label.
export type VentureStatus = "Live" | "Building" | "Mission" | "Concept";

export type PlatformProfile =
  | "AE Commercial Platform"
  | "AE Civic Infrastructure"
  | "AE Operating Business"
  | "AE Emerging System";

export type ShowcaseMode = "product" | "system" | "mission" | "operating";

// The connective tissue of the portfolio: the recurring instincts that thread across
// otherwise unrelated markets. Ventures that share a thread are genuinely related in
// how they attack their problem, which is what the ecosystem map draws.
export type VentureThread =
  | "Discovery"
  | "Marketplace"
  | "Spatial"
  | "Trust"
  | "Real-world ops"
  | "Civic"
  | "Decision support";

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
  status: VentureStatus;
  publicStatus: string;
  oneLiner: string;
  thesis: string;
  problem: string;
  system: string;
  dataAdvantage: string;
  business: string;
  vision: string;
  humanTruth: string;
  emotionalQuality: string;
  visualPhysics: string[];
  threads: VentureThread[];
  industries: string[];
  capabilities: string[];
  platformProfile: PlatformProfile;
  repository?: string;
  website?: string;
  showcaseMode: ShowcaseMode;
  featured: boolean;
  palette: VenturePalette;
  proof: VentureProof[];
  milestones: VentureMilestone[];
};

export const ventures: Venture[] = [
  {
    id: "explore-and-earn",
    slug: "explore-and-earn",
    name: "Explore&Earn",
    fullName: "Explore&Earn",
    classification: "active-company",
    stage: "Active Build",
    status: "Live",
    oneLiner: "Seasonal work with housing, meals, and pay — found in one place.",
    publicStatus:
      "Live infrastructure on exploreandearn.com. Seeker, host, admin, listing, map, swipe, and legal surfaces are deployed and healthy; marketplace liquidity is a founder/business activation step, not an engineering gap.",
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
    threads: ["Discovery", "Marketplace", "Spatial", "Trust", "Real-world ops"],
    industries: ["travel work", "seasonal labor", "hospitality", "agriculture", "maritime"],
    capabilities: [
      "Discovery cards",
      "Map and swipe discovery",
      "Saved and applied journeys",
      "Host surfaces",
      "Admin moderation",
    ],
    platformProfile: "AE Commercial Platform",
    repository: "https://github.com/AutomatedEmpires/explore-and-earn",
    website: "https://exploreandearn.com",
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
        label: "Live product",
        detail:
          "exploreandearn.com serves the public product from Vercel over HTTPS; /api/health returns ok and the domain is verified.",
        href: "https://exploreandearn.com",
      },
      {
        label: "Current implementation signal",
        detail:
          "The active branch contains seeker, host, admin, listing detail, search, map, swipe, notifications, messages, and legal surfaces.",
      },
      {
        label: "Source proof",
        detail: "The product repository is the implementation record for the marketplace.",
        href: "https://github.com/AutomatedEmpires/explore-and-earn",
      },
    ],
    milestones: [
      {
        date: "2026-07-07",
        title: "Production infrastructure verified",
        detail:
          "Domain, HTTPS, health, database (79 migrations), analytics, error monitoring, email key, and cron were verified operating; named founder gates remain for production auth and live payments.",
      },
      {
        date: "2026-07-06",
        title: "Launch-convergence hardening",
        detail:
          "Auth matchers, keyless fallback behavior, listing creation, and mobile resume polish moved the product closer to a resilient public surface.",
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
    status: "Building",
    oneLiner: "A map-first market that turns physical space into biddable inventory.",
    publicStatus:
      "Software complete and engine-verified. 43 routes, green build, and a live internal marketplace loop (bid → counter → accept → award → booking → payment → settlement) proven against the database. Public deployment is intentionally gated on founder identity and money setup.",
    thesis:
      "A map-first marketplace for real-world commercial opportunity where physical space and audience access become structured, biddable inventory.",
    humanTruth:
      "Some of the most valuable commercial opportunities in a city are almost impossible to find.",
    problem:
      "Vendors and businesses still discover temporary commercial inventory through relationships, forms, calls, emails, PDFs, and last-minute luck.",
    system:
      "Hosts publish venues, events, opportunities, and inventory units. Bidders discover map/list inventory, evaluate fit, submit sealed bids, and move toward booking, verification, payment, and reputation.",
    dataAdvantage:
      "BidSpace compounds around geospatial inventory truth, bid history, host selection behavior, performance data, trust provenance, and fit signals across physical locations.",
    business:
      "The platform can monetize accepted commercial access through a seller-side commission and host tooling while keeping bidding flexible and curated.",
    vision:
      "Infrastructure for pricing, distributing, and transacting temporary physical opportunity.",
    emotionalQuality: "Opportunity in motion",
    visualPhysics: ["map activity", "inventory geometry", "bids", "market movement"],
    threads: ["Discovery", "Marketplace", "Spatial", "Trust"],
    industries: ["spatial commerce", "events", "venues", "local retail", "sponsorship"],
    capabilities: [
      "Inventory units",
      "Venue and event objects",
      "Map/list discovery",
      "Sealed bidding",
      "Trust and fit services",
      "Stripe Connect direction",
    ],
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
        label: "Engine verified",
        detail:
          "The internal marketplace loop was run against the live database end to end: a $280 booking produced a 10% fee and a $252 payout, and recurring copy-forward was verified.",
        href: "https://github.com/AutomatedEmpires/bidspace",
      },
      {
        label: "Service layer evidence",
        detail:
          "The repo includes bidding, booking, discovery, geospatial, payments, reviews, trust, venues, and inventory services across 43 routes.",
      },
      {
        label: "Stage truth",
        detail:
          "Software is complete and Stripe Connect is modernized to controller-property accounts; deployment is deliberately held on founder Clerk and Stripe KYC so nothing broken ships.",
      },
    ],
    milestones: [
      {
        date: "2026-07-07",
        title: "Software complete, Connect modernized",
        detail:
          "Reached software-complete with the payment engine verified and Stripe Connect moved off the deprecated express type, with webhook settlement hardened against mid-flight crashes.",
      },
      {
        date: "2026-07-06",
        title: "Public marketplace pass",
        detail:
          "Homepage, explore, map, opportunity, and inventory-unit detail surfaces landed on the recovered-product integration branch.",
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
    status: "Building",
    oneLiner: "The operating network for timber trucking — loads and capacity, matched.",
    publicStatus:
      "Security-verified and deployment-ready. The core operating loop (request → approve → trip progress → message) is proven with 22/22 end-to-end tests; a critical data exposure was found and closed. Single-node launch is prepared to the last inch and gated on approving a host.",
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
    threads: ["Marketplace", "Spatial", "Real-world ops", "Trust"],
    industries: ["timber", "logistics", "trucking", "forestry", "regional operations"],
    capabilities: [
      "Driver cockpit",
      "Fleet cockpit",
      "Host cockpit",
      "Admin cockpit",
      "Route packs",
      "Assignment and availability services",
    ],
    platformProfile: "AE Commercial Platform",
    repository: "https://github.com/AutomatedEmpires/logloads",
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
        label: "Security verified",
        detail:
          "A full-state PII table was found anonymously readable and writable, then locked to service-role only and proven denied from outside; 35 of 36 public tables now enforce row-level security.",
        href: "https://github.com/AutomatedEmpires/logloads",
      },
      {
        label: "Core loop proven",
        detail:
          "Request, approve, trip progress, and message pass end to end with 22/22 Playwright tests across mobile and desktop and a green validate pipeline.",
      },
      {
        label: "Safety boundary",
        detail:
          "Sensitive coordinates, gate instructions, private roads, and route packs are redacted server-side until the viewer is assigned or owns the load.",
      },
    ],
    milestones: [
      {
        date: "2026-07-07",
        title: "Security reconciled, deployment prepared",
        detail:
          "Row-level security coverage was reconciled and the critical exposure closed; Dockerfile, fly config, deployment docs, and a post-deploy smoke test reduce launch to approving a host.",
      },
      {
        date: "2026-07-06",
        title: "V3 cockpit build fleet",
        detail:
          "Driver, host, fleet, admin, map, public, messages, and monetization surfaces were built around session-based identity.",
      },
    ],
  },
  {
    id: "sweepza",
    slug: "sweepza",
    name: "Sweepza",
    fullName: "Sweepza",
    classification: "active-company",
    stage: "Active Build",
    status: "Live",
    oneLiner: "Sweepstakes, simplified — a photo-first way to find and win the real ones.",
    publicStatus:
      "Live on sweepza.com with billing configured. Public pages are deployed and healthy, live Stripe checkout creation is proven end to end, and production data is clean. The last step is a single real-card checkout to prove revenue; observability and production identity are named follow-ups.",
    thesis:
      "Sweepstakes, simplified: a fast, photo-first consumer operating system for discovering, organizing, entering, re-entering, tracking, and winning legitimate sweepstakes.",
    humanTruth:
      "The internet is full of chances to win. Finding the real ones should not feel like losing.",
    problem:
      "Sweepstakes discovery is often ugly, spammy, noisy, difficult to trust, visually poor, and unpleasant to browse.",
    system:
      "A daily habit surface for seekers, unified discover feed and swipe modes, saved and entered state, winners, host publishing, admin review, reports, billing, notifications, and observability.",
    dataAdvantage:
      "Sweepza can compound around listing quality, seeker routines, re-entry timing, host reputation, winner proof, reports, and category-level discovery behavior.",
    business:
      "Seekers use the product for free while hosts can publish and manage legitimate sweepstakes through paid or metered host products once provider setup is complete.",
    vision:
      "A trusted discovery layer for legitimate chances to win.",
    emotionalQuality: "Anticipation",
    visualPhysics: ["reveals", "cards", "countdowns", "visual discovery"],
    threads: ["Discovery", "Trust"],
    industries: ["sweepstakes", "consumer promotions", "creator campaigns", "brand growth"],
    capabilities: [
      "Today dashboard",
      "Discover feed",
      "Swipe mode",
      "My Sweeps routine",
      "Winner wall",
      "Host publishing",
      "Admin review",
    ],
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
        label: "Live with billing configured",
        detail:
          "sweepza.com serves the public product from Vercel; a live Stripe checkout session was created against a KYC-complete account, proving app to live product to live checkout.",
        href: "https://sweepza.com",
      },
      {
        label: "Consumer OS surfaces",
        detail:
          "Routes include Today, Discover, Swipe, My Sweeps, Winners, Host, Admin, Profile, Search, Saved, and listing detail.",
      },
      {
        label: "Honest empty state",
        detail:
          "All synthetic seed rows were removed with scoped predicates, so production starts from a clean, honest zero rather than fake traction.",
      },
    ],
    milestones: [
      {
        date: "2026-07-07",
        title: "Live billing configured, data cleaned",
        detail:
          "Sweepza-namespaced live products, prices, and webhook were provisioned; a live checkout session was created and expired cleanly, and all synthetic data was removed.",
      },
      {
        date: "2026-07-06",
        title: "Consumer operating system convergence",
        detail:
          "Today, My Sweeps, and unified Discover moved into a more complete routine-first product pass.",
      },
    ],
  },
  {
    id: "pinnedatlas",
    slug: "pinnedatlas",
    name: "PinnedAtlas",
    fullName: "PinnedAtlas",
    classification: "active-company",
    stage: "Operating Company",
    status: "Live",
    oneLiner: "A living map of caves, waterfalls, springs, and hot springs worth finding.",
    publicStatus:
      "Operating on pinnedatlas.com. The free, map-first product is fully live: a viewport-synced listing panel over roughly 14,900 real natural locations, with type filters, name search, and geolocation. Accounts and payments are implemented but dormant behind founder gates — the core product needs neither.",
    thesis:
      "A map-first atlas of the natural world, treating the map itself as the interface to spatial knowledge about places worth visiting.",
    humanTruth:
      "The best places are already out there. The hard part is knowing where they are and trusting what you find.",
    problem:
      "Knowledge about natural places is scattered across forums, PDFs, old listings, and word of mouth, with no trustworthy map-first way to browse, filter, and compare what is actually near you.",
    system:
      "A full MapLibre map on the landing surface with a viewport-synced listing panel ordered nearest-to-center, list and pin hover sync, a mobile map/list toggle, type filters, name search, and geolocation over verified public location data.",
    dataAdvantage:
      "The compounding asset is a structured, deduplicated corpus of natural locations with type, provenance, and spatial relationships — a base that grows more valuable as coverage, corrections, and community signal accumulate.",
    business:
      "The map and browse experience is free and public. Optional accounts (saves, visit logs, notes, submissions) and premium access are fully built but intentionally dormant until they earn activation.",
    vision:
      "A trusted spatial interface to the natural world.",
    emotionalQuality: "Wonder, made findable",
    visualPhysics: ["maps", "pins", "layers", "viewport"],
    threads: ["Discovery", "Spatial", "Civic"],
    industries: ["outdoor recreation", "geospatial", "travel", "public knowledge"],
    capabilities: [
      "Full-map landing",
      "Viewport-synced list",
      "Type filters",
      "Name search",
      "Geolocation",
      "Mobile map/list toggle",
    ],
    platformProfile: "AE Commercial Platform",
    repository: "https://github.com/AutomatedEmpires/pinnedatlas",
    website: "https://pinnedatlas.com",
    showcaseMode: "product",
    featured: true,
    palette: {
      base: "#1d3b46",
      accent: "#4bb0a6",
      support: "#e0b15a",
      wash: "#eaf4f2",
    },
    proof: [
      {
        label: "Live free product",
        detail:
          "pinnedatlas.com serves a map-first homepage over HTTPS with roughly 14,900 real locations — about 11,200 springs, 2,700 waterfalls, 650 caves, and 370 hot springs.",
        href: "https://pinnedatlas.com",
      },
      {
        label: "No-token map stack",
        detail:
          "The map runs on MapLibre GL with free CARTO vector tiles and correct OpenStreetMap attribution — no proprietary token required to operate.",
      },
      {
        label: "Honest gating",
        detail:
          "Accounts, saves, submissions, and paid access are implemented but dormant; the core browse product is fully public and needs none of them.",
      },
    ],
    milestones: [
      {
        date: "2026-07-08",
        title: "Map-first product operating on its own domain",
        detail:
          "The owned domain was verified over SSL and the map-first homepage went live with the viewport-synced listing panel and roughly 14,900 locations serving from the API.",
      },
      {
        date: "2026-07-06",
        title: "Coverage and spatial browse",
        detail:
          "Type filters, name search, geolocation, and nearest-to-center ordering established the map as the primary interface to the location corpus.",
      },
    ],
  },
  {
    id: "lake-and-pine",
    slug: "lake-and-pine",
    name: "Lake & Pine",
    fullName: "Lake & Pine Cleaning Co.",
    classification: "operating-business",
    stage: "Operating Company",
    status: "Live",
    oneLiner: "Premium home cleaning in Coeur d'Alene and Spokane, run like software.",
    publicStatus:
      "Operating business live on lakeandpinecleaning.com. The production Next.js site is deployed and verified, with placeholder contact details removed so nothing dishonest is shown. It proves the AutomatedEmpires instinct applies to a real service company, not only software concepts.",
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
    threads: ["Real-world ops", "Trust"],
    industries: ["home services", "cleaning", "local operations", "customer experience"],
    capabilities: [
      "Service modules",
      "Instant estimate concept",
      "Booking flow",
      "Customer dashboard",
      "Reviews",
      "Service-area content",
    ],
    platformProfile: "AE Operating Business",
    repository: "https://github.com/AutomatedEmpires/lakeandpine",
    website: "https://lakeandpinecleaning.com",
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
        label: "Live operating business",
        detail:
          "lakeandpinecleaning.com and its www host serve the production site from Vercel over HTTPS with a verified custom domain.",
        href: "https://lakeandpinecleaning.com",
      },
      {
        label: "Production foundation",
        detail:
          "The production branch establishes a typed Next.js App Router foundation grounded in recovered product truth rather than a premature port.",
      },
      {
        label: "Scope honesty",
        detail:
          "Placeholder phone details were removed and CTAs are suppressed until a real business number exists; invoices, referrals, and concierge remain represented concepts.",
      },
    ],
    milestones: [
      {
        date: "2026-07-06",
        title: "Production site live, placeholders removed",
        detail:
          "The site verified on its custom domain and a placeholder phone number was removed from every production contact path so nothing misleading is shown.",
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
    status: "Mission",
    oneLiner: "Public infrastructure for finding the right help in time.",
    publicStatus:
      "Mission-driven system with substantial docs, migrations, workflows, Azure-first platform canon, deterministic scoring, verification workflow, and safety-critical product rules.",
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
    threads: ["Discovery", "Trust", "Civic", "Decision support"],
    industries: ["civic technology", "resource navigation", "human services", "public infrastructure"],
    capabilities: [
      "Retrieval-first chat",
      "Map and directory",
      "Verification workflow",
      "Deterministic scoring",
      "Crisis hard gate",
      "Azure-first operations",
    ],
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
          "The repo is intentionally Azure-first for App Service, PostgreSQL/PostGIS, Key Vault, Functions, Azure Maps, Application Insights, and related civic infrastructure needs.",
      },
    ],
    milestones: [
      {
        date: "2026-06-09",
        title: "Civic infrastructure canon preserved",
        detail:
          "ORAN surfaced platform, scoring, safety, evidence, and partner brief documentation as public repo truth.",
      },
      {
        date: "2026-06-09",
        title: "Azure-first posture documented",
        detail:
          "Production resource inventory and OIDC-oriented Azure deployment direction are documented in the platform canon.",
      },
    ],
  },
  {
    id: "automated-interviewer",
    slug: "automated-interviewer",
    name: "AutomatedInterviewer",
    fullName: "AutomatedInterviewer",
    classification: "emerging-system",
    stage: "Emerging",
    status: "Concept",
    oneLiner: "Structured interviews that turn conversations into defensible decisions.",
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
    threads: ["Decision support", "Trust"],
    industries: ["recruiting", "marketplaces", "screening", "operations"],
    capabilities: ["Structured interviews", "Evidence capture", "Rubric scoring", "Human decision support"],
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
];

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

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}

export const statusMeta: Record<VentureStatus, { label: string; blurb: string }> = {
  Live: { label: "Live", blurb: "Public and reachable on its own domain." },
  Building: { label: "Building", blurb: "Software proven; deployment founder-gated." },
  Mission: { label: "Mission system", blurb: "Civic infrastructure, canon-first." },
  Concept: { label: "Concept", blurb: "Strategic space; no shipped product yet." },
};

// Ordered vocabulary for the ecosystem map. The description names the shared instinct so the
// relationship between ventures reads as meaning, not decoration.
export const threadMeta: Record<VentureThread, { description: string }> = {
  Discovery: { description: "Making something valuable easy to find." },
  Marketplace: { description: "Two-sided liquidity between supply and demand." },
  Spatial: { description: "Map-first products where place is the interface." },
  Trust: { description: "Making trust and provenance visible before action." },
  "Real-world ops": { description: "Software grounded in physical operations." },
  Civic: { description: "Built for public benefit, not only commercial return." },
  "Decision support": { description: "Turning evidence into defensible decisions." },
};

export const allThreads = Object.keys(threadMeta) as VentureThread[];

export function venturesByThread(thread: VentureThread) {
  return ventures.filter((venture) => venture.threads.includes(thread));
}

export function sharedThreads(a: Venture, b: Venture) {
  return a.threads.filter((thread) => b.threads.includes(thread));
}

export const platformProfiles = [
  {
    name: "AE Commercial Platform" as const,
    description:
      "Shared operating standards for commercial software ventures: TypeScript, Next.js, pnpm, Vercel, Supabase/Postgres where useful, Clerk, Stripe, MapLibre/Mapbox for spatial products, Doppler, PostHog, Sentry, Cloudinary, and product-specific restraint.",
    members: ["Explore&Earn", "BidSpace", "LogLoads", "Sweepza", "PinnedAtlas"],
  },
  {
    name: "AE Civic Infrastructure" as const,
    description:
      "Azure-first by intentional exception. ORAN prioritizes governance, verification, safety, privacy, auditability, evidence, reproducibility, and public trust over stack symmetry.",
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
    members: ["AutomatedInterviewer"],
  },
];
