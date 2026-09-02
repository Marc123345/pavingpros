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
  title: { absolute: "About Paving Pros | Asphalt Paving Contractors" },
  description:
    "Who we are, how we work, and why we spend so long on the part of the job you never see.",
};

export default function AboutPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="About"
        headline={
          <>
            We spend the longest on the part of the job{" "}
            <span>you never see.</span>
          </>
        }
        subhead="A paving crew that digs the base properly, prices it in writing, and leaves the site clean."
      />
      <Origin />
      <Beliefs />
      <Team />
      <WhoWeWorkWith />
      <ClosingCta
        headline="Get a free estimate."
        body="We come out, measure it, and put a price in writing. No fee, no obligation."
        buttonLabel="Get my free estimate"
        href="/contact"
      />
    </LayoutWrapper>
  );
}
