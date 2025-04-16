import HeaderThing from "@/components/HeaderThing";

export default async function Tagesessen() {
  return (
    <div className="bg-white">
      <HeaderThing title="Tagesessen" subtitle="Tagesessen" />
      <div className="flex flex-col px-2 sm:px-4 items-center relative justify-center bg-white">
        <div className="prose max-w-full mx-auto w-full py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Tagesessen
          </h1>
          <p className="text-center text-base sm:text-lg mb-6 sm:mb-8">
            <strong>Mittagsessen 12:00-14:00 Uhr</strong>
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3 sm:mb-4">
            KW 16-2025
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Tag
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Fleischgericht
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Preis
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Vegetarisch
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Montag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Linseneintopf mit Wiener Würstchen
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,00 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Linseneintopf mit Räuchertofu
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,00 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Dienstag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Putengeschnetzeltes mit Reis
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,90 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Champignon-Rahmgeschnetzeltes
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,90 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Mittwoch
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Kabeljau mit Spargel & Kartoffeln
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,90 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Spargelquiche
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    6,90 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Donnerstag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Schweinekotelett mit Kartoffelsalat
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,40 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Gemüsegratin
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,40 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Freitag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Cevapapcici mit Djuvecreis und Tzatziki
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,30 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Kürbisfalafel mit Quark-Kräuterdip
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    6,70 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3 sm:mb-4">
            KW 17-2025
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Tag
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Fleischgericht
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Preis
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Vegetarisch
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Montag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Hähnchen-Spieße mit Basmatireis
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,00 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Gemüsevariation mit Pilzrahmsoße und Basmatireis
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,00 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Dienstag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Frikadellen mit Rosmarinkartoffeln
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,50 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Brokkoli-Nuss-Eck oder Quinoa-Erbsenbratlinge
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,50 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Mittwoch
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Maultaschen mit Kartoffelsalat
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,20 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Vegetarische Maultaschen
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,20 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Donnerstag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Asia-Pfanne mit Chinagemüse, Mie-Nudeln und Putenstreifen
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,60 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Asia-Pfanne ohne Putenstreifen
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,60 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Freitag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Gefüllte Paprika mit Hackfleisch
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,70 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Gefüllte Paprika mit Bulgur und Feta
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,70 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3 sm:mb-4">
            KW 18-2025
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Tag
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Fleischgericht
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Preis
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Vegetarisch
                  </th>
                  <th className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Montag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Panierte Putenschnitzel, Spätzle und Bratensoße
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,70 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Gemüsebratlinge
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,70 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Dienstag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Rindergulasch mit Reis
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,90 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Gulasch mit Pilze anstatt Rinderfleisch
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,90 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Mittwoch
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Fischfilet mit Zitronenbutter
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    9,30 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Zucchini-Nudelpfanne
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    9,30 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Donnerstag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Paniertes Seelachsfilet mit hausgemachter Remoulade und
                    Kartoffelsalat
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,90 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Zucchini-Kartoffelrösti
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    8,90 €
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 font-medium whitespace-nowrap">
                    Freitag
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Käsespätzle mit gerösteter Zwiebel und Kartoffelsalat
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,20 €
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    Vegetarische Maultaschen mit Zwiebelschmalze
                  </td>
                  <td className="border border-gray-300 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                    7,80 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
