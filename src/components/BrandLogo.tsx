import Image from "next/image";
import Link from "next/link";

type Props = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: Props) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="BracZero home">
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
    </Link>
  );
}
