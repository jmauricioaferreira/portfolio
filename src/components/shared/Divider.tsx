"use client";
import { useTranslations } from "next-intl";
import { Text } from "./Text";
import { Highlighted } from "./HighLighted";
import Image from "next/image";
import logo from "@public/opacity.svg";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

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
    <div className="flex h-screen relative items-center justify-between gap-40 w-full h-50 pt-20 px-5 my-32">
      <motion.div
        ref={lineRef}
        style={{ width: lineWidth }}
        className="flex h-px bg-primary-green top-0"
      ></motion.div>

      <motion.div
        className="flex w-1/2 "
        style={{
          opacity: textOpacity,
          x: textX,
        }}
      >
        <Text className="text-custom-32 w-[75.6rem] font-medium">
          {t.rich("description", {
            Highlighted: (children) => <Highlighted>{children}</Highlighted>,
          })}
        </Text>
      </motion.div>

      <motion.div
        ref={imageRef}
        className="absolute right-1/3 top-1/3"
        variants={imageVariants}
        initial="hidden"
        animate={controls}
      >
        <Image src={logo} width={500} height={500} alt={""} />
      </motion.div>
    </div>
  );
};
