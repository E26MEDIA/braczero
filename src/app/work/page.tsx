"use client";

import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { motion } from "framer-motion";
import Link from "next/link";

const cases = [
  {
    sector: "Fintech",
    title: "Secure customer portal rebuild",
    result: "42% faster load · hardened auth flows",
    tags: ["Website", "Cyber"],
  },
  {
    sector: "Healthcare",
    title: "Patient engagement mobile app",
    result: "MVP in 10 weeks · HIPAA-minded design",
    tags: ["App", "Security"],
  },
  {
    sector: "SaaS",
    title: "API & cloud posture assessment",
    result: "Critical findings closed in 3 sprints",
    tags: ["Cyber"],
  },
  {
    sector: "Retail",
    title: "Omnichannel brand platform",
    result: "Unified CMS · conversion uplift",
    tags: ["Website"],
  },
];

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Work"
        title="Selected engagements across build and defend."
        description="A snapshot of how BracZero ships software and hardens systems for teams that can’t afford downtime or weak releases."
      />

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {cases.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-[#0b1018] p-7"
            >
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                {item.sector}
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 text-muted">{item.result}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-accent/25 bg-accent/10 p-8 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold">Want results like these?</h3>
            <p className="mt-2 text-muted">Tell us what you’re shipping next.</p>
          </div>
          <Link href="/contact" className="w-full rounded-full bg-accent px-6 py-3.5 text-center text-sm font-semibold text-white md:w-auto">
            Start a project →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
