import { navLinks, site } from "@/libs/site";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-olive-950 text-cream/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <Image
            src="/logo.png"
            alt="Lasies"
            width={500}
            height={250}
            className="-ml-3 h-24 w-auto object-cover"
            style={{ objectPosition: "center 58%", aspectRatio: "2 / 1" }}
          />
          <p className="max-w-xs text-sm leading-relaxed">
            Catering, Partyservice und Front-Cooking aus Bad Liebenzell –
            frisch zubereitet für Ihre Feste in {site.area}.
          </p>
          <div className="flex gap-3">
            <SocialLink href={site.instagram} label="Instagram">
              <Instagram size={18} />
            </SocialLink>
            <SocialLink href={site.whatsapp} label="WhatsApp">
              <MessageCircle size={18} />
            </SocialLink>
            <SocialLink href={site.listando} label="Lasies auf Listando">
              <Image
                src="/listando-logo.webp"
                alt=""
                width={18}
                height={18}
                className="rounded grayscale"
              />
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
                <Phone size={16} className="shrink-0 text-gold" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition hover:text-gold"
              >
                <Mail size={16} className="shrink-0 text-gold" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>
                {site.street}
                <br />
                {site.city}
              </span>
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
          <Link href="/#kontakt" className="btn-gold">
            Angebot anfragen
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition hover:text-gold">
              Impressum
            </Link>
            <Link
              href="/wichteges-und-wissenswertes"
              className="transition hover:text-gold"
            >
              Geschäftsbedingungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
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
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream transition hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}
