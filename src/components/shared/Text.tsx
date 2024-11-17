type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const Text = (props: TextProps) => {
  const { children, className } = props;

  return (
    <p className={`text-primary-green font-quicksand ${className}`}>
      {children}
    </p>
  );
};
