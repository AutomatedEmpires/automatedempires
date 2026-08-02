import type { MetadataRoute } from "next";
import { portfolioUpdates } from "@/lib/build-log";
import { site } from "@/lib/site";
import { ventures } from "@/lib/ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestUpdate = portfolioUpdates.reduce(
    (latest, update) => (update.date > latest ? update.date : latest),
    "",
  );
  // A venture page's content date is the latest of its update, verification,
  // and evidence-capture dates — all derivable from the registry.
  const ventureContentDate = (venture: (typeof ventures)[number]) =>
    [venture.latestDate, venture.verified?.date ?? "", venture.screenshot?.capturedAt ?? ""]
      .sort()
      .at(-1)!;
  const latestVentureChange = ventures.reduce(
    (latest, venture) =>
      ventureContentDate(venture) > latest ? ventureContentDate(venture) : latest,
    "",
  );
  const portfolioModified = new Date(
    `${latestUpdate > latestVentureChange ? latestUpdate : latestVentureChange}T00:00:00Z`,
  );

  // Only routes whose content derives from the venture registry or build log
  // get a lastModified; hand-edited pages carry no reliable date, so they omit it.
  const staticRoutes: Array<{ route: string; lastModified?: Date }> = [
    { route: "", lastModified: portfolioModified },
    { route: "/ventures", lastModified: new Date(`${latestVentureChange}T00:00:00Z`) },
    { route: "/status", lastModified: new Date(`${latestVentureChange}T00:00:00Z`) },
    { route: "/company" },
    { route: "/capabilities" },
    { route: "/invest", lastModified: new Date(`${latestVentureChange}T00:00:00Z`) },
    { route: "/founder" },
    { route: "/build", lastModified: new Date(`${latestUpdate}T00:00:00Z`) },
    { route: "/contact" },
  ];

  return [
    ...staticRoutes.map(({ route, lastModified }) => ({
      url: `${site.url}${route}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...ventures.map((venture) => ({
      url: `${site.url}/ventures/${venture.slug}`,
      lastModified: new Date(`${ventureContentDate(venture)}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: venture.featured ? 0.85 : 0.6,
    })),
  ];
}
