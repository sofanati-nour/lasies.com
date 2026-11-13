import type { Metadata } from "next";
import { site } from "@/libs/site";

const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Fischplatte mit Räucherlachs, Graved Lachs und Forellenfilets von Lasies Catering Service aus Bad Liebenzell",
};

/**
 * Per-page metadata with canonical URL plus matching Open Graph / Twitter
 * tags. Next replaces (not merges) a parent's `openGraph`, so every page
 * passes the full set through here.
 */

export function pageMetadata({
  title,
  description,
  path,
  robots,
}: {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: site.name,
      url,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(robots ? { robots } : {}),
  };
}
