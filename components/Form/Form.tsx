import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormInput, TextArea } from "./FormInput";

interface Values {
  fullName: string;
  email: string;
  message: string;
}

const FormikForm = () => (
  <Formik
    initialValues={{
      fullName: "",
      email: "",
      message: "",
    }}
    validationSchema={Yup.object({
      fullName: Yup.string()
        .max(40, "Name must be 40 characters or less")
        .required("Please provide your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please provide an email address"),
      message: Yup.string()
        .max(600, "Message must be 600 characters or less")
        .required("Please provide a message"),
    })}
    onSubmit={(
      values: Values,
      { setSubmitting, resetForm }: FormikHelpers<Values>
    ) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm({});
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        {isSubmitting && <div>Loading...</div>}
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <FormInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Jane Doe"
            />
          </div>
          <div className="flex flex-col">
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane.doe@gmail.com"
            />
          </div>
        </div>
        <TextArea
          label="Message"
          name="message"
          rows={10}
          placeholder="Jane Doe"
        />
        <button className="w-full p-4 mt-4">Submit</button>
      </Form>
    )}
  </Formik>
);

export default FormikForm;
