"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "lasies-consent-v1";

type ConsentChoice = "granted" | "denied";

function updateConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return;
  // @ts-ignore
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === "granted") {
      updateConsent("granted");
    }
  }, []);

  const handle = (choice: ConsentChoice) => {
    localStorage.setItem(STORAGE_KEY, choice);
    updateConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#4d4f3f] text-[#c4c7ae] p-4 md:p-6 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 text-sm">
          <p>
            Wir verwenden Cookies und ähnliche Technologien, um unsere Website
            und unsere Dienstleistungen zu verbessern und Werbung auf Ihre
            Interessen abzustimmen. Mit Klick auf „Akzeptieren&ldquo; stimmen Sie der
            Nutzung zu. Weitere Informationen finden Sie in unserer{" "}
            <a href="/impressum" className="underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => handle("denied")}
            className="px-4 py-2 border border-[#c4c7ae] text-[#c4c7ae] hover:bg-[#c4c7ae] hover:text-[#4d4f3f] transition text-sm"
          >
            Ablehnen
          </button>
          <button
            onClick={() => handle("granted")}
            className="px-4 py-2 bg-[#c4c7ae] text-[#4d4f3f] hover:opacity-90 transition text-sm font-medium"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
