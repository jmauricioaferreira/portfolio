import Link from "next/link";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { SECTIONS } from "src/constants/sections";
import { Text } from "./Text";

type MenuProps = {
  fontSize?: "96" | "32" | "24" | "18" | "14";
  className?: string;
};

export const Menu = (props: MenuProps) => {
  const { className, fontSize = "24" } = props;

  const t = useTranslations("Menu");

  const fontClass = `text-custom-${fontSize}`;

  const classes = classNames(className, fontClass);

  return (
    <nav>
      <ul>
        {Object.values(SECTIONS).map((section) => (
          <li key={section}>
            <Link href={`#${section}`} scroll={true}>
              <div className="mb-5 relative group inline-block cursor-pointer">
                <Text
                  className={`${classes} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-title-gradient-start to-title-gradient-end
`}
                >
                  {t(section)}
                </Text>
                <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-title-gradient-start transition-all duration-500 group-hover:w-full"></div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="h-px bg-primary-green w-full opacity-30 mb-8"></div>

      <div className="">
        <a href="/resume.pdf" className="mt-8" download>
          <div className="flex gap-2 items-center mb-5 relative group cursor-pointer">
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H12M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                stroke="#55a5b6"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 21L17.5 15M17.5 15L20 17.5M17.5 15L15 17.5"
                stroke="#55a5b6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text
              className={` text-custom-18 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-title-gradient-start to-title-gradient-end`}
            >
              RESUME
            </Text>
          </div>
        </a>
      </div>
    </nav>
  );
};
