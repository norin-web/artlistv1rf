import { useEffect, useRef, useState } from "react";

const reduced = () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Index of the sticky scene step that matches the element's scroll progress.
 * The element is tall (N screens of scroll); its inner sticky block stays put.
 * State changes only when the step changes, so scrolling doesn't re-render each frame.
 * Reduced motion: always step 0 (the scene collapses to a static list in CSS).
 */
export function useScrollIndex<T extends HTMLElement>(count: number) {
  const ref = useRef<T>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const span = r.height - innerHeight;
      const p = span <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / span));
      const next = Math.min(count - 1, Math.floor(p * count));
      setIndex((cur) => (cur === next ? cur : next));
    };
    const onScroll = () => {
      if (document.hidden) update();
      else if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [count]);

  return { ref, index };
}

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
