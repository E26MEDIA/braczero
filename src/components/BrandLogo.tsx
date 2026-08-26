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
        className={compact ? "h-8 w-auto md:h-9" : "h-10 w-auto md:h-11"}
      />
    </Link>
  );
}
