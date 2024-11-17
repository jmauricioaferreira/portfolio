import { SECTIONS } from "src/constants/sections";
import { Title } from "@components/shared/Title";
import { useTranslations } from "next-intl";
import Image from "next/image";
import github from "@public/github.svg";
import discord from "@public/discord.svg";
import instagram from "@public/instagram.svg";
import linkedin from "@public/linkedin.svg";
import { NameInput } from "./name-input";
import { SendMessageButton } from "./send-message-button";
import { MessageTextArea } from "./message-textarea";
import { EmailInput } from "./email-input";

export const ContactSection = () => {
  const t = useTranslations("Contact");
  return (
    <section
      className={`flex justify-between h-screen sm:px-64 bg-gradient-start`}
      id={SECTIONS.CONTACT}
    >
      <div className=" flex-col items-center justify-center hidden sm:w-16 sm:flex h-full gap-6">
        <div className="flex h-2/4 w-px bg-primary-green "></div>
        <div className="flex flex-col gap-6 w-full">
          <a
            href="https://github.com/jmauricioaferreira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt={""} className="custom-hover-effect" />
          </a>
          <a
            href="https://www.linkedin.com/in/jmauricioaferreira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} alt={""} className="custom-hover-effect" />
          </a>
          <a
            href="https://www.instagram.com/jmauricioaf/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instagram}
              alt={""}
              className="hover:filter hover:brightness-125 transition duration-300 ease-in-out"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start sm:py-20 sm:px-64">
        <Title className={"flex"}>{t("title")}</Title>
        <div
          className={`flex flex-col gap-12 w-full max-w-[27rem] sm:max-w-[53rem]`}
        >
          <NameInput />
          <EmailInput />
          <MessageTextArea />
          <SendMessageButton />
        </div>
      </div>
    </section>
  );
};
