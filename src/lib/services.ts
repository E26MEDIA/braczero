export const MAIN_SERVICES = [
  {
    id: "01",
    slug: "cybersecurity",
    href: "/services/cybersecurity",
    title: "Cybersecurity",
    short: "Cyber",
    copy: "Offense-informed defense: assessments, compliance, training, and monitoring so your digital surface stays ahead of threats.",
    points: [
      "Security assessments (VAPT)",
      "Governance, risk & compliance",
      "Training & awareness",
      "Regulatory & strategic advisory",
    ],
    scene: "cyber" as const,
  },
  {
    id: "02",
    slug: "software-apps",
    href: "/services/software-apps",
    title: "Software & Apps",
    short: "Software",
    copy: "Web platforms and mobile apps engineered to ship fast, scale cleanly, and stay secure in production.",
    points: ["Web platforms", "iOS · Android · PWA", "APIs & cloud", "Product MVP to scale"],
    scene: "software" as const,
  },
  {
    id: "03",
    slug: "ai-automation",
    href: "/services/ai-automation",
    title: "AI & Automations",
    short: "AI",
    copy: "Contextual assistants and workflow automation wired to your systems—with a human in the loop.",
    points: ["Service chatbots", "Ops automation", "Internal copilots", "Guardrails & handoff"],
    scene: "ai" as const,
  },
  {
    id: "04",
    slug: "data-analytics",
    href: "/services/data-analytics",
    title: "Data Analytics",
    short: "Data",
    copy: "Pipelines, dashboards, and decision systems that turn raw activity into numbers leadership can act on.",
    points: ["Data pipelines", "BI dashboards", "Product analytics", "Forecasting models"],
    scene: "data" as const,
  },
] as const;

export type ServiceSceneId = (typeof MAIN_SERVICES)[number]["scene"];
