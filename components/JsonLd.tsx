/**
 * Server-rendered structured data. A plain <script> (not next/script) so the
 * JSON-LD is in the HTML that crawlers and AI fetchers receive.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
