"use client";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import {
  ContactRequestSchema,
  ContactRequestType,
  todayInGermany,
} from "@/libs/types/contactRequest";
import { site } from "@/libs/site";
import { cn } from "@/libs/utils";

type FieldName = Exclude<keyof ContactRequestType, "website" | "message">;

const fields: {
  name: FieldName;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  hint?: string;
  /** Spans both columns. */
  wide?: boolean;
}[] = [
  { name: "name", label: "Name", type: "text", required: true, placeholder: "Vor- und Nachname", autoComplete: "name" },
  { name: "email", label: "E-Mail", type: "email", required: true, placeholder: "ihre@email.de", autoComplete: "email" },
  { name: "date", label: "Datum der Feier", type: "date", required: true },
  { name: "guests", label: "Anzahl der Gäste", type: "number", required: true, placeholder: "z. B. 50", hint: "Eine Schätzung genügt." },
  { name: "telephone", label: "Telefon", type: "tel", placeholder: "Für Rückfragen", autoComplete: "tel" },
  { name: "time", label: "Uhrzeit", type: "time" },
  { name: "location", label: "Veranstaltungsort", type: "text", placeholder: "z. B. Festhalle" },
  { name: "address", label: "Ihre Adresse", type: "text", placeholder: "Straße, PLZ, Ort", autoComplete: "street-address" },
  { name: "referredBy", label: "Empfohlen von", type: "text", placeholder: "Vor- und Nachname der empfehlenden Person", hint: "Neukunden erhalten 50\u00A0€ Rabatt ab 1.000\u00A0€ Auftragswert – Bedingungen unter „Wichtiges & Wissenswertes“.", wide: true },
];

export default function Contact({
  handleSendEmail,
}: {
  handleSendEmail: (
    data: ContactRequestType
  ) => Promise<{ error?: string; confirmationSent?: boolean }>;
}) {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    getValues,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactRequestType>({
    resolver: zodResolver(ContactRequestSchema),
    shouldFocusError: false,
  });
  const successRef = useRef<HTMLHeadingElement>(null);
  const [confirmationSent, setConfirmationSent] = useState(true);
  const alertRef = useRef<HTMLParagraphElement>(null);
  const serverError = errors.root?.server?.message;

  // Set when "Weitere Anfrage senden" brings the form back.
  const focusFormAfterReset = useRef(false);

  // The page is pre-rendered, so "today" must come from the browser.
  useEffect(() => {
    document.getElementById("contact-date")?.setAttribute("min", todayInGermany());
    // Runs again when the form is shown after "Weitere Anfrage senden";
    // keyboard focus then continues in the first field.
    if (!isSubmitSuccessful && focusFormAfterReset.current) {
      focusFormAfterReset.current = false;
      setFocus("name");
    }
  }, [isSubmitSuccessful, setFocus]);

  // Counts failed sends; the effect below focuses the error once per
  // failure. (The message text can be identical between failures, so it
  // can't be the trigger.)
  const [failedSends, setFailedSends] = useState(0);
  const focusedFailure = useRef(0);

  useEffect(() => {
    // The submit button is disabled while sending, so focus would be lost:
    // move it to the error message once the form is enabled again.
    if (isSubmitting || failedSends === focusedFailure.current) return;
    focusedFailure.current = failedSends;
    alertRef.current?.focus();
  }, [failedSends, isSubmitting]);

  useEffect(() => {
    // The form is replaced by the thank-you message: move focus there so
    // keyboard and screen-reader users aren't left on a removed element.
    if (isSubmitSuccessful) successRef.current?.focus();
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<ContactRequestType> = async (data) => {
    try {
      const response = await handleSendEmail(data);
      if (response?.error) {
        setError("root.server", { message: response.error });
        setFailedSends((n) => n + 1);
      } else {
        setConfirmationSent(response?.confirmationSent !== false);
      }
    } catch {
      // Network problem or server crash: keep the entries and offer
      // other ways to reach us.
      setError("root.server", {
        message: `Die Anfrage konnte gerade nicht gesendet werden. Ihre Eingaben bleiben erhalten – bitte versuchen Sie es erneut oder rufen Sie uns an: ${site.phone}.`,
      });
      setFailedSends((n) => n + 1);
    }
  };

  if (isSubmitSuccessful && !errors.root?.server) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center rounded-[2rem] bg-cream-light p-10 text-center shadow-xl shadow-olive-900/5 ring-1 ring-olive-900/5"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-gold-dark">
          <CheckCircle2 size={32} aria-hidden />
        </div>
        <h3
          ref={successRef}
          tabIndex={-1}
          className="mt-6 font-display text-3xl text-olive-900 outline-none"
        >
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-3 max-w-sm text-ink-muted">
          Wir haben Ihre Nachricht erhalten und melden uns in Kürze mit einem
          persönlichen Angebot.{" "}
          {confirmationSent
            ? "Eine Bestätigung ist auf dem Weg in Ihr Postfach."
            : "Die Bestätigungs-E-Mail konnten wir leider nicht senden – Ihre Anfrage ist aber bei uns angekommen."}
        </p>
        <button
          type="button"
          onClick={() => {
            focusFormAfterReset.current = true;
            reset();
          }}
          className="btn-ghost-dark mt-8"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  const messageError = errors.message?.message;

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (invalid) => {
        const first = [...fields.map((f) => f.name), "message" as const].find(
          (name) => invalid[name]
        );
        if (first) setFocus(first);
      })}
      noValidate
      aria-labelledby="contact-form-title"
      className="rounded-[2rem] bg-cream-light p-6 shadow-xl shadow-olive-900/5 ring-1 ring-olive-900/5 sm:p-10"
    >
      <h3 id="contact-form-title" className="font-display text-3xl text-olive-900">
        Ihre Anfrage
      </h3>
      <p className="mt-2 text-sm text-ink-muted">
        Unverbindlich und kostenlos. Pflichtfelder sind mit{" "}
        <span aria-hidden className="font-semibold text-red-700">*</span>
        <span className="sr-only">einem Sternchen</span> markiert – alles
        andere können Sie auch später nachreichen.
      </p>

      <Suspense fallback={null}>
        <PrefillFromLink
          prefill={(text) => {
            if (!getValues("message")) setValue("message", text);
          }}
        />
      </Suspense>
      <fieldset
        disabled={isSubmitting}
        className="mt-8 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
      >
        <legend className="sr-only">Angaben zu Ihrer Feier</legend>
        {fields.map((f) => (
          <Field
            key={f.name}
            {...f}
            register={register}
            error={errors[f.name]?.message}
          />
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-olive-900"
          >
            Ihre Nachricht <RequiredMark />
          </label>
          <textarea
            id="contact-message"
            {...register("message")}
            placeholder="Art der Feier, Wunsch-Buffet, besondere Wünsche …"
            rows={5}
            aria-required="true"
            aria-invalid={!!messageError}
            aria-describedby={messageError ? "contact-message-error" : undefined}
            className={cn("field resize-y", messageError && "field-invalid")}
          />
          {messageError && (
            <p id="contact-message-error" className="mt-1.5 text-sm text-red-700">
              {messageError}
            </p>
          )}
        </div>

        {/* Honeypot: invisible to people, often filled in by bots */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("website")}
        />

        {errors.root?.server?.message && (
          <p
            ref={alertRef}
            tabIndex={-1}
            className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800 outline-none sm:col-span-2"
            role="alert"
          >
            {errors.root.server.message}
          </p>
        )}

        <button
          className="btn-dark w-full !py-4 text-base sm:col-span-2"
          type="submit"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden /> Wird
              gesendet …
            </>
          ) : (
            <>
              Anfrage senden <Send size={16} aria-hidden />
            </>
          )}
        </button>
        <p className="text-xs leading-relaxed text-ink-muted sm:col-span-2">
          Wir verwenden Ihre Angaben nur, um Ihre Anfrage zu beantworten. Mehr
          dazu in unserer{" "}
          <Link
            href="/datenschutz"
            className="font-medium text-olive-900 underline underline-offset-2"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
      </fieldset>
    </form>
  );
}

/**
 * "Pizza-Event anfragen", "Personal anfragen" and the buffet buttons link to
 * /?anfrage=… or /?buffet=… – start the message with what was picked so
 * visitors don't have to type it again.
 */
function PrefillFromLink({ prefill }: { prefill: (text: string) => void }) {
  const params = useSearchParams();
  const anfrage = params.get("anfrage");
  const buffet = params.get("buffet")?.slice(0, 80);
  useEffect(() => {
    const text =
      anfrage === "pizza"
        ? "Ich interessiere mich für Steinofen-Pizza vor Ort. "
        : anfrage === "personal"
        ? "Ich möchte Service- bzw. Küchenpersonal für meine Veranstaltung anfragen. "
        : anfrage === "partner"
        ? "Wir planen regelmäßig Veranstaltungen und interessieren uns für Ihre Partnerkonditionen für Firmen und Vereine. "
        : buffet
        ? `Ich interessiere mich für: ${buffet}. `
        : null;
    if (text) prefill(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anfrage, buffet]);
  return null;
}

function RequiredMark() {
  return (
    <span aria-hidden className="text-red-700">
      *
    </span>
  );
}

function Field({
  name,
  label,
  type,
  required,
  placeholder,
  autoComplete,
  hint,
  wide,
  register,
  error,
}: {
  name: FieldName;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  hint?: string;
  wide?: boolean;
  register: UseFormRegister<ContactRequestType>;
  error?: string;
}) {
  const id = `contact-${name}`;
  const describedBy =
    (error ? `${id}-error` : hint ? `${id}-hint` : undefined);
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-olive-900"
      >
        {label} {required ? <RequiredMark /> : <span className="font-normal text-ink-muted">(optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-required={required ? "true" : undefined}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...(type === "number"
          ? { min: 1, inputMode: "numeric" as const }
          : {})}
        {...register(name)}
        className={cn("field", error && "field-invalid")}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
