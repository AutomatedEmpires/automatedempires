export type BuildSignal = {
  date: string;
  venture: string;
  title: string;
  summary: string;
  state:
    | "Shipped to main"
    | "Active branch"
    | "Foundation"
    | "Documented canon"
    | "Live surface";
  proof: string;
  href?: string;
};

export const buildSignals = [
  {
    date: "2026-07-21",
    venture: "LogLoads",
    title: "Organization ownership now governs every posting source.",
    summary:
      "The mainline publishing foundation now refuses cross-organization posting sources while the Cloudinary, landing-detail, and direct-offer continuations remain open PRs.",
    state: "Shipped to main",
    proof: "GitHub main f614eae; Vercel production dpl_4V1WNYypQ4ffos8RBpEB6NM1JvWp.",
    href: "https://github.com/AutomatedEmpires/logloads/commit/f614eae50119bcca7c87487a07dab2334cdb90b7",
  },
  {
    date: "2026-07-20",
    venture: "Sweepza",
    title: "The live discovery surface gained scheduled production proof.",
    summary:
      "A least-privilege smoke workflow verifies sweepza.com and escalates failures while ingestion and outbound email remain separately gated.",
    state: "Live surface",
    proof: "GitHub main b9ce56f; Vercel production dpl_p6Pzq7NDRwcUr6pUF5cfon3fd5fL.",
    href: "https://github.com/AutomatedEmpires/sweepza/commit/b9ce56fbc63f9aa17e0b36d5025d238437a99f77",
  },
  {
    date: "2026-07-19",
    venture: "Explore&Earn",
    title: "Unbacked Founding Host pricing was removed from the marketplace.",
    summary:
      "The public preview now avoids presenting a commercial offer that lacks an approved operating basis, while the core seeker and listing-truth systems remain visible.",
    state: "Shipped to main",
    proof: "GitHub main 9d6b9c0; Vercel production dpl_EsAPMWW4yx9KwLowsM3jKzK4NjxE.",
    href: "https://github.com/AutomatedEmpires/explore-and-earn/commit/9d6b9c0c2297c6e3ebc64b30a40c92e60bf8cf5e",
  },
  {
    date: "2026-07-18",
    venture: "ORAN",
    title: "The civic platform preserved a reproducible database continuation point.",
    summary:
      "Main includes the disposable-Postgres harness and current handoff after migration, provenance, search, ETL, and security hardening. No valid public demo is claimed.",
    state: "Shipped to main",
    proof: "GitHub main 412b326; current Vercel alias is explicitly excluded because it is cross-wired.",
    href: "https://github.com/AutomatedEmpires/Open-Resource-Access-Network/commit/412b3266a84d74fdfe0d05e75417b09747475f19",
  },
  {
    date: "2026-07-16",
    venture: "BidSpace",
    title: "The host-vendor temporary-space foundation reached main.",
    summary:
      "Host vendor discovery, applications, marketplace state, and migration 0014 now support the canonical temporary-space direction without activating payments.",
    state: "Shipped to main",
    proof: "GitHub main includes 1341665; current head 6f63a6f. Public project alias still returns 404.",
    href: "https://github.com/AutomatedEmpires/bidspace/commit/1341665dc0576bdeae6124a760002c974d9c5fe7",
  },
  {
    date: "2026-07-16",
    venture: "Lake & Pine",
    title: "The national property-care operations foundation reached main.",
    summary:
      "Organization, workforce, service-case, and policy foundations now sit behind the polished preview; live customer booking and payment claims remain gated.",
    state: "Shipped to main",
    proof: "GitHub main 43d157d; Vercel production dpl_2TJHCGfEtPRbjzNoT6BMjJBHXmum.",
    href: "https://github.com/AutomatedEmpires/lakeandpine/commit/43d157d401e7bcce48dd630bb313c4bf3aa60bbc",
  },
  {
    date: "2026-07-16",
    venture: "PinnedAtlas",
    title: "The live free map entered the governed control plane.",
    summary:
      "The current contract preserves the live product while keeping accounts and paid tiers dormant and isolated from Explore & Earn payment credentials.",
    state: "Live surface",
    proof: "GitHub main 07fc7cf; Vercel production dpl_C64EubUgwDfqBGujaZjRAnXa8cUB.",
    href: "https://github.com/AutomatedEmpires/pinnedatlas/commit/07fc7cfc29549dbdbad9b53ff5c5177ff572d3f0",
  },
] satisfies BuildSignal[];
