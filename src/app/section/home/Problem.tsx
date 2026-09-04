"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";
import Link from "next/link";
import CountUp from "../../components/elements/CountUp";

/**
 * The argument for calling now rather than next year, built on the template's
 * About composition with the offset figure panel.
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
                  src="/assets/images/photos/asphalt-crack.jpg"
                  alt="A crack running through an asphalt surface"
                  width={733}
                  height={1100}
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
                  Why it matters
                </span>
                <h2>
                  A crack is how water <br />
                  gets into the base.
                </h2>
              </div>

              <p className="lead-para problem-lead">
                Water gets into the crack, down into the base, and freezes. The
                freeze lifts the asphalt, the crack widens, and the next thaw
                takes a piece of the surface with it. That is how a job that
                would have been a morning of crack sealing turns into
                resurfacing the whole driveway.
              </p>

              <div className="about-icon-box">
                <div className="about-count">
                  <div className="count-box">
                    <span className="count-text">
                      <CountUp end={1} />
                    </span>
                    <span className="plus">/4</span>
                  </div>
                  <h6 className="counter-title">
                    The cost of sealing versus replacing
                  </h6>
                </div>
                <div className="about-content">
                  <p>
                    Maintenance is the cheapest work we do, and the work that
                    saves you the most. Get it looked at while it is still
                    cracks.
                  </p>
                  <Link
                    className="theme-btn-main border-style-btn"
                    href="/services/crack-filling-and-repair"
                  >
                    <span className="theme-btn-arrow-left theme-bg theme-color-white">
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                    <span className="theme-btn theme-bg theme-color-white">
                      Crack filling and repair
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
