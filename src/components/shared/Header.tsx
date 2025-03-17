"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Text } from "@components/shared/Text";
import { Highlighted } from "./HighLighted";

export const Header = () => {
  const router = usePathname();
  const [hash, setHash] = useState(""); // Fallback inicial vazio

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash || "");
    }
  }, []);
  return (
    <div className="flex items-center z-10 fixed w-full h-32 px-32">
      <div className="flex w-fit gap-5 justify-etween items-center">
        {router && (
          <>
            {" "}
            <Link
              href={`/pt${hash}`}
              className="hover:brightness-90"
              scroll={false}
              replace
            >
              <Text className="text-custom-18">
                {router.includes("pt") ? <Highlighted>PT</Highlighted> : "PT"}
              </Text>
            </Link>
            <Link
              href={`/en${hash}`}
              className="hover:brightness-90"
              scroll={false}
              replace
            >
              <Text className="text-custom-18">
                {router.includes("en") ? <Highlighted>EN</Highlighted> : "EN"}
              </Text>{" "}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
