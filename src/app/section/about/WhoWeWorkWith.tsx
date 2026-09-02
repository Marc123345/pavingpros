import React from "react";

const services = [
  "Residential driveways",
  "Commercial parking lots",
  "Sealcoating",
  "Resurfacing",
  "Line striping",
  "Concrete flatwork",
];

const WhoWeWorkWith = () => {
  return (
    <section className="who-we-work-section section-padding theme-color1-bg">
      <div className="auto-container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="theme-color-black text-reveal-anim">Who we work with</h2>
            <p className="on-accent-text">
              Paving contractors across the US doing residential driveways,
              commercial parking lots, sealcoating, resurfacing, striping, and
              concrete flatwork. If you pave and you&apos;re serious about growing,
              we want you in the directory.
            </p>
          </div>
          <div className="col-lg-6">
            <ul className="service-chips">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
