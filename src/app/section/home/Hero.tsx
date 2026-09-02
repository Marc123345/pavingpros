"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";
import Link from "next/link";
import { setupWindow, site } from "../../../lib/site";

const Hero = () => {
  return (
    <section className="banner-section pp-hero d-flex align-items-center">
      <div className="container-fluid">
        <div className="row hero_upper d-flex align-items-center">
          <div className="col-xl-9 col-lg-11 col-12">
            <div className="content-box">
              <h1 className="title hero_title tv_hero_title hero_title_1">
                Paving leads, sent to one contractor per territory.{" "}
                <span>Yours, if you claim it first.</span>
              </h1>
              <p className="hero-subhead">
                Paving Pros is a directory for paving contractors that does one
                thing a normal directory doesn&apos;t: it sends every lead in your
                area to you alone. No shared lists. No racing three other crews
                to the same driveway.
              </p>
              <div className="hero-cta-row">
                <Link href="/sign-up" className="theme-btn-main wow fadeInUp" data-wow-delay=".3s">
                  <span className="theme-btn-arrow-left theme-bg theme-color-white">
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  <span className="theme-btn theme-bg theme-color-white">
                    Claim my territory
                  </span>
                  <span className="theme-btn-arrow-right theme-bg theme-color-white">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
                <Link href="/how-it-works" className="hero-text-link">
                  See how it works <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
              <p className="hero-trust">
                No contract. Cancel anytime. Setup within {setupWindow}.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="email-link">
        <Link href={`mailto:${site.email}`} className="email-link">{site.email}</Link>
      </div>
      <div className="hero-art">
        <AppImage
          src="/assets/images/brand/hero-territory.svg"
          alt="A territory map with one area claimed"
          width={760}
          height={700}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
