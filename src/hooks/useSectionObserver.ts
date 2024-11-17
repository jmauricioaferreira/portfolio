"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useSectionObserver = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const router = useRouter();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          router.replace(`#${sectionId}`, undefined, { shallow: true });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% da seção precisa estar visível
    });

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections, router]);

  return activeSection;
};
