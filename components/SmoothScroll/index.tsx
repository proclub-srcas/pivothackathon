"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import 'lenis/dist/lenis.css';

function AnchorScrolling() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.hash && anchor.hash.length > 1) {
        // Check if the link is local to the current page
        const isCurrentPage =
          anchor.origin === window.location.origin &&
          anchor.pathname === window.location.pathname;

        if (isCurrentPage) {
          e.preventDefault();
          lenis.scrollTo(anchor.hash, {
            offset: -100, // Offset for fixed navbar
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
          });

          // Optional: Update URL without jumping
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <AnchorScrolling />
      {children}
    </ReactLenis>
  );
}
