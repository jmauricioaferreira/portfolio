import classNames from "classnames";

type ButtonProps = {
  id: string;
  name?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export const Button = (props: ButtonProps) => {
  const { className, id, name, onClick, type = "button" } = props;

  const classes = classNames(className);

  return (
    <div
      className={`flex hover:filter hover:brightness-110 justify-center rounded-lg items-center font-quicksand text-custom-18 bg-gradient-to-r h-[5.8rem] w-full  sm:max-w-[25.4rem] ${classes}`}
    >
      <button
        type={type}
        id={id}
        className={`text-gradient-middle font-semibold w-full h-full`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};
