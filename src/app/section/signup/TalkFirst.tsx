import React from "react";
import Link from "next/link";
import { site } from "../../../lib/site";

const TalkFirst = () => {
  return (
    <section className="talk-first-section">
      <div className="auto-container">
        <div className="talk-first-box wow fadeInUp">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <h2 className="talk-first-title">Prefer to talk first?</h2>
              <p className="talk-first-body">
                Book a short call and we&apos;ll walk you through the territory map
                for your area and answer any questions.
              </p>
              <div className="talk-first-contacts">
                <Link href={site.phoneHref}>
                  <i className="fa-solid fa-phone"></i> {site.phone}
                </Link>
                <Link href={`mailto:${site.email}`}>
                  <i className="fa-solid fa-envelope"></i> {site.email}
                </Link>
              </div>
            </div>
            <div className="col-lg-5 text-lg-end">
              <Link href={site.bookingUrl} className="theme-btn-main">
                <span className="theme-btn-arrow-left theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className="theme-btn theme-bg theme-color-white">Book a call</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkFirst;
