import { getBlogBySlug, getBlogSlugs } from "@/libs/blogApi";
import { compile, run } from "@mdx-js/mdx";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/site/PageHero";
import heroImage from "@/app/images/1719173020512.jpg";
import { pageMetadata } from "@/libs/metadata";
import { businessId } from "@/libs/schema";
import { site } from "@/libs/site";
import { blogDates } from "@/libs/contentDates";

type Params = {
  slug: string;
};

const dates = blogDates;

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).replace(/ /g, "\u00A0");

export default async function Page(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const { data, content } = await getBlogBySlug(slug);
  // The page hero shows the title as the H1, so drop the post's own
  // leading "# Title" line.
  const body = content.replace(/^\s*# .*\r?\n/, "");
  const Result = await run(
    await compile(body, {
      outputFormat: "function-body",
      remarkPlugins: [remarkGfm, remarkMdxFrontmatter],
    }),
    //@ts-ignore
    {
      ...runtime,
      baseUrl: import.meta.url,
    }
  );
  const Content = Result.default;
  const url = `${site.url}/blog/${slug}`;
  const date = dates[slug];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: data.title,
          description: data.description,
          ...(date
            ? { datePublished: date.published, dateModified: date.modified }
            : {}),
          image: `${site.url}/og-image.jpg`,
          inLanguage: "de-DE",
          mainEntityOfPage: url,
          url,
          author: { "@type": "Person", name: site.owner },
          publisher: { "@id": businessId },
        }}
      />
      <PageHero
        image={heroImage}
        eyebrow="Ratgeber"
        title={data.heroTitle ?? data.title}
        intro={data.heroIntro ?? data.description}
      />
      <div className="py-14 sm:py-20">
        <article className="container-x prose prose-lg max-w-3xl prose-headings:font-display prose-headings:font-normal prose-headings:text-olive-900 prose-a:text-gold-dark prose-strong:text-olive-900 [--tw-prose-bullets:#7A5C10] [--tw-prose-counters:#7A5C10]">
          <p className="not-prose mb-10 border-b border-olive-900/10 pb-6 text-sm text-ink-muted">
            Von {site.owner}, {site.name}
            {date && (
              <>
                {" · "}
                <time dateTime={date.published}>
                  {formatDate(date.published)}
                </time>
                {" (aktualisiert am "}
                <time dateTime={date.modified}>
                  {formatDate(date.modified)}
                </time>
                )
              </>
            )}
          </p>
          <Content />
      <aside className="not-prose mt-14 rounded-[2rem] bg-olive-900 p-8 text-cream sm:p-10">
        <p className="font-display text-3xl">Sie planen eine Feier?</p>
        <p className="mt-2 text-cream/75">
          Stöbern Sie in unseren Buffets oder fragen Sie direkt ein
          unverbindliches Angebot an.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/#anfrage" className="btn-gold">
            Angebot anfragen <ArrowRight size={16} aria-hidden />
          </Link>
          <Link href="/menu" className="btn-ghost-light">
            Menü ansehen
          </Link>
        </div>
      </aside>
        </article>
      </div>
    </>
  );
}

// Only the published posts exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getBlogSlugs()
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const { data } = await getBlogBySlug(slug);
  const base = pageMetadata({
    title: data.seoTitle ?? `${data.title} | Lasies`,
    description: data.description,
    path: `/blog/${slug}`,
  });
  return {
    ...base,
    keywords: data.keywords,
    authors: [{ name: site.owner, url: site.instagram }],
    openGraph: {
      ...base.openGraph,
      type: "article",
      ...(dates[slug]
        ? {
            publishedTime: dates[slug].published,
            modifiedTime: dates[slug].modified,
          }
        : {}),
    },
  };
}
