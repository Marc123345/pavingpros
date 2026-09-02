import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import ClosingCta from "../section/shared/ClosingCta";
import { serviceAreas, serviceRadius, site } from "../../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Service Areas | Paving Pros" },
  description:
    "The towns we cover for asphalt paving, sealcoating, repairs and striping. If you are just outside, call and ask.",
};

export default function ServiceAreasPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="Service areas"
        headline={<>We work a patch, <span>not a whole state</span></>}
        subhead={`Everything inside about ${serviceRadius}. Staying tight is how we get to you quickly when something needs looking at.`}
      />

      <section className="section-padding areas-page-section">
        <div className="auto-container">
          <ul className="area-chips area-chips--page">
            {serviceAreas.map((area) => (
              <li key={area}>
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                {area}
              </li>
            ))}
          </ul>

          <div className="areas-note wow">
            <h3>Just outside the list?</h3>
            <p>
              Call anyway. If we are already working near you, or the job is
              large enough to be worth the travel, we will come and look. If we
              cannot help, we will say so rather than string you along.
            </p>
            <Link className="pp-work-link" href={site.phoneHref}>
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              {site.phone}
            </Link>
          </div>
        </div>
      </section>

      <ClosingCta
        headline="In the area? Get a free estimate."
        buttonLabel="Get my free estimate"
        href="/contact"
      />
    </LayoutWrapper>
  );
}
