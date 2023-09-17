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

type CheckboxProps = {
  label: string;
  name: string;
};

export const FormInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  const isRequired = props.required || (meta.touched && meta.error);

  return (
    <div className="flex flex-col py-2">
      <label
        htmlFor={props.id || props.name}
        className="uppercase text-sm py-2"
      >
        {label} {isRequired && <span className="text-red">*</span>}
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
  const isRequired = props.required || (meta.touched && meta.error);

  return (
    <div className="flex flex-col py-2">
      <label
        htmlFor={props.id || props.name}
        className="uppercase text-sm py-2"
      >
        {label} {isRequired && <span className="text-red">*</span>}
      </label>
      <select
        className={`border rounded-lg p-3 border-green bg-green/10 outline-none ${
          meta.touched && meta.error ? "border-red" : ""
        }`}
        {...field}
        {...props}
      >
        <option value="" disabled>
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
  const isRequired = props.required || (meta.touched && meta.error);

  return (
    <div className="flex flex-col py-2">
      <label
        htmlFor={props.id || props.name}
        className="uppercase text-sm py-2"
      >
        {label} {isRequired && <span className="text-red">*</span>}
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

export const FormCheckbox = ({ label, ...props }: CheckboxProps) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <div className="flex w-full justify-center items-center p-4">
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            className="mr-2 accent-green shrink-0"
            {...field}
            {...props}
            id={props.name}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor={props.name}
              className="text-sm leading-none"
            >
              Accept
            </label>
            <p className="text-sm font-light">{label}</p>
          </div>
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red uppercase text-sm pl-3 mb-3">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};
