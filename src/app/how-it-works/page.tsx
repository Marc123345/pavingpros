import React from "react";
import type { Metadata } from "next";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import PhotoBand from "../section/shared/PhotoBand";
import ProcessSteps from "../section/how-it-works/ProcessSteps";
import SampleLead from "../section/how-it-works/SampleLead";
import Faq from "../section/how-it-works/Faq";
import ClosingCta from "../section/shared/ClosingCta";

export const metadata: Metadata = {
  title: { absolute: "How Paving Pros Works | Exclusive Leads for Paving Contractors" },
  description:
    "See how Paving Pros finds property owners who need paving, qualifies them, and sends them to the one contractor who owns that territory.",
};

export default function HowItWorksPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="How it works"
        headline={
          <>
            From a property owner&apos;s search to your phone, <span>in minutes</span>
          </>
        }
        subhead="Here is exactly what happens between someone needing a driveway or lot paved and you getting the call."
      />
      <ProcessSteps />
      <PhotoBand
        src="/assets/images/photos/crew-laying.jpg"
        alt="A crew raking and laying hot asphalt behind a paver"
        caption="You call, you quote, you close."
      />
      <SampleLead />
      <Faq />
      <ClosingCta headline="One paver per territory. Check whether yours is still open." />
    </LayoutWrapper>
  );
}
