"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ServiceSceneId } from "@/lib/services";

type Props = { scene: ServiceSceneId };

export function ServiceScene({ scene }: Props) {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto mb-4 h-[220px] w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070b12] md:h-[260px]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(183,28,40,0.12),transparent_65%)]" />
      </div>
      <div className={reduce ? "[&_*]:!animate-none" : undefined}>
        {scene === "software" && <AppScene />}
        {scene === "cyber" && <CyberScene />}
        {scene === "data" && <MarketingScene />}
        {scene === "ai" && <AiScene />}
      </div>
    </div>
  );
}

function WebsiteScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <motion.div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-white/12 bg-[#0c121b] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-accent/70" />
          <span className="ml-3 h-2 flex-1 rounded-full bg-white/8" />
        </div>
        <div className="grid grid-cols-3 gap-2 p-4">
          <motion.div
            className="col-span-2 h-20 rounded-lg bg-accent/15"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity }}
          />
          <div className="space-y-2">
            <div className="h-6 rounded bg-white/8" />
            <div className="h-6 rounded bg-white/8" />
            <div className="h-6 rounded bg-white/8" />
          </div>
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-10 rounded-md border border-white/8 bg-white/[0.03]"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.4, delay: i * 0.25, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function AppScene() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-6 pb-8">
      <motion.div
        className="h-44 w-24 rounded-[1.4rem] border border-white/15 bg-[#0c121b] p-2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/20" />
        <div className="h-full space-y-2 rounded-xl bg-white/[0.04] p-2">
          <div className="h-8 rounded-lg bg-accent/25" />
          <div className="h-3 rounded bg-white/10" />
          <div className="h-3 w-2/3 rounded bg-white/10" />
          <motion.div
            className="mt-4 h-8 rounded-full bg-accent/40"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
      <motion.div
        className="hidden h-36 w-52 rounded-2xl border border-white/10 bg-[#0c121b] p-4 md:block"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <p className="font-mono text-[10px] tracking-widest text-accent uppercase">Push · Live</p>
        <div className="mt-3 space-y-2">
          {["Auth", "API", "Realtime"].map((item, i) => (
            <div key={item} className="flex items-center justify-between text-xs text-muted">
              <span>{item}</span>
              <motion.span
                className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10"
                initial={false}
              >
                <motion.span
                  className="block h-full bg-accent"
                  animate={{ width: ["30%", "90%", "55%"] }}
                  transition={{ duration: 3 + i, repeat: Infinity }}
                />
              </motion.span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function CyberScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="absolute h-40 w-40 rounded-full border border-accent/20"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      <motion.div
        className="absolute h-56 w-56 rounded-full border border-dashed border-accent/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.svg
        viewBox="0 0 64 64"
        className="h-20 w-20 text-accent"
        animate={{ filter: ["drop-shadow(0 0 6px rgba(183,28,40,0.4))", "drop-shadow(0 0 16px rgba(183,28,40,0.8))", "drop-shadow(0 0 6px rgba(183,28,40,0.4))"] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <path
          d="M32 8l20 8v14c0 12-8 20-20 24-12-4-20-12-20-24V16l20-8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M24 32l6 6 12-12" fill="none" stroke="currentColor" strokeWidth="2" />
      </motion.svg>
      <motion.span
        className="absolute h-2 w-2 rounded-full bg-red-400/80"
        animate={{ x: [-80, 0], y: [-20, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.2 }}
      />
    </div>
  );
}

function MarketingScene() {
  const bars = [40, 62, 48, 78, 55, 88];
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-3 px-10 pb-10">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-8 rounded-t-md bg-gradient-to-t from-accent/20 to-accent"
          initial={{ height: 16 }}
          animate={{ height: h }}
          transition={{ duration: 1.4, delay: i * 0.12, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
        />
      ))}
      <motion.div
        className="absolute top-8 right-10 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] text-accent"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        +24% pipeline
      </motion.div>
    </div>
  );
}

function BrandingScene() {
  const swatches = ["#b71c28", "#f2f5f8", "#e8c07a", "#7c5cff", "#0c1018"];
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-6">
      <motion.div
        className="font-display text-6xl font-extrabold tracking-tight md:text-7xl"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        Aa
      </motion.div>
      <div className="flex gap-2">
        {swatches.map((color, i) => (
          <motion.span
            key={color}
            className="h-16 w-10 rounded-full border border-white/10"
            style={{ background: color }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.2, delay: i * 0.12, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

function UiUxScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-4 p-6">
      {["Wire", "Flow", "UI"].map((label, i) => (
        <motion.div
          key={label}
          className="w-32 rounded-2xl border border-white/10 bg-[#0c121b] p-3"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
        >
          <p className="mb-2 font-mono text-[10px] text-accent">{label}</p>
          <div className="space-y-1.5">
            <div className="h-8 rounded bg-white/8" />
            <div className="h-2 rounded bg-white/10" />
            <div className="h-2 w-2/3 rounded bg-white/10" />
            <motion.div
              className="h-6 rounded-full bg-accent/30"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, delay: i * 0.2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CloudScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {["CI", "Build", "Deploy"].map((node, i) => (
        <motion.div
          key={node}
          className="mx-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 font-mono text-xs text-accent"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.2, delay: i * 0.25, repeat: Infinity }}
        >
          {node}
        </motion.div>
      ))}
      <motion.div
        className="absolute top-1/2 left-[22%] right-[22%] h-px origin-left bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{ opacity: [0.2, 0.9, 0.2], scaleX: [0.6, 1, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
    </div>
  );
}

function ConsultingScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="grid w-full max-w-md grid-cols-2 gap-3">
        {["Roadmap", "Stack", "Vendors", "Risk"].map((item, i) => (
          <motion.div
            key={item}
            className="rounded-xl border border-white/10 bg-[#0c121b] px-4 py-4"
            animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(183,28,40,0.45)", "rgba(255,255,255,0.1)"] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
          >
            <p className="font-mono text-[10px] text-muted">0{i + 1}</p>
            <p className="mt-1 text-sm font-medium">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AiScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="h-24 w-24 rounded-full border border-accent/40 bg-accent/10"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.span
          key={i}
          className="absolute h-2.5 w-2.5 rounded-full bg-accent"
          animate={{
            x: [0, Math.cos((i / 6) * Math.PI * 2) * 70],
            y: [0, Math.sin((i / 6) * Math.PI * 2) * 70],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 2.8, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}
      <span className="relative font-mono text-xs tracking-widest text-accent">AI</span>
    </div>
  );
}
