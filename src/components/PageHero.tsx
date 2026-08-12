"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-0 mesh mesh-animate opacity-80" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="relative mx-auto max-w-6xl">
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
          className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65 }}
          className="mt-5 max-w-2xl text-lg text-muted"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
