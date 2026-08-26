import { COMPANY } from "@/lib/company";
import {
  issueEnquiryToken,
  originAllowed,
  verifyEnquiryToken,
} from "@/lib/enquiryToken";
import { parseEnquiry, type EnquiryInput } from "@/lib/enquiry";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";
  return ip.slice(0, 64);
}

function limited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

function plainBody(data: EnquiryInput) {
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

function siteOrigin(request: Request) {
  const host = request.headers.get("host") ?? "braczero.vercel.app";
  const proto = host.startsWith("localhost") ? "http" : "https";
  return `${proto}://${host}`;
}

async function sendSmtp(text: string, replyTo: string, subject: string, to: string) {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!user || !pass) return false;

  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user, pass },
  });
  await transporter.sendMail({
    from: `BracZero <${user}>`,
    to,
    replyTo,
    subject,
    text,
  });
  return true;
}

async function sendResend(text: string, replyTo: string, subject: string, to: string) {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return false;
  const from = process.env.RESEND_FROM?.trim() || "BracZero <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text }),
  });
  if (!res.ok) throw new Error("Resend failed.");
  return true;
}

async function sendFormSubmit(
  text: string,
  replyTo: string,
  subject: string,
  to: string,
  origin: string,
) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: `${origin}/contact`,
      "User-Agent": "Mozilla/5.0 BracZeroEnquiry",
    },
    body: JSON.stringify({
      name: "BracZero website",
      email: replyTo,
      message: text,
      _subject: subject,
      _template: "box",
    }),
  });
  const payload = (await res.json().catch(() => null)) as
    | { success?: string | boolean; message?: string }
    | null;
  const ok = payload?.success === true || payload?.success === "true";
  if (!ok) {
    throw new Error(payload?.message || "Mail gateway failed.");
  }
}

async function deliver(text: string, replyTo: string, subject: string, origin: string) {
  const to = process.env.ENQUIRY_TO?.trim() || COMPANY.enquiryEmail;
  if (await sendSmtp(text, replyTo, subject, to)) return;
  if (await sendResend(text, replyTo, subject, to)) return;
  await sendFormSubmit(text, replyTo, subject, to, origin);
}

export async function GET() {
  try {
    return NextResponse.json({ ok: true, token: issueEnquiryToken() });
  } catch {
    return NextResponse.json({ ok: false, error: "Enquiry is not configured." }, { status: 503 });
  }
}

export async function POST(request: Request) {
  if (!originAllowed(request)) {
    return NextResponse.json({ ok: false, error: "Invalid origin." }, { status: 403 });
  }
  if (limited(clientKey(request))) {
    return NextResponse.json({ ok: false, error: "Too many enquiries. Try again shortly." }, { status: 429 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const token = raw && typeof raw === "object" ? (raw as { token?: unknown }).token : undefined;
  let tokenOk = false;
  try {
    tokenOk = verifyEnquiryToken(token);
  } catch {
    return NextResponse.json({ ok: false, error: "Enquiry is not configured." }, { status: 503 });
  }
  if (!tokenOk) {
    return NextResponse.json({ ok: false, error: "Refresh the page and try again." }, { status: 403 });
  }

  const parsed = parseEnquiry(raw);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const subject = `BracZero enquiry — ${parsed.data.service}`;
  try {
    await deliver(plainBody(parsed.data), parsed.data.email, subject, siteOrigin(request));
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Could not send just now. Email us at braczerotech@gmail.com, or wait a minute if this is the first enquiry — we may need to activate mail.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
