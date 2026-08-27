import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & Apps",
  description:
    "Web platforms and mobile apps from MVP to production—secure, scalable software from BracZero.",
  alternates: { canonical: "/services/software-apps" },
};

const data = {
  eyebrow: "Services · Software & Apps",
  title: "Software and apps that ship, scale, and stay secure.",
  description:
    "Web platforms and mobile products from MVP to production—APIs, cloud, and interfaces people keep using.",
  intro:
    "We partner from discovery through release: websites, product platforms, and native-feel apps with clean architecture. Security, performance, and release discipline stay in the loop so growth doesn’t create debt.",
  outcomes: [
    "A product people can actually finish jobs in",
    "Stable APIs and cloud infrastructure",
    "Secure auth, roles, and data handling",
    "A release cadence your team can sustain",
  ],
  deliverables: [
    {
      title: "Web platforms",
      copy: "Marketing sites, SaaS surfaces, and portals on modern stacks with SEO and speed built in.",
    },
    {
      title: "Mobile & PWA",
      copy: "iOS, Android, and installable web apps focused on performance and store readiness.",
    },
    {
      title: "Backend & APIs",
      copy: "Auth, data models, realtime features, and third-party integrations.",
    },
    {
      title: "Product ops",
      copy: "CI/CD, crash reporting, and analytics so shipping stays predictable.",
    },
  ],
  process: [
    { step: "01", title: "Discover", copy: "Users, flows, risks, and MVP boundaries." },
    { step: "02", title: "Prototype", copy: "Clickable flows and a technical spike where needed." },
    { step: "03", title: "Build", copy: "Iterative sprints with security checkpoints." },
    { step: "04", title: "Scale", copy: "Optimize, harden, and expand the feature surface." },
  ],
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "AWS / GCP",
    "CI/CD",
  ],
  scene: "software" as const,
};

export default function SoftwareAppsPage() {
  return <ServiceDetailPage data={data} />;
}
