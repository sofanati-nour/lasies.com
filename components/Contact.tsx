"use client";
import { SubmitHandler, useForm, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  ContactRequestSchema,
  ContactRequestType,
} from "@/libs/types/contactRequest";
import { cn } from "@/libs/utils";

export type ContactResponse = {
  success: boolean;
  error?: string;
};

type FieldName = Exclude<keyof ContactRequestType, "website">;

const fields: {
  name: FieldName;
  label: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  wide?: boolean;
}[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Vor- und Nachname", autoComplete: "name" },
  { name: "email", label: "E-Mail", type: "email", placeholder: "ihre@email.de", autoComplete: "email" },
  { name: "telephone", label: "Telefonnummer", type: "tel", placeholder: "Für Rückfragen", autoComplete: "tel" },
  { name: "address", label: "Ihre Adresse", type: "text", placeholder: "Straße, PLZ, Ort", autoComplete: "street-address" },
  { name: "location", label: "Veranstaltungsort", type: "text", placeholder: "z. B. Gemeindehalle Calw" },
  { name: "guests", label: "Anzahl der Gäste", type: "number", placeholder: "z. B. 50" },
  { name: "date", label: "Datum", type: "date" },
  { name: "time", label: "Uhrzeit", type: "time" },
];

export default function Contact({
  handleSendEmail,
}: {
  handleSendEmail: (data: ContactRequestType) => Promise<{ error?: string }>;
}) {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactRequestType>({
    resolver: zodResolver(ContactRequestSchema),
  });

  const onSubmit: SubmitHandler<ContactRequestType> = async (data) => {
    const result = ContactRequestSchema.safeParse(data);
    if (!result.success) {
      return;
    }
    const response = await handleSendEmail(data);
    if (response?.error) {
      setError("root.server", { message: response.error });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center rounded-[2rem] bg-cream-light p-10 text-center shadow-xl shadow-olive-900/5 ring-1 ring-olive-900/5"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-gold-dark">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="mt-6 font-display text-3xl text-olive-900">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-3 max-w-sm text-ink-muted">
          Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.
          Eine Bestätigung ist auf dem Weg in Ihr Postfach.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="btn-ghost-dark mt-8"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[2rem] bg-cream-light p-6 shadow-xl shadow-olive-900/5 ring-1 ring-olive-900/5 sm:p-10"
    >
      <h3 className="font-display text-3xl text-olive-900">Ihre Anfrage</h3>
      <p className="mt-2 text-sm text-ink-muted">
        Alle Felder sind Pflichtfelder. Ihre Anfrage ist selbstverständlich
        unverbindlich.
      </p>

      <fieldset
        disabled={isSubmitting}
        className="mt-8 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
      >
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
            Ihre Nachricht
          </label>
          <textarea
            id="contact-message"
            {...register("message")}
            placeholder="Art der Feier, Wunsch-Buffet, besondere Wünsche …"
            rows={5}
            aria-invalid={!!errors.message}
            className={cn("field resize-y", errors.message && "border-red-400")}
          />
          {errors.message?.message && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.message.message}
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
            className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2"
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
              <Loader2 size={18} className="animate-spin" /> Wird gesendet …
            </>
          ) : (
            <>
              Anfrage senden <Send size={16} />
            </>
          )}
        </button>
      </fieldset>
    </form>
  );
}

function Field({
  name,
  label,
  type,
  placeholder,
  autoComplete,
  register,
  error,
}: {
  name: FieldName;
  label: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  register: UseFormRegister<ContactRequestType>;
  error?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-olive-900"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...(type === "date"
          ? { min: new Date().toISOString().split("T")[0] }
          : type === "number"
          ? { min: 1, inputMode: "numeric" as const }
          : {})}
        {...register(name)}
        className={cn("field", error && "border-red-400")}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
