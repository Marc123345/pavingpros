import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import AppImage from "../components/elements/AppImage";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import ClosingCta from "../section/shared/ClosingCta";
import { services } from "../../lib/services";

export const metadata: Metadata = {
  title: { absolute: "Paving Services | Paving Pros" },
  description:
    "Asphalt paving, sealcoating, resurfacing, crack filling, line striping and concrete flatwork for driveways, parking lots and private roads.",
};

export default function ServicesPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="Services"
        headline={<>Everything we <span>put down and look after</span></>}
        subhead="Six things, done properly. If a job needs something we don't do, we'll tell you who does."
      />

      <section className="services-grid-section section-padding">
        <div className="auto-container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 wow"
                data-wow-delay={`${(index % 3) * 150}ms`}
                key={service.slug}
              >
                <Link className="service-card" href={`/services/${service.slug}`}>
                  <span className="service-card-photo">
                    <AppImage
                      src={service.image}
                      alt={service.imageAlt}
                      width={1400}
                      height={900}
                    />
                  </span>
                  <span className="service-card-body">
                    <span className="service-card-icon" aria-hidden="true">
                      <i className={service.icon}></i>
                    </span>
                    <span className="service-card-title">{service.title}</span>
                    <span className="service-card-text">{service.short}</span>
                    <span className="service-card-link">
                      Read more
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        headline="Not sure which one you need?"
        body="Send us the address. We'll come and look, and tell you the cheapest thing that actually fixes it."
        buttonLabel="Get my free estimate"
        href="/contact"
      />
    </LayoutWrapper>
  );
}
