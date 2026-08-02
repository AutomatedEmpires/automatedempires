import { site } from "@/lib/site";
import { portfolioLab, ventures } from "@/lib/ventures";

export const dynamic = "force-static";

// A plain-text portfolio summary for AI agents. The rule mirrors the human
// site: machine-readable claims may never exceed human-verified ones, so this
// is generated from the same registry that renders the pages.
export function GET() {
  const lines: string[] = [
    "# AutomatedEmpires",
    "",
    `> ${site.description}`,
    "",
    "AutomatedEmpires is a founder-led venture company. This file is generated",
    "from the same venture registry that renders the public site; every stage",
    "and status below carries a human-verified date on its venture page.",
    "",
    "## Ventures",
    "",
  ];

  for (const venture of ventures) {
    lines.push(`### ${venture.name}${venture.fullName ? ` (${venture.fullName})` : ""}`);
    lines.push(`- Page: ${site.url}/ventures/${venture.slug}`);
    lines.push(`- Category: ${venture.category}`);
    lines.push(`- Stage: ${venture.stage}`);
    if (venture.website) lines.push(`- Product: ${venture.website}`);
    if (venture.verified) {
      lines.push(`- Verified ${venture.verified.date}: ${venture.verified.status}`);
    }
    lines.push(`- Summary: ${venture.summary}`);
    if (venture.ask) lines.push(`- Current ask: ${venture.ask}`);
    lines.push("");
  }

  lines.push("## Early reservations");
  lines.push("");
  for (const entry of portfolioLab) {
    lines.push(`- ${entry.name}: ${entry.note}`);
  }
  lines.push("");
  lines.push("## Machine-readable registry");
  lines.push("");
  lines.push(`- ${site.url}/portfolio.json`);
  lines.push("");
  lines.push(`## Contact`);
  lines.push("");
  lines.push(`- ${site.email}`);
  lines.push(`- ${site.url}/invest`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
