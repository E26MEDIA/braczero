"use client";

type Props = {
  active: boolean;
  dimmed: boolean;
  emphasize?: boolean;
};

export function IconWeb({ active, dimmed }: Props) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity={dimmed ? 0.45 : active ? 1 : 0.85}
      />
      <path
        d="M4 12h16M12 4c2.4 2.6 2.4 9.4 0 12M12 4c-2.4 2.6-2.4 9.4 0 12"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity={dimmed ? 0.4 : 0.9}
      />
    </svg>
  );
}

export function IconApps({ active, dimmed }: Props) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <rect
        x="7"
        y="3.5"
        width="10"
        height="17"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity={dimmed ? 0.45 : active ? 1 : 0.85}
      />
      <path d="M10.5 17.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCyber({ active, dimmed, emphasize }: Props) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M12 3.5l7 2.8v5.2c0 4.2-2.8 7.1-7 8.7-4.2-1.6-7-4.5-7-8.7V6.3L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity={dimmed ? 0.45 : emphasize || active ? 1 : 0.9}
      />
      <path
        d="M9.6 12.1l1.7 1.7 3.3-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={dimmed ? 0.4 : 1}
      />
    </svg>
  );
}
