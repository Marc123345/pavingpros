import React from "react";
import { stats } from "../../../lib/site";

const Stats = () => {
  if (!stats.show) return null;

  return (
    <section className="stats-section">
      <div className="auto-container">
        <div className="stats-bar">
          {stats.items.map((item) => (
            <div className="stat-item" key={item.label}>
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
