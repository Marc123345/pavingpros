import AppImage from "../../components/elements/AppImage";
import React from "react";
import { testimonials } from "../../../lib/site";

const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section className="testimonials-pp section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <AppImage
                  src="/assets/images/main-home/sub-title-shape.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                What members say
              </span>
              <h2 className="text-reveal-anim">
                Contractors who stopped competing on price
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {testimonials.map((item, index) => (
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay={`${index * 200}ms`}
              key={index}
            >
              <figure className="quote-card">
                <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <span className="quote-name">{item.name}</span>
                  <span className="quote-meta">
                    {item.company} — {item.location}
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
