import HeaderThing from "@/components/HeaderThing";

export default function Impressum() {
  return (
    <div className="bg-[#f3f1ec] p-4 pb-10">
      <HeaderThing title="Impressum" subtitle="RECHTLICHE HINWEISE" />
      <div className=" mx-auto max-w-4xl">
        <section>
          <div className="mb-6">
            <p className="font-semibold">Lasies Catering Service</p>
            <p>Barthstraße 4</p>
            <p>75378 Bad Liebenzell</p>
            <p>Deutschland</p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Vertreten durch:</p>
            <p>Tarek Taraben</p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Kontakt:</p>
            <p>Telefon: +49 1573 8949296</p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@lasies.com"
                className="text-blue-600 hover:underline"
              >
                info@lasies.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.lasies.com"
                className="text-blue-600 hover:underline"
              >
                https://www.lasies.com
              </a>
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Umsatzsteuer-ID:</p>
            <p className="italic text-gray-600">DE365621267</p>
          </div>

          <div className="mb-8">
            <p className="font-semibold">
              Rechtliche Hinweise zur Streitbeilegung gemäß Art. 14 ODR-VO:
            </p>
            <p>Plattform der EU-Kommission zur Online-Streitbeilegung:</p>
            <p>
              <a
                href="https://ec.europa.eu/consumers/odr"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Wir sind weder bereit noch verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div className="mb-8">
            <p className="font-semibold">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </p>
            <p>Tarek Taraben</p>
            <p>Barthstraße 4, 75378 Bad Liebenzell</p>
          </div>
        </section>

        <hr className="my-8 border-gray-300" />

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Haftung für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            übernehmen wir jedoch keine Gewähr.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Verantwortlich sind
            ausschließlich deren Anbieter.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
            Dritter sind – soweit möglich – entsprechend gekennzeichnet.
          </p>
        </section>
      </div>
    </div>
  );
}
