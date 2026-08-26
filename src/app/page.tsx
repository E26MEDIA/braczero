import { Capabilities } from "@/components/Capabilities";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SiteShell } from "@/components/SiteShell";
import Link from "next/link";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Capabilities />
      <section className="px-6 pb-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0e1520] to-[#070a10] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">
              Next step
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Let’s build something resilient.
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Tell us about your product or security goals—we’ll reply with a clear plan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm text-fg transition hover:border-accent/50 hover:text-accent"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
