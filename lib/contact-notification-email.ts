import { Resend } from "resend";

type ContactSubmissionEmailInput = {
  name: string;
  email: string;
  phone: string | null;
  city: string;
  serviceType: string;
  message: string;
};

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 16px;color:#6b7280;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;border-bottom:1px solid #e5e7eb;width:170px;">${label}</td>
      <td style="padding:12px 16px;color:#111827;font-size:16px;border-bottom:1px solid #e5e7eb;">${value}</td>
    </tr>
  `;
}

function buildHtmlEmail(input: ContactSubmissionEmailInput) {
  const phone = input.phone ? escapeHtml(input.phone) : "Not provided";

  return `
    <div style="margin:0;padding:32px;background:#f7f3eb;font-family:Arial,Helvetica,sans-serif;color:#111827;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="padding:28px 32px;background:#0b0b0b;color:#ffffff;">
            <p style="margin:0 0 8px;color:#c9a14a;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.14em;">New Quote Request</p>
            <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.2;">${escapeHtml(input.name)} submitted the contact form.</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:0;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
              ${detailRow("Name", escapeHtml(input.name))}
              ${detailRow("Email", `<a href="mailto:${escapeHtml(input.email)}" style="color:#9a741e;font-weight:700;">${escapeHtml(input.email)}</a>`)}
              ${detailRow("Phone", phone)}
              ${detailRow("Town / City", escapeHtml(input.city))}
              ${detailRow("Service", escapeHtml(input.serviceType))}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 32px;">
            <p style="margin:0 0 10px;color:#6b7280;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;">Message</p>
            <div style="padding:18px 20px;background:#fafafa;border:1px solid #e5e7eb;border-radius:12px;color:#111827;font-size:16px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(input.message)}</div>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function buildTextEmail(input: ContactSubmissionEmailInput) {
  return [
    "New quote request",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone ?? "Not provided"}`,
    `Town / City: ${input.city}`,
    `Service: ${input.serviceType}`,
    "",
    "Message:",
    input.message
  ].join("\n");
}

export async function sendContactSubmissionNotification(
  input: ContactSubmissionEmailInput
) {
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.OWNER_NOTIFICATION_EMAIL;

  if (!resend || !from || !to) {
    throw new Error("Resend notification email environment variables are not set.");
  }

  await resend.emails.send({
    from,
    to,
    subject: `New quote request from ${input.name}`,
    html: buildHtmlEmail(input),
    text: buildTextEmail(input),
    replyTo: input.email
  });
}
