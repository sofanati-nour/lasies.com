export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-[#f9f9f9] min-h-screen p-6">
      <article className="prose mx-auto">{children}</article>
    </main>
  );
}
