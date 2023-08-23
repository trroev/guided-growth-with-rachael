import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormDropdrown, FormInput, TextArea } from "./FormInput";
import { useState } from "react";

interface Values {
  fullName: string;
  email: string;
  phoneNumber: string;
  age: number;
  state: string;
  reason: string;
  message: string;
}

const FormikForm = () => {
  const [buttonText, setButtonText] =
    useState<string>("Send Message");
  const [success, setSuccess] = useState<boolean>(false);
  const [messageState, setMessageState] = useState<string>("");

  const phoneRegEx =
    /^(?:\+?1[-.\s]?)?(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\(\d{3}\)[-.\s]?\d{3}[-.\s]?\d{4}|\d{3}[-.\s]\d{4})$/;

  const stateOptions = ["California", "Massachusetts", "Michigan"];

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phoneNumber: "",
        age: 0,
        state: "",
        reason: "",
        message: "",
      }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .max(40, "Name must be 40 characters or less")
          .required("Please provide your name"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Please provide an email address"),
        phoneNumber: Yup.string()
          .matches(phoneRegEx, "Please enter a valid phone number")
          .required("A phone number is required"),
        reason: Yup.string()
          .max(150, "Message must be 150 characters or less")
          .required("Please provide a message"),
        message: Yup.string()
          .max(150, "Message must be 150 characters or less")
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
            phoneNumber: values.phoneNumber,
            age: values.age,
            reason: values.reason,
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
          {/* <div className="grid md:grid-cols-2 gap-4 w-full py-2"> */}
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
          <div className="flex flex-col">
            <FormInput
              label="Phone Number"
              name="phoneNumber"
              type="text"
              placeholder="1-555-555-5555"
            />
          </div>
          <div className="flex flex-col">
            <FormInput
              label="Age"
              name="age"
              type="number"
              placeholder="30"
            />
            <FormDropdrown
              label="State"
              name="state"
              options={stateOptions}
              placeholder="Please select a state"
            />
          </div>
          {/* </div> */}
          <TextArea
            label="Reason for Seeking Services"
            name="reason"
            rows={3}
            placeholder="Your message here..."
          />
          <TextArea
            label="Anything Else You Would Like Me to Know"
            name="message"
            rows={3}
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
