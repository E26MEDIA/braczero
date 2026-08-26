"use client";

import { MAIN_SERVICES } from "@/lib/services";
import { motion } from "framer-motion";
import Link from "next/link";
import { MouseEvent, useRef } from "react";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof MAIN_SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.a
      ref={ref}
      href={service.href}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative flex min-h-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-bg-elevated/80 p-5 transition duration-500 hover:border-accent/40 sm:min-h-[340px] sm:p-7"
      style={{
        backgroundImage:
          "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(183,28,40,0.16), transparent 42%)",
      }}
    >
      <div>
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs text-muted">{service.id}</p>
          <span className="text-accent opacity-0 transition group-hover:opacity-100">→</span>
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold tracking-tight md:text-[1.7rem]">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          {service.copy}
        </p>
      </div>
      <ul className="mt-8 space-y-2 border-t border-white/10 pt-5">
        {service.points.map((point, i) => (
          <motion.li
            key={point}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.06 }}
            className="flex items-center gap-2 text-sm text-fg/85"
          >
            <span className="h-1 w-1 rounded-full bg-accent" />
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.a>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-4 py-8 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">
              What we provide
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Build fast. Secure deeper.
            </h2>
            <p className="mt-4 text-muted md:text-lg">
              One partner for software, security, automation, and analytics—so growth never outruns your defenses.
            </p>
          </div>
          <Link
            href="/services"
            className="shrink-0 text-sm text-accent transition hover:brightness-125"
          >
            View all services →
          </Link>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {MAIN_SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
