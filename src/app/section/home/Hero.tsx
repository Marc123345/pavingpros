"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <section className="pp-hero">
      <div className="hero-art" aria-hidden="true">
        <AppImage
          src="/assets/images/brand/hero-territory.svg"
          alt=""
          width={760}
          height={700}
          priority
        />
      </div>

      <div className="auto-container">
        <div className="row pp-hero-row align-items-center">
          <div className="col-xl-7 col-lg-6 col-12">
            <div className="pp-hero-copy">
              <span className="pp-hero-eyebrow">For paving contractors</span>
              <h1 className="pp-hero-title">
                Paving leads, sent to one contractor per territory.{" "}
                <span>Yours, if you claim it first.</span>
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
