"use client";

import React, { type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormSubmit } from "../../../lib/hooks/useFormSubmit";

/**
 * Short version of the sign-up form. Captures just enough to check a
 * territory; the full preferences form lives on /sign-up.
 */
const HeroForm = () => {
  const router = useRouter();
  const { submit, loading, error } = useFormSubmit("/api/signup");

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
        <h2 className="hero-form-title">Check your territory</h2>
        <p className="hero-form-sub">
          Takes about a minute. We&apos;ll tell you within one business day
          whether your area is open.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="hero-form-grid">
          <div className="hero-field">
            <label htmlFor="hero-company">Company name</label>
            <input id="hero-company" name="company" type="text" required />
          </div>
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
          <div className="hero-field hero-field--wide">
            <label htmlFor="hero-location">City and state you work from</label>
            <input
              id="hero-location"
              name="base_location"
              type="text"
              placeholder="e.g. Grand Rapids, MI"
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
          {loading ? "Checking…" : "Check my territory"}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>

        <p className="hero-form-note">
          No contract. Cancel anytime. We&apos;ll never share your details with
          other contractors.
        </p>
      </form>

      <div className="hero-form-alt">
        <span>Rather talk it through first?</span>
        <Link href="/book">
          <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
          Book a short call
        </Link>
      </div>
    </div>
  );
};

export default HeroForm;
