import React from "react";

const beliefs = [
  {
    title: "The base decides everything",
    text: "Surface work over a bad base is money burned. If the base has gone, we will tell you, even when it loses us the job.",
  },
  {
    title: "The price is the price",
    text: "The written scope is what you pay. If we open it up and find something we could not see, you hear about it before we carry on — not on the invoice.",
  },
  {
    title: "Maintenance beats replacement",
    text: "Sealing and crack filling are the cheapest work we do and the work that saves you the most. We would rather sell you that for years than a replacement now.",
  },
  {
    title: "We leave it clean",
    text: "Spoil carted, edges cut, road swept, and your grass the way we found it. The job is not done until the site is.",
  },
];

const Beliefs = () => (
  <section className="beliefs-section section-padding">
    <div className="auto-container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="sec-title text-center">
            <span className="sub-title justify-content-center">
              <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
              How we work
            </span>
            <h2>Four things we do not bend on</h2>
          </div>
        </div>
      </div>
      <div className="row g-4">
        {beliefs.map((item, index) => (
          <div className="col-lg-6 wow" data-wow-delay={`${(index % 2) * 200}ms`} key={item.title}>
            <div className="belief-card">
              <span className="belief-number">0{index + 1}</span>
              <h4 className="title">{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Beliefs;
