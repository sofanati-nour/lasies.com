import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight, Star } from "lucide-react";
import { SendContactRequest } from "@/app/actions";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/site/PageHero";
import {
  getLandingPage,
  occasionPages,
  townPages,
  type LandingImage,
  type LandingPage as LandingPageData,
} from "@/libs/landingPages";
import { Menus, type MenuItem, type MenuSection } from "@/libs/menuData";
import { googleRating, reviews } from "@/libs/reviews";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/libs/schema";
import { site } from "@/libs/site";
import { slugify } from "@/libs/utils";

import buffetFestlich from "@/app/images/1719173020512.jpg";
import zucchiniBuffet from "@/app/images/new-zucchiniroellchen-buffet.jpg";
import grillgemuese from "@/app/images/1719173021178.jpg";
import frontCooking from "@/app/images/1719172912415.jpg";
import bauernsalat from "@/app/images/new-griechischer-bauernsalat.jpg";
import platten from "@/app/images/1719173021628.jpg";
import hochzeitstafel from "@/app/images/1719173020438.jpg";
import miniBurger from "@/app/images/new-mini-burger-sommerrollen.jpg";
import fingerfood from "@/app/images/hero-fingerfood.jpg";
import pizza from "@/app/images/pizzaman.jpeg";

const images: Record<LandingImage, { src: StaticImageData; alt: string }> = {
  buffetFestlich: { src: buffetFestlich, alt: "Festlich beleuchtetes Buffet mit Salaten und Vorspeisen von Lasies Catering" },
  zucchiniBuffet: { src: zucchiniBuffet, alt: "Zucchiniröllchen, Tomate-Mozzarella und Salate am Buffet" },
  grillgemuese: { src: grillgemuese, alt: "Gegrillte Auberginen und Zucchini mit gefüllten Paprika" },
  frontCooking: { src: frontCooking, alt: "Koch von Lasies serviert Grillwürstchen beim Front-Cooking im Freien" },
  bauernsalat: { src: bauernsalat, alt: "Griechischer Bauernsalat und gegrilltes Gemüse am Buffet" },
  platten: { src: platten, alt: "Schlemmerplatten mit Aufschnitt, Käse und feinen Beilagen" },
  hochzeitstafel: { src: hochzeitstafel, alt: "Lange Buffettafel mit Fischplatte und Warmhaltebehältern bei einer Feier" },
  miniBurger: { src: miniBurger, alt: "Fingerfood mit Mini-Burgern, gefülltem Fladenbrot und Sommerrollen" },
  fingerfood: { src: fingerfood, alt: "Fingerfood-Platten mit Canapés und Häppchen von Lasies Catering" },
  pizza: { src: pizza, alt: "Koch von Lasies mit frischer Steinofen-Pizza" },
};

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

const unitLabel = {
  "Stück": "pro Stück",
  "Port.": "pro Portion",
  "Pers.": "pro Person",
} as const;

const pizzaKinds = [
  { title: "Klassisch", text: "Margherita, Salami, Prosciutto" },
  { title: "Vegetarisch", text: "Grillgemüse, Pilze, Rucola" },
  { title: "Spezial", text: "BBQ Chicken, Thunfisch, Schafskäse & mehr" },
];

/** Fixed prices that apply to every order, as on /wichtiges-und-wissenswertes. */
const priceFacts = [
  { label: "Buffets", value: "ab 20 Personen", note: "Gourmetreise-Buffet ab 30 Personen · Preis im Angebot" },
  { label: "Fingerfood", value: "ab 50 Teilen", note: "Preise pro Stück oder Portion im Menü" },
  { label: "Servicepersonal", value: euro.format(35), note: "pro Person und Stunde" },
  { label: "Küchenpersonal", value: euro.format(40), note: "pro Person und Stunde" },
  { label: "Gedeck zur Miete", value: euro.format(3.25), note: "je Gedeck für 3 Tage, inklusive Reinigung" },
  { label: "Anfahrt", value: euro.format(0.6), note: "pro Kilometer" },
];

export default function LandingPage({ page }: { page: LandingPageData }) {
  const photo = images[page.photo];
  const pageReviews = page.reviewAuthors
    .map((a) => reviews.find((r) => r.author === a))
    .filter((r) => r !== undefined);
  const related = page.related
    .map(getLandingPage)
    .filter((p) => p !== undefined);
  const [firstSection, ...moreSections] = page.sections;
  const prices =
    page.extra === "pizzaKinds"
      ? [
          { label: "Steinofen-Pizza", value: "auf Anfrage", note: "Preis im persönlichen Angebot" },
          ...priceFacts.slice(1),
        ]
      : priceFacts;
  const crossLinks = page.kind === "town" ? occasionPages : townPages;

  return (
    <main>
      <JsonLd data={serviceSchema(page)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: page.nav, path: `/${page.slug}` },
        ])}
      />
      <JsonLd data={faqPageSchema(page.faq)} />

      <PageHero
        image={images[page.hero].src}
        imageAlt={images[page.hero].alt}
        eyebrow={page.eyebrow}
        title={
          <>
            {page.h1}{" "}
            <em className="italic text-gold-light">{page.h1Accent}</em>
          </>
        }
        intro={page.intro}
      />

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <nav aria-label="Brotkrumen" className="text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="inline-block py-1 underline-offset-4 hover:text-gold-dark hover:underline">
                  Startseite
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="font-medium text-olive-900">
                {page.nav}
              </li>
            </ol>
          </nav>

          <dl className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {page.facts.map((f) => (
              <div
                key={f.label}
                className="rounded-3xl bg-olive-900 p-5 text-cream sm:p-6"
              >
                <dt className="text-xs uppercase tracking-widest text-cream/70">
                  {f.label}
                </dt>
                <dd className="mt-2 hyphens-auto font-display text-xl leading-tight text-gold-light [overflow-wrap:anywhere] sm:text-2xl">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <nav
            aria-label={page.kind === "town" ? "Anlässe und Angebote" : "Orte"}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm"
          >
            <span className="font-medium text-olive-900">
              {page.kind === "town" ? "Für Ihren Anlass:" : "Wir liefern nach:"}
            </span>
            <ul className="flex flex-wrap gap-2">
              {crossLinks.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="inline-block rounded-full border border-olive-900/15 bg-cream-light px-3.5 py-2 text-olive-900 transition hover:border-gold hover:text-gold-dark"
                  >
                    {p.kind === "town" ? p.h1Accent.replace(/^in /, "") : p.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Prose section={firstSection} />
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#anfrage" className="btn-gold">
                  Angebot anfragen <ArrowRight size={16} aria-hidden />
                </a>
                <Link href="/menu" className="btn-ghost-dark">
                  Menü ansehen
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-olive-900/10">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-2">
            {moreSections.map((s) => (
              <Prose key={s.title} section={s} />
            ))}
          </div>
        </div>
      </section>

      {page.extra === "fingerfoodPrices" && <FingerfoodPrices />}
      {page.extra === "pizzaKinds" && <PizzaKinds />}

      <section
        aria-labelledby="angebot-title"
        className="bg-olive-900 py-14 text-cream sm:py-20"
      >
        <div className="container-x">
          <p className="eyebrow !text-gold-light">Angebot & Preise</p>
          <h2
            id="angebot-title"
            className="mt-4 max-w-2xl text-balance font-display text-3xl leading-tight sm:text-5xl"
          >
            Buffets, Preise & Mindestmengen
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {page.buffets.map((name) => (
              <li key={name}>
                <Link
                  href={`/menu#${slugify(name)}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm transition hover:border-gold hover:text-gold-light"
                >
                  {name} <ArrowRight size={14} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {prices.map((p) => (
              <div key={p.label} className="bg-olive-900 p-6 sm:p-8">
                <dt className="text-sm text-cream/75">{p.label}</dt>
                <dd className="mt-1">
                  <span className="block font-display text-3xl text-gold-light">
                    {p.value}
                  </span>
                  <span className="mt-1 block text-sm text-cream/75">
                    {p.note}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-cream/75">
            Alle Preise inklusive Mehrwertsteuer. Mietservice, Anzahlung und
            Stornobedingungen im Detail:{" "}
            <Link
              href="/wichtiges-und-wissenswertes"
              className="font-semibold text-gold-light underline underline-offset-4 hover:text-gold"
            >
              Preise & Bedingungen
            </Link>
          </p>
        </div>
      </section>

      {pageReviews.length > 0 && (
        <section
          aria-labelledby="stimmen-title"
          className="bg-cream-dark/50 py-14 sm:py-20"
        >
          <div className="container-x">
            <p className="eyebrow">Was unsere Kunden sagen</p>
            <h2
              id="stimmen-title"
              className="mt-4 text-balance font-display text-3xl leading-tight text-olive-900 sm:text-5xl"
            >
              {googleRating.rating.toLocaleString("de-DE", {
                minimumFractionDigits: 1,
              })}{" "}
              von 5 Sternen bei {googleRating.count} Google-Rezensionen
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {pageReviews.map((r) => (
                <li key={r.author}>
                  <figure className="flex h-full flex-col rounded-3xl bg-cream-light p-7 shadow-sm ring-1 ring-olive-900/5">
                    <span className="flex gap-0.5 text-gold-dark">
                      <span className="sr-only">{r.stars} von 5 Sternen</span>
                      {Array.from({ length: r.stars }, (_, i) => (
                        <Star key={i} size={16} fill="currentColor" aria-hidden />
                      ))}
                    </span>
                    <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-olive-900">
                      {r.text}
                    </blockquote>
                    <figcaption className="mt-5 border-t border-olive-900/10 pt-4 text-sm text-ink-muted">
                      <span className="font-semibold text-olive-900">
                        {r.author}
                      </span>
                      {" · "}
                      {r.occasion ? `${r.occasion} · ` : ""}Google-Rezension
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <a
                href={googleRating.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gold-dark underline underline-offset-4"
              >
                Alle Rezensionen auf Google lesen
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            </p>
          </div>
        </section>
      )}

      <section aria-labelledby="faq-title" className="py-14 sm:py-20">
        <div className="container-x mx-auto max-w-3xl">
          <p className="eyebrow">Häufige Fragen</p>
          <h2
            id="faq-title"
            className="mt-4 text-balance font-display text-3xl leading-tight text-olive-900 sm:text-5xl"
          >
            {page.kind === "town" ? "Fragen zu" : "Fragen zum"} {page.nav}
          </h2>
          <div className="mt-10 divide-y divide-olive-900/15 rounded-[2rem] bg-cream-light px-6 shadow-sm ring-1 ring-olive-900/5 sm:px-10">
            {page.faq.map((f, i) => (
              <details key={f.question} className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-xl font-normal text-olive-900">
                    {f.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    aria-hidden
                    className="mt-1 shrink-0 text-gold-dark transition group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-ink-muted">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="mehr-title"
        className="bg-cream-dark/50 py-14 sm:py-20"
      >
        <div className="container-x">
          <h2
            id="mehr-title"
            className="font-display text-3xl text-olive-900 sm:text-4xl"
          >
            Das könnte Sie auch interessieren
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-cream-light p-6 shadow-sm ring-1 ring-olive-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-olive-900/10"
                >
                  <span className="font-display text-xl text-olive-900">
                    {p.nav}
                  </span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {p.kind === "town"
                      ? `Buffets, Fingerfood und Partyservice für ${p.h1Accent.replace(/^in /, "")}.`
                      : p.description.split(": ")[0] + "."}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                    Mehr erfahren
                    <ArrowRight
                      size={14}
                      aria-hidden
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-olive-900 p-8 text-cream sm:p-12">
            <p className="eyebrow !text-gold-light">Kontakt</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              Unverbindlich anfragen
            </h2>
            <p className="mt-5 leading-relaxed text-cream/75">
              Nennen Sie uns Datum, Ort und Gästezahl – wir melden uns mit
              einem persönlichen Angebot.
            </p>
            <ul className="mt-8 space-y-4">
              <ContactLine label="Telefon" href={site.phoneHref} value={site.phone} />
              <ContactLine label="E-Mail" href={`mailto:${site.email}`} value={site.email} />
              <ContactLine label="WhatsApp" href={site.whatsapp} value="Nachricht schreiben" external />
              <li>
                <p className="text-xs uppercase tracking-widest text-cream/70">
                  Küche & Sitz
                </p>
                <p className="mt-1 font-display text-xl">
                  {site.street}, {site.city}
                </p>
              </li>
            </ul>
          </div>
          <div
            id="anfrage"
            tabIndex={-1}
            className="scroll-mt-24 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Contact
              handleSendEmail={SendContactRequest}
              initialMessage={page.prefill}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Prose({ section }: { section: LandingPageData["sections"][number] }) {
  return (
    <div>
      <h2 className="text-balance font-display text-3xl leading-tight text-olive-900 sm:text-4xl">
        {section.title}
      </h2>
      <div className="mt-5 space-y-4 leading-relaxed text-ink-muted">
        {section.paragraphs.map((p) => (
          <p key={p}>{rich(p)}</p>
        ))}
      </div>
      {section.bullets && (
        <ul className="mt-5 space-y-2.5">
          {section.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-olive-900">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark"
              />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Turns "[Text](/pfad)" into links; everything else stays plain text. */
function rich(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    const className =
      "font-medium text-gold-dark underline underline-offset-4 hover:text-olive-900";
    return m[2].startsWith("#") ? (
      <a key={i} href={m[2]} className={className}>
        {m[1]}
      </a>
    ) : (
      <Link key={i} href={m[2]} className={className}>
        {m[1]}
      </Link>
    );
  });
}

function ContactLine({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <p className="text-xs uppercase tracking-widest text-cream/70">{label}</p>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mt-1 inline-block font-display text-xl text-cream transition hover:text-gold-light"
      >
        {value}
        {external && <span className="sr-only"> (öffnet in neuem Tab)</span>}
      </a>
    </li>
  );
}

/** The fingerfood price list, straight from the menu data. */
function FingerfoodPrices() {
  const menu = Menus[0];
  const top = menu.items.filter((i): i is MenuItem => i.type === "MenuItem");
  const groups: { name: string; items: MenuItem[] }[] = [
    ...(top.length ? [{ name: "Canapés & Brötchen", items: top }] : []),
    ...menu.items
      .filter((i): i is MenuSection => i.type === "MenuSection")
      .map((s) => ({
        name: s.name,
        items: s.items.filter((i): i is MenuItem => i.type === "MenuItem"),
      })),
  ];
  return (
    <section
      id="preise"
      aria-labelledby="preise-title"
      className="scroll-mt-24 bg-cream-dark/50 py-14 sm:py-20"
    >
      <div className="container-x">
        <p className="eyebrow">Preisliste</p>
        <h2
          id="preise-title"
          className="mt-4 text-balance font-display text-3xl leading-tight text-olive-900 sm:text-5xl"
        >
          Fingerfood-Preise und Bestellmengen
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
          {menu.minimumOrder.description}. Die Preise gelten je nach Sorte
          pro Stück oder Portion und enthalten die Mehrwertsteuer; besondere
          Mindestmengen stehen bei der jeweiligen Sorte.
        </p>
        <div className="mt-10 gap-6 lg:columns-2">
          {groups.map((g) => (
            <div
              key={g.name}
              className="mb-6 break-inside-avoid rounded-[2rem] bg-cream-light p-6 shadow-sm ring-1 ring-olive-900/5 sm:p-8"
            >
              <h3 className="font-display text-2xl text-olive-900">{g.name}</h3>
              <ul className="mt-4 divide-y divide-olive-900/10">
                {g.items.map((i) => (
                  <li
                    key={i.name}
                    className="flex items-baseline justify-between gap-4 py-2.5"
                  >
                    <span className="min-w-0 text-olive-900">
                      {i.name}
                      {i.description && (
                        <span className="block text-sm text-ink-muted">
                          {i.description.replace(/^\((.*)\)$/, "$1")}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 whitespace-nowrap text-right font-semibold tabular-nums text-olive-900">
                      {euro.format(i.updatedPrice ?? i.price)}
                      {i.unit && (
                        <span className="block text-xs font-normal text-ink-muted">
                          {unitLabel[i.unit]}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a href="#anfrage" className="btn-dark">
            Fingerfood-Angebot anfragen <ArrowRight size={16} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function PizzaKinds() {
  return (
    <section
      aria-labelledby="sorten-title"
      className="bg-cream-dark/50 py-14 sm:py-20"
    >
      <div className="container-x">
        <p className="eyebrow">Unsere Pizzen</p>
        <h2
          id="sorten-title"
          className="mt-4 text-balance font-display text-3xl leading-tight text-olive-900 sm:text-5xl"
        >
          Klassisch, vegetarisch oder Spezial
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {pizzaKinds.map((k) => (
            <li
              key={k.title}
              className="rounded-3xl bg-cream-light p-7 shadow-sm ring-1 ring-olive-900/5"
            >
              <h3 className="font-display text-2xl text-olive-900">{k.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{k.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
