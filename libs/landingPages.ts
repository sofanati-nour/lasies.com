// Landing pages for towns and occasions (/catering-calw, /hochzeitscatering …).
// One entry per page; app/[landing]/page.tsx renders them with
// components/site/LandingPage.tsx. Every fact here (prices, minimum orders,
// terms) restates what is published on /menu and
// /wichtiges-und-wissenswertes – keep them in sync when those change.
// Distances are road kilometres from Barthstraße 4, Möttlingen.

export type LandingImage =
  | "buffetFestlich"
  | "zucchiniBuffet"
  | "grillgemuese"
  | "frontCooking"
  | "bauernsalat"
  | "platten"
  | "hochzeitstafel"
  | "miniBurger"
  | "fingerfood"
  | "pizza";

export type LandingPage = {
  slug: string;
  kind: "town" | "occasion";
  /** Short label for links, breadcrumbs and the footer. */
  nav: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  /** Second, italic part of the H1. */
  h1Accent: string;
  intro: string;
  hero: LandingImage;
  /** Photo next to the first text section, with a real description. */
  photo: LandingImage;
  /** schema.org Service: what is offered and where. */
  serviceType: string;
  areaServed: string[];
  /** Starts the enquiry message so we know which page it came from. */
  prefill: string;
  facts: { label: string; value: string }[];
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  /** Names from libs/menuData.ts, linked to /menu#… */
  buffets: string[];
  /** Authors from libs/reviews.ts. */
  reviewAuthors: string[];
  faq: { question: string; answer: string }[];
  /** Slugs of other landing pages. */
  related: string[];
  /** Extra block: the fingerfood price list or the pizza varieties. */
  extra?: "fingerfoodPrices" | "pizzaKinds";
};

const travel = "Für die Anfahrt berechnen wir 0,60\u00A0€ pro Kilometer.";

export const landingPages: LandingPage[] = [
  {
    slug: "catering-calw",
    kind: "town",
    nav: "Catering Calw",
    title: "Catering & Partyservice Calw | Lasies Catering",
    description:
      "Catering und Partyservice für Calw: Buffets ab 20 Personen, Fingerfood, Front-Cooking und Steinofen-Pizza – aus Bad Liebenzell, rund 10 km entfernt.",
    eyebrow: "Catering Calw",
    h1: "Catering & Partyservice",
    h1Accent: "in Calw",
    intro:
      "Buffets, Fingerfood, Front-Cooking und Steinofen-Pizza für Ihre Feier in Calw – frisch zubereitet in unserer Küche im benachbarten Bad Liebenzell-Möttlingen.",
    hero: "buffetFestlich",
    photo: "platten",
    serviceType: "Catering und Partyservice",
    areaServed: ["Calw", "Hirsau", "Stammheim", "Althengstett", "Gechingen"],
    prefill: "Ich interessiere mich für ein Catering in Calw. ",
    facts: [
      { label: "Entfernung", value: "rund 10 km" },
      { label: "Buffets", value: "ab 20 Personen" },
      { label: "Fingerfood", value: "ab 50 Teilen" },
      { label: "Anfahrt", value: "0,60\u00A0€ pro km" },
    ],
    sections: [
      {
        title: "Ihr Partyservice für Calw und alle Teilorte",
        paragraphs: [
          "Von unserer Küche in Möttlingen sind es rund 10 Kilometer bis in die Calwer Innenstadt. Wir beliefern die Kernstadt ebenso wie Hirsau, Stammheim, Altburg, Heumaden, Wimberg, Alzenberg und Holzbronn – und die Nachbargemeinden Althengstett, Gechingen, Oberreichenbach und Bad Teinach-Zavelstein.",
          `${travel} Den genauen Betrag für Ihren Veranstaltungsort nennen wir Ihnen im Angebot.`,
        ],
      },
      {
        title: "Vom Familienfest bis zum Vereinsjubiläum",
        paragraphs: [
          "Wir begleiten Geburtstage, Konfirmationen, Kommunionen, Taufen, Vereinsfeste und Firmenfeiern – in Calw im Vereinsheim, in der Gemeindehalle, im Garten oder im Betrieb. Für die Hochzeit gibt es unser [Hochzeitscatering](/hochzeitscatering).",
          "Unsere Buffets gibt es ab 20 Personen, Schlemmerplatten und Gerichte zum Kombinieren schon ab 10 Portionen. Für Empfänge stellen Sie sich Ihr [Fingerfood](/fingerfood-catering) ab 50 Teilen selbst zusammen; die Preise stehen offen in unserem Menü.",
        ],
        bullets: [
          "Deftiges, Grill-, Vegetarisches, Mediterranes und Orientalisches Buffet",
          "Front-Cooking am Grill und Steinofen-Pizza direkt bei Ihrer Feier",
          "Geschirr, Gläser, Besteck und Stehtische zum Mieten",
          "Service- und Küchenpersonal auf Wunsch",
        ],
      },
      {
        title: "So bestellen Sie Ihr Catering in Calw",
        paragraphs: [
          "Schicken Sie uns Datum, Ort und Gästezahl Ihrer Feier – per Formular, Telefon, WhatsApp oder E-Mail. Wir stellen Ihr Menü zusammen und senden Ihnen ein persönliches Angebot. Änderungen sind bis 7 Werktage vor der Lieferung möglich.",
        ],
      },
    ],
    buffets: ["Deftiges Buffet", "Grill-Buffet", "Vegetarisches Buffet", "Schlemmerplatten", "Fingerfood"],
    reviewAuthors: ["Biggi", "Sascha", "Leni B."],
    faq: [
      {
        question: "Liefern Sie auch in die Calwer Teilorte?",
        answer:
          "Ja. Wir liefern in die Kernstadt und nach Hirsau, Stammheim, Altburg, Heumaden, Wimberg, Alzenberg und Holzbronn sowie in die Nachbargemeinden wie Althengstett, Gechingen und Bad Teinach-Zavelstein.",
      },
      {
        question: "Was kostet die Anfahrt nach Calw?",
        answer:
          "Wir berechnen 0,60\u00A0€ pro Kilometer. Von unserer Küche in Bad Liebenzell-Möttlingen bis in die Calwer Innenstadt sind es rund 10 Kilometer. Den genauen Betrag für Ihren Veranstaltungsort nennen wir Ihnen im Angebot.",
      },
      {
        question: "Ab wie vielen Personen liefern Sie nach Calw?",
        answer:
          "Buffets gibt es ab 20 Personen, das Gourmetreise-Buffet ab 30 Personen. Schlemmerplatten und Gerichte zum Kombinieren bestellen Sie ab 10 Portionen, Fingerfood ab 50 Teilen mit mindestens 10 Teilen pro Sorte.",
      },
      {
        question: "Können Sie in Calw auch Personal und Geschirr stellen?",
        answer:
          "Ja. Servicepersonal kostet 35,00\u00A0€ und Küchenpersonal 40,00\u00A0€ pro Person und Stunde. Ein Gedeck aus Speiseteller, Beilagenteller, Glas, Gabel und Messer mieten Sie für 3,25\u00A0€ inklusive Reinigung, einen Stehtisch für 15,00\u00A0€.",
      },
    ],
    related: ["catering-weil-der-stadt", "catering-nagold", "hochzeitscatering", "fingerfood-catering"],
  },
  {
    slug: "catering-leonberg",
    kind: "town",
    nav: "Catering Leonberg",
    title: "Catering & Partyservice Leonberg | Lasies Catering",
    description:
      "Catering & Partyservice in Leonberg für Firmenfeiern, Hochzeiten und private Feste: Fingerfood mit offenen Preisen, Buffets ab 20 Personen, Steinofen-Pizza.",
    eyebrow: "Catering Leonberg",
    h1: "Catering & Partyservice",
    h1Accent: "in Leonberg",
    intro:
      "Fingerfood für den Firmenempfang, ein Buffet für die Familienfeier oder Steinofen-Pizza fürs Sommerfest: Wir liefern von Bad Liebenzell-Möttlingen nach Leonberg und in den Altkreis.",
    hero: "zucchiniBuffet",
    photo: "miniBurger",
    serviceType: "Catering und Partyservice",
    areaServed: ["Leonberg", "Eltingen", "Höfingen", "Rutesheim", "Renningen"],
    prefill: "Ich interessiere mich für ein Catering in Leonberg. ",
    facts: [
      { label: "Entfernung", value: "rund 22 km" },
      { label: "Fingerfood", value: "ab 50 Teilen" },
      { label: "Buffets", value: "ab 20 Personen" },
      { label: "Anfahrt", value: "0,60\u00A0€ pro km" },
    ],
    sections: [
      {
        title: "Catering für Leonberg, Eltingen, Höfingen und Umgebung",
        paragraphs: [
          "Leonberg liegt rund 22 Kilometer von unserer Küche in Möttlingen entfernt. Wir beliefern die Leonberger Kernstadt, Eltingen, Höfingen, Gebersheim, Warmbronn, das Ramtel und den Silberberg, außerdem Rutesheim, Renningen, Ditzingen, Gerlingen und Weissach.",
          `${travel} Den genauen Betrag für Ihren Veranstaltungsort nennen wir Ihnen im Angebot.`,
        ],
      },
      {
        title: "Fingerfood und Buffets für Firmen in Leonberg",
        paragraphs: [
          "Für Firmen in Leonberg und im Altkreis liefern wir zu Empfängen, Jubiläen, Tagen der offenen Tür, Richtfesten und Weihnachtsfeiern. Dafür eignet sich unser [Fingerfood](/fingerfood-catering) besonders gut – mundgerecht, kalt und warm, ab 50 Teilen und mit Preisen, die Sie direkt nachlesen können. Mehr dazu unter [Firmencatering](/firmencatering).",
          "Firmen und Vereine, die regelmäßig feiern, erhalten auf Anfrage Partnerkonditionen mit festem Ansprechpartner und, wenn gewünscht, ein Rahmenangebot mit festen Preisen für eine vereinbarte Laufzeit.",
        ],
      },
      {
        title: "Private Feiern: Hochzeit, Geburtstag, Gartenparty",
        paragraphs: [
          "Für private Feste in Leonberg stellen wir Ihr Buffet nach Ihren Wünschen zusammen – vom Deftigen Buffet über das Mediterrane und Orientalische Buffet bis zum Hochzeitsbuffet „Das glückliche Ehepaar“ (siehe [Hochzeitscatering](/hochzeitscatering)). Auf Wunsch kochen wir direkt vor Ihren Gästen: am Grill oder mit [Steinofen-Pizza](/steinofen-pizza-catering).",
        ],
        bullets: [
          "Buffets ab 20 Personen, Gourmetreise-Buffet ab 30 Personen",
          "Vegetarisches Buffet und vegetarische Steinofen-Pizza",
          "Mietgeschirr inklusive Reinigung, Stehtische, Servicepersonal",
        ],
      },
    ],
    buffets: ["Fingerfood", "Mediterranes Buffet", "Orientalisches Buffet", "Grill-Buffet", "Hochzeitsbuffet „Das glückliche Ehepaar“"],
    reviewAuthors: ["Leni B.", "Jens B.", "Sascha"],
    faq: [
      {
        question: "Liefern Sie Catering nach Leonberg?",
        answer:
          "Ja. Wir liefern nach Leonberg mit Eltingen, Höfingen, Gebersheim und Warmbronn sowie nach Rutesheim, Renningen, Ditzingen, Gerlingen und Weissach. Unsere Küche in Bad Liebenzell-Möttlingen liegt rund 22 Kilometer entfernt.",
      },
      {
        question: "Was kostet Fingerfood-Catering in Leonberg?",
        answer:
          "Die Preise für unser Fingerfood stehen im Menü; bestellen können Sie ab 50 Teilen mit mindestens 10 Teilen pro Sorte. Dazu kommt die Anfahrt mit 0,60\u00A0€ pro Kilometer. Alle Preise enthalten die Mehrwertsteuer.",
      },
      {
        question: "Bieten Sie Firmencatering in Leonberg an?",
        answer:
          "Ja. Wir beliefern Firmenfeiern, Empfänge, Richtfeste, Messen und Tage der offenen Tür mit Fingerfood oder Buffet. Für Unternehmen mit regelmäßigen Veranstaltungen gibt es auf Anfrage Partnerkonditionen mit festem Ansprechpartner.",
      },
      {
        question: "Wie früh sollte ich mein Catering für Leonberg anfragen?",
        answer:
          "Je früher, desto besser. Ihre Bestellung können Sie bis 7 Werktage vor der Lieferung noch ändern.",
      },
    ],
    related: ["firmencatering", "fingerfood-catering", "catering-weil-der-stadt", "catering-boeblingen-sindelfingen"],
  },
  {
    slug: "catering-weil-der-stadt",
    kind: "town",
    nav: "Catering Weil der Stadt",
    title: "Catering & Partyservice Weil der Stadt | Lasies Catering",
    description:
      "Catering & Partyservice für Weil der Stadt mit Merklingen, Münklingen, Hausen und Schafhausen: Buffets, Fingerfood, Steinofen-Pizza – aus dem Nachbarort.",
    eyebrow: "Catering Weil der Stadt",
    h1: "Catering & Partyservice",
    h1Accent: "in Weil der Stadt",
    intro:
      "Wir kochen im Nachbarort: Von unserer Küche in Möttlingen sind es nur rund 7 Kilometer nach Weil der Stadt.",
    hero: "frontCooking",
    photo: "buffetFestlich",
    serviceType: "Catering und Partyservice",
    areaServed: ["Weil der Stadt", "Merklingen", "Münklingen", "Simmozheim", "Grafenau"],
    prefill: "Ich interessiere mich für ein Catering in Weil der Stadt. ",
    facts: [
      { label: "Entfernung", value: "rund 7 km" },
      { label: "Buffets", value: "ab 20 Personen" },
      { label: "Platten & Gerichte", value: "ab 10 Portionen" },
      { label: "Anfahrt", value: "0,60\u00A0€ pro km" },
    ],
    sections: [
      {
        title: "Der Partyservice direkt nebenan",
        paragraphs: [
          "Weil der Stadt liegt direkt nebenan – rund 7 Kilometer trennen unsere Küche in Möttlingen von der Keplerstadt. Wir beliefern die Kernstadt und die Stadtteile Merklingen, Münklingen, Hausen und Schafhausen, dazu Simmozheim, Ostelsheim, Grafenau und Renningen.",
          `${travel} Den genauen Betrag für Ihren Veranstaltungsort nennen wir Ihnen im Angebot.`,
        ],
      },
      {
        title: "Auch für kleinere Runden",
        paragraphs: [
          "Nicht jedes Fest braucht ein großes Buffet. Schlemmerplatten und unsere Gerichte zum Kombinieren gibt es schon ab 10 Portionen, Suppen ab 20 Portionen. So wird auch der runde Geburtstag im kleinen Kreis oder die Taufe gut versorgt.",
          "Für größere Feiern – [Hochzeit](/hochzeitscatering), Konfirmation, Vereinsfest – wählen Sie ein Buffet ab 20 Personen oder lassen sich ein eigenes Menü zusammenstellen.",
        ],
      },
      {
        title: "Live gekocht: Grill und Steinofen",
        paragraphs: [
          "Ein besonderer Programmpunkt ist unser Front-Cooking. Wir grillen direkt vor Ihren Gästen oder bringen den mobilen Steinofen mit und backen [Steinofen-Pizza](/steinofen-pizza-catering) frisch bei Ihrer Veranstaltung – klassisch, vegetarisch oder mit BBQ Chicken, Thunfisch und Schafskäse.",
        ],
      },
    ],
    buffets: ["Schlemmerplatten", "Suppen", "Grill-Buffet", "Deftiges Buffet", "Vegetarisches Buffet"],
    reviewAuthors: ["Biggi", "Jens B.", "Melanie G."],
    faq: [
      {
        question: "Wie weit ist Lasies Catering von Weil der Stadt entfernt?",
        answer:
          "Rund 7 Kilometer. Unsere Küche liegt in Bad Liebenzell-Möttlingen, gleich neben Weil der Stadt. Für die Anfahrt berechnen wir 0,60\u00A0€ pro Kilometer.",
      },
      {
        question: "Liefern Sie auch nach Merklingen, Münklingen, Hausen und Schafhausen?",
        answer:
          "Ja, wir beliefern alle Stadtteile von Weil der Stadt und die umliegenden Gemeinden Simmozheim, Ostelsheim, Grafenau und Renningen.",
      },
      {
        question: "Kann ich auch für eine kleine Feier bestellen?",
        answer:
          "Ja. Schlemmerplatten und Gerichte zum Kombinieren gibt es ab 10 Portionen, Fingerfood ab 50 Teilen. Buffets liefern wir ab 20 Personen.",
      },
      {
        question: "Kochen Sie in Weil der Stadt auch vor Ort?",
        answer:
          "Ja. Beim Front-Cooking bereiten wir Speisen direkt vor Ihren Gästen zu, zum Beispiel am Grill. Mit unserem mobilen Steinofen backen wir Pizza frisch bei Ihrer Veranstaltung.",
      },
    ],
    related: ["catering-calw", "catering-leonberg", "catering-nagold", "steinofen-pizza-catering"],
  },
  {
    slug: "catering-pforzheim",
    kind: "town",
    nav: "Catering Pforzheim",
    title: "Catering & Partyservice Pforzheim | Lasies Catering",
    description:
      "Catering & Partyservice in Pforzheim und im Enzkreis: orientalische und mediterrane Buffets, Hochzeitsbuffet, Fingerfood und Steinofen-Pizza vor Ort.",
    eyebrow: "Catering Pforzheim",
    h1: "Catering & Partyservice",
    h1Accent: "in Pforzheim",
    intro:
      "Für Hochzeiten, Firmenfeiern und Familienfeste in Pforzheim und im Enzkreis: Buffets von schwäbisch-deftig bis orientalisch, geliefert aus Bad Liebenzell-Möttlingen.",
    hero: "grillgemuese",
    photo: "bauernsalat",
    serviceType: "Catering und Partyservice",
    areaServed: ["Pforzheim", "Brötzingen", "Büchenbronn", "Tiefenbronn", "Enzkreis"],
    prefill: "Ich interessiere mich für ein Catering in Pforzheim. ",
    facts: [
      { label: "Entfernung", value: "rund 24 km" },
      { label: "Buffets", value: "ab 20 Personen" },
      { label: "Fingerfood", value: "ab 50 Teilen" },
      { label: "Anfahrt", value: "0,60\u00A0€ pro km" },
    ],
    sections: [
      {
        title: "Catering für Pforzheim und den Enzkreis",
        paragraphs: [
          "Von unserer Küche in Möttlingen sind es rund 24 Kilometer nach Pforzheim. Wir liefern in die Innenstadt und in die Stadtteile Brötzingen, Dillweißenstein, Büchenbronn, Huchenfeld, Würm, Hohenwart und Eutingen – außerdem in den Enzkreis nach Tiefenbronn, Neuhausen, Wurmberg und Birkenfeld sowie nach Unterreichenbach.",
          `${travel} Den genauen Betrag für Ihren Veranstaltungsort nennen wir Ihnen im Angebot.`,
        ],
      },
      {
        title: "Internationale Küche für große Gesellschaften",
        paragraphs: [
          "Neben dem Deftigen Buffet und dem Grill-Buffet bieten wir ein Mediterranes Buffet mit Oliven, Hirtenkäse, frischen Salaten und Gegrilltem, ein Französisches Buffet und ein Orientalisches Buffet mit gefüllten Teigtaschen, Hummus, Tabouleh und Kunafa.",
          "Für Hochzeiten haben wir ein eigenes Hochzeitsbuffet zusammengestellt – mehr dazu unter [Hochzeitscatering](/hochzeitscatering). In ihren Google-Rezensionen berichten Kunden von Hochzeiten mit rund 100 und 120 Gästen; Sie lesen sie weiter unten.",
        ],
      },
      {
        title: "Alles aus einer Hand",
        paragraphs: [
          "Damit Sie in Pforzheim nicht mehrere Dienstleister koordinieren müssen, bringen wir auf Wunsch alles mit: Geschirr, Gläser und Besteck zur Miete, Stehtische, Servicepersonal für die Bewirtung und Küchenpersonal vor Ort. Bei Dekoration, Blumen und Musik helfen wir Ihnen mit Kontakten weiter.",
        ],
      },
    ],
    buffets: ["Orientalisches Buffet", "Mediterranes Buffet", "Französisches Buffet", "Hochzeitsbuffet „Das glückliche Ehepaar“", "Grill-Buffet"],
    reviewAuthors: ["Anas K.", "Melanie G.", "Sascha"],
    faq: [
      {
        question: "Liefern Sie Catering nach Pforzheim?",
        answer:
          "Ja. Wir liefern nach Pforzheim einschließlich Brötzingen, Dillweißenstein, Büchenbronn, Huchenfeld, Würm, Hohenwart und Eutingen sowie in den Enzkreis, zum Beispiel nach Tiefenbronn, Neuhausen und Wurmberg.",
      },
      {
        question: "Was kostet die Lieferung nach Pforzheim?",
        answer:
          "Wir berechnen 0,60\u00A0€ pro Kilometer. Von unserer Küche in Bad Liebenzell-Möttlingen bis nach Pforzheim sind es rund 24 Kilometer. Den genauen Betrag nennen wir Ihnen im Angebot.",
      },
      {
        question: "Bieten Sie orientalisches oder mediterranes Catering an?",
        answer:
          "Ja. Unser Orientalisches Buffet und unser Mediterranes Buffet gibt es jeweils ab 20 Personen. Die einzelnen Speisen finden Sie in unserem Menü; jedes Buffet passen wir gerne an Ihre Wünsche an.",
      },
      {
        question: "Übernehmen Sie auch große Hochzeiten?",
        answer:
          "Ja. Laut den Google-Rezensionen unserer Kunden haben wir Hochzeiten mit rund 100 und 120 Gästen beliefert; nach Pforzheim liefern wir zu denselben Bedingungen. Auf Wunsch stellen wir Servicepersonal (35,00\u00A0€ pro Person und Stunde), Küchenpersonal (40,00\u00A0€ pro Person und Stunde) sowie Mietgeschirr und Stehtische.",
      },
    ],
    related: ["hochzeitscatering", "firmencatering", "catering-calw", "catering-weil-der-stadt"],
  },
  {
    slug: "catering-nagold",
    kind: "town",
    nav: "Catering Nagold",
    title: "Catering & Partyservice Nagold | Lasies Catering",
    description:
      "Catering & Partyservice für Nagold, Wildberg und das Nagoldtal: Buffets ab 20 Personen, Fingerfood, Front-Cooking und Steinofen-Pizza aus dem Kreis Calw.",
    eyebrow: "Catering Nagold",
    h1: "Catering & Partyservice",
    h1Accent: "in Nagold",
    intro:
      "Ein Caterer aus dem eigenen Landkreis: Wir liefern von Bad Liebenzell nach Nagold, Wildberg und Umgebung – mit Buffet, Fingerfood oder Steinofen.",
    hero: "bauernsalat",
    photo: "frontCooking",
    serviceType: "Catering und Partyservice",
    areaServed: ["Nagold", "Wildberg", "Altensteig", "Ebhausen", "Landkreis Calw"],
    prefill: "Ich interessiere mich für ein Catering in Nagold. ",
    facts: [
      { label: "Entfernung", value: "rund 32 km" },
      { label: "Buffets", value: "ab 20 Personen" },
      { label: "Fingerfood", value: "ab 50 Teilen" },
      { label: "Anfahrt", value: "0,60\u00A0€ pro km" },
    ],
    sections: [
      {
        title: "Catering im südlichen Kreis Calw",
        paragraphs: [
          "Nagold liegt rund 32 Kilometer von unserer Küche in Möttlingen entfernt. Wir beliefern die Nagolder Kernstadt und die Stadtteile Hochdorf, Emmingen, Iselshausen, Vollmaringen, Mindersbach, Pfrondorf, Gündringen und Schietingen sowie Wildberg, Ebhausen, Rohrdorf, Haiterbach und Altensteig.",
          `${travel} Den genauen Betrag für Ihren Veranstaltungsort nennen wir Ihnen im Angebot; bei einer Rückholung unserer Ausstattung an Sonn- und Feiertagen kommt ein Aufschlag von 30,00 € dazu.`,
        ],
      },
      {
        title: "Sommerfest, Hochzeit, Firmenfeier",
        paragraphs: [
          "Für Feste im Freien empfehlen wir das Grill-Buffet oder unser Front-Cooking: Wir grillen vor Ihren Gästen oder backen [Steinofen-Pizza](/steinofen-pizza-catering) im mobilen Ofen. Für die [Hochzeit](/hochzeitscatering) oder das [Firmenjubiläum](/firmencatering) wählen Sie ein festliches Buffet, das wir nach Ihren Wünschen anpassen.",
        ],
        bullets: [
          "Grill-Buffet, Deftiges, Mediterranes und Orientalisches Buffet",
          "Hochzeitsbuffet „Das glückliche Ehepaar“",
          "Fingerfood ab 50 Teilen für Empfang und Sektbar",
          "Mietgeschirr, Stehtische und Personal auf Wunsch",
        ],
      },
      {
        title: "Planbar von der Anfrage bis zur Abholung",
        paragraphs: [
          "Sie erhalten von uns ein persönliches Angebot. Bei Auftragserteilung werden 50\u00A0% der zu erwartenden Auftragssumme fällig; Änderungen sind bis 7 Werktage vor der Lieferung möglich.",
        ],
      },
    ],
    buffets: ["Grill-Buffet", "Deftiges Buffet", "Hochzeitsbuffet „Das glückliche Ehepaar“", "Mediterranes Buffet", "Fingerfood"],
    reviewAuthors: ["Jens B.", "Biggi", "Anas K."],
    faq: [
      {
        question: "Liefern Sie bis nach Nagold?",
        answer:
          "Ja. Wir liefern nach Nagold mit allen Stadtteilen sowie nach Wildberg, Ebhausen, Rohrdorf, Haiterbach und Altensteig. Von unserer Küche in Bad Liebenzell-Möttlingen sind es rund 32 Kilometer.",
      },
      {
        question: "Was kostet die Anfahrt nach Nagold?",
        answer:
          "Wir berechnen 0,60\u00A0€ pro Kilometer. Den genauen Betrag für Ihren Veranstaltungsort nennen wir Ihnen im Angebot. Bei einer Rückholung unserer Ausstattung an Sonn- und Feiertagen kommt ein Aufschlag von 30,00\u00A0€ dazu.",
      },
      {
        question: "Welche Buffets eignen sich für ein Sommerfest in Nagold?",
        answer:
          "Für Feste im Freien bieten wir zum Beispiel das Grill-Buffet, das Mediterrane Buffet und Steinofen-Pizza vor Ort an. Buffets gibt es ab 20 Personen.",
      },
      {
        question: "Wann ist eine Anzahlung fällig?",
        answer:
          "Bei Auftragserteilung werden 50\u00A0% der zu erwartenden Auftragssumme fällig. Bei einer Stornierung innerhalb von 14 Tagen vor Veranstaltungsbeginn berechnen wir 50\u00A0% der zu erwartenden Auftragssumme.",
      },
    ],
    related: ["catering-calw", "hochzeitscatering", "steinofen-pizza-catering", "firmencatering"],
  },
  {
    slug: "catering-boeblingen-sindelfingen",
    kind: "town",
    nav: "Catering Böblingen & Sindelfingen",
    title: "Catering & Partyservice Böblingen, Sindelfingen | Lasies",
    description:
      "Catering & Partyservice für Böblingen und Sindelfingen: Fingerfood und Buffets für Firmenevents, Hochzeiten und private Feiern – mit Personal und Geschirr.",
    eyebrow: "Catering Böblingen & Sindelfingen",
    h1: "Catering & Partyservice",
    h1Accent: "in Böblingen & Sindelfingen",
    intro:
      "Vom Firmenempfang bis zur Hochzeit: Wir liefern Fingerfood und Buffets nach Böblingen, Sindelfingen und in die Nachbargemeinden – aus unserer Küche in Bad Liebenzell-Möttlingen.",
    hero: "platten",
    photo: "fingerfood",
    serviceType: "Catering und Partyservice",
    areaServed: ["Böblingen", "Sindelfingen", "Maichingen", "Magstadt", "Holzgerlingen"],
    prefill: "Ich interessiere mich für ein Catering in Böblingen/Sindelfingen. ",
    facts: [
      { label: "Sindelfingen", value: "rund 22 km" },
      { label: "Böblingen", value: "rund 25 km" },
      { label: "Fingerfood", value: "ab 50 Teilen" },
      { label: "Anfahrt", value: "0,60\u00A0€ pro km" },
    ],
    sections: [
      {
        title: "Catering für Böblingen, Sindelfingen und Umgebung",
        paragraphs: [
          "Von unserer Küche in Möttlingen sind es rund 22 Kilometer nach Sindelfingen und rund 25 Kilometer nach Böblingen. Wir beliefern beide Städte mit Dagersheim, Maichingen und Darmsheim sowie Magstadt, Grafenau, Aidlingen, Ehningen, Holzgerlingen und Schönaich.",
          `${travel} Den genauen Betrag für Ihren Veranstaltungsort nennen wir Ihnen im Angebot.`,
        ],
      },
      {
        title: "Business-Catering für den Wirtschaftsraum",
        paragraphs: [
          "Für Betriebe in Böblingen und Sindelfingen liefern wir zu Kundenempfängen, Teamevents, Jubiläen und Richtfesten. Unser [Fingerfood](/fingerfood-catering) ist dafür gemacht – Canapés, belegte Brötchen, Mini-Burger, Spieße und Desserts, ab 50 Teilen und mit offenen Preisen.",
          "Wer regelmäßig bestellt, bekommt auf Anfrage Partnerkonditionen mit festem Ansprechpartner – Näheres unter [Firmencatering](/firmencatering). Servicepersonal für Ausgabe und Betreuung buchen Sie für 35,00\u00A0€ pro Person und Stunde dazu.",
        ],
      },
      {
        title: "Private Feste mit Buffet oder Live-Cooking",
        paragraphs: [
          "Für [Hochzeit](/hochzeitscatering), Geburtstag oder Konfirmation wählen Sie eines unserer Buffets ab 20 Personen. Wenn Sie Ihren Gästen etwas Besonderes bieten möchten, kochen wir vor Ort: am Grill oder mit [Pizza aus dem mobilen Steinofen](/steinofen-pizza-catering).",
        ],
      },
    ],
    buffets: ["Fingerfood", "Schlemmerplatten", "Mediterranes Buffet", "Französisches Buffet", "Grill-Buffet"],
    reviewAuthors: ["Leni B.", "Sascha", "Melanie G."],
    faq: [
      {
        question: "Liefern Sie nach Böblingen und Sindelfingen?",
        answer:
          "Ja. Wir liefern nach Böblingen und Sindelfingen einschließlich Dagersheim, Maichingen und Darmsheim sowie nach Magstadt, Grafenau, Aidlingen, Ehningen, Holzgerlingen und Schönaich.",
      },
      {
        question: "Was kostet die Anfahrt nach Böblingen oder Sindelfingen?",
        answer:
          "Wir berechnen 0,60\u00A0€ pro Kilometer. Nach Sindelfingen sind es von unserer Küche rund 22, nach Böblingen rund 25 Kilometer. Den genauen Betrag nennen wir Ihnen im Angebot.",
      },
      {
        question: "Eignet sich Ihr Fingerfood für Firmenevents?",
        answer:
          "Ja. Fingerfood bestellen Sie ab 50 Teilen mit mindestens 10 Teilen pro Sorte; die Preise je nach Sorte pro Stück oder Portion stehen im Menü. Auf Wunsch stellen wir Servicepersonal, Gläser, Geschirr und Stehtische.",
      },
      {
        question: "Gibt es Sonderkonditionen für Unternehmen?",
        answer:
          "Firmen und Vereinen mit regelmäßigen Veranstaltungen bieten wir auf Anfrage Partnerkonditionen mit festem Ansprechpartner an, auf Wunsch als Rahmenangebot mit festen Preisen für eine vereinbarte Laufzeit.",
      },
    ],
    related: ["firmencatering", "fingerfood-catering", "catering-leonberg", "catering-weil-der-stadt"],
  },
  {
    slug: "hochzeitscatering",
    kind: "occasion",
    nav: "Hochzeitscatering",
    title: "Hochzeitscatering Calw, Leonberg, Pforzheim | Lasies",
    description:
      "Hochzeitscatering in Calw, Leonberg, Pforzheim & Umgebung: Hochzeitsbuffet ab 20 Personen, Fingerfood zum Sektempfang, Personal und Mietgeschirr.",
    eyebrow: "Hochzeitscatering",
    h1: "Hochzeitscatering",
    h1Accent: "für Ihren schönsten Tag",
    intro:
      "Vom Fingerfood zum Sektempfang bis zum Hochzeitsbuffet am Abend: Wir kümmern uns um das Essen und auf Wunsch um Personal, Geschirr und das Drumherum – in Calw, Leonberg, Pforzheim und im Großraum Stuttgart.",
    hero: "hochzeitstafel",
    photo: "buffetFestlich",
    serviceType: "Hochzeitscatering",
    areaServed: ["Bad Liebenzell", "Calw", "Leonberg", "Pforzheim", "Weil der Stadt", "Nagold", "Böblingen", "Sindelfingen", "Großraum Stuttgart"],
    prefill: "Wir planen unsere Hochzeit und interessieren uns für Ihr Hochzeitscatering. ",
    facts: [
      { label: "Hochzeitsbuffet", value: "ab 20 Personen" },
      { label: "Sektempfang", value: "Fingerfood ab 50 Teilen" },
      { label: "Servicepersonal", value: "35,00\u00A0€ pro Person/Std." },
      { label: "Kunden berichten", value: "Hochzeiten mit 100–120 Gästen" },
    ],
    sections: [
      {
        title: "Das Hochzeitsbuffet „Das glückliche Ehepaar“",
        paragraphs: [
          "Für Hochzeiten haben wir ein eigenes Buffet zusammengestellt: elegante Vorspeisen, festliche Hauptgerichte, Beilagen und Desserts. Sie können es so bestellen, wie es im Menü steht, oder mit Gerichten aus unseren anderen Buffets kombinieren – etwa mit mediterranen oder orientalischen Spezialitäten.",
          "Das Hochzeitsbuffet gibt es ab 20 Personen. Den Preis nennen wir Ihnen in einem persönlichen Angebot, abgestimmt auf Gästezahl und gewünschte Leistungen.",
        ],
      },
      {
        title: "Der Tag in Etappen: Empfang, Buffet, Mitternachtssnack",
        paragraphs: [
          "Viele Paare starten mit einem Sektempfang. Dafür eignet sich unser [Fingerfood](/fingerfood-catering): Canapés, Spieße und kleine Desserts, ab 50 Teilen und mit offenen Preisen. Am Abend folgt das Buffet – und wer später noch einmal Hunger hat, freut sich über [Pizza frisch aus dem mobilen Steinofen](/steinofen-pizza-catering).",
        ],
        bullets: [
          "Fingerfood zum Sektempfang",
          "Hochzeitsbuffet oder individuell zusammengestelltes Menü",
          "Vegetarisches Buffet und vegetarische Gerichte für Ihre Gäste",
          "Front-Cooking am Grill oder Steinofen-Pizza als Höhepunkt",
          "Getränke nach Wunsch",
        ],
      },
      {
        title: "Mehr als das Essen",
        paragraphs: [
          "Am Hochzeitstag sollen Sie sich um nichts kümmern müssen. Unser Servicepersonal übernimmt die Bewirtung Ihrer Gäste (35,00\u00A0€ pro Person und Stunde), Küchenpersonal ist für 40,00\u00A0€ pro Person und Stunde vor Ort. Geschirr, Gläser und Besteck mieten Sie als Gedeck für 3,25\u00A0€ inklusive Reinigung, Stehtische für 15,00\u00A0€.",
          "Bei der Suche nach einer Location, bei Dekoration, Blumen und Musikern helfen wir Ihnen gerne weiter.",
        ],
      },
      {
        title: "So planen wir Ihre Hochzeit",
        paragraphs: [
          "Sie nennen uns Datum, Ort und ungefähre Gästezahl. Wir besprechen Ihre Wünsche, stellen das Menü zusammen und schicken Ihnen ein persönliches Angebot. Bei Auftragserteilung werden 50\u00A0% der zu erwartenden Auftragssumme fällig; Gästezahl und Speisen können Sie bis spätestens 7 Werktage vor der Lieferung anpassen.",
        ],
      },
    ],
    buffets: ["Hochzeitsbuffet „Das glückliche Ehepaar“", "Gourmetreise-Buffet", "Mediterranes Buffet", "Orientalisches Buffet", "Fingerfood"],
    reviewAuthors: ["Anas K.", "Melanie G.", "Leni B."],
    faq: [
      {
        question: "Was kostet Hochzeitscatering bei Lasies?",
        answer:
          "Für Ihr Hochzeitsbuffet erstellen wir ein individuelles Angebot – abhängig von Buffet, Gästezahl und gewünschten Leistungen. Feste Preise gibt es für Fingerfood (je nach Sorte pro Stück oder Portion, im Menü), Servicepersonal (35,00\u00A0€ pro Person und Stunde), Küchenpersonal (40,00\u00A0€ pro Person und Stunde) und Mietgeschirr (Gedeck 3,25\u00A0€ pro Mieteinheit von 3 Tagen). Alle Preise enthalten die Mehrwertsteuer.",
      },
      {
        question: "Für wie viele Gäste können Sie eine Hochzeit ausrichten?",
        answer:
          "Unser Hochzeitsbuffet gibt es ab 20 Personen. Laut Google-Rezensionen unserer Kunden haben wir bereits Hochzeiten mit rund 100 und 120 Gästen beliefert; für größere Feiern sprechen Sie uns bitte an.",
      },
      {
        question: "In welchen Orten bieten Sie Hochzeitscatering an?",
        answer:
          "Wir kommen aus Bad Liebenzell und liefern Hochzeitscatering nach Calw, Leonberg, Weil der Stadt, Pforzheim, Nagold, Böblingen, Sindelfingen und in den gesamten Großraum Stuttgart. Für die Anfahrt berechnen wir 0,60\u00A0€ pro Kilometer.",
      },
      {
        question: "Können wir das Hochzeitsbuffet individuell zusammenstellen?",
        answer:
          "Ja. Sie können das Hochzeitsbuffet „Das glückliche Ehepaar“ übernehmen, mit Gerichten aus anderen Buffets kombinieren oder sich ein ganz eigenes Menü zusammenstellen lassen – auch mit vegetarischen Gerichten.",
      },
      {
        question: "Stellen Sie auch Geschirr, Gläser und Servicepersonal?",
        answer:
          "Ja. Ein Gedeck aus Speiseteller, Beilagenteller, Glas, Gabel und Messer kostet 3,25\u00A0€ inklusive Reinigung, ein Stehtisch 15,00\u00A0€ (Mieteinheit 3 Tage). Servicepersonal kostet 35,00\u00A0€ pro Person und Stunde.",
      },
      {
        question: "Bis wann können wir Gästezahl oder Menü ändern?",
        answer:
          "Änderungen sind bis spätestens 7 Werktage vor der Lieferung möglich. Bei einer Stornierung innerhalb von 14 Tagen vor Veranstaltungsbeginn berechnen wir 50\u00A0% der zu erwartenden Auftragssumme.",
      },
    ],
    related: ["fingerfood-catering", "steinofen-pizza-catering", "catering-calw", "catering-nagold"],
  },
  {
    slug: "firmencatering",
    kind: "occasion",
    nav: "Firmencatering",
    title: "Firmencatering & Business-Catering Raum Calw | Lasies",
    description:
      "Firmencatering für Empfang, Firmenfeier, Richtfest und Messe: Fingerfood mit offenen Preisen, Buffets, Personal und Partnerkonditionen für Firmen.",
    eyebrow: "Firmencatering",
    h1: "Firmencatering",
    h1Accent: "für Feiern, Empfänge & Events",
    intro:
      "Ob Kundenempfang, Sommerfest, Richtfest oder Weihnachtsfeier: Wir beliefern Unternehmen und Vereine in Calw, Leonberg, Böblingen, Sindelfingen und im Großraum Stuttgart – planbar und mit klaren Preisen.",
    hero: "miniBurger",
    photo: "fingerfood",
    serviceType: "Firmencatering",
    areaServed: ["Bad Liebenzell", "Calw", "Leonberg", "Pforzheim", "Weil der Stadt", "Nagold", "Böblingen", "Sindelfingen", "Großraum Stuttgart"],
    prefill: "Wir planen eine Firmenveranstaltung und interessieren uns für Ihr Firmencatering. ",
    facts: [
      { label: "Fingerfood", value: "ab 50 Teilen" },
      { label: "Buffets", value: "ab 20 Personen" },
      { label: "Servicepersonal", value: "35,00\u00A0€ pro Person/Std." },
      { label: "Preise", value: "inkl. MwSt." },
    ],
    sections: [
      {
        title: "Catering für jeden Anlass im Unternehmen",
        paragraphs: [
          "Wir begleiten Firmenfeiern, Jubiläen, Kundenempfänge, Richtfeste, Messen, Tage der offenen Tür, Teamevents und Weihnachtsfeiern – und ebenso Vereinsfeste und Abschlussfeiern. Sie sagen uns, was geplant ist und wie viele Gäste kommen; wir schlagen ein passendes Format vor.",
        ],
        bullets: [
          "Fingerfood für Empfang, Stehtisch und Pausen",
          "Buffets für Sommerfest, Jubiläum und Weihnachtsfeier",
          "Front-Cooking am Grill oder Steinofen-Pizza für das Teamevent",
          "Schlemmerplatten und Suppen für kleinere Runden",
        ],
      },
      {
        title: "Kalkulierbar: offene Preise für Ihr Budget",
        paragraphs: [
          "Für Ihr Budget brauchen Sie verlässliche Zahlen. Die Preise unseres [Fingerfoods](/fingerfood-catering) stehen offen im Menü, ebenso die Stundensätze für Personal und die Mietpreise für Geschirr und Stehtische. Für Buffets erhalten Sie ein persönliches Angebot. Alle Preise enthalten die gesetzliche Mehrwertsteuer.",
        ],
      },
      {
        title: "Partnerkonditionen für Firmen und Vereine",
        paragraphs: [
          "Sie feiern mehrmals im Jahr? Dann bieten wir Ihnen eine feste Zusammenarbeit an. Firmen und Vereine mit regelmäßigen Veranstaltungen erhalten bei uns einen festen Ansprechpartner und individuelle Konditionen – auf Wunsch als Rahmenangebot mit festen Preisen für eine vereinbarte Laufzeit.",
          "Die Partnerkonditionen sind nicht mit unserer Empfehlungsaktion kombinierbar; Vorteile gehen immer an die Organisation, nicht an einzelne Personen.",
        ],
      },
      {
        title: "Rundum versorgt am Veranstaltungstag",
        paragraphs: [
          "Auf Wunsch übernimmt unser Servicepersonal Ausgabe und Betreuung Ihrer Gäste (35,00\u00A0€ pro Person und Stunde), Küchenpersonal kocht vor Ort (40,00\u00A0€ pro Person und Stunde). Gläser, Geschirr und Besteck mieten Sie inklusive Reinigung, Stehtische für 15,00\u00A0€ pro Tisch.",
        ],
      },
    ],
    buffets: ["Fingerfood", "Schlemmerplatten", "Grill-Buffet", "Mediterranes Buffet", "Suppen"],
    reviewAuthors: ["Sascha", "Leni B.", "Jens B."],
    faq: [
      {
        question: "Für welche Firmenveranstaltungen bieten Sie Catering an?",
        answer:
          "Für Firmenfeiern, Jubiläen, Kundenempfänge, Richtfeste, Messen, Tage der offenen Tür, Teamevents und Weihnachtsfeiern – mit Fingerfood, Buffet, Front-Cooking oder Steinofen-Pizza vor Ort.",
      },
      {
        question: "Was kostet Firmencatering?",
        answer:
          "Fingerfood berechnen wir je nach Sorte pro Stück oder Portion; die Preise stehen im Menü, bestellen können Sie ab 50 Teilen. Für Buffets erhalten Sie ein individuelles Angebot. Servicepersonal kostet 35,00\u00A0€, Küchenpersonal 40,00\u00A0€ pro Person und Stunde, die Anfahrt 0,60\u00A0€ pro Kilometer. Alle Preise enthalten die Mehrwertsteuer.",
      },
      {
        question: "Gibt es Rahmenverträge oder Sonderkonditionen für Unternehmen?",
        answer:
          "Ja. Firmen und Vereinen mit regelmäßigen Veranstaltungen bieten wir auf Anfrage Partnerkonditionen mit festem Ansprechpartner an, auf Wunsch als Rahmenangebot mit festen Preisen für eine vereinbarte Laufzeit.",
      },
      {
        question: "In welcher Region liefern Sie Firmencatering?",
        answer:
          "Wir sind in Bad Liebenzell zu Hause und beliefern Unternehmen in Calw, Leonberg, Weil der Stadt, Pforzheim, Nagold, Böblingen, Sindelfingen und im gesamten Großraum Stuttgart.",
      },
      {
        question: "Können Sie auch Gläser, Stehtische und Personal stellen?",
        answer:
          "Ja. Ein Stehtisch kostet 15,00\u00A0€, ein Einzelteil wie Glas, Teller oder Besteckteil 0,65\u00A0€ inklusive Reinigung (Mieteinheit 3 Tage). Servicepersonal buchen Sie für 35,00\u00A0€ pro Person und Stunde.",
      },
    ],
    related: ["fingerfood-catering", "steinofen-pizza-catering", "catering-leonberg", "catering-boeblingen-sindelfingen"],
  },
  {
    slug: "fingerfood-catering",
    kind: "occasion",
    nav: "Fingerfood-Catering",
    title: "Fingerfood bestellen – Preise, ab 50 Teilen | Lasies",
    description:
      "Fingerfood bestellen in Calw, Leonberg und Umgebung: Canapés, Spieße, Mini-Burger und Desserts mit offenen Preisen. Ab 50 Teilen, mindestens 10 pro Sorte.",
    eyebrow: "Fingerfood-Catering",
    h1: "Fingerfood-Catering",
    h1Accent: "bestellen – mit offenen Preisen",
    intro:
      "Mundgerecht, kalt und warm, süß und herzhaft: Stellen Sie Ihr Fingerfood selbst zusammen – ab 50 Teilen und mit Preisen, die Sie hier direkt nachlesen können.",
    hero: "fingerfood",
    photo: "miniBurger",
    serviceType: "Fingerfood-Catering",
    areaServed: ["Bad Liebenzell", "Calw", "Leonberg", "Pforzheim", "Weil der Stadt", "Nagold", "Böblingen", "Sindelfingen", "Großraum Stuttgart"],
    prefill: "Ich möchte Fingerfood bestellen. ",
    facts: [
      { label: "Mindestbestellung", value: "50 Teile" },
      { label: "Pro Sorte", value: "mindestens 10 Teile" },
      { label: "Preise", value: "je Stück oder Portion, inkl. MwSt." },
      { label: "Anfahrt", value: "0,60\u00A0€ pro km" },
    ],
    sections: [
      {
        title: "Fingerfood bestellen: so funktioniert es",
        paragraphs: [
          "Sie wählen aus unserer Fingerfood-Karte die Sorten, die zu Ihrer Feier passen, und nennen uns die Stückzahlen. Die Mindestbestellung liegt bei 50 Teilen, pro Sorte bei mindestens 10 Teilen; bei einzelnen Sorten gilt eine eigene Mindestmenge, die in der [Preisliste](#preise) steht. Wir bereiten alles frisch zu und liefern zum vereinbarten Zeitpunkt zu Ihnen.",
          "Fingerfood passt überall dort, wo Gäste stehen, sich unterhalten und nebenbei essen: beim Sektempfang, bei der Vernissage, beim Firmenjubiläum, in der Pause einer Tagung oder als Auftakt vor dem Buffet.",
        ],
      },
      {
        title: "Wie viel Fingerfood pro Person?",
        paragraphs: [
          "Die passende Menge hängt von Dauer, Anlass und weiteren Speisen ab: Für einen kurzen Empfang brauchen Sie weniger Teile pro Person, als wenn das Fingerfood eine Mahlzeit ersetzt. Nennen Sie uns Gästezahl und Ablauf – wir empfehlen Ihnen die Bestellmenge und eine Mischung aus kalten, warmen und süßen Sorten im Angebot.",
        ],
      },
      {
        title: "Dazu: Gläser, Stehtische und Service",
        paragraphs: [
          "Zum Fingerfood können Sie alles mieten, was ein Stehempfang braucht: Gläser und Teller für 0,65\u00A0€ pro Teil inklusive Reinigung und Stehtische für 15,00\u00A0€ pro Tisch – auf Wunsch mit weißer Husse. Servicepersonal reicht die Platten und kümmert sich um Ihre Gäste (35,00\u00A0€ pro Person und Stunde).",
        ],
      },
    ],
    buffets: ["Fingerfood", "Schlemmerplatten", "Suppen"],
    reviewAuthors: ["Leni B.", "Sascha", "Biggi"],
    extra: "fingerfoodPrices",
    faq: [
      {
        question: "Was kostet Fingerfood pro Stück?",
        answer:
          "Die Preise gelten je nach Sorte pro Stück oder Portion und enthalten die Mehrwertsteuer. Die vollständige Preisliste mit Einheiten und besonderen Mindestmengen steht auf dieser Seite und im Menü. Dazu kommt die Anfahrt mit 0,60\u00A0€ pro Kilometer.",
      },
      {
        question: "Wie viel Fingerfood muss ich mindestens bestellen?",
        answer:
          "Mindestens 50 Teile pro Bestellung und mindestens 10 Teile pro Sorte. Für einzelne Sorten gilt eine eigene Mindestmenge; sie steht in der Preisliste.",
      },
      {
        question: "Wie viele Teile Fingerfood brauche ich pro Person?",
        answer:
          "Das hängt von Dauer, Anlass und weiteren Speisen ab. Nennen Sie uns Gästezahl und Ablauf – wir empfehlen Ihnen die passende Bestellmenge im Angebot.",
      },
      {
        question: "Wohin liefern Sie Fingerfood?",
        answer:
          "Wir liefern von Bad Liebenzell nach Calw, Leonberg, Weil der Stadt, Pforzheim, Nagold, Böblingen, Sindelfingen und in den gesamten Großraum Stuttgart.",
      },
      {
        question: "Gibt es auch vegetarisches Fingerfood?",
        answer:
          "Ja, unsere Fingerfood-Karte enthält vegetarische Sorten. Sagen Sie uns bei der Anfrage, wie viele Ihrer Gäste vegetarisch essen – wir beraten Sie bei der Auswahl.",
      },
    ],
    related: ["firmencatering", "hochzeitscatering", "catering-leonberg", "catering-pforzheim"],
  },
  {
    slug: "steinofen-pizza-catering",
    kind: "occasion",
    nav: "Steinofen-Pizza-Catering",
    title: "Steinofen-Pizza-Catering – Pizza live vor Ort | Lasies",
    description:
      "Pizza-Catering mit mobilem Steinofen: Wir backen Pizza frisch vor Ihren Gästen – für Hochzeit, Firmenfeier und Sommerfest in Calw, Leonberg & Umgebung.",
    eyebrow: "Steinofen-Pizza-Catering",
    h1: "Steinofen-Pizza-Catering",
    h1Accent: "live bei Ihrer Feier",
    intro:
      "Wir bringen den mobilen Steinofen zu Ihnen und backen vor den Augen Ihrer Gäste knusprige, duftende Pizzen – klassisch, vegetarisch oder ganz besonders belegt.",
    hero: "frontCooking",
    photo: "pizza",
    serviceType: "Pizza-Catering mit mobilem Steinofen",
    areaServed: ["Bad Liebenzell", "Calw", "Leonberg", "Pforzheim", "Weil der Stadt", "Nagold", "Böblingen", "Sindelfingen", "Großraum Stuttgart"],
    prefill: "Ich interessiere mich für Steinofen-Pizza vor Ort. ",
    facts: [
      { label: "Zubereitung", value: "live im Steinofen" },
      { label: "Sorten", value: "klassisch, vegetarisch, Spezial" },
      { label: "Einsatzgebiet", value: "Calw bis Stuttgart" },
      { label: "Anfahrt", value: "0,60\u00A0€ pro km" },
    ],
    sections: [
      {
        title: "Pizza frisch aus dem mobilen Steinofen",
        paragraphs: [
          "Der Duft von frisch gebackener Pizza zieht jeden Gast an. Wir backen die Pizzen vor Ort im heißen Steinofen und servieren sie direkt aus dem Ofen. So wird das Essen selbst zum Programmpunkt Ihrer Feier.",
          "Ob Garten, Firmengelände oder Vereinsheim: Was wir vor Ort an Platz und Anschlüssen brauchen, klären wir mit Ihnen bei der Anfrage.",
        ],
      },
      {
        title: "Für welche Feiern eignet sich Pizza-Catering?",
        paragraphs: [
          "Steinofen-Pizza passt zu allen Festen, bei denen es locker zugehen darf: Sommerfest, Geburtstag, Polterabend, [Firmenfeier](/firmencatering), Teamevent, Vereinsfest oder als Mitternachtssnack auf der [Hochzeit](/hochzeitscatering). In einer Google-Rezension heißt es nach einem Fest mit 70 Gästen, ausnahmslos alle seien begeistert gewesen.",
        ],
        bullets: [
          "Als Hauptessen statt Buffet",
          "Als Ergänzung zu Salaten und Vorspeisen vom Buffet",
          "Als später Snack bei Hochzeit oder Party",
        ],
      },
      {
        title: "Pizza und mehr kombinieren",
        paragraphs: [
          "Die Pizza lässt sich gut mit unseren anderen Angeboten verbinden: [Fingerfood](/fingerfood-catering) zum Empfang, Salate und Antipasti vom Mediterranen Buffet oder ein Dessert. Geschirr, Gläser und Stehtische können Sie bei uns mieten, Servicepersonal buchen Sie für 35,00\u00A0€ pro Person und Stunde dazu.",
        ],
      },
    ],
    buffets: ["Mediterranes Buffet", "Fingerfood", "Vegetarisches Buffet"],
    reviewAuthors: ["Jens B.", "Biggi", "Sascha"],
    extra: "pizzaKinds",
    faq: [
      {
        question: "Wie funktioniert Pizza-Catering mit dem mobilen Steinofen?",
        answer:
          "Wir bringen den mobilen Steinofen zu Ihrer Veranstaltung und backen die Pizzen frisch vor Ihren Gästen. Aufbau und Ablauf besprechen wir mit Ihnen bei der Anfrage.",
      },
      {
        question: "Welche Pizzen bieten Sie an?",
        answer:
          "Klassische Pizzen (Margherita, Salami, Prosciutto), vegetarische Pizzen (Grillgemüse, Pilze, Rucola) und Spezial-Pizzen (BBQ Chicken, Thunfisch, Schafskäse und mehr).",
      },
      {
        question: "Was kostet Steinofen-Pizza-Catering?",
        answer:
          "Den Preis nennen wir Ihnen in einem individuellen Angebot. Für die Anfahrt berechnen wir 0,60\u00A0€ pro Kilometer.",
      },
      {
        question: "Wo bieten Sie Pizza-Catering an?",
        answer:
          "In Bad Liebenzell, Calw, Leonberg, Weil der Stadt, Pforzheim, Nagold, Böblingen, Sindelfingen und im gesamten Großraum Stuttgart.",
      },
      {
        question: "Gibt es vegetarische Pizza?",
        answer:
          "Ja. Wir backen vegetarische Pizzen mit Grillgemüse, Pilzen und Rucola sowie die klassische Margherita.",
      },
    ],
    related: ["hochzeitscatering", "firmencatering", "catering-pforzheim", "catering-nagold"],
  },
];

export const townPages = landingPages.filter((p) => p.kind === "town");
export const occasionPages = landingPages.filter((p) => p.kind === "occasion");

export function getLandingPage(slug: string) {
  return landingPages.find((p) => p.slug === slug);
}
