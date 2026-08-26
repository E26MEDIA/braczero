"use client";

import { COMPANY } from "@/lib/company";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you’re building—or what you need to protect."
        description="Share a few details and we’ll come back with next steps. No black box. No pressure pitch."
      />

      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/10 bg-[#101012] p-5"
          >
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">Email</p>
            <a href={`mailto:${COMPANY.email}`} className="mt-2 block text-fg transition hover:text-accent">
              {COMPANY.email}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-[#101012] p-5"
          >
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">Phone</p>
            <div className="mt-2 space-y-1">
              {COMPANY.phones.map((p) => (
                <a key={p.href} href={p.href} className="block text-fg transition hover:text-accent">
                  {p.display}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="rounded-2xl border border-white/10 bg-[#101012] p-5 sm:col-span-2 lg:col-span-1"
          >
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase">Studio</p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{COMPANY.address}</p>
          </motion.div>
        </div>
      </section>

      <Contact hideIntro />
    </SiteShell>
  );
}
