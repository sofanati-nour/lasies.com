import PageHero from "@/components/site/PageHero";
import heroImage from "@/app/images/1719173021628.jpg";

import { pageMetadata } from "@/libs/metadata";

export const metadata = pageMetadata({
  title: "Impressum | Lasies Catering Service",
  description:
    "Impressum von Lasies Catering Service, Inhaber Tarek Taraben, Barthstraße 4, 75378 Bad Liebenzell: Kontakt, Umsatzsteuer und rechtliche Hinweise.",
  path: "/impressum",
});

export default function Impressum() {
  return (
    <main>
      <PageHero image={heroImage} eyebrow="Rechtliche Hinweise" title="Impressum" />
      <div className="container-x py-14 sm:py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-cream-light p-5 text-ink-muted shadow-sm ring-1 ring-olive-900/5 sm:p-12 [&_.font-semibold]:text-olive-900 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-normal [&_h2]:text-olive-900">
        <section>
          <div className="mb-6">
            <p className="font-semibold">Lasies Catering Service</p>
            <p>Barthstraße 4</p>
            <p>75378 Bad Liebenzell</p>
            <p>Deutschland</p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Inhaber:</p>
            <p>Tarek Taraben</p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Kontakt:</p>
            <p>
              Telefon:{" "}
              <a
                href="tel:+4915738949296"
                className="text-gold-dark underline underline-offset-4"
              >
                +49 1573 8949296
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@lasies.com"
                className="text-gold-dark underline underline-offset-4"
              >
                info@lasies.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.lasies.com"
                className="text-gold-dark underline underline-offset-4"
              >
                https://www.lasies.com
              </a>
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">Umsatzsteuer-ID:</p>
            <p className="">DE365621267</p>
          </div>

          <div className="mb-8">
            <p className="font-semibold">Verbraucherstreitbeilegung:</p>
            <p>
              Wir sind weder bereit noch verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div className="mb-8">
            <p className="font-semibold">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
            </p>
            <p>Tarek Taraben</p>
            <p>Barthstraße 4, 75378 Bad Liebenzell</p>
          </div>
        </section>

        <hr className="my-8 border-olive-900/10" />

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
    </main>
  );
}
