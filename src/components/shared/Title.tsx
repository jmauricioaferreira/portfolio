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
      className={`font-porsha text-6xl sm:text-6xl md:text-7xl lg:text-custom-96 xl:text-custom-96 leading-[4rem] sm:leading-[6rem] md:leading-[8rem] lg:leading-[10rem] xl:leading-[15rem] bg-gradient-to-r from-title-gradient-start to-title-gradient-end bg-clip-text text-transparent ${classes}`}
    >
      {children}
    </h1>
  );
};
