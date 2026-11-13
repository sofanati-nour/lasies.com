// Last content change of the site's pages – bump when a page's text changes.
// Used for sitemap.xml <lastmod> (freshness signal for search engines and AI
// indexers).
export const PAGES_UPDATED = "2026-11-13";

/** Blog posts: first publication and last revision (from repo history). */
export const blogDates: Record<string, { published: string; modified: string }> = {
  "catering-tipps-bad-liebenzell-moettlingen": {
    published: "2024-07-02",
    modified: "2026-11-13",
  },
};
