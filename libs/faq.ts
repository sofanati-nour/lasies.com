// Frequently asked questions. Every answer restates a fact that is already
// published elsewhere on the site (prices, terms, menu minimums) – keep them
// in sync when those change. Used for the visible FAQ, its FAQPage JSON-LD
// and /llms.txt.

export const faq: { question: string; answer: string }[] = [
  {
    question: "In welcher Region ist Lasies Catering tätig?",
    answer:
      "Wir sind in Bad Liebenzell-Möttlingen zu Hause und beliefern Feiern in Calw, Weil der Stadt, Leonberg, Pforzheim, Nagold, Böblingen, Sindelfingen und im gesamten Großraum Stuttgart. Für die Anfahrt berechnen wir 0,60\u00A0€ pro Kilometer.",
  },
  {
    question: "Für welche Anlässe kann ich Sie buchen?",
    answer:
      "Für Hochzeiten, Firmenfeiern, Geburtstage, Konfirmationen, Kommunionen, Taufen, Jubiläen, Messen, Richtfeste, Vereinsfeste, Stehempfänge und Abschlussfeiern – vom kleinen Familienfest bis zum großen Event.",
  },
  {
    question: "Ab wie vielen Personen kann ich ein Buffet bestellen?",
    answer:
      "Unsere Buffets gibt es ab 20 Personen, das Gourmetreise-Buffet ab 30 Personen. Fingerfood bestellen Sie ab 50 Teilen (mindestens 10 Teile pro Sorte), Schlemmerplatten und Gerichte zum Kombinieren ab 10 Portionen und Suppen ab 20 Portionen.",
  },
  {
    question: "Was kostet ein Catering bei Lasies?",
    answer:
      "Für Ihr Buffet erstellen wir Ihnen ein individuelles Angebot – abhängig von Buffet, Gästezahl und gewünschten Leistungen. Die Fingerfood-Preise finden Sie direkt im Menü. Servicepersonal kostet 35,00\u00A0€ und Küchenpersonal 40,00\u00A0€ pro Person und Stunde. Alle Preise verstehen sich inklusive Mehrwertsteuer.",
  },
  {
    question: "Gibt es vegetarische Speisen?",
    answer:
      "Ja. Wir bieten ein eigenes Vegetarisches Buffet sowie vegetarische Steinofen-Pizza an. Jedes Buffet passen wir gerne an Ihre Wünsche an – sprechen Sie uns einfach an.",
  },
  {
    question: "Kochen Sie auch direkt vor Ort?",
    answer:
      "Ja. Beim Front-Cooking bereiten wir Speisen direkt vor Ihren Gästen zu, zum Beispiel am Grill. Neu ist unser mobiler Steinofen, in dem wir Pizza frisch bei Ihrer Veranstaltung backen.",
  },
  {
    question: "Kann ich Geschirr und Personal dazubuchen?",
    answer:
      "Ja. Geschirr, Gläser, Besteck und Stehtische können Sie bei uns mieten (eine Mieteinheit beträgt 3 Tage). Ein Gedeck aus Speiseteller, Beilagenteller, Glas, Gabel und Messer kostet 3,25\u00A0€, ein Einzelteil 0,65\u00A0€ – jeweils inklusive Reinigung. Ein Stehtisch kostet 15,00\u00A0€. Service- und Küchenpersonal übernimmt auf Wunsch die Bewirtung Ihrer Gäste.",
  },
  {
    question: "Gibt es Vorteile für Empfehlungen, Firmen oder Vereine?",
    answer:
      "Ja. Neukunden erhalten 50\u00A0€ Rabatt auf ihren ersten Auftrag ab 1.000\u00A0€ (inkl. MwSt.). Wer uns empfohlen hat, erhält 50\u00A0€ Gutschrift auf einen späteren eigenen Auftrag, sobald der empfohlene Auftrag durchgeführt und bezahlt ist – höchstens dreimal pro Kalenderjahr, gültig bis Ende des dritten Kalenderjahres nach Entstehung. Nennen Sie uns den Namen spätestens, bevor Sie unser Angebot annehmen. Alle Bedingungen finden Sie unter „Wichtiges & Wissenswertes“. Firmen und Vereinen mit regelmäßigen Veranstaltungen bieten wir auf Anfrage Partnerkonditionen mit festem Ansprechpartner an; Vorteile gehen dabei immer an die Organisation.",
  },
  {
    question: "Bieten Sie auch Getränke an?",
    answer:
      "Getränke servieren wir Ihnen gerne nach Wunsch. Sagen Sie uns in Ihrer Anfrage einfach, was Sie sich vorstellen.",
  },
  {
    question: "Wie läuft die Buchung ab und wann ist eine Anzahlung fällig?",
    answer:
      "Sie senden uns eine unverbindliche Anfrage per Formular, Telefon, WhatsApp oder E-Mail. Wir stellen Ihr Menü zusammen und schicken Ihnen ein persönliches Angebot. Bei Auftragserteilung werden 50\u00A0% der zu erwartenden Auftragssumme fällig.",
  },
  {
    question: "Kann ich meine Bestellung ändern oder stornieren?",
    answer:
      "Änderungen sind bis spätestens 7 Werktage vor der Lieferung möglich. Bei einer Stornierung innerhalb von 14 Tagen vor Veranstaltungsbeginn berechnen wir 50\u00A0% der zu erwartenden Auftragssumme.",
  },
];

export function faqSchema() {
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
