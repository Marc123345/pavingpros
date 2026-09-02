import React from "react";

/**
 * Scrolling services band — the template's marquee treatment. Every word here
 * is a service already named in the copy deck; it states no new claim, it just
 * says out loud what kind of work lands in a territory.
 */
const services = [
  "Asphalt paving",
  "Sealcoating",
  "Resurfacing",
  "Crack filling",
  "Line striping",
  "Concrete",
  "Grading",
  "Driveways",
  "Parking lots",
];

const Group = ({ hidden = false }: { hidden?: boolean }) => (
  <div className="marquee-group" aria-hidden={hidden || undefined}>
    {services.map((service) => (
      <div className="text" key={service}>
        <h2 className="title">{service}</h2>
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
