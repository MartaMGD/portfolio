"use client";

import { useEffect } from "react";

/**
 * Updates `--scroll-y` CSS variable on the document root on every scroll
 * (rAF-throttled). Other elements read it to create parallax effects.
 */
export function ScrollEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        String(window.scrollY)
      );
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
