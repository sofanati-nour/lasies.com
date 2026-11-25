import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { CSPostHogProvider } from "./providers";
import ConsentBanner from "@/components/ConsentBanner";
import JsonLd from "@/components/JsonLd";
import { motionInitScript } from "@/libs/motion";
import { businessSchema } from "@/libs/schema";
import { pageMetadata } from "@/libs/metadata";
import { site } from "@/libs/site";
import { ADS_ID, GA_ID } from "@/libs/analytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  style: ["normal", "italic"],
});
// Only "F" and "f" (from Source Serif 4, see app/fonts/LICENSE.txt): they
// replace Fraunces' versions of these two letters in every display heading.
// No fallback, so all other characters fall through to Fraunces.
const displayF = localFont({
  src: [
    { path: "./fonts/lasies-f-normal.woff2", style: "normal", weight: "200 900" },
    { path: "./fonts/lasies-f-italic.woff2", style: "italic", weight: "200 900" },
  ],
  variable: "--font-display-f",
  fallback: [],
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+0046, U+0066" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({
    title: "Catering & Partyservice Bad Liebenzell, Calw | Lasies",
    description:
      "Catering aus Bad Liebenzell für Hochzeiten, Firmen- und Familienfeiern in Calw, Leonberg & Stuttgart: Buffets, Fingerfood, Front-Cooking, Steinofen-Pizza.",
    path: "/",
  }),
  applicationName: site.name,
  authors: [{ name: site.owner, url: site.instagram }],
  keywords: [
    "Catering Calw",
    "Partyservice Calw",
    "Catering Leonberg",
    "Catering Bad Liebenzell",
    "Hochzeitscatering",
    "Fingerfood Catering",
    "Steinofen-Pizza Catering",
  ],
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#1B2419",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${fraunces.variable} ${displayF.variable}`}
      // data-motion may be set by the inline script before hydration.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionInitScript }} />
        {/* Consent Mode default: everything denied. The gtag.js loader
            itself is only added by the consent banner after the visitor
            accepts; until then these calls just wait in dataLayer. */}
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
              gtag('config', '${ADS_ID}');
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </head>
      <CSPostHogProvider>
        <body>
          <a href="#inhalt" className="skip-link">
            Zum Inhalt springen
          </a>
          <ConsentBanner />
          <JsonLd data={businessSchema()} />
          <Header />
          <div
            id="inhalt"
            tabIndex={-1}
            className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            {children}
          </div>
          <Footer />
          <Analytics />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
