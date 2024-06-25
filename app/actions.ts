"use server";

import { ContactRequest } from "@/components/Contact";
import { ContactRequestTemplate } from "@/components/email/ContactRequestTemplate";
import { Resend } from "resend";
const translations = {
  "New Contact Request": "Neue Kontaktanfrage",
  "Lasies booking request from": "Lasies Buchungsanfrage von",
};
const resend = new Resend(process.env["RESEND_API_KEY"]);
export async function SendContactRequest(formData: ContactRequest) {
  const { data, error } = await resend.emails.send({
    from: `Lasies <info@lasies.com>`,
    subject: translations["Lasies booking request from"] + " " + formData.name,
    to: ["Lasies <contact@nour-sofanati.com>"],
    headers: {
      "Reply-To": `${formData.name} <${formData.email}>`,
    },
    react: ContactRequestTemplate(formData),
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  });

  if (error) {
    return { error };
  }
  return { data };
}
