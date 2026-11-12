import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CSPostHogProvider } from "./providers";
import ConsentBanner from "@/components/ConsentBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
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
    <html lang="de" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
          id="json-ld"
        />
        <Script
          id="gtag-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });
              gtag('js', new Date());
              gtag('config', 'AW-18091080306');
            `,
          }}
        />
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18091080306"
        />
      </head>
      <CSPostHogProvider>
        <body className={`${inter.variable} ${fraunces.variable}`}>
          <Header />
          {children}
          <Footer />
          <Analytics />
          <ConsentBanner />
        </body>
      </CSPostHogProvider>
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
  }
}`;
