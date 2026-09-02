import AppImage from "../../components/elements/AppImage";
import React from "react";
import Accordion, { type FaqItem } from "../shared/Accordion";

const faqs: FaqItem[] = [
  {
    question: "How many leads will I get?",
    answer:
      "It depends on your territory, the season, and how wide your preferences are. Bigger territories and contractors who take both residential and commercial work get more. We'll give you a realistic range for your specific area before you sign up.",
  },
  {
    question: "Is the territory really exclusive?",
    answer:
      "Yes. One paving contractor per territory. If someone else applies for an area that's taken, they go on a waitlist until it opens up.",
  },
  {
    question: "What about the off-season?",
    answer:
      "Paving is seasonal in most of the country. You can pause your membership when the ground freezes and pick it back up in spring.",
  },
  {
    question: "What if I get a lead outside my area or outside my preferences?",
    answer:
      "Tell us and we'll adjust the targeting. We'd rather fix it than have you pay for leads you can't use.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. Membership is month to month and you can cancel anytime.",
  },
];

const Faq = () => {
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
              <h2 className="text-reveal-anim">Common questions</h2>
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

export default Faq;
