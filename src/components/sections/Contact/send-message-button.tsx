"use client";
import { useState } from "react";

import { TextInput } from "@components/shared/TextInput";
import { Button } from "@components/shared/Button";

export const SendMessageButton = () => {
  const [name, setName] = useState("John Doe");

  return (
    <Button id="name" label="Your Name" name="Enviar" onClick={() => {}} />
  );
};
