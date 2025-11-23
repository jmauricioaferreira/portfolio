"use client";
import { useEffect } from "react";

export default function SectionsObserver() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-id]"),
    );
    if (!sections.length) return;

    let activeId = "";

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        const id = top.target.getAttribute("data-section-id") || "";
        if (id && id !== activeId) {
          activeId = id;
          history.replaceState(null, "", `#${id}`);
          window.dispatchEvent(
            new CustomEvent("sectionchange", { detail: id }),
          );
        }
      },
      { threshold: [0.4, 0.6, 0.8] },
    );

    sections.forEach((s) => observer.observe(s));

    const init = () => {
      const y = window.scrollY + window.innerHeight / 2;
      let best = "";
      let min = Infinity;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const center = rect.top + window.scrollY + rect.height / 2;
        const d = Math.abs(center - y);
        if (d < min) {
          min = d;
          best = section.getAttribute("data-section-id") || "";
        }
      });
      if (best) {
        activeId = best;
        history.replaceState(null, "", `#${best}`);
        window.dispatchEvent(
          new CustomEvent("sectionchange", { detail: best }),
        );
      }
    };
    init();

    return () => {
      sections.forEach((s) => observer.unobserve(s));
      observer.disconnect();
    };
  }, []);

  return null;
}
