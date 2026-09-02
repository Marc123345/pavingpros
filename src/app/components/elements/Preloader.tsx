"use client";

import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps): JSX.Element | null {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if all critical resources are loaded
    const checkResourcesLoaded = (): boolean => {
      if (typeof window === "undefined") return false;

      // Check if document is ready
      if (document.readyState !== "complete") return false;

      // Check if all images are loaded
      const images = document.querySelectorAll("img");
      for (let i = 0; i < images.length; i++) {
        const img = images[i] as HTMLImageElement;
        if (!img.complete) return false;
      }

      return true;
    };

    // If resources are already loaded, hide immediately
    if (checkResourcesLoaded()) {
      setIsLoading(false);
      onComplete?.();
      return;
    }

    // Listen for load event
    const handleLoad = () => {
      if (checkResourcesLoaded()) {
        setIsLoading(false);
        onComplete?.();
      }
    };

    // Listen for DOMContentLoaded and window load
    window.addEventListener("load", handleLoad);
    document.addEventListener("DOMContentLoaded", handleLoad);

    // Fallback: Hide after maximum wait time (prevents infinite loading)
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("DOMContentLoaded", handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  if (!isLoading) return null;

  return (
  <div className="preloader">
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
    </svg>
    <div className="preloader-heading">
      <div className="load-text">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
    </div>
  </div>
  );
}

