import { ContactRequestType } from "@/libs/types/contactRequest";

const dash = (value?: string) => (value && value.trim() ? value : "–");

/** "2026-12-24" -> "24.12.2026" */
export const germanDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}.${m}.${y}` : iso;
};

export const ContactRequestTemplate = (data: ContactRequestType) => {
  return (
    <div>
      <h1>Neue Anfrage von {data.name}</h1>
      {/* Keep the customer's line breaks. */}
      <p style={{ whiteSpace: "pre-wrap" }}>{data.message}</p>
      <hr />
      <p>
        E-Mail: <a href={`mailto:${data.email}`}>{data.email}</a>
      </p>
      <p>
        Telefon:{" "}
        {data.telephone ? (
          <a href={`tel:${data.telephone}`}>{data.telephone}</a>
        ) : (
          "–"
        )}
      </p>
      <p>
        Datum: <time dateTime={data.date}>{germanDate(data.date)}</time>
      </p>
      <p>Uhrzeit: {dash(data.time)}</p>
      <p>Anzahl der Gäste: {data.guests}</p>
      <p>Veranstaltungsort: {dash(data.location)}</p>
      <p>Adresse: {dash(data.address)}</p>
      <p>Empfohlen von: {dash(data.referredBy)}</p>
    </div>
  );
};
