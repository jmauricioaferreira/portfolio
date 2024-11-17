import { SECTIONS } from "src/constants/sections";
import { useTranslations } from "next-intl";
import { Title } from "@components/shared/Title";
import Image from "next/image";
import myself from "@public/jmaf.png";
import { Text } from "@components/shared/Text";

export const AboutMeSection = () => {
  const t = useTranslations("AboutMe");
  return (
    <section
      className={`flex h-screen bg-gradient-start justify-center items-center`}
      id={SECTIONS.ABOUT_ME}
    >
      <div className="flex flex-col w-1/2 items-center">
        <div>
          <Title>{t("title")}</Title>
          <Text className="w-[60rem] text-custom-24">{t("description")}</Text>
        </div>
      </div>
      <Image src={myself} alt={""} width={900} />
    </section>
  );
};
