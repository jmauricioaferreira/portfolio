type MenuProps = {
  children: React.ReactNode;
};

export const Sections = (props: MenuProps) => {
  const { children } = props;

  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};
