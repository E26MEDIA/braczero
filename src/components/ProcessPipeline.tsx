"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const steps = [
  {
    id: "01",
    title: "Discover",
    copy: "We map your product goals, threat surface, and constraints before a single line of code ships.",
    signal: "Surface mapped",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Design & Build",
    copy: "Interfaces and systems crafted together—prototype, iterate, and deliver with engineering rigor.",
    signal: "Systems shipping",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 12v8M4 8l8 4 8-4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Harden",
    copy: "Security is baked in: reviews, testing, and hardening so launch day isn’t a gamble.",
    signal: "Threats blocked",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M12 3.5l7 2.8v5.2c0 4.2-2.8 7.1-7 8.7-4.2-1.6-7-4.5-7-8.7V6.3L12 3.5z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M9.5 12l1.8 1.8 3.4-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Operate",
    copy: "Ongoing monitoring, iterations, and advisory keep you resilient as the business scales.",
    signal: "Live & monitored",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path d="M4 13h3l2-5 3 10 2-5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  showFooterLink?: boolean;
};

export function ProcessPipeline({ showFooterLink = true }: Props) {
  const reduceMotion = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % steps.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  const current = steps[active];

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d14]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
          }}
        />
      </div>

      <div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative border-b border-white/10 p-7 md:p-10 lg:border-r lg:border-b-0">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
              Delivery pipeline
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease }}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                  {current.icon}
                </span>
                <div>
                  <p className="font-mono text-sm text-accent/70">{current.id}</p>
                  <h3 className="mt-1 font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {current.title}
                  </h3>
                </div>
              </div>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {current.copy}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  {!reduceMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  )}
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[10px] tracking-wider text-accent uppercase">
                  {current.signal}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 hidden lg:block">
            <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent/40 via-accent to-accent/70"
                animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5, ease }}
              />
              {!reduceMotion && (
                <motion.span
                  className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(183,28,40,0.9)]"
                  animate={{ left: `calc(${((active + 1) / steps.length) * 100}% - 4px)` }}
                  transition={{ duration: 0.5, ease }}
                />
              )}
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] tracking-wider text-muted uppercase">
              <span>Intake</span>
              <span>Secure ops</span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 p-5 md:p-7">
          {steps.map((step, index) => {
            const isActive = index === active;
            return (
              <motion.button
                key={step.id}
                type="button"
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-pressed={isActive}
                aria-label={`Process step ${step.id}: ${step.title}`}
                className={`group relative overflow-hidden rounded-2xl border px-4 py-4 text-left transition-colors duration-500 md:px-5 ${
                  isActive
                    ? "border-accent/45 bg-accent/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.35, ease }}
              >
                {isActive && (
                  <motion.span
                    layoutId="process-active-glow"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/15 via-transparent to-violet-500/10"
                    transition={{ duration: 0.4, ease }}
                  />
                )}

                <div className="relative flex items-center gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                      isActive
                        ? "border-accent/40 bg-accent/15 text-accent"
                        : "border-white/10 bg-black/30 text-muted group-hover:text-fg"
                    }`}
                  >
                    {step.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs ${isActive ? "text-accent" : "text-muted"}`}>
                        {step.id}
                      </span>
                      <h4
                        className={`truncate font-display text-lg font-bold ${
                          isActive ? "text-fg" : "text-fg/80"
                        }`}
                      >
                        {step.title}
                      </h4>
                    </div>
                    <p className={`mt-1 line-clamp-1 text-sm ${isActive ? "text-muted" : "text-muted/70"}`}>
                      {step.copy}
                    </p>
                  </div>
                  <span
                    className={`hidden h-2 w-2 shrink-0 rounded-full sm:block ${
                      isActive ? "bg-accent shadow-[0_0_10px_rgba(183,28,40,0.8)]" : "bg-white/15"
                    }`}
                  />
                </div>

                {isActive && !reduceMotion && (
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3.6, ease: "linear" }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 px-7 py-5 md:flex-row md:items-center md:px-10">
        <p className="text-sm text-muted">
          Same pipeline on every engagement—build and security move as one system.
        </p>
        {showFooterLink ? (
          <Link href="/process" className="text-sm text-accent transition hover:brightness-125">
            Full process →
          </Link>
        ) : (
          <Link href="/contact" className="text-sm text-accent transition hover:brightness-125">
            Book a call →
          </Link>
        )}
      </div>
    </div>
  );
}
