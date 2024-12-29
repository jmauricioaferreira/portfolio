"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Text } from "@components/shared/Text";
import { Highlighted } from "./HighLighted";

export const Header = () => {
  const router = usePathname();

  if (typeof window === "undefined") {
    return null; // Retorna nada no lado do servidor
  }

  return (
    <div className="flex items-center z-10 fixed w-full h-32 px-32">
      <div className="flex w-fit gap-5 justify-etween items-center">
        <Link
          href={`/pt${window.location.hash}`}
          className="hover:brightness-90"
          scroll={false}
          replace
        >
          <Text className="text-custom-18">
            {router.includes("pt") ? <Highlighted>PT</Highlighted> : "PT"}
          </Text>
        </Link>
        <Link
          href={`/en${window.location.hash}`}
          className="hover:brightness-90"
          scroll={false}
          replace
        >
          <Text className="text-custom-18">
            {router.includes("en") ? <Highlighted>EN</Highlighted> : "EN"}
          </Text>{" "}
        </Link>
      </div>
    </div>
  );
};
