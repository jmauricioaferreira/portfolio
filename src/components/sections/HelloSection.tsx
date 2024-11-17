"use client";
import Image from "next/image";
import { Header } from "@components/shared/Header";
import { Text } from "@components/shared/Text";
import { useTranslations } from "next-intl";
import { SECTIONS } from "src/constants/sections";
import logo from "@public/opacity.svg";
import { motion } from "framer-motion";

export const HelloSection = () => {
  const t = useTranslations("Hello");
  return (
    <section id={SECTIONS.HELLO} className={`h-screen `}>
      <div className="flex flex-col h-full relative">
        <Header />
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
            // O texto começa fora da tela (acima)
            initial={{ y: "-500px", opacity: 0 }}
            // Animação de descida com bounce, terminando na posição final (y: 0)
            animate={{ y: 0, opacity: 1 }}
            // Configuração da transição para criar o efeito de bounce
            transition={{
              duration: 2000, // Duração total da animação
              ease: "easeInOut", // Suavização para a descida
              opacity: { duration: 1 }, // Animação de opacidade mais rápida
              type: "spring", // Efeito de bounce
              stiffness: 40, // Ajuste da rigidez para o efeito spring
            }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
