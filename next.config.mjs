import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // Keep the next.js-generated AGENTS.md out of the repo root.
  agentRules: false,
  async redirects() {
    return [
      {
        // Old, misspelled URL – keep links and rankings working.
        source: "/wichteges-und-wissenswertes",
        destination: "/wichtiges-und-wissenswertes",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
