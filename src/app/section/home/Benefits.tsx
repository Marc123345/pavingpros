import React from "react";
import { estimateWindow } from "../../../lib/site";

const reasons = [
  {
    icon: "fa-solid fa-layer-group",
    title: "We build the base, not just the surface",
    text: "Most asphalt that fails early failed underneath. We excavate, grade and compact a proper aggregate base before any asphalt goes down, because that is what decides whether it lasts five years or twenty.",
    feature: true,
  },
  {
    icon: "fa-solid fa-file-lines",
    title: "A written scope, before we start",
    text: `You get base depth, asphalt depth, finished grade and where the water will run, in writing, within ${estimateWindow}. If something changes once we open it up, you hear about it before we carry on.`,
  },
  {
    icon: "fa-solid fa-user-check",
    title: "The person who quotes it runs it",
    text: "You are not handed to a salesperson and then met by strangers. Whoever walks the job with you is the one accountable for how it goes in.",
  },
  {
    icon: "fa-solid fa-broom",
    title: "The site is left clean",
    text: "Edges cut straight, spoil carted away, driveway swept, and your grass and kerbs the way we found them. We tell you the cure time before we leave so nobody parks on it too early.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Licensed, insured and local",
    text: "We work a defined patch and we are the ones who come back if something is not right. Certificates go to you or your property manager before the crew arrives.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits-section section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 wow">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                Why us
              </span>
              <h2>Why property owners call us back</h2>
            </div>
          </div>
        </div>

        <div className="membership-grid wow">
          {reasons.map((item) => (
            <div
              className={`membership-cell ${item.feature ? "membership-cell--feature" : ""}`}
              key={item.title}
            >
              <span className="membership-icon" aria-hidden="true">
                <i className={item.icon}></i>
              </span>
              <div className="membership-body">
                <h4 className="title">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
