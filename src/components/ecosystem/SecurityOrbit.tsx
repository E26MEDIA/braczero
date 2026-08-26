"use client";

import { motion } from "framer-motion";

type Props = {
  brighter: boolean;
  reduceMotion: boolean;
  mobile: boolean;
};

export function SecurityOrbit({ brighter, reduceMotion, mobile }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
      <motion.div
        className={`eco-orbit relative ${brighter ? "eco-orbit--bright" : ""}`}
        style={{
          width: mobile ? "78%" : "86%",
          aspectRatio: "1",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 26, repeat: Infinity, ease: "linear" }
        }
      >
        <div className="absolute inset-0 rounded-full border border-accent/20" />
        <div className="absolute inset-[7%] rounded-full border border-dashed border-violet-400/15" />

        {!reduceMotion && (
          <>
            <span className="eco-orbit-dot absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(183,28,40,0.8)]" />
            {!mobile && (
              <span className="eco-orbit-dot absolute bottom-[12%] right-[8%] h-1 w-1 rounded-full bg-accent/80 shadow-[0_0_8px_rgba(183,28,40,0.7)]" />
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
