"use client";
import React from "react";
import Link from "next/link";
import { estimateWindow } from "../../../lib/site";

const steps = [
  {
    number: "01",
    title: "We walk the job",
    text: "We come out, measure, check how it drains and look at what is under the surface. No charge, and no obligation.",
  },
  {
    number: "02",
    title: "You get it in writing",
    text: `A written scope and price within ${estimateWindow} — base depth, asphalt depth, finished grade, and the schedule.`,
  },
  {
    number: "03",
    title: "We pave it",
    text: "We tell you the day, we turn up on it, and we tell you when you can drive on it before we leave.",
  },
];

const Steps = () => {
  return (
    <section className="process-section section-padding fix pp-steps-bg">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-7 wow">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
                How it works
              </span>
              <h2>Three steps, no surprises</h2>
            </div>
          </div>
        </div>
        <div className="row process-border">
          {steps.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={item.number}>
              <div className="process-single-box wow" data-wow-delay={`${index * 200}ms`}>
                <div className="process-content">
                  <h4 className="title">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
                <h3 className="process-number">{item.number}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 wow">
          <Link href="/contact" className="theme-btn-main">
            <span className="theme-btn-arrow-left theme-bg theme-color-white">
              <i className="fa-solid fa-arrow-left"></i>
            </span>
            <span className="theme-btn theme-bg theme-color-white">
              Book my free estimate
            </span>
            <span className="theme-btn-arrow-right theme-bg theme-color-white">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Steps;
