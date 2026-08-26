"use client";

import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { MAIN_SERVICES } from "@/lib/services";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Four lines. One operating system for growth."
        description="Cybersecurity, software and apps, AI automations, and data analytics—delivered as one stack so you don’t juggle five vendors."
      />

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {MAIN_SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.25) }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101012] p-8"
            >
              <p className="font-mono text-xs text-accent">{service.id}</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
                {service.title}
              </h2>
              <p className="mt-4 text-muted">{service.copy}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-8 inline-flex text-sm text-accent transition hover:brightness-125"
              >
                Explore service →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
