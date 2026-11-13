import { faq } from "@/libs/faq";
import { Menus, type MenuItem, type MenuSection } from "@/libs/menuData";
import { site } from "@/libs/site";
import { googleRating } from "@/libs/reviews";
import { slugify } from "@/libs/utils";

// Plain-text summary for AI assistants (https://llmstxt.org), generated from
// the same data as the pages so the facts never drift apart.
export const dynamic = "force-static";

const currency = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
const unitNames = { "Stück": "Stück", "Port.": "Portion", "Pers.": "Person" } as const;

export function GET() {
  const buffets = Menus.map((m) => {
    const min = m.minimumOrder;
    const minText =
      min.description ??
      (typeof min.total === "number"
        ? `ab ${min.total} ${min.buffetPrice ? "Personen" : "Portionen"}`
        : `ab ${min.total}`);
    return `- [${m.name}](${site.url}/menu#${slugify(m.name)}): ${minText}`;
  }).join("\n");

  // Every dish per buffet, so assistants can answer "what's in it?"
  // without running the tabbed /menu page.
  // Per-item prices are only published for Fingerfood (the first menu).
  const dishLine = (i: MenuItem, withPrice: boolean) => {
    const description = i.description?.replace(/^\((.*)\)$/, "$1");
    const price = withPrice
      ? ` – ${currency.format(i.updatedPrice ?? i.price)}${i.unit ? ` pro ${unitNames[i.unit]}` : ""}`
      : "";
    return `${i.name}${description ? ` (${description})` : ""}${price}`;
  };
  const dishNames = (
    items: (MenuItem | MenuSection)[],
    withPrice: boolean
  ): string[] =>
    items.flatMap((i) =>
      i.type === "MenuItem"
        ? [dishLine(i, withPrice)]
        : dishNames(i.items, withPrice)
    );
  const dishes = Menus.map(
    (m, index) =>
      `### ${m.name}\n` +
      dishNames(m.items, index === 0).map((n) => `- ${n}`).join("\n")
  ).join("\n\n");

  const body = `# ${site.name}

> ${site.description}

## Kontakt
- Inhaber: ${site.owner}
- Adresse: ${site.street}, ${site.postalCode} ${site.locality}, Deutschland
- Telefon: ${site.phone}
- E-Mail: ${site.email}
- WhatsApp: ${site.whatsapp}
- Instagram: ${site.instagram}
- Google-Bewertung: ${googleRating.rating.toLocaleString("de-DE")} von 5 Sternen (${googleRating.count} Rezensionen) – ${googleRating.url}
- Einzugsgebiet: ${site.areaServed.join(", ")}

## Leistungen
- Catering und Partyservice mit individuellen Buffets und Fingerfood
- Front-Cooking: Zubereitung direkt vor Ort vor den Gästen
- Steinofen-Pizza vor Ort (mobiler Steinofen): klassisch (Margherita, Salami, Prosciutto), vegetarisch (Grillgemüse, Pilze, Rucola), Spezial (BBQ Chicken, Thunfisch, Schafskäse)
- Mietservice: Geschirr, Gläser, Besteck, Stehtische (Mieteinheit 3 Tage). Gedeck (Speiseteller, Beilagenteller, Glas, Gabel, Messer) 3,25 €, Einzelteil 0,65 €, jeweils inkl. Reinigung und MwSt.; Stehtisch 15,00 € pro Tisch
- Servicepersonal 35,00 € und Küchenpersonal 40,00 € pro Person und Stunde
- Anfahrt 0,60 € pro Kilometer; Rückholung an Sonn- und Feiertagen +30,00 €
- Unterstützung bei Location-Suche, Dekoration und Rahmenprogramm
- Alle Preise inkl. gesetzlicher MwSt.; Buffetpreise auf Anfrage (individuelles Angebot)

## Buffets und Mindestbestellmengen
${buffets}

## Speisen je Buffet
${dishes}

## Häufige Fragen
${faq.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}

## Seiten
- [Startseite](${site.url}/): Überblick, Leistungen, Bewertungen, Anfrageformular
- [Menü & Buffets](${site.url}/menu): alle Buffets mit Speisen
- [Wichtiges & Wissenswertes](${site.url}/wichtiges-und-wissenswertes): Preise, Mietservice, Bedingungen, FAQ
- [Galerie](${site.url}/galerie): Fotos und Videos
- [Ratgeber: Catering-Tipps für Bad Liebenzell](${site.url}/blog/catering-tipps-bad-liebenzell-moettlingen)
- [Impressum](${site.url}/impressum)
- [Datenschutz](${site.url}/datenschutz)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

