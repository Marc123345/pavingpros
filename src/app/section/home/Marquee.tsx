import React from "react";
import { services } from "../../../lib/services";

/** Scrolling band of what we actually do. */
const labels = [
  ...services.map((s) => s.title),
  "Driveways",
  "Parking lots",
  "Private roads",
];

const Group = ({ hidden = false }: { hidden?: boolean }) => (
  <div className="marquee-group" aria-hidden={hidden || undefined}>
    {labels.map((label) => (
      <div className="text" key={label}>
        <h2 className="title">{label}</h2>
        <span className="marquee-dot" aria-hidden="true" />
      </div>
    ))}
  </div>
);

const Marquee = () => (
  <div className="marquee-section pp-marquee">
    <div className="marquee">
      <Group />
      <Group hidden />
    </div>
  </div>
);

export default Marquee;
