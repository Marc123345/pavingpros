# Paving Pros

Five-page marketing site for the Paving Pros contractor directory, built on the
Nexella Next.js template and recoloured to the Paving Pros brand.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/how-it-works` | How It Works |
| `/pricing` | Pricing |
| `/about` | About |
| `/sign-up` | Sign Up / Contact |
| `/book` | Book a call — embeds the live booking calendar |
| `/thank-you` | Post-submission confirmation (noindex) |

The home page hero carries a short version of the sign-up form (company, name,
phone, email, city/state). It posts to the same `/api/signup` endpoint as the
full form and redirects to `/thank-you`.

## Brand

Palette taken from pavinglead.com:

| Token | Value | Use |
| --- | --- | --- |
| `--pp-orange` | `#ff6600` | Primary accent, CTAs |
| `--pp-orange-soft` | `#ff8534` | Gradients, hover |
| `--pp-navy` | `#001529` | Page ground |
| `--pp-ink` | `#001019` | Alternating sections |

Type: Plus Jakarta Sans (headings) + Noto Sans (body), both from Google Fonts.

Template variables are overridden in `src/app/styles/css/style.css` (`:root`);
everything Paving Pros specific lives in `src/app/styles/css/pavingpros.css`.

## Before launch

All copy is the approved deck verbatim. Everything still needing a real value is
in **`src/lib/site.ts`** — edit that one file and the whole site updates:

- `site.phone` / `site.phoneHref` / `site.email` — real contact details
- `site.bookingUrl` — booking link for every "Book a call" button
- `site.url` — production domain (also update `metadataBase` in `src/app/layout.tsx`)
- `site.social` — social profile links
- `pricing.price` — replaces `[PRICE]`; set `pricing.adSpendNote` if ad spend is billed separately
- `stats` — replaces the `[X]` figures, or set `stats.show = false` to hide the bar
- `jobValues` — verify the residential and commercial job-value ranges
- `statesRun` — number of states on the About page
- `testimonials` — two or three real contractor quotes (empty array hides the section)
- `team` — real names, titles, and bios

Also outstanding:

- **`src/app/api/signup/route.ts`** accepts the territory request and returns success
  but does not deliver it anywhere yet. Wire it to the CRM, an email provider, or a
  webhook before launch. Both the hero form and the full form post to it; the hero
  form tags its payload with `source: "hero"`.
- **The booking calendar** (`calendarEmbedUrl` in `src/lib/site.ts`) is the live
  GoHighLevel/LeadConnector widget lifted from the Paving Leads site. Two things to
  check in GoHighLevel before launch: the slot is currently **30 minutes** (the old
  Paving Leads copy said 15), and it is serving times in **Asia/Jerusalem**, which is
  what US contractors will be converting from.
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

- **Brand diagrams** — `public/assets/images/brand/`. Purpose-built SVGs in the
  palette: the hero territory map, the exclusive-vs-shared lead routing comparison,
  and the demand-routing diagram on About. The logo is here too.
- **Photography** — `public/assets/images/photos/`. Four Pexels shots (paving crew,
  road roller, aerial parking lot, residential driveway) used on the home page,
  pricing page, and About. Licence and sources are in
  `public/assets/images/photos/CREDITS.md`.

The template's own photos were grey `860 x 600` placeholders, so none of them are
used. Replace the Pexels stock with real member job-site photos as soon as any are
available.

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
