"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";

const Problem = () => {
  return (
    <section className="about-section problem-section">
      <div className="large-container">
        <div className="row align-items-center">
          <div className="image-column col-xl-6 col-lg-12">
            <div className="inner-column">
              <figure className="diagram-figure wow fadeInLeft">
                <AppImage
                  src="/assets/images/brand/exclusive-vs-shared.svg"
                  alt="A shared lead split between five contractors, versus one exclusive lead"
                  width={640}
                  height={520}
                />
              </figure>
            </div>
          </div>
          <div className="content-column col-xl-6 col-lg-12 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">
                  <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                  The problem
                </span>
                <h2 className="text-reveal-anim">
                  The problem with the leads you&apos;re getting now
                </h2>
              </div>
              <p className="lead-para">
                Most lead sources sell the same homeowner or property manager to
                every paver in the county. By the time you call, they&apos;ve had
                three quotes and they&apos;re shopping on price. You end up paying
                to chase people who have already picked someone else.
              </p>
              <p className="lead-para">
                Paving Pros was built to fix that. When a property owner in your
                territory asks for a paving quote, the lead goes to you and
                nobody else.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blur"></div>
      <div className="bg-blur2"></div>
    </section>
  );
};

export default Problem;
