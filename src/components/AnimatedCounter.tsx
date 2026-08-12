"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 22 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent =
        latest.toFixed(decimals) + suffix;
    });
    return unsubscribe;
  }, [decimals, spring, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  );
}
