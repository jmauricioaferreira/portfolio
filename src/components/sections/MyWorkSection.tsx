"use client";
import { useTranslations } from "next-intl";
import { SECTIONS } from "src/constants/sections";
import { Title } from "@components/shared/Title";
import { ProjectShowcase } from "@components/shared/ProjectShowcase";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      className={`h-min-screen py-64 relative`}
      ref={sectionRef}
    >
      <motion.div
        className="flex justify-end px-64 py-20"
        style={{ x: titleX, opacity: opacityEffect }}
      >
        <Title className={"flex"}>{t("title")}</Title>
      </motion.div>
      <div className="flex flex-col gap-96">
        <ProjectShowcase />
        <ProjectShowcase />
        <ProjectShowcase />
      </div>
    </section>
  );
};
