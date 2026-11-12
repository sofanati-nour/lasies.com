import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import MenuBrowser from "@/components/MenuBrowser";
import heroImage from "@/app/images/slide-tarek-3.jpeg";

export const metadata: Metadata = {
  title: "Menü & Buffets | Lasies Catering Service",
  description:
    "Fingerfood, Suppen, Schlemmerplatten, Grill-, Mediterranes, Orientalisches und Hochzeitsbuffet – das komplette Catering-Menü von Lasies aus Bad Liebenzell.",
  alternates: { canonical: "https://www.lasies.com/menu" },
};

export default function MenuPage() {
  return (
    <main>
      <PageHero
        image={heroImage}
        eyebrow="Menü & Buffets"
        title={
          <>
            Unser Menü für{" "}
            <em className="italic text-gold-light">Ihren Genuss</em>
          </>
        }
        intro="Wählen Sie ein Buffet, kombinieren Sie nach Herzenslust oder lassen Sie sich Ihr ganz eigenes Menü zusammenstellen."
      />
      <MenuBrowser />
    </main>
  );
}
