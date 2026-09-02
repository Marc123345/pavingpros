"use client";
import AppImage from "../../components/elements/AppImage";
import React from "react";

const benefits = [
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Exclusive territory",
    text: "You choose the area you actually want to work. Once it's yours, no other contractor gets leads from it. If a competitor tries to sign up in your territory, they go on a waitlist.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Leads delivered straight to you",
    text: "Every lead lands in your inbox and on your phone by text the moment it comes in, with the owner's name, phone number, address, and what they need done.",
  },
  {
    icon: "fa-solid fa-filter",
    title: "Pre-qualified before you see them",
    text: "We ask about property type, approximate size, timeline, and budget before a lead is passed on. Small patch jobs and people who are just curious get filtered out.",
  },
  {
    icon: "fa-solid fa-circle-check",
    title: "A verified listing in the directory",
    text: "Your company gets a full profile in the Paving Pros directory with your service area, services, photos, and a Verified Pro badge, so owners who find you on their own can contact you directly.",
  },
  {
    icon: "fa-solid fa-road",
    title: "Residential and commercial",
    text: "Driveways, parking lots, sealcoating, resurfacing, crack filling, line striping, and concrete. You tell us what you take on and we send you the jobs that match.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits-section section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 wow fadeInUp">
            <div className="sec-title text-center">
              <span className="sub-title justify-content-center">
                <AppImage src="/assets/images/main-home/sub-title-shape.svg" alt="" width={16} height={16} />
                Membership
              </span>
              <h2 className="text-reveal-anim">
                What you get as a Paving Pros member
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {benefits.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${(index % 3) * 200}ms`}
              key={item.title}
            >
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className={item.icon} aria-hidden="true"></i>
                </div>
                <h4 className="title">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
