"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  const isInitialMount = useRef(true);

  useEffect(() => {
    const resetScroll = () => {
      if (typeof window !== "undefined") {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        }
      }
    };

    if (typeof window !== "undefined" && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (isInitialMount.current) {
      isInitialMount.current = false;
      // On initial load, only force top if we're on the homepage
      if (pathname === "/") {
        resetScroll();
        setTimeout(resetScroll, 50);
        setTimeout(resetScroll, 150);
      }
    } else {
      // On subsequent client-side navigations, always scroll to top
      resetScroll();
      setTimeout(resetScroll, 50);
      setTimeout(resetScroll, 150);
    }
  }, [pathname]);

  return null;
}
