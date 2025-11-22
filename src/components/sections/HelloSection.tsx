"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

import { Menu } from "@components/shared/Menu";
import { Text } from "@components/shared/Text";
import logo from "@public/opacity.svg";
import { SECTIONS } from "src/constants/sections";

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
      data-section-id={SECTIONS.HELLO}
      className="h-screen"
      ref={targetRef}
      style={{ opacity }}
    >
      <motion.div className="flex flex-col h-full relative">
        <motion.div
          className="flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 4, // Duração total da animação
            ease: "easeInOut", // Suavização para a descida
            opacity: { duration: 2 }, // Animação de opacidade mais rápida
          }}
        >
          <Image
            src={logo}
            className="absolute left-1/2 transform -translate-x-1/2 top-16 sm:top-20 md:top-24 lg:top-28"
            width={300}
            height={300}
            alt=""
            style={{
              width: 'clamp(200px, 25vw, 500px)',
              height: 'clamp(200px, 25vw, 500px)',
            }}
          />
        </motion.div>

        <div className="flex flex-col flex-1 items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
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
            className="flex flex-col justify-center lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24 2xl:gap-96 w-full"
          >
            <div className="relative flex flex-col items-center lg:items-start">
              <Text className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-custom-64 font-light text-center lg:text-left">
                {t("hello")}
              </Text>
              <div className="flex flex-col items-center lg:items-start">
                <h1 className="font-porsha text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[19.2rem] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[10rem] 2xl:leading-[15rem] bg-gradient-to-r from-title-gradient-start to-title-gradient-end bg-clip-text text-transparent text-center lg:text-left">
                  José
                </h1>
                <h1 className="font-porsha text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[19.2rem] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[10rem] 2xl:leading-[15rem] bg-gradient-to-r from-title-gradient-start to-title-gradient-end bg-clip-text text-transparent text-center lg:text-left">
                  Mauricio
                </h1>
                <Text className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-custom-48 font-light text-center lg:text-left mt-2 lg:mt-4">
                  {t("position")}
                </Text>
              </div>
            </div>
            <div className="hidden lg:block">
              <Menu />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
