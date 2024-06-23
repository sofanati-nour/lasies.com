// Navigation Bar

import { HomeIcon, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#f0ebdf] w-full flex justify-center items-center py-4 font-serif uppercase">
        <Link
          className="border-r border-[#808369] px-6 text-[#808369] flex items-center"
          href={"/"}
          title="Startseite"
        >
          <HomeIcon size={18} className="inline mr-2" />
          <span>Startseite</span>
        </Link>
        <Link
          className="border-r  border-[#808369] px-6 text-[#808369]"
          href={"/"}
          title="Menü"
        >
          Menü
        </Link>
        <Link
          className="border-r  border-[#808369] px-6 text-[#808369]"
          href={"/"}
          title="Galerie"
        >
          Galerie
        </Link>
        <Link
          className="border-r  border-[#808369] px-6 text-[#808369]"
          href={"/"}
        >
          Blog
        </Link>
        <Link
          className="border-r  border-[#808369] px-6 text-[#808369] flex items-center"
          href={
            "https://www.listando.de/baden-wuerttemberg/bad-liebenzell/WzS8jzQmtH/catering/lasies-catering-service-/CNGWSkIcw3"
          }
          target="_blank"
        >
          <Image
            src={"/listando-logo.webp"}
            alt="Listando"
            width={18}
            height={18}
            className="inline mr-2 grayscale rounded-md"
          />
          Listando
        </Link>

        <Link className=" px-6 text-[#808369]" href={"/"} title="Kontakte">
          Kontakte
        </Link>
      </nav>
      <header className="grid grid-cols-3 relative backdrop-blur text-[#f0ebdf]">
        <section
          id="contact-details-header"
          className="flex justify-start pl-8 lg:justify-center lg:pl-0 items-center"
        >
          <address className=" flex flex-col sm:[all:unset]">
            <a href="tel:+4915738949296" className="flex items-center gap-2">
              <Phone size={14} />
              <span>+49 1573 8949296</span>
            </a>
            <a
              href="mailto:info@lasies.com"
              className="flex items-center gap-2"
            >
              <Mail size={14} />
              <span>info@lasies.com</span>
            </a>
            <a
              id="whatsapp"
              href="https://wa.me/4915738949296"
              className=" flex items-center gap-2"
            >
              <i className="fab fa-whatsapp w-4 h-4"></i>
              <span>WhatsApp</span>
            </a>
          </address>
        </section>
        <section id="logo-header" className="w-full">
          <Image
            src={"/logo.png"}
            alt="Lasies"
            width={180}
            height={130}
            className=" mx-auto"
          />
        </section>
        <section
          id="socials-header"
          className="flex justify-end lg:justify-center items-center gap-2 pr-8  lg:pl-0"
        >
          <Link
            href="https://www.instagram.com/lasies.catering.service/"
            title="Instagram"
          >
            <i className="fab fa-instagram w-4 h-4"></i>
          </Link>
          <Link
            href="https://www.instagram.com/lasies.catering.service/"
            title="Facebook"
          >
            <i className="fab fa-facebook w-4 h-4"></i>
          </Link>
          <Link href="https://wa.me/4915738949296" title="WhatsApp">
            <i className="fab fa-whatsapp w-4 h-4"></i>
          </Link>
        </section>
      </header>
    </>
  );
}
