"use client";

import { motion } from "framer-motion";

const items = [
  "Cybersecurity",
  "Software & Apps",
  "AI & Automations",
  "Data Analytics",
  "VAPT",
  "Secure SDLC",
  "Chatbots",
  "BI Dashboards",
];

export function Marquee() {
  const loop = [...items, ...items];

  return (
    <section className="group relative overflow-hidden border-y border-white/10 py-4 md:py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent sm:w-24" />
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <motion.span
            key={`${item}-${i}`}
            whileHover={{ color: "#b71c28", scale: 1.04 }}
            className="inline-flex cursor-default items-center gap-10 font-display text-lg font-semibold text-fg/80 md:text-xl"
          >
            {item}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="inline-block text-accent"
            >
              Ø
            </motion.span>
          </motion.span>
        ))}
      </div>
    </section>
  );
}
