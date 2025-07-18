import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@components/shared/Button";
import { TextInput } from "@components/shared/TextInput";

type FormProps = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export const ContactForm = () => {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpa o erro ao digitar
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
          setErrors({});
        },
        (error) => {
          console.error(error);
          setStatus("Erro ao enviar o e-mail.");
        },
      );
  };

  return (
    <form
      className={`flex flex-col gap-10 w-full sm:max-w-[53rem]`}
      onSubmit={handleSubmit}
    >
      <TextInput
        id="name"
        name="name"
        label="Your Name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t("placeholders.name")}
        error={errors.name}
      />
      <TextInput
        id="email"
        name="email"
        label="Your email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t("placeholders.email")}
        error={errors.email}
      />
      <TextInput
        id="message"
        name="message"
        type="textarea"
        label="Your Message"
        value={formData.message}
        onChange={handleChange}
        placeholder={t("placeholders.message")}
        error={errors.message}
      />
      <Button
        type="submit"
        id="send-btn"
        name={status === "Enviando..." ? "Enviando..." : "Enviar"}
        disabled={!!(errors.name || errors.email || errors.message)}
      />
      {status && <p className="text-center text-sm">{status}</p>}
    </form>
  );
};
