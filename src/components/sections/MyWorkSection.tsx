"use client";
import { ProjectShowcase } from "@components/shared/ProjectShowcase";
import { Title } from "@components/shared/Title";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { SECTIONS } from "src/constants/sections";
import { Projects } from "src/constants/projects";

export const MyWorkSection = () => {
  const t = useTranslations("MyWork");
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 0.2], ["150%", "0px"]);
  const opacityEffect = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section
      id={SECTIONS.MY_WORK}
      data-section-id={SECTIONS.MY_WORK}
      className="h-min-screen py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 relative"
      ref={sectionRef}
    >
      <motion.div
        className="flex justify-end px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8 sm:py-12 md:py-16 lg:py-20"
        style={{ x: titleX, opacity: opacityEffect }}
      >
        <Title className="flex">{t("title")}</Title>
      </motion.div>
      <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 lg:gap-48 xl:gap-96">
        {Projects.map((project) => (
          <ProjectShowcase key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
