import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f0ebdf]">
      <Carousel />
      <Intro />
      <AboutUs />
      <Menu />
    </main>
  );
}

function HeaderThing({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={"flex justify-center items-center py-5 " + className}>
      <div className="h-[120px] relative flex items-start justify-center flex-col text-center font-serif">
        <Image
          src={"/title_bg_green.webp"}
          alt="hero"
          width={280}
          height={180}
          className="-mb-20 mx-auto"
        />
        <h2 className="mx-auto text-xl text-center">{title}</h2>
        <p className="font-semibold text-2xl text-center mx-auto">{subtitle}</p>
        <div className="w-64 h-0.5 bg-yellow-500 mx-auto self-end absolute bottom-0 left-0 right-0"></div>
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
    <div className="bg-[#f0ebdf] relative w-[370px] h-[473px] justify-center items-center flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-50 ">
      <Image
        src={imageUrl}
        alt={title}
        width={370}
        height={473}
        className="absolute top-0 left-0 z-10"
      />
      <div className="w-full h-full bg-black/20 group hover:bg-transparent transition-all z-20 justify-center  items-center flex backdrop-blur-sm hover:backdrop-blur-none shimmer-on-hover">
        <h3 className=" text-3xl text-white group-hover:text-transparent transition-all ease-linear ">
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
