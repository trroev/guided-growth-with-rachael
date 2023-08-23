import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  FormCheckbox,
  FormDropdrown,
  FormInput,
  TextArea,
} from "./FormInput";
import { useState } from "react";

interface Values {
  fullName: string;
  email: string;
  phoneNumber: string;
  age: number;
  state: string;
  reason: string;
  message: string;
  term1: boolean;
  term2: boolean;
  term3: boolean;
  term4: boolean;
  agree: boolean;
}

const FormikForm = () => {
  const [buttonText, setButtonText] = useState<string>("Submit Form");
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
        term1: false,
        term2: false,
        term3: false,
        term4: false,
        agree: false,
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
        state: Yup.string().required("Please select a state"),
        reason: Yup.string().max(
          150,
          "Message must be 150 characters or less"
        ),
        message: Yup.string().max(
          150,
          "Message must be 150 characters or less"
        ),
        term1: Yup.boolean().oneOf([true], "Please confirm"),
        term2: Yup.boolean().oneOf([true], "Please confirm"),
        term3: Yup.boolean().oneOf([true], "Please confirm"),
        term4: Yup.boolean().oneOf([true], "Please confirm"),
        agree: Yup.boolean().oneOf(
          [true],
          "Please agree to terms before submitting"
        ),
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
            state: values.state,
            reason: values.reason,
            message: values.message,
            terms: {
              term1: values.term1,
              term2: values.term2,
              term3: values.term3,
              term4: values.term4,
              agree: values.agree,
            },
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
              required
            />
          </div>
          <div className="flex flex-col">
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane.doe@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col">
            <FormInput
              label="Phone Number"
              name="phoneNumber"
              type="text"
              placeholder="1-555-555-5555"
              required
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
              required
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
          <FormCheckbox
            label="I understand that Rachael Mathiak Therapy, LLC is considered an out of network provider, which means I am responsible for the full fee at the time of the appointment."
            name="term1"
          />
          <FormCheckbox
            label="I understand that Rachael Mathiak Therapy, LLC works with Mentaya to submit claims on my behalf for out-of-network reimbursement from my insurance, if applicable."
            name="term2"
          />
          <FormCheckbox
            label="I am aware that the fees for service are $175 for an individual session, and $210 for couples or family therapy."
            name="term3"
          />
          <FormCheckbox
            label="I understand that if I schedule an appointment, and later need to reschedule or cancel, I must do so with at least 48 hours of notice, or I will be charged the full appointment fee due to late cancellation or not showing up."
            name="term4"
          />
          <div>
            <p className="text-sm font-medium uppercase underline pl-4">
              Terms of Use:
            </p>
            <p className="text-sm px-4">
              By submitting this form via this website, you
              acknowledge and accept the risk of sharing your
              health-related information via this unencrypted and
              electronic messaging, and wish to continue despite those
              risks. By checking &quot;Agree&quot;, you agree to hold
              Rachael Mathiak Therapy, LLC and the website developer
              harmless for unauthorized use, disclosure or access of
              your protected health information sent via this
              electronic means.
            </p>
          </div>
          <FormCheckbox label="Agree" name="agree" />
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
