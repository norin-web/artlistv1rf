import { useEffect } from "react";

const reduced = () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Every .glow drifts toward the pointer while the pointer is over the glow's
 * section: the section gets --mx / --my (0..1). Mounted once in Root.
 */
export function useGlowFollow() {
  useEffect(() => {
    if (reduced() || !matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const update = () => {
      raf = 0;
      document.querySelectorAll<HTMLElement>(".glow").forEach((g) => {
        const host = g.parentElement;
        if (!host) return;
        const r = host.getBoundingClientRect();
        if (x < r.left || x > r.right || y < r.top || y > r.bottom) return;
        host.style.setProperty("--mx", ((x - r.left) / r.width).toFixed(3));
        host.style.setProperty("--my", ((y - r.top) / r.height).toFixed(3));
      });
    };
    const on = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };
    addEventListener("pointermove", on, { passive: true });
    return () => {
      removeEventListener("pointermove", on);
      cancelAnimationFrame(raf);
    };
  }, []);
}
