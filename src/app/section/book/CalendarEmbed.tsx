"use client";

import React, { useState } from "react";
import { calendarEmbedUrl } from "../../../lib/site";

const CalendarEmbed = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="calendar-section section-padding">
      <div className="auto-container">
        <div className="calendar-shell wow fadeInUp">
          {!loaded && (
            <div className="calendar-loading">
              <span className="calendar-spinner" aria-hidden="true"></span>
              <p>Loading available times…</p>
            </div>
          )}
          <iframe
            src={calendarEmbedUrl}
            title="Book an estimate with Paving Pros"
            onLoad={() => setLoaded(true)}
            className="calendar-frame"
            style={{ opacity: loaded ? 1 : 0 }}
          />
        </div>
        <p className="calendar-note">
          Live availability, no card required. If nothing here suits, call us
          and we&apos;ll find a time that does.
        </p>
      </div>
    </section>
  );
};

export default CalendarEmbed;
