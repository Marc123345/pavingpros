/**
 * The service catalogue. Each entry becomes a card on /services and a page at
 * /services/[slug], so adding a service here adds a page.
 */

export interface Service {
  slug: string;
  title: string;
  short: string;
  /** One line under the page title. */
  intro: string;
  body: string[];
  bullets: string[];
  /** What a property owner is usually trying to fix. */
  signs: string[];
  image: string;
  imageAlt: string;
  icon: string;
  audience: ("residential" | "commercial")[];
}

export const services: Service[] = [
  {
    slug: "asphalt-paving",
    title: "Asphalt paving",
    short: "New driveways and lots, built on a base that holds up.",
    intro:
      "New asphalt for driveways, parking lots and private roads — excavated, graded and compacted so it drains and stays put.",
    body: [
      "Most asphalt that fails early did not fail in the surface. It failed underneath, in a base that was too thin, poorly compacted, or laid over ground that never drained. We dig out and build the base first, then pave.",
      "You get a written scope before we start: depth of the base, depth of the asphalt, where water is going to run, and what the finished grade will be.",
    ],
    bullets: [
      "Excavation and grading",
      "Compacted aggregate base",
      "Hot-mix asphalt, machine laid",
      "Rolled and compacted in lifts",
      "Edges cut clean and tapered",
    ],
    signs: [
      "You are putting in a driveway where there is gravel or dirt now",
      "The existing surface is beyond patching",
      "Water pools instead of running off",
    ],
    image: "/assets/images/photos/roller-fresh-asphalt.jpg",
    imageAlt: "A roller compacting a fresh mat of asphalt behind the paver",
    icon: "fa-solid fa-road",
    audience: ["residential", "commercial"],
  },
  {
    slug: "sealcoating",
    title: "Sealcoating",
    short: "The cheapest thing you can do to make asphalt last.",
    intro:
      "A protective coat over sound asphalt that slows the oxidation, water and fuel damage that turns a surface grey and brittle.",
    body: [
      "Asphalt is held together by binder, and sunlight and water break that binder down. Once it goes, the surface ravels, cracks open and water gets into the base. Sealcoating buys years for a fraction of the cost of repaving.",
      "It is not a repair. We fill cracks and patch failures first — sealer over an open crack just hides it for a season.",
    ],
    bullets: [
      "Surface cleaned and blown down",
      "Oil spots primed",
      "Cracks filled before sealing",
      "Two coats where the wear is heaviest",
      "Cure time explained before we start",
    ],
    signs: [
      "The surface has gone from black to grey",
      "Loose stones come up when you brush it",
      "It has been three or more years since the last coat",
    ],
    image: "/assets/images/photos/asphalt-texture.jpg",
    imageAlt: "Close view of an aged asphalt surface losing its binder",
    icon: "fa-solid fa-brush",
    audience: ["residential", "commercial"],
  },
  {
    slug: "resurfacing",
    title: "Resurfacing and overlay",
    short: "A new surface without tearing out a base that still works.",
    intro:
      "When the base is sound but the surface is spent, an overlay gives you a new driving surface for less than a full replacement.",
    body: [
      "We check the base first. If it is stable, we mill the edges so the new asphalt ties in at the right height, repair the failed areas, and lay a new mat over the top.",
      "If the base has gone, we will tell you. An overlay on a failing base cracks through in a couple of seasons and wastes your money.",
    ],
    bullets: [
      "Base assessed before we quote",
      "Failed areas cut out and repaired",
      "Edges milled to tie in at grade",
      "New asphalt laid and compacted",
      "Drainage checked and corrected",
    ],
    signs: [
      "Widespread surface cracking but a firm base",
      "The surface is rough but the shape is still right",
      "Patches are multiplying every year",
    ],
    image: "/assets/images/photos/paver-truck.jpg",
    imageAlt: "A paver laying a new mat of asphalt from a dump truck",
    icon: "fa-solid fa-layer-group",
    audience: ["residential", "commercial"],
  },
  {
    slug: "crack-filling-and-repair",
    title: "Crack filling and repair",
    short: "Close the cracks before water gets into the base.",
    intro:
      "Hot-pour crack sealing, pothole repair and cutting out failed sections, so small problems stop becoming resurfacing jobs.",
    body: [
      "Every crack is a route for water. Water gets into the base, freezes, lifts the asphalt, and the crack becomes a pothole. Sealing them is the highest-return maintenance there is.",
      "Where the asphalt has already broken up — alligator cracking, potholes, edges crumbling — we saw-cut the failed area out, repair what is underneath, and patch it properly rather than filling the hole with cold mix.",
    ],
    bullets: [
      "Cracks routed and blown clean",
      "Hot rubberised sealant",
      "Potholes cut square and patched",
      "Alligatored areas dug out and rebuilt",
      "Failed edges reinstated",
    ],
    signs: [
      "Cracks you can fit a coin into",
      "Potholes forming at the same spots each spring",
      "Areas that flex or feel soft under a vehicle",
    ],
    image: "/assets/images/photos/crack-seal.jpg",
    imageAlt: "Hot sealant being poured into a crack in asphalt",
    icon: "fa-solid fa-screwdriver-wrench",
    audience: ["residential", "commercial"],
  },
  {
    slug: "line-striping",
    title: "Line striping and markings",
    short: "Layout that moves traffic and meets the code.",
    intro:
      "Parking stalls, fire lanes, accessible spaces, arrows and stencils — laid out to fit the site and repainted before they fade out.",
    body: [
      "A lot with worn-off lines loses spaces, and an accessible space that is not marked and signed correctly is a liability. We lay out to the dimensions your site actually needs and mark it to code.",
      "If the lot is being sealed, striping goes on after. If it is a repaint over sound asphalt, we can usually do it in a day and hand the lot back the same evening.",
    ],
    bullets: [
      "Layout planned to maximise spaces",
      "Accessible spaces and access aisles",
      "Fire lanes and no-parking zones",
      "Arrows, stop bars and stencils",
      "Wheel stops and bollards where needed",
    ],
    signs: [
      "Drivers are parking crooked because the lines are gone",
      "Accessible spaces are faded or not signed",
      "The lot has just been sealed or resurfaced",
    ],
    image: "/assets/images/photos/striping.jpg",
    imageAlt: "Fresh yellow lines painted on new asphalt",
    icon: "fa-solid fa-grip-lines",
    audience: ["commercial"],
  },
  {
    slug: "concrete",
    title: "Concrete flatwork",
    short: "Aprons, walks, curbs and pads where concrete is the right call.",
    intro:
      "Concrete where it outlasts asphalt — garage aprons, sidewalks, curbing, dumpster pads and trench drains.",
    body: [
      "Asphalt is the right surface for most driveways and lots, but not everywhere. Where vehicles turn on the spot, where a dumpster gets dropped, or where you need a hard edge to hold the asphalt in, concrete is the better material.",
      "We form, pour, finish and cut control joints so it cracks where we put the joint rather than across the middle of the slab.",
    ],
    bullets: [
      "Garage aprons and thresholds",
      "Sidewalks and walkways",
      "Curbing and edge restraint",
      "Dumpster and equipment pads",
      "Control joints cut, not guessed",
    ],
    signs: [
      "The apron at the garage is breaking up",
      "You need a hard edge to stop the asphalt spreading",
      "A dumpster is sitting on asphalt and sinking into it",
    ],
    image: "/assets/images/photos/work-zone.jpg",
    imageAlt: "Cones set out along a work zone on a paved surface",
    icon: "fa-solid fa-cubes",
    audience: ["residential", "commercial"],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
