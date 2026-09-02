import type { Metadata } from "next";
import Link from "next/link";
import LayoutWrapper from "./LayoutWrapper";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage(): JSX.Element {
  return (
    <LayoutWrapper>
      <section className="thank-you-section">
        <div className="auto-container">
          <div className="thank-you-inner">
            <h1 className="thank-you-title">This page took a wrong turn.</h1>
            <p className="thank-you-body">
              The page you were looking for isn&apos;t here. Head back to the
              home page, or check whether your territory is still open.
            </p>
            <Link href="/" className="theme-btn-main">
              <span className="theme-btn-arrow-left theme-bg theme-color-white">
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              <span className="theme-btn theme-bg theme-color-white">Back to home</span>
              <span className="theme-btn-arrow-right theme-bg theme-color-white">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
