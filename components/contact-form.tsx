"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { submitContactForm } from "@/app/contact/actions";
import type { ContactFormState } from "@/app/contact/actions";
import { buttonClassName } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={buttonClassName({ size: "lg" })}
      disabled={pending}
      type="submit"
    >
      {pending ? "Sending..." : "Request Quote"}
    </button>
  );
}

const initialContactFormState: ContactFormState = {
  ok: false,
  message: ""
};

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactForm,
    initialContactFormState
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send an inquiry</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Full name
            <Input name="name" placeholder="Your name" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Email address
            <Input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Phone number
            <Input name="phone" type="tel" placeholder="Optional" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Town or city
            <Input name="city" placeholder="Nashua, Bedford, Salem..." required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Service type
            <select
              className="h-11 rounded-2xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              name="serviceType"
            >
              <option>Standard Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Move-In / Move-Out</option>
              <option>Recurring Cleaning</option>
              <option>Office Cleaning</option>
              <option>Custom Request</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Message
            <Textarea
              name="message"
              rows={5}
              placeholder="Tell us about the home, square footage, pets, and priorities."
              required
            />
          </label>
          <SubmitButton />
          {state.message ? (
            <p
              className={
                state.ok
                  ? "text-sm font-semibold text-[var(--primary)]"
                  : "text-sm font-semibold text-red-300"
              }
            >
              {state.message}
            </p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
