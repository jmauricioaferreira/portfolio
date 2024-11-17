"use client";
import { useState } from "react";

import { TextInput } from "@components/shared/TextInput";

export const MessageTextArea = () => {
  const [message, setMessage] = useState("John Doe");

  return (
    <TextInput
      id="name"
      type="textarea"
      label="Your Message"
      value={message}
      setValue={setMessage}
    />
  );
};
