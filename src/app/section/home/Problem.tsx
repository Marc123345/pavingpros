"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";
import Link from "next/link";
import CountUp from "../../components/elements/CountUp";

/**
 * Uses the template's About composition: image left, title right, and the
 * offset-panel figure box overlapping into the image column. The figure is the
 * deck's own number — three quotes already in before you call.
 */
const Problem = () => {
  return (
    <section className="about-section problem-section">
      <div className="large-container">
        <div className="row">
          <div className="image-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image-1 about-style-img-1 wow">
                <AppImage
                  src="/assets/images/brand/exclusive-vs-shared.svg"
                  alt="One shared lead split between five contractors, against one exclusive lead"
                  width={640}
                  height={520}
                />
              </figure>
            </div>
          </div>

          <div
            className="content-column col-xl-5 col-lg-12 col-md-12 col-sm-12 order-2 wow"
            data-wow-delay="300ms"
          >
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">
                  <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                  The problem
                </span>
                <h2>
                  The problem with the leads <br />
                  you&apos;re getting now
                </h2>
              </div>

              <p className="lead-para problem-lead">
                Most lead sources sell the same homeowner or property manager to
                every paver in the county. By the time you call, they&apos;ve had
                three quotes and they&apos;re shopping on price. You end up paying
                to chase people who have already picked someone else.
              </p>

              <div className="about-icon-box">
                <div className="about-count">
                  <div className="count-box">
                    <span className="count-text">
                      <CountUp end={3} />
                    </span>
                  </div>
                  <h6 className="counter-title">
                    Quotes already in before you call
                  </h6>
                </div>
                <div className="about-content">
                  <p>
                    Paving Pros was built to fix that. When a property owner in
                    your territory asks for a paving quote, the lead goes to you
                    and nobody else.
                  </p>
                  <Link
                    className="theme-btn-main border-style-btn"
                    href="/how-it-works"
                  >
                    <span className="theme-btn-arrow-left theme-bg theme-color-white">
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                    <span className="theme-btn theme-bg theme-color-white">
                      See how it works
                    </span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
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
