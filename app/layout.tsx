import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

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
  title: "Lasies Catering Service",
  description: "Lasies Catering Service in Bad Liebenzell-Möttlingen",
  keywords: keywords.join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <Script
          src="https://kit.fontawesome.com/307fd5a23b.js"
          crossOrigin="anonymous"
        ></Script>
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
            <p>Telefon: 07052 930 99 99</p>
            <p>Email: info@lasies.com</p>
          </div>
          <div>
            <h3 className="text-2xl">Öffnungszeiten</h3>
            <p>Montag bis Freitag: 9:00 - 18:00 Uhr</p>
            <p>Samstag: 9:00 - 14:00 Uhr</p>
            <p>Sonntag: Geschlossen</p>
          </div>

          <div>
            <h3 className="text-2xl">Social Media</h3>
            <div className="flex justify-center gap-4">
              <a href="https://www.instagram.com/lasies.catering.service/">
                <i className="fab fa-instagram w-4 h-4"></i>
              </a>
              <a href="https://www.facebook.com/lasies.catering.service">
                <i className="fab fa-facebook w-4 h-4"></i>
              </a>
              <a href="https://wa.me/4915738949296">
                <i className="fab fa-whatsapp w-4 h-4"></i>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
