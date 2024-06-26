"use client";
import HeaderThing from "@/components/HeaderThing";
import { useState } from "react";

const germanTranslations = {
  "Our perfect Meal for your joy": "Unser perfektes Essen für Ihre Freude",
};
interface BaseItem {
  type: "MenuItem" | "MenuSection";
  name: string;
}

interface MenuItem extends BaseItem {
  type: "MenuItem";
  description?: string;
  price: number;
  updatedPrice?: number;
  unit?: "Stück" | "Port.";
}

interface MenuSection extends BaseItem {
  type: "MenuSection";
  description?: string;
  items: (MenuItem | MenuSection)[];
}

interface Menu {
  title: string;
  minimumOrder: {
    total: number;
    perType: number;
  };
  items: (MenuItem | MenuSection)[];
}

const menu: Menu = {
  title: "Feines von der Hand in den Mund",
  minimumOrder: {
    total: 50,
    perType: 10,
  },
  items: [
    {
      type: "MenuItem",
      name: "Dekorative Canapés",
      description:
        "belegt und garniert mit: zartem Räucherlachs, geräuchertes Forellenfilet, Lachsschinken, reifem Tortenbrie, Schweinemedaillons mit Früchten ...",
      price: 2.6,
    },
    {
      type: "MenuItem",
      name: "Halbe belegte Brötchen",
      description: "appetitlich belegt mit: Aufschnitt, Käse und Schinken ...",
      price: 2.1,
    },
    {
      type: "MenuSection",
      name: "Kaltes aus der Hand",
      items: [
        {
          type: "MenuItem",
          name: "Schwäbische Langenstange verschiedenen belegt",
          price: 2.7,
          updatedPrice: 3.2,
        },
        {
          type: "MenuItem",
          name: "Bagles mit Kräuterfrischkäse und Tomate",
          price: 2.3,
          updatedPrice: 2.8,
        },
        {
          type: "MenuItem",
          name: "Fladenbrötecke vegetarisch oder mit Fleisch gefüllt",
          price: 2.6,
          updatedPrice: 2.3,
        },
        {
          type: "MenuItem",
          name: "Schwäbische Laugenbrezel mit Butter oder Frischkäse",
          price: 1.9,
          updatedPrice: 2.5,
        },
        {
          type: "MenuItem",
          name: "Halbes Laugencroissant mit Graveu Lachs",
          price: 2.4,
          updatedPrice: 3.0,
        },
        {
          type: "MenuItem",
          name: "Körnerbrot mit Kräuterquark und Radieschen",
          price: 1.8,
          updatedPrice: 2.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Kräftiges Bauernbrot mit Schweinemett und Zwiebeln",
          price: 2.1,
          updatedPrice: 2.7,
          unit: "Port.",
        },
      ],
    },
  ],
};

const Menus = [menu];

export default function Page() {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  return (
    <div className="bg-[#f0ebdf]">
      <HeaderThing
        title="Menü"
        subtitle={germanTranslations["Our perfect Meal for your joy"]}
      />
      <section
        id="buffets"
        className="flex py-8 px-4 flex-wrap space-x-4 items-center justify-center"
      ></section>
      <section
        id="menus"
        className="flex py-8 px-4 flex-wrap space-x-4 items-center justify-center"
      >
        {Menus.map((menu, idx) => (
          <button
            key={menu.title}
            className="border border-[#808369] px-4 py-2"
            onClick={() => setCurrentMenuIndex(idx)}
          >
            {menu.title}
          </button>
        ))}
      </section>
      <section
        id="menu"
        className="py-8 px-4 flex flex-col items-center justify-center"
      >
        <h2 className="text-2xl font-bold">{Menus[currentMenuIndex].title}</h2>
        <p className="text-sm text-center">
          Mindestens {Menus[currentMenuIndex].minimumOrder.total} pro Bestellung
        </p>
        <p className="text-sm text-center">
          Mindestens {Menus[currentMenuIndex].minimumOrder.perType} pro Sorte
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4 w-4/5 mx-auto mt-4">
          {Menus[currentMenuIndex].items.map((item) =>
            item.type === "MenuItem" ? (
              <MenuItemComponent item={item} key={item.name} />
            ) : (
              <>
                <div
                  key={(item satisfies MenuSection).name}
                  className="form-group col-span-2 mt-2"
                >
                  <h3 className="font-bold text-xl border-b border-[#808369]">
                    {(item satisfies MenuSection).name}
                  </h3>
                </div>
                {(item.items as MenuItem[]).map((subItem) => (
                  <MenuItemComponent item={subItem} key={subItem.name} />
                ))}
              </>
            )
          )}
        </div>
      </section>
    </div>
  );
}

function MenuItemComponent({ item }: { item: MenuItem }) {
  return (
    <div className="form-group flex justify-between">
      <div className="flex flex-col ">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-[#808369]">{item.description}</p>
      </div>
      <p className="text-right text-emerald-600">
        {item.updatedPrice ?? item.price}€
      </p>
    </div>
  );
}
