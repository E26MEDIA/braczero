import { COMPANY } from "@/lib/company";
import { enquiryMailto, enquiryPlainBody, parseEnquiry, type EnquiryInput } from "@/lib/enquiry";

async function enquiryToken() {
  const res = await fetch("/api/enquiry", { method: "GET", cache: "no-store" });
  const payload = (await res.json()) as { token?: string };
  return payload.token ?? "";
}

async function formSubmitRelay(data: EnquiryInput) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(COMPANY.enquiryEmail)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: enquiryPlainBody(data),
      _subject: `BracZero enquiry — ${data.service}`,
      _template: "box",
    }),
  });
  const payload = (await res.json().catch(() => null)) as
    | { success?: string | boolean }
    | null;
  return payload?.success === true || payload?.success === "true";
}

export async function postEnquiry(body: Record<string, unknown>) {
  const parsed = parseEnquiry(body);
  if (!parsed.ok) {
    return { ok: false as const, error: parsed.error, mailto: "" };
  }

  const token = await enquiryToken();
  const res = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, token }),
  });
  const payload = (await res.json()) as {
    ok?: boolean;
    delivered?: boolean;
    allowClientRelay?: boolean;
    error?: string;
  };

  if (payload.ok && payload.delivered) {
    return { ok: true as const, error: "", mailto: "" };
  }
  if (res.status === 400 || res.status === 403 || res.status === 429 || res.status === 503) {
    return { ok: false as const, error: payload.error || "Could not send.", mailto: "" };
  }

  if (payload.allowClientRelay === true || res.status === 502) {
    try {
      if (await formSubmitRelay(parsed.data)) {
        return { ok: true as const, error: "", mailto: "" };
      }
    } catch {
      /* fall through */
    }
  }

  return {
    ok: false as const,
    error: `Could not send from the site. Email ${COMPANY.enquiryEmail} and we’ll pick it up.`,
    mailto: enquiryMailto(parsed.data),
  };
}
