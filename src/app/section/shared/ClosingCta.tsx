import React from "react";
import Link from "next/link";

interface ClosingCtaProps {
  headline: string;
  body?: string;
  buttonLabel?: string;
  href?: string;
}

const ClosingCta: React.FC<ClosingCtaProps> = ({
  headline,
  body,
  buttonLabel = "Claim my territory",
  href = "/sign-up",
}) => {
  return (
    <section className="closing-cta-section">
      <div className="auto-container">
        <div className="closing-cta-box wow fadeInUp">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 className="closing-cta-title">{headline}</h2>
              {body && <p className="closing-cta-body">{body}</p>}
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href={href} className="theme-btn-main">
                <span className="theme-btn-arrow-left theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className="theme-btn theme-bg theme-color-white">{buttonLabel}</span>
                <span className="theme-btn-arrow-right theme-bg theme-color-white">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCta;
