"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";
import Link from "next/link";
import HeroForm from "./HeroForm";
import { setupWindow } from "../../../lib/site";

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
              <p className="pp-hero-sub">
                Paving Pros is a directory for paving contractors that does one
                thing a normal directory doesn&apos;t: it sends every lead in your
                area to you alone. No shared lists. No racing three other crews
                to the same driveway.
              </p>

              <ul className="pp-hero-points">
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                  Exclusive territory, or a waitlist spot
                </li>
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                  Qualified leads by text and email, in real time
                </li>
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                  No contract. Setup within {setupWindow}
                </li>
              </ul>

              <Link href="/how-it-works" className="pp-hero-link">
                See how it works
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
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
