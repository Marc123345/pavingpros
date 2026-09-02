import AppImage from "../../components/elements/AppImage";
import React from "react";

const steps = [
  "We check your territory against the directory. If it's open, it's yours.",
  "We confirm your preferences and set up your listing.",
  "Leads start coming to your phone and inbox.",
];

const WhatHappensNext = () => {
  return (
    <section className="next-steps-section section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                Next
              </span>
              <h2 className="text-reveal-anim">What happens next</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {steps.map((text, index) => (
            <div className="col-lg-4 wow fadeInUp" data-wow-delay={`${index * 200}ms`} key={text}>
              <div className="next-step-card">
                <span className="next-step-number">{index + 1}</span>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
