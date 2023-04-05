import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
      message,
    }: {
      fullName: string;
      email: string;
      message: string;
    } = req.body;

    const msg = `
    Name: ${fullName}\r\n
    Email: ${email}\r\n
    Message: ${message}
    `;

    const data = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
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
