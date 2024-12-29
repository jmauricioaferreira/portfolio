"use client";
import Image from "next/image";
import github from "@public/github.svg";
import instagram from "@public/instagram.svg";
import linkedin from "@public/linkedin.svg";
import copyright from "@public/copyright.svg";
import { useRef } from "react";
import { SECTIONS } from "src/constants/sections";
import { Title } from "@components/shared/Title";
import { useTranslations } from "next-intl";
import { Text } from "@components/shared/Text";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ContactForm } from "./contact-form";

export const ContactSection = () => {
  const t = useTranslations("Contact");

  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.2) {
      controls.start("visible"); // Inicia a animação da imagem
    }

    if (value === 0) {
      controls.set({
        opacity: 0.7,
        y: "-300px",
        height: "1%",
      });
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

  return (
    <section
      className={`flex flex-col h-screen  sm:px-64 bg-gradient-start`}
      id={SECTIONS.CONTACT}
      ref={sectionRef}
    >
      <div className="flex justify-center w-full sm:justify-between flex-1">
        <div className=" flex-col items-center justify-center hidden sm:w-16 sm:flex h-full gap-6">
          <motion.div
            initial="hidden"
            animate={controls}
            className="flex w-px bg-primary-green "
            variants={imageVariants}
          ></motion.div>
          <div className="flex flex-col gap-6 w-full">
            <motion.a
              href="https://github.com/jmauricioaferreira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={github} alt={""} className="custom-hover-effect" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jmauricioaferreira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedin} alt={""} className="custom-hover-effect" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/jmauricioaf/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                alt={""}
                className="hover:filter hover:brightness-125 transition duration-300 ease-in-out"
              />
            </motion.a>
          </div>
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
