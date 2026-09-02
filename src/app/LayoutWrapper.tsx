"use client";

import React from "react";
import BackToTop from "./components/elements/BackToTop";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { LayoutProvider } from "../context/LayoutContext";
import RevealOnScroll from "./components/RevealOnScroll";

interface LayoutProps {
  children: React.ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
  return (
    <div className="page-wrapper">
      <RevealOnScroll />
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
