"use client";
import Image from "next/image";
import { Text } from "./Text";
import { Highlighted } from "./HighLighted";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Project } from "src/constants/projects";
import { useTranslations } from "next-intl";

interface ShowcaseHeaderProps {
  year: number;
  name: string;
}

const ShowcaseHeader = ({ year, name }: ShowcaseHeaderProps) => {
  return (
    <div className="flex flex-col">
      <Text className="text-sm sm:text-base lg:text-custom-18 lg:leading-tight">
        <Highlighted>{year}</Highlighted>
      </Text>
      <Text className="text-lg sm:text-xl md:text-2xl lg:text-custom-24 lg:leading-tight">
        <Highlighted>{name}</Highlighted>
      </Text>
    </div>
  );
};

interface ShowcaseBodyProps {
  description: string;
}

const ShowcaseBody = ({ description }: ShowcaseBodyProps) => {
  return (
    <div>
      <Text className="text-sm sm:text-base md:text-lg lg:text-custom-24 lg:leading-relaxed">
        {description}
      </Text>
    </div>
  );
};

import { Technology } from "src/constants/technologies";

interface ShowcaseFooterProps {
  technologies: Technology[];
}

const ShowcaseFooter = ({ technologies }: ShowcaseFooterProps) => {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-8">
      {technologies.map((tag) => (
        <div
          key={tag}
          className="flex px-3 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-2 rounded-full min-w-24 sm:min-w-32 lg:min-w-40 items-center justify-center border border-border-green"
        >
          <Text className="flex text-xs sm:text-sm lg:text-custom-24 lg:leading-tight">
            <Highlighted>{tag}</Highlighted>
          </Text>
        </div>
      ))}
    </div>
  );
};

interface ProjectShowcaseProps {
  project: Project;
}

export const ProjectShowcase = ({ project }: ProjectShowcaseProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Projects");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Controla quando a animação começa e termina
  });

  // Animações mais suaves para mobile
  const textX = useTransform(scrollYProgress, [0.1, 0.4], ["-50%", "0px"]);
  const imageX = useTransform(scrollYProgress, [0.1, 0.4], ["50%", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const projectName = t(`${project.translationKey}.name`);
  const projectDescription = t(`${project.translationKey}.description`);

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64"
      ref={targetRef}
    >
      <motion.div
        className="w-full lg:flex-1 rounded-xl overflow-hidden order-2 lg:order-1"
        style={{
          x: isMobile ? 0 : textX,
          opacity,
        }}
      >
        <Image
          src={project.imageUrl}
          alt={project.alt || projectName}
          width={800}
          height={600}
          className="w-full h-auto opacity-90"
        />
      </motion.div>
      <motion.div
        className="flex flex-col w-full lg:w-[67rem] gap-4 lg:gap-8 order-1 lg:order-2"
        style={{
          x: isMobile ? 0 : imageX,
          opacity,
        }}
      >
        <ShowcaseHeader year={project.year} name={projectName} />
        <ShowcaseBody description={projectDescription} />
        <ShowcaseFooter technologies={project.technologiesUsed} />
      </motion.div>
    </motion.div>
  );
};
