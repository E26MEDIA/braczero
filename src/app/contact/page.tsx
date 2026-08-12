"use client";

import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { motion } from "framer-motion";

const channels = [
  { label: "Email", value: "hello@braczero.com", href: "mailto:hello@braczero.com" },
  { label: "Response time", value: "Within 1 business day", href: undefined },
  { label: "Engagements", value: "Remote-first · Global", href: undefined },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you’re building—or what you need to protect."
        description="Share a few details and we’ll come back with next steps. No black box. No pressure pitch."
      />

      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {channels.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#0b1018] p-5"
            >
              <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="mt-2 block text-fg transition hover:text-accent">
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-fg">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Contact hideIntro />
    </SiteShell>
  );
}
