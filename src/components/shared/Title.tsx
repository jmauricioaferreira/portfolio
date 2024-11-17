import classNames from "classnames";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const Title = (props: TextProps) => {
  const { children, className } = props;

  const classes = classNames(className);

  return (
    <h1
      className={`font-porsha text-custom-96 leading-[15rem] bg-gradient-to-r from-title-gradient-start to-title-gradient-end bg-clip-text text-transparent ${classes}`}
    >
      {children}
    </h1>
  );
};
