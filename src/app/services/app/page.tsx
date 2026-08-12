import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  eyebrow: "Services · App",
  title: "App development from MVP to production scale.",
  description:
    "Native-feel mobile and web apps with secure APIs, clean architecture, and interfaces people keep using.",
  intro:
    "We partner from discovery through release—shipping usable product in weeks, then scaling features without collapsing into tech debt. Security, observability, and release discipline stay in the loop.",
  outcomes: [
    "Validated MVP with a clear growth path",
    "Stable APIs and cloud infrastructure",
    "Secure auth, roles, and data handling",
    "Release cadence your team can sustain",
  ],
  deliverables: [
    {
      title: "iOS & Android apps",
      copy: "Cross-platform or native builds focused on performance and store readiness.",
    },
    {
      title: "Progressive web apps",
      copy: "Installable web apps when reach and iteration speed matter most.",
    },
    {
      title: "Backend & APIs",
      copy: "Auth, data models, realtime features, and third-party integrations.",
    },
    {
      title: "Product ops",
      copy: "Crash reporting, analytics, and CI/CD so shipping stays predictable.",
    },
  ],
  process: [
    { step: "01", title: "Discover", copy: "Users, flows, risks, and MVP boundaries." },
    { step: "02", title: "Prototype", copy: "Clickable flows and technical spike where needed." },
    { step: "03", title: "Build", copy: "Iterative sprints with security checkpoints." },
    { step: "04", title: "Scale", copy: "Optimize, harden, and expand feature surface." },
  ],
  tech: [
    "React Native",
    "Flutter",
    "Swift / Kotlin",
    "Node.js",
    "PostgreSQL",
    "Firebase",
    "AWS / GCP",
    "CI/CD",
  ],
};

export default function AppServicePage() {
  return <ServiceDetailPage data={data} />;
}
