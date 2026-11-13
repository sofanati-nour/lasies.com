import PageHero from "@/components/site/PageHero";
import MenuBrowser from "@/components/MenuBrowser";
import JsonLd from "@/components/JsonLd";
import { Menus } from "@/libs/menuData";
import { menuSchema } from "@/libs/schema";
import { slugify } from "@/libs/utils";
import heroImage from "@/app/images/slide-tarek-3.jpeg";

import { pageMetadata } from "@/libs/metadata";

export const metadata = pageMetadata({
  title: "Menü & Buffets – Catering Bad Liebenzell | Lasies",
  description:
    "Alle Buffets von Lasies Catering aus Bad Liebenzell: Fingerfood mit Preisen, Suppen, Schlemmerplatten, Grill-, Hochzeits- und Orientalisches Buffet.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <main>
      <JsonLd data={menuSchema(Menus, slugify)} />
      <PageHero
        image={heroImage}
        eyebrow="Menü & Buffets"
        title={
          <>
            Catering-Menü & Buffets{" "}
            <em className="italic text-gold-light">für Ihren Genuss</em>
          </>
        }
        intro="Wählen Sie ein Buffet, kombinieren Sie nach Herzenslust oder lassen Sie sich Ihr ganz eigenes Menü zusammenstellen."
      />
      <MenuBrowser />
    </main>
  );
}
