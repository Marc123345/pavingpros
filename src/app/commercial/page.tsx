import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import PhotoBand from "../section/shared/PhotoBand";
import ClosingCta from "../section/shared/ClosingCta";
import { services } from "../../lib/services";

export const metadata: Metadata = {
  title: { absolute: "Commercial Paving | Paving Pros" },
  description:
    "Parking lots, private roads and loading areas — paving, resurfacing, crack repair, sealcoating and ADA-compliant striping, phased around your trading hours.",
};

const points = [
  {
    title: "We phase it so you stay open",
    text: "Half the lot at a time, overnight, or across a weekend. We plan the phasing with you before we quote, because it changes the price and you should see why.",
  },
  {
    title: "Striping that meets the code",
    text: "Accessible spaces, access aisles, signage heights and fire lanes marked to requirement — not just repainted where the old faded lines were.",
  },
  {
    title: "Certificates before we mobilise",
    text: "Insurance certificates and any site paperwork go to you or your managing agent ahead of the crew, named to whatever entity you need.",
  },
];

export default function CommercialPage(): JSX.Element {
  const relevant = services.filter((s) => s.audience.includes("commercial"));

  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="For businesses and property managers"
        headline={<>A lot that <span>works while you trade</span></>}
        subhead="Parking lots, private roads and loading areas — phased around your hours, marked to code, and handed back swept."
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
        src="/assets/images/photos/parking-lot.jpg"
        alt="Overhead view of a freshly striped commercial parking lot"
        caption="Every space earning its keep."
      />

      <section className="section-padding audience-services">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>What we do on commercial sites</h2>
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
        headline="Get your lot looked at."
        body="We'll walk it, phase it around your hours, and put the scope in writing."
        buttonLabel="Get my free estimate"
        href="/contact"
      />
    </LayoutWrapper>
  );
}
