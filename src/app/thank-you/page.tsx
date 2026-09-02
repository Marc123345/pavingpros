import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Thanks — we've got your request | Paving Pros" },
  description:
    "We received your estimate request and will be in touch shortly.",
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
              Got it. We&apos;ll be in touch shortly.
            </h1>
            <p className="thank-you-body">
              We&apos;ll call to confirm the details and book a time to come and
              look at the job. If it&apos;s urgent, ring us and we&apos;ll get you
              in sooner.
            </p>
            <Link href={site.bookingUrl} className="theme-btn-main">
              <span className="theme-btn-arrow-left theme-bg theme-color-white">
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              <span className="theme-btn theme-bg theme-color-white">Book a time</span>
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
