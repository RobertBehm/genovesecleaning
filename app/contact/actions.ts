"use server";

import { getPrisma } from "@/lib/prisma";
import { sendContactSubmissionNotification } from "@/lib/contact-notification-email";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

const serviceTypes = new Set([
  "Standard Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out",
  "Recurring Cleaning",
  "Office Cleaning",
  "Custom Request"
]);

function stringValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = stringValue(formData, "name");
  const email = stringValue(formData, "email");
  const phone = stringValue(formData, "phone");
  const city = stringValue(formData, "city");
  const requestedServiceType = stringValue(formData, "serviceType");
  const serviceType = serviceTypes.has(requestedServiceType)
    ? requestedServiceType
    : "Custom Request";
  const message = stringValue(formData, "message");

  if (!name || !email || !city || !message) {
    return {
      ok: false,
      message: "Please fill out your name, email, town or city, and message."
    };
  }

  try {
    const prisma = getPrisma();

    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        city,
        serviceType,
        message
      }
    });

    try {
      await sendContactSubmissionNotification({
        name,
        email,
        phone: phone || null,
        city,
        serviceType,
        message
      });
    } catch (emailError) {
      console.error("Contact notification email failed", emailError);
    }

    return {
      ok: true,
      message: "Thanks. Your inquiry has been received."
    };
  } catch (error) {
    console.error("Contact form submission failed", error);

    return {
      ok: false,
      message: "Sorry, your inquiry could not be sent right now. Please try again shortly."
    };
  }
}
