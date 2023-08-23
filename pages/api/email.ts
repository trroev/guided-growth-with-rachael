import type { NextApiRequest, NextApiResponse } from "next";
import sgMail, { MailDataRequired } from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      fullName,
      email,
      phoneNumber,
      age,
      state,
      reason,
      message,
      terms: { term1, term2, term3, term4, agree },
    }: {
      fullName: string;
      email: string;
      phoneNumber: string;
      age: number;
      state: string;
      reason: string;
      message: string;
      terms: {
        term1: boolean;
        term2: boolean;
        term3: boolean;
        term4: boolean;
        agree: boolean;
      };
    } = req.body;

    const msg = `
    Name: ${fullName}\r\n
    Email: ${email}\r\n
    Phone Number: ${phoneNumber}\r\n
    Age: ${age}\r\n
    State: ${state}\r\n
    Reason: ${reason}\r\n
    Message: ${message}\r\n
    Term 1: ${term1}\r\n
    Term 2: ${term2}\r\n
    Term 3: ${term3}\r\n
    Term 4: ${term4}\r\n
    Agree: ${agree}
    `;

    const data: MailDataRequired = {
      to: process.env.TO_EMAIL as string,
      from: process.env.FROM_EMAIL as string,
      subject: `${fullName.toUpperCase()} sent you a message via Guided Growth with Rachael`,
      text: `Email => ${email}`,
      html: msg.replace(/\r\n/g, "<br>"),
    };

    try {
      await sgMail.send(data);
      res
        .status(200)
        .json({ message: "Your message was sent successfully" });
    } catch (err) {
      res.status(500).json({
        message: "There was an error sending your message",
      });
    }
  }
}
