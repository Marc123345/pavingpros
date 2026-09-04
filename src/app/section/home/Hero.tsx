"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <section className="pp-hero">
      {/* A photograph of the actual work, not an abstract graphic. The previous
          background was hero-territory.svg — a "territory map" left over from
          the contractor-directory version of this site. */}
      <div className="pp-hero-photo" aria-hidden="true">
        <AppImage
          src="/assets/images/photos/roller-fresh-asphalt.jpg"
          alt=""
          width={1600}
          height={900}
          priority
        />
      </div>

      <div className="auto-container">
        <div className="row pp-hero-row align-items-center">
          <div className="col-xl-7 col-lg-6 col-12">
            <div className="pp-hero-copy">
              <span className="pp-hero-eyebrow">
                Asphalt paving, sealcoating and repair
              </span>
              <h1 className="pp-hero-title">
                A driveway you stop{" "}
                <span className="pp-hero-boxed">thinking about</span>.
                <span className="pp-hero-payoff">
                  <span className="pp-hero-arrow" aria-hidden="true">
                    <AppImage
                      src="/assets/images/brand/hero-arrow.svg"
                      alt=""
                      width={200}
                      height={60}
                    />
                  </span>
                  <span className="pp-hero-accent">Paved to last.</span>
                </span>
              </h1>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 col-12">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
