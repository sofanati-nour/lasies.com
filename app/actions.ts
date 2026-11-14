"use server";
import { headers } from "next/headers";
import {
  ContactRequestTemplate,
  germanDate,
} from "@/components/email/ContactRequestTemplate";
import { ContactRequestSchema } from "@/libs/types/contactRequest";
import { Resend } from "resend";
import { site } from "@/libs/site";
const resend = new Resend(process.env["RESEND_API_KEY"]);

// Basic per-IP rate limit. It lives in memory, so it is per server instance:
// enough to stop casual abuse, not a determined attacker.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const requestLog = new Map<string, number[]>();

function recentRequests(key: string) {
  const now = Date.now();
  return (requestLog.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
}

function isRateLimited(key: string) {
  return recentRequests(key).length >= RATE_LIMIT_MAX;
}

/** Called only after a request was actually delivered, so retries after a
 *  failed send never trigger the "too many requests" message. */
function recordRequest(key: string) {
  const recent = recentRequests(key);
  recent.push(Date.now());
  requestLog.set(key, recent);
  if (requestLog.size > 10_000) requestLog.clear();
}

// Strip characters that could break or inject into email headers/subjects.
const clean = (value: string) => value.replace(/[\r\n<>"]/g, " ").trim();

// Every error offers another way to reach us.
const reachUs = `Sie erreichen uns auch telefonisch oder per WhatsApp unter ${site.phone} oder per E-Mail an ${site.email}.`;

export async function SendContactRequest(
  input: unknown
): Promise<{ error?: string; confirmationSent?: boolean }> {
  // Never trust the client: validate again on the server.
  const parsed = ContactRequestSchema.safeParse(input);
  if (!parsed.success) {
    return {
      error: `Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut. ${reachUs}`,
    };
  }
  const formData = parsed.data;

  // Honeypot filled in: pretend success, send nothing.
  if (formData.website) return {};

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return {
      error:
        `Sie haben gerade mehrere Anfragen gesendet. Bitte versuchen Sie es in einigen Minuten erneut. ${reachUs}`,
    };
  }

  const recipient =
    process.env["RESEND_TRANSACTION_EMAIL"] ?? "Lasies <info@lasies.com>";

  const name = clean(formData.name);
  const { error } = await sendEmail({
    from: `Lasies <info@lasies.com>`,
    subject: `Neue Catering-Anfrage von ${name}`,
    to: [recipient],
    replyTo: formData.email,
    react: ContactRequestTemplate({ ...formData, name }),
    text: [
      `Name: ${name}`,
      `E-Mail: ${formData.email}`,
      `Telefon: ${formData.telephone || "–"}`,
      `Datum: ${germanDate(formData.date)}`,
      `Uhrzeit: ${formData.time || "–"}`,
      `Gäste: ${formData.guests}`,
      `Veranstaltungsort: ${formData.location || "–"}`,
      `Adresse: ${formData.address || "–"}`,
      `Empfohlen von: ${formData.referredBy || "–"}`,
      "",
      formData.message,
    ].join("\n"),
  });

  if (error) {
    console.error("Failed to send contact request", error);
    return {
      error: `Ihre Anfrage konnte leider nicht gesendet werden. Ihre Eingaben bleiben erhalten – bitte versuchen Sie es erneut. ${reachUs}`,
    };
  }

  recordRequest(ip);
  const confirmationSent = await SendRequestConfirmation(formData.email);
  return { confirmationSent };
}

/** Resend call that also turns network exceptions into an `error`. */
async function sendEmail(
  payload: Parameters<typeof resend.emails.send>[0]
): Promise<{ error: unknown }> {
  try {
    const { error } = await resend.emails.send(payload);
    return { error };
  } catch (e) {
    return { error: e };
  }
}

async function SendRequestConfirmation(email: string): Promise<boolean> {
  // Fixed text and only the address the visitor typed: nothing they enter
  // ends up in this email, so it can't be used to send spam in our name.
  const { error } = await sendEmail({
    from: `Lasies <info@lasies.com>`,
    subject: "Ihre Anfrage bei Lasies Catering Service ist angekommen",
    text: [
      "Guten Tag,",
      "",
      "vielen Dank für Ihre Anfrage! Wir haben sie erhalten und melden uns in Kürze mit einem persönlichen, unverbindlichen Angebot bei Ihnen.",
      "",
      "Bei Fragen erreichen Sie uns telefonisch oder per WhatsApp unter +49 1573 8949296 oder per E-Mail an info@lasies.com.",
      "",
      "Herzliche Grüße",
      "Ihr Lasies Catering Service",
      "Barthstraße 4, 75378 Bad Liebenzell",
      "www.lasies.com",
    ].join("\n"),
    to: [email],
    replyTo: "info@lasies.com",
  });
  if (error) {
    console.error("Failed to send confirmation", error);
    return false;
  }
  return true;
}
