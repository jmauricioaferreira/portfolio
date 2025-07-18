import classNames from "classnames";

type TextInputProps = {
  className?: string;
  id: string;
  label: string;
  value?: string;
  name?: string;
  placeholder?: string;
  error?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: "text" | "textarea";
};

export const TextInput = (props: TextInputProps) => {
  const { className, id, label, value, placeholder, name, error, onChange } =
    props;

  const classes = classNames(
    className,
    "text-custom-14 sm:text-custom-24 bg-transparent text-primary-green outline-none border-b-2",
    {
      "border-border-green": !error,
      "border-red-500": !!error,
    },
  );
  const labelClasses = classNames(
    "text-custom-12 sm:text-custom-18 transition-colors duration-300 ease-in-out",
    {
      "text-border-green": !error,
      "text-red-500": !!error,
    },
  );
  return (
    <div className={`flex flex-col font-quicksand`}>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {props.type === "textarea" ? (
        <textarea
          id={id}
          className={classes}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          rows={5}
          name={name}
        />
      ) : (
        <input
          id={id}
          className={classes}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
        />
      )}
      {error ? (
        <span className="text-red-500 text-custom-12">{error}</span>
      ) : (
        <span className="invisible text-custom-12">placeholder</span>
      )}
    </div>
  );
};
