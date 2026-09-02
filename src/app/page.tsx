import React from "react";
import type { Metadata } from "next";
import LayoutWrapper from "./LayoutWrapper";
import Hero from "./section/home/Hero";
import Problem from "./section/home/Problem";
import Benefits from "./section/home/Benefits";
import Marquee from "./section/home/Marquee";
import Steps from "./section/home/Steps";
import WhoFor from "./section/home/WhoFor";
import Work from "./section/home/Work";
import Testimonials from "./section/home/Testimonials";
import ServiceArea from "./section/home/ServiceArea";
import Stats from "./section/home/Stats";
import ClosingCta from "./section/shared/ClosingCta";

export const metadata: Metadata = {
  title: "Paving Pros | Asphalt Paving, Sealcoating & Repair",
  description:
    "Driveways, parking lots and private roads — paved, sealed, striped and repaired. Free written estimates, licensed and insured, and a base built to last.",
};

export default function Home(): JSX.Element {
  return (
    <LayoutWrapper>
      <Hero />
      <Problem />
      <Benefits />
      <Marquee />
      <Steps />
      <WhoFor />
      <Work />
      <Testimonials />
      <ServiceArea />
      <Stats />
      <ClosingCta
        headline="Get a free estimate on your driveway or lot."
        body="We come out, measure it properly, and put a price in writing. No fee and no obligation."
        buttonLabel="Get my free estimate"
        href="/contact"
      />
    </LayoutWrapper>
  );
}
