// src/hook/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useLocation } from "react-router-dom";

export default function useLenis() {
  const location = useLocation();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      smooth: true,
      smoothTouch: false,
      
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to top on route change
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [location]);
}
