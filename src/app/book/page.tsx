import React from "react";
import type { Metadata } from "next";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import CalendarEmbed from "../section/book/CalendarEmbed";
import WhatWeCover from "../section/book/WhatWeCover";

export const metadata: Metadata = {
  title: { absolute: "Book a Call | Paving Pros" },
  description:
    "Book a free call. We'll pull up the territory map for your area, give you a realistic lead range, and tell you whether your territory is still open.",
};

export default function BookPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="Book a call"
        headline={
          <>
            One short call, and you&apos;ll know if your{" "}
            <span>territory is open</span>
          </>
        }
        subhead="Pick a time below. We'll walk you through the territory map for your area, give you a realistic lead range, and answer anything you want to ask. No pitch."
      />
      <CalendarEmbed />
      <WhatWeCover />
    </LayoutWrapper>
  );
}
