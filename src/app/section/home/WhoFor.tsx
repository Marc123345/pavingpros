"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";
import Link from "next/link";

const WhoFor = () => {
  return (
    <section className="why-choose-us-section-1 section-padding theme-color1-bg">
      <div className="auto-container">
        <div className="row g-5 align-items-center">
          <div className="col-xl-6">
            <div className="why-choose-us-content-1">
              <div className="sec-title">
                <span className="sub-title theme-color-black">
                  <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                  Who we work for
                </span>
                <h2 className="theme-color-black">
                  Homes and businesses, same crew
                </h2>
              </div>
              <p className="on-accent-text">
                A driveway and a forty-space lot are the same job at different
                scale. Both need a base that drains, asphalt laid at the right
                depth, and someone who turns up when they said they would.
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <figure className="accent-photo wow">
              <AppImage
                src="/assets/images/photos/paving-crew.jpg"
                alt="A paving crew laying hot asphalt behind a dump truck"
                width={1400}
                height={1050}
              />
            </figure>
            <div className="fit-list">
              <div className="fit-card fit-card--yes wow">
                <h4 className="title">
                  <i className="fa-solid fa-house"></i> Homeowners
                </h4>
                <ul>
                  <li>Driveways, aprons and parking areas</li>
                  <li>Sealcoating and crack repair</li>
                  <li>
                    <Link href="/residential">What we do for homes</Link>
                  </li>
                </ul>
              </div>
              <div className="fit-card fit-card--yes wow" data-wow-delay="200ms">
                <h4 className="title">
                  <i className="fa-solid fa-building"></i> Property managers
                </h4>
                <ul>
                  <li>Lots, private roads and loading areas</li>
                  <li>Striping, ADA spaces and fire lanes</li>
                  <li>
                    <Link href="/commercial">What we do for businesses</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoFor;
