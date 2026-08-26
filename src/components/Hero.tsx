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
    <section id="top" className="relative h-[100dvh] overflow-hidden bg-[#050506] md:h-auto md:min-h-[100svh]">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={
          reduceMotion
            ? undefined
            : {
                background: [
                  "radial-gradient(ellipse at 50% 58%, rgba(183,28,40,0.42), transparent 58%)",
                  "radial-gradient(ellipse at 38% 48%, rgba(183,28,40,0.28), transparent 60%)",
                  "radial-gradient(ellipse at 62% 62%, rgba(183,28,40,0.4), transparent 55%)",
                  "radial-gradient(ellipse at 50% 58%, rgba(183,28,40,0.42), transparent 58%)",
                ],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#050506_0%,transparent_18%,transparent_78%,#050506_100%)] md:bg-[linear-gradient(180deg,#050506_0%,transparent_28%,transparent_72%,#050506_100%)]" />
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
            className={`pointer-events-none absolute font-mono text-[10px] tracking-wide text-accent/40 md:block md:text-[11px] lg:text-xs ${i > 2 ? "hidden md:block" : ""}`}
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

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-between px-4 pt-[calc(4.5rem+env(safe-area-inset-top))] pb-[calc(1rem+env(safe-area-inset-bottom))] sm:px-6 md:pt-36 md:pb-10">
        <div className="flex max-w-3xl flex-col pt-2 sm:pt-4 md:flex-1 md:justify-center">
          <h1 className="font-display text-[clamp(1.7rem,7.4vw,5.8rem)] leading-[1.08] font-extrabold tracking-tight text-white sm:leading-[0.92]">
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

        <div className="mt-auto flex shrink-0 flex-col gap-3 pt-8 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid min-w-0 grid-cols-2 items-stretch gap-2 sm:gap-3 md:flex md:overflow-x-auto md:pb-1">
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
                  className={`flex min-h-11 items-center justify-between gap-2 rounded-md px-3 py-2.5 text-[12px] leading-snug font-medium transition sm:min-h-0 sm:px-4 sm:py-4 sm:text-sm md:min-w-[180px] md:flex-1 md:px-5 md:py-5 ${
                    on
                      ? "bg-accent text-white"
                      : "border border-white/10 bg-white/[0.06] text-white hover:bg-white/10"
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
