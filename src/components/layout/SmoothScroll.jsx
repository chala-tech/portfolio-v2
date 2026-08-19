import { useEffect } from "react";
import Lenis from "lenis";

// enables buttery smooth scrolling site-wide
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return children;
}