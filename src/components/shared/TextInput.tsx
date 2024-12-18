import classNames from "classnames";

type TextInputProps = {
  className?: string;
  id: string;
  label: string;
  value?: string;
  name?: string;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: "text" | "textarea";
};

export const TextInput = (props: TextInputProps) => {
  const { className, id, label, value, placeholder, name, onChange } = props;

  const classes = classNames(
    className,
    "text-custom-14 sm:text-custom-24 border-b-2 border-border-green bg-transparent text-primary-green outline-none",
  );

  return (
    <div className={`flex flex-col font-quicksand`}>
      <label
        htmlFor={id}
        className="text-custom-12 sm:text-custom-18 text-border-green"
      >
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
    </div>
  );
};
