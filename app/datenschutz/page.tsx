import PageHero from "@/components/site/PageHero";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import heroImage from "@/app/images/1719173021628.jpg";
import { pageMetadata } from "@/libs/metadata";
import { site } from "@/libs/site";

export const metadata = pageMetadata({
  title: "Datenschutzerklärung | Lasies Catering Service",
  description:
    "Wie Lasies Catering Service personenbezogene Daten auf lasies.com verarbeitet: Kontaktformular, Hosting, Analyse mit Einwilligung und Ihre Rechte.",
  path: "/datenschutz",
});

export default function Datenschutz() {
  return (
    <main>
      <PageHero
        image={heroImage}
        eyebrow="Rechtliche Hinweise"
        title={"Daten\u00ADschutz\u00ADerklärung"}
      />
      <div className="container-x py-14 sm:py-20">
        <article className="prose mx-auto max-w-3xl [--tw-prose-bullets:#7A5C10] [--tw-prose-counters:#7A5C10] rounded-[2rem] bg-cream-light p-5 text-ink-muted shadow-sm ring-1 ring-olive-900/5 prose-headings:font-display prose-headings:font-normal prose-headings:text-olive-900 prose-a:text-gold-dark prose-strong:text-olive-900 sm:p-12">
          <p className="!mt-0">Stand: November 2026</p>

          <h2>1. Verantwortlicher</h2>
          <p>
            {site.name}
            <br />
            Inhaber: {site.owner}
            <br />
            {site.street}, {site.city}
            <br />
            Telefon: <a href={site.phoneHref}>{site.phone}</a>
            <br />
            E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <h2>2. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
            (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
            (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch
            (Art. 21). Eine erteilte Einwilligung können Sie jederzeit mit
            Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3). Außerdem
            können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren,
            zum Beispiel beim Landesbeauftragten für den Datenschutz und die
            Informationsfreiheit Baden-Württemberg. Für alle Anliegen genügt
            eine E-Mail an <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>3. Hosting und Server-Logdateien</h2>
          <p>
            Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf
            werden technisch notwendige Daten verarbeitet, etwa IP-Adresse,
            Datum und Uhrzeit, aufgerufene Seite und Browsertyp. Das ist
            erforderlich, um die Website sicher und zuverlässig auszuliefern
            (Art. 6 Abs. 1 lit. f DSGVO). Für Übermittlungen in die USA stützt
            sich der Anbieter auf das EU-US Data Privacy Framework bzw.
            Standardvertragsklauseln.
          </p>

          <h2>4. Kontaktformular, E{"\u2011"}Mail, Telefon und WhatsApp</h2>
          <p>
            Wenn Sie uns eine Anfrage senden, verarbeiten wir Ihre Angaben
            (z. B. Name, E-Mail-Adresse, Datum und Gästezahl Ihrer Feier und
            Ihre Nachricht), um Ihre Anfrage zu beantworten und Ihnen ein
            Angebot zu erstellen (Art. 6 Abs. 1 lit. b DSGVO). Formularanfragen
            und die Eingangsbestätigung versenden wir über den E-Mail-Dienst
            Resend (Resend, Inc., USA). Zum Schutz vor Missbrauch wird Ihre
            IP-Adresse kurzzeitig im Arbeitsspeicher gehalten, um zu viele
            Anfragen in kurzer Zeit zu begrenzen. Wir löschen Ihre Anfrage,
            sobald sie erledigt ist und keine gesetzlichen
            Aufbewahrungspflichten mehr bestehen. Wenn Sie uns über WhatsApp
            schreiben, gelten zusätzlich die Datenschutzbestimmungen von
            WhatsApp.
          </p>

          <h2>5. Analyse und Werbung – nur mit Ihrer Einwilligung</h2>
          <p>
            Nur wenn Sie im Cookie-Hinweis auf „Akzeptieren“ klicken, setzen
            wir folgende Dienste ein (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1
            TDDDG):
          </p>
          <ul>
            <li>
              <strong>Google Analytics und Google Ads</strong> (Google Ireland
              Limited, Irland): Auswertung der Websitenutzung und Messung, ob
              unsere Anzeigen zu Anfragen führen. Dabei können Daten auch an
              Google LLC in den USA übermittelt werden.
            </li>
            <li>
              <strong>PostHog</strong> (PostHog Inc.): Auswertung, wie
              Besucherinnen und Besucher die Website nutzen, um sie zu
              verbessern.
            </li>
          </ul>
          <p>
            Ohne Einwilligung werden diese Dienste nicht geladen und setzen
            keine Cookies. Ihre
            Entscheidung speichern wir in Ihrem Browser (localStorage). Sie
            können sie jederzeit ändern:{" "}
            <CookieSettingsButton className="font-semibold text-gold-dark underline underline-offset-2" />
            .
          </p>

          <h2>6. Vercel Web Analytics</h2>
          <p>
            Zur Reichweitenmessung nutzen wir Vercel Web Analytics. Der Dienst
            arbeitet ohne Cookies und erfasst keine Daten, die Sie über
            mehrere Websites hinweg wiedererkennen; Besuche werden nur
            anonymisiert und zusammengefasst ausgewertet (Art. 6 Abs. 1 lit. f
            DSGVO).
          </p>

          <h2>7. Schriftarten und externe Links</h2>
          <p>
            Die Schriftarten dieser Website werden von unserem eigenen Server
            geladen; dabei werden keine Daten an Google übertragen. Links zu
            Instagram, WhatsApp, Google Maps oder Listando führen auf Angebote
            anderer Anbieter, für die deren Datenschutzbestimmungen gelten.
            Daten werden erst übertragen, wenn Sie einen solchen Link
            anklicken.
          </p>
        </article>
      </div>
    </main>
  );
}
