import { useField } from "formik";

type InputProps = JSX.IntrinsicElements["input"] & {
  label: string;
  name: string;
  type: string;
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
    <>
      <label
        htmlFor={props.id || props.name}
        className="uppercase text-sm py-2"
      >
        {label}
      </label>
      <input
        className={`border rounded-lg p-3 flex border-[#005073] bg-[#005073]/10 outline-none ${
          meta.touched && meta.error ? "border-red-600" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-600 uppercase text-sm mt-2">
          {meta.error}
        </div>
      ) : null}
    </>
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
        {label}
      </label>
      <textarea
        className={`border rounded-lg p-3 border-[#005073] bg-[#005073]/10 outline-none ${
          meta.touched && meta.error ? "border-red-600" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-600 uppercase text-sm mt-2">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};
