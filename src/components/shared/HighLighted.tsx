import classNames from "classnames";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const Highlighted = (props: TextProps) => {
  const { children, className } = props;

  const classes = classNames(className);
  return (
    <span
      className={`bg-gradient-to-r from-title-gradient-start to-title-gradient-end bg-clip-text text-transparent  ${classes}`}
    >
      {children}
    </span>
  );
};
