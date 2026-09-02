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
| `/thank-you` | Post-submission confirmation (noindex) |

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
  webhook before launch.
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

The template shipped grey placeholder photos, so none are used. The three brand
diagrams in `public/assets/images/brand/` (territory map, exclusive-vs-shared lead
routing, demand routing) and the logo are purpose-built SVGs in the brand palette.
Swap in real job-site photography whenever it is available.

## A note on styles

The template shipped both SCSS sources and compiled CSS, and nothing in the build
compiled the SCSS. The recolour was applied to the compiled CSS, so the SCSS was
removed rather than left behind out of sync. **`src/app/styles/css/` is the source
of truth.**
