"use client";
import { useRef } from "react";
import { SECTIONS } from "src/constants/sections";
import { useTranslations } from "next-intl";
import { Title } from "@components/shared/Title";
import Image from "next/image";
import myself from "@public/jmaf.png";
import { Text } from "@components/shared/Text";
import { motion, useScroll, useTransform } from "framer-motion";

export const AboutMeSection = () => {
  const t = useTranslations("AboutMe");

  const targetRef = useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Controla quando a animação começa e termina
  });
  const textX = useTransform(scrollYProgress, [0.05, 0.4], ["-150%", "0px"]);
  const imageX = useTransform(scrollYProgress, [0.05, 0.4], ["250%", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  return (
    <motion.section
      className={`flex h-screen bg-gradient-start justify-center items-center`}
      id={SECTIONS.ABOUT_ME}
      ref={targetRef}
    >
      <motion.div
        ref={textRef}
        className="flex flex-col w-1/2 items-center"
        style={{ x: textX, opacity }}
      >
        <div>
          <Title>{t("title")}</Title>
          <div className=" flex flex-col gap-6 w-[60rem] text-custom-24">
            <Text>{t("description.first")}</Text>
            <Text>{t("description.second")}</Text>
            <Text>{t("description.third")}</Text>
          </div>
        </div>
      </motion.div>
      <motion.div ref={imageRef} style={{ x: imageX, opacity }}>
        <Image src={myself} alt={""} width={900} />
      </motion.div>
    </motion.section>
  );
};
