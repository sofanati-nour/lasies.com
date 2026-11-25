import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  Armchair,
  ArrowRight,
  Building2,
  Cake,
  ChefHat,
  Church,
  Coffee,
  Layers,
  Truck,
  Flame,
  GlassWater,
  Heart,
  Leaf,
  MapPin,
  PartyPopper,
  Send,
  Sparkles,
  Star,
  Tent,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import { SendContactRequest } from "./actions";
import Contact from "@/components/Contact";
import SectionHeading from "@/components/site/SectionHeading";
import { slugify } from "@/libs/utils";
import { site } from "@/libs/site";
import { googleRating, reviews } from "@/libs/reviews";
import { occasionPages, townPages } from "@/libs/landingPages";
import { lunch } from "@/libs/lunch";
import { clients } from "@/libs/clients";
import MotionToggle from "@/components/MotionToggle";

import heroA from "@/app/images/hero-lachsplatte.jpg";
import heroB from "@/app/images/hero-forellenplatte.jpg";
import heroC from "@/app/images/hero-fingerfood.jpg";
import heroD from "@/app/images/hero-pilze.jpg";
import heroE from "@/app/images/hero-serrano-melone.jpg";
import heroF from "@/app/images/hero-dessert.jpg";
import chefGrill from "@/app/images/1719172912415.jpg";
import buffetHall from "@/app/images/1719173020512.jpg";
import pizzaChef from "@/app/images/pizzaman.jpeg";
import imgFingerfood from "@/app/images/new-belegte-baguettes.jpg";
import imgGrill from "@/app/images/1719172912601.jpg";
import imgPlatten from "@/app/images/1719173021628.jpg";
import imgMediterran from "@/app/images/new-griechischer-bauernsalat.jpg";
import imgOrient from "@/app/images/1719173021581.jpg";
import imgHochzeit from "@/app/images/1719173020438.jpg";
import g1 from "@/app/images/new-dessert-himbeer-creme.jpg";
import g2 from "@/app/images/new-mini-burger-sommerrollen.jpg";
import g3 from "@/app/images/new-zucchiniroellchen-buffet.jpg";
import g4 from "@/app/images/1719173021178.jpg";
import g5 from "@/app/images/1719173020853.jpg";
import g6 from "@/app/images/1719173021654.jpg";

export default function Home() {
  return (
    <main>
      <Hero />
      <OccasionMarquee />
      <Lunch />
      <About />
      <Clients />
      <Pizza />
      <Buffets />
      <Services />
      <Rental />
      <Process />
      <Reviews />
      <GalleryTeaser />
      <Area />
      <ContactSection />
    </main>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  // Each slide shows for 7s; keep in sync with "hero-fade" in tailwind.config.ts.
  // Gold-tray shots (A, F, C) alternate with the others.
  const slides = [heroA, heroD, heroF, heroE, heroC, heroB];
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-olive-950 text-white">
      {/* First slide is a static base layer, so the hero never goes blank
          (e.g. with reduced motion). The others cross-fade on top. */}
      {slides.map((src, i) => (
        <div
          key={src.src}
          className={
            i === 0
              ? "absolute inset-0 -z-20"
              : "absolute inset-0 -z-20 animate-hero-fade opacity-0"
          }
          style={i === 0 ? undefined : { animationDelay: `${(i - 1) * 7}s` }}
        >
          <Image
            src={src}
            alt=""
            fill
            preload={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="100vw"
            placeholder="blur"
            className="animate-ken-burns object-cover object-[72%_center] md:object-center"
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-950 via-olive-950/55 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-950/70 to-transparent" />

      <MotionToggle className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6" />
      <div className="container-x pb-16 pt-32 sm:pb-16">
        <ul className="mb-6 flex animate-fade-up flex-col items-start gap-2.5">
          <li>
            <NewBadge href="#mittagstisch">
              Mittagstisch für {lunch.minGuests}–{lunch.maxGuests} Personen
              <span className="hidden sm:inline">
                {" "}
                · Tagesgerichte unter {lunch.maxPrice}
                {" "}€
              </span>
            </NewBadge>
          </li>
          <li>
            <NewBadge href="#pizza">
              Steinofen-Pizza
              <span className="hidden sm:inline">
                {" "}
                · live gebacken bei Ihrem Event
              </span>
              <span className="sm:hidden"> live vor Ort</span>
            </NewBadge>
          </li>
        </ul>
        <h1 className="max-w-4xl">
          <span className="eyebrow animate-fade-up !text-gold-light">
            Catering & Partyservice
          </span>{" "}
          <span
            className="mt-6 block animate-fade-up font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "100ms" }}
          >
            Feste, die man{" "}
            <em className="font-normal italic text-gold-light">schmeckt</em>.
          </span>
        </h1>
        <p
          className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/85 sm:text-xl"
          style={{ animationDelay: "200ms" }}
        >
          Individuelle Buffets, Front-Cooking und Rundum-Betreuung für
          Hochzeiten, Firmenfeiern und private Feste – frisch zubereitet aus
          regionalen Zutaten.
        </p>
        <div
          className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "300ms" }}
        >
          <Link href="#anfrage" className="btn-gold !px-8 !py-4 text-base">
            Unverbindlich anfragen
            <ArrowRight size={18} aria-hidden />
          </Link>
          <Link href="/menu" className="btn-ghost-light !px-8 !py-4 text-base">
            Menü entdecken
          </Link>
        </div>

        <ul
          className="mt-14 grid animate-fade-up gap-4 border-t border-white/15 pt-6 text-sm text-white/80 sm:grid-cols-3"
          style={{ animationDelay: "400ms" }}
        >
          <li className="flex items-center gap-3">
            <Leaf size={18} className="shrink-0 text-gold" aria-hidden />
            Frische, regionale Zutaten
          </li>
          <li className="flex items-center gap-3">
            <ChefHat size={18} className="shrink-0 text-gold" aria-hidden />
            Front-Cooking direkt vor Ort
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={18} className="shrink-0 text-gold" aria-hidden />
            Bad Liebenzell, Calw, Leonberg & Großraum Stuttgart
          </li>
        </ul>
      </div>
    </section>
  );
}

function NewBadge({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-olive-950/60 py-1.5 pl-1.5 pr-4 text-sm text-white/90 backdrop-blur transition hover:border-gold hover:text-white"
    >
      <span className="rounded-full bg-gold px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-olive-950">
        Neu
      </span>
      <span>{children}</span>
      <ArrowRight size={14} className="shrink-0" aria-hidden />
    </Link>
  );
}

function OccasionMarquee() {
  const items = [
    "Hochzeiten",
    "Firmenfeiern",
    "Geburtstage",
    "Konfirmationen",
    "Kommunionen",
    "Taufen",
    "Jubiläen",
    "Messen",
    "Richtfeste",
    "Vereinsfeste",
    "Stehempfänge",
    "Abschlussfeiern",
  ];
  const row = (hidden: boolean) => (
    <ul className="marquee-row flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-8 pr-8 font-display text-2xl italic text-cream/90 sm:text-3xl"
        >
          {item}
          <Sparkles size={16} className="text-gold" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="group overflow-hidden border-y border-white/5 bg-olive-900 py-5">
      <div className="marquee-track flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

function Lunch() {
  const points = [
    `Ab ${lunch.minGuests} bis ${lunch.maxGuests} Personen`,
    "Wechselnde Tagesgerichte, frisch gekocht",
    `Jeder Teller unter ${lunch.maxPrice} €`,
  ];
  return (
    <section
      id="mittagstisch"
      tabIndex={-1}
      className="scroll-mt-24 bg-cream-dark/50 py-20 outline-none sm:py-28"
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Neu · Mittagstisch"
            title={
              <>
                Tagesgerichte für Ihr Team –{" "}
                <em className="italic text-gold-dark">frisch gekocht</em>
              </>
            }
            intro={`Ob Firma, Schulung, Verein oder Gruppe: Wir kochen Ihr Mittagessen frisch – für ${lunch.minGuests} bis ${lunch.maxGuests} Personen und zu Preisen unter ${lunch.maxPrice} € pro Teller.`}
          />
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-olive-900">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-olive-900 text-gold-light">
                  <UtensilsCrossed size={14} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link href="/?anfrage=mittagstisch#anfrage" className="btn-gold mt-9">
            Mittagstisch anfragen <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="rounded-[2rem] bg-olive-900 p-7 text-cream shadow-2xl shadow-olive-900/20 sm:p-10">
          <h3 className="font-display text-2xl text-gold-light sm:text-3xl">
            Aus unserer Tageskarte
          </h3>
          <p className="mt-1 text-sm text-cream/70">
            Eine Auswahl – die Gerichte wechseln täglich.
          </p>
          <ul className="mt-6 divide-y divide-white/10">
            {lunch.dishes.map((d) => (
              <li key={d} className="flex items-center gap-4 py-3.5">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                />
                <span className="leading-snug">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Individuelle Menüs nach Ihren Wünschen",
    "Front-Cooking als Highlight für Ihre Gäste",
    "Geschirr, Tischdecken, Zelte & mehr zum Mieten",
    "Service- und Küchenpersonal auf Wunsch",
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-olive-900/20">
            <Image
              src={buffetHall}
              alt="Festlich angerichtetes Buffet von Lasies"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 w-[45%] overflow-hidden rounded-3xl border-[6px] border-cream shadow-xl sm:-right-10">
            <Image
              src={chefGrill}
              alt="Unser Koch beim Front-Cooking am Grill"
              placeholder="blur"
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="aspect-[3/4] object-cover"
            />
          </div>
          <div className="absolute -left-2 top-8 rounded-2xl bg-olive-900 px-5 py-4 text-cream shadow-xl sm:-left-4 xl:-left-8">
            <p className="font-display text-3xl text-gold-light">Frisch</p>
            <p className="text-xs uppercase tracking-widest text-cream/70">
              zubereitet vor Ort
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Über uns"
            title={
              <>
                Ihr Partyservice mit dem{" "}
                <em className="italic text-gold-dark">Plus</em> an Leistungen
              </>
            }
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
            <p>
              Schöne Feste sind die Höhepunkte unseres Lebens. Damit sie
              gelingen, ist eine gut durchdachte Planung unverzichtbar – und
              dabei helfen wir Ihnen.
            </p>
            <p>
              Neben köstlichen Catering-Menüs aus frischen Zutaten regionaler
              Herkunft bieten wir eine professionelle Rundum-Betreuung. So
              können Sie den Tag Ihrer Veranstaltung ganz in Ruhe auf sich
              zukommen lassen.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl bg-cream-dark/60 p-4 text-sm font-medium text-olive-900"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-olive-950">
                  <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
                    <path
                      d="M2.5 6.5l2.2 2.2 4.8-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section
      id="kunden"
      tabIndex={-1}
      className="scroll-mt-24 bg-cream-dark/50 py-20 outline-none sm:py-28"
    >
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Unsere Kunden"
          title={
            <>
              Diese Unternehmen{" "}
              <em className="italic text-gold-dark">vertrauen uns</em>
            </>
          }
          intro="Zu unseren Stammkunden gehören bekannte Firmen und Einrichtungen aus der Region – von Leonberg und Ditzingen bis Bad Liebenzell und Calw. Eine Auswahl der Unternehmen, die regelmäßig bei uns bestellen:"
        />
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((c) => (
            <li
              key={c.name}
              className="flex flex-col items-center rounded-3xl bg-white px-4 pb-5 pt-6 text-center shadow-sm ring-1 ring-olive-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-olive-900/10 hover:ring-2 hover:ring-gold"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={`/images/kunden/${c.logo}`}
                  alt={`Logo ${c.name}`}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-medium leading-snug text-olive-900">
                {c.name}
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-muted">
                <MapPin size={12} className="text-gold-dark" aria-hidden />
                {c.town}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pizza() {
  const kinds = [
    { title: "Klassisch", text: "Margherita, Salami, Prosciutto" },
    { title: "Vegetarisch", text: "Grillgemüse, Pilze, Rucola" },
    { title: "Spezial", text: "BBQ Chicken, Thunfisch, Schafskäse & mehr" },
  ];
  return (
    <section
      id="pizza"
      tabIndex={-1}
      className="relative scroll-mt-24 overflow-hidden bg-olive-900 py-20 text-cream outline-none sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-olive-800 shadow-2xl">
            <Image
              src={pizzaChef}
              alt="Koch von Lasies mit frischer Steinofen-Pizza"
              fill
              sizes="(min-width: 1024px) 30vw, 80vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-4 flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-olive-950 shadow-lg">
            <Flame size={16} aria-hidden /> Neu bei uns
          </div>
        </div>
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Steinofen-Pizza"
            title={
              <>
                Frisch. Heiß.{" "}
                <em className="italic text-gold-light">Direkt vor Ort.</em>
              </>
            }
            intro="Sie planen ein Fest, eine Firmenfeier oder ein Event? Wir bringen den Steinofen direkt zu Ihnen und backen vor den Augen Ihrer Gäste knusprige, duftende Pizzen – wie aus Italien."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {kinds.map((k) => (
              <div
                key={k.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="font-display text-xl text-gold-light">
                  {k.title}
                </p>
                <p className="mt-1 text-sm text-cream/70">{k.text}</p>
              </div>
            ))}
          </div>
          <Link href="/?anfrage=pizza#anfrage" className="btn-gold mt-8">
            Pizza-Event anfragen <ArrowRight size={16} aria-hidden />
          </Link>
          <Link
            href="/steinofen-pizza-catering"
            className="ml-0 mt-4 block text-sm font-semibold text-gold-light underline-offset-4 hover:underline sm:ml-5 sm:mt-8 sm:inline-block"
          >
            Mehr zum Steinofen-Pizza-Catering
          </Link>
        </div>
      </div>
    </section>
  );
}

const featuredBuffets: {
  name: string;
  menu: string;
  text: string;
  img: StaticImageData;
}[] = [
  {
    name: "Fingerfood",
    menu: "Fingerfood",
    text: "Mundgerechte Snacks – kalt und warm, perfekt für Empfänge und gesellige Runden.",
    img: imgFingerfood,
  },
  {
    name: "Grill-Buffet",
    menu: "Grill-Buffet",
    text: "Gegrilltes Fleisch, Gemüse und Beilagen – ideal für Sommerfeste und Outdoor-Events.",
    img: imgGrill,
  },
  {
    name: "Schlemmerplatten",
    menu: "Schlemmerplatten",
    text: "Genussvolle Platten mit erlesenem Aufschnitt, Käse, Fisch und feinen Beilagen.",
    img: imgPlatten,
  },
  {
    name: "Mediterranes Buffet",
    menu: "Mediterranes Buffet",
    text: "Die Aromen des Mittelmeers: Oliven, Feta, frische Salate und Leckeres vom Grill.",
    img: imgMediterran,
  },
  {
    name: "Orientalisches Buffet",
    menu: "Orientalisches Buffet",
    text: "Würzige Spezialitäten aus dem Orient – von gefüllten Teigtaschen bis Kunafa.",
    img: imgOrient,
  },
  {
    name: "Hochzeitsbuffet",
    menu: "Hochzeitsbuffet „Das glückliche Ehepaar“",
    text: "„Das glückliche Ehepaar“ – elegante Gerichte für den schönsten Tag im Leben.",
    img: imgHochzeit,
  },
];

const moreBuffets = [
  "Zum Kombinieren",
  "Suppen",
  "Deftiges Buffet",
  "Vegetarisches Buffet",
  "Gourmetreise-Buffet",
  "Französisches Buffet",
];

function Buffets() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Unsere Buffets"
            title="Für jeden Anlass das passende Buffet"
            intro="Ob rustikal, mediterran oder festlich-elegant: Wählen Sie aus unseren Buffets oder lassen Sie sich Ihr eigenes Menü zusammenstellen."
          />
          <Link href="/menu" className="btn-ghost-dark shrink-0">
            Komplettes Menü <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBuffets.map((b) => (
            <Link
              key={b.name}
              href={`/menu#${slugify(b.menu)}`}
              className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl p-6 text-cream shadow-lg shadow-olive-900/10"
            >
              <Image
                src={b.img}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                placeholder="blur"
                className="-z-20 object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-950/95 via-olive-950/40 to-transparent" />
              <h3 className="font-display text-3xl">{b.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">
                {b.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
                Speisen ansehen
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 xl:flex-row xl:items-center">
          <span className="shrink-0 text-sm font-medium text-ink-muted">
            Außerdem:
          </span>
          {/* Phones: natural wrap. 640–1279px: even 3-column grid. xl: one row. */}
          <div className="flex flex-wrap gap-3 sm:grid sm:grid-cols-3 xl:flex xl:flex-wrap">
          {moreBuffets.map((name) => (
            <Link
              key={name}
              href={`/menu#${slugify(name)}`}
              className="rounded-full border border-olive-900/15 bg-cream-light px-4 py-2 text-center text-sm text-olive-900 transition hover:border-gold hover:text-gold-dark"
            >
              {name}
            </Link>
          ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          Getränke servieren wir Ihnen gerne nach Wunsch.
        </p>
      </div>
    </section>
  );
}

function Services() {
  const occasions = [
    {
      icon: Heart,
      title: "Hochzeiten",
      href: "/hochzeitscatering",
      linkLabel: "Mehr zum Hochzeitscatering",
      text: "An einem der wichtigsten Tage Ihres Lebens bieten wir ein umfassendes Catering-Programm.",
    },
    {
      icon: Church,
      title: "Konfirmationen & Kommunionen",
      text: "Liebevoll abgestimmte Menüs für Ihr Familienfest – von der Vorspeise bis zum Dessert.",
    },
    {
      icon: Building2,
      title: "Unternehmen",
      href: "/firmencatering",
      linkLabel: "Mehr zum Firmencatering",
      text: "Ob Richtfest, Messe oder Tag der offenen Tür – wir verwöhnen Ihre Gäste mit Fingerfood oder Menü.",
    },
    {
      icon: Tent,
      title: "Festivals",
      text: "Große oder kleine, offene Feste für Erwachsene und Kinder – wir sind darauf eingestellt.",
    },
    {
      icon: Cake,
      title: "Geburtstagsfeiern",
      text: "Vom runden Geburtstag bis zur Gartenparty – mit einem Buffet, das allen schmeckt.",
    },
    {
      icon: PartyPopper,
      title: "Private Partys",
      text: "Im Garten, im Vereinsheim oder zu Hause – wir bringen Genuss und Service zu Ihnen.",
    },
  ];
  const extras = [
    {
      icon: MapPin,
      title: "Location-Suche",
      text: "Wir unterstützen Sie bei der Suche nach der passenden Location.",
    },
    {
      icon: GlassWater,
      title: "Mietservice",
      text: "Geschirr, Gläser, Tischdecken, Kaffeemaschine, Sitzgarnituren, Stehtische und Partyzelte – wir liefern und holen alles wieder ab.",
    },
    {
      icon: Users,
      title: "Personal",
      text: "Service- und Küchenpersonal übernimmt die Bewirtung Ihrer Gäste.",
    },
    {
      icon: Sparkles,
      title: "Dekoration",
      text: "Bei Dekoration und Blumen helfen wir Ihnen gerne weiter.",
    },
  ];
  return (
    <section
      id="leistungen"
      tabIndex={-1}
      className="bg-cream-dark/50 py-20 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:py-28"
    >
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Leistungen"
          title="Planen Sie ein fabelhaftes Event?"
          intro="„Feiern, wo und wann Sie möchten“ – das ist unser Motto. Wir kümmern uns um das Essen und auf Wunsch um das ganze Drumherum."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map(({ icon: Icon, title, text, href, linkLabel }) => (
            <div
              key={title}
              className="group rounded-3xl bg-cream-light p-7 shadow-sm ring-1 ring-olive-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-olive-900/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-olive-900 text-gold-light transition group-hover:bg-gold group-hover:text-olive-950">
                <Icon size={22} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-2xl text-olive-900">
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{text}</p>
              {href && (
                <Link
                  href={href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark underline-offset-4 hover:underline"
                >
                  {linkLabel} <ArrowRight size={14} aria-hidden />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-olive-900 text-cream">
          <div className="grid lg:grid-cols-[1fr_1.6fr]">
            <div className="p-8 sm:p-12">
              <p className="eyebrow !text-gold-light">Rundum-Betreuung</p>
              <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                Mehr als nur gutes Essen
              </h3>
              <p className="mt-4 leading-relaxed text-cream/75">
                Damit Sie sich ganz auf Ihre Gäste konzentrieren können, nehmen
                wir Ihnen auf Wunsch die gesamte Organisation ab.
              </p>
              <Link
                href="/wichtiges-und-wissenswertes"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold"
              >
                Preise & Bedingungen <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {extras.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-olive-900 p-8">
                  <Icon size={22} className="text-gold" aria-hidden />
                  <p className="mt-4 font-display text-xl">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-cream/70">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rental() {
  const items = [
    { icon: UtensilsCrossed, title: "Geschirr, Besteck & Gläser" },
    { icon: Layers, title: "Tischdecken & Servietten", isNew: true },
    { icon: Coffee, title: "Professionelle Kaffeemaschine", isNew: true },
    { icon: Armchair, title: "Stehtische & Sitzgarnituren", isNew: true },
    { icon: Tent, title: "Partyzelte", isNew: true },
    { icon: Truck, title: "Lieferung & Abholung" },
  ];
  return (
    <section
      id="mietservice"
      tabIndex={-1}
      className="scroll-mt-24 py-20 outline-none sm:py-28"
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Mietservice"
            title={
              <>
                Tischdecken, Servietten, Partyzelte{" "}
                <em className="italic text-gold-dark">und vieles mehr</em>
              </>
            }
            intro="Sie benötigen Geschirr, Besteck, Gläser, Tischdecken oder eine professionelle Kaffeemaschine? Oder möchten Sie für Ihre Gartenparty Sitzgarnituren, Stehtische und vielleicht auch ein Zelt leihen? Wir liefern Ihnen das nötige Equipment für Ihre Veranstaltung und holen es anschließend auch wieder bei Ihnen ab."
          />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/?anfrage=miete#anfrage" className="btn-gold">
              Mietartikel anfragen <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/wichtiges-und-wissenswertes#mietservice"
              className="text-sm font-semibold text-gold-dark underline-offset-4 hover:underline sm:ml-3"
            >
              Mietpreise & Bedingungen
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, isNew }) => (
            <li
              key={title}
              className="relative flex flex-col gap-4 rounded-3xl bg-cream-light p-5 shadow-sm ring-1 ring-olive-900/5 sm:p-6"
            >
              {isNew && (
                <span className="absolute right-4 top-4 rounded-full bg-gold px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-olive-950">
                  Neu
                </span>
              )}
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-olive-900 text-gold-light">
                <Icon size={20} aria-hidden />
              </span>
              <span className="font-medium leading-snug text-olive-900">
                {title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      icon: Send,
      title: "Anfrage senden",
      text: "Erzählen Sie uns per Formular, Telefon oder WhatsApp von Ihrem Fest.",
    },
    {
      icon: UtensilsCrossed,
      title: "Persönliches Angebot",
      text: "Wir stellen Ihr Menü zusammen und senden Ihnen ein unverbindliches Angebot.",
    },
    {
      icon: ChefHat,
      title: "Genießen",
      text: "Wir liefern, bauen auf und kochen auf Wunsch direkt vor Ort – Sie feiern.",
    },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="So einfach geht’s"
          title="In drei Schritten zum Fest"
        />
        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-[16.6%] right-[16.6%] top-8 hidden border-t-2 border-dashed border-gold/40 md:block"
          />
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative text-center">
              <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-olive-900 text-gold-light ring-8 ring-cream">
                <Icon size={24} aria-hidden />
                <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-bold text-olive-950">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-olive-900">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink-muted">
                {text}
              </p>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}

function Stars({
  value,
  size = 16,
  tone = "light",
  "aria-hidden": hidden,
}: {
  value: number;
  size?: number;
  /** Decorative next to a visible rating: hide from assistive tech. */
  "aria-hidden"?: boolean;
  /** "light" cards need the darker gold for 3:1 graphic contrast. */
  tone?: "light" | "dark";
}) {
  const filled = tone === "light" ? "text-gold-dark" : "text-gold";
  const empty = tone === "light" ? "text-gold-dark/25" : "text-gold/30";
  return (
    <span
      className="flex items-center gap-0.5"
      {...(hidden
        ? { "aria-hidden": true }
        : {
            role: "img",
            "aria-label": `${value.toLocaleString("de-DE")} von 5 Sternen`,
          })}
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = Math.max(0, Math.min(1, value - n + 1));
        return (
          <span
            key={n}
            className="relative"
            style={{ width: size, height: size }}
          >
            <Star
              size={size}
              className={`absolute inset-0 ${empty}`}
              fill="currentColor"
              strokeWidth={0} aria-hidden />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                size={size}
                className={filled}
                fill="currentColor"
                strokeWidth={0} aria-hidden />
            </span>
          </span>
        );
      })}
    </span>
  );
}

function Reviews() {
  const rating = googleRating.rating.toLocaleString("de-DE", {
    minimumFractionDigits: 1,
  });
  return (
    <section id="bewertungen" className="bg-cream-dark/50 py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Was unsere Kunden sagen"
            title={
              <>
                Gäste, die{" "}
                <em className="italic text-gold-dark">wiederkommen</em>
              </>
            }
            intro="Echte Stimmen aus unseren Google-Rezensionen – von der Hochzeit bis zur Gartenparty."
          />
          <a
            href={googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-5 self-start rounded-3xl bg-olive-900 p-5 pr-7 text-cream shadow-xl shadow-olive-900/10 transition hover:bg-olive-800"
          >
            <span className="font-display text-6xl leading-none text-gold-light">
              {rating}
            </span>
            <span className="sr-only">von 5 Sternen,</span>
            <span>
              <Stars value={googleRating.rating} size={18} tone="dark" aria-hidden />
              <span className="mt-1.5 block text-sm text-cream/75">
                {googleRating.count} Google-Rezensionen
              </span>
              <span className="sr-only">(öffnet in neuem Tab)</span>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-gold-light">
                Alle lesen
                <ArrowRight
                  size={14}
                  className="transition group-hover:translate-x-1" aria-hidden />
              </span>
            </span>
          </a>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.author}>
              <figure className="flex h-full flex-col rounded-3xl bg-cream-light p-7 shadow-sm ring-1 ring-olive-900/5">
                <div className="flex items-center justify-between">
                  <Stars value={r.stars} />
                  <span
                    aria-hidden
                    className="font-display text-6xl leading-[0.5] text-gold/40"
                  >
                    &ldquo;
                  </span>
                </div>
                <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-olive-900">
                  {r.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-olive-900/10 pt-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-olive-900 font-display text-lg text-gold-light">
                    {r.author.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-olive-900">
                      {r.author}
                    </span>
                    <span className="block text-sm text-ink-muted">
                      {r.occasion ? `${r.occasion} · ` : ""}Google-Rezension
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <a
            href={googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-dark"
          >
            Alle Rezensionen auf Google
            <span className="sr-only"> (öffnet in neuem Tab)</span>
          </a>
          <a
            href={googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gold-dark underline-offset-4 hover:underline"
          >
            Bei uns gefeiert? Bewerten Sie uns!
            <span className="sr-only"> (öffnet in neuem Tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryTeaser() {
  const imgs = [
    { src: g1, cls: "row-span-2" },
    { src: g2, cls: "" },
    { src: g3, cls: "row-span-2" },
    { src: g4, cls: "" },
    { src: g5, cls: "" },
    { src: g6, cls: "" },
  ];
  return (
    <section className="bg-olive-950 py-20 text-cream sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Impressionen"
            title="Das Auge isst mit"
            intro="Ein erster Vorgeschmack aus unseren Caterings – frisch angerichtet, mit Liebe zum Detail."
          />
          <Link href="/galerie" className="btn-ghost-light shrink-0">
            Zur Galerie <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid grid-flow-dense auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {/* Decorative preview; the single "Zur Galerie" link above is
              the way in, so keyboard users don't hit six identical links. */}
          {imgs.map(({ src, cls }) => (
            <div
              key={src.src}
              aria-hidden
              className={`group relative overflow-hidden rounded-2xl ${cls}`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                placeholder="blur"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Area() {
  return (
    <section className="bg-cream-dark/50 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Einzugsgebiet"
          title="Catering in Ihrer Nähe"
          intro="Wir kochen in Bad Liebenzell-Möttlingen und liefern in die ganze Region – von Calw bis in den Großraum Stuttgart."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <AreaLinks title="Orte" pages={townPages} />
          <AreaLinks title="Anlässe & Angebote" pages={occasionPages} />
        </div>
      </div>
    </section>
  );
}

function AreaLinks({
  title,
  pages,
}: {
  title: string;
  pages: { slug: string; nav: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-2xl text-olive-900">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-3">
        {pages.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/${p.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-olive-900/15 bg-cream-light px-4 py-2.5 text-sm text-olive-900 transition hover:border-gold hover:text-gold-dark"
            >
              {p.nav} <ArrowRight size={14} aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactSection() {
  return (
    <section
      id="kontakt"
      tabIndex={-1}
      className="py-20 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:py-28"
    >
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col rounded-[2rem] bg-olive-900 p-8 text-cream sm:p-12">
          <p className="eyebrow !text-gold-light">Kontakt</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Lassen Sie uns Ihr Fest planen
          </h2>
          <p className="mt-5 leading-relaxed text-cream/75">
            Gerne erstellen wir Ihnen ein unverbindliches Angebot für Ihr
            Catering in {site.areaSentence}.
          </p>
          <Link
            href="/wichtiges-und-wissenswertes#faq"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold"
          >
            Häufige Fragen zu Preisen & Ablauf <ArrowRight size={16} aria-hidden />
          </Link>
          <ul className="mt-10 space-y-5">
            <ContactRow
              label="Telefon"
              href={site.phoneHref}
              value={site.phone}
            />
            <ContactRow
              label="E-Mail"
              href={`mailto:${site.email}`}
              value={site.email}
            />
            <ContactRow
              label="WhatsApp"
              href={site.whatsapp}
              value="Nachricht schreiben"
              external
            />
            <ContactRow
              label="Adresse"
              value={`${site.street}, ${site.city.replace(" ", "\u00A0").replace("Bad ", "Bad\u00A0")}`}
            />
          </ul>
          <div className="mt-auto hidden pt-10 lg:block">
            <div className="relative h-40 overflow-hidden rounded-2xl">
              <Image
                src={imgPlatten}
                alt=""
                fill
                sizes="30vw"
                placeholder="blur"
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>
        {/* Stays in place after sending, so "Angebot anfragen" links
            always have a target. */}
        <div
          id="anfrage"
          tabIndex={-1}
          className="scroll-mt-24 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Contact handleSendEmail={SendContactRequest} />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <li className="border-b border-white/10 pb-5">
      <p className="text-xs uppercase tracking-widest text-cream/50">{label}</p>
      {href ? (
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="mt-1 block font-display text-xl text-cream transition hover:text-gold-light"
        >
          {value}
          {external && <span className="sr-only"> (öffnet in neuem Tab)</span>}
        </a>
      ) : (
        <p className="mt-1 font-display text-xl text-cream">{value}</p>
      )}
    </li>
  );
}
