import { z } from "zod";

/** Today's date (YYYY-MM-DD) in Germany, where the business is. */
export function todayInGermany() {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Berlin",
  }).format(new Date());
}

/** Optional free-text field: may be left empty, but not be overly long. */
const optionalText = (max: number, tooLong: string) =>
  z.string().trim().max(max, tooLong).optional();

// Only what we need to send a first, non-binding offer is required.
// Everything else helps us plan but can follow later.
export const ContactRequestSchema = z.object({
  name: z
    .string({ error: "Bitte geben Sie Ihren Namen ein." })
    .trim()
    .min(2, "Bitte geben Sie Ihren Namen ein (mindestens 2 Zeichen).")
    .max(100, "Der Name darf höchstens 100 Zeichen lang sein."),
  email: z
    .string({ error: "Bitte geben Sie Ihre E-Mail-Adresse ein." })
    .trim()
    .min(1, "Bitte geben Sie Ihre E-Mail-Adresse ein.")
    .max(200, "Die E-Mail-Adresse ist zu lang.")
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@beispiel.de."),
  telephone: optionalText(40, "Die Telefonnummer ist zu lang."),
  date: z
    .string({ error: "Bitte wählen Sie das Datum Ihrer Feier." })
    .min(1, "Bitte wählen Sie das Datum Ihrer Feier.")
    .date("Bitte geben Sie ein gültiges Datum ein.")
    .refine(
      (d) => d >= todayInGermany(),
      "Bitte wählen Sie ein Datum ab heute."
    ),
  guests: z
    .string({ error: "Bitte geben Sie die ungefähre Anzahl der Gäste ein." })
    .min(1, "Bitte geben Sie die ungefähre Anzahl der Gäste ein.")
    .max(6, "Bitte geben Sie eine gültige Anzahl ein.")
    .refine(
      (v) => Number.isInteger(Number(v)) && Number(v) >= 1,
      "Bitte geben Sie eine gültige Anzahl ein."
    ),
  time: optionalText(10, "Bitte geben Sie eine gültige Uhrzeit ein."),
  location: optionalText(200, "Der Veranstaltungsort ist zu lang."),
  address: optionalText(300, "Die Adresse ist zu lang."),
  referredBy: optionalText(100, "Der Name darf höchstens 100 Zeichen lang sein."),
  message: z
    .string({ error: "Bitte erzählen Sie uns kurz von Ihrer Feier." })
    .trim()
    .min(10, "Bitte erzählen Sie uns kurz von Ihrer Feier (mindestens 10 Zeichen).")
    .max(5000, "Die Nachricht darf höchstens 5000 Zeichen lang sein."),
  // Honeypot: hidden from humans, bots tend to fill it in.
  website: z.string().max(200).optional(),
});
export type ContactRequestType = z.infer<typeof ContactRequestSchema>;
