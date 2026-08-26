import { COMPANY } from "@/lib/company";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL = /[\u0000-\u001F\u007F]/g;

export type EnquiryInput = {
  name: string;
  email: string;
  service: string;
  message: string;
  other?: string;
  company?: string;
  phone?: string;
  honey?: string;
};

export function cleanText(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(CONTROL, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

export function parseEnquiry(raw: unknown): { ok: true; data: EnquiryInput } | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") return { ok: false, error: "Invalid request." };
  const body = raw as Record<string, unknown>;
  const honey = cleanText(body.honey ?? body.company_website, 120);
  if (honey) return { ok: false, error: "Rejected." };

  const name = cleanText(body.name, 80);
  const email = cleanText(body.email, 120).toLowerCase();
  const service = cleanText(body.service, 80);
  const other = cleanText(body.other, 160);
  const message = cleanText(body.message, 2000);
  const company = cleanText(body.company, 120);
  const phone = cleanText(body.phone, 40);

  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "Please enter a valid work email." };
  if (service.length < 2) return { ok: false, error: "Please choose a service." };
  if (service === "Other" && other.length < 3) {
    return { ok: false, error: "Please tell us briefly what you need." };
  }
  if (message.length < 8) return { ok: false, error: "Please add a short message." };

  return {
    ok: true,
    data: { name, email, service, message, other, company, phone, honey: "" },
  };
}

export function enquiryPlainBody(data: EnquiryInput) {
  const { name, email, service, message, other, company, phone } = data;
  return [
    "New BracZero enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    `Service: ${service}${other ? ` (${other})` : ""}`,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function enquiryMailto(data: EnquiryInput) {
  const subject = `BracZero enquiry — ${data.service}`;
  return `mailto:${COMPANY.enquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiryPlainBody(data))}`;
}
