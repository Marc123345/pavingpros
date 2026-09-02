import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import PhotoBand from "../section/shared/PhotoBand";
import ClosingCta from "../section/shared/ClosingCta";
import { services } from "../../lib/services";
import { estimateWindow } from "../../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Residential Paving | Paving Pros" },
  description:
    "Driveways, aprons and parking areas for homes — new asphalt, resurfacing, sealcoating and crack repair, with a free written estimate.",
};

const points = [
  {
    title: "We protect the rest of your property",
    text: "Boards under the plant, grass and beds left as we found them, and the road swept before we leave. A driveway job should not cost you a lawn.",
  },
  {
    title: "You know when you can park on it",
    text: "New asphalt needs time before it takes weight, and sealer needs longer. We tell you the numbers before we go, and we mark it off.",
  },
  {
    title: "We work around the house",
    text: "One car out, or all of them, and the days it will be unusable — agreed before the crew arrives rather than discovered on the morning.",
  },
];

export default function ResidentialPage(): JSX.Element {
  const relevant = services.filter((s) => s.audience.includes("residential"));

  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="For homeowners"
        headline={<>Your driveway is the <span>first thing anyone sees</span></>}
        subhead={`New asphalt, resurfacing, sealcoating and repairs for homes — measured properly and priced in writing within ${estimateWindow}.`}
      />

      <section className="section-padding audience-section">
        <div className="auto-container">
          <div className="row g-4">
            {points.map((p, i) => (
              <div className="col-lg-4 wow" data-wow-delay={`${i * 150}ms`} key={p.title}>
                <div className="belief-card">
                  <span className="belief-number">0{i + 1}</span>
                  <h4 className="title">{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhotoBand
        src="/assets/images/photos/driveway.jpg"
        alt="A finished residential driveway running up to a double garage"
        caption="Laid once, properly."
      />

      <section className="section-padding audience-services">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>What we do at homes</h2>
          </div>
          <div className="row g-4">
            {relevant.map((s) => (
              <div className="col-lg-4 col-md-6 wow" key={s.slug}>
                <Link className="service-card service-card--compact" href={`/services/${s.slug}`}>
                  <span className="service-card-body">
                    <span className="service-card-icon" aria-hidden="true">
                      <i className={s.icon}></i>
                    </span>
                    <span className="service-card-title">{s.title}</span>
                    <span className="service-card-text">{s.short}</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        headline="Get a price for your driveway."
        body="Free estimate, in writing, with no obligation."
        buttonLabel="Get my free estimate"
        href="/contact"
      />
    </LayoutWrapper>
  );
}
