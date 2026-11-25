import { navLinks, site } from "@/libs/site";
import { occasionPages, townPages } from "@/libs/landingPages";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export default function Footer() {
  return (
    <footer className="bg-olive-950 text-cream/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <Image
            src="/logo.png"
            alt="Lasies Catering Service"
            width={2000}
            height={839}
            sizes="240px"
            className="h-20 w-auto"
          />
          <p className="max-w-xs text-sm leading-relaxed">
            Catering, Partyservice und Front-Cooking aus Bad Liebenzell –
            frisch zubereitet für Ihre Feste in Calw, Leonberg und im
            Großraum Stuttgart.
          </p>
          <div className="flex gap-3">
            <SocialLink href={site.instagram} label="Instagram">
              <Instagram size={18} aria-hidden />
            </SocialLink>
            <SocialLink href={site.whatsapp} label="WhatsApp">
              <MessageCircle size={18} aria-hidden />
            </SocialLink>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-cream">Entdecken</h2>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog/catering-tipps-bad-liebenzell-moettlingen"
                className="transition hover:text-gold"
              >
                Ratgeber: Catering-Tipps
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-cream">Kontakt</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition hover:text-gold"
              >
                <Phone size={16} className="shrink-0 text-gold" aria-hidden />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition hover:text-gold"
              >
                <Mail size={16} className="shrink-0 text-gold" aria-hidden />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <address className="not-italic">
                {site.street}
                <br />
                {site.city}
              </address>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-cream">
            Ihr Fest planen
          </h2>
          <p className="mb-5 text-sm leading-relaxed">
            Erzählen Sie uns von Ihrer Veranstaltung – wir erstellen Ihnen gerne
            ein unverbindliches Angebot.
          </p>
          <Link href="/#anfrage" className="btn-gold">
            Angebot anfragen
          </Link>
        </div>
      </div>

      <nav
        aria-label="Einzugsgebiet und Anlässe"
        className="border-t border-white/10"
      >
        <div className="container-x grid gap-8 py-10 md:grid-cols-2">
          <FooterLinks title="Catering in Ihrer Nähe" pages={townPages} />
          <FooterLinks title="Anlässe & Angebote" pages={occasionPages} />
        </div>
      </nav>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 [&_a]:inline-block [&_button]:inline-block">
            <li>
              <Link href="/impressum" className="py-1 transition hover:text-gold">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="py-1 transition hover:text-gold">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link
                href="/wichtiges-und-wissenswertes#bedingungen"
                className="py-1 transition hover:text-gold"
              >
                Geschäftsbedingungen
              </Link>
            </li>
            <li>
              <CookieSettingsButton className="py-1 transition hover:text-gold" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  pages,
}: {
  title: string;
  pages: { slug: string; nav: string }[];
}) {
  return (
    <div>
      <h2 className="mb-4 font-display text-lg text-cream">{title}</h2>
      <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
        {pages.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/${p.slug}`}
              className="inline-block py-1.5 transition hover:text-gold"
            >
              {p.nav}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (öffnet in neuem Tab)`}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream transition hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}
