import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getGalleryItems } from "@/libs/gallery";
import { Galarie } from "@/components/Galarie";
import PageHero from "@/components/site/PageHero";
import heroImage from "@/app/images/1719173020438.jpg";

import { pageMetadata } from "@/libs/metadata";

export const metadata = pageMetadata({
  title: "Galerie – Catering-Fotos aus Bad Liebenzell | Lasies",
  description:
    "Fotos aus unseren Caterings: Buffets, Fingerfood, Schlemmerplatten, Grillfeste und Front-Cooking von Lasies aus Bad Liebenzell.",
  path: "/galerie",
});

export default function GaleriePage() {
  const items = getGalleryItems();

  return (
    <main>
      <PageHero
        image={heroImage}
        eyebrow="Galerie"
        title={
          <>
            Das Auge <em className="italic text-gold-light">isst mit</em>
          </>
        }
        intro="Ein Vorgeschmack aus unseren Caterings – frisch angerichtet, mit Liebe zum Detail. Wählen Sie ein Bild, um es groß anzusehen."
      />
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <Galarie items={items} />
          <div className="mt-16 text-center">
            <p className="font-display text-3xl text-olive-900">
              Appetit bekommen?
            </p>
            <Link href="/#anfrage" className="btn-gold mt-6">
              Jetzt unverbindlich anfragen <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
