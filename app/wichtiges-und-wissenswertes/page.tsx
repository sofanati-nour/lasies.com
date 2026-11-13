import { pageMetadata } from "@/libs/metadata";
import JsonLd from "@/components/JsonLd";
import { faq, faqSchema } from "@/libs/faq";
import Link from "next/link";
import {
  ArrowRight,
  CalendarX,
  ChevronDown,
  Flower2,
  GlassWater,
  Truck,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";
import heroImage from "@/app/images/1719172637188.jpg";

export const metadata = pageMetadata({
  title: "Preise, Bedingungen & FAQ | Lasies Catering Service",
  description:
    "Häufige Fragen, Preise für Personal und Anfahrt, Mietservice sowie Anzahlungs- und Stornobedingungen von Lasies Catering Service aus Bad Liebenzell.",
  path: "/wichtiges-und-wissenswertes",
});

const rentalItems = [
  "Suppen-, Speise- und Dessertteller",
  "Suppentassen, obere und untere",
  "Kaffeetassen, obere und untere",
  "Speisemesser, -gabel, -löffel, Dessertlöffel",
  "Gläser aller Art",
  "Stehtisch schwarz, rund 80 cm",
  "Stehtisch inkl. weißer Husse",
];

const rentalTerms = [
  "Gemietete Artikel, Racks und Boxen sind Eigentum der Firma Lasies Catering Service.",
  "Die Mietpreise gelten pro Mieteinheit und enthalten die gesetzliche Mehrwertsteuer, bei Geschirr, Gläsern und Besteck außerdem die Reinigung.",
  "Eine Mieteinheit beträgt 3 Tage, auch wenn die gemieteten Artikel vorzeitig und/oder unbenutzt zurückgegeben werden.",
  "Bei Abholung muss der Mieter selbst für einen vorschriftsmäßigen Transport Sorge tragen. Die Mietartikel müssen in einem geschlossenen Fahrzeug transportiert werden.",
  "Bei Rücknahme müssen die Mietartikel transportfähig wieder in die Boxen geräumt sein. Der Mietpreis beinhaltet nicht den Auf- und Abbau sowie das Verteilen und Einsammeln der gemieteten Gegenstände – das übernehmen wir gerne gegen gesonderte Berechnung (35,00\u00A0€ pro Person und Stunde).",
  "Für beschädigte oder nicht zurückgegebene Ausstattungsgegenstände berechnen wir den Wiederbeschaffungswert.",
];

export default function Wichtiges() {
  return (
    <main>
      <PageHero
        image={heroImage}
        eyebrow="Wichtiges & Wissenswertes"
        title={
          <>
            {/* Non-breaking space keeps the dash off the start of a line. */}
            Preise, Bedingungen & FAQ{"\u00A0"}–{" "}
            <em className="italic text-gold-light">gut zu wissen</em>
          </>
        }
        intro="Antworten auf häufige Fragen, unsere Preise für Personal, Mietservice und Anfahrt sowie unsere Geschäftsbedingungen – alles auf einen Blick."
      />

      <section
        id="bedingungen"
        aria-labelledby="bedingungen-title"
        className="scroll-mt-24 py-14 sm:py-20"
      >
        <h2 id="bedingungen-title" className="sr-only">
          Leistungen, Preise und Geschäftsbedingungen
        </h2>
        <div className="container-x grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 [&>*]:min-w-0">
          {/* Rental */}
          <article className="rounded-[2rem] bg-cream-light p-8 shadow-sm ring-1 ring-olive-900/5 sm:p-10 md:col-span-2">
            <CardTitle icon={GlassWater} title="Mietservice" />
            <p className="mt-2 text-sm text-ink-muted">
              Mietartikel in Standardausführung – Preise pro Mieteinheit
              (3{"\u00A0"}Tage):
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-olive-900 p-6 text-cream">
                <dt className="font-medium">Gedeck</dt>
                <dd className="mt-1 font-display text-3xl text-gold-light">
                  {"3,25\u00A0€"}
                </dd>
                <dd className="mt-2 text-sm leading-relaxed text-cream/75">
                  Speiseteller, Beilagenteller, Glas, Gabel und Messer –
                  inklusive Reinigung
                </dd>
              </div>
              <div className="rounded-2xl bg-olive-900 p-6 text-cream">
                <dt className="font-medium">Einzelteil</dt>
                <dd className="mt-1 font-display text-3xl text-gold-light">
                  {"0,65\u00A0€"}
                </dd>
                <dd className="mt-2 text-sm leading-relaxed text-cream/75">
                  pro Teller, Tasse, Glas oder Besteckteil – inklusive
                  Reinigung
                </dd>
              </div>
              {/* Full width on its own row at sm/md, third column from lg. */}
              <div className="rounded-2xl bg-olive-900 p-6 text-cream sm:col-span-2 lg:col-span-1">
                <dt className="font-medium">Stehtisch</dt>
                <dd className="mt-1 font-display text-3xl text-gold-light">
                  {"15,00 €"}
                </dd>
                <dd className="mt-2 text-sm leading-relaxed text-cream/75">
                  pro Tisch – schwarz, rund 80{" "}cm, auf Wunsch mit
                  weißer Husse
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-sm font-medium text-olive-900">
              Unser Mietsortiment:
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {rentalItems.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-cream-dark/60 px-4 py-3 text-sm text-olive-900"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3">
              {rentalTerms.map((t) => (
                <li
                  key={t}
                  className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </article>

          {/* Staff + decoration share the right column, so it is as tall
              as the rental card beside it. */}
          {/* Side by side below xl, stacked next to the rental card from xl. */}
          <div className="flex flex-col gap-6 md:col-span-2 md:flex-row xl:col-span-1 xl:flex-col">
          <article className="flex flex-col rounded-[2rem] bg-olive-900 p-8 text-cream sm:p-10 md:flex-1 xl:flex-none">
            <CardTitle icon={Users} title="Personal" dark />
            <p className="mt-2 text-sm text-cream/70">
              Pro Person und Stunde
            </p>
            <dl className="mt-6 space-y-4">
              <PriceRow label="Servicepersonal" price={"35,00\u00A0€"} />
              <PriceRow label="Küchenpersonal" price={"40,00\u00A0€"} />
            </dl>
            <div className="mt-auto pt-10">
              <Link href="/?anfrage=personal#anfrage" className="btn-gold w-full">
                Personal anfragen
              </Link>
            </div>
          </article>
          <InfoCard
            icon={Flower2}
            title={"Dekoration & Rahmen\u00ADprogramm"}
            className="flex-1"
          >
            Bei der Auswahl von Dekoration und Blumen helfen wir Ihnen gerne
            weiter – ebenso bei der Vermittlung von Rahmenprogrammen, zum
            Beispiel von Musikern.
          </InfoCard>
          </div>
          <InfoCard icon={Wallet} title={"Auftrags\u00ADerteilung & Anzahlung"}>
            Bei Auftragserteilung werden 50&nbsp;% der zu erwartenden Auftragssumme
            fällig.
          </InfoCard>

          <InfoCard icon={Truck} title="Lieferkosten">
            Für die Anfahrt berechnen wir bei jeder Bestellung 0,60&nbsp;€ pro
            Kilometer. Bei einer Rückholung unserer Ausstattung an Sonn- und
            Feiertagen berechnen wir einen Aufschlag von 30,00&nbsp;€.
          </InfoCard>

          <InfoCard
            icon={CalendarX}
            title={"Auftrags\u00ADänderung & Stornierung"}
            className="md:col-span-2 xl:col-span-1"
          >
            Auftragsänderungen sind bis spätestens 7 Werktage vor Lieferung
            möglich. Bei Auftragsstornierung innerhalb von 14 Tagen vor
            Veranstaltungsbeginn stellen wir 50&nbsp;% der zu erwartenden
            Auftragssumme in Rechnung. Die gelieferte Ware bleibt bis zur
            vollständigen Bezahlung unser Eigentum. Ein Recht auf
            Weiterveräußerung besteht nicht.
          </InfoCard>
        </div>

        <div className="container-x">
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
            Alle genannten Preise verstehen sich, wenn nicht anders benannt,
            einschließlich der gesetzlichen Mehrwertsteuer. Es gelten die Preise
            und Bedingungen zum Zeitpunkt Ihres Angebots.
          </p>
        </div>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-title"
        className="scroll-mt-24 bg-cream-dark/50 py-14 sm:py-20"
      >
        <JsonLd data={faqSchema()} />
        <div className="container-x mx-auto max-w-3xl">
          <p className="eyebrow">Häufige Fragen</p>
          <h2
            id="faq-title"
            className="mt-4 font-display text-4xl text-olive-900 sm:text-5xl"
          >
            Gut zu wissen vor Ihrer Anfrage
          </h2>
          <div className="mt-10 divide-y divide-olive-900/15 rounded-[2rem] bg-cream-light px-6 shadow-sm ring-1 ring-olive-900/5 sm:px-10">
            {faq.map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-xl text-olive-900 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-xl font-normal">
                    {f.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    aria-hidden
                    className="mt-1 shrink-0 text-gold-dark transition group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-ink-muted">Ihre Frage ist nicht dabei?</p>
            <Link href="/#anfrage" className="btn-dark mt-4">
              Sprechen Sie uns an <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CardTitle({
  icon: Icon,
  title,
  dark,
}: {
  icon: LucideIcon;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={
          dark
            ? "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-olive-950"
            : "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-olive-900 text-gold-light"
        }
      >
        <Icon size={22} aria-hidden />
      </div>
      <h3
        className={
          dark
            ? "min-w-0 hyphens-auto font-display text-2xl text-cream [overflow-wrap:anywhere] sm:text-3xl xl:text-[1.7rem]"
            : "min-w-0 hyphens-auto font-display text-2xl text-olive-900 [overflow-wrap:anywhere] sm:text-3xl xl:text-[1.7rem]"
        }
      >
        {title}
      </h3>
    </div>
  );
}

function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-4">
      <dt className="min-w-0 text-cream/85">{label}</dt>
      {/* The right column is narrowest at lg (1024–1279px). */}
      <dd className="shrink-0 whitespace-nowrap font-display text-3xl text-gold-light lg:text-2xl xl:text-3xl">
        {price}
      </dd>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-[2rem] bg-cream-light p-8 shadow-sm ring-1 ring-olive-900/5 ${className}`}
    >
      <CardTitle icon={icon} title={title} />
      <p className="mt-4 leading-relaxed text-ink-muted">{children}</p>
    </article>
  );
}
