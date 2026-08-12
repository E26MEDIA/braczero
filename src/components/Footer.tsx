import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold">
            Brac<span className="text-accent">Zero</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Software, apps, and cybersecurity—built to perform and stay protected.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
            Company
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
            <Link href="/about" className="hover:text-fg">
              About Us
            </Link>
            <Link href="/process" className="hover:text-fg">
              Process
            </Link>
            <Link href="/work" className="hover:text-fg">
              Work
            </Link>
            <Link href="/contact" className="hover:text-fg">
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
            Services
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
            <Link href="/services/website" className="hover:text-fg">
              Website Development
            </Link>
            <Link href="/services/app" className="hover:text-fg">
              App Development
            </Link>
            <Link href="/services/cybersecurity" className="hover:text-fg">
              Cybersecurity
            </Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted">
        © {new Date().getFullYear()} BracZero. All rights reserved.
      </p>
    </footer>
  );
}
