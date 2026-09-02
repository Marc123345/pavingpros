import React from "react";
import Link from "next/link";
import { serviceAreas, serviceRadius } from "../../../lib/site";

const ServiceArea = () => (
  <section className="service-area-section section-padding">
    <div className="auto-container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <div className="sec-title mb-0">
            <span className="sub-title">
              <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
              Where we work
            </span>
            <h2>We work a patch, not a whole state</h2>
          </div>
          <p className="lead-para">
            Staying inside {serviceRadius} is how we get to you quickly when
            something needs looking at, and how the crew is on site when we said.
          </p>
          <Link className="pp-work-link" href="/service-areas">
            Full list of towns
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="col-lg-7">
          <ul className="area-chips wow">
            {serviceAreas.map((area) => (
              <li key={area}>
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
