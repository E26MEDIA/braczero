"use client";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    title: "Build with intent",
    copy: "Every release is deliberate—design, engineering, and security aligned before it goes live.",
  },
  {
    title: "Offense informs defense",
    copy: "We think like attackers so your products stay resilient under real-world pressure.",
  },
  {
    title: "Plain language, always",
    copy: "We explain risk and next steps in words anyone on the team can follow—no buzzwords required.",
  },
];

const timeline = [
  { year: "01", title: "Discover", copy: "Goals, constraints, and threat surface—mapped before we build." },
  { year: "02", title: "Design & Build", copy: "Interfaces and systems crafted in parallel with engineering rigor." },
  { year: "03", title: "Harden", copy: "Reviews, testing, and hardening so launch day isn’t a gamble." },
  { year: "04", title: "Operate", copy: "Monitoring and iteration that keep you resilient as you scale." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Us"
        title="BracZero builds digital products that refuse to be fragile."
        description="We’re an IT partner for brands that want premium software and cybersecurity in the same conversation—not bolted on after the fact."
      />

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Zero compromise between performance, reliability, and security.
            </h2>
            <p className="mt-5 text-muted md:text-lg">
              BracZero exists for teams who refuse to choose between moving fast
              and staying secure. We engineer, harden, and operate—so your product
              holds up under real load, real users, and real threats.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1018] p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 40, suffix: "+", label: "Products delivered" },
                { value: 120, suffix: "+", label: "Security assessments" },
                { value: 99.9, suffix: "%", label: "Uptime targets", decimals: 1 },
                { value: 24, suffix: "/7", label: "Readiness" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-accent">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={"decimals" in stat ? stat.decimals : 0}
                    />
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            What we stand for
          </motion.h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-[#0b1018] p-7"
              >
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            How we partner
          </h2>
          <div className="mt-10 grid gap-0 md:grid-cols-4">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-t border-white/10 py-8 md:border-t-0 md:border-l md:px-5 first:md:border-l-0 first:md:pl-0"
              >
                <span className="font-mono text-sm text-accent">{item.year}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-[#0e1520] to-[#070a10] p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Want to know if we’re the right fit?
            </h3>
            <p className="mt-2 text-muted">A short call beats a long pitch deck.</p>
          </div>
          <Link
            href="/contact"
            className="w-full rounded-full bg-accent px-6 py-3.5 text-center text-sm font-semibold text-white md:w-auto"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
