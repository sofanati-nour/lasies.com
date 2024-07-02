import z from "zod";

export const ContactRequestSchema = z.object({
  name: z
    .string({
      required_error: "Bitte geben Sie Ihren Namen ein",
    })
    .min(2, "Der Name muss mindestens 2 Zeichen lang sein"),
  email: z
    .string({
      required_error: "Bitte geben Sie Ihre Email-Adresse ein",
    })
    .min(5, "Die Email-Adresse muss mindestens 5 Zeichen lang sein")
    .email("Bitte geben Sie eine gültige Email-Adresse ein"),
  telephone: z
    .string({
      required_error: "Bitte geben Sie Ihre Telefonnummer ein",
    })
    .min(5, "Die Telefonnummer muss mindestens 5 Zeichen lang sein"),
  message: z
    .string({
      required_error: "Bitte geben Sie eine Nachricht ein",
    })
    .min(10, "Die Nachricht muss mindestens 10 Zeichen lang sein"),
  location: z
    .string({
      required_error: "Bitte geben Sie einen Veranstaltungsort ein",
    })
    .min(5, "Der Veranstaltungsort muss mindestens 5 Zeichen lang sein"),
  time: z
    .string({
      required_error: "Bitte geben Sie eine Uhrzeit ein",
    })
    .min(5, "Die Uhrzeit muss mindestens 5 Zeichen lang sein"),
  date: z
    .string({
      required_error: "Bitte geben Sie ein Datum ein",
    })
    .min(5, "Das Datum muss mindestens 5 Zeichen lang sein")
    .date("Bitte geben Sie ein gültiges Datum ein"),
  guests: z
    .string()
    .min(1, "Die Anzahl der Gäste muss mindestens 1 Zeichen lang sein")
    .superRefine((data) => {
      if (isNaN(Number(data))) {
        return "Bitte geben Sie eine gültige Anzahl ein";
      }
      return true;
    }),
  address: z
    .string({
      required_error: "Bitte geben Sie Ihre Adresse ein",
    })
    .min(5, "Die Adresse muss mindestens 5 Zeichen lang sein"),
});
export type ContactRequestType = z.infer<typeof ContactRequestSchema>;
