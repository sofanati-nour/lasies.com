"use server";

import { ContactRequest } from "@/components/Contact";
import { ContactRequestTemplate } from "@/components/email/ContactRequestTemplate";
import { Resend } from "resend";
const translations = {
  "New Contact Request": "Neue Kontaktanfrage",
  "Lasies booking request from": "Lasies Buchungsanfrage von",
};
const resend = new Resend(process.env["RESEND_API_KEY"]);
export async function SendContactRequest(data: ContactRequest) {
  await resend.emails.send({
    from: `Lasies <info@lasies.com>`,
    subject: translations["Lasies booking request from"] + " " + data.name,
    to: ["Lasies <info@lasies.com>"],
    headers: {
      "Reply-To": `${data.name} <${data.email}>`,
    },
    react: ContactRequestTemplate(data),
    text: ContactRequestTemplate(data)!.toString(),
  });
}
