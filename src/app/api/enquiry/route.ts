import { COMPANY } from "@/lib/company";
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
    `New BracZero enquiry`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    `Service: ${service}${other ? ` (${other})` : ""}`,
    ``,
    `Message:`,
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

async function deliver(text: string, replyTo: string, subject: string) {
  const to = process.env.ENQUIRY_TO?.trim() || COMPANY.enquiryEmail;
  const resendKey = process.env.RESEND_API_KEY?.trim();

  if (resendKey) {
    const from = process.env.RESEND_FROM?.trim() || "BracZero <onboarding@resend.dev>";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: replyTo,
        subject,
        text,
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      throw new Error(detail.slice(0, 200) || "Resend failed.");
    }
    return;
  }

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "BracZero website",
      email: replyTo,
      message: text,
      _subject: subject,
      _template: "box",
      _captcha: "false",
    }),
  });
  if (!res.ok) {
    throw new Error("Mail gateway failed.");
  }
}

export async function POST(request: Request) {
  if (limited(clientKey(request))) {
    return NextResponse.json({ ok: false, error: "Too many enquiries. Try again shortly." }, { status: 429 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = parseEnquiry(raw);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const subject = `BracZero enquiry — ${parsed.data.service}`;
  try {
    await deliver(plainBody(parsed.data), parsed.data.email, subject);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not send just now. Email us at braczerotech@gmail.com." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
