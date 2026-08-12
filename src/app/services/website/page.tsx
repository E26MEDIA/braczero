import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  eyebrow: "Services · Website",
  title: "Website development that converts and holds up under pressure.",
  description:
    "High-performance marketing sites and product platforms—engineered for speed, SEO, and long-term maintainability.",
  intro:
    "From brand launches to complex product surfaces, we build websites that load fast, communicate clearly, and stay easy to evolve. Security and performance are part of the build—not afterthoughts.",
  outcomes: [
    "Faster pages and stronger Core Web Vitals",
    "Clear information architecture and conversion paths",
    "Secure forms, auth, and third-party integrations",
    "CMS workflows your team can actually own",
  ],
  deliverables: [
    {
      title: "Product & marketing sites",
      copy: "Launch-ready sites with motion, storytelling, and technical SEO foundations.",
    },
    {
      title: "Web apps & portals",
      copy: "Authenticated experiences, dashboards, and customer portals on modern stacks.",
    },
    {
      title: "Design systems",
      copy: "Reusable UI kits so future pages ship consistently and quickly.",
    },
    {
      title: "Performance hardening",
      copy: "Caching, image strategy, and monitoring so speed doesn’t decay after launch.",
    },
  ],
  process: [
    { step: "01", title: "Scope", copy: "Goals, pages, integrations, and success metrics." },
    { step: "02", title: "Design", copy: "Wireframes to polished UI with brand-fit motion." },
    { step: "03", title: "Build", copy: "Clean architecture, CMS, and QA across devices." },
    { step: "04", title: "Launch", copy: "Deploy, monitor, and iterate on real traffic." },
  ],
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Headless CMS",
    "Vercel / cloud hosts",
    "Analytics",
    "A/B testing",
  ],
};

export default function WebsiteServicePage() {
  return <ServiceDetailPage data={data} />;
}
