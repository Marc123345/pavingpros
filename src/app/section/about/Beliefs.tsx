import AppImage from "../../components/elements/AppImage";
import React from "react";

const beliefs = [
  {
    title: "Leads should be exclusive",
    text: "A lead shared with five contractors is a price war, not a lead.",
  },
  {
    title: "Contractors should know exactly what they're paying for",
    text: "Flat monthly pricing, no per-lead surprises, no contracts.",
  },
  {
    title: "Qualification matters more than volume",
    text: "We'd rather send you twenty leads you can quote than a hundred you have to sort through.",
  },
  {
    title: "If it's not working, we fix the targeting",
    text: "Out-of-area leads and wrong-fit jobs are our problem to solve, not yours to absorb.",
  },
];

const Beliefs = () => {
  return (
    <section className="beliefs-section section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                Our principles
              </span>
              <h2 className="text-reveal-anim">What we believe</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {beliefs.map((item, index) => (
            <div className="col-lg-6 wow fadeInUp" data-wow-delay={`${(index % 2) * 200}ms`} key={item.title}>
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
};

export default Beliefs;
