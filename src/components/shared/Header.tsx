"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Text } from "@components/shared/Text";
import { Highlighted } from "./HighLighted";
import { Menu } from "@components/shared/Menu";

export const Header = () => {
  const router = usePathname();
  const [hash, setHash] = useState("");
  const [currentSection, setCurrentSection] = useState("hello");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash || "");
      const initial = (window.location.hash || "#hello").replace("#", "");
      setCurrentSection(initial);

      const onSectionChange = (e: Event) => {
        const detail = (e as CustomEvent<string>).detail;
        if (typeof detail === "string" && detail) {
          setCurrentSection(detail);
        }
      };
      window.addEventListener(
        "sectionchange",
        onSectionChange as EventListener,
      );
      return () => {
        window.removeEventListener(
          "sectionchange",
          onSectionChange as EventListener,
        );
      };
    }
  }, []);

  useEffect(() => {
    if (currentSection === "hello") {
      setMenuOpen(false);
    }
  }, [currentSection]);
  return (
    <div className="flex items-center justify-between z-10 fixed w-full h-32 px-32">
      <div className="flex w-fit gap-5 justify-between items-center">
        {router && (
          <>
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
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            aria-label="Open menu"
            className="w-12 h-12 rounded-full bg-transparent from-title-gradient-start to-title-gradient-end flex items-center justify-center shadow-md hover:brightness-110 transition"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className="relative w-12 h-6">
              <span
                className={`absolute left-1/2 top-1/2 block w-12 h-0.5 bg-primary-green transition-transform duration-300 ${
                  menuOpen
                    ? "rotate-45 -translate-x-1/2 -translate-y-1/2"
                    : "-translate-x-1/2 -translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute left-1/2 top-1/2 block w-12 h-0.5 bg-primary-green transition-transform duration-300 ${
                  menuOpen
                    ? "-rotate-45 -translate-x-1/2 -translate-y-1/2"
                    : "-translate-x-1/2 translate-y-2"
                }`}
              ></span>
            </div>
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-14 w-64 sm:w-80 bg-gradient-start/95 backdrop-blur-md shadow-xl rounded-lg p-6 z-50">
              <Menu fontSize="24" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
