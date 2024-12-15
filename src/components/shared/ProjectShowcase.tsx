"use client";
import Image from "next/image";
import accessControl from "@public/access-control.png";
import { Text } from "./Text";
import { Highlighted } from "./HighLighted";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TextProps = {
  className?: string;
};

const ShowcaseHeader = () => {
  return (
    <div className="flex flex-col">
      <Text className="text-custom-18">
        <Highlighted>2023</Highlighted>
      </Text>
      <Text className="text-custom-24">
        <Highlighted>DEFENSE IA - ACCESS CONTROL</Highlighted>
      </Text>
    </div>
  );
};

const ShowcaseBody = () => {
  return (
    <div>
      <Text className="text-custom-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum placerat libero, ut commodo nisl viverra eget. Fusce iaculis
        elit sit amet est lobortis, pellentesque pharetra neque consequat. Nam
        tellus enim, faucibus vitae elementum at, tincidunt vitae elit. Cras
        convallis justo tortor, eget porta velit iaculis at. Cras sollicitudin
        semper.
      </Text>
    </div>
  );
};

const ShowcaseFooter = () => {
  const tags = [
    "css",
    "javascript",
    "nextjs",
    "react",
    "tailwindcss",
    "typescript",
  ];
  return (
    <div className="flex flex-wrap gap-8">
      {tags.map((tag) => (
        <div
          key={tag}
          className="flex px-6 py-2 rounded-full  min-w-40 items-center justify-center border border-border-green"
        >
          <Text className="flex text-custom-24">
            <Highlighted>{tag}</Highlighted>
          </Text>
        </div>
      ))}
    </div>
  );
};

export const ProjectShowcase = (props: TextProps) => {
  const { children, className } = props;
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Controla quando a animação começa e termina
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.4], ["-100%", "0px"]);
  const imageX = useTransform(scrollYProgress, [0.1, 0.4], ["150%", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  return (
    <motion.div className={`flex gap-10  px-64`} ref={targetRef}>
      <motion.div className="flex-1" style={{ x: textX, opacity }}>
        <Image src={accessControl} alt={""} />
      </motion.div>
      <motion.div
        className="flex flex-col w-[67rem] gap-8"
        style={{ x: imageX, opacity }}
      >
        <ShowcaseHeader />
        <ShowcaseBody />
        <ShowcaseFooter />
      </motion.div>
    </motion.div>
  );
};
