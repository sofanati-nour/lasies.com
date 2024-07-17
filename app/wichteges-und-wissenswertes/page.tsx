import HeaderThing from "@/components/HeaderThing";

export default function Wichtiges() {
  return (
    <div className=" bg-[#f3f1ec] p-4 pb-10">
      <HeaderThing
        title="Wichtiges & Wissenswertes"
        subtitle="UNSERE GESCHÄFTSBEDINGUNGEN"
      />
      <div className="prose mx-auto">
        <p>
          Zur Freude der Gastgeberin versorgen wir Sie, bei Bedarf, mit Gläsern,
          Geschirr, Besteck und vielem mehr.
        </p>
        <b>Mietgebühr: (Standardausführung)</b>
        <ul>
          <li>Suppen- , Speise- , Dessertteller</li>
          <li>Suppentassen obere und untere</li>
          <li>Kaffeetasse, obere und untere</li>
          <li>Speisemesser, -gabel, -löffel, Dessertlöffel</li>
          <li>Gläser aller Art</li>
          <li>Stehtisch schwarz rund 80 cm</li>
          <li>Stehtisch inkl. weißer Husse</li>
          <li>Reinigungsgebühr pro Geschirr- und Besteckteil</li>
        </ul>
        <p>
          <i className="fas fa-star text-[#cb9f1b99] mr-1" />
          Gemietete Artikel, Racks und Boxen sind Eigentum der Firma Lasies
          Catering Service.
          <hr className="my-2" />
          <i className="fas fa-star text-[#cb9f1b99] mr-1" />
          Der Mietpreis eines Artikels wird auf Grund der aktuellsten Preisliste
          zuzüglich Reinigungsgebühr, inklusive der gesetzlichen Mehrwertsteuer
          festgelegt.
          <hr className="my-2" />
          <i className="fas fa-star text-[#cb9f1b99] mr-1" />
          Eine Mieteinheit beträgt 3 Tage, auch wenn die gemieteten Artikel
          vorzeitig und/oder unbenutzt zurückgegeben werden.
          <hr className="my-2" />
          <i className="fas fa-star text-[#cb9f1b99] mr-1" />
          Bei Abholung muss der Mieter selbst für einen vorschriftsmäßigen
          Transport Sorge tragen Die Mietartikel müssen in einem geschlossenen
          Fahrzeug transportiert werden.
          <hr className="my-2" />
          <i className="fas fa-star text-[#cb9f1b99] mr-1" />
          Bei Rücknahme müssen die Mietartikel transportfähig wieder in die
          Boxen geräumt sein. Der Mietpreis beinhaltet nicht den Auf- und Abbau
          sowie das Vertragen und Einsammeln der gemieteten Gegenstände.
          <hr className="my-2" />
          <i className="fas fa-star text-[#cb9f1b99] mr-1" />
          Diese Leistung übernehmen wir gerne gegen gesonderte Berechnung
          (Stundensatz pro Person 35,00 Euro). <hr className="my-2" />
          <i className="fas fa-star text-[#cb9f1b99] mr-1" /> Für beschädigte
          oder nicht zurückgegebene Ausstattungsgegenstände berechnen wir den
          Wiederbeschaffungswert.
        </p>
      </div>
    </div>
  );
}
