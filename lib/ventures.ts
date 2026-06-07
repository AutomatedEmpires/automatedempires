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
      "A discovery marketplace that rewards real-world exploration — find places, take on quests, and earn points, perks, and payouts for getting out there.",
    status: "Building",
    accent: "#22c55e",
  },
  {
    slug: "sweepza",
    name: "Sweepza",
    tagline: "Sweepstakes you can see.",
    description:
      "A photo-first sweepstakes discovery app — browse giveaways visually, enter in seconds, and trust every draw with transparent odds.",
    status: "Building",
    accent: "#a855f7",
  },
  {
    slug: "bidspace",
    name: "BidSpace",
    tagline: "Bid on space, by the map.",
    description:
      "A map-first marketplace for temporary commercial inventory — hosts list short-term space, bidders compete with sealed bids, and verification keeps every deal honest.",
    status: "Building",
    accent: "#f59e0b",
  },
  {
    slug: "logloads",
    name: "LogLoads",
    tagline: "The Timber Truck Operating Network.",
    description:
      "Logistics for log hauling — connecting drivers, outfits, and loaders with real-time hauls, clean tracking, and smart lane matching.",
    status: "Building",
    accent: "#38bdf8",
  },
];
