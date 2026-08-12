"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Discover",
    copy: "We map your product goals, threat surface, and constraints before a single line of code ships.",
  },
  {
    title: "Design & Build",
    copy: "Interfaces and systems crafted together—prototype, iterate, and deliver with engineering rigor.",
  },
  {
    title: "Harden",
    copy: "Security is baked in: reviews, testing, and hardening so launch day isn’t a gamble.",
  },
  {
    title: "Operate",
    copy: "Ongoing monitoring, iterations, and advisory keep you resilient as the business scales.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 40%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative px-6 py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(62,207,186,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">
              How we work
            </p>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-bold tracking-tight md:text-5xl">
              A process built for clarity and control.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            Inspired by how elite security teams think—diagnose, prove, document,
            improve—applied to every product we ship.
          </p>
        </motion.div>

        <div ref={ref} className="relative mt-16">
          <div className="pointer-events-none absolute top-6 right-0 left-0 hidden h-px bg-white/10 md:block" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="pointer-events-none absolute top-6 left-0 hidden h-px origin-left bg-accent md:block"
          />

          <div className="grid gap-0 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative border-t border-white/10 py-8 md:border-t-0 md:border-l md:px-6 md:py-2 first:md:border-l-0 first:md:pl-0"
              >
                <motion.span
                  whileInView={{ scale: [0.6, 1.15, 1] }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 hidden h-3 w-3 -translate-y-1/2 rounded-full border border-accent bg-bg md:block"
                  style={{ left: index === 0 ? 0 : undefined }}
                />
                <span className="font-mono text-4xl font-medium text-accent/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
