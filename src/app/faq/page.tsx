"use client";

import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "What does BracZero specialize in?",
    a: "Website development, mobile/web app engineering, and cybersecurity—delivered as one partner so product speed and security stay aligned.",
  },
  {
    q: "Do you only work with large enterprises?",
    a: "No. We support startups through mid-market and enterprise teams. Scope and engagement model flex to your stage.",
  },
  {
    q: "Can you handle both building and securing a product?",
    a: "Yes. That’s our default. We can also plug into an existing engineering team for security-only or build-only work.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Marketing sites often land in 4–8 weeks. App MVPs vary by scope. Security assessments usually run 1–3 weeks depending on surface area.",
  },
  {
    q: "How do we start?",
    a: "Send a short brief via Contact Us. We’ll reply with clarifying questions and a proposed next step.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteShell>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before you book a call."
        description="Common questions about how we work, what we deliver, and how engagements start."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1018]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <span className="text-accent">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted">Still have a question?</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
