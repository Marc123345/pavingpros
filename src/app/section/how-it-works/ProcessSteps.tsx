"use client";
import React from "react";

type Step = {
  number: string;
  title: string;
  body: React.ReactNode;
  note?: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "You claim a territory",
    body: (
      <p>
        You tell us where you&apos;re based and how far you&apos;re willing to travel
        with your equipment. We map your territory, check that it&apos;s open, and
        lock it to you. Territories are defined by real geography, not just a
        radius, so if you don&apos;t want to haul across a bridge or into a city you
        don&apos;t service, we draw the line where you want it.
      </p>
    ),
    note: "One contractor per territory. That's the whole point.",
  },
  {
    number: "02",
    title: "You set your preferences",
    body: (
      <>
        <p>Before any lead comes through, you tell us:</p>
        <ul className="check-list">
          <li>Residential, commercial, or both</li>
          <li>
            Services you offer (asphalt paving, resurfacing, sealcoating, crack
            repair, line striping, concrete, grading)
          </li>
          <li>Minimum job size you&apos;ll take</li>
          <li>How you want to be contacted (text, email, or both)</li>
        </ul>
      </>
    ),
    note: "Leads that don't match your preferences don't get sent to you.",
  },
  {
    number: "03",
    title: "We find property owners who need paving",
    body: (
      <p>
        Property owners in your territory find Paving Pros through search, AI
        assistants, and advertising, and request a quote. They fill in their
        address, the type of surface, what&apos;s wrong with it, and when they want
        the work done.
      </p>
    ),
  },
  {
    number: "04",
    title: "We qualify the lead",
    body: (
      <p>
        Every request is checked before it reaches you. We confirm the contact
        details are real, the property is in your territory, and the job matches
        the preferences you set. Owners who are just browsing or who want work
        you don&apos;t do are filtered out.
      </p>
    ),
  },
  {
    number: "05",
    title: "The lead goes to you, and only you",
    body: (
      <p>
        You get a text and an email with the owner&apos;s name, phone number,
        property address, surface type, and job details. Nobody else in your
        territory receives it. You call, you quote, you close.
      </p>
    ),
  },
  {
    number: "06",
    title: "You track everything in your dashboard",
    body: (
      <p>
        Your member dashboard shows every lead you&apos;ve received, the details of
        each one, and your listing performance. You can update your preferences
        or pause leads at any time.
      </p>
    ),
  },
];

const ProcessSteps = () => {
  return (
    <section className="steps-detail-section section-padding">
      <div className="auto-container">
        <div className="steps-detail-list">
          {steps.map((step, index) => (
            <div
              className="step-row wow fadeInUp"
              data-wow-delay={`${(index % 3) * 150}ms`}
              key={step.number}
            >
              <div className="step-marker">
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-body">
                <h3 className="step-title">{step.title}</h3>
                {step.body}
                {step.note && <p className="step-note">{step.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
