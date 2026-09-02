"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";

const WhoFor = () => {
  return (
    <section
      className="why-choose-us-section-1 section-padding theme-color1-bg"
    >
      <div className="auto-container">
        <div className="row g-5 align-items-center">
          <div className="col-xl-6">
            <div className="why-choose-us-content-1">
              <div className="sec-title">
                <span className="sub-title theme-color-black">
                  <AppImage src="/assets/images/main-home/sub-title-shape2.svg" alt="" width={16} height={16} />
                  Who this is for
                </span>
                <h2 className="theme-color-black text-reveal-anim">
                  Built for pavers who want to own an area, not fight over it
                </h2>
              </div>
              <p className="on-accent-text">
                Paving Pros is for established paving contractors who can handle
                a steady flow of quote requests and want to own their area
                rather than fight over it.
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <figure className="accent-photo wow fadeInUp">
              <AppImage
                src="/assets/images/photos/paving-crew.jpg"
                alt="A paving crew laying hot asphalt behind a dump truck"
                width={1400}
                height={1050}
              />
            </figure>
            <div className="fit-list">
              <div className="fit-card fit-card--yes wow fadeInUp">
                <h4 className="title">
                  <i className="fa-solid fa-circle-check"></i> It&apos;s a good fit if
                </h4>
                <ul>
                  <li>You run a crew.</li>
                  <li>You do commercial lots or larger residential work.</li>
                  <li>You&apos;re tired of paying for leads that go to your competitors too.</li>
                </ul>
              </div>
              <div className="fit-card fit-card--no wow fadeInUp" data-wow-delay="200ms">
                <h4 className="title">
                  <i className="fa-solid fa-circle-xmark"></i> It&apos;s not a fit if
                </h4>
                <ul>
                  <li>You&apos;re looking for a free listing with no commitment.</li>
                  <li>Membership is paid, and that&apos;s what keeps the territory exclusive.</li>
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
