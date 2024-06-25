"use client";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type ContactRequest = {
  name: string;
  email: string;
  telephone: string;
  message: string;
  location: string;
  time: string;
  date: string;
  guests: number;
};

export type ContactResponse = {
  success: boolean;
  error?: string;
};

export default function Contact({
  handleSendEmail,
}: {
  handleSendEmail: (data: ContactRequest) => Promise<void>;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactRequest>();
  const onSubmit: SubmitHandler<ContactRequest> = async (data) => {
    await handleSendEmail(data);
  };
  return (
    <section className="py-8" id="kontakte">
      <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_CLIENT_KEY}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 mx-auto">
            <div className="form-group grid">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Geben Sie Ihren Namen ein"
                className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
              />
            </div>
            <div className="form-group grid">
              <label htmlFor="phone">Telefonnummer</label>
              <input
                type="tel"
                {...register("telephone", { required: true })}
                placeholder="Geben Sie Ihre Telefonnummer ein"
                className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
              />
            </div>
            <div className="form-group grid">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Geben Sie Ihre Email-Adresse ein"
                className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
              />
            </div>
            <div className="form-group flex flex-col row-span-2">
              <label htmlFor="message">Nachricht</label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Geben Sie Ihre Nachricht ein"
                className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300 grow"
              />
            </div>
            <div className="form-group grid">
              <label htmlFor="location">Standort</label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder="Geben Sie Ihren Standort ein"
                className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
              />
            </div>
            <div className="form-group grid">
              <label htmlFor="time">Uhrzeit</label>
              <input
                type="time"
                {...register("time", { required: true })}
                placeholder="Wählen Sie eine Uhrzeit"
                className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
              />
            </div>
            <div className="form-group grid">
              <label htmlFor="date">Datum</label>
              <input
                type="date"
                {...register("date", { required: true })}
                placeholder="Wählen Sie ein Datum"
                className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
              />
            </div>
            <div className="form-group grid">
              <label htmlFor="guests">Anzahl der Gäste</label>
              <input
                type="number"
                {...register("guests", { required: true })}
                placeholder="Geben Sie die Anzahl der Gäste ein"
                className="bg-[#f3f1ec] p-2 border rounded-md border-gray-300"
              />
            </div>
            <button
              className="w-full lg:col-span-2 py-2 bg-[#808369] text-white rounded-md"
              type="submit"
            >
              Senden
            </button>
          </div>
        </form>
      </ReCaptchaProvider>
    </section>
  );
}
