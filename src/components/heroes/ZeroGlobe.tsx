"use client";

import { MAIN_SERVICES } from "@/lib/services";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";

function fibonacciSphere(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = Math.PI * (3 - Math.sqrt(5)) * i;
    return {
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
    };
  });
}

export function ZeroGlobe() {
  const reduce = useReducedMotion();
  const dots = useMemo(() => fibonacciSphere(64), []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(183,28,40,0.22),transparent_62%)] blur-2xl" />

      <motion.div
        className="absolute inset-[12%] rounded-full border border-white/10"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[4%] rounded-full border border-accent/20"
        style={{ transform: "rotateX(68deg)" }}
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[18%] rounded-full border border-dashed border-white/15"
        style={{ transform: "rotateX(72deg) rotateZ(20deg)" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 [perspective:900px]">
        <motion.div
          className="absolute inset-[16%] [transform-style:preserve-3d]"
          animate={reduce ? undefined : { rotateY: 360, rotateX: [12, 18, 12] }}
          transition={{
            rotateY: { duration: 22, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {dots.map((d, i) => (
            <span
              key={i}
              className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/55"
              style={{
                transform: `translate3d(${d.x * 150}px, ${d.y * 150}px, ${d.z * 150}px)`,
                opacity: 0.25 + (d.z + 1) * 0.35,
                background:
                  d.z > 0.35 ? "rgba(183,28,40,0.95)" : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative grid h-36 w-36 place-items-center rounded-full border border-accent/40 bg-[#0a0a0c]/80 shadow-[0_0_50px_rgba(183,28,40,0.35)] backdrop-blur-md md:h-40 md:w-40">
          <span className="pulse-ring absolute inset-0 rounded-full bg-accent/30" />
          <span className="font-display text-6xl font-extrabold tracking-tight text-accent md:text-7xl">
            Ø
          </span>
        </div>
      </div>

      {!reduce && (
        <motion.div
          className="absolute top-[14%] right-[8%] left-[8%] h-px bg-gradient-to-r from-transparent via-accent to-transparent"
          animate={{ y: [0, 280, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {MAIN_SERVICES.map((service, i) => {
        const pos = [
          "top-[6%] left-1/2 -translate-x-1/2",
          "top-1/2 right-0 -translate-y-1/2",
          "bottom-[6%] left-1/2 -translate-x-1/2",
          "top-1/2 left-0 -translate-y-1/2",
        ][i];
        return (
          <Link
            key={service.href}
            href={service.href}
            className={`absolute ${pos} z-10 rounded-full border border-white/12 bg-black/70 px-3 py-1.5 font-mono text-[10px] tracking-widest text-fg uppercase backdrop-blur-md transition hover:border-accent/60 hover:text-accent`}
          >
            {service.short}
          </Link>
        );
      })}

      <motion.div
        className="absolute top-[18%] left-[2%] hidden rounded-xl border border-white/10 bg-black/70 px-3 py-2 font-mono text-[10px] text-muted backdrop-blur md:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        SURFACE <span className="text-accent">SECURE</span>
      </motion.div>
      <motion.div
        className="absolute right-[2%] bottom-[22%] hidden rounded-xl border border-white/10 bg-black/70 px-3 py-2 font-mono text-[10px] text-muted backdrop-blur md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        MODELS <span className="text-accent">ONLINE</span>
      </motion.div>
    </div>
  );
}
