"use client";
import { cn } from "@/libs/utils";
import { navLinks, site } from "@/libs/site";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";


export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  // Set when the menu closes because a link was chosen.
  const navigatingTo = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // A native modal dialog keeps keyboard focus inside the menu, makes the
  // page behind it inert and closes on Escape. Focus returns to the menu
  // button afterwards.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
    if (!open) return;
    // Lock page scrolling while the menu is open.
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The mobile menu is hidden at the desktop breakpoint: close it there so
  // the page never stays inert behind an invisible dialog.
  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [open]);

  const onDialogClose = () => {
    setOpen(false);
    // Closed with Escape or the close button: back to the menu button.
    // (After a link, `navigate` takes care of focus instead.)
    if (!navigatingTo.current) openerRef.current?.focus();
    navigatingTo.current = null;
  };

  const navigate = (href: string) => {
    navigatingTo.current = href;
    setOpen(false);
    // For an in-page section, continue keyboard navigation from there
    // rather than from the top of the page.
    const hash = href.split("#")[1];
    if (hash) {
      setTimeout(
        () => document.getElementById(hash)?.focus({ preventScroll: true }),
        50
      );
    }
  };

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
              width={2000}
              height={839}
              sizes="200px"
              preload
              loading="eager"
              className={cn(
                "w-auto transition-all duration-300",
                scrolled
                  ? "h-9 min-[360px]:h-10 sm:h-12"
                  : "h-10 min-[360px]:h-12 sm:h-[3.75rem]"
              )}
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

          <div className="flex items-center gap-1 sm:gap-3">
            <a
              href={site.phoneHref}
              className="grid h-11 w-10 place-items-center rounded-full text-white transition hover:bg-white/10 sm:w-11 xl:hidden"
              aria-label={`Anrufen: ${site.phone}`}
            >
              <Phone size={20} aria-hidden />
            </a>
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white xl:flex"
            >
              <Phone size={16} className="text-gold" aria-hidden />
              {site.phone}
            </a>
            <Link
              href="/#anfrage"
              className="btn-gold !px-4 !py-2.5 text-xs sm:hidden"
            >
              Anfragen
            </Link>
            <Link
              href="/#anfrage"
              className="btn-gold hidden !py-2.5 sm:inline-flex"
            >
              Angebot anfragen
            </Link>
            <button
              ref={openerRef}
              type="button"
              onClick={() => {
                navigatingTo.current = null;
                setOpen(true);
              }}
              className="grid h-11 w-10 place-items-center rounded-full text-white transition hover:bg-white/10 sm:w-11 lg:hidden"
              aria-label="Menü öffnen"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-haspopup="dialog"
            >
              <MenuIcon size={24} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        id="mobile-nav"
        aria-label="Navigation"
        onClose={onDialogClose}
        className="dialog-screen bg-olive-950 text-cream open:flex open:flex-col lg:hidden"
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Image
            src="/logo.png"
            alt=""
            width={2000}
            height={839}
            sizes="200px"
            className="h-[3.75rem] w-auto"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-white/10"
            aria-label="Menü schließen"
            autoFocus
          >
            <X size={26} aria-hidden />
          </button>
        </div>
        <nav
          aria-label="Hauptnavigation mobil"
          className="container-x flex flex-1 flex-col justify-center"
        >
          <ul className="space-y-1">
            {[{ href: "/", label: "Startseite" }, ...navLinks].map(
              (link, i) => {
                const active =
                  !link.href.includes("#") &&
                  (link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href));
                return (
                <li
                  key={link.href}
                  className={cn(open && "animate-fade-up")}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => navigate(link.href)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block py-2 font-display text-4xl transition hover:text-gold",
                      active ? "text-gold-light" : "text-cream"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
                );
              }
            )}
          </ul>
        </nav>
        <div className="container-x space-y-4 border-t border-white/10 py-8">
          <Link
            href="/#anfrage"
            onClick={() => navigate("/#anfrage")}
            className="btn-gold w-full"
          >
            Angebot anfragen
          </Link>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/75">
            <a href={site.phoneHref} className="py-1 hover:text-gold-light">
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="py-1 hover:text-gold-light"
            >
              {site.email}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
