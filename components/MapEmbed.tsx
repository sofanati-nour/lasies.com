"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { site } from "@/libs/site";
import { googleRating } from "@/libs/reviews";

const query = encodeURIComponent(`${site.name}, ${site.street}, ${site.city}`);

/**
 * Google Maps loads only after a click (two-click solution): until then no
 * data goes to Google. See section 7 of the privacy policy.
 */
export default function MapEmbed({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={className}>
      <div className="relative h-56 overflow-hidden rounded-2xl bg-olive-950/60 ring-1 ring-white/10">
        {loaded ? (
          <iframe
            title={`Karte: ${site.name}, ${site.street}, ${site.city}`}
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <MapPin size={28} className="text-gold" aria-hidden />
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="btn-gold !px-5 !py-2.5 text-sm"
            >
              Karte anzeigen
            </button>
            <p className="max-w-xs text-xs leading-relaxed text-cream/60">
              Beim Laden der Karte werden Daten an Google übertragen.{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-2 hover:text-gold-light"
              >
                Datenschutz
              </Link>
            </p>
          </div>
        )}
      </div>
      <a
        href={googleRating.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-2 py-1 text-sm font-semibold text-gold-light hover:text-gold"
      >
        <Navigation size={14} aria-hidden /> Route in Google Maps planen
      </a>
    </div>
  );
}
