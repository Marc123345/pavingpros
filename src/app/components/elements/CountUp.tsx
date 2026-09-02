"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** The final number to land on. */
  end: number;
  /** Milliseconds for the whole run. */
  duration?: number;
}

/**
 * Counts up to `end` once it scrolls into view.
 *
 * Renders the final value straight away and only animates on top of it, so the
 * number is never blank — the template's version rendered nothing at all until
 * its observer fired.
 */
export default function CountUp({ end, duration = 1400 }: CountUpProps): JSX.Element {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            // ease-out so it decelerates onto the real figure
            setValue(Math.round(end * (1 - Math.pow(1 - t, 3))));
            if (t < 1) frame = requestAnimationFrame(step);
          };
          setValue(0);
          frame = requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}
