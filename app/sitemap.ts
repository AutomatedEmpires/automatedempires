import type { MetadataRoute } from "next";
import { portfolioUpdates } from "@/lib/build-log";
import { site } from "@/lib/site";
import { ventures } from "@/lib/ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestUpdate = portfolioUpdates.reduce(
    (latest, update) => (update.date > latest ? update.date : latest),
    "",
  );
  const latestVentureChange = ventures.reduce(
    (latest, venture) => (venture.latestDate > latest ? venture.latestDate : latest),
    "",
  );
  const portfolioModified = new Date(
    `${latestUpdate > latestVentureChange ? latestUpdate : latestVentureChange}T00:00:00Z`,
  );

  const staticRoutes: Array<{ route: string; lastModified: Date }> = [
    { route: "", lastModified: portfolioModified },
    { route: "/ventures", lastModified: portfolioModified },
    { route: "/status", lastModified: portfolioModified },
    { route: "/company", lastModified: portfolioModified },
    { route: "/founder", lastModified: portfolioModified },
    { route: "/build", lastModified: new Date(`${latestUpdate}T00:00:00Z`) },
    { route: "/contact", lastModified: portfolioModified },
  ];

  return [
    ...staticRoutes.map(({ route, lastModified }) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...ventures.map((venture) => ({
      url: `${site.url}/ventures/${venture.slug}`,
      lastModified: new Date(`${venture.latestDate}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: venture.featured ? 0.85 : 0.6,
    })),
  ];
}
