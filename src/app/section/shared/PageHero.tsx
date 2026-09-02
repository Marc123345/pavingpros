import React from "react";

interface PageHeroProps {
  eyebrow?: string;
  headline: React.ReactNode;
  subhead?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, headline, subhead }) => {
  return (
    <section className="page-hero">
      <div className="auto-container">
        <div className="page-hero-inner">
          {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}
          <h1 className="page-hero-title">{headline}</h1>
          {subhead && <p className="page-hero-sub">{subhead}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
