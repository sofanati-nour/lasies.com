"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { Menus, type MenuItem, type MenuSection } from "@/libs/menuData";
import { cn, slugify } from "@/libs/utils";

const currency = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export default function MenuBrowser() {
  const [index, setIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Deep links like /menu#grill-buffet open that buffet directly.
  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      const i = Menus.findIndex((m) => slugify(m.name) === slug);
      if (i >= 0) setIndex(i);
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

  const select = (i: number) => {
    setIndex(i);
    history.replaceState(null, "", `#${slugify(Menus[i].name)}`);
  };

  const menu = Menus[index];
  // Per-item prices are only published for Fingerfood.
  const showPrices = index === 0;
  const loose = menu.items.filter((i): i is MenuItem => i.type === "MenuItem");
  const sections = menu.items.filter(
    (i): i is MenuSection => i.type === "MenuSection"
  );

  return (
    <>
      <div className="sticky top-16 z-30 border-b border-olive-900/10 bg-cream/90 backdrop-blur-md">
        <div className="container-x relative">
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Buffets"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 py-4 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden"
          >
            {Menus.map((m, i) => (
              <button
                key={m.name}
                type="button"
                role="tab"
                data-index={i}
                aria-selected={i === index}
                aria-controls="menu-panel"
                onClick={() => select(i)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition",
                  i === index
                    ? "bg-olive-900 text-cream shadow-md"
                    : "bg-cream-light text-olive-900 ring-1 ring-olive-900/10 hover:ring-gold"
                )}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-14 sm:py-20">
        <div
          id="menu-panel"
          role="tabpanel"
          key={menu.name}
          className="container-x animate-fade-up"
        >
          <div className="mx-auto max-w-5xl">
            <header className="flex flex-col gap-4 border-b border-olive-900/10 pb-8 text-center">
              <p className="eyebrow justify-center">Buffet</p>
              <h2 className="font-display text-4xl text-olive-900 sm:text-6xl">
                {menu.name}
              </h2>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 font-medium text-gold-dark">
                  <Info size={14} />
                  {menu.minimumOrder.description ??
                    `Mindestbestellmenge ${menu.minimumOrder.total} Portionen`}
                </span>
                {menu.minimumOrder.perType && menu.minimumOrder.unit && (
                  <span className="rounded-full bg-cream-dark px-4 py-1.5 text-olive-900">
                    {menu.minimumOrder.perType} {menu.minimumOrder.unit} pro
                    Portion
                  </span>
                )}
              </div>
            </header>

            {loose.length > 0 && (
              <ItemGrid items={loose} showPrices={showPrices} />
            )}

            {sections.map((section) => (
              <div key={section.name} className="mt-12">
                <h3 className="flex items-center gap-4 font-display text-2xl text-olive-900 sm:text-3xl">
                  <span className="h-px w-8 bg-gold" aria-hidden />
                  {section.name}
                  <span className="h-px flex-1 bg-olive-900/10" aria-hidden />
                </h3>
                <ItemGrid
                  items={section.items as MenuItem[]}
                  showPrices={showPrices}
                />
              </div>
            ))}

            <p className="mt-12 text-center text-sm text-ink-muted">
              {showPrices && "Alle Preise inkl. gesetzlicher MwSt. "}
              Getränke servieren wir Ihnen gerne nach Wunsch – sprechen Sie uns
              an.
            </p>

            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-olive-900 p-8 text-cream sm:flex-row sm:p-10">
              <div>
                <p className="font-display text-2xl sm:text-3xl">
                  Lust auf das {menu.name}?
                </p>
                <p className="mt-1 text-cream/70">
                  Wir passen jedes Buffet gerne an Ihre Wünsche und Ihre
                  Gästezahl an.
                </p>
              </div>
              <Link href="/#kontakt" className="btn-gold shrink-0">
                Angebot anfragen <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
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
