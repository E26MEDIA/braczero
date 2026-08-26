"use client";

import { PageHero } from "@/components/PageHero";
import { ProcessPipeline } from "@/components/ProcessPipeline";
import { SiteShell } from "@/components/SiteShell";
import Link from "next/link";

export default function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Process"
        title="A delivery system built for clarity and control."
        description="How BracZero takes products from brief to production—without trading speed for security."
      />

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <ProcessPipeline showFooterLink={false} />
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-xl border border-white/10 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <p className="max-w-xl text-muted">
            Prefer to see how this maps to your project? We’ll walk the process on a short call.
          </p>
          <Link
            href="/contact"
            className="w-full rounded-full bg-accent px-6 py-3.5 text-center text-sm font-semibold text-white md:w-auto"
          >
            Book a call →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
