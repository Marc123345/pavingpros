# Paving Pros

Marketing site for Paving Pros, an asphalt paving contractor — driveways, lots,
sealcoating, repairs and striping, sold to homeowners and property managers.
Built on the Nexella Next.js template and recoloured to the Paving Pros brand.

It began as a lead-generation directory aimed at contractors; the design survived
that pivot but every word of the copy was rewritten for property owners.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services` | All services |
| `/services/[slug]` | Six service pages, generated from `src/lib/services.ts` |
| `/residential` | For homeowners |
| `/commercial` | For businesses and property managers |
| `/gallery` | Our work |
| `/service-areas` | Towns covered |
| `/about` | About |
| `/contact` | Free estimate request |
| `/book` | Book an estimate visit (calendar embed) |
| `/thank-you` | Post-submission confirmation (noindex) |

Adding an entry to `services.ts` adds a service page, a card on `/services`, a
footer link and a marquee label. The home hero carries a short estimate form that
posts to the same `/api/quote` endpoint as the full form on `/contact`.

## Brand

The orange comes from the supplied logo (`#F7931E`, with `#FFB347` as the road
highlight); the navy is from pavinglead.com. The original build used pavinglead's
`#ff6600`, but that is a red-orange at 24° hue against the logo's amber at 32°, and
the two read as different brands sitting next to each other in the header — so the
palette follows the logo.

| Token | Value | Use |
| --- | --- | --- |
| `--pp-orange` | `#f7931e` | Primary accent, CTAs |
| `--pp-orange-soft` | `#ffb347` | Gradients, hover |
| `--pp-navy` | `#001529` | Page ground |
| `--pp-ink` | `#001019` | Alternating sections |

Type: Plus Jakarta Sans (headings) + Noto Sans (body), both from Google Fonts.

Template variables are overridden in `src/app/styles/css/style.css` (`:root`);
everything Paving Pros specific lives in `src/app/styles/css/pavingpros.css`.

## Before launch

Copy is written for property owners; the original contractor-facing deck no longer
applies. Everything still needing a real value is in **`src/lib/site.ts`**:

- `site.phone` / `site.phoneHref` / `site.email` — real contact details
- `site.address` — yard or mailing address for the footer
- `site.hours` — confirm the opening hours
- `site.url` — production domain (also update `metadataBase` in `src/app/layout.tsx`)
- `site.social` — social profile links
- `serviceAreas` and `serviceRadius` — the real towns; these drive the footer,
  the home area section and the whole `/service-areas` page
- `stats` — replaces the `[X]` figures, or set `stats.show = false`
- `credentials.licence` — licence number shown on About
- `testimonials` — real reviews (empty array hides the section)
- `team` — real names, titles and bios
- `estimateWindow` — how fast an estimate actually comes back

Also outstanding:

- **`src/app/api/quote/route.ts`** accepts the estimate request and returns success
  but does not deliver it anywhere yet. Wire it to a CRM, an email provider, or a
  webhook before launch. Both the hero form and the full form post to it; the hero
  form tags its payload with `source: "hero"`.
- **`/gallery` is stock.** Replace it with real job photos, ideally
  before-and-afters, as soon as there are any. Stock sells far worse than the
  contractor's own work.
- **The booking calendar** on `/book` is still the GoHighLevel widget from the
  Paving Leads *agency* site — it books a "Paving Leads Strategy Call", runs on a
  30-minute slot, and serves **Asia/Jerusalem** times. A paving contractor needs
  their own calendar here, or `/book` should be dropped and everything pointed at
  the quote form instead.
- Two copy claims are marked `[VERIFY]` in the deck and are live on the site as written:
  the member dashboard (How It Works, step 6) and the off-season pause. Confirm both,
  or cut them.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

Note: another project's service worker hijacks port 5173 on this machine, so use a
different port if you override the default.

## Imagery

Two kinds:

- **Logo** — `public/assets/images/logo/`. The supplied Paving Pros kit: horizontal
  (light and on-dark), stacked on-dark, and the icon mark. The site is dark, so the
  header and footer use `paving-pros-logo-horizontal-on-dark.svg`. The favicon and
  apple-touch-icon are rasterised from `paving-pros-icon.svg`.
- **Brand diagrams** — `public/assets/images/brand/`. Purpose-built SVGs in the
  palette: the hero territory map, the exclusive-vs-shared lead routing comparison,
  and the demand-routing diagram on About.
- **Photography** — `public/assets/images/photos/`. Ten Pexels shots covering the
  crew, a roller, a paver and dump truck, an aerial lot, a driveway, crack sealing,
  fresh striping, a cracked surface and an asphalt texture. Licence and per-file
  sources are in `public/assets/images/photos/CREDITS.md`. All are Pexels rather
  than found on the open web, because that licence actually permits commercial use
  on a client site.

  `PhotoBand` (`src/app/section/shared/PhotoBand.tsx`) is the full-bleed divider
  used on How It Works, Book and Sign Up; pass `height="short"` for a plain divider
  or add a `caption` for a feature band.

The template's own photos were grey `860 x 600` placeholders, so none of them are
used. Replace the Pexels stock with real member job-site photos as soon as any are
available.

## Template devices reused

The template's full stylesheet is still in the project, so several of its section
treatments are available with no new CSS and are already in the brand palette:

- **Services marquee** (`.marquee`) — the scrolling band between the benefits and
  the steps. Only names services the copy deck already lists; it makes no new claim.
- **Editorial numbered rows** (`.work-single-box`) — "What lands in your territory"
  on the home page: ghost number, copy, photo. Stacks on mobile.
- **Counting stats** — the stats bar animates its figures into view. `Stats` parses
  each value, so `1,200+` counts up while `[X]` and `Real time` render as written.
  The counter shows its final value first and only animates on top, so a figure is
  never blank.

## Two template mechanics that were removed

Both were replaced rather than patched, because both could leave a visitor looking
at nothing:

- **The preloader** covered the page until `document.readyState` was complete *and*
  every `<img>` reported `complete`. A hidden logo in the mobile drawer never did,
  so the page stayed black.
- **wow.js** set `visibility: hidden` inline on every `.wow` element and revealed
  them from offsets cached at init. Lazy-loaded images shifted the layout and the
  offsets went stale. `RevealOnScroll` replaces it with an IntersectionObserver that
  fails open — the hidden state is only ever applied by the script, so if it does not
  run the content is simply visible.

## A note on styles

The template shipped both SCSS sources and compiled CSS, and nothing in the build
compiled the SCSS. The recolour was applied to the compiled CSS, so the SCSS was
removed rather than left behind out of sync. **`src/app/styles/css/` is the source
of truth.**
