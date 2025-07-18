"use client";
import { Text } from "@components/shared/Text";
import { Title } from "@components/shared/Title";
import copyright from "@public/copyright.svg";
import github from "@public/github.svg";
import instagram from "@public/instagram.svg";
import linkedin from "@public/linkedin.svg";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import { SECTIONS } from "src/constants/sections";
import { ContactForm } from "./contact-form";

export const ContactSection = () => {
  const t = useTranslations("Contact");

  const sectionRef = useRef<HTMLDivElement>(null);
  const lineControls = useAnimation();
  const [iconsKey, setIconsKey] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.1 && value < 0.2) {
      setIconsKey((prevKey) => prevKey + 1); // Atualiza a chave para re-renderizar os ícones
    }
    if (value >= 0.2) {
      lineControls.start("visible");
    }

    if (value === 0) {
      lineControls.set("hidden");
    }
  });

  const imageVariants = {
    hidden: { opacity: 0.7, y: "-300px", height: "1%" },
    visible: {
      opacity: 1,
      y: "0px",
      height: "50%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const iconContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,

      y: 0,
      transition: {
        delayChildren: 0.5, // espera 0.5s após a linha
        staggerChildren: 0.2, // intervalo entre ícones
      },
    },
  };

  const iconItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className={`flex flex-col h-screen  sm:px-64 bg-gradient-start`}
      id={SECTIONS.CONTACT}
      data-section-id={SECTIONS.CONTACT}
      ref={sectionRef}
    >
      <div className="flex justify-center w-full sm:justify-between flex-1">
        <div className=" flex-col items-center justify-center hidden sm:w-12 sm:flex h-full gap-6">
          <motion.div
            initial="hidden"
            animate={lineControls}
            className="flex w-px bg-primary-green "
            variants={imageVariants}
          ></motion.div>
          <motion.div
            className="flex flex-col gap-6 w-full"
            variants={iconContainerVariants}
            initial="hidden"
            animate="visible"
            key={iconsKey}
          >
            <motion.a
              href="https://github.com/jmauricioaferreira"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconItemVariants}
            >
              <Image src={github} alt={""} className="custom-hover-effect" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jmauricioaferreira/"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconItemVariants}
            >
              <Image src={linkedin} alt={""} className="custom-hover-effect" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/jmauricioaf/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconItemVariants}
            >
              <Image
                src={instagram}
                alt={""}
                className="hover:filter hover:brightness-125 transition duration-300 ease-in-out"
              />
            </motion.a>
          </motion.div>
        </div>
        <div className="flex flex-col items-center w-full sm:w-fit sm:items-start sm:py-8 px-20 sm:px-64">
          <Title className={"flex"}>{t("title")}</Title>
          <ContactForm />
        </div>
      </div>

      <footer className="flex  justify-center  sm:justify-start items-center h-32">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Image src={copyright} alt={"copyright jmauricio"} />
            <Text className="text-custom-18 font-semibold">
              José Mauricio 2024
            </Text>
          </div>
          <Text className="text-custom-14 text-end">
            Design by Rita Barbalho
          </Text>
        </div>
      </footer>
    </section>
  );
};
