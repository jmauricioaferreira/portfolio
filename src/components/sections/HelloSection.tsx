"use client";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

import { Menu } from "@components/shared/Menu";
import { Text } from "@components/shared/Text";
import { SECTIONS } from "src/constants/sections";
import logo from "@public/opacity.svg";

export const HelloSection = () => {
  const t = useTranslations("Hello");

  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    if (pos >= 1) {
      return "relative";
    }
    return pos === 0.5 ? "relative" : "fixed";
  });

  return (
    <motion.section
      id={SECTIONS.HELLO}
      className={`h-screen `}
      ref={targetRef}
      style={{ opacity }}
    >
      <motion.div className="flex flex-col h-full relative">
        <motion.div
          className="flex"
          initial={{ opacity: 0 }}
          // Animação de descida com bounce, terminando na posição final (y: 0)
          animate={{ opacity: 1 }}
          transition={{
            duration: 4, // Duração total da animação
            ease: "easeInOut", // Suavização para a descida
            opacity: { duration: 2 }, // Animação de opacidade mais rápida
          }}
        >
          <Image
            src={logo}
            className="absolute left-2/4 top-28"
            width={500}
            height={500}
            alt={""}
          />
        </motion.div>

        <div className="flex flex-col flex-1 items-center justify-center">
          <motion.div
            initial={{ y: "-500px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2000,
              ease: "easeInOut",
              opacity: { duration: 1 },
              type: "spring",
              stiffness: 40,
            }}
            style={{ scale, x: "0%", position }}
            className="flex justify-between items-center gap-96"
          >
            <div className="relative">
              <Text className="text-custom-64 font-light">{t("hello")}</Text>
              <div className="flex flex-col pl-40">
                <h1 className="font-porsha text-[19.2rem] leading-[15rem] bg-gradient-to-r from-title-gradient-start to-title-gradient-end bg-clip-text text-transparent">
                  José
                </h1>
                <h1 className="font-porsha text-[19.2rem]  leading-[15rem] bg-gradient-to-r from-title-gradient-start to-title-gradient-end bg-clip-text text-transparent">
                  Mauricio
                </h1>
                <Text className="text-custom-48  font-light">
                  {t("position")}
                </Text>
              </div>
            </div>
            <Menu />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
