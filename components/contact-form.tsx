import { buttonClassName } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send an inquiry</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Full name
            <Input name="name" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Email address
            <Input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Phone number
            <Input name="phone" type="tel" placeholder="Optional" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Town or city
            <Input name="city" placeholder="Nashua, Bedford, Salem..." />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--heading)]">
            Service type
            <select className="h-11 rounded-2xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--foreground)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]">
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
            />
          </label>
          <button className={buttonClassName({ size: "lg" })} type="submit">
            Request Quote
          </button>
          <p className="text-sm text-[var(--muted)]">
            This is a frontend-only form for now. Connect it to your inbox, CRM, or booking workflow before launch.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
