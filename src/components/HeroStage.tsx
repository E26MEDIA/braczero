"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, useRef } from "react";

function IconWeb() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.5 2.8 2.5 9.2 0 12M12 4c-2.5 2.8-2.5 9.2 0 12" />
    </svg>
  );
}

function IconApps() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="3" width="12" height="18" rx="2.5" />
      <path d="M10 18h4" />
    </svg>
  );
}

function IconCyber() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9.5 12.2l1.8 1.8 3.4-3.6" />
    </svg>
  );
}

const satellites = [
  { id: "web", label: "Web", Icon: IconWeb, x: "6%", y: "56%", delay: 0.2 },
  { id: "apps", label: "Apps", Icon: IconApps, x: "70%", y: "54%", delay: 0.35 },
  { id: "cyber", label: "Cyber", Icon: IconCyber, x: "52%", y: "72%", delay: 0.5 },
];

export function HeroStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 100, damping: 18 });
  const sy = useSpring(my, { stiffness: 100, damping: 18 });

  function onMove(e: MouseEvent) {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 16);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * -10);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={stageRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-[4/5] w-full max-w-md md:max-w-none"
      aria-hidden
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b12] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
        <div className="hero-vgrid absolute inset-0 opacity-40" />

        <motion.div
          className="pointer-events-none absolute inset-x-[-20%] top-[44%] h-28 bg-[radial-gradient(ellipse_at_center,rgba(62,207,186,0.38),transparent_70%)] blur-2xl"
          animate={{ opacity: [0.4, 0.9, 0.4], x: ["-5%", "5%", "-5%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            className="absolute h-[56%] w-[56%] rounded-full border border-accent/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute h-[72%] w-[72%] rounded-full border border-dashed border-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Parallax isometric world */}
        <motion.div
          className="absolute inset-0"
          style={{ rotateX: sy, rotateY: sx, transformPerspective: 900 }}
        >
          <div className="absolute inset-0 flex items-center justify-center pt-10">
            <div className="iso-scene relative h-[70%] w-[78%]">
              <motion.div
                className="iso-plat iso-plat-lg absolute top-[40%] left-[16%]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="iso-plat iso-plat-md absolute top-[52%] left-[54%]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
              <motion.div
                className="iso-plat iso-plat-sm absolute top-[62%] left-[6%]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              />

              <motion.div
                className="absolute top-[8%] left-1/2 z-10 -translate-x-1/2"
                style={{ transform: "rotateZ(32deg) rotateX(-58deg) translateZ(40px)" }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div className="absolute -inset-10 rounded-full bg-accent/30 blur-2xl" />
                  <div className="code-cube relative">
                    <div className="cube-face cube-front">
                      <span className="font-mono text-lg font-semibold tracking-tight text-accent">
                        &lt;/&gt;
                      </span>
                    </div>
                    <div className="cube-face cube-right" />
                    <div className="cube-face cube-top" />
                  </div>
                  <motion.div
                    className="absolute -bottom-2 left-1/2 h-3 w-20 -translate-x-1/2 rounded-full bg-accent blur-md"
                    animate={{ opacity: [0.35, 1, 0.35], scaleX: [0.75, 1.2, 0.75] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Flat overlay: floating service chips */}
        {satellites.map((node) => (
          <motion.div
            key={node.id}
            className="absolute z-20"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 0.75 + node.delay, duration: 0.5 },
              scale: { delay: 0.75 + node.delay, duration: 0.5 },
              y: {
                duration: 3.8 + node.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              },
            }}
          >
            <div className="flex items-center gap-2 rounded-2xl border border-white/12 bg-[#0c121b]/92 px-3 py-2.5 text-accent shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <node.Icon />
              <span className="text-xs font-medium text-fg">{node.label}</span>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="absolute top-[9%] left-[8%] right-[8%] z-30 rounded-2xl border border-white/10 bg-[#0c121b]/88 p-5 backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest text-accent uppercase">
              Secure build
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
          </div>
          <p className="font-display text-2xl font-bold leading-tight">
            Code that ships.
            <br />
            Threats that don&apos;t.
          </p>
        </motion.div>

        <div className="absolute right-[8%] bottom-[7%] left-[8%] z-30 grid grid-cols-3 gap-2">
          {["01 Web", "02 Apps", "03 Cyber"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(62,207,186,0.55)" }}
              className="rounded-xl border border-white/10 bg-black/45 px-2 py-2.5 text-center backdrop-blur-sm"
            >
              <p className="font-mono text-[9px] tracking-wider text-muted">
                {label.split(" ")[0]}
              </p>
              <p className="mt-0.5 text-sm font-medium">{label.split(" ")[1]}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute -inset-10 -z-10 rounded-full bg-accent/15 blur-3xl" />
    </motion.div>
  );
}
