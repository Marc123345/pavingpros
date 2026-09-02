import React from "react";
import type { Metadata } from "next";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import QuoteForm from "../section/contact/QuoteForm";
import PhotoBand from "../section/shared/PhotoBand";
import WhatHappensNext from "../section/contact/WhatHappensNext";
import TalkFirst from "../section/contact/TalkFirst";
import { estimateWindow } from "../../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Get a Free Estimate | Paving Pros" },
  description:
    "Send us the address and what you need. We'll come out, measure it, and put a price in writing — free, with no obligation.",
};

export default function ContactPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="Free estimate"
        headline={<>Tell us where, and <span>what needs doing</span></>}
        subhead={`We'll come out, measure it properly and put a price in writing within ${estimateWindow}. No fee, and no obligation to go ahead.`}
      />
      <QuoteForm />
      <PhotoBand
        src="/assets/images/photos/striping.jpg"
        alt="Fresh yellow lines painted on new asphalt"
        height="short"
      />
      <WhatHappensNext />
      <TalkFirst />
    </LayoutWrapper>
  );
}
