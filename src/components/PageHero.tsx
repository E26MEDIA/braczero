"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  visual?: ReactNode;
};

export function PageHero({ eyebrow, title, description, visual }: Props) {
  return (
    <section className="relative overflow-hidden px-4 pt-[calc(7.5rem+env(safe-area-inset-top))] pb-12 sm:px-6 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-0 mesh mesh-animate opacity-80" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div
        className={`relative mx-auto max-w-6xl items-center gap-10 ${
          visual ? "grid md:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs tracking-[0.28em] text-accent uppercase"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-3xl font-display text-[1.7rem] leading-tight font-bold tracking-tight sm:text-4xl md:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {description}
          </motion.p>
        </div>
        {visual ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-8 md:mt-0"
          >
            {visual}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
