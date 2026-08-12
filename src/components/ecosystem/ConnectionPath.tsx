"use client";

import type { ServiceId } from "./constants";

type Props = {
  activeId: ServiceId | null;
  cyberPulse: boolean;
  reduceMotion: boolean;
};

/** Paths match round-node layout: WEB top-right, APPS bottom-left, CYBER bottom-right → core center */
export function ConnectionPath({ activeId, cyberPulse, reduceMotion }: Props) {
  const paths: { id: ServiceId; d: string }[] = [
    { id: "web", d: "M 288 90 C 260 115, 230 140, 200 155" },
    { id: "apps", d: "M 56 198 C 100 185, 150 170, 200 160" },
    { id: "cyber", d: "M 288 198 C 255 185, 225 170, 210 162" },
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 400 320"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="eco-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(62,207,186,0.05)" />
          <stop offset="50%" stopColor="rgba(62,207,186,0.55)" />
          <stop offset="100%" stopColor="rgba(62,207,186,0.08)" />
        </linearGradient>
        <filter id="eco-glow">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {paths.map((p) => {
        const strong = activeId === p.id || (p.id === "cyber" && cyberPulse);
        const dim =
          activeId !== null && activeId !== p.id && !(p.id === "cyber" && cyberPulse);

        return (
          <g key={p.id}>
            <path
              d={p.d}
              stroke="url(#eco-line)"
              strokeWidth={strong ? 1.6 : 1}
              strokeLinecap="round"
              filter={strong ? "url(#eco-glow)" : undefined}
              opacity={dim ? 0.18 : strong ? 1 : 0.42}
              style={{ transition: "opacity 0.45s ease, stroke-width 0.45s ease" }}
            />
            {!reduceMotion && (
              <circle
                r={strong ? 2.2 : 1.5}
                fill="#3ecfba"
                opacity={dim ? 0 : strong ? 0.95 : 0.5}
                filter={strong ? "url(#eco-glow)" : undefined}
              >
                <animateMotion
                  dur={strong ? "2.2s" : "4.8s"}
                  repeatCount="indefinite"
                  path={p.d}
                />
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}
