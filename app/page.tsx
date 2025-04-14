import Carousel from "@/components/Carousel";
import Image, { StaticImageData } from "next/image";
import { SendContactRequest } from "./actions";
import Contact from "@/components/Contact";
import HeaderThing from "@/components/HeaderThing";
import pizza from "@/app/images/pizzaman.jpeg";
export default function Home() {
  return (
    <main>
      <Carousel />
      <PizzaSection />
      <Intro />
      <Menu />
      <Services />
      <Contact handleSendEmail={SendContactRequest} />
    </main>
  );
}

function Intro() {
  return (
    <>
      <section className="bg-[#f8f5ec] pb-8 pt-4">
        <HeaderThing
          title="Front-Cooking und individuelle Buffets"
          subtitle="für unvergessliche Feste"
        />
        <div className="flex flex-col md:flex-row px-4 items-center gap-10 relative justify-center gap-x-10">
          <div className="prose ">
            <h2>
              Den Tag der Veranstaltung können Sie in aller Ruhe auf sich
              zukommen lassen.
            </h2>
            <p>
              Wir verwöhnen Sie und alle Partygäste mit geschmackvollen Speisen
              und Getränken.
            </p>
            <p>
              Für den besonderen Erlebnisfaktor sorgen wir auf Wunsch mit dem
              Front-Cooking.
            </p>
            <p>
              Schauen Sie unserem Koch über die Schulter! Er bereitet die
              Speisen direkt vor Ort für Sie zu – frischer geht es kaum!
            </p>
            <p>
              Unserem Partyservice ist es wichtig, dass alles möglichst frisch
              auf den Tisch kommt. Besonderen Wert legen wir auf die Qualität
              und Verarbeitung frischer Zutaten regionaler Herkunft.
            </p>
          </div>
          <Image
            src="/images/1719172912415.jpg"
            alt="hero"
            width={380}
            height={380}
            className="hidden lg:block aspect-square h-[250px] w-[250px] lg:h-[380px] lg:w-[380px] rounded-full object-cover shadow-inner "
          />
        </div>
      </section>
    </>
  );
}

function PizzaSection() {
  return (
    <section className="bg-[#f8f5ec] pb-8 pt-4">
      <HeaderThing
        title="Steinofen-Pizza"
        subtitle="Frisch. Heiß. Direkt vor Ort."
        isNew={true}
      />
      <div className="flex flex-col md:flex-row px-4 items-center gap-10 relative justify-center gap-x-10">
        <Image
          src={pizza}
          alt="Pizza Chef with fresh pizza"
          width={380}
          height={380}
          className="hidden lg:block aspect-square h-[250px] w-[250px] lg:h-[380px] lg:w-[380px] rounded-full object-cover shadow-inner"
        />
        <div className="prose">
          <h2>Mach dein Event zum echten Pizza-Highlight!</h2>
          <p>Du planst ein Fest, eine Firmenfeier oder ein Event?</p>
          <p>
            Wir bringen den <strong>Steinofen direkt zu dir</strong> und zaubern
            vor den Augen deiner Gäste knusprige, duftende Pizzen – wie aus
            Italien!
          </p>
          <h3>Unser Party-Angebot für dich:</h3>
          <ul className="space-y-2">
            <li>✅ Klassisch: Margherita, Salami, Prosciutto</li>
            <li>✅ Vegetarisch: Grillgemüse, Pilze, Rucola</li>
            <li>
              ✅ Spezial: BBQ Chicken, Thunfisch, Schafskäse & vieles mehr!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Card({ title, img }: { title: string; img: StaticImageData }) {
  return (
    <div className="bg-[#f0ebdf] relative w-[185px] h-[236.5px] md:w-[370px] md:h-[473px] justify-center items-center flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-50 ">
      <Image
        src={img}
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
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top ",
        backgroundSize: "contain",
      }}
      className=""
    >
      <HeaderThing
        title="Über uns"
        subtitle="Unsere Erfolgsgeschichte"
        className="text-white"
      />
      <div className="grid lg:grid-cols-2 bg-white shadow-xl w-full md:w-fit mx-auto -mt-1">
        <Image
          src="/images/1719173020512.jpg"
          alt="hero"
          width={500}
          height={500}
          className=" object-cover hidden md:block shadow-inner h-full w-full lg:max-w-none lg:aspect-square "
        />

        <div className="p-4 flex flex-col justify-center max-w-96">
          <div className=" font-inter text-lg text-[#4d4f3f] space-y-2 md:max-w-80">
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
            <h3 className="text-lg font-bold">{menu.name}</h3>
            <p className="text-[#4d4f3f] mt-auto">{menu.description}</p>
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
    <>
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
              title="KONFIRMATIONEN/KOMMUNIONEN"
              subtitle="Wir bieten ein umfassendes Catering-Programm für Konfirmationen und Kommunionen an."
              textAlignment="right"
            />
            <HeaderThing
              type="small"
              title="UNTERNEHMEN"
              subtitle="Ob Richtfest oder Tag der offenen Tür, wir verwöhnen Sie mit kulinarischen Gerichten oder Fingerfood."
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
              title="GEBURTSTAGSFEIERN"
              subtitle="Wir bieten ein umfassendes Catering-Programm für Geburtstagsfeiern an."
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

      <section className="py-8 backdrop-blur">
        <div className="grid  gap-4 w-4/5 mx-auto">
          <div className="mx-auto flex flex-col text-white prose text-center prose-invert">
            <h2>Rundum-Betreuung für Veranstaltungen, Partys und Events</h2>
            <p>
              &quot;Feiern wo und wann Sie möchten&quot; – diesen Satz hat sich
              unser Partyservice zum Motto gemacht. Wir organisieren für Sie:
            </p>
            <div className="flex flex-col sm:flex-row justify-between">
              <ul className="list-disc text-left text-sm space-y-1 text-white">
                <li>Messeservices </li>
                <li>Tage der offenen Tür </li>
                <li>Vernissagen </li>
                <li>Stehempfänge </li>
                <li>Betriebsfeste / Firmenevents </li>
                <li>Einweihungen </li>
                <li>Präsentationen aller Art </li>
                <li>Caterings für Großveranstaltungen </li>
              </ul>
              <ul className="list-disc text-left text-sm space-y-1 text-white">
                <li>Familien- und Vereinsfeste </li>
                <li>Hochzeiten </li>
                <li>Geburtstagsfeiern </li>
                <li>Jubiläen </li>
                <li>Konfirmationen/ Kommunionen </li>
                <li>Taufen </li>
                <li>Richtfeste </li>
                <li>Abschlussfeiern </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//   Was unser Partyservice noch für Sie tun kann? Wir unterstützen Sie bei der Suche nach einer
// passenden Location. Benötigtes Geschirr, Gläser und Besteck können Sie bei uns auf
// Wunsch zum Catering dazu mieten. Zudem stellen wir gerne Servicepersonal zur Verfügung,
// das die Bewirtung auf der Feier übernimmt. Bei der Zusammenstellung eines
// Rahmenprogramms und passenden Dekorationen sind wir gerne behilflich.
// Mehr Wichtiges und Wissenswertes erfahren Sie auf unserer Webseite oder persönlich bei
// unserem Team. Unsere Impressionen sollen Ihnen derweil einen ersten Vorgeschmack geben
// – denn das Auge isst schließlich mit!
// Ihr persönliches Partyservice-Angebot – fragen Sie uns
// Gerne erstellen wir ein unverbindliches Angebot. Vereinbaren Sie mit uns einen
// Gesprächstermin für Ihr Catering rund um Bad Liebenzell, Stuttgart, Leonberg und Calw. Sie
// erreichen unseren Partyservice telefonisch unter ✆ 01573 8949296. Alternativ können Sie uns
// via ✉ Kontaktformular Ihre Anfrage zukommen lassen. Wir freuen uns auf Sie!
// Lesen Sie unsere Geschäftsbedingungen
// Uber uns

// Catering nach Wunsch und Front-Cooking für den besonderen Zauber
// Keine Feier ohne den passenden kulinarischen Rahmen! Unser
// Partyservice liefert frische, hausgemachte Speisen und Getränke. Die
// individuellen Buffets wissen zu begeistern! Für ein ganz besonderes
// Highlight auf jeder Veranstaltung sorgen wir mit unserem Front-Cooking –
// unser Koch bereitet die Speisen direkt vor Ort zu und die Gäste dürfen
// zuschauen.
// Ausnahmslose Qualität für Ihr Catering
// Miteinander feiern gehört zu den schönsten Dingen in unserem Leben.
// Liebevoll und individuell abgestimmtes Essen ist dabei ein wichtiger
// Bestandteil. Ob Front-Cooking oder Fingerfood, ob rustikales Stallknecht-
// Buffet oder edles Buffet nach Karl dem Großen – beste Qualität ist
// unserem Partyservice sehr wichtig. Deshalb verwenden wir nur frische
// Zutaten für unsere Caterings. Wir setzen auf Obst, Gemüse und Kräuter
// aus eigenem Anbau oder vom Wochenmarkt.

// Wichtiges & WissenswertesUNSERE
// GESCHÄFTSBEDINGUNGEN
// Bitte beachten Sie, dass aufgrund der momentanen allgemeinen Preisentwicklung, keine
// Preise im Prospekt aufgeführt sind. Wir erstellen Ihnen ein individuelles Angebot. Wir
// bitten für Ihr Verständnis, vielen Dank.
// Zur Freude der Gastgeberin versorgen wir Sie, bei Bedarf, mit Gläsern, Geschirr, Besteck und
// vielem mehr.
// Mietgebühr: (Standardausführung)
// Suppen- , Speise- , Dessertteller

// Suppentassen obere und untere

// Kaffeetasse, obere und untere

// Speisemesser, -gabel, -löffel, Dessertlöffel

// Gläser aller Art

// Stehtisch schwarz rund 80 cm

// Stehtisch inkl. weißer Husse

// Reinigungsgebühr pro Geschirr- und Besteckteil

// Gemietete Artikel, Racks und Boxen sind Eigentum der Firma Die Marketenderei Huter &
// Lechner GbR.
// Der Mietpreis eines Artikels wird auf Grund der aktuellsten Preisliste zuzüglich
// Reinigungsgebühr, inklusive der gesetzlichen Mehrwertsteuer festgelegt. Eine Mieteinheit
// beträgt 3 Tage, auch wenn die gemieteten Artikel vorzeitig und/oder unbenutzt zurückgegeben
// werden.
// Bei Abholung muss der Mieter selbst für einen vorschriftsmäßigen Transport Sorge tragen
// Die Mietartikel müssen in einem geschlossenen Fahrzeug transportiert werden.
// Bei Rücknahme müssen die Mietartikel transportfähig wieder in die Boxen geräumt sein.
// Der Mietpreis beinhaltet nicht den Auf- und Abbau sowie das Vertragen und Einsammeln der
// gemieteten Gegenstände.
// Diese Leistung übernehmen wir gerne gegen gesonderte Berechnung (Stundensatz pro Person
// 35,00 Euro).
// Für beschädigte oder nicht zurückgegebene Ausstattungsgegenstände berechnen wir den
// Wiederbeschaffungswert.
// Dekoration
// Bei der Auswahl der Dekoration und Blumen sind wir gerne behilflich.
// Personal
// ∙Servicepersonal pro Person / Stunde 35,00 Euro
// ∙Küchenpersonal pro Person / Stunde 40,00 Euro

// Rahmenprogramm
// Bei der Vermittlung von Rahmenprogrammen (z. B. Musiker ...) sind wir gerne behilflich.
// Auftragserteilung / Anzahlung
// Bei Auftragserteilung werden 50 % der zu erwartenden Auftragssumme fällig.

// Auftragsänderung/ Stornierung
// Auftragsänderungen sind bis spätestens 7 Werktage vor Lieferung möglich. Bei
// Auftragsstornierung innerhalb von 14 Tagen vor Veranstaltungsbeginn stellen wir 50 % der zu
// erwartenden Auftragssumme in Rechnung.
// Die gelieferte Ware bleibt bis zur vollständigen Bezahlung unser Eigentum. Ein Recht auf
// Weiterveräußerung besteht nicht.

// Lieferkosten
// Bei einer Order ab 200,00 Euro berechnen wir innerhalb der Stadtgrenzen von Leonberg und
// Fellbach keine Anfahrtskosten. Außerhalb dieser Zonen schlägt der Kilometer mit 0,60 Euro
// zu Buche.
// Bei einer Rückholung unserer Ausstattung an Sonn- und Feiertagen berechnen wir einen
// Aufschlag von 40,00 Euro.
// Alle genannten Preise verstehen sich, wenn nicht anders benannt, einschließlich der
// gesetzlichen Mehrwertsteuer.
// Alle bisher erschienenen Preislisten verlieren mit Erscheinen dieser Preisliste ihre Gültigkeit.
