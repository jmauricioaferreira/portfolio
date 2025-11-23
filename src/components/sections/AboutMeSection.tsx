"use client";
import { Text } from "@components/shared/Text";
import { Title } from "@components/shared/Title";
import myself from "@public/jmaf.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { SECTIONS } from "src/constants/sections";

export const AboutMeSection = () => {
  const t = useTranslations("AboutMe");

  const targetRef = useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const textX = useTransform(scrollYProgress, [0.05, 0.4], ["-150%", "0px"]);
  const imageX = useTransform(scrollYProgress, [0.05, 0.4], ["250%", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  return (
    <>
      <motion.section
        className="flex flex-col lg:flex-row h-screen bg-gradient-start justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-8 sm:py-12 md:py-16 lg:py-0"
        id={SECTIONS.ABOUT_ME}
        data-section-id={SECTIONS.ABOUT_ME}
        ref={targetRef}
      >
        <motion.div
          ref={textRef}
          className="flex flex-col w-full lg:w-1/2 items-center order-2 lg:order-1"
          style={{ x: textX, opacity }}
        >
          <div className="px-20 lg:px-0 w-full max-w-4xl">
            <Title>{t("title")}</Title>
            <div className="flex flex-col gap-4 sm:gap-6 w-full text-sm sm:text-base md:text-lg lg:text-custom-24 lg:leading-relaxed">
              <Text>{t("description.first")}</Text>
              <Text>{t("description.second")}</Text>
              <Text>{t("description.third")}</Text>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={imageRef}
          className=" order-1 lg:order-2 mb-8 lg:mb-0"
          style={{ x: imageX, opacity }}
        >
          <Image
            src={myself}
            alt="João Maurício"
            className="w-full sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[900px] lg:h-auto object-cover rounded-full"
          />
        </motion.div>
      </motion.section>
    </>
  );
};
