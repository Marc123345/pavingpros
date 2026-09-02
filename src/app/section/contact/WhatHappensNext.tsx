import React from "react";
import { estimateWindow } from "../../../lib/site";

const steps = [
  `We call to confirm the details and book a time to come and look, usually within ${estimateWindow}.`,
  "We measure it, check how it drains, and see what is under the surface.",
  "You get a written scope and price. If you want it done, we book the date.",
];

const WhatHappensNext = () => (
  <section className="next-steps-section section-padding">
    <div className="auto-container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="sec-title text-center">
            <span className="sub-title justify-content-center">
              <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
              Next
            </span>
            <h2>What happens after you send it</h2>
          </div>
        </div>
      </div>
      <div className="row g-4">
        {steps.map((text, index) => (
          <div className="col-lg-4 wow" data-wow-delay={`${index * 200}ms`} key={text}>
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

export default WhatHappensNext;
