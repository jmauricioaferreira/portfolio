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
              <div className="mb-3 relative group inline-block cursor-pointer">
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
    </nav>
  );
};
