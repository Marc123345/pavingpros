import React from "react";
import type { Metadata } from "next";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import PhotoBand from "../section/shared/PhotoBand";
import CalendarEmbed from "../section/book/CalendarEmbed";
import WhatWeCover from "../section/book/WhatWeCover";

export const metadata: Metadata = {
  title: { absolute: "Book an Estimate | Paving Pros" },
  description:
    "Pick a time for us to come out, measure the job and price it in writing. Free, with no obligation.",
};

export default function BookPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="Book a call"
        headline={
          <>
            Pick a time and we&apos;ll come and{" "}
            <span>look at the job</span>
          </>
        }
        subhead="Pick a slot below. We come out, measure it, check how it drains, and put a price in writing afterwards. No charge and no obligation."
      />
      <CalendarEmbed />
      <PhotoBand
        src="/assets/images/photos/paver-truck.jpg"
        alt="A paver working off a dump truck on a road job"
        height="short"
      />
      <WhatWeCover />
    </LayoutWrapper>
  );
}
