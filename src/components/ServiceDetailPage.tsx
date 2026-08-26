"use client";

import { ServiceHeroVisual } from "@/components/heroes/ServiceHeroVisual";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { TechStack } from "@/components/TechStack";
import type { ServiceSceneId } from "@/lib/services";
import { motion } from "framer-motion";
import Link from "next/link";

export type ServiceDetailData = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  outcomes: string[];
  offerings?: { heading: string; items: string[] }[];
  deliverables: { title: string; copy: string }[];
  process: { step: string; title: string; copy: string }[];
  tech: string[];
  scene: ServiceSceneId;
};

export function ServiceDetailPage({ data }: { data: ServiceDetailData }) {
  return (
    <SiteShell>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        visual={<ServiceHeroVisual scene={data.scene} />}
      />

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-muted md:text-xl"
          >
            {data.intro}
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 rounded-3xl border border-white/10 bg-[#101012] p-6"
          >
            {data.outcomes.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-fg/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {data.offerings ? (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              What we cover
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
              Six practices under one roof—so assessment, compliance, people, and data are not separate vendors.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.offerings.map((group, i) => (
                <motion.div
                  key={group.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-[#101012] p-6"
                >
                  <p className="font-mono text-[10px] tracking-widest text-accent uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold">{group.heading}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            What you get
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {data.deliverables.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-[#101012] p-7"
              >
                <p className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Engagement flow
          </h2>
          <div className="mt-10 grid gap-0 md:grid-cols-4">
            {data.process.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border-t border-white/10 py-8 md:border-t-0 md:border-l md:px-5 first:md:border-l-0 first:md:pl-0"
              >
                <span className="font-mono text-sm text-accent">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#101012] p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold">Stack & tools</h2>
          <TechStack items={data.tech} />
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-accent/25 bg-accent/10 p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Ready to start this engagement?
            </h3>
            <p className="mt-2 text-muted">
              We’ll map scope, timeline, and security from day one. Or ask the assistant in the corner—it already knows this service.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
