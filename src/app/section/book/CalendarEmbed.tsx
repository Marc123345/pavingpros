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
            title="Book a call with Paving Pros"
            onLoad={() => setLoaded(true)}
            className="calendar-frame"
            style={{ opacity: loaded ? 1 : 0 }}
          />
        </div>
        <p className="calendar-note">
          Live availability. No card required. If nothing here works for you,
          call or email us and we&apos;ll find a time.
        </p>
      </div>
    </section>
  );
};

export default CalendarEmbed;
