import classNames from "classnames";

type TextInputProps = {
  className?: string;
  id: string;
  label: string;
  name?: string;
  placeholder?: string;
  onClick?: () => void;
};

export const Button = (props: TextInputProps) => {
  const { className, id, name, onClick, placeholder } = props;

  const classes = classNames(className);

  return (
    <div
      className={`flex flex-col hover:filter  hover:brightness-110 justify-center rounded-lg items-center font-quicksand text-custom-18 bg-gradient-to-r h-[5.8rem]  w-full max-w-[27rem] sm:max-w-[25.4rem] `}
    >
      <button
        type="button"
        id={id}
        className={`text-gradient-middle font-semibold w-full h-full`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};
