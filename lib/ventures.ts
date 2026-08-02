export type VentureGroup = "company" | "mission" | "operating" | "lab";

export type VentureStage =
  | "Live"
  | "Launch track"
  | "Pilot build"
  | "Regional preview"
  | "In development"
  | "Studio concept";

export type VentureTone = "live" | "active" | "building" | "concept";

export type VenturePalette = {
  ink: string;
  accent: string;
  soft: string;
};

export type Venture = {
  id: string;
  slug: string;
  name: string;
  fullName?: string;
  group: VentureGroup;
  stage: VentureStage;
  tone: VentureTone;
  category: string;
  tagline: string;
  summary: string;
  audience: string;
  problem: string;
  product: string;
  capabilities: string[];
  currentFocus: string;
  latestUpdate: string;
  latestDate: string;
  vision: string;
  website?: string;
  websiteLabel?: string;
  repository?: string;
  customerNote?: string;
  /**
   * Point-in-time production verification. `date` is when the evidence was
   * gathered against the live system; `status` is one precise sentence; every
   * `evidence` entry must be independently checkable (a URL, a route, a public
   * behavior) — never aspiration.
   */
  verified?: {
    date: string;
    status: string;
    evidence: string[];
  };
  businessModel?: string;
  /** The single current need — operator, pilot, partner, investment discussion, or none. */
  ask?: string;
  /** Public-safe open risks. Material, honest, non-exploitable. */
  openRisks?: string[];
  screenshot?: {
    src: string;
    alt: string;
    capturedAt: string;
    environment: string;
    width: number;
    height: number;
  };
  featured: boolean;
  visual:
    | "explore"
    | "logloads"
    | "sweepza"
    | "bidspace"
    | "lake"
    | "oran"
    | "atlas"
    | "interviewer"
    | "certstack";
  palette: VenturePalette;
};

export const ventures: Venture[] = [
  {
    id: "explore-and-earn",
    slug: "explore-and-earn",
    name: "Explore&Earn",
    group: "company",
    stage: "Live",
    tone: "live",
    category: "Work-travel marketplace",
    tagline: "Go where the work takes you.",
    summary:
      "A seeker-first marketplace for seasonal and place-based work, with housing, meals, and pay brought into one honest decision.",
    audience: "Seasonal workers, travelers, and the hosts who need them",
    problem:
      "The best place-based work is scattered across job boards, Facebook groups, local networks, and word of mouth. The opportunity is real, but the facts people need to act are usually incomplete.",
    product:
      "Explore&Earn turns that fragmented search into a visual marketplace. Seekers can browse, swipe, map, save, and apply while comparing housing, meals, pay, host context, and timing in one consistent experience.",
    capabilities: [
      "Seek, swipe, map, and profile journeys",
      "Housing, meals, and pay on every opportunity",
      "Verified housing photo evidence",
      "Host listings, applications, and trust signals",
      "Saved opportunities and journey planning",
      "Marketplace moderation and source provenance",
    ],
    currentFocus:
      "Winning first supply: recruiting the first hosts so the live feed carries real opportunities with housing, meals, and pay complete on every listing.",
    latestUpdate:
      "The platform is live end to end — redesigned seeker experience, production sign-in, and billing rails built and deliberately gated. The public feed shows exactly what hosts have published, and the first listings are the current milestone.",
    latestDate: "2026-07-31",
    vision: "The opportunity layer for people willing to go where the work is.",
    website: "https://exploreandearn.com",
    websiteLabel: "Open Explore&Earn",
    repository: "https://github.com/AutomatedEmpires/explore-and-earn",
    customerNote:
      "Explore&Earn is live. Opportunity details come from hosts and source evidence and should be confirmed before making travel or employment decisions.",
    verified: {
      date: "2026-07-31",
      status:
        "Live at exploreandearn.com with production sign-in, a public listings API, and billing rails built and deliberately gated. The marketplace feed is empty until the first hosts publish.",
      evidence: [
        "Production domain serves the full product with per-page metadata; the public seeker browse surface works without an account",
        "Production authentication runs on a dedicated live identity instance at clerk.exploreandearn.com",
        "Billing is implemented end to end (checkout, portal, tiers) and intentionally cannot charge until founder activation — no real card has ever been charged",
        "The public feed reports exactly what hosts have published — zero listings today, disclosed on the page itself",
        "A public API and machine-readable interfaces (llms.txt, MCP server, JSON-LD) ship in production",
      ],
    },
    businessModel:
      "Hosts pay for placement through subscription tiers and announcement products (built and gated); the marketplace is free for seekers.",
    ask: "First hosts: seasonal employers who want real opportunities in front of seekers at launch.",
    openRisks: [
      "Marketplace cold start — supply has to arrive before the engineering maturity matters commercially",
      "Revenue activation is founder-gated behind a payment-account verification step",
    ],
    screenshot: {
      src: "/evidence/2026-08-01/explore-and-earn-1440.png",
      alt: "Explore&Earn production homepage: seeker-first search over housing, meals, and pay",
      capturedAt: "2026-08-01",
      environment: "Production — exploreandearn.com",
      width: 1440,
      height: 900,
    },
    featured: true,
    visual: "explore",
    palette: { ink: "#15382e", accent: "#b9ff66", soft: "#e9f4d8" },
  },
  {
    id: "logloads",
    slug: "logloads",
    name: "LogLoads",
    group: "company",
    stage: "Pilot build",
    tone: "active",
    category: "Forestry logistics",
    tagline: "Keep timber moving.",
    summary:
      "Coordination software for landings, drivers, fleets, and the teams moving timber from woods to mill.",
    audience: "Forestry operators, drivers, fleet teams, and load owners",
    problem:
      "Timber transportation still runs on calls, private relationships, incomplete route notes, and manual dispatch. Loads wait for trucks while trucks wait for the right load.",
    product:
      "LogLoads creates a shared operating network for publishing work, matching capacity, assigning drivers, protecting private access details, and keeping every trip visible from landing to mill.",
    capabilities: [
      "Organization-owned load publishing",
      "Driver, fleet, host, and admin workspaces",
      "Equipment and route-fit workflows",
      "Assignment-aware access and driver briefings",
      "Scheduling, slots, and commitment tracking",
      "Operational messaging and trip history",
    ],
    currentFocus:
      "Hardening the scheduling and assignment loop so published loads, slots, and driver commitments stay truthful end to end.",
    latestUpdate:
      "Scheduling integrity landed: the network now defines exactly what a slot commitment means — and what driver silence means — so the day's plan can be trusted.",
    latestDate: "2026-07-24",
    vision: "A connected operating network for timber transportation.",
    website: "https://logloads.com",
    websiteLabel: "Explore the preview",
    repository: "https://github.com/AutomatedEmpires/logloads",
    customerNote:
      "LogLoads is coordination software for forestry logistics teams — not a broker, carrier, dispatch-for-hire operator, or payment processor. It is in pilot; conversations are focused on real operating workflows and regional fit.",
    verified: {
      date: "2026-07-31",
      status:
        "Live at logloads.com: the full public product — pricing, role pages, legal set, sign-up — with an honestly empty public load board while pilot activation stays founder-gated.",
      evidence: [
        "Public site serves marketing, pricing, legal, and sign-in surfaces in production",
        "Published pricing is real: drivers free forever, Dispatch Pro $499/mo for fleets, metered host Network plans billed on completed loads only",
        "Subscription billing is implemented and proven in test mode; collection is disabled until a founder-led pilot activation ledger completes",
        "The public board states plainly when no loads are public — no fabricated activity",
        "Public pages state pay is set by the host; no platform-invented driver-pay figures remain",
      ],
    },
    businessModel:
      "Hosts pay metered Network subscriptions on completed load movements only; drivers are free. Strictly non-custodial: LogLoads is not a broker, carrier, dispatcher-for-hire, or payment processor.",
    ask: "A pilot: one regional timber operation ready to run its real loads through the network.",
    openRisks: [
      "Zero customers today; enterprise-scale pricing is published ahead of the first pilot",
      "A transitional data layer is being replaced in-flight as part of an active reconstruction program",
    ],
    screenshot: {
      src: "/evidence/2026-08-01/logloads-1440.png",
      alt: "LogLoads production homepage: the public timber load board and operating network",
      capturedAt: "2026-08-01",
      environment: "Production — logloads.com",
      width: 1440,
      height: 900,
    },
    featured: true,
    visual: "logloads",
    palette: { ink: "#14251b", accent: "#ffb15c", soft: "#e7ecdf" },
  },
  {
    id: "sweepza",
    slug: "sweepza",
    name: "Sweepza",
    group: "company",
    stage: "Live",
    tone: "live",
    category: "Giveaway discovery",
    tagline: "Find the good stuff before it ends.",
    summary:
      "A fast, modern way to discover legitimate sweepstakes and giveaways from official public sources.",
    audience: "People who love discovering credible giveaways",
    problem:
      "Promotions are scattered across sponsor sites, social posts, newsletters, and short-lived campaigns. Finding credible opportunities takes time and trust is hard to judge.",
    product:
      "Sweepza organizes promotions into a clear discovery feed with source verification, saved items, reminders, transparent listing states, and direct access to official rules and entry pages.",
    capabilities: [
      "Official-source promotion discovery",
      "Direct links to official rules and entry",
      "Saved giveaways and reminders",
      "Freshness and expiration tracking",
      "Host and sponsor submissions",
      "Transparent listing states",
    ],
    currentFocus:
      "Expanding high-quality source coverage and making reminders more dependable across the live discovery experience.",
    latestUpdate:
      "A redesigned, mobile-first discovery experience shipped to the live product, refreshing how people find, track, and enter giveaways.",
    latestDate: "2026-07-29",
    vision: "The trusted discovery layer for promotions worth your attention.",
    website: "https://sweepza.com",
    websiteLabel: "Open Sweepza",
    repository: "https://github.com/AutomatedEmpires/sweepza",
    customerNote:
      "Promotions are offered by their original sponsors. Sweepza helps people discover them and links to the official source for rules and entry.",
    verified: {
      date: "2026-07-31",
      status:
        "Live at sweepza.com: discovery feed, listing detail, winner wall, and host submission all serve in production. Inventory is deliberately small while source ingestion awaits compliance activation.",
      evidence: [
        "The live feed renders real, curated sweepstakes with direct links to official rules and entry",
        "A scheduled production smoke check probes the live site every six hours and has passed continuously",
        "The ingestion engine is built but dark behind explicit compliance gates — today's listings are curated manually",
        "The winner wall shows only what members have actually posted; empty states are honest",
        "Billing is built and deliberately inactive; seekers are free by design",
      ],
    },
    businessModel:
      "Host-funded subscriptions and listing add-ons (built, not yet activated). Sweepza links out to official sponsors and never operates promotions itself.",
    ask: "Official promotion sources and partners as ingestion activates.",
    openRisks: [
      "Inventory depth depends on the founder's ingestion activation decision",
      "Entry streaks are self-reported and winner posts are moderated, not independently verified — and the product says so",
    ],
    screenshot: {
      src: "/evidence/2026-08-01/sweepza-1440.png",
      alt: "Sweepza production homepage: the daily sweepstakes discovery run",
      capturedAt: "2026-08-01",
      environment: "Production — sweepza.com",
      width: 1440,
      height: 900,
    },
    featured: true,
    visual: "sweepza",
    palette: { ink: "#24122f", accent: "#ff4fa3", soft: "#f7e2f1" },
  },
  {
    id: "lake-and-pine",
    slug: "lake-and-pine",
    name: "Lake & Pine",
    group: "operating",
    stage: "Live",
    tone: "live",
    category: "Premium property care",
    tagline: "Interior care for exceptional properties.",
    summary:
      "A premium cleaning and property care company serving homeowners and property managers, with a consultation-first approach to every property.",
    audience: "Homeowners, property managers, and second-home owners",
    problem:
      "Premium property care is judged on consistency, and consistency is usually held together by texts, memory, and the one person who knows every detail about the house.",
    product:
      "Lake & Pine is the operating business itself: a consultative intake that starts with the property, standards written down instead of remembered, and service built around how each home is actually used.",
    capabilities: [
      "Consultation-first client intake",
      "Property-specific care standards",
      "Recurring and seasonal service",
      "Second-home and property-manager care",
      "Direct, accountable communication",
      "Local service in North Idaho",
    ],
    currentFocus:
      "Activating direct contact channels for the consultation intake, then turning repeatable service standards into the operating discipline behind the business.",
    latestUpdate:
      "The public site leads with a consultation-first intake, matching how premium property care actually starts: a conversation about the property, not a checkout. Direct phone and email are being activated.",
    latestDate: "2026-07-30",
    vision:
      "Prove the operating discipline in a real service business before turning it into software.",
    website: "https://lakeandpinecleaning.com",
    websiteLabel: "Visit Lake & Pine",
    repository: "https://github.com/AutomatedEmpires/lakeandpine",
    customerNote:
      "Lake & Pine works consultation-first: scheduling and pricing are handled through a direct conversation rather than online checkout.",
    verified: {
      date: "2026-07-31",
      status:
        "The consultative site is live at lakeandpinecleaning.com. Direct contact channels and the consultation intake are the current activation step, so the site cannot yet capture a lead.",
      evidence: [
        "Live branded site with LocalBusiness structured data across service, area, and booking pages",
        "Operating gates (consultation intake, cleaner applications, payments) are deliberately fail-closed until contact channels activate — stated on the site itself",
        "A full operations platform (crew workspace, scheduling, care standards, refund ledger) exists in code ahead of first use",
        "No online checkout by design: pricing is a custom proposal after a consultation",
      ],
    },
    businessModel:
      "Clients pay for recurring and seasonal property care via custom proposals after a consultation; no self-serve checkout.",
    ask: "First consultations in North Idaho once direct phone and email activate.",
    openRisks: [
      "Lead capture is not yet active — organic demand cannot be recorded until intake and contact channels turn on",
      "The venture's long-term shape (local service business vs. property-care operating platform) is an open founder decision",
    ],
    screenshot: {
      src: "/evidence/2026-08-01/lake-and-pine-1440.png",
      alt: "Lake & Pine production homepage: consultation-first premium property care",
      capturedAt: "2026-08-01",
      environment: "Production — lakeandpinecleaning.com",
      width: 1440,
      height: 900,
    },
    featured: true,
    visual: "lake",
    palette: { ink: "#20352f", accent: "#92c7a8", soft: "#e7eee8" },
  },
  {
    id: "oran",
    slug: "oran",
    name: "ORAN",
    fullName: "Open Resource Access Network",
    group: "mission",
    stage: "Regional preview",
    tone: "building",
    category: "Civic resource navigation",
    tagline: "Explain what is wrong. Find the right next step.",
    summary:
      "Chat-first civic infrastructure that helps people find verified services based on need, eligibility, location, urgency, and access.",
    audience: "People seeking help and the community teams supporting them",
    problem:
      "People in difficult situations are often handed a directory and expected to understand programs, eligibility, geography, transportation, and urgency on their own.",
    product:
      "ORAN begins with the person, not the database. Guided intake turns a real situation into verified service matches with clear reasoning, source provenance, issue reporting, and human review.",
    capabilities: [
      "Chat-first guided intake",
      "Eligibility and location-aware matching",
      "Verified provider records",
      "Urgency and crisis-aware routing",
      "Source provenance and stale-record detection",
      "Community review and issue reporting",
    ],
    currentFocus:
      "Preparing a regional release candidate for North Idaho and Eastern Washington with trusted seeker journeys and durable privacy controls.",
    latestUpdate:
      "Seeker browsing became clearer: browse-by-area on the map, an honest quota display, and one consistent pagination model across discovery.",
    latestDate: "2026-07-29",
    vision: "A trusted front door to the help already available in a community.",
    repository: "https://github.com/AutomatedEmpires/Open-Resource-Access-Network",
    customerNote:
      "ORAN is preparing a regional preview. It routes people toward verified services and appropriate crisis resources; it is not an emergency service.",
    verified: {
      date: "2026-07-31",
      status:
        "The full product runs on a production preview deployment with real verified-provider data flowing through the actual retrieval engine. A public regional launch has not happened yet.",
      evidence: [
        "The production API returns real published services — government-sourced health and community providers with addresses, coordinates, verification timestamps, and confidence scores",
        "Six scheduled jobs run daily in production: ingestion, freshness scanning, SLA checks, coverage-gap detection, confidence regression, and account erasure",
        "CI enforces an accessibility gate, visual regression, and a bundle-size budget on every change",
        "Records carry source provenance and stale-record detection rather than unqualified accuracy claims",
      ],
    },
    businessModel:
      "Pre-revenue civic infrastructure; sustainability model (grants, institutional partnerships) is an open question being answered with partners, not assumed.",
    ask: "Community organizations and institutional partners in North Idaho and Eastern Washington for the regional preview.",
    openRisks: [
      "All published records so far come from bulk verified-source ingestion; organic provider participation is still to be earned",
      "Mobile bundle weight is above target; a measured reduction program is underway",
    ],
    screenshot: {
      src: "/evidence/2026-08-01/oran-1440.png",
      alt: "ORAN production preview: plain-language intake that turns a situation into verified service matches",
      capturedAt: "2026-08-01",
      environment: "Production preview — oran-sandy.vercel.app",
      width: 1440,
      height: 900,
    },
    featured: true,
    visual: "oran",
    palette: { ink: "#102d39", accent: "#6de0cf", soft: "#ddf2ef" },
  },
  {
    id: "bidspace",
    slug: "bidspace",
    name: "BidSpace",
    group: "company",
    stage: "In development",
    tone: "building",
    category: "Temporary vendor-space marketplace",
    tagline: "Put the right vendor in the right place.",
    summary:
      "A marketplace connecting hosts with vendors for booths, pop-ups, food-truck pads, stalls, kiosks, and other short-term commercial spaces.",
    audience: "Venue hosts, event operators, pop-up vendors, and food trucks",
    problem:
      "Temporary commercial space is valuable but hard to discover, compare, price, and allocate. Most of the market still runs through forms, PDFs, inboxes, and local relationships.",
    product:
      "BidSpace gives hosts a structured way to publish spaces and gives vendors a clear way to present their business, discover placements, apply or bid, communicate, and move through selection.",
    capabilities: [
      "Host and vendor profiles",
      "Temporary-space inventory",
      "Venue and site-map foundations",
      "Applications and allocation state",
      "Vendor discovery for hosts",
      "Trust and marketplace-fit signals",
    ],
    currentFocus:
      "Turning the marketplace foundation into a focused public preview with clear host and vendor operating rules.",
    latestUpdate:
      "The host-vendor foundation now covers space inventory, applications, marketplace state, and host-side vendor discovery.",
    latestDate: "2026-07-16",
    vision: "The marketplace for temporary commercial opportunity.",
    repository: "https://github.com/AutomatedEmpires/bidspace",
    customerNote:
      "BidSpace is in development. Early conversations are centered on host workflows, vendor fit, and trustworthy allocation.",
    verified: {
      date: "2026-07-31",
      status:
        "Built end to end — host cockpit, vendor cockpit, and the full bid, award, booking, payment, and settlement loop proven in test mode. The public preview is offline pending identity-provider provisioning.",
      evidence: [
        "The complete money loop (bid → counter → award → booking → payment → settlement) passed a recorded test-mode run",
        "Production database schema is provisioned and migrated with a working demo dataset",
        "Remaining launch blockers are account-provisioning actions (auth, payments KYC, maps), not engineering",
      ],
    },
    businessModel:
      "Host-side fees on placements (application-fee model designed, sandbox-only); no live payments approved or configured.",
    ask: "A first venue or market operator to pilot host workflows when the public preview opens.",
    openRisks: [
      "The public preview deployment currently fails to serve until auth is provisioned",
      "The product's .app domain is held by an unrelated third party — the public name and domain need a founder decision",
    ],
    featured: true,
    visual: "bidspace",
    palette: { ink: "#122b3a", accent: "#55bfff", soft: "#e1f0f7" },
  },
  {
    id: "pinnedatlas",
    slug: "pinnedatlas",
    name: "PinnedAtlas",
    group: "company",
    stage: "Live",
    tone: "live",
    category: "Destination discovery",
    tagline: "Find somewhere worth the detour.",
    summary:
      "A free, map-led way to discover real waterfalls, caves, hot springs, and memorable places nearby or along the road.",
    audience: "Curious travelers, road-trippers, and outdoor explorers",
    problem:
      "The best nearby destination is often buried across map results, social posts, saved screenshots, and lists without useful geographic context.",
    product:
      "PinnedAtlas puts the map first, using a curated destination layer to help people quickly find, inspect, and remember places worth exploring—without creating an account.",
    capabilities: [
      "Interactive destination map",
      "Real caves, waterfalls, and hot springs",
      "Category and geographic discovery",
      "Responsive, account-free experience",
      "Curated destination context",
      "Free public access",
    ],
    currentFocus:
      "Improving destination quality, geographic coverage, and the context that helps travelers choose the next stop.",
    latestUpdate:
      "PinnedAtlas is live and free, with real-destination quality work now at the center of the map experience.",
    latestDate: "2026-07-21",
    vision: "A lightweight atlas for the places that make a trip memorable.",
    website: "https://pinnedatlas.com",
    websiteLabel: "Open PinnedAtlas",
    repository: "https://github.com/AutomatedEmpires/pinnedatlas",
    customerNote:
      "PinnedAtlas is free to explore. Travelers should confirm current access, land rules, weather, and safety information with official sources.",
    verified: {
      date: "2026-07-31",
      status:
        "Live and free at pinnedatlas.com: 228 real destinations render from a geographic data layer, with live conditions scoring refreshed hourly. Premium code exists but is dormant by design.",
      evidence: [
        "The destination index server-renders 228 real, named places drawn from an OpenStreetMap-derived geographic database",
        "An hourly production job refreshes live 'Go Score' conditions from USGS and weather sources",
        "The product works with no account, ships offline support, and publishes a full sitemap of geographic discovery hubs",
        "Premium and billing code paths exist but no payment provider is connected — the product is genuinely free today",
      ],
    },
    businessModel:
      "Free today. A premium tier is designed and built but deliberately not activated; no payment provider is connected.",
    ask: "No external ask — the next step is activating usage telemetry to establish a traction baseline.",
    openRisks: [
      "No analytics or error monitoring is active yet, so no usage evidence exists in either direction",
      "Development has been idle since mid-July; the product currently coasts on automation",
    ],
    screenshot: {
      src: "/evidence/2026-08-01/pinnedatlas-1440.png",
      alt: "PinnedAtlas destination index: verified waterfalls, caves, and hot springs with difficulty and trust badges",
      capturedAt: "2026-08-01",
      environment: "Production — pinnedatlas.com/spots",
      width: 1440,
      height: 900,
    },
    featured: true,
    visual: "atlas",
    palette: { ink: "#11343b", accent: "#61d6bd", soft: "#dff2eb" },
  },
  {
    id: "automated-interviewer",
    slug: "automated-interviewer",
    name: "AutomatedInterviewer",
    group: "lab",
    stage: "Studio concept",
    tone: "concept",
    category: "Structured decision support",
    tagline: "Turn important conversations into usable evidence.",
    summary:
      "An early product concept for structured interviews, evidence capture, reusable criteria, and better human decisions.",
    audience: "Teams making repeatable qualification decisions",
    problem:
      "Important interviews often produce inconsistent notes, missing evidence, and decisions that are difficult to explain or improve.",
    product:
      "The concept explores reusable interview structures, evidence trails, scoring criteria, and clear decision support while keeping the final judgment human.",
    capabilities: [
      "Structured interview design",
      "Evidence capture",
      "Reusable decision criteria",
      "Human decision support",
    ],
    currentFocus:
      "Choosing one narrow qualification workflow before moving from concept to prototype.",
    latestUpdate:
      "The strategic space is reserved while the studio validates the first user, workflow, and decision boundary.",
    latestDate: "2026-07-21",
    vision: "A reusable evidence layer for decisions that deserve more than loose notes.",
    repository: "https://github.com/AutomatedEmpires/AutomatedInterviewer",
    verified: {
      date: "2026-07-31",
      status:
        "A reserved concept. The public repository has no committed implementation and the domain is parked — nothing has been built yet, and this page says so.",
      evidence: [
        "The public repository is empty: no code, no branches, no commits",
        "automatedinterviewer.com is parked on a registrar placeholder page",
      ],
    },
    ask: "None — the concept is parked until the studio commits to a first workflow.",
    featured: false,
    visual: "interviewer",
    palette: { ink: "#272536", accent: "#9f93ff", soft: "#eceafa" },
  },
  {
    id: "certstack",
    slug: "certstack",
    name: "CertStack",
    group: "lab",
    stage: "Studio concept",
    tone: "concept",
    category: "Portfolio lab",
    tagline: "A new system taking shape.",
    summary:
      "A reserved studio concept that will be defined publicly when the customer, problem, and first working product are ready.",
    audience: "To be defined through product discovery",
    problem:
      "The studio is still validating the customer problem before committing to a public product story.",
    product:
      "CertStack remains an open product space while research establishes the right workflow and the evidence required to build it well.",
    capabilities: ["Product discovery", "Workflow validation", "Prototype planning"],
    currentFocus:
      "Defining the first real customer problem before choosing the product shape or technology.",
    latestUpdate:
      "The concept remains in the portfolio lab with room to become specific before it becomes public.",
    latestDate: "2026-07-21",
    vision: "Define the right problem, then build the product that earns the name.",
    repository: "https://github.com/AutomatedEmpires/certstack",
    verified: {
      date: "2026-07-31",
      status:
        "A reserved product space. The repository is empty; no domain, deployment, or code exists.",
      evidence: [
        "The public repository has no commits",
        "No deployment or domain exists for this concept",
      ],
    },
    ask: "None — discovery precedes any public commitment.",
    openRisks: [
      "The working name overlaps with an unrelated operating company in an adjacent space; the final name is undecided",
    ],
    featured: false,
    visual: "certstack",
    palette: { ink: "#283130", accent: "#a8d8c7", soft: "#e7efeb" },
  },
];

export const featuredVentures = ventures.filter((venture) => venture.featured);
export const activeVentures = ventures.filter((venture) => venture.group !== "lab");
export const labVentures = ventures.filter((venture) => venture.group === "lab");
export const liveVentures = ventures.filter((venture) => venture.stage === "Live");

export const portfolioLab = [
  { name: "Workproof", note: "Early studio reservation" },
  { name: "Traffic", note: "Early studio reservation" },
  { name: "Just Jesus Bro", note: "Brand system in private development" },
  { name: "Komfort Killz", note: "Brand system in private development" },
];

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
