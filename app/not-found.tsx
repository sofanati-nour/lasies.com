import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import heroImage from "@/app/images/1719173020438.jpg";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Lasies",
  description: "Diese Seite gibt es bei Lasies Catering Service leider nicht.",
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main>
      <PageHero
        image={heroImage}
        eyebrow="Fehler 404"
        title="Seite nicht gefunden"
        intro="Diese Seite gibt es leider nicht (mehr). Vielleicht finden Sie hier, was Sie suchen:"
      />
      <section className="py-14 sm:py-20">
        <div className="container-x mx-auto flex max-w-xs flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
          <Link href="/" className="btn-dark">
            Zur Startseite
          </Link>
          <Link href="/menu" className="btn-ghost-dark">
            Menü & Buffets
          </Link>
          <Link href="/#anfrage" className="btn-gold">
            Angebot anfragen <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
