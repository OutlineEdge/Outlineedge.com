import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactEmail from "@/components/emails/contact-email";
const resend = new Resend(process.env.RESENT_API_KEY);

export async function POST(request: Request) {
  const {
    firstname,
    lastname,
    email,
    subject,
    company_name,
    phone_number,
    message,
    service,
  } = await request.json();

  const res = await resend.sendEmail({
    from: "onboarding@resend.dev",
    to: "coding.errorr@gmail.com",
    subject: subject,
    react: ContactEmail({
      firstname,
      lastname,
      company_name,
      phone_number,
      email,
      message,
      service,
    }),
  });


  return NextResponse.json({
    status: "Ok",
  });
}
