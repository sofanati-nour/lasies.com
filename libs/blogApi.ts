import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const blog_directory = join(process.cwd(), "content");

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  // Only plain slugs of existing posts; anything else is a 404.
  if (!/^[a-z0-9-]+$/.test(realSlug)) notFound();
  const fullPath = join(blog_directory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) notFound();
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const items: any = {};
  items["data"] = data;
  items["content"] = content;
  items["data"]["slug"] = realSlug;

  return items;
}

export function getBlogSlugs() {
  return fs.readdirSync(blog_directory);
}
