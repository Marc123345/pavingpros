import React from "react";
import type { Metadata } from "next";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import Origin from "../section/about/Origin";
import Beliefs from "../section/about/Beliefs";
import Team from "../section/about/Team";
import WhoWeWorkWith from "../section/about/WhoWeWorkWith";
import ClosingCta from "../section/shared/ClosingCta";

export const metadata: Metadata = {
  title: { absolute: "About Paving Pros | Built by People Who Generate Paving Leads" },
  description:
    "Paving Pros was built by a team that has run lead generation for paving contractors across the US. Here's why we started a directory.",
};

export default function AboutPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="About"
        headline={
          <>
            We&apos;ve spent years generating leads for paving contractors.{" "}
            <span>This is what we built with what we learned.</span>
          </>
        }
      />
      <Origin />
      <Beliefs />
      <Team />
      <WhoWeWorkWith />
      <ClosingCta headline="Want your area?" />
    </LayoutWrapper>
  );
}
