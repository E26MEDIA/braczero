"use client";

import { AnimatePresence, motion } from "framer-motion";
import { EASE_PREMIUM } from "./constants";

type Props = {
  visible: boolean;
  title: string;
};

export function ServiceTooltip({ visible, title }: Props) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
        className="pointer-events-none absolute -top-10 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent/30 bg-[#0a1018]/95 px-3 py-1.5 text-[11px] text-fg shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
        >
          <span className="text-muted">{title}</span>
          <span className="ml-2 text-accent">Explore →</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
