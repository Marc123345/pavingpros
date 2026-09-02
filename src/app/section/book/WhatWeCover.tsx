import React from "react";

const items = [
  {
    icon: "fa-solid fa-ruler-combined",
    title: "We measure it properly",
    text: "Square footage, depths, and the levels — so the price is based on the job rather than a guess from the kerb.",
  },
  {
    icon: "fa-solid fa-droplet",
    title: "We check where water goes",
    text: "Drainage is what kills asphalt. We look at where it runs now and what has to change so it does not sit.",
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "You get it in writing",
    text: "Base depth, asphalt depth, finished grade and the schedule — on paper, so you can compare it against anyone else's.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Your questions",
    text: "Bring them. Most people want to know how long it takes and when they can drive on it.",
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
              <h2>What happens when we come out</h2>
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
