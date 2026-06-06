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
    tagline: "Get rewarded for exploring the world.",
    description:
      "A location-based rewards platform that turns everyday exploration into points, perks, and real-world payouts.",
    status: "Building",
    accent: "#22c55e",
  },
  {
    slug: "sweepza",
    name: "Sweepza",
    tagline: "Sweepstakes, reimagined.",
    description:
      "A modern sweepstakes and giveaway platform with transparent odds, instant entries, and creator-friendly campaigns.",
    status: "Building",
    accent: "#a855f7",
  },
  {
    slug: "bidspace",
    name: "BidSpace",
    tagline: "Live auctions for everything.",
    description:
      "A real-time bidding marketplace that makes running and winning auctions fast, fair, and fun.",
    status: "Building",
    accent: "#f59e0b",
  },
  {
    slug: "logloads",
    name: "LogLoads",
    tagline: "Freight, finally organized.",
    description:
      "Logistics tooling that connects loads, carriers, and lanes with clean tracking and smart matching.",
    status: "Building",
    accent: "#38bdf8",
  },
];
