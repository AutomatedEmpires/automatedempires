export type PortfolioUpdate = {
  date: string;
  venture: string;
  title: string;
  summary: string;
  status: "Live" | "Shipped" | "In review" | "In development";
  href: string;
};

export const portfolioUpdates = [
  {
    date: "2026-07-29",
    venture: "Explore&Earn",
    title: "Explore&Earn went live.",
    summary:
      "The production marketplace is open at exploreandearn.com — the redesigned seeker experience and live payments completed the launch path.",
    status: "Live",
    href: "https://exploreandearn.com",
  },
  {
    date: "2026-07-29",
    venture: "Sweepza",
    title: "The live discovery experience was redesigned.",
    summary:
      "A gamified, mobile-first refresh shipped to production, modernizing how people discover, organize, and enter giveaways.",
    status: "Live",
    href: "https://github.com/AutomatedEmpires/sweepza/pull/103",
  },
  {
    date: "2026-07-29",
    venture: "ORAN",
    title: "Seeker browsing became clearer.",
    summary:
      "Browse-by-area on the map, an honest quota display, and one consistent pagination model made discovery easier to trust in the regional preview build.",
    status: "Shipped",
    href: "https://github.com/AutomatedEmpires/Open-Resource-Access-Network/pull/107",
  },
  {
    date: "2026-07-24",
    venture: "LogLoads",
    title: "A slot commitment now means something.",
    summary:
      "Scheduling integrity work defined what a slot means — and what driver silence means — keeping the day's plan truthful for hosts and drivers.",
    status: "Shipped",
    href: "https://github.com/AutomatedEmpires/logloads/pull/69",
  },
  {
    date: "2026-07-21",
    venture: "Explore&Earn",
    title: "Housing proof became part of the product.",
    summary:
      "Verified housing photos now give seekers a clearer, more credible view of where they would live before they pursue an opportunity.",
    status: "Shipped",
    href: "https://github.com/AutomatedEmpires/explore-and-earn/commit/ad2c476ba2b8",
  },
  {
    date: "2026-07-21",
    venture: "ORAN",
    title: "A regional release candidate is taking shape.",
    summary:
      "Trusted seeker journeys, guided intake, and durable privacy work are converging around North Idaho and Eastern Washington.",
    status: "In review",
    href: "https://github.com/AutomatedEmpires/Open-Resource-Access-Network/pull/95",
  },
  {
    date: "2026-07-21",
    venture: "LogLoads",
    title: "Load ownership is stronger from the first post.",
    summary:
      "Every posting source is now tied to its organization while direct offers and assignment-ready driver briefings move through review.",
    status: "Shipped",
    href: "https://github.com/AutomatedEmpires/logloads/commit/f614eae50119",
  },
  {
    date: "2026-07-21",
    venture: "Sweepza",
    title: "The live product is being watched around the clock.",
    summary:
      "Scheduled production checks protect the discovery experience, with more durable reminder delivery next in the release path.",
    status: "Live",
    href: "https://github.com/AutomatedEmpires/sweepza/pull/93",
  },
  {
    date: "2026-07-21",
    venture: "Lake & Pine",
    title: "Booking and operations are becoming one journey.",
    summary:
      "Customer scheduling work is connecting the request experience to real service capacity, property context, and team operations.",
    status: "In review",
    href: "https://github.com/AutomatedEmpires/lakeandpine/pull/16",
  },
  {
    date: "2026-07-21",
    venture: "PinnedAtlas",
    title: "Destination discovery stays open and free.",
    summary:
      "The live map continues to lead with real places and lightweight exploration without putting an account wall in the way.",
    status: "Live",
    href: "https://pinnedatlas.com",
  },
  {
    date: "2026-07-16",
    venture: "BidSpace",
    title: "The host-vendor marketplace foundation reached the product.",
    summary:
      "Temporary-space inventory, applications, allocation state, and host-side vendor discovery now form the base for a focused preview.",
    status: "In development",
    href: "https://github.com/AutomatedEmpires/bidspace/commit/1341665dc057",
  },
] satisfies PortfolioUpdate[];
