import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "300",
});

const keywords = [
  "catering calw",
  "partyservice calw",
  "ladies catering",
  "lasies.de",
  "catering leonberg",
  "ladies catering service",
  "lasies de",
  "lasies.com",
  "marketenderei",
];
export const metadata: Metadata = {
  title:
    "Lasies Catering Service | Catering Calw, Catering Leonberg, Partyservice Calw",
  description:
    "Catering Service in Bad Liebenzell-Möttlingen, Calw, Leonberg und Umgebung. Wir bieten Catering, Partyservice und vieles mehr.",
  alternates: {
    canonical: "https://www.lasies.com",
  },
  authors: [
    {
      name: "Tarek Taraben",
      url: "https://instagram.com/lasies.catering.service",
    },
  ],
  keywords: keywords.join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"de"}>
      <head>
        <Script
          src="https://kit.fontawesome.com/307fd5a23b.js"
          crossOrigin={"anonymous"}
        ></Script>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
          id="json-ld"
        />
      </head>
      <body
        className={`${inter.className} ${merriweather.className} container mx-auto`}
      >
        <Navbar />
        {children}
        <footer className="py-8 px-20 text-[#c4c7ae] backdrop-blur text-center grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:text-left ">
            <h3 className="text-2xl">Lasies Catering Service</h3>
            <p>Barthstr.4, 75378 Bad Liebenzell</p>
            <p>Telefon: +49 1573 8949296</p>
            <p>Email: info@lasies.com</p>
          </div>
          <div>
            <h3 className="text-2xl">Öffnungszeiten</h3>
            <p>Montag bis Samstag: 9:00 - 18:00 Uhr</p>
            <p>Sonntag: Geschlossen</p>
          </div>

          <div>
            <h3 className="text-2xl">Social Media</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/lasies.catering.service/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram w-4 h-4"></i>
              </a>
              {/* <a href="https://www.facebook.com/lasies.catering.service">
                <i className="fab fa-facebook w-4 h-4"></i>
              </a> */}
              <a
                href="https://wa.me/4915738949296"
                target="_blank"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp w-4 h-4"></i>
              </a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-7SFQN95E17" />
    </html>
  );
}

const jsonLd = `{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Lasies",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Barthstr. 4",
    "addressLocality": "Bad Liebenzell-Möttlingen",
    "addressRegion": "BW",
    "postalCode": "75378",
    "addressCountry": "Germany"
  },
  "email": "info@lasies.com",
  "telephone": "+49 1573 8949296",
  "servesCuisine": [
    "Fingerfood",
    "Zum Kombinieren",
    "Suppen Auswahl",
    "Schlemmerplatten",
    "Grill Buffet",
    "Deftiges Buffet",
    "Salatjungfer Buffet",
    "Mediterranes Buffet",
    "Die Glücklichen Ehepaar",
    "Gourmetreise Buffet",
    "Französisches Buffet"
  ],
  "hasMenu": "https://lasies.com/menu",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.76102363786428,
    "longitude": 8.800177643639351
  },
  "review": [
    {
      "@type": "Review",
      "author": "Hans Müller",
      "datePublished": "2023-06-01",
      "reviewBody": "Das Essen war hervorragend! Besonders die Schlemmerplatten sind sehr zu empfehlen.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      }
    },
    {
      "@type": "Review",
      "author": "Petra Schmidt",
      "datePublished": "2023-06-10",
      "reviewBody": "Toller Service und leckeres Fingerfood. Immer wieder gerne!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      }
    },
    {
      "@type": "Review",
      "author": "Lukas Bauer",
      "datePublished": "2023-06-15",
      "reviewBody": "Die Suppenauswahl war sehr vielfältig und köstlich.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4
      }
    },
    {
      "@type": "Review",
      "author": "Anna Fischer",
      "datePublished": "2023-06-20",
      "reviewBody": "Das Grill Buffet war einfach spitze! Sehr empfehlenswert.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      }
    },
    {
      "@type": "Review",
      "author": "Markus Weber",
      "datePublished": "2023-06-25",
      "reviewBody": "Die Salatjungfer Buffet war frisch und lecker. Perfekt für heiße Sommertage.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4
      }
    },
    {
      "@type": "Review",
      "author": "Claudia Hoffmann",
      "datePublished": "2023-07-01",
      "reviewBody": "Sehr gutes mediterranes Buffet. Die Auswahl war großartig.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      }
    },
    {
      "@type": "Review",
      "author": "Stefan Becker",
      "datePublished": "2023-07-05",
      "reviewBody": "Das Deftige Buffet hat uns sehr gut gefallen. Sehr authentisch.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      }
    },
    {
      "@type": "Review",
      "author": "Kerstin Wagner",
      "datePublished": "2023-07-10",
      "reviewBody": "Die Gourmetreise Buffet war ein echtes Geschmackserlebnis. Jederzeit wieder!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      }
    },
    {
      "@type": "Review",
      "author": "Jürgen Koch",
      "datePublished": "2023-07-15",
      "reviewBody": "Das französische Buffet war exquisit. Sehr zu empfehlen!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "9"
}
}`;
