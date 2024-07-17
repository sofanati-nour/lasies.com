"use server";
import fs from "fs";
import { ContactRequestTemplate } from "@/components/email/ContactRequestTemplate";
import { ContactRequestType } from "@/libs/types/contactRequest";
import { Resend } from "resend";
import { join } from "path";
const translations = {
  "New Contact Request": "Neue Kontaktanfrage",
  "Lasies booking request from": "Lasies Buchungsanfrage von",
};
const resend = new Resend(process.env["RESEND_API_KEY"]);

export async function SendContactRequest(formData: ContactRequestType) {
  // Wait for 2 seconds
  const { data, error } = await resend.emails.send({
    from: `Lasies <info@lasies.com>`,
    subject: translations["Lasies booking request from"] + " " + formData.name,
    to: [
      process.env["RESEND_TRANSACTION_EMAIL"] ??
        "Lasies <sofanatinour@gmail.com>",
    ],
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

export async function GetImagesFromDirectory() {
  const images = fs.readdirSync(join(process.cwd(), "public/images/galarie"));
  const imagesPath = images.map((image) => {
    return `/images/galarie/${image}`;
  });

  return imagesPath.filter((i) => i.includes(".jpg") || i.includes(".png"));
}
