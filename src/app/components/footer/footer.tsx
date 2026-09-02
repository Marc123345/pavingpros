"use client";

import AppImage from "../elements/AppImage";
import React from "react";
import Link from "next/link";
import { site } from "../../../lib/site";

const Footer = () => {
  return (
    <footer className="main-footer bg-cover bg-img-footer">
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            <div className="footer-upper col-lg-12">
              <h2 className="footer-title text-reveal-anim">
                ONE PAVER — <br /> PER TERRITORY
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="footer-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <Link href="/">
                    <AppImage
                      src="/assets/images/logo/paving-pros-logo.svg"
                      alt="Paving Pros"
                      width={200}
                      height={42}
                    />
                  </Link>
                </div>
                <p className="footer-des">
                  A directory for paving contractors that sends every lead in
                  your area to you alone. No shared lists, no racing three
                  other crews to the same driveway.
                </p>
                <ul className="social-icon-two">
                  <li><Link href={site.social.facebook} aria-label="Facebook"><i className="fab fa-facebook-f" /></Link></li>
                  <li><Link href={site.social.instagram} aria-label="Instagram"><i className="fab fa-instagram" /></Link></li>
                  <li><Link href={site.social.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h5 className="widget-title">Paving Pros</h5>
                <ul className="user-links">
                  <li><Link href="/">Home <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/how-it-works">How It Works <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/pricing">Pricing <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/about">About <i className="fa-solid fa-arrow-right" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h5 className="widget-title">For Contractors</h5>
                <ul className="user-links">
                  <li><Link href="/sign-up">Claim a territory <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/how-it-works#faq">Common questions <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/pricing#faq">Pricing questions <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href={site.bookingUrl}>Book a call <i className="fa-solid fa-arrow-right" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget contact-widget">
                <h5 className="widget-title">Talk To Us</h5>
                <div className="widget-content">
                  <div className="address">
                    <p>Call</p>
                    <Link href={site.phoneHref}>{site.phone}</Link>
                  </div>
                  <div className="address">
                    <p>Email</p>
                    <Link href={`mailto:${site.email}`}>{site.email}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © {new Date().getFullYear()} Paving Pros. All rights reserved.
            </div>
            <div className="footer-links-wrapper">
              <Link href="/sign-up">Claim my territory</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/how-it-works">How it works</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
