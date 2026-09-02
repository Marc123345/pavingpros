import React from "react";
import type { Metadata } from "next";
import LayoutWrapper from "../LayoutWrapper";
import PageHero from "../section/shared/PageHero";
import PhotoBand from "../section/shared/PhotoBand";
import SignUpForm from "../section/signup/SignUpForm";
import WhatHappensNext from "../section/signup/WhatHappensNext";
import TalkFirst from "../section/signup/TalkFirst";

export const metadata: Metadata = {
  title: { absolute: "Claim Your Territory | Paving Pros" },
  description:
    "Check whether your territory is available and join the Paving Pros directory. Takes about two minutes.",
};

export default function SignUpPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <PageHero
        eyebrow="Sign up"
        headline={<>Claim your <span>territory</span></>}
        subhead="Fill this in and we'll confirm whether your area is open, usually within one business day. If it is, we'll get your listing and your leads set up."
      />
      <SignUpForm />
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
