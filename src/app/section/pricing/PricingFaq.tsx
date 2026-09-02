import AppImage from "../../components/elements/AppImage";
import React from "react";
import Accordion, { type FaqItem } from "../shared/Accordion";

const faqs: FaqItem[] = [
  {
    question: "Do I pay per lead?",
    answer: "No. Membership is a flat monthly fee. Leads are included.",
  },
  { question: "Are there setup fees?", answer: "No." },
  {
    question: "What happens if I cancel?",
    answer:
      "Your territory opens up to the next contractor on the waitlist. You can rejoin later, but your area may be taken.",
  },
  {
    question: "Can I have more than one territory?",
    answer:
      "Yes. Each additional territory is a separate membership. Talk to us if you cover a large region.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "There's no contract, which means the guarantee is that you can leave whenever you want. We'd rather earn the renewal every month than lock you in.",
  },
];

const PricingFaq = () => {
  return (
    <section className="faq-section fix section-padding bg-cover bg-img-home4-faq" id="faq">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                FAQ
              </span>
              <h2 className="text-reveal-anim">Pricing questions</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 wow fadeInUp">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
