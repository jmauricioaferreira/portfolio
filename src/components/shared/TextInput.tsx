import classNames from "classnames";

type TextInputProps = {
  className?: string;
  id: string;
  label: string;
  value?: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: "text" | "textarea";
};

export const TextInput = (props: TextInputProps) => {
  const { className, id, label, value, setValue, placeholder } = props;

  const classes = classNames(
    className,
    "text-custom-24 border-b-2 border-border-green bg-transparent text-primary-green outline-none",
  );

  return (
    <div className={`flex flex-col font-quicksand`}>
      <label htmlFor={id} className="text-custom-18 text-border-green">
        {label}
      </label>

      {props.type === "textarea" ? (
        <textarea
          id={id}
          className={classes}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          rows={5}
        />
      ) : (
        <input
          id={id}
          className={classes}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};
