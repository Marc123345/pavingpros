import AppImage from "../../components/elements/AppImage";
import React from "react";

const fields = [
  { label: "Name", value: "[First name L.]" },
  { label: "Phone", value: "[(xxx) xxx-xxxx]" },
  { label: "Address", value: "[Street, City, State ZIP]" },
  { label: "Property", value: "Commercial, 40-space parking lot" },
  { label: "Surface", value: "Asphalt, approx. 15 years old" },
  { label: "Issue", value: "Alligator cracking and potholes near the entrance" },
  { label: "Requested", value: "Resurface and restripe" },
  { label: "Timeline", value: "Before winter" },
  { label: "Budget", value: "Confirmed" },
];

const SampleLead = () => {
  return (
    <section className="sample-lead-section section-padding">
      <div className="auto-container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="sec-title">
              <span className="sub-title">
                <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                Sample lead
              </span>
              <h2 className="text-reveal-anim">What a lead looks like</h2>
            </div>
            <p className="lead-para">
              This is the whole thing — no digging, no back and forth before you
              know whether the job is worth a truck roll.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="lead-card wow fadeInUp">
              <div className="lead-card-head">
                <span className="lead-badge">New lead</span>
                <span className="lead-exclusive">Exclusive to you</span>
              </div>
              <dl className="lead-fields">
                {fields.map((f) => (
                  <div className="lead-field" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleLead;
