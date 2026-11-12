export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-olive-950 pt-28">
      <div className="bg-cream py-14 sm:py-20">
        <article className="container-x prose prose-lg max-w-3xl prose-headings:font-display prose-headings:font-normal prose-headings:text-olive-900 prose-a:text-gold-dark prose-strong:text-olive-900">
          {children}
        </article>
      </div>
    </main>
  );
}
