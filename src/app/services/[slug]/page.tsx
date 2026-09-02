import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AppImage from "../../components/elements/AppImage";
import LayoutWrapper from "../../LayoutWrapper";
import PageHero from "../../section/shared/PageHero";
import ClosingCta from "../../section/shared/ClosingCta";
import { getService, services } from "../../../lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: `${service.title} | Paving Pros` },
    description: service.intro,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="Service"
        headline={service.title}
        subhead={service.intro}
      />

      <section className="service-detail-section section-padding">
        <div className="auto-container">
          <div className="row g-5">
            <div className="col-lg-7">
              {service.body.map((para) => (
                <p className="lead-para" key={para.slice(0, 40)}>
                  {para}
                </p>
              ))}

              <h3 className="service-detail-heading">What the job includes</h3>
              <ul className="check-list">
                {service.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5">
              <figure className="accent-photo wow">
                <AppImage
                  src={service.image}
                  alt={service.imageAlt}
                  width={1400}
                  height={900}
                />
              </figure>
              <div className="signs-card wow">
                <h4 className="title">You probably need this if</h4>
                <ul>
                  {service.signs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <Link className="pp-work-link" href="/contact">
                  Get a free estimate
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other-services-section section-padding">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Other things we do</h2>
          </div>
          <div className="row g-4">
            {others.map((other) => (
              <div className="col-lg-4 col-md-6 wow" key={other.slug}>
                <Link className="service-card service-card--compact" href={`/services/${other.slug}`}>
                  <span className="service-card-body">
                    <span className="service-card-icon" aria-hidden="true">
                      <i className={other.icon}></i>
                    </span>
                    <span className="service-card-title">{other.title}</span>
                    <span className="service-card-text">{other.short}</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        headline={`Get a price for ${service.title.toLowerCase()}.`}
        body="Free estimate, in writing, with no obligation to go ahead."
        buttonLabel="Get my free estimate"
        href="/contact"
      />
    </LayoutWrapper>
  );
}
