import type { MetadataRoute } from "next";
import { getBlogSlugs } from "@/libs/blogApi";
import { site } from "@/libs/site";
import { blogDates, PAGES_UPDATED } from "@/libs/contentDates";
import { landingPages } from "@/libs/landingPages";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Entry[] = [
    { path: "", priority: 1, changeFrequency: "monthly", lastModified: PAGES_UPDATED },
    { path: "/menu", priority: 0.9, changeFrequency: "monthly", lastModified: PAGES_UPDATED },
    ...landingPages.map((p) => ({
      path: `/${p.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      lastModified: PAGES_UPDATED,
    })),
    { path: "/galerie", priority: 0.7, changeFrequency: "monthly", lastModified: PAGES_UPDATED },
    { path: "/wichtiges-und-wissenswertes", priority: 0.7, changeFrequency: "yearly", lastModified: PAGES_UPDATED },
    { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly", lastModified: PAGES_UPDATED },
    { path: "/impressum", priority: 0.2, changeFrequency: "yearly", lastModified: PAGES_UPDATED },
  ];

  const posts: Entry[] = getBlogSlugs()
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      return {
        path: `/blog/${slug}`,
        priority: 0.6,
        changeFrequency: "yearly",
        lastModified: blogDates[slug]?.modified ?? PAGES_UPDATED,
      };
    });

  return [...pages, ...posts].map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
