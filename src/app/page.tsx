import React from "react";
import type { Metadata } from "next";
import LayoutWrapper from "./LayoutWrapper";
import Hero from "./section/home/Hero";
import Problem from "./section/home/Problem";
import Benefits from "./section/home/Benefits";
import Marquee from "./section/home/Marquee";
import Steps from "./section/home/Steps";
import Work from "./section/home/Work";
import WhoFor from "./section/home/WhoFor";
import Testimonials from "./section/home/Testimonials";
import Stats from "./section/home/Stats";
import ClosingCta from "./section/shared/ClosingCta";

export const metadata: Metadata = {
  title: "Paving Pros | Exclusive Paving Leads in Your Territory",
  description:
    "Join the Paving Pros directory and get asphalt, sealcoating, and concrete leads sent straight to your phone. One contractor per territory. No contract, cancel anytime.",
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
      <Stats />
      <ClosingCta
        headline="Your territory is either yours or someone else's."
        body="Territories are assigned on a first-come basis and we only take one paver per area. Check yours now."
      />
    </LayoutWrapper>
  );
}
