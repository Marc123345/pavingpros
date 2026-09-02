import React from "react";
import CountUp from "../../components/elements/CountUp";
import { stats } from "../../../lib/site";

/**
 * Splits "1,200+" into 1200 and "+" so the digits can count up while any
 * prefix/suffix stays put. Placeholders like "[X]" and words like "Real time"
 * have no digits and are rendered as-is.
 */
function parse(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return null;
  const n = Number(match[2].replace(/,/g, ""));
  if (!Number.isFinite(n)) return null;
  return { prefix: match[1], value: n, suffix: match[3] };
}

const Stats = () => {
  if (!stats.show) return null;

  return (
    <section className="stats-section">
      <div className="auto-container">
        <div className="stats-bar">
          {stats.items.map((item) => {
            const parsed = parse(item.value);
            return (
              <div className="stat-item" key={item.label}>
                <span className="stat-value">
                  {parsed ? (
                    <>
                      {parsed.prefix}
                      <CountUp end={parsed.value} />
                      {parsed.suffix}
                    </>
                  ) : (
                    item.value
                  )}
                </span>
                <span className="stat-label">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
