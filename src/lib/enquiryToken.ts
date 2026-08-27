import { createHmac, timingSafeEqual } from "crypto";

const TOKEN_TTL_MS = 20 * 60 * 1000;

function secret() {
  const configured = process.env.ENQUIRY_SECRET?.trim();
  if (configured) return configured;
  if (process.env.NODE_ENV !== "production") return "braczero-dev-enquiry";
  throw new Error("ENQUIRY_SECRET is not set");
}

export function issueEnquiryToken() {
  const issued = Date.now().toString();
  const sig = createHmac("sha256", secret()).update(issued).digest("hex");
  return `${issued}.${sig}`;
}

export function verifyEnquiryToken(token: unknown) {
  if (typeof token !== "string" || !token.includes(".")) return false;
  const [issued, sig] = token.split(".");
  if (!issued || !sig || !/^\d+$/.test(issued)) return false;
  const age = Date.now() - Number(issued);
  if (age < 0 || age > TOKEN_TTL_MS) return false;
  const expected = createHmac("sha256", secret()).update(issued).digest("hex");
  const a = Buffer.from(sig, "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function originAllowed(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host = request.headers.get("host") ?? "";
  const allowed = new Set([
    `http://${host}`,
    `https://${host}`,
    "http://localhost:3000",
    "https://braczero.vercel.app",
    "https://www.braczero.com",
    "https://braczero.com",
  ]);
  return allowed.has(origin);
}
