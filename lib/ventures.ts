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
