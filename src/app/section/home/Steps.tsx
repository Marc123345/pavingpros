"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Pick your territory",
    text: "Enter your base location and how far you'll travel.",
  },
  {
    number: "02",
    title: "Set your preferences",
    text: "Residential, commercial, or both. Minimum job size. Services you offer.",
  },
  {
    number: "03",
    title: "Start getting leads",
    text: "Property owners in your area request quotes, and you get the call.",
  },
];

const Steps = () => {
  return (
    <section className="process-section section-padding fix pp-steps-bg">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-7 wow fadeInUp">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                How it works
              </span>
              <h2 className="text-reveal-anim">
                Three steps to owning your area
              </h2>
            </div>
          </div>
        </div>
        <div className="row process-border">
          {steps.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={item.number}>
              <div className="process-single-box wow fadeInUp" data-wow-delay={`${index * 200}ms`}>
                <div className="process-content">
                  <h4 className="title">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
                <h3 className="process-number">{item.number}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 wow fadeInUp">
          <Link href="/sign-up" className="theme-btn-main">
            <span className="theme-btn-arrow-left theme-bg theme-color-white">
              <i className="fa-solid fa-arrow-left"></i>
            </span>
            <span className="theme-btn theme-bg theme-color-white">
              Check if my territory is available
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
