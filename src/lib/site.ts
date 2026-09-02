/**
 * Paving Pros — single source of truth for everything that still needs
 * a real number, name, or link before launch.
 *
 * Every value marked TODO comes from a [BRACKET] or [VERIFY] in the
 * approved copy deck. Fill these in and the whole site updates.
 */

/**
 * GoHighLevel / LeadConnector booking calendar, taken from the Paving Leads
 * site (Marc123345/Pavingleads). This is the live consultation calendar and
 * it is embedded on /book. NOTE: the widget is currently configured for a
 * 30-minute slot in the Asia/Jerusalem timezone — check both in GoHighLevel
 * before launch, since US contractors will see the converted times.
 */
export const calendarEmbedUrl =
  "https://api.leadconnectorhq.com/widget/booking/JTJtFTRYwd9cTACA8c1r";

export const site = {
  name: "Paving Pros",
  tagline: "Exclusive paving leads in your territory",
  url: "https://pavingpros.com", // TODO: confirm production domain

  // TODO: real contact details before launch
  phone: "(555) 000-0000",
  phoneHref: "tel:+15550000000",
  email: "hello@pavingpros.com",

  // Internal page that embeds the calendar below. Every "Book a call" points here.
  bookingUrl: "/book",

  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
};

/** Membership price. TODO: set real price before launch. */
export const pricing = {
  price: "[PRICE]",
  period: "/ month",
  terms: "Month to month. Cancel anytime.",
  // Set to a string to show the separate ad-spend line, or null to hide it.
  adSpendNote: null as string | null,
};

/** Home page stats bar. TODO: verify every number, or set showStats to false. */
export const stats = {
  show: true,
  items: [
    { value: "[X]", label: "Contractors in the directory" },
    { value: "[X]", label: "Leads delivered" },
    { value: "[X]", label: "States covered" },
    { value: "Real time", label: "Lead delivery" },
  ],
};

/** Job values quoted on the pricing page. TODO: verify both ranges. */
export const jobValues = {
  residential: "$4,000 to $12,000",
  commercial: "$20,000 to $80,000+",
};

/** States the team has run campaigns in (About page). TODO: verify. */
export const statesRun = "[NUMBER]";

/**
 * Testimonials. TODO: replace with two or three real contractor quotes.
 * Leave the array empty to hide the section entirely.
 */
export const testimonials = [
  {
    quote: "[Quote about lead quality or first job closed]",
    name: "[Name]",
    company: "[Company]",
    location: "[City, State]",
  },
  {
    quote: "[Quote about exclusivity or not competing on price]",
    name: "[Name]",
    company: "[Company]",
    location: "[City, State]",
  },
];

/** Team bios on the About page. TODO: real names, titles, and bios. */
export const team = [
  {
    name: "[Name]",
    title: "[Title]",
    bio: "[One or two sentences on their background and what they do for members.]",
  },
  {
    name: "[Name]",
    title: "[Title]",
    bio: "[One or two sentences on their background and what they do for members.]",
  },
];
