import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const blog_directory = join(process.cwd(), "content");

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(blog_directory, `${realSlug}.mdx`);
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
