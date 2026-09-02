import React from "react";
import AppImage from "../../components/elements/AppImage";
import { jobValues } from "../../../lib/site";

const JobValue = () => {
  return (
    <section className="job-value-section">
      <div className="auto-container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <div className="sec-title mb-0">
              <span className="sub-title">
                <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                The math
              </span>
              <h2 className="text-reveal-anim">What one job is worth</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="job-value-grid">
              <div className="job-value-card wow fadeInUp">
                <span className="job-value-label">Residential driveway</span>
                <span className="job-value-figure">{jobValues.residential}</span>
              </div>
              <div className="job-value-card wow fadeInUp" data-wow-delay="200ms">
                <span className="job-value-label">Commercial lot</span>
                <span className="job-value-figure">{jobValues.commercial}</span>
              </div>
            </div>
            <p className="job-value-note">
              Membership pays for itself on the first closed job, and everything
              after that is margin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobValue;
