"use server";
import { Resend } from "resend";

export default async function send(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "contact@enzoborrelli.com.ar",
    to: "enzoborrelli_official@outlook.com",
    subject: `from ${name} | email: ${email}`,
    html: message,
  });

  console.log(data);
  
}
