import { notFound } from "next/navigation";
import LandingPage from "@/components/site/LandingPage";
import { getLandingPage, landingPages } from "@/libs/landingPages";
import { pageMetadata } from "@/libs/metadata";

// Town and occasion pages (/catering-calw, /hochzeitscatering …). Only the
// slugs in libs/landingPages.ts exist; everything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ landing: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ landing: string }>;
}) {
  const page = getLandingPage((await params).landing);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ landing: string }>;
}) {
  const page = getLandingPage((await params).landing);
  if (!page) notFound();
  return <LandingPage page={page} />;
}
