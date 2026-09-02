import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Thanks — we're checking your territory | Paving Pros" },
  description:
    "We received your request. We'll come back within one business day with a yes or a waitlist spot.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <section className="thank-you-section">
        <div className="auto-container">
          <div className="thank-you-inner">
            <span className="thank-you-check">
              <i className="fa-solid fa-check"></i>
            </span>
            <h1 className="thank-you-title">
              Got it. We&apos;re checking your territory now.
            </h1>
            <p className="thank-you-body">
              You&apos;ll hear from us within one business day with a yes or a
              waitlist spot. In the meantime, if you&apos;d like to speed things up,
              book a call and we&apos;ll confirm your area live.
            </p>
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
      </section>
    </LayoutWrapper>
  );
}
