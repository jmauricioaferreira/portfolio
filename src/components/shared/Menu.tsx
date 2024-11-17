import classNames from "classnames";

type MenuProps = {
  children: React.ReactNode;
  fontSize?: "96" | "32" | "24" | "18" | "14";
  className?: string;
};

export const Menu = (props: MenuProps) => {
  const { children, className, fontSize = "14" } = props;

  const fontClass = `font-custom-${fontSize}`;

  const classes = classNames(className, fontClass);

  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};
