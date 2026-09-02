import React from "react";
import AppImage from "../../components/elements/AppImage";
import { credentials } from "../../../lib/site";

const chips = [
  "Driveways",
  "Parking lots",
  "Private roads",
  "Sealcoating",
  "Crack repair",
  "Line striping",
  "Concrete flatwork",
];

const WhoWeWorkWith = () => (
  <section className="who-we-work-section section-padding theme-color1-bg">
    <div className="auto-container">
      <div className="row g-4 align-items-center">
        <div className="col-lg-6">
          <h2 className="theme-color-black">Licensed, insured, and local</h2>
          <p className="on-accent-text">
            Licence {credentials.licence}
            {credentials.insured ? ", fully insured" : ""}
            {credentials.bonded ? " and bonded" : ""}. Certificates go to you or
            your managing agent before the crew arrives, named to whatever entity
            you need.
          </p>
        </div>
        <div className="col-lg-6">
          <figure className="accent-photo wow">
            <AppImage
              src="/assets/images/photos/road-roller.jpg"
              alt="A roller compacting a fresh asphalt surface"
              width={1400}
              height={933}
            />
          </figure>
          <ul className="service-chips">
            {chips.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeWorkWith;
