"use client";
import { cn } from "@/libs/utils";
import { navLinks, site } from "@/libs/site";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const logoStyle = { objectPosition: "center 58%", aspectRatio: "2 / 1" };

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens on a dark photo band, so the bar starts transparent
  // with light text and turns solid once the visitor scrolls.
  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-olive-900/95 shadow-lg shadow-black/10 backdrop-blur-md"
            : "bg-gradient-to-b from-black/50 to-transparent"
        )}
      >
        <div
          className={cn(
            "container-x flex items-center justify-between gap-6 transition-all duration-300",
            scrolled ? "h-16" : "h-20"
          )}
        >
          <Link href="/" className="shrink-0" aria-label="Lasies – Startseite">
            <Image
              src="/logo.png"
              alt="Lasies"
              width={500}
              height={250}
              priority
              className={cn(
                "w-auto object-cover transition-all duration-300",
                scrolled ? "h-14" : "h-[4.5rem]"
              )}
              style={logoStyle}
            />
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const active =
                  !link.href.includes("#") && pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative py-2 text-sm font-medium tracking-wide text-white/85 transition hover:text-white",
                        "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100",
                        active && "text-white after:scale-x-100"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white xl:flex"
            >
              <Phone size={16} className="text-gold" />
              {site.phone}
            </a>
            <Link
              href="/#kontakt"
              className="btn-gold hidden !py-2.5 sm:inline-flex"
            >
              Angebot anfragen
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
              aria-label="Menü öffnen"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-olive-950 text-cream transition duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Image
            src="/logo.png"
            alt="Lasies"
            width={500}
            height={250}
            className="h-[4.5rem] w-auto object-cover"
            style={logoStyle}
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-white/10"
            aria-label="Menü schließen"
          >
            <X size={26} />
          </button>
        </div>
        <nav className="container-x flex flex-1 flex-col justify-center">
          <ul className="space-y-1">
            {[{ href: "/", label: "Startseite" }, ...navLinks].map(
              (link, i) => (
                <li
                  key={link.href}
                  className={cn(open && "animate-fade-up")}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-4xl text-cream transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="container-x space-y-4 border-t border-white/10 py-8">
          <Link
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="btn-gold w-full"
          >
            Angebot anfragen
          </Link>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
