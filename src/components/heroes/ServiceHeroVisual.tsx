"use client";

import type { ServiceSceneId } from "@/lib/services";
import { motion, useReducedMotion } from "framer-motion";

export function ServiceHeroVisual({ scene }: { scene: ServiceSceneId }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#08080a] md:h-[340px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(183,28,40,0.16),transparent_65%)]" />
      {scene === "cyber" && <CyberVisual reduce={!!reduce} />}
      {scene === "software" && <SoftwareVisual reduce={!!reduce} />}
      {scene === "ai" && <AiVisual reduce={!!reduce} />}
      {scene === "data" && <DataVisual reduce={!!reduce} />}
    </div>
  );
}

function CyberVisual({ reduce }: { reduce: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="absolute h-44 w-44 rounded-full border border-accent/25"
        animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 3.2, repeat: Infinity }}
      />
      <motion.div
        className="absolute h-64 w-64 rounded-full border border-dashed border-white/15"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <svg viewBox="0 0 64 64" className="h-24 w-24 text-accent">
        <path
          d="M32 8l20 8v14c0 12-8 20-20 24C20 50 12 42 12 30V16l20-8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M24 32l6 6 12-12" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-accent"
            animate={{
              x: [90, 0],
              y: [-40 + i * 20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2.4, delay: i * 0.7, repeat: Infinity }}
          />
        ))}
      <p className="absolute bottom-6 font-mono text-[10px] tracking-[0.28em] text-muted uppercase">
        Threats neutralized
      </p>
    </div>
  );
}

function SoftwareVisual({ reduce }: { reduce: boolean }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-5 p-8">
      <motion.div
        className="h-40 w-[210px] overflow-hidden rounded-xl border border-white/12 bg-[#101014] shadow-2xl"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="flex gap-1 border-b border-white/8 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-accent/80" />
        </div>
        <div className="space-y-1.5 p-3 font-mono text-[10px] text-muted">
          <p>
            <span className="text-accent">const</span> app = ship()
          </p>
          <p>secure(api)</p>
          <motion.p
            animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            deploy → production
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        className="hidden h-48 w-[92px] rounded-[1.4rem] border border-white/12 bg-[#101014] p-2 md:block"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, delay: 0.3 }}
      >
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/20" />
        <div className="h-[85%] rounded-xl bg-white/[0.04] p-2">
          <div className="h-8 rounded-lg bg-accent/30" />
          <div className="mt-2 h-2 rounded bg-white/10" />
          <div className="mt-1 h-2 w-2/3 rounded bg-white/10" />
        </div>
      </motion.div>
    </div>
  );
}

function AiVisual({ reduce }: { reduce: boolean }) {
  const nodes = [0, 1, 2, 3, 4, 5];
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="h-24 w-24 rounded-full border border-accent/40 bg-accent/10"
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
      {nodes.map((i) => (
        <motion.span
          key={i}
          className="absolute h-2.5 w-2.5 rounded-full bg-accent"
          animate={
            reduce
              ? undefined
              : {
                  x: [0, Math.cos((i / 6) * Math.PI * 2) * 88],
                  y: [0, Math.sin((i / 6) * Math.PI * 2) * 88],
                  opacity: [0.35, 1, 0.35],
                }
          }
          transition={{ duration: 2.6, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}
      <span className="relative font-mono text-xs tracking-[0.3em] text-accent">AI</span>
    </div>
  );
}

function DataVisual({ reduce }: { reduce: boolean }) {
  const bars = [38, 62, 48, 86, 55, 94, 70];
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-2.5 px-10 pb-12">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-7 rounded-t-md bg-gradient-to-t from-accent/20 to-accent"
          initial={{ height: 12 }}
          animate={reduce ? { height: h } : { height: [h * 0.45, h, h * 0.7] }}
          transition={{ duration: 2.2, delay: i * 0.12, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}
      <motion.p
        className="absolute top-8 right-8 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] text-accent"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        +18% insight
      </motion.p>
    </div>
  );
}
