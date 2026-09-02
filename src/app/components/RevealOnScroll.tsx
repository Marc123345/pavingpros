"use client";

import { useEffect } from "react";

/**
 * Scroll reveal for the template's `.wow` elements.
 *
 * Replaces wow.js, which set `visibility: hidden` inline on every `.wow` box at
 * init and then revealed them from cached offsets. Once lazy-loaded images
 * shifted the layout those offsets went stale and whole sections stayed
 * invisible.
 *
 * This fails open instead: the hidden state is only ever applied by this
 * script, so if it never runs — JS disabled, error, slow device — the content
 * is simply visible.
 */
export default function RevealOnScroll(): null {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".wow")
    ).filter((el) => !el.dataset.reveal);

    if (!elements.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => (el.dataset.reveal = "in"));
      return;
    }

    elements.forEach((el) => {
      el.dataset.reveal = "pending";
      const delay = el.getAttribute("data-wow-delay");
      if (delay) el.style.transitionDelay = delay;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.reveal = "in";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));

    // Anything already on screen at load reveals immediately.
    const revealAboveFold = () => {
      elements.forEach((el) => {
        if (el.dataset.reveal === "in") return;
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.dataset.reveal = "in";
          observer.unobserve(el);
        }
      });
    };
    revealAboveFold();

    return () => observer.disconnect();
  }, []);

  return null;
}
