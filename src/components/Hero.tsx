"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { BracZeroEcosystem } from "@/components/ecosystem/BracZeroEcosystem";
import { SplitText } from "./SplitText";

const particles = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: `${8 + ((i * 47) % 84)}%`,
  y: `${10 + ((i * 29) % 78)}%`,
  size: 2 + (i % 3),
  delay: (i % 7) * 0.35,
  duration: 4 + (i % 5),
}));

export function Hero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 mesh mesh-animate" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      {!reduceMotion &&
        particles.map((p) => (
          <motion.span
            key={p.id}
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-accent/40"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -14, 0],
              opacity: [0.12, 0.55, 0.12],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-6xl items-end gap-10 px-6 pb-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-20">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 font-mono text-xs tracking-[0.28em] text-accent uppercase"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            IT · Software · Security
          </motion.p>

          <h1 className="font-display text-[clamp(3.4rem,10vw,6.6rem)] leading-[0.9] font-extrabold tracking-tight">
            <SplitText text="Brac" delay={0.15} />
            <span className="text-accent">
              <SplitText text="Zero" delay={0.35} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-xl"
          >
            We design and ship websites, apps, and cyber defenses that feel
            inevitable—not incremental.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg"
            >
              <span className="absolute inset-0 translate-y-full bg-accent transition duration-400 group-hover:translate-y-0" />
              <span className="relative">Start a project</span>
              <span className="relative transition group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm text-fg transition hover:border-accent/50 hover:text-accent"
            >
              Explore services
            </Link>
          </motion.div>
        </div>

        <BracZeroEcosystem />
      </div>

      {!reduceMotion && (
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] text-muted uppercase"
          >
            Scroll
            <span className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </div>
      )}
    </section>
  );
}
