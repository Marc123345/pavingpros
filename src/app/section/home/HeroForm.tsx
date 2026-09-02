"use client";

import React, { type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormSubmit } from "../../../lib/hooks/useFormSubmit";
import { estimateWindow, site } from "../../../lib/site";

/** Short estimate request. The full form lives on /contact. */
const HeroForm = () => {
  const router = useRouter();
  const { submit, loading, error } = useFormSubmit("/api/quote");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.source = "hero";
    try {
      await submit(payload);
      router.push("/thank-you");
    } catch {
      /* surfaced below */
    }
  };

  return (
    <div className="hero-form-card">
      <div className="hero-form-head">
        <h2 className="hero-form-title">Get a free estimate</h2>
        <p className="hero-form-sub">
          Tell us where and what, and we&apos;ll come back within{" "}
          {estimateWindow} with a price. No pressure, no fee.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="hero-form-grid">
          <div className="hero-field">
            <label htmlFor="hero-name">Your name</label>
            <input id="hero-name" name="name" type="text" required />
          </div>
          <div className="hero-field">
            <label htmlFor="hero-phone">Phone</label>
            <input id="hero-phone" name="phone" type="tel" required />
          </div>
          <div className="hero-field">
            <label htmlFor="hero-email">Email</label>
            <input id="hero-email" name="email" type="email" required />
          </div>
          <div className="hero-field">
            <label htmlFor="hero-property">Property</label>
            <select id="hero-property" name="property" required defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option value="Residential">Home</option>
              <option value="Commercial">Business or property</option>
            </select>
          </div>
          <div className="hero-field hero-field--wide">
            <label htmlFor="hero-address">Job address</label>
            <input
              id="hero-address"
              name="address"
              type="text"
              placeholder="Street and town"
              required
            />
          </div>
        </div>

        {error && (
          <p className="form-error">
            Something went wrong. Please try again, or call us.
          </p>
        )}

        <button type="submit" className="hero-form-submit" disabled={loading}>
          {loading ? "Sending…" : "Get my free estimate"}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>

        <p className="hero-form-note">
          Free estimates. No obligation. We&apos;ll never pass your details on.
        </p>
      </form>

      <div className="hero-form-alt">
        <span>Rather just talk?</span>
        <Link href={site.phoneHref}>
          <i className="fa-solid fa-phone" aria-hidden="true"></i>
          {site.phone}
        </Link>
      </div>
    </div>
  );
};

export default HeroForm;
