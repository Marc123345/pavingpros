"use client";

import React, { useEffect } from "react";
import BackToTop from "./components/elements/BackToTop";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { LayoutProvider } from "../context/LayoutContext";
import "animate.css/animate.min.css";

interface LayoutProps {
  children: React.ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
  useEffect(() => {
    // wowjs ships no type declarations; it only drives scroll-in animations.
    import(
      // @ts-expect-error - no bundled types for wowjs
      "wowjs/dist/wow.js"
    ).then((mod: unknown) => {
      const source = mod as {
        default?: unknown;
        WOW?: unknown;
      };
      const WOWConstructor = (source.default ?? source.WOW) as
        | (new (options?: { live?: boolean }) => { init: () => void })
        | undefined;
      if (WOWConstructor) {
        new WOWConstructor({ live: false }).init();
      }
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <BackToTop />
      {children}
      <Footer />
    </div>
  );
}

const LayoutWrapper: React.FC<LayoutProps> = (props) => {
  return (
    <LayoutProvider>
      <LayoutContent {...props} />
    </LayoutProvider>
  );
};

export default LayoutWrapper;
