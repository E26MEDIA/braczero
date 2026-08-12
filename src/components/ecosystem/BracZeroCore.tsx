"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "./constants";

type Props = {
  pulse: boolean;
  active: boolean;
  reduceMotion: boolean;
  depthOffset: { x: number; y: number };
};

export function BracZeroCore({ pulse, active, reduceMotion, depthOffset }: Props) {
  return (
    <div
      className="eco-core absolute z-20"
      style={{ left: "50%", top: "44%", transform: "translate(-50%, -50%)" }}
    >
      <motion.div
        style={{ x: depthOffset.x, y: depthOffset.y }}
        className={`eco-core-inner ${pulse || active ? "eco-core-inner--lit" : ""}`}
        animate={
          reduceMotion
            ? { y: 0 }
            : pulse
              ? { y: depthOffset.y, scale: [1, 1.045, 1] }
              : { y: [depthOffset.y, depthOffset.y - 6, depthOffset.y], scale: 1 }
        }
        transition={
          pulse
            ? { duration: 0.55, ease: EASE_PREMIUM }
            : reduceMotion
              ? undefined
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div className="eco-core-glow" />
        <div className="eco-cube">
          <div className="eco-cube__face eco-cube__face--front">
            <span className="font-mono text-base font-semibold tracking-tight text-accent md:text-lg">
              &lt;/&gt;
            </span>
          </div>
          <div className="eco-cube__face eco-cube__face--right" />
          <div className="eco-cube__face eco-cube__face--top" />
        </div>
        <div className="eco-core-shadow" />
        <p className="eco-core-caption font-mono text-[9px] tracking-[0.22em] text-accent/80 uppercase">
          BracZero Core
        </p>
      </motion.div>
    </div>
  );
}
