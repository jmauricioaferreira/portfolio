"use client";
import { useState } from "react";

import { TextInput } from "@components/shared/TextInput";

export const EmailInput = () => {
  const [email, setEmail] = useState("John Doe");

  return (
    <TextInput
      id="email"
      label="Your email"
      value={email}
      setValue={setEmail}
    />
  );
};
