/**
 * Paving Pros — single source of truth for everything that still needs a real
 * value before launch. Anything marked TODO is a placeholder.
 */

/**
 * Estimate booking calendar. NOTE: this is still the GoHighLevel calendar
 * lifted from the Paving Leads agency site — it books a "Paving Leads Strategy
 * Call" in Asia/Jerusalem. Swap it for the contractor's own calendar before
 * launch, or drop /book and send people to the quote form instead.
 */
export const calendarEmbedUrl =
  "https://api.leadconnectorhq.com/widget/booking/JTJtFTRYwd9cTACA8c1r";

export const site = {
  name: "Paving Pros",
  legalName: "Paving Pros LLC", // TODO: confirm
  tagline: "Asphalt paving, sealcoating and repair",
  url: "https://pavingpros.com", // TODO: confirm production domain

  // TODO: real contact details before launch
  phone: "(555) 000-0000",
  phoneHref: "tel:+15550000000",
  email: "hello@pavingpros.com",

  // TODO: yard / mailing address shown in the footer and on Contact
  address: {
    line1: "[Street address]",
    city: "[City]",
    state: "[ST]",
    zip: "[ZIP]",
  },

  hours: [
    { days: "Monday – Friday", time: "7:00am – 6:00pm" },
    { days: "Saturday", time: "8:00am – 2:00pm" },
    { days: "Sunday", time: "Closed" },
  ],

  /** Estimate booking page. TODO: this currently embeds Paving Leads' calendar. */
  bookingUrl: "/book",

  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

/** How fast an estimate comes back. TODO: verify before launch. */
export const estimateWindow = "24 hours";

/**
 * Towns covered. TODO: replace with the real service area — these drive the
 * Service Areas page and the footer list.
 */
export const serviceAreas = [
  "[Town one]",
  "[Town two]",
  "[Town three]",
  "[Town four]",
  "[Town five]",
  "[Town six]",
  "[Town seven]",
  "[Town eight]",
];

/** TODO: confirm the radius wording used on the Service Areas page. */
export const serviceRadius = "[50] miles";

/** Home stats bar. TODO: verify every figure, or set show to false. */
export const stats = {
  show: true,
  items: [
    { value: "[X]", label: "Years paving" },
    { value: "[X]", label: "Driveways and lots completed" },
    { value: "[X]", label: "Towns covered" },
    { value: "Free", label: "Estimates, always" },
  ],
};

/** Typical job values quoted on the pricing/estimate copy. TODO: verify both. */
export const jobValues = {
  residential: "$4,000 to $12,000",
  commercial: "$20,000 to $80,000+",
};

/**
 * Customer reviews. TODO: replace with real ones, ideally pulled from Google.
 * Leave the array empty to hide the section.
 */
export const testimonials = [
  {
    quote: "[Review about the driveway, the crew, or how the job was left]",
    name: "[Customer name]",
    company: "[Town, ST]",
    location: "Residential",
  },
  {
    quote: "[Review from a property manager about a lot or striping job]",
    name: "[Customer name]",
    company: "[Town, ST]",
    location: "Commercial",
  },
];

/** Crew / owner bios on About. TODO: real names, titles and bios. */
export const team = [
  {
    name: "[Name]",
    title: "[Owner / Estimator]",
    bio: "[One or two sentences: how long they have been paving and what they handle.]",
  },
  {
    name: "[Name]",
    title: "[Crew lead]",
    bio: "[One or two sentences.]",
  },
];

/** Licence and insurance line. TODO: fill in or remove the block entirely. */
export const credentials = {
  licence: "[Licence #]",
  insured: true,
  bonded: true,
};
