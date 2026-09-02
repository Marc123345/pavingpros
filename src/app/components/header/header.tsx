"use client";

import React from "react";
import Link from "next/link";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";
import AppImage from "../elements/AppImage";
import { useLayout } from "../../../context/LayoutContext";
import { site } from "../../../lib/site";

const Logo = () => (
  <Link href="/">
    <AppImage
      src="/assets/images/logo/paving-pros-logo.svg"
      alt="Paving Pros"
      width={200}
      height={42}
      priority
    />
  </Link>
);

const Header: React.FC = (): JSX.Element => {
  const { scroll, handleOpen, handleRemove, handleRemove2 } = useLayout();

  const closeMobile = () => {
    handleRemove();
    handleRemove2();
  };

  return (
    <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
      <div className="header-lower">
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Logo />
            </div>
          </div>
          <div className="nav-outer">
            <nav className="nav main-menu">
              <NavLinks />
            </nav>
          </div>
          <div className="outer-box">
            <div className="header-btn d-none d-xl-block">
              <Link className="header-btn-main" href="/sign-up">
                <span className="header-theme-btn">Claim my territory</span>
                <span className="header-btn-arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="mobile-nav-toggler" onClick={handleOpen}>
              <span className="icon lnr-icon-bars"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={closeMobile} />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Logo />
            </div>
            <div className="close-btn" onClick={closeMobile}>
              <i className="icon fa fa-times"></i>
            </div>
          </div>
          <MobileMenu extraClassName="clearfix" onNavigate={closeMobile} />
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <Link href={site.phoneHref}>{site.phone}</Link>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1"></span>
                <span className="title">Send Email</span>
                <Link href={`mailto:${site.email}`}>{site.email}</Link>
              </div>
            </li>
          </ul>
          <ul className="social-links">
            <li><Link href={site.social.facebook} aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link href={site.social.instagram} aria-label="Instagram"><i className="fab fa-instagram"></i></Link></li>
            <li><Link href={site.social.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link></li>
          </ul>
        </nav>
      </div>

      <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Logo />
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <NavLinks extraClassName="clearfix" />
                </div>
              </nav>
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
