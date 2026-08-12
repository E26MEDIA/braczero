"use client";

import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "01",
    href: "/services/website",
    title: "Website Development",
    copy: "Marketing sites, product platforms, and conversion-focused web experiences engineered for speed and clarity.",
    points: [
      "Next.js / modern React stacks",
      "Design systems & brand sites",
      "Performance, SEO & analytics",
      "CMS & content workflows",
    ],
  },
  {
    id: "02",
    href: "/services/app",
    title: "App Development",
    copy: "Mobile and web apps from MVP to scale—secure APIs, clean architecture, and interfaces people keep using.",
    points: [
      "iOS, Android & Progressive Web Apps",
      "Realtime & cloud backends",
      "Product discovery to launch",
      "Maintenance & feature velocity",
    ],
  },
  {
    id: "03",
    href: "/services/cybersecurity",
    title: "Cybersecurity",
    copy: "Offense-informed defense: find weaknesses before attackers do, then harden and monitor what matters.",
    points: [
      "Vulnerability assessment & pentesting",
      "Secure SDLC & code review",
      "Cloud hardening & zero-trust",
      "Managed security & advisory",
    ],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Software, apps, and cyber—built as one system."
        description="Every engagement balances product velocity with security depth, so growth never outruns your defenses."
      />

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl space-y-5">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1018] md:grid-cols-[0.35fr_1fr]"
            >
              <div className="relative border-b border-white/10 p-7 md:border-r md:border-b-0 md:p-9">
                <p className="font-mono text-xs text-accent">{service.id}</p>
                <h2 className="mt-6 font-display text-3xl font-bold tracking-tight">
                  {service.title}
                </h2>
                <div className="mt-8 h-px w-12 bg-accent/60 transition group-hover:w-20" />
                <Link
                  href={service.href}
                  className="mt-8 inline-flex text-sm text-accent transition hover:brightness-125"
                >
                  Explore service →
                </Link>
              </div>
              <div className="p-7 md:p-9">
                <p className="max-w-2xl text-muted md:text-lg">{service.copy}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-3 text-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-accent/25 bg-accent/10 p-8 md:flex-row md:items-center md:p-10"
        >
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Need a tailored stack?
            </h3>
            <p className="mt-2 text-muted">
              Tell us your timeline—we’ll map the right mix of build and protect.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg"
          >
            Talk to us →
          </Link>
        </motion.div>
      </section>
    </SiteShell>
  );
}
