// Menu content shown on /menu. Prices in EUR incl. VAT.
export interface BaseItem {
  type: "MenuItem" | "MenuSection";
  name: string;
}

export interface MenuItem extends BaseItem {
  type: "MenuItem";
  description?: string;
  price: number;
  updatedPrice?: number;
  unit?: "Stück" | "Port." | "Pers.";
}

export interface MenuSection extends BaseItem {
  type: "MenuSection";
  description?: string;
  priority?: number;
  items: (MenuItem | MenuSection)[];
}

export interface Menu {
  name: string;
  minimumOrder: {
    total: number | string;
    perType: number;
    unit?: string;
    buffetPrice?: number;
    description?: string;
  };
  items: (MenuItem | MenuSection)[];
}

const fingerfoodMenu: Menu = {
  name: "Fingerfood",
  minimumOrder: {
    total: 50,
    perType: 10,
    description:
      "Mindestens 50 Teile pro Bestellung, mindestens 10 Teile pro Sorte",
  },
  items: [
    {
      type: "MenuItem",
      name: "Dekorative Canapés",
      description:
        "Belegt und garniert mit zartem Räucherlachs, geräuchertem Forellenfilet, reifem Tortenbrie mit Früchten und mehr",
      price: 2.6,
      unit: "Stück",
    },
    {
      type: "MenuItem",
      name: "Halbe belegte Brötchen",
      description:
        "Appetitlich belegt mit Aufschnitt, Käse und Putenschinken",
      price: 2.5,
      unit: "Stück",
    },
    {
      type: "MenuSection",
      name: "Kaltes Buffet",
      items: [
        {
          type: "MenuItem",
          name: "Schwäbische Laugenstange, verschieden belegt",
          price: 2.7,
          unit: "Stück",
          updatedPrice: 3.2,
        },
        //{
        //  type: "MenuItem",
        //  name: "Minitortilla mit Hackfleisch und Käse gefüllt",
        //  price: 2.7,
        //  updatedPrice: 3.2,
        //},
        {
          type: "MenuItem",
          name: "Sommerrollen (vegetarisch, mit Fleisch- oder Räucherlachsfüllung)",
          price: 3.2,
          unit: "Stück",
          updatedPrice: 3.2,
        },
        {
          type: "MenuItem",
          name: "Burger-Tacos",
          price: 2.7,
          unit: "Stück",
          updatedPrice: 3.1,
        },
        {
          type: "MenuItem",
          name: "Minihamburger",
          price: 3.3,
          updatedPrice: 3.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Bagels mit Kräuterfrischkäse und Tomate",
          price: 2.3,
          unit: "Stück",
          updatedPrice: 2.8,
        },
        {
          type: "MenuItem",
          name: "Fladenbrotecken, vegetarisch oder mit Fleisch gefüllt",
          price: 2.6,
          unit: "Stück",
          updatedPrice: 2.3,
        },
        {
          type: "MenuItem",
          name: "Schwäbische Laugenbrezel mit Butter oder Frischkäse",
          price: 1.9,
          unit: "Stück",
          updatedPrice: 2.5,
        },
        {
          type: "MenuItem",
          name: "Halbes Laugencroissant mit Graved Lachs",
          price: 2.4,
          unit: "Stück",
          updatedPrice: 3.0,
        },
        {
          type: "MenuItem",
          name: "Körnerbrot mit Kräuterquark und Radieschen",
          price: 1.8,
          updatedPrice: 2.2,
          unit: "Stück",
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
          description: "(40 g pro Portion)",
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
          name: "Schinken-Melonen-Spieße",
          description: "(2 Stück)",
          price: 1.9,
          updatedPrice: 2.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Pilz-Balsamico-Spieße",
          description: "(2 Stück)",
          price: 1.9,
          updatedPrice: 2.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Tomate-Mozzarella-Spieße",
          description: "(2 Stück)",
          price: 1.5,
          updatedPrice: 1.9,
          unit: "Port.",
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
            "Tex-Mex-, Couscous-Gemüse-, Asia- oder Hirtenkäse-Rucola-Füllung, mindestens 8 Stück pro Füllung",
          price: 3.2,
          updatedPrice: 2.6,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Italienische Bruschetta mit nativem Olivenöl und Tomaten",
          price: 1.5,
          updatedPrice: 1.6,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Zucchiniröllchen mit Hirtenkäse und Rucola",
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
          name: "Putenschinken-Hörnchen",
          price: 1.8,
          updatedPrice: 2.1,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Salat von Eismeergarnelen (im Glas serviert)",
          price: 4.5,
          updatedPrice: 5.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Geflügelsalat „Bombay“ (im Glas angerichtet)",
          price: 3.8,
          updatedPrice: 4.2,
          unit: "Stück",
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
          name: "Blätterteighalbmonde gefüllt mit Spinat und Hirtenkäse",
          price: 1.8,
          updatedPrice: 2.0,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Blätterteigwirbel mit Putenschinken, Käse und Röstzwiebeln",
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
          description: "(60 g)",
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
          name: "Glasierte Hähnchenunterkeule nach asiatischer Art",
          price: 2.1,
          updatedPrice: 2.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Minipizza (Margherita oder vegetarisch)",
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
          name: "Yufkaröllchen gefüllt mit Spinat und Hirtenkäse",
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
          description: "(60 g)",
          price: 2.9,
          updatedPrice: 3.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Hähnchenspieß in der Mandelpanade mit Chutney",
          description: "(60 g)",
          price: 2.9,
          updatedPrice: 3.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Schaschlikspieß in würziger Sauce",
          description: "(80 g)",
          price: 3.1,
          updatedPrice: 3.6,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Corndog-Spieß (koreanisch)",
          description: "(80 g)",
          price: 3.1,
          updatedPrice: 3.6,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Minifrühlingsrollen „Sweet Chili“",
          description: "(4 Stück)",
          price: 1.9,
          updatedPrice: 2.3,
          unit: "Port.",
        },
      ],
    },
    {
      type: "MenuSection",
      name: "Süßes aus der Hand",
      items: [
        {
          type: "MenuItem",
          name: "Schwarzwälder Kirschcreme",
          description: "(im Glas)",
          price: 1.8,
          updatedPrice: 2.7,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Sahnequark mit Hagebuttenmark und Früchten",
          description: "(im Glas)",
          price: 1.8,
          unit: "Stück",
          updatedPrice: 2.3,
        },
        {
          type: "MenuItem",
          name: "Rote Grütze mit Vanillesauce",
          description: "(im Glas)",
          price: 1.9,
          updatedPrice: 2.4,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Mousse au Chocolat",
          description: "(im Glas)",
          price: 2.1,
          updatedPrice: 2.7,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Miniplunder",
          price: 1.8,
          updatedPrice: 2.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Obst-Tartelettes mit Vanillecreme und Früchten",
          price: 2.2,
          updatedPrice: 2.8,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Verschiedene Muffins",
          price: 2.0,
          updatedPrice: 2.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Miniamerikaner",
          description: "(2 Stück)",
          price: 2.0,
          updatedPrice: 2.3,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Verschiedene gebackene Kuchen vom Blech",
          price: 2.0,
          updatedPrice: 2.7,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Frischer Obstsalat",
          description: "(im Glas)",
          price: 2.0,
          updatedPrice: 2.7,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Latte-macchiato-Creme",
          description: "(im Glas)",
          price: 1.9,
          updatedPrice: 2.7,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Himbeertraum",
          description: "(im Glas)",
          price: 1.9,
          updatedPrice: 2.7,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Beerenschnitte vom Blech",
          price: 2.0,
          updatedPrice: 2.3,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Johannisbeercreme",
          description: "(im Glas)",
          price: 2.3,
          updatedPrice: 2.7,
          unit: "Stück",
        },
        {
          type: "MenuItem",
          name: "Tiramisu",
          description: "(mind. 15 Port.)",
          price: 2.3,
          updatedPrice: 3.0,
          unit: "Port.",
        },
      ],
    },
  ],
};
const zumKominierenMenu: Menu = {
  name: "Zum Kombinieren",
  minimumOrder: {
    total: 10,
    perType: 10,
  },
  items: [
    {
      type: "MenuSection",
      name: "",
      description:
        "Dazu Weißbrot oder Minibrötchen.",
      items: [
        {
          type: "MenuItem",
          name: "Piccata Milanese (Pute oder Kalb) auf Tomatensauce mit Butterspaghetti",
          price: 12.7,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Rinderrouladen nach Art des Hauses mit kräftiger Bratensauce und Kartoffelknödeln",
          price: 14.6,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Zarte Lammkeule mit Bohnen im Speckmantel, Ratatouille und Rosmarinkartoffeln",
          price: 14.9,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Schwäbische Maultaschen mit Zwiebelschmälze und Kartoffel-Gurken-Salat",
          price: 8.9,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Schwäbischer Linsenteller mit Saitenwürstchen und Spätzle",
          price: 9.2,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Chili con Carne auf Basmatireis",
          price: 8.9,
          unit: "Pers.",
        },

        {
          type: "MenuItem",
          name: "Tagliatelle verde mit Lachssahne",
          price: 1.8,
          updatedPrice: 8.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Saltimbocca vom Lachs auf Blattspinat mit Schwenkkartoffeln",
          price: 1.8,
          updatedPrice: 8.7,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Italienische Lasagne – mit Hackfleisch, mit Lachs und Spinat oder mit Gemüsefüllung",
          price: 1.8,
          updatedPrice: 8.3,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Asia-Pfanne mit Chinagemüse, Mie-Nudeln und Putenstreifen",
          price: 1.8,
          updatedPrice: 7.9,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Kartoffelgratin, klassisch oder mit Hähnchen",
          price: 1.8,
          updatedPrice: 8.5,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Gebratene Hähnchenbrust in Orangensauce",
          price: 1.8,
          updatedPrice: 9.2,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Gegrilltes Lachsfilet, mariniert mit Honig und Petersilie",
          price: 1.8,
          updatedPrice: 8.8,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Gefüllte Paprika mit Bulgur und Feta",
          price: 1.8,
          updatedPrice: 7.5,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Hähnchenbrust gefüllt mit Gemüse und Käse",
          price: 1.8,
          updatedPrice: 8.7,
          unit: "Port.",
        },
        {
          type: "MenuItem",
          name: "Zwiebelrostbraten auf Bratensauce mit Kartoffelpüree",
          price: 9.8,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Zarter Rehrücken mit hausgemachten Spätzle und Rosenkohl",
          price: 14.8,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Rinderbraten mit heller Rahmsauce und buntem Reis",
          price: 9.8,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Rindergulasch auf Tomatenreis mit Buttergurkengemüse",
          price: 9.4,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Rinderschmorbraten mit Bratensauce und Kartoffelgratin",
          price: 13.9,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Ravioli mit Spinat-Ricotta-Füllung auf Tomaten-Basilikum-Concassée",
          price: 8.0,
          unit: "Pers.",
        },
        {
          type: "MenuItem",
          name: "Buntes Geflügelragout mit Safrankartoffeln",
          price: 8.6,
          unit: "Pers.",
        },
      ],
    },
  ],
};
const menu: Menu[] = [
  {
    name: "Suppen",
    minimumOrder: {
      total: 20,
      perType: 250,
      unit: "ml",
    },
    items: [
      {
        type: "MenuSection",
        name: "",
        items: [
          {
            type: "MenuItem",
            name: "Kürbiscremesuppe mit Kokosmilch (saisonal)",
            price: 4,
          },
          {
            type: "MenuItem",
            name: "Kartoffelsuppe mit Shrimps",
            price: 4,
            description: "oder mit Würstchen",
          },
          // { type: "MenuItem", name: "oder mit Würstchen", price: 3.4 },
          { type: "MenuItem", name: "Tomatenrahmsuppe", price: 3.5 },
          { type: "MenuItem", name: "Schwäbische Festtagssuppe", price: 4 },
          {
            type: "MenuItem",
            name: "Feurige Gulaschsuppe mit Brot",
            price: 4.5,
          },
          { type: "MenuItem", name: "Gaisburger Marsch", price: 4 },
          {
            type: "MenuItem",
            name: "Käsesuppe mit Lauchstreifen",
            price: 3.5,
          },
          {
            type: "MenuItem",
            name: "Schwäbische Wurstknöpfle in der Brühe",
            price: 3.7,
          },
          { type: "MenuItem", name: "Deftiger Erbseneintopf", price: 3.2 },
          { type: "MenuItem", name: "Linsensuppe", price: 3.4 },
          { type: "MenuItem", name: "Cremige Champignonsuppe", price: 4 },
        ],
      },
    ],
  },
  {
    name: "Schlemmerplatten",
    minimumOrder: {
      total: 10,
      perType: 100,
      unit: "g",
      // buffetPrice: 48.3,
    },
    items: [
      {
        type: "MenuItem",
        name: "Hirtenplatte",
        description:
          "Rustikale Auswahl von rohem Putenschinken, deftigen Käsespezialitäten, Essiggemüse und Bauernbrot",
        price: 12,
      },
      {
        type: "MenuItem",
        name: "Fischplatte",
        description:
          "Variation von Räucherlachs und Graved Lachs, geräuchertes Forellenfilet, Cocktail von Grönlandgarnelen, Makrelenfilet mit Pfeffer, Stangenweißbrot",
        price: 17,
      },
      {
        type: "MenuItem",
        name: "Käseplatte",
        description:
          "Internationale Käsespezialitäten, reich garniert mit Früchten und Salzgebäck, dazu eine Brotauswahl",
        price: 12.5,
      },
      {
        type: "MenuItem",
        name: "Gourmetplatte „Constantin“",
        description:
          "220 g pro Person, ab 15 Personen: zarter Räucherlachs mit Sahnemeerrettich, Crevettencocktail, delikate Entenbrust, Filetmedaillons bunt garniert, rosa gebratenes Roastbeef mit Remouladensauce, luftgetrockneter Putenschinken, französischer Camembert mit Früchten und ein bunter Brotkorb",
        price: 27,
      },
    ],
  },
  {
    name: "Grill-Buffet",
    minimumOrder: {
      total: 20,
      perType: 40,
      buffetPrice: 40,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeisen und Salate",
        priority: 0,
        items: [
          {
            type: "MenuItem",
            name: "Schwäbischer Kartoffelsalat",
            price: 34.5,
          },
          { type: "MenuItem", name: "Mediterraner Nudelsalat", price: 34.5 },
          { type: "MenuItem", name: "Tabouleh", description: "Petersiliensalat mit Bulgur, Tomaten, Minze und Zitrone", price: 34.5 },
          { type: "MenuItem", name: "Toskanischer Brotsalat", price: 34.5 },
          {
            type: "MenuItem",
            name: "Strauchtomaten mit Mozzarella und frischem Basilikum",
            price: 34.5,
          },
          { type: "MenuItem", name: "Bunter Gemüsesalat", price: 34.5 },
          {
            type: "MenuItem",
            name: "Gurkensalat in Joghurt-Dill-Dressing",
            price: 34.5,
          },
          {
            type: "MenuItem",
            name: "Fenchel-Chinakohl-Salat mit Orangenspalten",
            price: 34.5,
          },
          { type: "MenuItem", name: "Paprika-Mais-Salat", price: 34.5 },
          {
            type: "MenuItem",
            name: "Bunte Blattsalate",
            description: "mit zwei Dressings",
            price: 34.5,
          },
          { type: "MenuItem", name: "Großer Brotkorb", price: 34.5 },
        ],
      },
      {
        type: "MenuSection",
        name: "Frisch vom Grill und aus der Pfanne",
        priority: 1,
        items: [
          {
            type: "MenuItem",
            name: "Auswahl von verschiedenen Würstchen",
            price: 34.5,
          },
          {
            type: "MenuItem",
            name: "Zartes Rindersteak",
            price: 34.5,
          },
          {
            type: "MenuItem",
            name: "Marinierte Hähnchenbrustfilets „Sweet Chili“",
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
            name: "Mediterranes Gemüse aus der Pfanne",
            price: 34.5,
          },
          { type: "MenuItem", name: "Gegrillte Maiskolben", price: 34.5 },
          {
            type: "MenuItem",
            name: "Senf, Ketchup, Kräuterbutter und verschiedene Dips",
            price: 34.5,
          },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        priority: 2,
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
      buffetPrice: 35,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeisen und Salate",
        priority: 0,
        items: [
          {
            type: "MenuItem",
            name: "Geräucherte Forellen- und Makrelenfilets",
            description: "mit Sahnemeerrettich",
            price: 34.8,
          },
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
            name: "Verschiedene Rohkost- und Blattsalate mit zwei Dressings",
            price: 34.8,
          },
          { type: "MenuItem", name: "Bunte Brotauswahl", price: 34.8 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        priority: 1,
        items: [
          {
            type: "MenuItem",
            name: "Putensteak unter Zwiebel-Kräuterhaube",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Zartes Rinderschmorsteak „Esterhazy“",
            price: 34.8,
            description: "mit kräftiger Bratensauce",
          },
          { type: "MenuItem", name: "Kartoffelknödel", price: 34.8 },
          { type: "MenuItem", name: "Schwäbische Eierspätzle", price: 34.8 },
          {
            type: "MenuItem",
            name: "Kartoffel-Gemüse-Auflauf (vegetarisch)",
            price: 34.8,
          },
          { type: "MenuItem", name: "Rustikales Gemüse", price: 34.8 },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        priority: 2,
        items: [
          {
            type: "MenuItem",
            name: "Kaiserschmarrn mit Apfelkompott",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Himbeertraum",
            price: 34.8,
          },
        ],
      },
    ],
  },
  {
    name: "Vegetarisches Buffet",
    minimumOrder: {
      total: 20,
      perType: 34.8,
      buffetPrice: 35,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeisen und Salate",
        priority: 0,
        items: [
          {
            type: "MenuItem",
            name: "Zucchiniröllchen mit Frischkäse und Feigen gefüllt",
            price: 34.8,
          },
          { type: "MenuItem", name: "Marinierter Ziegenkäse", price: 34.8 },
          {
            type: "MenuItem",
            name: "Yufkaröllchen gefüllt mit Spinat und Hirtenkäse",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Asiatischer Gemüsesalat mit Erdnussdressing",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Fenchel-Chinakohl-Salat mit Orangenspalten",
            price: 34.8,
          },
          { type: "MenuItem", name: "Ananas-Apfel-Karotten-Salat", price: 34.8 },
          { type: "MenuItem", name: "Griechischer Bauernsalat", price: 34.8 },
          {
            type: "MenuItem",
            name: "Rucola-Radicchio-Salat mit Walnüssen und Sherrydressing",
            price: 34.8,
          },
          { type: "MenuItem", name: "Paprika-Mais-Salat", price: 34.8 },
          {
            type: "MenuItem",
            name: "Gurkensalat in Joghurt-Dill-Dressing",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Schwäbischer Kartoffelsalat",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Gartenfrische Blattsalate",
            description: "mit verschiedenen Dressings",
            price: 34.8,
          },
          { type: "MenuItem", name: "Bunte Brotauswahl", price: 34.8 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        priority: 1,
        items: [
          {
            type: "MenuItem",
            name: "Paprika gefüllt mit Gemüse-Couscous",
            description: "mit Tomaten-Basilikum-Concassée",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Kürbisfalafel mit Hummus-Dip",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Vegetarische Frikadellen",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Kartoffel-Zucchini-Rösti mit Paprika",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Gemüsemaultaschen auf Blattspinat",
            price: 34.8,
          },
          {
            type: "MenuItem",
            name: "Helle Käse-Kräutersauce",
            price: 34.8,
          },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        priority: 2,
        items: [
          { type: "MenuItem", name: "Frischer Obstsalat", price: 34.8 },
          { type: "MenuItem", name: "Johannisbeer-Joghurt-Creme", price: 34.8 },
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
      buffetPrice: 41.3,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeisen und Salate",
        priority: 0,
        items: [
          {
            type: "MenuItem",
            name: "Gegrilltes Gemüse, eingelegt in nativem Olivenöl",
            price: 41.3,
          },
          {
            type: "MenuItem",
            name: "Zucchiniröllchen mit Hirtenkäse-Rucola-Füllung",
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
            name: "Honigmelone mit luftgetrocknetem Putenschinken",
            price: 41.3,
          },
          { type: "MenuItem", name: "Tomate „Caprese“", price: 41.3 },
          {
            type: "MenuItem",
            name: "Rucola mit frischen Kirschtomaten",
            price: 41.3,
          },
          { type: "MenuItem", name: "Tabouleh", description: "Petersiliensalat mit Bulgur, Tomaten, Minze und Zitrone", price: 41.3 },
          {
            type: "MenuItem",
            name: "Bunte Salatschüssel mit zwei Dressings",
            price: 41.3,
          },
          { type: "MenuItem", name: "Bunte Brotauswahl", price: 41.3 },
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
          {
            type: "MenuItem",
            name: "Lammbeinscheiben",
            description: "dazu kräftige Bratensauce und Madeirasauce",
            price: 41.3,
          },
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
        priority: 2,
        items: [
          { type: "MenuItem", name: "Obstplatte der Saison", price: 41.3 },
          {
            type: "MenuItem",
            name: "Mascarpone-Quark-Creme mit marinierten Kirschen",
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
    name: "Hochzeitsbuffet „Das glückliche Ehepaar“",
    minimumOrder: {
      total: 20,
      perType: 48.3,
      buffetPrice: 48,
    },
    items: [
      {
        type: "MenuSection",
        name: "Suppe",
        items: [{ type: "MenuItem", name: "Festtagssuppe", price: 48.3 }],
      },
      {
        type: "MenuSection",
        name: "Vorspeisen und Salate",
        priority: 0,
        items: [
          {
            type: "MenuItem",
            name: "Variation aus Fluss und Meer",
            description: "mit Sahnemeerrettich, Senf-Orangensauce",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Gegrilltes Gemüse, eingelegt in nativem Olivenöl",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Antipasti-Spieße",
            description:
              "Tomate-Mozzarella, Melone-Putenschinken, Hirtenkäse und Oliven",
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
            name: "Truthahnröllchen, verschieden gefüllt",
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
            description: "mit zwei Dressings",
            price: 48.3,
          },
          { type: "MenuItem", name: "Bunte Brotauswahl", price: 48.3 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        priority: 1,
        items: [
          {
            type: "MenuItem",
            name: "Zarte Putensteaks",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Kleine Rostbraten mit Röstzwiebeln",
            description: "dazu kräftige Bratensauce",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Claress-Fischfilet, frisch gebraten",
            description: "mit Fischsamtsauce",
            price: 48.3,
          },
          { type: "MenuItem", name: "Schwäbische Eierspätzle", price: 48.3 },
          { type: "MenuItem", name: "Kartoffel-Lauch-Gratin", price: 48.3 },
          { type: "MenuItem", name: "Reismosaik", price: 48.3 },
          {
            type: "MenuItem",
            name: "Variation von Gartengemüsen",
            price: 48.3,
          },
          {
            type: "MenuItem",
            name: "Helle Marsalasauce",
            price: 48.3,
          },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        priority: 2,
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
    name: "Gourmetreise-Buffet",
    minimumOrder: {
      total: 30,
      perType: 42.6,
      buffetPrice: 43,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeisen und Salate",
        priority: 0,
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
            name: "Delikate Fischterrine",
            description: "dazu Sahnemeerrettich, Preiselbeersahne",
            price: 42.6,
          },
          {
            type: "MenuItem",
            name: "Yufkaröllchen gefüllt mit Spinat und Hirtenkäse",
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
        priority: 1,
        items: [
          {
            type: "MenuItem",
            name: "Zanderfilet gebraten",
            description: "mit Fischsamtsauce",
            price: 42.6,
          },
          { type: "MenuItem", name: "Lammrücken nach provenzalischer Art", price: 42.6 },
          {
            type: "MenuItem",
            name: "Roastbeef in der Kräuterkruste",
            description: "mit kräftiger Bratensauce",
            price: 42.6,
          },
          { type: "MenuItem", name: "Duftreis", price: 42.6 },
          { type: "MenuItem", name: "Bircher-Benner-Kartoffeln", price: 42.6 },
          { type: "MenuItem", name: "Schwäbische Eierspätzle", price: 42.6 },
          { type: "MenuItem", name: "Buntes Gemüse der Saison", price: 42.6 },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        priority: 2,
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
      buffetPrice: 44,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeisen und Salate",
        priority: 0,
        items: [
          {
            type: "MenuItem",
            name: "Graved Lachs mit Senf-Dill-Sauce",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Crêpes gefüllt mit Lachs und Rucola",
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
            name: "Gebratene Pilze in Balsamicodressing",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Gurkentaler mit Käse-Kräuter-Rosette",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Entenbrust, rosa gebraten mit Orangenconfit",
            price: 43.6,
          },
          { type: "MenuItem", name: "Ananas-Apfel-Karotten-Salat", price: 43.6 },
          { type: "MenuItem", name: "Paprika-Mais-Salat", price: 43.6 },
          {
            type: "MenuItem",
            name: "Gurkensalat in Joghurt-Dill-Dressing",
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
            description: "mit zwei Dressings",
            price: 43.6,
          },
          { type: "MenuItem", name: "Gemischter Brotkorb", price: 43.6 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        items: [
          {
            type: "MenuItem",
            name: "Putensteak mit gebratenen Ananasscheiben",
            description: "mit Apfel-Currysauce",
            price: 43.6,
          },
          {
            type: "MenuItem",
            name: "Rinderbraten",
            description: "mit kräftiger Bratensauce",
            price: 43.6,
          },
          { type: "MenuItem", name: "Basmatireis", price: 43.6 },
          { type: "MenuItem", name: "Kartoffelrösti", price: 43.6 },
          {
            type: "MenuItem",
            name: "Mandelbrokkoli und Babymöhrchen",
            price: 43.6,
          },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        priority: 2,
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
  {
    name: "Orientalisches Buffet",
    minimumOrder: {
      total: 20,
      perType: 39.8,
      buffetPrice: 40,
    },
    items: [
      {
        type: "MenuSection",
        name: "Vorspeisen und Salate",
        priority: 0,
        items: [
          { type: "MenuItem", name: "Kibbeh-Nayieh", price: 39.8 },
          { type: "MenuItem", name: "Fattousch", description: "Libanesischer Brotsalat mit geröstetem Fladenbrot und frischem Gemüse", price: 39.8 },
          { type: "MenuItem", name: "Tabouleh", description: "Petersiliensalat mit Bulgur, Tomaten, Minze und Zitrone", price: 39.8 },
          { type: "MenuItem", name: "Hummus", description: "Kichererbsenpüree mit Tahini", price: 39.8 },
          { type: "MenuItem", name: "Baba-Ghanoush", description: "Püree aus gerösteten Auberginen mit Tahini", price: 39.8 },
          {
            type: "MenuItem",
            name: "Blätterteighalbmonde gefüllt mit Käse oder Hackfleisch",
            price: 39.8,
          },
          { type: "MenuItem", name: "Rucola-Radicchio-Salat mit Walnüssen", price: 39.8 },
        ],
      },
      {
        type: "MenuSection",
        name: "Hauptspeise",
        priority: 1,
        items: [
          { type: "MenuItem", name: "Mansaf mit Lammfleisch", description: "Lammfleisch in Joghurtsauce, dazu Reis", price: 39.8 },
          { type: "MenuItem", name: "Kabab-Hindi", price: 39.8 },
          { type: "MenuItem", name: "Kabseh mit Hähnchenkeule", description: "Würziger Reis mit Hähnchenkeule", price: 39.8 },
          { type: "MenuItem", name: "Shakriyeh", description: "Geschmortes Fleisch in Joghurtsauce", price: 39.8 },
        ],
      },
      {
        type: "MenuSection",
        name: "Nachspeise",
        priority: 2,
        items: [
          { type: "MenuItem", name: "Baklava", description: "Blätterteiggebäck mit Nüssen und Sirup", price: 39.8 },
          { type: "MenuItem", name: "Kunafa Nabulsia", description: "Warmes Dessert aus Teigfäden und Käse mit Zuckersirup", price: 39.8 },
        ],
      },
    ],
  },
];

export const Menus: Menu[] = [fingerfoodMenu, zumKominierenMenu, ...menu];
