"use server";
import { headers } from "next/headers";
import { ContactRequestTemplate } from "@/components/email/ContactRequestTemplate";
import { ContactRequestSchema } from "@/libs/types/contactRequest";
import { Resend } from "resend";
const translations = {
  "New Contact Request": "Neue Kontaktanfrage",
  "Lasies booking request from": "Lasies Buchungsanfrage von",
};
const resend = new Resend(process.env["RESEND_API_KEY"]);

// Basic per-IP rate limit. It lives in memory, so it is per server instance:
// enough to stop casual abuse, not a determined attacker.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const requestLog = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    requestLog.set(key, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(key, recent);
  if (requestLog.size > 10_000) requestLog.clear();
  return false;
}

// Strip characters that could break or inject into email headers/subjects.
const clean = (value: string) => value.replace(/[\r\n<>"]/g, " ").trim();

export async function SendContactRequest(
  input: unknown
): Promise<{ error?: string }> {
  // Never trust the client: validate again on the server.
  const parsed = ContactRequestSchema.safeParse(input);
  if (!parsed.success) {
    return { error: "Bitte überprüfen Sie Ihre Eingaben." };
  }
  const formData = parsed.data;

  // Honeypot filled in: pretend success, send nothing.
  if (formData.website) return {};

  const ip =
    headers().get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers().get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return {
      error:
        "Zu viele Anfragen. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
    };
  }

  const recipient =
    process.env["RESEND_TRANSACTION_EMAIL"] ?? "Lasies <info@lasies.com>";

  const name = clean(formData.name);
  const { error } = await resend.emails.send({
    from: `Lasies <info@lasies.com>`,
    subject: translations["Lasies booking request from"] + " " + name,
    to: [recipient],
    reply_to: formData.email,
    react: ContactRequestTemplate({ ...formData, name }),
    text: `Name: ${name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  });

  if (error) {
    console.error("Failed to send contact request", error);
    return { error: "Die Anfrage konnte nicht gesendet werden." };
  }

  await SendRequestConfirmation(formData.email);
  return {};
}

async function SendRequestConfirmation(email: string) {
  // Fixed text and only the address the visitor typed: nothing they enter
  // ends up in this email, so it can't be used to send spam in our name.
  const { error } = await resend.emails.send({
    from: `Lasies <info@lasies.com>`,
    subject: "Ihre Anfrage ist beim Lasies Catering Service angekommen.",
    text: "Wir haben Ihre Anfrage erhalten und sie wird vom Lasies Catering Service bearbeitet",
    to: [email],
    reply_to: "info@lasies.com",
  });
  if (error) console.error("Failed to send confirmation", error);
}
