import { useTranslations } from "next-intl";
import { SECTIONS } from "src/constants/sections";
import { Title } from "@components/shared/Title";
import { ProjectShowcase } from "@components/shared/ProjectShowcase";

export const MyWorkSection = () => {
  const t = useTranslations("MyWork");
  return (
    <section id={SECTIONS.MY_WORK} className={`h-min-screen py-64`}>
      <div className="flex justify-end px-64 py-20">
        <Title className={"flex"}>{t("title")}</Title>
      </div>
      <div className="flex flex-col gap-96">
        <ProjectShowcase />
        <ProjectShowcase />
        <ProjectShowcase />
      </div>
    </section>
  );
};
