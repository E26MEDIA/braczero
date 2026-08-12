"use client";

import { motion } from "framer-motion";

type IconProps = { className?: string };

function IconShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? "h-3.5 w-3.5"} fill="none" aria-hidden>
      {children}
    </svg>
  );
}

const icons: Record<string, (p: IconProps) => React.ReactNode> = {
  "Next.js": ({ className }) => (
    <IconShell className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 16V8l8 8V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  ),
  React: ({ className }) => (
    <IconShell className={className}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.3" transform="rotate(-60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.3" />
    </IconShell>
  ),
  TypeScript: ({ className }) => (
    <IconShell className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10.5h8M12 10.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconShell>
  ),
  "Tailwind CSS": ({ className }) => (
    <IconShell className={className}>
      <path
        d="M4.5 13c2-5 4.5-7.5 7.5-7.5 2.2 0 3.8 1.2 5.5 2.5 1.2.9 2.3 1.5 3.5 1.5-2 5-4.5 7.5-7.5 7.5-2.2 0-3.8-1.2-5.5-2.5-1.2-.9-2.3-1.5-3.5-1.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </IconShell>
  ),
  "Headless CMS": ({ className }) => (
    <IconShell className={className}>
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 9h16M9 9v10" stroke="currentColor" strokeWidth="1.5" />
    </IconShell>
  ),
  "Vercel / cloud hosts": ({ className }) => (
    <IconShell className={className}>
      <path d="M12 5l8 14H4L12 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </IconShell>
  ),
  Analytics: ({ className }) => (
    <IconShell className={className}>
      <path d="M5 19V11M10 19V7M15 19v-5M20 19V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </IconShell>
  ),
  "A/B testing": ({ className }) => (
    <IconShell className={className}>
      <circle cx="8" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.2 12h1.6" stroke="currentColor" strokeWidth="1.5" />
    </IconShell>
  ),
  "React Native": ({ className }) => (
    <IconShell className={className}>
      <rect x="7" y="3.5" width="10" height="17" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      <path d="M10 17.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  ),
  Flutter: ({ className }) => (
    <IconShell className={className}>
      <path d="M14 4L6 12l3 3 11-11H14zM9 15l3 3 3-3-3-3-3 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </IconShell>
  ),
  "Swift / Kotlin": ({ className }) => (
    <IconShell className={className}>
      <path d="M5 16c4-1 7-4 9-8l5-4-6 12c-1.5 2.5-4 4-7 4H5v-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </IconShell>
  ),
  "Node.js": ({ className }) => (
    <IconShell className={className}>
      <path d="M12 3.5l7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8L12 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  ),
  PostgreSQL: ({ className }) => (
    <IconShell className={className}>
      <ellipse cx="12" cy="7" rx="6.5" ry="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 7v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V7M5.5 12v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5" stroke="currentColor" strokeWidth="1.4" />
    </IconShell>
  ),
  Firebase: ({ className }) => (
    <IconShell className={className}>
      <path d="M6 17.5L10 4l3 7 2-3 3 9.5H6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </IconShell>
  ),
  "AWS / GCP": ({ className }) => (
    <IconShell className={className}>
      <path d="M6 15c-1.5 0-2.5-1.2-2.5-2.6S4.5 10 6 10c.3-2.2 2.2-3.8 4.5-3.8 2 0 3.7 1.2 4.3 3 .4-.2.8-.3 1.2-.3 1.6 0 2.8 1.3 2.8 2.9S17.6 15 16 15H6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </IconShell>
  ),
  "CI/CD": ({ className }) => (
    <IconShell className={className}>
      <circle cx="7" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9.5 12h5M17 9.5V7M17 17v-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  ),
  OWASP: ({ className }) => (
    <IconShell className={className}>
      <path d="M12 3.5l7 2.8v5.2c0 4.2-2.8 7.1-7 8.7-4.2-1.6-7-4.5-7-8.7V6.3L12 3.5z" stroke="currentColor" strokeWidth="1.5" />
    </IconShell>
  ),
  "NIST / ISO aligned": ({ className }) => (
    <IconShell className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  ),
  "Burp Suite": ({ className }) => (
    <IconShell className={className}>
      <path d="M5 8h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8V6.5A4 4 0 0112 2.5a4 4 0 014 4V8" stroke="currentColor" strokeWidth="1.5" />
    </IconShell>
  ),
  Nmap: ({ className }) => (
    <IconShell className={className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  ),
  "Cloud security posture": ({ className }) => (
    <IconShell className={className}>
      <path d="M7 16c-1.7 0-3-1.3-3-3s1.2-2.9 2.8-3C7.2 7.5 9.2 6 11.5 6c2.8 0 5.1 2 5.4 4.6 1.6.2 2.9 1.5 2.9 3.2 0 1.8-1.5 3.2-3.3 3.2H7z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 11v3M12 15.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconShell>
  ),
  "SIEM / SOC": ({ className }) => (
    <IconShell className={className}>
      <rect x="3.5" y="5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 17.5l-1.5 2.5M17 17.5l1.5 2.5M8 9.5h8M8 13h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  ),
  "Zero-trust": ({ className }) => (
    <IconShell className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </IconShell>
  ),
  DevSecOps: ({ className }) => (
    <IconShell className={className}>
      <path d="M7 8a4 4 0 014-3h1a4 4 0 010 8h-1a4 4 0 01-4-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 16a4 4 0 01-4 3h-1a4 4 0 010-8h1a4 4 0 014 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  ),
};

function FallbackIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconShell>
  );
}

export function TechStack({ items }: { items: string[] }) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-8">
      {items.map((t, i) => {
        const Icon = icons[t] ?? FallbackIcon;
        return (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -3 }}
            className="flex flex-col items-center gap-2.5 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-accent/40 hover:bg-accent/10">
              <Icon className="h-5 w-5" />
            </span>
            <span className="max-w-[5.5rem] text-[11px] leading-tight text-muted">{t}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
