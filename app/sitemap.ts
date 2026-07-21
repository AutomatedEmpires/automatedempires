import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { ventures } from "@/lib/ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/ventures",
    "/status",
    "/company",
    "/founder",
    "/build",
    "/contact",
  ];
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...ventures.map((venture) => ({
      url: `${site.url}/ventures/${venture.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: venture.featured ? 0.85 : 0.6,
    })),
  ];
}
