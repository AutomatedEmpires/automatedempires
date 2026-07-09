export type BuildState =
  | "Live"
  | "Shipped to main"
  | "Active branch"
  | "Foundation"
  | "Documented canon";

export type BuildSignal = {
  date: string;
  venture: string;
  title: string;
  summary: string;
  state: BuildState;
  proof: string;
  href?: string;
};

export const buildSignals = [
  {
    date: "2026-07-08",
    venture: "PinnedAtlas",
    title: "The atlas went live on its own domain.",
    summary:
      "The map-first homepage — a viewport-synced listing panel over roughly 14,900 real natural locations, with type filters, name search, and geolocation — verified live over SSL.",
    state: "Live",
    proof: "pinnedatlas.com serving ~14,900 locations from the API on MapLibre with free CARTO tiles and no proprietary token.",
    href: "https://pinnedatlas.com",
  },
  {
    date: "2026-07-07",
    venture: "BidSpace",
    title: "Software complete; the payment engine was verified end to end.",
    summary:
      "The internal marketplace loop — bid, accept, award, booking, payment, settlement — was run against the live database (a $280 booking produced a 10% fee and a $252 payout), and Stripe Connect was modernized off the deprecated express type.",
    state: "Active branch",
    proof: "43 routes and a green build; public deployment deliberately held on founder Clerk + Stripe KYC.",
    href: "https://github.com/AutomatedEmpires/bidspace",
  },
  {
    date: "2026-07-07",
    venture: "Sweepza",
    title: "Live billing configured; a real checkout session proven.",
    summary:
      "Sweepza-namespaced live Stripe products, prices, and a webhook were provisioned; a live checkout session was created against a KYC-complete account and expired cleanly, and all synthetic seed data was removed.",
    state: "Active branch",
    proof: "sweepza.com live on Vercel — app to live product to live checkout verified.",
    href: "https://sweepza.com",
  },
  {
    date: "2026-07-07",
    venture: "LogLoads",
    title: "Security reconciled and a critical data exposure closed.",
    summary:
      "A full-state PII table was found anonymously readable and writable, then locked to service-role only; 35 of 36 public tables now enforce row-level security, and the core request → approve → trip → message loop passes 22 of 22 end-to-end tests.",
    state: "Active branch",
    proof: "Green validate pipeline; Dockerfile, fly config, and a post-deploy smoke test prepared for single-node launch.",
    href: "https://github.com/AutomatedEmpires/logloads",
  },
  {
    date: "2026-07-07",
    venture: "Explore&Earn",
    title: "Production infrastructure verified operating.",
    summary:
      "Domain, HTTPS, health, database with 79 migrations, analytics, error monitoring, an email key, and cron were verified operating; production auth and live payments remain named founder gates.",
    state: "Active branch",
    proof: "exploreandearn.com healthy on Vercel; the health endpoint returns ok.",
    href: "https://exploreandearn.com",
  },
  {
    date: "2026-07-06",
    venture: "Lake & Pine",
    title: "The operating business went live on its custom domain.",
    summary:
      "The production Next.js site verified on its custom domain, and a placeholder phone number was removed from every production contact path so nothing misleading ships.",
    state: "Live",
    proof: "lakeandpinecleaning.com and its www host live on Vercel with a verified custom domain.",
    href: "https://lakeandpinecleaning.com",
  },
  {
    date: "2026-06-09",
    venture: "ORAN",
    title: "The mission system published its trust, safety, and platform canon.",
    summary:
      "ORAN documents retrieval-first behavior, crisis hard gates, deterministic scoring, verification workflows, Azure-first deployment, and investor and partner positioning.",
    state: "Documented canon",
    proof: "Repo docs: VISION, SCORING_MODEL, INVESTOR_PARTNER_BRIEF, PLATFORM_AZURE.",
    href: "https://github.com/AutomatedEmpires/Open-Resource-Access-Network",
  },
] satisfies BuildSignal[];
