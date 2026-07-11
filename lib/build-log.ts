export type BuildSignal = {
  date: string;
  venture: string;
  title: string;
  summary: string;
  state: "Shipped to main" | "Active branch" | "Foundation" | "Documented canon";
  proof: string;
  href?: string;
};

export const buildSignals = [
  {
    date: "2026-07-06",
    venture: "Explore&Earn",
    title: "Discovery hardening moved through the launch-convergence branch.",
    summary:
      "Auth matchers, keyless fallbacks, listing creation survival, resume mobile polish, and migration-guard work tightened the marketplace surface without claiming the product is finished.",
    state: "Active branch",
    proof: "Recent repo commits: ca3992d, 4d7997b, 93ac5c9, 7f5cd40.",
    href: "https://github.com/AutomatedEmpires/explore-and-earn",
  },
  {
    date: "2026-07-06",
    venture: "LogLoads",
    title: "The timber operating network gained authenticated cockpit depth.",
    summary:
      "Driver, fleet, host, admin, map, public, messages, monetization, session identity, and redaction-aware network work landed around the V3 operating model.",
    state: "Active branch",
    proof: "Recent repo commits: 6b8ca46, 34d4fd1, f0ee3e9, 37cbe23.",
    href: "https://github.com/AutomatedEmpires/logloads",
  },
  {
    date: "2026-07-06",
    venture: "Sweepza",
    title: "The consumer sweepstakes routine became more cohesive.",
    summary:
      "Today, My Sweeps, unified Discover, and hydration-safe render timing moved Sweepza closer to a daily-use consumer surface.",
    state: "Active branch",
    proof: "Recent repo commits: 1d492a3 and 494035e.",
    href: "https://github.com/AutomatedEmpires/sweepza",
  },
  {
    date: "2026-07-06",
    venture: "BidSpace",
    title: "Spatial commerce now has a visible marketplace shell.",
    summary:
      "The integration branch added public marketplace, explore, map, opportunity, inventory-unit detail, trust provenance, fit engine, listing queries, and a dedicated design system.",
    state: "Active branch",
    proof: "Recent repo commits: c6cf6ee, 518ec76, b2d0bfa.",
    href: "https://github.com/AutomatedEmpires/bidspace",
  },
  {
    date: "2026-07-06",
    venture: "Lake & Pine",
    title: "The operating business gained a production application foundation.",
    summary:
      "A typed Next.js foundation now preserves the recovered prototype as product truth while avoiding a premature direct-port of the historical HTML artifact.",
    state: "Foundation",
    proof: "Recent repo commit: 67b50e2.",
    href: "https://github.com/AutomatedEmpires/lakeandpine",
  },
  {
    date: "2026-06-09",
    venture: "ORAN",
    title: "The mission system published its trust, safety, and platform canon.",
    summary:
      "ORAN documents retrieval-first behavior, crisis hard gates, deterministic scoring, verification workflows, Azure-first deployment, and investor/partner positioning.",
    state: "Documented canon",
    proof: "Repo docs: VISION, SCORING_MODEL, INVESTOR_PARTNER_BRIEF, PLATFORM_AZURE.",
    href: "https://github.com/AutomatedEmpires/Open-Resource-Access-Network",
  },
] satisfies BuildSignal[];
