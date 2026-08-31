import { BrandLogo } from "@/components/BrandLogo";
import { SocialIcons } from "@/components/SocialIcons";
import { COMPANY } from "@/lib/company";
import { MAIN_SERVICES } from "@/lib/services";
import Link from "next/link";

const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`;

export function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:px-6 sm:pt-16 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr_0.95fr_1.15fr] lg:gap-10">
          <div>
            <BrandLogo compact className="text-fg" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {COMPANY.tagline} Cybersecurity, software, AI, and data—from Mangalore.
            </p>
            <SocialIcons />
          </div>

          <nav aria-label="Company">
            <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              Company
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
              <Link href="/" className="transition hover:text-fg">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-fg">
                About Us
              </Link>
              <Link href="/services" className="transition hover:text-fg">
                Services
              </Link>
              <Link href="/process" className="transition hover:text-fg">
                Process
              </Link>
              <Link href="/work" className="transition hover:text-fg">
                Work
              </Link>
              <Link href="/contact" className="transition hover:text-fg">
                Contact us
              </Link>
              <Link href="/contact#enquiry" className="transition hover:text-fg">
                Book a call
              </Link>
            </div>
          </nav>

          <nav aria-label="Services">
            <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              Services
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
              {MAIN_SERVICES.map((s) => (
                <Link key={s.href} href={s.href} className="transition hover:text-fg">
                  {s.title}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              <a href={`mailto:${COMPANY.enquiryEmail}`} className="block transition hover:text-fg">
                {COMPANY.enquiryEmail}
              </a>
              {COMPANY.phones.map((p) => (
                <a key={p.href} href={p.href} className="block transition hover:text-fg">
                  {p.display}
                </a>
              ))}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="block max-w-xs transition hover:text-fg"
              >
                {COMPANY.address}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-center text-xs tracking-wide text-muted">
            © 2026 {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
