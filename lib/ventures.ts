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
    publicStatus:
      "Active build. Current repo evidence includes full seeker, host, admin, listing, map, swipe, and legal route structures, while canon still treats product truth as Notion-led.",
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
        label: "Product principle",
        detail:
          "Repo canon defines Explore&Earn as a mobile-first, card-first marketplace where housing, meals, and pay remain first-class.",
        href: "https://github.com/AutomatedEmpires/explore-and-earn",
      },
      {
        label: "Current implementation signal",
        detail:
          "The active branch contains seeker, host, admin, listing detail, search, map, swipe, notifications, messages, and legal surfaces.",
      },
      {
        label: "Public deployment",
        detail: "GitHub metadata points to the Vercel deployment for the product.",
        href: "https://exploreandearn.com",
      },
    ],
    milestones: [
      {
        date: "2026-07-06",
        title: "Launch-convergence hardening",
        detail:
          "Auth matchers, keyless fallback behavior, listing creation, and mobile resume polish moved the product closer to a resilient public surface.",
      },
      {
        date: "2026-07-05",
        title: "Production-convergence proof",
        detail:
          "Anonymous discovery and end-to-end migration proof were closed in the active product history.",
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
    publicStatus:
      "Active build. The repo has shipped database, service, trust, fit, public marketplace, explore, map, opportunity, and inventory-unit detail foundations on an integration branch.",
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
        label: "Locked marketplace primitive",
        detail: "Inventory Unit is the canonical primitive, separate from Opportunity.",
        href: "https://github.com/AutomatedEmpires/bidspace",
      },
      {
        label: "Service layer evidence",
        detail:
          "The repo includes bidding, booking, discovery, geospatial, payments, reviews, trust, venues, and inventory services.",
      },
      {
        label: "Stage truth",
        detail:
          "Map/list discovery and payments have backend foundations; several UI and live-provider pieces remain pending by roadmap.",
      },
    ],
    milestones: [
      {
        date: "2026-07-06",
        title: "Public marketplace pass",
        detail:
          "Homepage, explore, map, opportunity, and inventory-unit detail surfaces landed on the recovered-product integration branch.",
      },
      {
        date: "2026-07-06",
        title: "Network, trust, and fit layer",
        detail:
          "Repository history added trust provenance, fit logic, listing queries, and a product-specific design system.",
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
    publicStatus:
      "Active build. Current branch contains authenticated driver, fleet, host, and admin cockpit work plus services for loads, routes, assignments, equipment, messaging, billing, and notifications.",
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
        label: "Name and domain locked",
        detail: "Repo canon locks LogLoads and logloads.com; retired placeholders are explicitly banned.",
        href: "https://github.com/AutomatedEmpires/logloads",
      },
      {
        label: "Backend reality",
        detail:
          "Contracts, seed data, snapshot persistence, network read models, server actions, route handlers, and service packages are implemented.",
      },
      {
        label: "Safety boundary",
        detail:
          "Sensitive coordinates, gate instructions, private roads, and route packs are redacted server-side until the viewer is assigned or owns the load.",
      },
    ],
    milestones: [
      {
        date: "2026-07-06",
        title: "V3 cockpit build fleet",
        detail:
          "Driver, host, fleet, admin, map, public, messages, and monetization surfaces were built around session-based identity.",
      },
      {
        date: "2026-07-06",
        title: "Billing and service registration polish",
        detail:
          "Billing webhook and service registration work moved the operating network closer to provider-backed readiness.",
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
    publicStatus:
      "Active build with a live Vercel alias. The repo contains Today, Discover, My Sweeps, Winners, Profile, Host, Admin, search, seeker state, billing, reports, and winner submission surfaces.",
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
        label: "Live alias",
        detail: "The verified production deployment is served from the canonical Sweepza domain.",
        href: "https://sweepza.com",
      },
      {
        label: "Consumer OS surfaces",
        detail:
          "Routes include Today, Discover, Swipe, My Sweeps, Winners, Host, Admin, Profile, Search, Saved, and listing detail.",
      },
      {
        label: "Provider truth",
        detail:
          "Supabase and Vercel are provisioned; remaining Clerk, Stripe, PostHog, and Sentry keys are documented as provider-side follow-ups.",
      },
    ],
    milestones: [
      {
        date: "2026-07-06",
        title: "Consumer operating system convergence",
        detail:
          "Today, My Sweeps, and unified Discover moved into a more complete routine-first product pass.",
      },
      {
        date: "2026-06-07",
        title: "Winner wall and observability",
        detail:
          "Winner posts, reactions, submission flow, PostHog, and Sentry integration slices landed in product history.",
      },
    ],
  },
  {
    id: "lake-and-pine",
    slug: "lake-and-pine",
    name: "Lake & Pine",
    fullName: "Lake & Pine",
    classification: "operating-business",
    stage: "Operating Company",
    publicStatus:
      "Operating business with a recovered product prototype and a production Next.js foundation branch. The software is being shaped around estimate, booking, customer dashboard, and repeat-service operations.",
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
    platformProfile: "AE Operating Business",
    repository: "https://github.com/AutomatedEmpires/lakeandpine",
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
        label: "Operating business truth",
        detail:
          "The recovered prototype documents services, pricing, booking, service areas, reviews, customer dashboard, billing, and concierge states.",
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
        date: "2026-07-06",
        title: "Production foundation",
        detail:
          "The repo established a typed Next.js application foundation grounded in recovered product truth.",
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

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}

export const platformProfiles = [
  {
    name: "AE Commercial Platform" as const,
    description:
      "Shared operating standards for commercial software ventures: TypeScript, Next.js, pnpm, Vercel, Supabase/Postgres where useful, Clerk, Stripe, Mapbox for spatial products, Doppler, PostHog, Sentry, Cloudinary, and product-specific restraint.",
    members: ["Explore&Earn", "BidSpace", "LogLoads", "Sweepza"],
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
