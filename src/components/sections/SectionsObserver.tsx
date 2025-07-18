"use client";
import { useEffect } from "react";

export default function SectionsObserver() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-id]"),
    );
    if (!sections.length) return;

    const handleScroll = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      // encontra a seção cujo centro está mais próximo do centro da viewport
      let currentId = "";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          currentId = section.getAttribute("data-section-id") || "";
        }
      });

      if (currentId) {
        history.replaceState(null, "", `#${currentId}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
