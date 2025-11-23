"use client";
import logo from "@public/opacity.svg";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { Highlighted } from "./HighLighted";
import { Text } from "./Text";

export const Divider = () => {
  const t = useTranslations("Hello");

  const lineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); // Ref para a imagem

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.05, 0.4], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.4], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.05, 0.4], ["500px", "0px"]);

  const controls = useAnimation();

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.3) {
      controls.start("visible"); // Inicia a animação da imagem
    }

    if (value === 0) {
      controls.set({
        opacity: 0,
        scale: 0.5,
      });
    }
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 0.6,
      scale: 1.5,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex h-screen relative items-center justify-center lg:justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-32 2xl:gap-40 w-full pt-16 sm:pt-20 md:pt-24 lg:pt-20 px-4 sm:px-6 md:px-8 lg:px-5 my-16 sm:my-20 md:my-24 lg:my-32">
      <motion.div
        ref={lineRef}
        style={{ width: lineWidth }}
        className="h-px bg-primary-green top-0 hidden lg:block"
      ></motion.div>

      <motion.div
        className="flex w-full lg:w-1/2 justify-center lg:justify-start"
        style={{
          opacity: textOpacity,
          x: textX,
        }}
      >
        <Text className="text-lg  sm:text-xl md:text-2xl lg:text-3xl xl:text-custom-32   w-full max-w-4xl lg:max-w-none lg:w-[75.6rem] font-medium text-center lg:text-left">
          {t.rich("description", {
            Highlighted: (children) => <Highlighted>{children}</Highlighted>,
          })}
        </Text>
      </motion.div>

      <motion.div
        ref={imageRef}
        className="absolute right-4 sm:right-6 md:right-8 lg:right-1/3 top-1/4 sm:top-1/3 lg:top-1/3"
        variants={imageVariants}
        initial="hidden"
        animate={controls}
      >
        <Image
          src={logo}
          width={300}
          height={300}
          alt=""
          style={{
            width: "clamp(150px, 15vw, 500px)",
            height: "clamp(150px, 15vw, 500px)",
          }}
        />
      </motion.div>
    </div>
  );
};
