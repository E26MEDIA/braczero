import type { ReactNode } from "react";
import { COMPANY } from "@/lib/company";

const icons: Record<(typeof COMPANY.socials)[number]["id"], ReactNode> = {
  linkedin: (
    <path d="M6.5 9.5H9.2v8.8H6.5V9.5zM7.85 5.2a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zM11 9.5h2.55v1.2h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.1v4.9H16.6v-4.35c0-1.04-.02-2.37-1.45-2.37-1.45 0-1.67 1.13-1.67 2.3v4.42H11V9.5z" />
  ),
  instagram: (
    <path d="M8.2 4.8h7.6A3.4 3.4 0 0119.2 8.2v7.6a3.4 3.4 0 01-3.4 3.4H8.2A3.4 3.4 0 014.8 15.8V8.2A3.4 3.4 0 018.2 4.8zm7.6 1.5H8.2a1.9 1.9 0 00-1.9 1.9v7.6a1.9 1.9 0 001.9 1.9h7.6a1.9 1.9 0 001.9-1.9V8.2a1.9 1.9 0 00-1.9-1.9zM12 8.4a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2zm0 1.5a2.1 2.1 0 100 4.2 2.1 2.1 0 000-4.2zm4.05-2.55a.85.85 0 110 1.7.85.85 0 010-1.7z" />
  ),
  facebook: (
    <path d="M14.2 8.2h2.3V5.1h-2.3c-2.7 0-4.4 1.6-4.4 4.4v1.8H8.1v3.1h1.7V19h3.3v-4.6h2.4l.5-3.1h-2.9V9.6c0-.9.4-1.4 1.1-1.4z" />
  ),
  x: (
    <path d="M16.7 5.2h2.1l-4.6 5.26 5.4 8.34h-4.23l-3.3-4.32-3.78 4.32H6.08l4.92-5.62L5.8 5.2h4.34l3 3.96 3.56-3.96zm-.74 12.2h1.16L8.12 6.38H6.88l9.08 11.02z" />
  ),
};

export function SocialIcons() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {COMPANY.socials.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={item.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-muted transition hover:border-accent/50 hover:text-fg"
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
            {icons[item.id]}
          </svg>
        </a>
      ))}
    </div>
  );
}
