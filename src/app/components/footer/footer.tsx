"use client";

import AppImage from "../elements/AppImage";
import React from "react";
import Link from "next/link";
import { serviceAreas, site } from "../../../lib/site";
import { services } from "../../../lib/services";

const Footer = () => {
  return (
    <footer className="main-footer bg-cover bg-img-footer">
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            <div className="footer-upper col-lg-12">
              <h2 className="footer-title">
                PAVED RIGHT — <br /> THE FIRST TIME
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="footer-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <Link href="/">
                    <AppImage
                      src="/assets/images/logo/paving-pros-logo-horizontal-on-dark.svg"
                      alt="Paving Pros"
                      width={210}
                      height={60}
                    />
                  </Link>
                </div>
                <p className="footer-des">
                  Asphalt paving, sealcoating, repairs and striping for homes and
                  businesses. Free written estimates, licensed and insured.
                </p>
                <ul className="social-icon-two">
                  <li><Link href={site.social.facebook} aria-label="Facebook"><i className="fab fa-facebook-f" /></Link></li>
                  <li><Link href={site.social.instagram} aria-label="Instagram"><i className="fab fa-instagram" /></Link></li>
                  <li><Link href={site.social.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h5 className="widget-title">Services</h5>
                <ul className="user-links">
                  {services.slice(0, 5).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`}>
                        {s.title} <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="footer-column col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h5 className="widget-title">Company</h5>
                <ul className="user-links">
                  <li><Link href="/residential">Residential <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/commercial">Commercial <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/gallery">Our work <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/service-areas">Service areas <i className="fa-solid fa-arrow-right" /></Link></li>
                  <li><Link href="/about">About <i className="fa-solid fa-arrow-right" /></Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget contact-widget">
                <h5 className="widget-title">Get in touch</h5>
                <div className="widget-content">
                  <div className="address">
                    <p>Call</p>
                    <Link href={site.phoneHref}>{site.phone}</Link>
                  </div>
                  <div className="address">
                    <p>Email</p>
                    <Link href={`mailto:${site.email}`}>{site.email}</Link>
                  </div>
                  <div className="address">
                    <p>Hours</p>
                    {site.hours.map((h) => (
                      <span className="d-block footer-hours" key={h.days}>
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-areas">
            <span className="footer-areas-label">Serving</span>
            <p>
              {serviceAreas.join(" · ")} —{" "}
              <Link href="/service-areas">see all areas</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </div>
            <div className="footer-links-wrapper">
              <Link href="/contact">Free estimate</Link>
              <Link href="/services">Services</Link>
              <Link href="/service-areas">Service areas</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
