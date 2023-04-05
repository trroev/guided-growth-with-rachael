import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormInput, TextArea } from "./FormInput";
import { useState } from "react";

interface Values {
  fullName: string;
  email: string;
  message: string;
}

const FormikForm = () => {
  const [buttonText, setButtonText] =
    useState<string>("Send Message");
  const [success, setSuccess] = useState<boolean>(false);
  const [messageState, setMessageState] = useState<string>("");

  return (
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
      onSubmit={async (
        values: Values,
        { setSubmitting, resetForm }: FormikHelpers<Values>
      ) => {
        setButtonText("Sending...");
        const res = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: values.fullName,
            email: values.email,
            message: values.message,
          }),
        });
        const data = await res.json();
        if (res.status === 200) {
          resetForm({});
          setSuccess(true);
          setButtonText(buttonText);
          setMessageState(data.message);
          setTimeout(() => {
            setMessageState("");
          }, 5000);
        } else {
          setButtonText(buttonText);
          setMessageState(data.message);
          setTimeout(() => {
            setMessageState("");
          }, 5000);
        }
        setSubmitting(false);
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
            placeholder="Your message here..."
          />
          <button className="w-full p-4 mt-4">{buttonText}</button>
          <div>
            <p className="text-success uppercase text-sm mt-4">
              {success !== false ? (
                messageState
              ) : (
                <span className="text-red uppercase text-sm mt-4">
                  {messageState}
                </span>
              )}
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
