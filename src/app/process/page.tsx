"use client";

import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    id: "01",
    title: "Discover",
    copy: "We align on business goals, users, constraints, and threat surface before recommending a build path.",
  },
  {
    id: "02",
    title: "Design & Build",
    copy: "Product, engineering, and security move together—prototypes, architecture, and delivery in short loops.",
  },
  {
    id: "03",
    title: "Harden",
    copy: "Reviews, testing, and remediation so launch day is controlled—not a gamble.",
  },
  {
    id: "04",
    title: "Operate",
    copy: "Monitoring, iteration, and advisory keep systems resilient as traffic and features grow.",
  },
];

export default function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Process"
        title="A delivery system built for clarity and control."
        description="How BracZero takes products from brief to production—without trading speed for security."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid items-start gap-4 rounded-3xl border border-white/10 bg-[#0b1018] p-7 md:grid-cols-[120px_1fr]"
            >
              <p className="font-mono text-3xl text-accent/50">{step.id}</p>
              <div>
                <h2 className="font-display text-2xl font-bold">{step.title}</h2>
                <p className="mt-2 max-w-2xl text-muted">{step.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[2rem] border border-white/10 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <p className="max-w-xl text-muted">
            Prefer to see how this maps to your project? We’ll walk the process on a short call.
          </p>
          <Link href="/contact" className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg">
            Book a call →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
