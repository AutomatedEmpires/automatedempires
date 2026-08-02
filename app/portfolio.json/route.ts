import { site } from "@/lib/site";
import { portfolioLab, ventures } from "@/lib/ventures";

export const dynamic = "force-static";

// The public, machine-readable venture registry. Contains only fields that
// already render on the human-facing site — no internal or private data.
export function GET() {
  const payload = {
    organization: {
      name: site.name,
      url: site.url,
      description: site.description,
      contact: site.email,
    },
    generatedFrom: "lib/ventures.ts — the single registry that renders the site",
    ventures: ventures.map((venture) => ({
      name: venture.name,
      fullName: venture.fullName ?? null,
      slug: venture.slug,
      page: `${site.url}/ventures/${venture.slug}`,
      category: venture.category,
      group: venture.group,
      stage: venture.stage,
      summary: venture.summary,
      website: venture.website ?? null,
      repository: venture.repository ?? null,
      verified: venture.verified ?? null,
      businessModel: venture.businessModel ?? null,
      ask: venture.ask ?? null,
      openRisks: venture.openRisks ?? null,
      latestUpdate: { date: venture.latestDate, note: venture.latestUpdate },
    })),
    earlyReservations: portfolioLab,
  };

  return Response.json(payload);
}
