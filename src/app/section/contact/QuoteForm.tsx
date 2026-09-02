"use client";
import React, { type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useFormSubmit } from "../../../lib/hooks/useFormSubmit";
import { services } from "../../../lib/services";
import { estimateWindow } from "../../../lib/site";

const QuoteForm = () => {
  const router = useRouter();
  const { submit, loading, error } = useFormSubmit("/api/quote");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      if (key === "services") {
        const existing = payload[key];
        payload[key] = Array.isArray(existing) ? [...existing, value] : [value];
      } else {
        payload[key] = value;
      }
    });
    try {
      await submit(payload);
      router.push("/thank-you");
    } catch {
      /* surfaced below */
    }
  };

  return (
    <section className="signup-form-section section-padding">
      <div className="auto-container">
        <div className="signup-card wow">
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" name="name" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" name="phone" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="property">Property type</label>
                <select id="property" name="property" required defaultValue="">
                  <option value="" disabled>Select</option>
                  <option value="Residential">Home</option>
                  <option value="Commercial">Business or managed property</option>
                </select>
              </div>
              <div className="form-group col-12">
                <label htmlFor="address">Job address</label>
                <input id="address" type="text" name="address" placeholder="Street and town" required />
              </div>

              <div className="form-group col-12">
                <span className="group-label">What do you need?</span>
                <div className="checkbox-row">
                  {services.map((s) => (
                    <label className="checkbox-pill" key={s.slug}>
                      <input type="checkbox" name="services" value={s.title} />
                      <span>{s.title}</span>
                    </label>
                  ))}
                  <label className="checkbox-pill">
                    <input type="checkbox" name="services" value="Not sure" />
                    <span>Not sure</span>
                  </label>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="size">Rough size</label>
                <input id="size" type="text" name="size" placeholder="e.g. 2-car driveway, or 40 spaces" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="timing">When are you hoping to do it?</label>
                <select id="timing" name="timing" defaultValue="">
                  <option value="" disabled>Select</option>
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Within a month">Within a month</option>
                  <option value="This season">This season</option>
                  <option value="Just pricing it">Just pricing it for now</option>
                </select>
              </div>

              <div className="form-group col-12">
                <label htmlFor="notes">Anything else we should know?</label>
                <textarea id="notes" name="notes" rows={4}></textarea>
              </div>

              <div className="col-12">
                {error && <p className="form-error">Something went wrong. Please try again, or call us.</p>}
                <button type="submit" className="theme-btn-main" disabled={loading}>
                  <span className="theme-btn-arrow-left theme-bg theme-color-white">
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  <span className="theme-btn theme-bg theme-color-white">
                    {loading ? "Sending…" : "Request my free estimate"}
                  </span>
                  <span className="theme-btn-arrow-right theme-bg theme-color-white">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>
                <p className="form-note">
                  Free estimates, no obligation. We&apos;ll come back within{" "}
                  {estimateWindow} and we&apos;ll never pass your details on.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
