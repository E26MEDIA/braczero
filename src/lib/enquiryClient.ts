async function enquiryToken() {
  const res = await fetch("/api/enquiry", { method: "GET", cache: "no-store" });
  const payload = (await res.json()) as { token?: string };
  return payload.token ?? "";
}

export async function postEnquiry(body: Record<string, unknown>) {
  const token = await enquiryToken();
  const res = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, token }),
  });
  const payload = (await res.json()) as { ok?: boolean; error?: string };
  return { ok: Boolean(res.ok && payload.ok), error: payload.error, status: res.status };
}
