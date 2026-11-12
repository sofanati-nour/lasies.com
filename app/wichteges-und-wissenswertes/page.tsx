import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarX,
  Flower2,
  GlassWater,
  Music,
  Truck,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";
import heroImage from "@/app/images/1719172637188.jpg";

export const metadata: Metadata = {
  title: "Wichtiges & Wissenswertes | Lasies Catering Service",
  description:
    "Mietservice, Personal, Lieferkosten und Geschäftsbedingungen von Lasies Catering Service in Bad Liebenzell.",
  alternates: {
    canonical: "https://www.lasies.com/wichteges-und-wissenswertes",
  },
};

const rentalItems = [
  "Suppen-, Speise- und Dessertteller",
  "Suppentassen, obere und untere",
  "Kaffeetassen, obere und untere",
  "Speisemesser, -gabel, -löffel, Dessertlöffel",
  "Gläser aller Art",
  "Stehtisch schwarz, rund 80 cm",
  "Stehtisch inkl. weißer Husse",
  "Reinigungsgebühr pro Geschirr- und Besteckteil",
];

const rentalTerms = [
  "Gemietete Artikel, Racks und Boxen sind Eigentum der Firma Lasies Catering Service.",
  "Der Mietpreis eines Artikels wird auf Grund der aktuellsten Preisliste zuzüglich Reinigungsgebühr, inklusive der gesetzlichen Mehrwertsteuer festgelegt.",
  "Eine Mieteinheit beträgt 3 Tage, auch wenn die gemieteten Artikel vorzeitig und/oder unbenutzt zurückgegeben werden.",
  "Bei Abholung muss der Mieter selbst für einen vorschriftsmäßigen Transport Sorge tragen. Die Mietartikel müssen in einem geschlossenen Fahrzeug transportiert werden.",
  "Bei Rücknahme müssen die Mietartikel transportfähig wieder in die Boxen geräumt sein. Der Mietpreis beinhaltet nicht den Auf- und Abbau sowie das Vertragen und Einsammeln der gemieteten Gegenstände.",
  "Diese Leistung übernehmen wir gerne gegen gesonderte Berechnung (Stundensatz pro Person 35,00 Euro).",
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
            Gut zu wissen –{" "}
            <em className="italic text-gold-light">für Ihr Fest</em>
          </>
        }
        intro="Zur Freude der Gastgeber versorgen wir Sie bei Bedarf mit Gläsern, Geschirr, Besteck und vielem mehr. Hier finden Sie unsere Leistungen, Preise und Geschäftsbedingungen."
      />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {/* Rental */}
          <article className="rounded-[2rem] bg-cream-light p-8 shadow-sm ring-1 ring-olive-900/5 sm:p-10 lg:col-span-2">
            <CardTitle icon={GlassWater} title="Mietservice" />
            <p className="mt-2 text-sm text-ink-muted">
              Mietgebühr (Standardausführung) für:
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
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

          {/* Staff */}
          <article className="flex flex-col rounded-[2rem] bg-olive-900 p-8 text-cream sm:p-10">
            <CardTitle icon={Users} title="Personal" dark />
            <p className="mt-2 text-sm text-cream/70">
              Pro Person und Stunde
            </p>
            <dl className="mt-6 space-y-4">
              <PriceRow label="Servicepersonal" price="35,00 €" />
              <PriceRow label="Küchenpersonal" price="40,00 €" />
            </dl>
            <div className="mt-auto pt-10">
              <Link href="/#kontakt" className="btn-gold w-full">
                Personal anfragen
              </Link>
            </div>
          </article>

          <InfoCard icon={Flower2} title="Dekoration">
            Bei der Auswahl der Dekoration und Blumen sind wir gerne
            behilflich.
          </InfoCard>
          <InfoCard icon={Music} title="Rahmenprogramm">
            Bei der Vermittlung von Rahmenprogrammen (z. B. Musiker …) sind wir
            gerne behilflich.
          </InfoCard>
          <InfoCard icon={Wallet} title="Auftragserteilung & Anzahlung">
            Bei Auftragserteilung werden 50 % der zu erwartenden Auftragssumme
            fällig.
          </InfoCard>

          <InfoCard
            icon={CalendarX}
            title="Auftragsänderung & Stornierung"
            className="lg:col-span-2"
          >
            Auftragsänderungen sind bis spätestens 7 Werktage vor Lieferung
            möglich. Bei Auftragsstornierung innerhalb von 14 Tagen vor
            Veranstaltungsbeginn stellen wir 50 % der zu erwartenden
            Auftragssumme in Rechnung. Die gelieferte Ware bleibt bis zur
            vollständigen Bezahlung unser Eigentum. Ein Recht auf
            Weiterveräußerung besteht nicht.
          </InfoCard>
          <InfoCard icon={Truck} title="Lieferkosten">
            Für die Anfahrt berechnen wir bei jeder Bestellung 0,60 € pro
            Kilometer. Bei einer Rückholung unserer Ausstattung an Sonn- und
            Feiertagen berechnen wir einen Aufschlag von 30,00 €.
          </InfoCard>
        </div>

        <div className="container-x">
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
            Alle genannten Preise verstehen sich, wenn nicht anders benannt,
            einschließlich der gesetzlichen Mehrwertsteuer. Alle bisher
            erschienenen Preislisten verlieren mit Erscheinen dieser Preisliste
            ihre Gültigkeit.
          </p>
          <div className="mt-10 text-center">
            <Link href="/#kontakt" className="btn-dark">
              Fragen? Sprechen Sie uns an <ArrowRight size={16} />
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
            ? "grid h-12 w-12 place-items-center rounded-2xl bg-gold text-olive-950"
            : "grid h-12 w-12 place-items-center rounded-2xl bg-olive-900 text-gold-light"
        }
      >
        <Icon size={22} />
      </div>
      <h2
        className={
          dark
            ? "font-display text-3xl text-cream"
            : "font-display text-3xl text-olive-900"
        }
      >
        {title}
      </h2>
    </div>
  );
}

function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
      <dt className="text-cream/85">{label}</dt>
      <dd className="font-display text-3xl text-gold-light">{price}</dd>
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
