import React from "react";
import type { Metadata } from "next";
import AppImage from "../components/elements/AppImage";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import ClosingCta from "../section/shared/ClosingCta";

export const metadata: Metadata = {
  title: { absolute: "Our Work | Paving Pros" },
  description:
    "Driveways, parking lots, sealcoating, crack repair and striping — a look at the kind of work we do.",
};

/**
 * TODO: replace every one of these with real job photos. Stock is a stand-in
 * until there are before-and-afters from actual jobs, which sell far better.
 */
const shots = [
  { src: "/assets/images/photos/roller-fresh-asphalt.jpg", alt: "Roller compacting a fresh mat of asphalt", label: "Asphalt paving", wide: true },
  { src: "/assets/images/photos/driveway.jpg", alt: "Finished residential driveway to a double garage", label: "Residential driveway" },
  { src: "/assets/images/photos/parking-lot.jpg", alt: "Freshly striped commercial parking lot from above", label: "Commercial lot" },
  { src: "/assets/images/photos/crew-laying.jpg", alt: "Crew raking hot asphalt behind a paver", label: "Hot-mix paving", wide: true },
  { src: "/assets/images/photos/striping.jpg", alt: "Fresh yellow lines on new asphalt", label: "Line striping" },
  { src: "/assets/images/photos/crack-seal.jpg", alt: "Hot sealant poured into a crack", label: "Crack sealing" },
  { src: "/assets/images/photos/road-roller.jpg", alt: "Roller on a fresh asphalt surface", label: "Compaction" },
  { src: "/assets/images/photos/work-zone.jpg", alt: "Cones set out along a work zone", label: "Site set-up" },
];

export default function GalleryPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="Our work"
        headline={<>Driveways and lots we&apos;ve <span>put down</span></>}
        subhead="A look at the kind of work we take on, from single driveways to lots that have to stay open while we phase them."
      />

      <section className="gallery-section section-padding">
        <div className="auto-container">
          <div className="gallery-grid">
            {shots.map((shot, i) => (
              <figure
                className={`gallery-item ${shot.wide ? "gallery-item--wide" : ""} wow`}
                data-wow-delay={`${(i % 3) * 120}ms`}
                key={shot.src + i}
              >
                <AppImage src={shot.src} alt={shot.alt} width={1400} height={900} />
                <figcaption>{shot.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="gallery-note">
            Photos shown are representative of the work we do.
          </p>
        </div>
      </section>

      <ClosingCta
        headline="Get a price for yours."
        body="Free estimate, in writing, with no obligation to go ahead."
        buttonLabel="Get my free estimate"
        href="/contact"
      />
    </LayoutWrapper>
  );
}
