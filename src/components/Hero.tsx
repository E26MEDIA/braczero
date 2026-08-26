"use client";

import { COMPANY } from "@/lib/company";
import { HeroField } from "@/components/heroes/HeroField";
import { MAIN_SERVICES } from "@/lib/services";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SplitText } from "./SplitText";

const snippets = [
  { top: "18%", right: "8%", text: "function scan(surface) {" },
  { top: "28%", right: "16%", text: "if (threat.found) isolate()" },
  { top: "42%", right: "4%", text: "switch (error) {" },
  { top: "54%", right: "14%", text: "case 'breach': zero()" },
  { top: "66%", right: "7%", text: "deploy(secureBuild)" },
];

export function Hero() {
  const reduceMotion = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % MAIN_SERVICES.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section id="top" className="relative overflow-hidden bg-[#050506] lg:min-h-[100svh]">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={
          reduceMotion
            ? undefined
            : {
                background: [
                  "radial-gradient(ellipse at 80% 90%, rgba(183,28,40,0.32), transparent 55%)",
                  "radial-gradient(ellipse at 62% 70%, rgba(183,28,40,0.22), transparent 58%)",
                  "radial-gradient(ellipse at 88% 82%, rgba(183,28,40,0.34), transparent 52%)",
                  "radial-gradient(ellipse at 80% 90%, rgba(183,28,40,0.32), transparent 55%)",
                ],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#050506_0%,transparent_28%,transparent_72%,#050506_100%)]" />
      <HeroField />

      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
          animate={{ top: ["8%", "86%", "8%"] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {!reduceMotion &&
        snippets.map((s, i) => (
          <motion.p
            key={s.text}
            className="pointer-events-none absolute hidden font-mono text-[11px] tracking-wide text-accent/45 md:block lg:text-xs"
            style={{ top: s.top, right: s.right }}
            animate={{
              y: [0, i % 2 === 0 ? -16 : 16, 0],
              x: [0, i % 2 === 0 ? 8 : -8, 0],
              opacity: [0.15, 0.8, 0.15],
            }}
            transition={{ duration: 4.2 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}
          >
            {s.text}
          </motion.p>
        ))}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pt-[calc(5.4rem+env(safe-area-inset-top))] pb-6 sm:px-6 lg:min-h-[100svh] lg:justify-between lg:pt-36 lg:pb-10">
        <div className="flex max-w-3xl flex-col justify-center pt-1 sm:pt-4 lg:flex-1">
          <h1 className="font-display text-[clamp(1.4rem,6.2vw,5.8rem)] leading-[1.08] font-extrabold tracking-tight text-white sm:leading-[0.92]">
            <SplitText text="Being exposed" delay={0.08} />
            <span className="block">
              <SplitText text="is not your fault." delay={0.28} />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-3 font-display text-base tracking-tight text-accent sm:mt-6 sm:text-xl md:text-3xl"
          >
            {COMPANY.tagline}
          </motion.p>
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:gap-6 lg:mt-0 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid min-w-0 flex-1 grid-cols-2 items-stretch gap-2 sm:gap-3 md:flex md:overflow-x-auto md:pb-1">
            <div className="hidden shrink-0 grid-cols-4 gap-1 self-center lg:grid" aria-hidden>
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="h-1 w-1 rounded-full bg-white/35"
                  animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1.6, delay: i * 0.08, repeat: Infinity }}
                />
              ))}
            </div>
            {MAIN_SERVICES.map((service, i) => {
              const on = active === i;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  onMouseEnter={() => setActive(i)}
                  className={`flex min-w-0 items-center justify-between gap-2 rounded-md px-2.5 py-2.5 text-[12px] leading-snug font-medium transition sm:px-4 sm:py-4 sm:text-sm md:min-w-[180px] md:flex-1 md:px-5 md:py-5 ${
                    on
                      ? "bg-accent text-white"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  <span className="text-balance">{service.title}</span>
                  <span aria-hidden className="shrink-0">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="hidden shrink-0 text-right font-mono text-[10px] tracking-[0.22em] text-white/45 uppercase md:block">
            {COMPANY.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
