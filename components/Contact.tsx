"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import HeaderThing from "./HeaderThing";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactRequestSchema,
  ContactRequestType,
} from "@/libs/types/contactRequest";
import { cn } from "@/libs/utils";

export type ContactResponse = {
  success: boolean;
  error?: string;
};

export default function Contact({
  handleSendEmail,
}: {
  handleSendEmail: (data: ContactRequestType) => Promise<any>;
}) {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isLoading,
      isSubmitted,
      isSubmitSuccessful,
      isSubmitting,
    },
  } = useForm<ContactRequestType>({
    resolver: zodResolver(ContactRequestSchema),
  });
  const onSubmit: SubmitHandler<ContactRequestType> = async (data) => {
    const result = ContactRequestSchema.safeParse(data);
    if (!result.success) {
      return;
    }
    await handleSendEmail(data);
  };
  return (
    <section className="py-8 bg-[#f0ebdf]" id="kontakte">
      <HeaderThing title="Kontakt" subtitle="Kontaktieren Sie uns" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 mx-auto transition-all overflow-clip",
            {
              "opacity-50 pointer-events-none":
                isSubmitting || isSubmitSuccessful,
              "scale-y-100": !isSubmitSuccessful,
            }
          )}
        >
          <div className="form-group grid">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Geben Sie Ihren Namen ein"
              className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
            />
            {errors.name?.message && (
              <p className="text-red-500">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-group grid">
            <label htmlFor="phone">Telefonnummer</label>
            <input
              type="tel"
              {...register("telephone", { required: true })}
              placeholder="Geben Sie Ihre Telefonnummer ein"
              className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
            />
            {errors.telephone?.message && (
              <p className="text-red-500">{errors.telephone?.message}</p>
            )}
          </div>
          <div className="form-group grid">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Geben Sie Ihre Adresse ein"
              className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
            />
            {errors.address?.message && (
              <p className="text-red-500">{errors.address?.message}</p>
            )}
          </div>
          <div className="form-group grid">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Geben Sie Ihre Email-Adresse ein"
              className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-group grid">
            <label htmlFor="location">Veransaltungsort</label>
            <input
              type="text"
              {...register("location", { required: true })}
              placeholder="Geben Sie Ihren Standort ein"
              className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
            />
            {errors.location?.message && (
              <p className="text-red-500">{errors.location?.message}</p>
            )}
          </div>
          <div className="form-group grid">
            <label htmlFor="time">Uhrzeit</label>
            <input
              type="time"
              {...register("time", { required: true })}
              placeholder="Wählen Sie eine Uhrzeit"
              className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
            />
            {errors.time?.message && (
              <p className="text-red-500">{errors.time?.message}</p>
            )}
          </div>
          <div className="form-group grid">
            <label htmlFor="date">Datum</label>
            <input
              type="date"
              {...register("date", { required: true })}
              placeholder="Wählen Sie ein Datum"
              className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.date?.message && (
              <p className="text-red-500">{errors.date?.message}</p>
            )}
          </div>
          <div className="form-group grid">
            <label htmlFor="guests">Anzahl der Gäste</label>
            <input
              type="number"
              {...register("guests", { required: true })}
              placeholder="Geben Sie die Anzahl der Gäste ein"
              className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
              min={1}
            />
            {errors.guests?.message && (
              <p className="text-red-500">{errors.guests?.message}</p>
            )}
          </div>

          <div className="form-group flex flex-col lg:col-span-2 row-span-2">
            <label htmlFor="message">Nachricht</label>
            <textarea
              {...register("message", { required: true })}
              placeholder="Geben Sie Ihre Nachricht ein"
              rows={4}
              className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300 grow"
            />
            {errors.message?.message && (
              <p className="text-red-500">{errors.message?.message}</p>
            )}
          </div>
          <button
            className="w-full lg:col-span-2 py-2 bg-[#4d4f3f] text-white rounded-md"
            type="submit"
            disabled={isSubmitting || isSubmitSuccessful}
          >
            {isSubmitting && <i className="fas fa-spinner fa-spin mr-2"></i>}
            {isSubmitting
              ? "Senden..."
              : isSubmitSuccessful
              ? "Gesendet"
              : "Senden"}
          </button>
        </div>
      </form>
      <div
        className={cn(
          "transition-all  flex justify-center items-start mt-10 fixed top-10 right-10 left-10",
          {
            "opacity-0": !isSubmitSuccessful,
            "opacity-100": isSubmitSuccessful,
          }
        )}
      >
        <p className="text-center text-[#4d4f3f] p-8 border-2 rounded-lg bg-white shadow-lg flex flex-col gap-4 relative">
          <button
            onClick={() => window.location.reload()}
            className="absolute top-2 right-2"
          >
            <i className="fas fa-times text-[#4d4f3f]"></i>
          </button>
          <i className="fas fa-check-circle text-2xl text-[#4d4f3f] align-middle mr-4"></i>
          <span className=" align-middle">
            Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen
            melden.
          </span>
        </p>
      </div>
    </section>
  );
}
