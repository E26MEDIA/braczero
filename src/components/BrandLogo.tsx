import { COMPANY } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";

type Props = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: Props) {
  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 flex-col items-start ${className}`}
      aria-label="BracZero home"
    >
      <Image
        src="/brand/logo-dark.png"
        alt="BracZero Tech Private Limited"
        width={639}
        height={154}
        priority
        className={
          compact
            ? "h-7 w-auto max-w-[min(200px,58vw)] object-contain object-left md:h-9 md:max-w-none"
            : "h-9 w-auto max-w-[min(240px,70vw)] object-contain object-left md:h-11 md:max-w-none"
        }
      />
      <span
        className={`mt-1 font-sans tracking-[0.14em] text-accent uppercase ${
          compact ? "text-[8px] md:text-[9px]" : "text-[9px] md:text-[10px]"
        }`}
      >
        {COMPANY.tagline.replace(/\.$/, "")}
      </span>
    </Link>
  );
}
