"use client";

import { motion } from "framer-motion";
import { ProcessPipeline } from "./ProcessPipeline";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(183,28,40,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(124,92,255,0.05),transparent_50%)]" />

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
            <h2 className="mt-4 max-w-lg font-display text-3xl font-bold tracking-tight md:text-5xl">
              A process built for clarity and control.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            Inspired by how elite security teams think—diagnose, prove, document,
            improve—applied to every product we ship.
          </p>
        </motion.div>

        <div className="mt-14">
          <ProcessPipeline />
        </div>
      </div>
    </section>
  );
}
