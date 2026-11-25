import { site } from "@/libs/site";
import { googleRating } from "@/libs/reviews";
import { lunch } from "@/libs/lunch";

export const businessId = `${site.url}/#business`;

/** The business entity, built from `site` so it always matches the page. */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": businessId,
    name: site.name,
    alternateName: "Lasies",
    description: site.description,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: [
      `${site.url}/images/galarie/00-buffet-tafel.jpg`,
      `${site.url}/images/galarie/00-fingerfood-firmenfeier.jpg`,
    ],
    telephone: site.phone,
    email: site.email,
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.postalCode,
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    hasMap: googleRating.url,
    sameAs: [site.instagram, googleRating.url],
    hasMenu: `${site.url}/menu`,
    servesCuisine: [
      "Deutsch",
      "Mediterran",
      "Orientalisch",
      "Französisch",
      "Pizza",
    ],
    acceptsReservations: true,
    makesOffer: [
      offer("Catering & Partyservice", "Buffets und Fingerfood für Hochzeiten, Firmenfeiern und private Feste."),
      offer("Front-Cooking", "Speisen werden direkt vor Ort vor den Gästen zubereitet."),
      offer("Steinofen-Pizza vor Ort", "Mobiler Steinofen, Pizza frisch gebacken bei Ihrer Veranstaltung: klassisch (Margherita, Salami, Prosciutto), vegetarisch (Grillgemüse, Pilze, Rucola) oder Spezial (BBQ Chicken, Thunfisch, Schafskäse)."),
      offer("Mittagstisch", `Wechselnde Tagesgerichte für ${lunch.minGuests} bis ${lunch.maxGuests} Personen, jeder Teller unter ${lunch.maxPrice} €, z. B. ${lunch.dishes.slice(0, 3).join(", ")}.`),
      offer("Mietservice", "Geschirr, Gläser, Besteck, Stehtische, Tischdecken, Servietten, Kaffeemaschine, Sitzgarnituren und Partyzelte zum Mieten, mit Lieferung und Abholung. Gedeck (Speiseteller, Beilagenteller, Glas, Gabel, Messer) 3,25 €, Einzelteil 0,65 €, jeweils inklusive Reinigung; Stehtisch 15,00 €; pro Mieteinheit von 3 Tagen."),
      offer("Servicepersonal", "Bewirtung Ihrer Gäste.", 35),
      offer("Küchenpersonal", "Küchenpersonal vor Ort.", 40),
    ],
  };
}

function offer(name: string, description: string, eurPerHour?: number) {
  return {
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, description },
    ...(eurPerHour
      ? {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: eurPerHour,
            priceCurrency: "EUR",
            unitText: "pro Person und Stunde",
          },
        }
      : {}),
  };
}

const unitText = {
  "Stück": "pro Stück",
  "Port.": "pro Portion",
  "Pers.": "pro Person",
} as const;

/** Menu → MenuSection (one per buffet) → MenuItem, mirroring /menu. */
export function menuSchema(
  menus: import("@/libs/menuData").Menu[],
  slug: (name: string) => string
) {
  type Item = import("@/libs/menuData").MenuItem;
  type Section = import("@/libs/menuData").MenuSection;

  const item = (i: Item, withPrice: boolean) => ({
    "@type": "MenuItem",
    name: i.name,
    ...(i.description ? { description: i.description } : {}),
    ...(withPrice
      ? {
          offers: {
            "@type": "Offer",
            price: (i.updatedPrice ?? i.price).toFixed(2),
            priceCurrency: "EUR",
            ...(i.unit
              ? {
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: (i.updatedPrice ?? i.price).toFixed(2),
                    priceCurrency: "EUR",
                    unitText: unitText[i.unit],
                  },
                }
              : {}),
          },
        }
      : {}),
  });

  const items = (list: (Item | Section)[], withPrice: boolean) =>
    list
      .filter((i): i is Item => i.type === "MenuItem")
      .map((i) => item(i, withPrice));

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${site.url}/menu#menu`,
    name: `Catering-Menü von ${site.name}`,
    url: `${site.url}/menu`,
    inLanguage: "de-DE",
    provider: { "@id": businessId },
    hasMenuSection: menus.map((m, index) => {
      // Per-item prices are only published for Fingerfood (the first menu).
      const withPrice = index === 0;
      const sections = m.items.filter(
        (i): i is Section => i.type === "MenuSection"
      );
      return {
        "@type": "MenuSection",
        name: m.name,
        url: `${site.url}/menu#${slug(m.name)}`,
        description:
          m.minimumOrder.description ??
          (m.minimumOrder.buffetPrice
            ? `Ab ${m.minimumOrder.total} Personen, Preis auf Anfrage`
            : `Mindestbestellmenge: ${m.minimumOrder.total} Portionen`),
        hasMenuItem: items(m.items, withPrice),
        hasMenuSection: sections.map((s) => ({
          "@type": "MenuSection",
          ...(s.name ? { name: s.name } : {}),
          ...(s.description ? { description: s.description } : {}),
          hasMenuItem: items(s.items, withPrice),
        })),
      };
    }),
  };
}

/** A landing page's offer: what is provided, by whom and where. */
export function serviceSchema(page: {
  slug: string;
  h1: string;
  h1Accent: string;
  description: string;
  serviceType: string;
  areaServed: string[];
}) {
  const url = `${site.url}/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${page.h1} ${page.h1Accent}`,
    serviceType: page.serviceType,
    description: page.description,
    url,
    provider: { "@id": businessId },
    areaServed: page.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqPageSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
