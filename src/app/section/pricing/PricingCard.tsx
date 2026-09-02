import React from "react";
import Link from "next/link";
import { pricing } from "../../../lib/site";

const includes = [
  "Exclusive territory, one contractor per area",
  "Qualified paving leads sent by text and email in real time",
  "Residential and commercial leads based on your preferences",
  "Verified Pro listing in the Paving Pros directory",
  "Lead preferences you can change at any time",
];

const PricingCard = () => {
  return (
    <section className="pricing-section-pp section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="pp-price-card wow fadeInUp">
              <span className="pp-price-badge">Paving Pros Membership</span>
              <div className="pp-price-amount">
                <span className="amount">{pricing.price}</span>
                <span className="period">{pricing.period}</span>
              </div>
              <p className="pp-price-terms">{pricing.terms}</p>

              <h4 className="pp-includes-title">Includes</h4>
              <ul className="pp-includes">
                {includes.map((item) => (
                  <li key={item}>
                    <i className="fas fa-check-circle"></i>
                    {item}
                  </li>
                ))}
              </ul>

              {pricing.adSpendNote && (
                <p className="pp-adspend">{pricing.adSpendNote}</p>
              )}

              <Link href="/sign-up" className="theme-btn-main">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
