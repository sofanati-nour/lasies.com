"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, Info } from "lucide-react";
import {
  Menus,
  type Menu,
  type MenuItem,
  type MenuSection,
} from "@/libs/menuData";
import { cn, slugify } from "@/libs/utils";

const currency = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

const slugs = Menus.map((m) => slugify(m.name));

/** Tab text: drop a quoted subtitle so the tab bar stays compact
 *  ("Hochzeitsbuffet „Das glückliche Ehepaar“" → "Hochzeitsbuffet"). */
const tabLabel = (name: string) => name.replace(/\s*„[^“]*“$/, "");

// Deep links that still point at a buffet's previous name.
const legacySlugs: Record<string, string> = {
  "die-gluecklichen-ehepaar": slugify("Hochzeitsbuffet „Das glückliche Ehepaar“"),
};

/**
 * All buffets are rendered into the HTML (inactive ones `hidden`), so
 * search engines and AI assistants can read the whole menu. The tab list
 * follows the WAI-ARIA tabs pattern: arrow keys, Home and End move between
 * buffets, and only the active tab is in the Tab order.
 */
export default function MenuBrowser() {
  const [index, setIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLElement>(null);

  // Deep links like /menu#grill-buffet open that buffet directly.
  useEffect(() => {
    const fromHash = () => {
      const raw = decodeURIComponent(window.location.hash.slice(1));
      const i = slugs.indexOf(legacySlugs[raw] ?? raw);
      if (i < 0) return;
      setIndex(i);
      // Bring the chosen buffet into view, starting at the sticky tab bar.
      tabsRef.current?.scrollIntoView({ block: "start" });
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    // Keep the active tab centred in the scrollable bar (horizontal only,
    // so the page itself never jumps).
    const bar = tabsRef.current;
    const tab = bar?.querySelector<HTMLElement>(`[data-index="${index}"]`);
    if (bar && tab) {
      bar.scrollTo({
        left: tab.offsetLeft - bar.clientWidth / 2 + tab.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [index]);

  const select = (i: number, focus = false) => {
    setIndex(i);
    history.replaceState(null, "", `#${slugs[i]}`);
    if (focus) document.getElementById(`tab-${slugs[i]}`)?.focus();
    // If the visitor had scrolled into the previous buffet, start the new
    // one at its heading (just below the sticky tab bar).
    const panels = panelsRef.current;
    if (panels && panels.getBoundingClientRect().top < 0) {
      panels.scrollIntoView({ block: "start" });
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = Menus.length - 1;
    const target =
      e.key === "ArrowRight"
        ? index === last ? 0 : index + 1
        : e.key === "ArrowLeft"
        ? index === 0 ? last : index - 1
        : e.key === "Home"
        ? 0
        : e.key === "End"
        ? last
        : null;
    if (target === null) return;
    e.preventDefault();
    select(target, true);
  };

  return (
    <>
      {/* Sticky only where there is height to spare (not on landscape phones
          or heavily zoomed windows) – see .menu-tabbar in globals.css. */}
      <div className="menu-tabbar sticky top-16 z-30 border-b border-olive-900/10 bg-cream/90 backdrop-blur-md">
        <div className="container-x relative">
          {/* Fade at the right edge hints that more buffets scroll in. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent md:hidden"
          />
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Buffets"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 py-4 [scrollbar-width:none] sm:mx-0 sm:px-0 md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden"
          >
            {Menus.map((m, i) => (
              <button
                key={m.name}
                id={`tab-${slugs[i]}`}
                type="button"
                role="tab"
                data-index={i}
                aria-selected={i === index}
                aria-controls={`panel-${slugs[i]}`}
                tabIndex={i === index ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={onKeyDown}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition",
                  i === index
                    ? "bg-olive-900 text-cream shadow-md"
                    : "bg-cream-light text-olive-900 ring-1 ring-olive-900/50 hover:ring-olive-900"
                )}
              >
                {tabLabel(m.name)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section ref={panelsRef} className="py-14 sm:py-20" aria-label="Speisen">
        {Menus.map((menu, i) => (
          <MenuPanel
            key={menu.name}
            menu={menu}
            slug={slugs[i]}
            active={i === index}
            showPrices={i === 0}
          />
        ))}
      </section>
    </>
  );
}

function MenuPanel({
  menu,
  slug,
  active,
  showPrices,
}: {
  menu: Menu;
  slug: string;
  active: boolean;
  // Per-item prices are only published for Fingerfood.
  showPrices: boolean;
}) {
  const loose = menu.items.filter((i): i is MenuItem => i.type === "MenuItem");
  const sections = menu.items.filter(
    (i): i is MenuSection => i.type === "MenuSection"
  );
  const min = menu.minimumOrder;

  return (
    <div
      id={`panel-${slug}`}
      role="tabpanel"
      aria-labelledby={`tab-${slug}`}
      tabIndex={0}
      hidden={!active}
      className={cn("container-x", active && "animate-fade-up")}
    >
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-col gap-4 border-b border-olive-900/10 pb-8 text-center">
          <p className="eyebrow justify-center">Buffet</p>
          <h2 className="hyphens-auto font-display text-[2rem] text-olive-900 [overflow-wrap:anywhere] min-[400px]:text-4xl sm:text-6xl">
            {menu.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 font-medium text-gold-dark">
              <Info size={14} aria-hidden className="hidden shrink-0 sm:block" />
              {min.description ??
                (min.buffetPrice
                  ? `Ab ${min.total} Personen`
                  : `Mindestbestellmenge: ${min.total} Portionen`)}
            </span>
            {min.perType && min.unit && (
              <span className="rounded-full bg-cream-dark px-4 py-1.5 text-olive-900">
                {min.perType} {min.unit} pro Portion
              </span>
            )}
          </div>
        </header>

        {loose.length > 0 && <ItemGrid items={loose} showPrices={showPrices} />}

        {sections.map((section, s) => (
          <div key={section.name || s} className="mt-12">
            {section.name && (
              <h3 className="flex items-center gap-4 font-display text-2xl text-olive-900 sm:text-3xl">
                <span className="h-px w-8 bg-gold" aria-hidden />
                {section.name}
                <span className="h-px flex-1 bg-olive-900/10" aria-hidden />
              </h3>
            )}
            {section.description && (
              <p className="mt-3 text-sm text-ink-muted">
                {section.description}
              </p>
            )}
            <ItemGrid
              items={section.items as MenuItem[]}
              showPrices={showPrices}
            />
          </div>
        ))}

        <p className="mt-12 text-center text-sm text-ink-muted">
          {showPrices
            ? "Alle Preise inkl. gesetzlicher MwSt. "
            : "Preis auf Anfrage: Wir erstellen Ihnen ein individuelles Angebot – abhängig von Gästezahl, Auswahl und gewünschten Leistungen. "}
          Getränke servieren wir Ihnen gerne nach Wunsch.
        </p>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-olive-900 p-8 text-cream sm:flex-row sm:p-10">
          <div>
            <p className="font-display text-2xl sm:text-3xl">
              Appetit bekommen?
            </p>
            <p className="mt-1 text-cream/75">
              Wir passen jedes Buffet gerne an Ihre Wünsche und Ihre
              Gästezahl an.
            </p>
          </div>
          <Link
            href={`/?buffet=${encodeURIComponent(menu.name)}#anfrage`}
            className="btn-gold shrink-0"
          >
            Angebot anfragen <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ItemGrid({
  items,
  showPrices,
}: {
  items: MenuItem[];
  showPrices: boolean;
}) {
  return (
    <ul className="mt-6 grid gap-x-12 sm:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={item.name + i}
          className="flex items-baseline gap-3 border-b border-dashed border-olive-900/10 py-4"
        >
          <div className="min-w-0 flex-1">
            <p className="font-medium text-olive-900">{item.name}</p>
            {item.description && (
              <p className="mt-0.5 text-sm text-ink-muted">
                {item.description}
              </p>
            )}
          </div>
          {showPrices && (
            <p className="shrink-0 font-display text-lg text-gold-dark">
              {currency.format(item.updatedPrice ?? item.price)}
              {item.unit && (
                <span className="ml-1 font-sans text-xs text-ink-muted">
                  / {item.unit}
                </span>
              )}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
