"use client";
import React, { type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useFormSubmit } from "../../../lib/hooks/useFormSubmit";

const serviceOptions = [
  "Asphalt paving",
  "Resurfacing",
  "Sealcoating",
  "Crack repair",
  "Line striping",
  "Concrete",
  "Grading",
  "Other",
];

const SignUpForm = () => {
  const router = useRouter();
  const { submit, loading, error } = useFormSubmit("/api/signup");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      if (key === "services" || key === "work_type") {
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
      /* error surfaced below */
    }
  };

  return (
    <section className="signup-form-section section-padding">
      <div className="auto-container">
        <div className="signup-card wow fadeInUp">
          <form onSubmit={handleSubmit} noValidate={false}>
            <div className="row g-4">
              <div className="form-group col-md-6">
                <label htmlFor="company">Company name</label>
                <input id="company" type="text" name="company" required />
              </div>
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
                <label htmlFor="website">Website <span className="optional">(optional)</span></label>
                <input id="website" type="url" name="website" placeholder="https://" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="base_location">City and state where you&apos;re based</label>
                <input id="base_location" type="text" name="base_location" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="travel">How far will you travel for a job?</label>
                <select id="travel" name="travel" required defaultValue="">
                  <option value="" disabled>Select distance</option>
                  <option value="25">25 miles</option>
                  <option value="50">50 miles</option>
                  <option value="75">75 miles</option>
                  <option value="100+">100+ miles</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="capacity">How many jobs can you take on per month?</label>
                <select id="capacity" name="capacity" required defaultValue="">
                  <option value="" disabled>Select capacity</option>
                  <option value="1-5">1 – 5</option>
                  <option value="6-10">6 – 10</option>
                  <option value="11-20">11 – 20</option>
                  <option value="20+">20+</option>
                </select>
              </div>

              <div className="form-group col-12">
                <span className="group-label">Type of work</span>
                <div className="checkbox-row">
                  {["Residential", "Commercial"].map((type) => (
                    <label className="checkbox-pill" key={type}>
                      <input type="checkbox" name="work_type" value={type} />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group col-12">
                <span className="group-label">Services</span>
                <div className="checkbox-row">
                  {serviceOptions.map((service) => (
                    <label className="checkbox-pill" key={service}>
                      <input type="checkbox" name="services" value={service} />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group col-12">
                <label htmlFor="notes">Anything else we should know?</label>
                <textarea id="notes" name="notes" rows={4}></textarea>
              </div>

              <div className="col-12">
                {error && <p className="form-error">Something went wrong. Please try again or call us.</p>}
                <button type="submit" className="theme-btn-main" disabled={loading}>
                  <span className="theme-btn-arrow-left theme-bg theme-color-white">
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  <span className="theme-btn theme-bg theme-color-white">
                    {loading ? "Checking..." : "Check my territory"}
                  </span>
                  <span className="theme-btn-arrow-right theme-bg theme-color-white">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>
                <p className="form-note">
                  No contract. Cancel anytime. We&apos;ll never share your details
                  with other contractors.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
