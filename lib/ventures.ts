export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "Live" | "Building" | "Beta";
  url?: string;
  accent: string;
};

export const ventures: Venture[] = [
  {
    slug: "explore-and-earn",
    name: "Explore&Earn",
    tagline: "Built by seekers, for seekers.",
    description:
      "A discovery marketplace that rewards real-world exploration.",
    status: "Building",
    accent: "#22c55e",
  },
  {
    slug: "sweepza",
    name: "Sweepza",
    tagline: "Photo-first sweepstakes discovery.",
    description:
      "A photo-first sweepstakes discovery app with visual browse, fast entry, and transparent odds.",
    status: "Building",
    accent: "#a855f7",
  },
  {
    slug: "bidspace",
    name: "BidSpace",
    tagline: "Map-first commercial inventory bidding.",
    description:
      "A map-first marketplace for temporary commercial inventory where hosts list space, bidders submit sealed competitive bids, and verification keeps the market trustworthy.",
    status: "Building",
    accent: "#f59e0b",
  },
  {
    slug: "logloads",
    name: "LogLoads",
    tagline: "The Timber Truck Operating Network.",
    description:
      "A network for drivers, outfits, and loaders built around real-time hauls and lane matching.",
    status: "Building",
    accent: "#38bdf8",
  },
];
