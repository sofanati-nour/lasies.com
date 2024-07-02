import { getBlogBySlug, getBlogSlugs } from "@/libs/blogApi";
import { compile, run } from "@mdx-js/mdx";
import { Metadata } from "next";
import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import * as runtime from "react/jsx-runtime";

import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export default async function Page({ params }: { params: Params }) {
  const { data, content } = await getPost(params);
  const Result = await run(
    await compile(content, {
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
  return (
    <div>
      <Content />
    </div>
  );
}

type Params = {
  slug: string;
};

async function getPost({ slug }: { slug: string }) {
  const post = await getBlogBySlug(slug);
  return post;
}

export function generateStaticParams() {
  return getBlogSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { data } = await getPost(params);
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    authors: [
      {
        name: "Tarek Taraben",
        url: "https://instagram.com/lasies.catering.service",
      },
    ],
    creator: "Tarek Taraben",
    robots: "index, follow",
    metadataBase: new URL("https://www.lasies.com"),
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}
