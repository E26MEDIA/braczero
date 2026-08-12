"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "Product engineering",
    items: ["SaaS platforms", "E-commerce", "Internal tools", "API backends"],
  },
  {
    title: "Security practice",
    items: ["VAPT", "Cloud hardening", "Compliance readiness", "Secure code review"],
  },
  {
    title: "Experience design",
    items: ["Brand systems", "Motion UI", "Design ops", "Conversion UX"],
  },
];

const stats = [
  { value: 40, suffix: "+", label: "Products shipped", decimals: 0 },
  { value: 120, suffix: "+", label: "Security assessments", decimals: 0 },
  { value: 99.9, suffix: "%", label: "Uptime targets met", decimals: 1 },
  { value: 24, suffix: "/7", label: "Incident readiness", decimals: 0 },
];

export function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 80, damping: 20 });
  const smy = useSpring(my, { stiffness: 80, damping: 20 });
  const glowX = useTransform(smx, [0, 1], ["10%", "90%"]);
  const glowY = useTransform(smy, [0, 1], ["20%", "80%"]);

  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Full-stack delivery with a security spine.
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          onMouseMove={(e) => {
            const rect = ref.current?.getBoundingClientRect();
            if (!rect) return;
            mx.set((e.clientX - rect.left) / rect.width);
            my.set((e.clientY - rect.top) / rect.height);
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d14] p-8 md:p-12"
        >
          <motion.div
            className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
            style={{ left: glowX, top: glowY }}
          />

          <div className="relative grid gap-10 md:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h3 className="font-display text-xl font-bold">{cap.title}</h3>
                <ul className="mt-5 space-y-3">
                  {cap.items.map((item, j) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 6, color: "#3ecfba" }}
                      className="cursor-default border-b border-white/10 pb-3 text-sm text-muted last:border-0"
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      style={{ transitionDelay: `${j * 20}ms` }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <p className="font-display text-3xl font-bold text-accent md:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
