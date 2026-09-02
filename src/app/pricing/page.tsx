import React from "react";
import type { Metadata } from "next";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import PricingCard from "../section/pricing/PricingCard";
import JobValue from "../section/pricing/JobValue";
import NoFreeListings from "../section/pricing/NoFreeListings";
import PricingFaq from "../section/pricing/PricingFaq";
import ClosingCta from "../section/shared/ClosingCta";

export const metadata: Metadata = {
  title: { absolute: "Paving Pros Pricing | Exclusive Territory Membership" },
  description:
    "One simple monthly membership. Exclusive territory, qualified paving leads delivered in real time, and a verified directory listing. No contract.",
};

export default function PricingPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="Pricing"
        headline={
          <>
            One membership. One territory. <span>All the leads in it.</span>
          </>
        }
        subhead="Simple pricing with no contract. You're paying to own an area, not to rent a spot on a shared list."
      />
      <PricingCard />
      <JobValue />
      <NoFreeListings />
      <PricingFaq />
      <ClosingCta
        headline="Check territory availability"
        body="Tell us where you're based and we'll confirm whether your area is still open."
        buttonLabel="Check territory availability"
      />
    </LayoutWrapper>
  );
}
