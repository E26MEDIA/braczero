"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ServiceModuleConfig, ServiceId } from "./constants";
import { EASE_PREMIUM } from "./constants";
import { IconApps, IconCyber, IconWeb } from "./ServiceIcons";
import { ServiceTooltip } from "./ServiceTooltip";

type Props = {
  config: ServiceModuleConfig;
  activeId: ServiceId | null;
  cyberPulse: boolean;
  reduceMotion: boolean;
  depthOffset: { x: number; y: number };
  onFocus: (id: ServiceId | null) => void;
};

/** Positions clear of the quote banner (top band) and evenly around the core */
const POSITIONS: Record<ServiceId, { left: string; top: string }> = {
  web: { left: "72%", top: "28%" },
  apps: { left: "14%", top: "62%" },
  cyber: { left: "72%", top: "62%" },
};

export function ServiceModule({
  config,
  activeId,
  cyberPulse,
  reduceMotion,
  depthOffset,
  onFocus,
}: Props) {
  const isActive = activeId === config.id;
  const dimmed = activeId !== null && !isActive;
  const cyberBoost = config.id === "cyber" && cyberPulse;
  const raised = isActive || cyberBoost;

  const Icon =
    config.id === "web" ? IconWeb : config.id === "apps" ? IconApps : IconCyber;

  return (
    <motion.div
      className="absolute z-30"
      style={{
        left: POSITIONS[config.id].left,
        top: POSITIONS[config.id].top,
        x: depthOffset.x,
        y: depthOffset.y,
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <ServiceTooltip visible={isActive} title={config.secondary} />

        <motion.div
          animate={{
            y: reduceMotion ? 0 : raised ? -8 : 0,
            opacity: dimmed ? 0.4 : 1,
          }}
          transition={{ duration: 0.45, ease: EASE_PREMIUM }}
          className="flex flex-col items-center"
        >
          <Link
            href={config.href}
            aria-label={config.ariaLabel}
            className={`eco-node group focus-visible:outline-none ${
              config.id === "cyber" ? "eco-node--cyber" : ""
            } ${raised ? "eco-node--active" : ""} ${dimmed ? "eco-node--dim" : ""}`}
            onMouseEnter={() => onFocus(config.id)}
            onMouseLeave={() => onFocus(null)}
            onFocus={() => onFocus(config.id)}
            onBlur={() => onFocus(null)}
          >
            <span className="eco-node__ring" aria-hidden />
            <span className="eco-node__disc">
              <Icon active={isActive} dimmed={dimmed} emphasize={cyberBoost} />
            </span>
          </Link>
          <span
            className={`mt-2.5 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors ${
              raised ? "text-accent" : "text-muted"
            }`}
          >
            {config.label}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
