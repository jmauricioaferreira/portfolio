"use client";
import { useState } from "react";

import { TextInput } from "@components/shared/TextInput";

export const NameInput = () => {
  const [name, setName] = useState("John Doe");

  return (
    <TextInput id="name" label="Your Name" value={name} setValue={setName} />
  );
};
