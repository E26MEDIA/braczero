"use client";

import { motion } from "framer-motion";

const items = [
  "Website Development",
  "Mobile App Engineering",
  "UI / UX Product Design",
  "Penetration Testing",
  "Cloud Security",
  "Managed Cyber Defense",
  "API & Backend Systems",
  "Zero-Trust Architecture",
];

export function Marquee() {
  const loop = [...items, ...items];

  return (
    <section className="group relative overflow-hidden border-y border-white/10 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <motion.span
            key={`${item}-${i}`}
            whileHover={{ color: "#3ecfba", scale: 1.04 }}
            className="inline-flex cursor-default items-center gap-10 font-display text-lg font-semibold text-fg/80 md:text-xl"
          >
            {item}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="inline-block text-accent"
            >
              ◆
            </motion.span>
          </motion.span>
        ))}
      </div>
    </section>
  );
}
