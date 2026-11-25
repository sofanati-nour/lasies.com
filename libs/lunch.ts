// Mittagstisch: daily dishes for groups. Single source for the homepage
// section, the hero teaser, /llms.txt and the JSON-LD offer.

export const lunch = {
  minGuests: 10,
  maxGuests: 200,
  /** Shown as "unter 10 € pro Teller". */
  maxPrice: 10,
  /** A selection from the changing daily menu. */
  dishes: [
    "Hähnchengeschnetzeltes mit Basmatireis und Salat",
    "Spaghetti Bolognese mit Rindfleisch und Salat",
    "Rindergulasch mit Spätzle und Salat",
    "Geröstete Maultaschen mit Kartoffelsalat",
    "Schweineschnitzel paniert, mit Kroketten und Gemüse",
    "Rinderlasagne mit Salat",
  ],
};
