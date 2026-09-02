import AppImage from "../../components/elements/AppImage";
import React from "react";
import Link from "next/link";
import { services } from "../../../lib/services";

/** The four services people search for most, as editorial rows. */
const featured = ["asphalt-paving", "sealcoating", "crack-filling-and-repair", "line-striping"];

const Work = () => {
  const rows = featured
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="work-section pp-work section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                What we do
              </span>
              <h2>The work, and when you need it</h2>
            </div>
          </div>
        </div>

        {rows.map((job, index) => (
          <div
            className="work-single-box pp-work-row wow"
            data-wow-delay={`${index * 120}ms`}
            key={job.slug}
          >
            <h3 className="wokr-number">{String(index + 1).padStart(2, "0")}</h3>
            <div className="work-content">
              <h2 className="title">
                <Link href={`/services/${job.slug}`}>{job.title}</Link>
              </h2>
              <p>{job.short}</p>
              <Link className="pp-work-link" href={`/services/${job.slug}`}>
                More on {job.title.toLowerCase()}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="work-img">
              <AppImage src={job.image} alt={job.imageAlt} width={1400} height={900} />
            </div>
          </div>
        ))}

        <div className="text-center mt-5 wow">
          <Link href="/services" className="theme-btn-main border-style-btn">
            <span className="theme-btn-arrow-left theme-bg theme-color-white">
              <i className="fa-solid fa-arrow-left"></i>
            </span>
            <span className="theme-btn theme-bg theme-color-white">
              All services
            </span>
            <span className="theme-btn-arrow-right theme-bg theme-color-white">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
