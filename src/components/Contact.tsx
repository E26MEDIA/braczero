"use client";

import { COMPANY } from "@/lib/company";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  hideIntro?: boolean;
};

const SERVICES = [
  "Cybersecurity",
  "Software & Apps",
  "AI & Automations",
  "Data Analytics",
  "Other",
] as const;

export function Contact({ hideIntro = false }: Props) {
  const [sent, setSent] = useState(false);
  const [need, setNeed] = useState<string>(SERVICES[0]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setBusy(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          other: data.get("other"),
          message: data.get("message"),
          honey: data.get("company_website"),
        }),
      });
      const payload = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !payload.ok) {
        setError(payload.error || "Could not send. Try again.");
        return;
      }
      setSent(true);
      form.reset();
      setNeed(SERVICES[0]);
    } catch {
      setError("Could not send. Email us at braczerotech@gmail.com.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="contact" className="px-4 py-12 sm:px-6 md:py-24">
      <div
        className={`mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#141416] to-[#070708] p-5 sm:p-8 md:p-12 lg:p-14 ${
          hideIntro ? "" : "md:grid-cols-[1.1fr_0.9fr]"
        }`}
      >
        {!hideIntro && (
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">
              Let&apos;s talk
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Ready when zero risk meets real ambition.
            </h2>
            <p className="mt-5 max-w-md text-muted md:text-lg">
              Tell us about your product or security goals. We’ll respond with a clear
              next step—no fluff, no black box.
            </p>

            <div className="mt-10 space-y-3 text-sm">
              <a
                href={`mailto:${COMPANY.enquiryEmail}`}
                className="block text-fg transition hover:text-accent"
              >
                {COMPANY.enquiryEmail}
              </a>
              {COMPANY.phones.map((p) => (
                <a key={p.href} href={p.href} className="block text-fg transition hover:text-accent">
                  {p.display}
                </a>
              ))}
              <p className="max-w-xs text-muted">{COMPANY.address}</p>
            </div>
          </motion.div>
        )}

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className={`flex flex-col gap-4 ${hideIntro ? "mx-auto w-full max-w-xl" : ""}`}
        >
          <label className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            Company website
            <input name="company_website" tabIndex={-1} autoComplete="off" />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs text-muted">Name</span>
            <input
              required
              name="name"
              maxLength={80}
              autoComplete="name"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs text-muted">Work email</span>
            <input
              required
              type="email"
              name="email"
              maxLength={120}
              autoComplete="email"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
              placeholder="you@company.com"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs text-muted">What do you need?</span>
            <select
              name="service"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
            >
              {SERVICES.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          {need === "Other" && (
            <label className="block">
              <span className="mb-2 block text-xs text-muted">Tell us briefly</span>
              <input
                required
                name="other"
                maxLength={160}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
                placeholder="A short note on what you need…"
              />
            </label>
          )}
          <label className="block">
            <span className="mb-2 block text-xs text-muted">Message</span>
            <textarea
              required
              name="message"
              rows={4}
              minLength={8}
              maxLength={2000}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
              placeholder="Brief on scope, timeline, or challenges…"
            />
          </label>
          {error ? <p className="text-sm text-accent">{error}</p> : null}
          <motion.button
            type="submit"
            disabled={busy || sent}
            whileHover={{ scale: sent ? 1 : 1.03 }}
            whileTap={{ scale: sent ? 1 : 0.97 }}
            className="mt-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-70"
          >
            {sent ? "Sent — we’ll reply by email" : busy ? "Sending…" : "Send enquiry"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
