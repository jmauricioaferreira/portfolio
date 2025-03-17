type MenuProps = {
  children: React.ReactNode;
  fontSize?: "96" | "32" | "24" | "18" | "14";
  className?: string;
};

export const Sections = (props: MenuProps) => {
  const { children } = props;

  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};
