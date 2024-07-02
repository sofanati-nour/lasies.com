import { ContactRequestType } from "@/libs/types/contactRequest";

const germanTranslations = {
  name: "Name: ",
  email: "E-Mail: ",
  telephone: "Telefon: ",
  message: "Nachricht: ",
  location: "Veransaltungsort: ",
  time: "Uhrzeit: ",
  date: "Datum: ",
  number_of_guests: "Anzahl der Gäste: ",
  address: "Adresse: ",
};

export const ContactRequestTemplate: React.FC<ContactRequestType> = (data) => {
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <p>{data.message}</p>
      <hr />
      <p>
        E-mail: <a href={`mailto:${data.email}`}>{data.email}</a>
      </p>
      <p>
        {germanTranslations["telephone"]}
        <a href={`tel:${data.telephone}`}>{data.telephone}</a>
      </p>
      <p>
        {germanTranslations["location"]}
        {data.location}
      </p>
      <p>
        {germanTranslations["address"]}
        {data.address}
      </p>
      <p>
        {germanTranslations["time"]}
        <time>{data.time}</time>
      </p>
      <p>
        {germanTranslations["date"]}
        <time>{data.date}</time>
      </p>
      <p>
        {germanTranslations["number_of_guests"]}
        {data.guests}
      </p>
    </div>
  );
};
