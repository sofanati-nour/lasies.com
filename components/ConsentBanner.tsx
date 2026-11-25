"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { GA_LOADER_SRC } from "@/libs/analytics";
import { CONSENT_STORAGE_KEY } from "@/libs/consent";
import { startPostHog, stopPostHog } from "@/app/providers";

const STORAGE_KEY = CONSENT_STORAGE_KEY;

/** Event the footer's "Cookie-Einstellungen" button fires to reopen us. */
export const OPEN_CONSENT_EVENT = "lasies:open-consent";

type ConsentChoice = "granted" | "denied";

/** Google's script is only loaded once the visitor has agreed. */
function loadGoogleTag() {
  if (document.getElementById("gtag-src")) return;
  const script = document.createElement("script");
  script.id = "gtag-src";
  script.async = true;
  script.src = GA_LOADER_SRC;
  document.head.appendChild(script);
}

function updateConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return;
  // @ts-ignore – defined by the inline consent script in the layout
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
  if (choice === "granted") {
    loadGoogleTag();
    void startPostHog();
  } else {
    stopPostHog();
  }
}

function readStoredConsent(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribeToStorage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

// The server can't see localStorage, so it renders the banner as for a
// first visit: it is in the HTML and shows without waiting for JavaScript.
// For visitors who already chose, libs/consent.ts hides it before the first
// paint, and after hydration the stored choice removes it from the page.
const getServerSnapshot = () => null;

export default function ConsentBanner() {
  const stored = useSyncExternalStore(
    subscribeToStorage,
    readStoredConsent,
    getServerSnapshot
  );
  const [dismissed, setDismissed] = useState(false);
  const [reopened, setReopened] = useState(false);
  const visible = reopened || (!stored && !dismissed);
  const bannerRef = useRef<HTMLElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  // Apply the stored choice – also when it changes in another tab.
  useEffect(() => {
    if (stored === "granted" || stored === "denied") updateConsent(stored);
  }, [stored]);

  useEffect(() => {
    const reopen = () => {
      // Lift the pre-paint "already chosen" hiding (see libs/consent.ts).
      delete document.documentElement.dataset.consent;
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setReopened(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  // When reopened from the footer, move focus into the banner.
  useEffect(() => {
    if (reopened) bannerRef.current?.focus();
  }, [reopened]);

  // Reserve space at the bottom of the page while the banner is shown, so
  // it never covers focused links or buttons (WCAG 2.4.11).
  useLayoutEffect(() => {
    const banner = bannerRef.current;
    if (!visible || !banner) return;
    const apply = () => {
      const h = `${banner.offsetHeight}px`;
      document.body.style.paddingBottom = h;
      document.documentElement.style.scrollPaddingBottom = h;
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(banner);
    return () => {
      observer.disconnect();
      document.body.style.paddingBottom = "";
      document.documentElement.style.scrollPaddingBottom = "";
    };
  }, [visible]);

  const handle = (choice: ConsentChoice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {}
    updateConsent(choice);
    setDismissed(true);
    setReopened(false);
    // Back to where the visitor was (e.g. "Cookie-Einstellungen").
    returnFocusRef.current?.focus();
    returnFocusRef.current = null;
  };

  if (!visible) return null;

  const current =
    stored === "granted"
      ? "Aktuell: eingewilligt."
      : stored === "denied"
      ? "Aktuell: abgelehnt."
      : null;

  return (
    <section
      ref={bannerRef}
      tabIndex={-1}
      aria-labelledby="consent-title"
      data-consent-banner=""
      className="fixed inset-x-0 bottom-0 z-50 max-h-[40dvh] overflow-y-auto overscroll-contain border-t border-white/10 bg-olive-950/95 text-cream shadow-2xl outline-none backdrop-blur-md"
    >
      <div className="container-x flex flex-col gap-4 py-5 md:flex-row md:items-center md:gap-8">
        <div className="flex-1 text-sm leading-relaxed text-cream/85">
          <h2 id="consent-title" className="font-semibold text-cream">
            Ihre Datenschutz-Einstellungen
          </h2>
          <p className="mt-1">
            Mit Ihrer Einwilligung messen wir mit Google Analytics, Google Ads
            und PostHog, wie unsere Website genutzt wird, und verbessern so
            unsere Werbung. Ohne Einwilligung laden wir diese Dienste nicht.
            Sie können Ihre Wahl jederzeit über „Cookie-Einstellungen“ im
            Fußbereich ändern. Mehr in unserer{" "}
            <Link
              href="/datenschutz"
              className="font-semibold text-gold-light underline underline-offset-2"
            >
              Datenschutzerklärung
            </Link>
            .{current && <> {current}</>}
          </p>
        </div>
        {/* Both choices get the same visual weight. */}
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handle("denied")}
            aria-pressed={stored === "denied"}
            className="btn border border-cream/70 bg-cream !px-5 !py-2.5 text-olive-950 hover:bg-white"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => handle("granted")}
            aria-pressed={stored === "granted"}
            className="btn border border-cream/70 bg-cream !px-5 !py-2.5 text-olive-950 hover:bg-white"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </section>
  );
}
