import Carousel from "@/components/Carousel";
import { cn } from "@/libs/utils";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Image from "next/image";
import { text } from "stream/consumers";
import { SendContactRequest } from "./actions";
import Contact, { ContactRequest, ContactResponse } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#f0ebdf]">
      <Carousel />
      <Intro />
      <AboutUs />
      <Menu />
      <Services />
      <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_CLIENT_KEY}>
        <Contact handleSendEmail={SendContactRequest} />
      </ReCaptchaProvider>
    </main>
  );
}

function HeaderThing({
  title,
  subtitle,
  className,
  type = "default",
  textAlignment = "center",
}: {
  title: string;
  subtitle: string;
  className?: string;
  type?: "default" | "small";
  textAlignment?: "center" | "left" | "right";
}) {
  return (
    <div className={cn("flex justify-center items-center py-5 ", className)}>
      <div
        className={cn("h-[120px] relative flex flex-col font-serif", {
          "text-center": textAlignment == "center",
          "text-left": textAlignment == "left",
          "text-right": textAlignment == "right",
        })}
      >
        <Image
          src={"/title_bg_green.webp"}
          alt="hero"
          width={280}
          height={180}
          className={cn(" mx-auto", {
            "w-64 opacity-60": type == "small",
            "-mb-20": type == "default",
            "-mb-24": type == "small",
            "-ml-24": textAlignment == "left",
            "-mr-24": textAlignment == "right",
          })}
        />
        <h2
          className={cn({
            "text-xl": type == "default",
            "font-bold": type == "small",
            "text-center mx-auto": textAlignment == "center",
            "text-left": textAlignment == "left",
            "text-right": textAlignment == "right",
          })}
        >
          {title}
        </h2>
        <p
          className={cn({
            "font-semibold text-2xl": type == "default",
            "w-72": type == "small",
            "text-center mx-auto": textAlignment == "center",
            "text-left": textAlignment == "left",
            "text-right": textAlignment == "right",
          })}
        >
          {subtitle}
        </p>
        {type == "default" ? (
          <div className="w-64 h-0.5 bg-yellow-500 mx-auto self-end absolute bottom-0 left-0 right-0"></div>
        ) : null}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section>
      <HeaderThing
        title="Lasies Catering Service"
        subtitle="In Bad Liebenzell-Möttlingen"
      />
      <div className="flex justify-center gap-4 pb-16 flex-wrap">
        <Card title="Catering" imageUrl="/images/welcome_img1.jpg" />
        <Card title="Partyservice" imageUrl="/images/welcome_img2.jpg" />
        <Card title="Marktenderei" imageUrl="/images/welcome_img3.jpg" />
      </div>
    </section>
  );
}

function Card({ title, imageUrl }: { title: string; imageUrl: string }) {
  return (
    <div className="bg-[#f0ebdf] relative w-[185px] h-[236.5px] md:w-[370px] md:h-[473px] justify-center items-center flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-50 ">
      <Image
        src={imageUrl}
        alt={title}
        width={370}
        height={473}
        className="absolute top-0 left-0 z-10"
      />
      <div className="w-full h-full bg-black/20 group hover:bg-transparent transition-all z-20 justify-center  items-center flex backdrop-blur-sm hover:backdrop-blur-none shimmer-on-hover">
        <h3 className=" md:text-3xl text-white group-hover:text-transparent transition-all ease-linear ">
          {title}
        </h3>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <section
      style={{
        background: "#f3f1ec url(/images/bg1.jpg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top ",
      }}
    >
      <HeaderThing
        title="Über uns"
        subtitle="Unsere Erfolgsgeschichte"
        className="text-white"
      />
      <div className="grid lg:grid-cols-2 bg-white shadow-xl w-4/5 mx-auto">
        <Image
          src="/images/IMG-20230707-WA0006.jpg"
          alt="hero"
          width={500}
          height={500}
          className=" h-[500px] w-full object-cover shadow-inner "
        />

        <div className="p-4 flex flex-col justify-center">
          <div className=" font-inter text-lg text-[#808369] space-y-2">
            <p>
              Schöne Feste sind die Höhepunkte unseres Lebens. Damit sie
              gelingen, ist eine gut durchdachte Planung unverzichtbar.
            </p>
            <p>
              Wir helfen Ihnen dabei! Lasies ist Ihr Partyservice mit dem Plus
              an Leistungen.
            </p>
            <p>
              Neben ausnahmslos köstlichen Catering-Menüs aus frischen Zutaten
              bieten wir eine professionelle Rundum-Betreuung für Ihr Fest!
            </p>
            <p>
              Von unserem Standort in Bad Liebenzell sind wir im gesamten
              Großraum Stuttgart, Leonberg und Calw für Sie da.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const buffets = [
    {
      name: "Fingerfood Buffet",
      description:
        "Eine köstliche Auswahl an mundgerechten Snacks und Vorspeisen, perfekt zum Plaudern und Geselligsein.",
    },
    {
      name: "Suppen Buffet",
      description:
        "Eine Vielzahl herzhafter und leckerer Suppen, begleitet von frischem Brot und Toppings.",
    },
    {
      name: "Schlemmerplatten",
      description:
        "Genussvolle Platten mit einer Auswahl an erstklassigen Aufschnittsorten, Käsesorten und Beilagen.",
    },
    {
      name: "Grill Buffet",
      description:
        "Ein Festmahl mit gegrilltem Fleisch, Gemüse und Beilagen, ideal für ein Barbecue oder eine Outdoor-Veranstaltung.",
    },
    {
      name: "Deftiges Buffet",
      description:
        "Herzhafte und sättigende Gerichte, darunter traditionelle Hausmannskost und kräftige Aromen.",
    },
    {
      name: "Salatjungfer Buffet",
      description:
        "Eine frische und lebhafte Auswahl an Salaten mit einer Vielzahl von Dressings und Toppings zur Auswahl.",
    },
    {
      name: "Mediterranes Buffet",
      description:
        "Aromen des Mittelmeers mit einer Auswahl an Gerichten mit Oliven, Feta, Tomaten und mehr.",
    },
    {
      name: "Zum Kombinieren (mit Buffets oder einfach)",
      description:
        "Vielseitige Optionen zur Ergänzung anderer Buffets oder einzeln, die eine ausgewogene Vielfalt bieten.",
    },
    {
      name: "„Die Glücklichen Ehepaar“ Buffet",
      description:
        "Ein spezielles Buffet zur Feier der Liebe, mit eleganten und romantischen Gerichten, perfekt für Hochzeiten.",
    },
    {
      name: "Gourmetreise Buffet",
      description:
        "Eine kulinarische Reise mit Gourmetgerichten aus aller Welt, die exquisite Aromen und Zutaten präsentieren.",
    },
    {
      name: "Französisches Buffet",
      description:
        "Klassische französische Küche mit einer Auswahl an raffinierten und köstlichen Gerichten, von Quiche bis Patisserie.",
    },
    {
      name: "Getränke",
      description:
        "Ein umfassendes Getränkeangebot, das eine Vielzahl von Getränken für alle Geschmäcker und Anlässe bietet.",
    },
  ];
  return (
    <section className=" bg-gradient-to-b from-[#f3f1ec] to-[#f0ebdf]">
      <HeaderThing title="Catering" subtitle="Menü" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 mx-auto pb-8">
        {buffets.map((menu) => (
          <div className="bg-white shadow-lg p-4" key={menu.name}>
            <h4 className="text-lg font-bold">{menu.name}</h4>
            <p className="text-[#808369] mt-auto">{menu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// HOCHZEITEN
// An einem der wichtigsten Tage Ihres Lebens bieten wir ein umfassendes Catering-Programm an.

// PICKNICKS
// Wir freuen uns, für Sie bei einem Familien- oder Firmenpicknick zu arbeiten.

// UNTERNEHMEN
// Sie können einen Vollzeit- oder Teilzeitservice für Personal- oder Mitarbeiteressen bestellen.

// FESTIVALS
// Wir sind in der Lage, große, offene, kleine, Erwachsene- oder Kinderfestivals zu bedienen.

// GESELLSCHAFTLICHE VERANSTALTUNGEN
// Gesellschaftliche Veranstaltungen sind für unsere Kunden sehr wichtig, und wir garantieren perfekten Service.

// PRIVATE PARTYS
// Ein privater Speiseraum oder ein Penthouse-Catering gehört zu unseren vielen großartigen Dienstleistungen.

function Services() {
  return (
    <section className="bg-[#f3f1ec] overflow-x-clip">
      <HeaderThing
        title="DIENSTLEISTUNGEN"
        subtitle="Planen Sie ein fabelhaftes Event?"
      />
      <div className="grid lg:grid-cols-3 px-8">
        <div className="flex flex-col gap-4 sm:-mr-40">
          <HeaderThing
            type="small"
            title="HOCHZEITEN"
            subtitle="An einem der wichtigsten Tage Ihres Lebens bieten wir ein umfassendes Catering-Programm an."
            textAlignment="right"
          />
          <HeaderThing
            type="small"
            title="PICKNICKS"
            subtitle="Wir freuen uns, für Sie bei einem Familien- oder Firmenpicknick zu arbeiten."
            textAlignment="right"
          />
          <HeaderThing
            type="small"
            title="UNTERNEHMEN"
            subtitle="Sie können einen Vollzeit- oder Teilzeitservice für Personal- oder Mitarbeiteressen bestellen."
            textAlignment="right"
          />
        </div>
        <div className="flex flex-col h-full justify-center items-center">
          <Image
            src="/images/1719172912415.jpg"
            alt="hero"
            width={380}
            height={380}
            className="h-[250px] w-[250px] lg:h-[380px] lg:w-[380px] rounded-full object-cover shadow-inner "
          />
        </div>
        <div className="flex flex-col gap-4 sm:-ml-40">
          <HeaderThing
            type="small"
            title="FESTIVALS"
            subtitle="Wir sind in der Lage, große, offene, kleine, Erwachsene- oder Kinderfestivals zu bedienen."
            textAlignment="left"
          />
          <HeaderThing
            type="small"
            title="GESELLSCHAFTLICHE"
            subtitle="Gesellschaftliche Veranstaltungen sind für unsere Kunden sehr wichtig, und wir garantieren perfekten Service."
            textAlignment="left"
          />
          <HeaderThing
            type="small"
            title="PRIVATE PARTYS"
            subtitle="Ein privater Speiseraum oder ein Penthouse-Catering gehört zu unseren vielen großartigen Dienstleistungen."
            textAlignment="left"
          />
        </div>
      </div>
    </section>
  );
}
