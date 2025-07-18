import classNames from "classnames";

type ButtonProps = {
  id: string;
  name?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  const {
    className,
    id,
    name,
    onClick,
    type = "button",
    disabled = false,
  } = props;

  const classes = classNames(
    className,
    "text-gradient-middle font-semibold h-20 text-custom-18 w-full sm:max-w-[25.4rem] flex justify-center items-center rounded-lg font-quicksand bg-gradient-to-r transition-all duration-300",
    {
      "hover:filter hover:brightness-110 cursor-pointer": !disabled,
      "opacity-50 cursor-not-allowed": disabled,
    },
  );

  return (
    <button
      type={type}
      id={id}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
