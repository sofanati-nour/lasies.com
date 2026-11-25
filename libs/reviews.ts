// Real customer reviews from the Lasies Google Business profile.
// Copied by hand on 12.11.2026 – update the rating, count and quotes here
// whenever new reviews come in. Quotes are verbatim (opening sentences),
// names are shortened for privacy.

export const googleRating = {
  rating: 4.7,
  count: 20,
  url: "https://maps.google.com/?cid=11716222519110928136",
};

export const reviews: {
  author: string;
  /** Only what the review itself says; leave out if unclear. */
  occasion?: string;
  stars: number;
  text: string;
}[] = [
  {
    author: "Anas K.",
    occasion: "Hochzeit, ca. 120 Gäste",
    stars: 5,
    text: "Wir haben das Essen unsere Hochzeit mit ca. 120 Personen bei Lasies bestellt und es war einfach perfekt!",
  },
  {
    author: "Jens B.",
    occasion: "Live-Pizza-Service, 70 Gäste",
    stars: 5,
    text: "Wir hatten Lasies Catering Service am Samstag mit Live frischen Pizza Service für uns und unsere 70 Gäste und ausnahmslos ALLE waren begeistert.",
  },
  {
    author: "Sascha",
    stars: 5,
    text: "Wir sind absolut begeistert von der Arbeit von Tarek und seinem Team!",
  },
  {
    author: "Leni B.",
    occasion: "Sektempfang mit Fingerfood",
    stars: 5,
    text: "Wir haben bei Lasies Fingerfood für unseren Sektempfang bestellt! Das Essen war super und die Bestellung lief total unkompliziert ab",
  },
  {
    author: "Biggi",
    occasion: "Gartenparty, 30 Gäste",
    stars: 5,
    text: "Wir wurden bei unserer Gartenparty mit 30 Personen bestens bedient, Service, Qualität und Freundlichkeit sind hervorragend.",
  },
  {
    author: "Melanie G.",
    occasion: "Hochzeit, ca. 100 Gäste",
    stars: 5,
    text: "Hatten eine Hochzeit mit ca 100 Personen im August 2025. Absolut empfehlenswert!!!",
  },
];
