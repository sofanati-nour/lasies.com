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
  unit?: "Stück" | "Port." | "Pers.";
}

interface MenuSection extends BaseItem {
  type: "MenuSection";
  description?: string;
  items: (MenuItem | MenuSection)[];
}

interface Menu {
  name: string;
  minimumOrder: {
    total: number;
    perType: number;
  };
  items: (MenuItem | MenuSection)[];
}

const fingerfoodMenu: Menu = {
  name: "Fingerfood",
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
      name: "Kaltes Buffet",
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
        {
          type: "MenuItem",
          name: "Blätterteigstangen mit Tomate und Käse",
          price: 1.4,
          updatedPrice: 1.8,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Gemüsesticks mit Kräuterdip",
          description: "(40 g pro Port.)",
          price: 1.5,
          updatedPrice: 1.9,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Käsespieße mit Früchten",
          description: "(2 Stück)",
          price: 1.9,
          updatedPrice: 2.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Melone-Schinkenspieße",
          description: "(2 Stück)",
          price: 1.9,
          updatedPrice: 2.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Kabanossi und Chorizo-Spieße",
          description: "(2 Stück)",
          price: 1.9,
          updatedPrice: 2.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Pilze in Balsamico Spieße",
          description: "(2 Stück)",
          price: 1.9,
          updatedPrice: 2.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Tomaten-Mozzarellaspieße",
          description: "(2 Stück)",
          price: 1.5,
          updatedPrice: 1.9,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Paprikaschiffchen mit Frischkäsefüllung",
          price: 2.1,
          updatedPrice: 2.8,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Lachstatar auf gerösteter Weißbrotscheibe",
          price: 2.1,
          updatedPrice: 2.8,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "American Wrap",
          description:
            "(tex-mex-Füllung, Asia-Füllung, Hirtenkäse-Rucola-Füllung) mind. 8 St. pro Füllung",
          price: 3.2,
          updatedPrice: 2.6,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Törtchen mit Ziegenfrischkäse und luftgetrocknetem Schinken",
          price: 2.9,
          updatedPrice: 3.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Italienische Bruschette mit nativem Olivenöl und Tomaten",
          price: 1.5,
          updatedPrice: 1.6,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Zucchiniröllchen mit Hirtenkäse und Rauke",
          price: 1.6,
          updatedPrice: 1.9,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Zucchiniröllchen mit Feige und Ziegenfrischkäse",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Schinkenhörnchen",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Salat von Eismeergarnelen (im Glas serviert)",
          price: 4.5,
          updatedPrice: 5.3,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: 'Geflügelsalat "Bombay" (im Glas angerichtet)',
          price: 3.8,
          updatedPrice: 4.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Blätterteighalbmonde gefüllt mit scharfem Hackfleisch",
          price: 1.8,
          updatedPrice: 2.0,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Blätterteighalbmonde gefüllt mit Spinat-Hirtenkäse",
          price: 1.8,
          updatedPrice: 2.0,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Pumpernickel mit Schinken-Walnusscreme",
          price: 1.8,
          updatedPrice: 1.9,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Blätterteigwirbel mit Schinken, Käse u. Röstzwiebeln",
          price: 1.8,
          updatedPrice: 1.9,
          unit: "Stück",
        },
      ],
    },
    {
      type: "MenuSection",
      name: "Warmes aus der Hand",
      items: [
        {
          type: "MenuItem",
          name: "Nürnbergerle im Schlafrock",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Hackfleischtorte",
          description: "(2 Stück)",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Mediterrane Gemüsetorte",
          description: "(2 Stück)",
          price: 1.7,
          updatedPrice: 2.1,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Quiche Lorraine",
          description: "(2 Stück)",
          price: 1.7,
          updatedPrice: 2.1,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Tarte mit Spinat und Lachs",
          description: "(2 Stück)",
          price: 2.0,
          updatedPrice: 2.4,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Hackfleischspieß mit verschiedenen Dips",
          description: "(60 gr)",
          price: 2.1,
          updatedPrice: 2.4,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Garnelenspieß mit Knoblauchbrot",
          description: "(50 g)",
          price: 3.8,
          updatedPrice: 4.4,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Glacierte Hähnchenunterkeule asiatisch",
          price: 2.1,
          updatedPrice: 2.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Minipizza",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Florentinische Käsetörtchen",
          price: 2.2,
          updatedPrice: 2.5,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Yufkaröllchen gefüllt mit scharfem Hackfleisch",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Yufkaröllchen gefüllt mit Spinat-Hirtenkäse",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Yufkaröllchen gefüllt mit Frischkäse und Paprika",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Hähnchenspieß im Kokosmantel mit Currydip",
          description: "(60 gr)",
          price: 2.9,
          updatedPrice: 3.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Hähnchenspieß in der Mandelpanade mit Chutney",
          price: 2.9,
          updatedPrice: 3.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Fleischspieß in würziger Sauce",
          description: "(80 g)",
          price: 3.1,
          updatedPrice: 3.6,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: 'Mini-Frühlingsrollen "sweet chilli"',
          description: "(4 Stück)",
          price: 1.9,
          updatedPrice: 2.3,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: 'Schinkenpäckchen "Maoni" süß-scharf',
          price: 1.7,
          updatedPrice: 1.7,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Minihaxen vom Schwein",
          description: "(120 g)",
          price: 4.6,
          updatedPrice: 5.3,
          unit: "Stück",
        },
      ],
    },
    {
      type: "MenuSection",
      name: "Süßes aus der Hand",
      items: [
        {
          type: "MenuItem",
          name: "Schokozwiebel vom Blech",
          description: "(im Glas)",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Rote Grütze mit Vanillesauce",
          description: "(im Glas)",
          price: 1.9,
          updatedPrice: 2.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Mousse au chocolat",
          description: "(im Glas)",
          price: 2.1,
          updatedPrice: 2.5,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Obspfandl",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Pesca-Limekeks mit Vanillecreme und Früchten",
          price: 2.2,
          updatedPrice: 2.4,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Panna cotta mit Fruchtspiegel",
          description: "(im Glas)",
          price: 2.0,
          updatedPrice: 2.3,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Frischer Obstsalat",
          description: "(im Glas)",
          price: 2.0,
          updatedPrice: 2.7,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Schokoladen-Muffins",
          description: "(2 Stück)",
          price: 1.9,
          updatedPrice: 2.2,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Mini-Vanillekeks mit Vanillecreme und Früchten",
          price: 1.9,
          updatedPrice: 2.2,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Latte macchiato-creme",
          description: "(im Glas)",
          price: 2.0,
          updatedPrice: 2.3,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Himbeertraum",
          description: "(im Glas)",
          price: 2.7,
          updatedPrice: 3.2,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Bayerische creme vom Blech",
          price: 2.1,
          updatedPrice: 2.5,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Cassiscrème",
          description: "(im Glas)",
          price: 2.3,
          updatedPrice: 2.7,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Tiramisu",
          description: "(mind. 15 Port.)",
          price: 2.3,
          updatedPrice: 2.7,
          unit: "Port.",
        },
      ],
    },
  ],
};
const zumKominierenMenu: Menu = {
  name: "Zum Kombinieren (mit Buffets oder einfach)",
  minimumOrder: {
    total: 50,
    perType: 10,
  },
  items: [
    {
      type: "MenuSection",
      name: "Hauptspeise",
      description:
        "mit Weißbrot oder mitgelieferten Minibrötchen, Mindestbestellmenge: 10 Portionen",
      items: [
        {
          type: "MenuItem",
          name: "Zarte Lammkeule, mit Bohnen im Speckmantel, Ratatouille, Rosmarinkartoffeln",
          price: 14.9,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Chili con carne, auf Basmatireis",
          price: 8.9,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Schweinefilet im Speckmantel, auf Blattspinat mit Schwenkartoffeln",
          price: 15.8,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Schweinemedaillons in Weinsauce mit Buttergemüse",
          price: 9.8,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Schweinefilet Elsässer Art, mit Sauerkraut und Kartoffelstücke",
          price: 8.8,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Zwiebelrostbraten, auf Bratensoße mit Kartoffelpüree",
          price: 9.8,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Zarter Rehrücken, mit Haushernmacher Spätzle und Rosenkohl",
          price: 14.8,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Gemischter Braten, mit heller Rahmsauce und buntem Reis",
          price: 8.2,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Rindergulasch, auf Tomatenreis mit Buttergurkengemüse",
          price: 9.4,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Schweinelende, mit Kräuter-Frischkäsefüllung und Kartoffelrösti",
          price: 12.4,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Rinderschmorbraten, mit Rotwein-Schalotten-Sauce und Kartoffelgratin",
          price: 13.9,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Schweinefilet Mailänder Art, mit Zwiebelgemüse und Gartenkräuter-Kartoffeln",
          price: 8.5,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Rinderfilet mit Spinat-Ricotta-Füllung, auf Tomaten-Basilikum-Concassée",
          price: 8.0,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Buntes Geflügelragout, mit Safran-Kartoffeln",
          price: 8.6,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Schaschliktopf, auf würziger Sauce mit Gemüsereis",
          price: 8.9,
          unit: "Pers.",
        },
      ],
    },
  ],
};
const menu: Menu[] = [
  {
    name: "Suppen Buffet",
    minimumOrder: {
      total: 0,
      perType: 0.25,
    },
    items: [
      {
        type: "MenuSection",
        name: "Suppen",
        items: [
          {
            type: "MenuItem",
            name: "Kürbiscremesuppe mit Kokosmilch (saisonal)",
            price: 48.3,
          },
          { type: "MenuItem", name: "Kartoffelsuppe mit Shrimps", price: 48.3 },
          { type: "MenuItem", name: "oder mit Würstchen", price: 48.3 },
          { type: "MenuItem", name: "Tomatenrahmsuppe", price: 48.3 },
          { type: "MenuItem", name: "Schwäbische Festtagssuppe", price: 48.3 },
          {
            type: "MenuItem",
            name: "Feurige Gulaschsuppe mit Brot",
            price: 48.3,
          },
          { type: "MenuItem", name: "Gaisburger Marsch", price: 48.3 },
          {
            type: "MenuItem",
            name: "Käsesuppe mit Lauchstreifen",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Schwäbische Wurstknöpfle in der Brühe",
            price: 48.3,
          },
          { type: "MenuItem", name: "Deftiger Erbseneintopf", price: 48.3 },
          { type: "MenuItem", name: "Linsen Suppe", price: 48.3 },
          { type: "MenuItem", name: "Cremige Champignons Suppe", price: 48.3 },
        ],
      },
    ],
  },
  {
    name: "Schlemmerplatten",
    minimumOrder: {
      total: 10,
      perType: 0,
    },
    items: [
      {
        type: "MenuItem",
        name: "Hirtenplatte",
        description:
          "Rustikale Auswahl von rohen Schinken, Pfefferbeißern, Landjäger, Minicabanossi und deftigen Käsespezialitäten, Essiggemüse, Bauernbrot",
        price: 48.3,
      },
      {
        type: "MenuItem",
        name: "Fischplatte",
        description:
          "Variation von Räucherlachs und Graved Lachs, geräuchertes Forellenfilet, Cocktail von Grönlandgarnelen, Lachstatarbällchen, Stangenweißbrot",
        price: 48.3,
      },
      {
        type: "MenuItem",
        name: "Käseplatte",
        description:
          "Käseplatte Internationale Käsespezialitäten, reich garniert mit Früchten und Salzgebäck, Brotauswahl",
        price: 48.3,
      },
      {
        type: "MenuItem",
        name: "Gourmetplatte Constantin",
        description:
          "Zarter Räucherlachs mit Sahnemeerrettich, Crevettencocktail, delikate Entenbrust, Filetmedaillons bunt garniert, rosa gebratenes Roastbeef Sauce Remoulade, luftgetrockneter Schinken, französischer Camembert mit Früchten Bunter Brotkorb",
        price: 48.3,
      },
    ],
  },
  {
    name: "Grill Buffet",
    minimumOrder: {
      total: 20,
      perType: 34.5,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeise Und Salate",
        items: [
          {
            type: "MenuItem",
            name: "Schwäbischer Kartoffelsalat",
            price: 34.5,
          },
          { type: "MenuItem", name: "Mediterraner Nudelsalat", price: 34.5 },
          { type: "MenuItem", name: "Salat „Tabouléh“", price: 34.5 },
          { type: "MenuItem", name: "Toskanischer Brotsalat", price: 34.5 },
          {
            type: "MenuItem",
            name: "Strauchtomaten mit Mozzarella und frischem Basilikum",
            price: 34.5,
          },
          { type: "MenuItem", name: "Bunter Gemüsesalat", price: 34.5 },
          {
            type: "MenuItem",
            name: "Gurkensalat in Joghurt-Dilldressing",
            price: 34.5,
          },
          {
            type: "MenuItem",
            name: "Fenchel-Chinakohlsalat mit Orangenspalten",
            price: 34.5,
          },
          { type: "MenuItem", name: "Paprika-Maissalat", price: 34.5 },
          { type: "MenuItem", name: "Bunte Blattsalate", price: 34.5 },
          { type: "MenuItem", name: "Zwei Dressings", price: 34.5 },
          { type: "MenuItem", name: "Großer Brotkorb", price: 34.5 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        items: [
          {
            type: "MenuItem",
            name: "Auswahl von verschiedenen Würstchen",
            price: 34.5,
          },
          {
            type: "MenuItem",
            name: "Eingelegte Schweinenackensteaks",
            price: 34.5,
          },
          {
            type: "MenuItem",
            name: "Marinierte Hähnchenbrustfilets „sweet chilli“",
            price: 34.5,
          },
          {
            type: "MenuItem",
            name: "Frische Sepia in Kräuter-Olivenöl",
            price: 34.5,
          },
          { type: "MenuItem", name: "Halloumi-Grillkäse", price: 34.5 },
          {
            type: "MenuItem",
            name: "Mediterrane Gemüse aus der Pfanne",
            price: 34.5,
          },
          { type: "MenuItem", name: "Gegrillte Maiskolben", price: 34.5 },
          {
            type: "MenuItem",
            name: "Senf, Ketchup, Kräuterbutter, verschiedene Dip",
            price: 34.5,
          },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        items: [
          { type: "MenuItem", name: "Melonensalat", price: 34.5 },
          {
            type: "MenuItem",
            name: "Pfannkuchen mit Marmelade, Nutella oder Apfelmus gefüllt",
            price: 34.5,
          },
        ],
      },
    ],
  },
  {
    name: "Deftiges Buffet",
    minimumOrder: {
      total: 20,
      perType: 34.8,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeise und Salate",
        items: [
          {
            type: "MenuItem",
            name: "Geräucherte Forellen- und Makrelenfilets",
            price: 34.8,
          },
          { type: "MenuItem", name: "Sahnemeerrettich", price: 34.8 },
          {
            type: "MenuItem",
            name: "Harzer Roller mit Essig, Öl und Zwiebeln",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Deftiges aus der Räucherkammer",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Schwäbischer Kartoffelsalat",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Verschiedene Rohkost- und Blattsalate zwei Dressings",
            price: 34.8,
          },
          { type: "MenuItem", name: "Bunte Brotauswahl", price: 34.8 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        items: [
          { type: "MenuItem", name: "Schinkenkrustenbraten", price: 34.8 },
          {
            type: "MenuItem",
            name: "Zartes Rinderschmorsteak „Esterhazy“",
            price: 34.8,
          },
          { type: "MenuItem", name: "Kräftige Rotweinsauce", price: 34.8 },
          { type: "MenuItem", name: "Kartoffelknödel", price: 34.8 },
          { type: "MenuItem", name: "Hausgemachte Spätzle", price: 34.8 },
          {
            type: "MenuItem",
            name: "Kartoffel-Gemüseauflauf (vegetarisch)",
            price: 34.8,
          },
          { type: "MenuItem", name: "Rustikales Gemüse", price: 34.8 },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        items: [
          {
            type: "MenuItem",
            name: "Kaiserschmarrn mit Apfelkompott",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Sahnequark mit Hägemark und frischen Früchten",
            price: 34.8,
          },
        ],
      },
    ],
  },
  {
    name: "Salatjungfer Buffet",
    minimumOrder: {
      total: 20,
      perType: 34.8,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeise und Salate",
        items: [
          {
            type: "MenuItem",
            name: "Zucchiniröllchen mit Frischkäse und Feige",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Zucchiniröllchen mit Frischkäse und Feigen gefüllt",
            price: 34.8,
          },
          { type: "MenuItem", name: "Marinierter Ziegenkäse", price: 34.8 },
          {
            type: "MenuItem",
            name: "Yufka-Röllchen mit Spinat-Hirtenkäsefüllung",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Asiatischer Gemüsesalat mit Erdnussdressing",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Fenchel-Chinakohlsalat mit Orangenspalten",
            price: 34.8,
          },
          { type: "MenuItem", name: "Ananas-Apfel-Karottensalat", price: 34.8 },
          { type: "MenuItem", name: "Griechischer Bauernsalat", price: 34.8 },
          {
            type: "MenuItem",
            name: "Rucola-Radicciosalat mit Walnüssen und Sherrydressing",
            price: 34.8,
          },
          { type: "MenuItem", name: "Paprika-Maissalat", price: 34.8 },
          {
            type: "MenuItem",
            name: "Gurkensalat in Joghurt-Dill Dressing",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Schwäbischer Kartoffelsalat",
            price: 34.8,
          },
          { type: "MenuItem", name: "Gartenfrische Blattsalate", price: 34.8 },
          { type: "MenuItem", name: "Verschiedene Dressings", price: 34.8 },
          { type: "MenuItem", name: "Selbstgebackenes Brot", price: 34.8 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        items: [
          {
            type: "MenuItem",
            name: "Paprika gefüllt mit Gemüse-Couscous",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Brokkoli-Nussecke und Quinoa-Erbsenbratling",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Kartoffel-Zucchinirösti mit Paprika",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Gemüsemaultaschen auf Blattspinat",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Tomaten-Basilikum-Concassée",
            price: 34.8,
          },
          { type: "MenuItem", name: "Helle Käse-Kräutersauce", price: 34.8 },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        items: [
          { type: "MenuItem", name: "Frischer Obstsalat", price: 34.8 },
          { type: "MenuItem", name: "Johannisbeer-Joghurtcreme", price: 34.8 },
          {
            type: "MenuItem",
            name: "Kirschenmichel mit Vanillesauce",
            price: 34.8,
          },
        ],
      },
    ],
  },
  {
    name: "Mediterranes Buffet",
    minimumOrder: {
      total: 20,
      perType: 41.3,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeise und Salate",
        items: [
          {
            type: "MenuItem",
            name: "Gegrillte Gemüse eingelegt in nativem Olivenöl",
            price: 41.3,
          },
          {
            type: "MenuItem",
            name: "Zucchiniröllchen mit Hirtenkäse-Raukefüllung",
            price: 41.3,
          },
          {
            type: "MenuItem",
            name: "Gebratene Pilze in Balsamicodressing",
            price: 41.3,
          },
          { type: "MenuItem", name: "Verschiedene Oliven", price: 41.3 },
          { type: "MenuItem", name: "Vitello tonnato", price: 41.3 },
          {
            type: "MenuItem",
            name: "Honigmelone mit luftgetrocknetem Schinken",
            price: 41.3,
          },
          { type: "MenuItem", name: "Tomate „Caprese“", price: 41.3 },
          {
            type: "MenuItem",
            name: "Rucola mit frischen Kirschtomaten",
            price: 41.3,
          },
          { type: "MenuItem", name: "Salat „Tabouleh“", price: 41.3 },
          {
            type: "MenuItem",
            name: "Bunte Salatschüssel, zwei Dressings",
            price: 41.3,
          },
          { type: "MenuItem", name: "Selbstgebackenes Brot", price: 41.3 },
        ],
      },
      {
        type: "MenuSection",
        name: "Frisch vom Grill und aus der Pfanne",
        items: [
          { type: "MenuItem", name: "Saltimbocca von der Pute", price: 41.3 },
          {
            type: "MenuItem",
            name: "Kleine Steaks aus der Rinderhüfte",
            price: 41.3,
          },
          { type: "MenuItem", name: "Lammbeinscheiben", price: 41.3 },
          { type: "MenuItem", name: "Kräftige Rotweinsauce", price: 41.3 },
          { type: "MenuItem", name: "Madeirasauce", price: 41.3 },
          { type: "MenuItem", name: "Bunte Tagliatelle", price: 41.3 },
          { type: "MenuItem", name: "Rosmarinkartoffeln", price: 41.3 },
          {
            type: "MenuItem",
            name: "Gefüllte Auberginen und Zucchini auf Tomatenconcassée",
            price: 41.3,
          },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        items: [
          { type: "MenuItem", name: "Obstplatte der Saison", price: 41.3 },
          {
            type: "MenuItem",
            name: "Mascarpone-Quarkcreme mit marinierten Kirschen",
            price: 41.3,
          },
          {
            type: "MenuItem",
            name: "Sizilianischer Cassata-Kuchen",
            price: 41.3,
          },
        ],
      },
    ],
  },
  {
    name: "„Die Glücklichen Ehepaar“ Buffet",
    minimumOrder: {
      total: 20,
      perType: 48.3,
    },
    items: [
      {
        type: "MenuSection",
        name: "Suppe",
        items: [{ type: "MenuItem", name: "Festtagssuppe", price: 48.3 }],
      },
      {
        type: "MenuSection",
        name: "Vorspeise Und Salate",
        items: [
          {
            type: "MenuItem",
            name: "Variation aus Fluss und Meer",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Sahnemeerrettich, Senf-Orangensauce",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Gegrillte Gemüse eingelegt in nativem Olivenöl",
            price: 48.3,
          },
          { type: "MenuItem", name: "Anti pasti Spieße mit", price: 48.3 },
          {
            type: "MenuItem",
            name: "Tomate-Mozzarella, Melone-Schinken, Hirtenkäse und Oliven",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Halbe gefüllte Eier, individuell garniert",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Tomaten mit Ziegenfrischkäsefüllung",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Lachstatar auf gerösteter Weißbrotscheibe",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Festplatte „…“ mit leckeren Tunken",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Truthahnröllchen verschieden gefüllt,",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Auswahl von Terrinen und Pasteten",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Rucola mit Paprika und Champignons",
            price: 48.3,
          },
          { type: "MenuItem", name: "Toskanischer Brotsalat", price: 48.3 },
          {
            type: "MenuItem",
            name: "Bunte Blattsalate der Saison",
            price: 48.3,
          },
          { type: "MenuItem", name: "Zwei Dressings", price: 48.3 },
          { type: "MenuItem", name: "Selbstgebackenes Brot", price: 48.3 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        items: [
          {
            type: "MenuItem",
            name: "Frisch vom Grill und aus der Pfanne",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Medaillons vom Schweinefilet",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Kleine Rostbraten, Röstzwiebel",
            price: 48.3,
          },
          { type: "MenuItem", name: "Kräftige Rotweinsauce", price: 48.3 },
          { type: "MenuItem", name: "Helle Marsalasauce", price: 48.3 },
          {
            type: "MenuItem",
            name: "Claress-Fischfilet, frisch gebraten",
            price: 48.3,
          },
          { type: "MenuItem", name: "Fischsamtsauce", price: 48.3 },
          { type: "MenuItem", name: "Schwäbische Eierspätzle", price: 48.3 },
          { type: "MenuItem", name: "Kartoffel-Lauchgratin", price: 48.3 },
          { type: "MenuItem", name: "Reismosaik", price: 48.3 },
          {
            type: "MenuItem",
            name: "Variation von Gartengemüsen",
            price: 48.3,
          },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        items: [
          {
            type: "MenuItem",
            name: "Obstsalat mit frischen Walnüssen",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Geschichtete Joghurtcreme unter der Mandelhaube",
            price: 48.3,
          },
        ],
      },
    ],
  },
  {
    name: "Gourmetreise Buffet",
    minimumOrder: {
      total: 30,
      perType: 42.6,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeise und Salate",
        items: [
          {
            type: "MenuItem",
            name: "Pochierte Lachsforelle, reich garniert",
            price: 42.6,
          },
          {
            type: "MenuItem",
            name: "Räucherfischvariation der Saison",
            price: 42.6,
          },
          {
            type: "MenuItem",
            name: "Sahnemeerrettich, Preiselbeersahne",
            price: 42.6,
          },
          { type: "MenuItem", name: "Delikate Fischterrine", price: 42.6 },
          {
            type: "MenuItem",
            name: "Yufkaröllchen mit Spinat-Hirtenkäsefüllung",
            price: 42.6,
          },
          { type: "MenuItem", name: "Klassische Pastetenauswahl", price: 42.6 },
          {
            type: "MenuItem",
            name: "Kirschtomaten mit Ziegenfrischkäse gefüllt",
            price: 42.6,
          },
          {
            type: "MenuItem",
            name: "Zarte Filetmedaillons mit Lebermousse",
            price: 42.6,
          },
          { type: "MenuItem", name: "Waldorfsalat mit Nüssen", price: 42.6 },
          { type: "MenuItem", name: "Geflügelsalat indisch", price: 42.6 },
          {
            type: "MenuItem",
            name: "Verschiedene Rohkost- und Blattsalate",
            price: 42.6,
          },
          { type: "MenuItem", name: "Große Brotauswahl, Butter", price: 42.6 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        items: [
          { type: "MenuItem", name: "Zanderfilet gebraten", price: 42.6 },
          { type: "MenuItem", name: "Fischsamtsauce", price: 42.6 },
          { type: "MenuItem", name: "Lammrücken „provencale“", price: 42.6 },
          {
            type: "MenuItem",
            name: "Roastbeef in der Kräuterkruste",
            price: 42.6,
          },
          { type: "MenuItem", name: "Duftreis", price: 42.6 },
          { type: "MenuItem", name: "Bircher-Benner-Kartoffeln", price: 42.6 },
          { type: "MenuItem", name: "Schwäbische Eierspätzle", price: 42.6 },
          { type: "MenuItem", name: "Bunte Gemüse der Saison", price: 42.6 },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        items: [
          { type: "MenuItem", name: "Internationale Käseauswahl", price: 42.6 },
          {
            type: "MenuItem",
            name: "Geschichtete Mascarponecreme mit marinierten Weichselkirschen",
            price: 42.6,
          },
          { type: "MenuItem", name: "Schokoladen-Rumcreme", price: 42.6 },
        ],
      },
    ],
  },
  {
    name: "Französisches Buffet",
    minimumOrder: {
      total: 20,
      perType: 43.6,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeise und Salate",
        items: [
          {
            type: "MenuItem",
            name: "Gebeizter Graved Lachs, Senf-Dillsauce",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Crêpes gefüllt mit Lachs und Rauke",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Zarte Forellenfilets aus dem Heißrauch",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Verschiedene geräucherte Makrelenfilets",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Schinkenröllchen mit Spargelspitzen",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Gebratene Pilze in Balsamico Dressing",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Gurkentaler mit Käse-Kräuterrosette",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Entenbrust, rosa gebraten mit Orangenconfit",
            price: 43.6,
          },
          { type: "MenuItem", name: "Ananas-Apfel-Karottensalat", price: 43.6 },
          { type: "MenuItem", name: "Paprika-Maissalat", price: 43.6 },
          {
            type: "MenuItem",
            name: "Gurkensalat in Joghurt-Dilldressing",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Chinakohl mit Orangenspalten",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Tomatensalat mit roten Schalotten",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Frische Blattsalate der Saison",
            price: 43.6,
          },
          { type: "MenuItem", name: "Zwei Dressings", price: 43.6 },
          { type: "MenuItem", name: "Gemischter Brotkorb", price: 43.6 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptgang",
        items: [
          {
            type: "MenuItem",
            name: "Putensteak mit gebratenen Ananasscheiben",
            price: 43.6,
          },
          { type: "MenuItem", name: "Apfel-Currysauce", price: 43.6 },
          {
            type: "MenuItem",
            name: "Medaillons vom Schweinefilet unter der Zwiebel-Kräuterhaube",
            price: 43.6,
          },
          { type: "MenuItem", name: "Kräftige Bratensauce", price: 43.6 },
          { type: "MenuItem", name: "Basmatireis", price: 43.6 },
          { type: "MenuItem", name: "Kartoffelrösti", price: 43.6 },
          {
            type: "MenuItem",
            name: "Mandelbrokkoli und Baby Möhrchen",
            price: 43.6,
          },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        items: [
          {
            type: "MenuItem",
            name: "Variation von heller und dunkler Mousse au Chocolat",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Rote Grütze mit Vanillesauce",
            price: 43.6,
          },
        ],
      },
    ],
  },
];

const Menus = [fingerfoodMenu, zumKominierenMenu, ...menu];

export default function Page() {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  return (
    <div className="bg-[#f0ebdf]">
      <HeaderThing
        title="Menü"
        subtitle={germanTranslations["Our perfect Meal for your joy"]}
      />
      <section
        id="menus"
        className="flex py-8 px-4 flex-wrap space-x-4 items-center justify-center"
      >
        {Menus.map((menu, idx) => (
          <button
            key={idx + menu.name}
            className="border border-[#808369] px-4 py-2 mt-2"
            onClick={() => setCurrentMenuIndex(idx)}
          >
            {menu.name}
          </button>
        ))}
      </section>
      <section
        id="menu"
        className="py-8 px-4 flex flex-col items-center justify-center"
      >
        <h2 className="text-2xl font-bold">{Menus[currentMenuIndex].name}</h2>
        <p className="text-sm text-center">
          Mindestens {Menus[currentMenuIndex].minimumOrder.total} pro Bestellung
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4 w-4/5 mx-auto mt-4">
          {Menus[currentMenuIndex].items.map((item, idx) =>
            item.type === "MenuItem" ? (
              <MenuItemComponent item={item} key={idx + item.name} />
            ) : (
              <div
                key={(item satisfies MenuSection).name + idx}
                className=" space-y-4 grid lg:grid-cols-2 col-span-2 gap-x-16 gap-y-4"
              >
                <div className="form-group col-span-2 mt-2">
                  <h3 className="font-bold text-xl border-b border-[#808369]">
                    {(item satisfies MenuSection).name}
                  </h3>
                </div>
                {(item.items as MenuItem[]).map((subItem, idxx) => (
                  <MenuItemComponent item={subItem} key={idxx + subItem.name} />
                ))}
              </div>
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