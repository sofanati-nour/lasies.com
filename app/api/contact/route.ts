// POST /api/contact
// import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env["RESEND_API_KEY"]);
export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log({ name, email, message });
  try {
    await resend.emails.send({
      from: "Lasies <info@lasies.com>",
      to: [`${name} <contact@nour-sofanati.com>`],
      subject: "New Contact Request",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      headers: {
        "Reply-To": "noursofanati.paypal@gmail.com",
      },
    });
    return new Response(JSON.stringify({ success: true }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    // console.error(error);
    return Response.json({ success: false, error: error });
  }
}
