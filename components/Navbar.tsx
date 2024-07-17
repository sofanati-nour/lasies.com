"use client";
import { cn } from "@/libs/utils";
// Navigation Bar

import { HomeIcon, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function LgNavbar() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="hidden md:block">
      <nav
        ref={ref}
        className={cn(
          "bg-[#f0ebdf] w-full flex justify-center items-center py-4 font-serif uppercase"
        )}
      >
        <Link
          className="border-r border-[#4d4f3f] px-6 text-[#4d4f3f] flex items-center"
          href={"/"}
          title="Startseite"
        >
          <HomeIcon size={18} className="inline mr-2" />
          <span>Startseite</span>
        </Link>
        <Link
          className="border-r  border-[#4d4f3f] px-6 text-[#4d4f3f]"
          href={"/menu"}
          title="Menü"
        >
          Menü
        </Link>
        <Link
          className="border-r  border-[#4d4f3f] px-6 text-[#4d4f3f]"
          href={"/galerie"}
          title="Galerie"
        >
          Galerie
        </Link>
        <Link
          className="border-r  border-[#4d4f3f] px-6 text-[#4d4f3f]"
          href={"/wichteges-und-wissenswertes"}
          title="Wichtiges & Wissenswertes"
        >
          Wichtiges & Wissenswertes
        </Link>
        <Link
          className="border-r  border-[#4d4f3f] px-6 text-[#4d4f3f]"
          href={"/"}
        >
          Blog
        </Link>
        <Link
          className=" px-6 text-[#4d4f3f]"
          href={"#kontakte"}
          title="Kontakte"
        >
          Kontakte
        </Link>
      </nav>
      <nav
        className={cn(
          "bg-[#f0ebdf] w-full flex justify-center items-center py-4 font-serif uppercase fixed left-0 top-0 z-50 transition",
          {
            "-translate-y-full": inView,
          }
        )}
      >
        <Link
          className="border-r border-[#4d4f3f] px-6 text-[#4d4f3f] flex items-center"
          href={"/"}
          title="Startseite"
        >
          <HomeIcon size={18} className="inline mr-2" />
          <span>Startseite</span>
        </Link>
        <Link
          className="border-r  border-[#4d4f3f] px-6 text-[#4d4f3f]"
          href={"/menu"}
          title="Menü"
        >
          Menü
        </Link>
        <Link
          className="border-r  border-[#4d4f3f] px-6 text-[#4d4f3f]"
          href={"/galerie"}
          title="Galerie"
        >
          Galerie
        </Link>
        <Link
          className="border-r  border-[#4d4f3f] px-6 text-[#4d4f3f]"
          href={"/wichteges-und-wissenswertes"}
          title="Wichtiges & Wissenswertes"
        >
          Wichtiges & Wissenswertes
        </Link>
        <Link
          className="border-r  border-[#4d4f3f] px-6 text-[#4d4f3f]"
          href={"/"}
        >
          Blog
        </Link>
        <Link
          className=" px-6 text-[#4d4f3f]"
          href={"#kontakte"}
          title="Kontakte"
        >
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

          <Link
            className="invert text-[#4d4f3f] flex items-center"
            href={
              "https://www.listando.de/baden-wuerttemberg/bad-liebenzell/WzS8jzQmtH/catering/lasies-catering-service-/CNGWSkIcw3"
            }
            target="_blank"
          >
            <Image
              src={"/listando-logo.webp"}
              alt=""
              width={18}
              height={18}
              className="inline mr-2 grayscale rounded-md"
            />
          </Link>
        </section>
      </header>
    </div>
  );
}

function SmNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });

  return (
    <>
      <div className="block md:hidden" ref={ref}>
        <div
          className={cn(
            "fixed top-0 left-0 bottom-0 right-0 bg-[#f0ebdf] z-50 transition",
            {
              "-translate-y-[100vh] opacity-50": !isMenuOpen,
            }
          )}
        >
          <nav className="flex flex-col justify-center items-center h-full relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute bottom-4 right-4"
              aria-label="Close Navigation Menu"
            >
              <i className="fas fa-times text-2xl text-[#4d4f3f]"></i>
            </button>
            <Link
              className="border-b border-[#4d4f3f] px-6 text-[#4d4f3f] py-4"
              href={"/"}
              onClick={() => setIsMenuOpen(false)}
              title="Startseite"
            >
              Startseite
            </Link>
            <Link
              className="border-b border-[#4d4f3f] px-6 text-[#4d4f3f] py-4"
              href={"/menu"}
              onClick={() => setIsMenuOpen(false)}
              title="Menü"
            >
              Menü
            </Link>
            <Link
              className="border-b border-[#4d4f3f] px-6 text-[#4d4f3f] py-4"
              href={"/galerie"}
              onClick={() => setIsMenuOpen(false)}
              title="Galerie"
            >
              Galerie
            </Link>
            <Link
              className="border-b border-[#4d4f3f] px-6 text-[#4d4f3f] py-4"
              href={"/"}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              className="border-b border-[#4d4f3f] px-6 text-[#4d4f3f] py-4"
              href={"#kontakte"}
              title="Kontakte"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakte
            </Link>
          </nav>
        </div>

        <header className="flex justify-between px-4 relative backdrop-blur text-[#f0ebdf]">
          <section className="flex flex-col justify-center items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </section>
          <section id="logo-header" className="w-full">
            <Image
              src={"/logo.png"}
              alt="Lasies"
              width={120}
              height={100}
              className=" mx-auto"
            />
          </section>
        </header>
      </div>

      <div
        className={cn(
          "md:hidden fixed top-0 left-0 w-full bg-[#f0ebdf] z-50 transition shadow",
          {
            "-translate-y-full": inView || isMenuOpen,
          }
        )}
      >
        <header className="flex justify-between px-4 backdrop-blur text-[#f0ebdf]">
          <section className="flex flex-col justify-center items-center">
            <button onClick={() => setIsMenuOpen(true)}>
              <i className="fas fa-bars text-2xl text-[#4d4f3f]"></i>
            </button>
          </section>
          <section id="logo-header" className="w-full">
            <Image
              src={"/logo.png"}
              alt="Lasies"
              width={120}
              height={32}
              className="mx-auto h-16 object-cover"
            />
          </section>
        </header>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <LgNavbar />
      <SmNavbar />
    </>
  );
}
