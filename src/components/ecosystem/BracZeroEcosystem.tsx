"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BracZeroCore } from "./BracZeroCore";
import { ConnectionPath } from "./ConnectionPath";
import { SERVICE_MODULES, type ServiceId, EASE_PREMIUM } from "./constants";
import { SecurityOrbit } from "./SecurityOrbit";
import { ServiceModule } from "./ServiceModule";

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return mobile;
}

export function BracZeroEcosystem() {
  const reduceMotion = useReducedMotion() ?? false;
  const mobile = useIsMobile();
  const [activeId, setActiveId] = useState<ServiceId | null>(null);
  const [ready, setReady] = useState(false);
  const [cyberPulse, setCyberPulse] = useState(false);
  const [threatVisible, setThreatVisible] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 22, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 90, damping: 22, mass: 0.4 });
  const platformX = useSpring(mx, { stiffness: 85, damping: 20 });
  const platformY = useSpring(my, { stiffness: 85, damping: 20 });
  const bgX = useSpring(mx, { stiffness: 50, damping: 28 });
  const bgY = useSpring(my, { stiffness: 50, damping: 28 });

  const [coreDepth, setCoreDepth] = useState({ x: 0, y: 0 });
  const [modDepth, setModDepth] = useState({ x: 0, y: 0 });
  const [platDepth, setPlatDepth] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (reduceMotion || mobile) return;

    let cancelled = false;
    let timer: number;

    const run = () => {
      const delay = 8000 + Math.random() * 4000;
      timer = window.setTimeout(() => {
        if (cancelled) return;
        setThreatVisible(true);
        window.setTimeout(() => {
          if (cancelled) return;
          setCyberPulse(true);
          setThreatVisible(false);
          window.setTimeout(() => {
            if (cancelled) return;
            setCyberPulse(false);
            run();
          }, 700);
        }, 1400);
      }, delay);
    };

    run();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [reduceMotion, mobile]);

  useEffect(() => {
    if (mobile || reduceMotion) {
      setCoreDepth({ x: 0, y: 0 });
      setModDepth({ x: 0, y: 0 });
      setPlatDepth({ x: 0, y: 0 });
      return;
    }
    const unsubX = sx.on("change", (v) => {
      setPlatDepth((d) => ({ ...d, x: v * 0.35 }));
      setModDepth((d) => ({ ...d, x: v * 0.55 }));
      setCoreDepth((d) => ({ ...d, x: v * 0.7 }));
    });
    const unsubY = sy.on("change", (v) => {
      setPlatDepth((d) => ({ ...d, y: v * 0.35 }));
      setModDepth((d) => ({ ...d, y: v * 0.55 }));
      setCoreDepth((d) => ({ ...d, y: v * 0.7 }));
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [sx, sy, mobile, reduceMotion]);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (mobile || reduceMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(px * 10);
      my.set(py * 8);
    },
    [mobile, reduceMotion, mx, my],
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
    setActiveId(null);
  }, [mx, my]);

  return (
    <motion.div
      className="relative mx-auto aspect-[4/5] w-full max-w-md md:max-w-none"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.2, ease: EASE_PREMIUM }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      role="region"
      aria-label="BracZero technology and security ecosystem. Tab to Web, Apps, and Cybersecurity modules."
    >
      <div className="eco-stage absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b12] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={
            mobile || reduceMotion
              ? {
                  background: `
                    radial-gradient(ellipse 55% 40% at 50% 38%, rgba(62,207,186,0.14), transparent 60%),
                    radial-gradient(ellipse 40% 35% at 78% 70%, rgba(124,92,255,0.08), transparent 55%)
                  `,
                }
              : {
                  x: bgX,
                  y: bgY,
                  background: `
                    radial-gradient(ellipse 55% 40% at 48% 38%, rgba(62,207,186,0.14), transparent 60%),
                    radial-gradient(ellipse 40% 35% at 78% 70%, rgba(124,92,255,0.08), transparent 55%),
                    radial-gradient(ellipse 50% 40% at 20% 75%, rgba(62,207,186,0.05), transparent 50%)
                  `,
                }
          }
        />
        <div className="eco-stage-grid pointer-events-none absolute inset-0" />

        <SecurityOrbit
          brighter={cyberPulse || activeId === "cyber"}
          reduceMotion={reduceMotion}
          mobile={mobile}
        />

        <motion.div
          className={`eco-platform ${ready ? "eco-platform--ready" : ""}`}
          style={{
            x: mobile || reduceMotion ? 0 : platformX,
            y: mobile || reduceMotion ? 0 : platformY,
          }}
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={
            reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <div
            className="eco-platform__top"
            style={{ transform: `translate(${platDepth.x}px, ${platDepth.y}px)` }}
          >
            <div className="eco-platform__inset" />
            <div className="eco-platform__edge" />
          </div>
          <div className="eco-platform__side" />
          <div className="eco-platform__shadow" />
        </motion.div>

        <div className="absolute inset-0">
          <ConnectionPath
            activeId={activeId}
            cyberPulse={cyberPulse}
            reduceMotion={reduceMotion || mobile}
          />
        </div>

        {!reduceMotion && !mobile && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute z-10 h-1.5 w-1.5 rounded-full bg-violet-300/80 shadow-[0_0_8px_rgba(167,139,250,0.7)]"
            initial={false}
            animate={
              threatVisible
                ? { left: ["12%", "42%"], top: ["30%", "44%"], opacity: [0, 0.9, 0] }
                : { opacity: 0, left: "12%", top: "30%" }
            }
            transition={{ duration: 1.35, ease: "easeInOut" }}
          />
        )}

        <BracZeroCore
          pulse={cyberPulse}
          active={activeId !== null}
          reduceMotion={reduceMotion}
          depthOffset={coreDepth}
        />

        {SERVICE_MODULES.map((mod) => (
          <ServiceModule
            key={mod.id}
            config={mod}
            activeId={activeId}
            cyberPulse={cyberPulse}
            reduceMotion={reduceMotion}
            depthOffset={modDepth}
            onFocus={setActiveId}
          />
        ))}

        <motion.div
          className="pointer-events-none absolute top-[5%] left-[6%] z-20 max-w-[78%] rounded-2xl border border-white/10 bg-[#0c121b]/90 px-4 py-3 backdrop-blur-xl md:max-w-[70%] md:px-5 md:py-3.5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.65, ease: EASE_PREMIUM }}
        >
          <div className="mb-2 flex items-center justify-between gap-4">
            <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase md:text-[10px]">
              Secure build
            </span>
            <span className="relative flex h-2 w-2 shrink-0">
              {!reduceMotion && (
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
          </div>
          <p className="font-display text-lg font-bold leading-tight md:text-xl">
            Code that ships.
            <br />
            Threats that don&apos;t.
          </p>
        </motion.div>

        <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center font-mono text-[9px] tracking-[0.18em] text-muted/70 uppercase">
          Interactive service ecosystem
        </p>
      </div>

      <div className="absolute -inset-10 -z-10 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-6 bottom-10 -z-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
    </motion.div>
  );
}
