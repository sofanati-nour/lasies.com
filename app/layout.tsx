import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <script
          src="https://kit.fontawesome.com/307fd5a23b.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${inter.className} ${merriweather.className} container mx-auto`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
