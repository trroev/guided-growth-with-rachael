import { useField } from "formik";

type InputProps = JSX.IntrinsicElements["input"] & {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

type DropdownProps = JSX.IntrinsicElements["select"] & {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
};

type TextAreaProps = JSX.IntrinsicElements["textarea"] & {
  label: string;
  name: string;
  rows: number;
  placeholder: string;
};

export const FormInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col py-2">
      <label
        htmlFor={props.id || props.name}
        className="uppercase text-sm py-2"
      >
        {label} <span className="text-red">*</span>
      </label>
      <input
        className={`border rounded-lg border-green p-3 flex bg-green/10 outline-none ${
          meta.touched && meta.error ? "border-red" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red uppercase text-sm mt-2">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const FormDropdrown = ({
  label,
  options,
  ...props
}: DropdownProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col py-2">
      <label
        htmlFor={props.id || props.name}
        className="uppercase text-sm py-2"
      >
        {label} <span className="text-red">*</span>
      </label>
      <select
        className={`border rounded-lg p-3 border-green bg-green/10 outline-none ${
          meta.touched && meta.error ? "border-red" : ""
        }`}
        {...field}
        {...props}
      >
        <option value="" disabled selected>
          {props.placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="text-red uppercase text-sm mt-2">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const TextArea = ({ label, ...props }: TextAreaProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col py-2">
      <label
        htmlFor={props.id || props.name}
        className="uppercase text-sm py-2"
      >
        {label} <span className="text-red">*</span>
      </label>
      <textarea
        className={`border rounded-lg p-3 border-green bg-green/10 outline-none ${
          meta.touched && meta.error ? "border-red" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red uppercase text-sm mt-2">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};
