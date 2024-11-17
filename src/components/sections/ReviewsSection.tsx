import { useTranslations } from "next-intl";
import { SECTIONS } from "src/constants/sections";
import { Title } from "@components/shared/Title";
import quote from "@public/quotes.svg";
import opacity from "@public/opacity.svg";
import { Text } from "@components/shared/Text";

import Image from "next/image";
export const ReviewsSection = () => {
  const t = useTranslations("Reviews");
  return (
    <section
      className={`flex gap-40 relative justify-center items-center h-screen `}
      id={SECTIONS.REVIEWS}
    >
      <div className="flex justify-end items-center w-2/5 relative">
        <Image src={quote} alt={""} className="absolute right-1/4" />
        <Title className="h-min">{t("title")}</Title>
      </div>
      <Image src={opacity} alt={""} className="absolute left-2" height={700} />
      <div className="flex justify-start w-3/5 items-center">
        <Text className="text-custom-24 w-[75.4rem]">
          {t("description")} Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec condimentum placerat libero, ut commodo nisl viverra
          eget.delivering clear and easy-to-understand code.
        </Text>
      </div>
    </section>
  );
};
