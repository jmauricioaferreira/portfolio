"use client";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

import { TextInput } from "@components/shared/TextInput";
import { Button } from "@components/shared/Button";

type FormProps = {
  name: string;
  email: string;
  message: string;
};
export const ContactForm = () => {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    const lorem = {
      publicKey: "siBGlctbh015Hwsjb",
    };

    await emailjs
      .send("service_q0dd82h", "template_8yutdmd", formData, lorem)
      .then(
        () => {
          setStatus("E-mail enviado com sucesso!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Erro ao enviar o e-mail.");
        },
      );
  };
  return (
    <form
      className={`flex flex-col gap-12 w-full sm:max-w-[53rem]`}
      onSubmit={handleSubmit}
    >
      <TextInput
        id="name"
        name="name"
        label="Your Name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t("placeholders.name")}
      />
      <TextInput
        id="email"
        name="email"
        label="Your email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t("placeholders.email")}
      />
      <TextInput
        id="name"
        name="message"
        type="textarea"
        label="Your Message"
        value={formData.message}
        onChange={handleChange}
        placeholder={t("placeholders.message")}
      />
      <Button type="submit" className="w-full" id="name" name="Enviar" />
    </form>
  );
};
