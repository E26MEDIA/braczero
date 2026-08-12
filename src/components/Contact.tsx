"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  hideIntro?: boolean;
};

export function Contact({ hideIntro = false }: Props) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="px-6 py-16 md:py-24">
      <div
        className={`mx-auto grid max-w-6xl gap-12 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0e1520] to-[#070a10] p-8 md:p-12 lg:p-14 ${
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
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Ready when zero risk meets real ambition.
            </h2>
            <p className="mt-5 max-w-md text-muted md:text-lg">
              Tell us about your product or security goals. We’ll respond with a clear
              next step—no fluff, no black box.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <a
                href="mailto:hello@braczero.com"
                className="block text-fg transition hover:text-accent"
              >
                hello@braczero.com
              </a>
              <p className="text-muted">Remote-first · Global delivery</p>
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
          <label className="block">
            <span className="mb-2 block text-xs text-muted">Name</span>
            <input
              required
              name="name"
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
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
              placeholder="you@company.com"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs text-muted">What do you need?</span>
            <select
              name="service"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
              defaultValue="Website Development"
            >
              <option>Website Development</option>
              <option>App Development</option>
              <option>Cybersecurity</option>
              <option>Full engagement</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs text-muted">Message</span>
            <textarea
              name="message"
              rows={4}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
              placeholder="Brief on scope, timeline, or challenges…"
            />
          </label>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition hover:brightness-110"
          >
            {sent ? "Message noted — we’ll be in touch" : "Send enquiry"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
