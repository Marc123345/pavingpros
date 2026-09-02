import React from "react";

const items = [
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Your territory on the map",
    text: "We pull up your area, show you where the lines fall, and tell you straight whether it's open or already taken.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "A realistic lead range",
    text: "What volume your specific territory and preferences are likely to produce, in and out of season.",
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "What it costs, exactly",
    text: "The membership, what's included, and what isn't. No pitch deck, no per-lead surprises.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Your questions",
    text: "Bring them. One short call is usually enough to know whether this is worth your time.",
  },
];

const WhatWeCover = () => {
  return (
    <section className="cover-section section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                The call
              </span>
              <h2 className="text-reveal-anim">What we cover on the call</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {items.map((item, index) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`${index * 150}ms`}
              key={item.title}
            >
              <div className="cover-card">
                <div className="cover-icon">
                  <i className={item.icon} aria-hidden="true"></i>
                </div>
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

export default WhatWeCover;
