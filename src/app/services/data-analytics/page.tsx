import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analytics",
  description:
    "Pipelines, dashboards, and decision systems that turn activity into numbers leadership can act on.",
  alternates: { canonical: "/services/data-analytics" },
};

const data = {
  eyebrow: "Services · Data Analytics",
  title: "Data analytics that turn activity into decisions.",
  description:
    "Pipelines, dashboards, and models so leadership sees what is working—without waiting on a spreadsheet fire drill.",
  intro:
    "We connect product, sales, and operations data into a trusted layer: clean pipelines, governed metrics, and interfaces people actually open. The goal is faster, quieter decisions—not another unused BI license.",
  outcomes: [
    "A single source of truth for the numbers that matter",
    "Dashboards tied to pipeline, product, and risk",
    "Automated reporting instead of manual extracts",
    "Room to add forecasting without rebuilding everything",
  ],
  deliverables: [
    {
      title: "Data pipelines",
      copy: "Ingest, transform, and warehouse data from apps, ads, CRM, and logs.",
    },
    {
      title: "BI dashboards",
      copy: "Executive and operator views with definitions your team agrees on.",
    },
    {
      title: "Product analytics",
      copy: "Event tracking, funnels, and experiments wired to the product you ship.",
    },
    {
      title: "Decision models",
      copy: "Forecasting and anomaly detection where the data quality earns it.",
    },
  ],
  process: [
    { step: "01", title: "Audit", copy: "Sources, definitions, and the decisions you need to make." },
    { step: "02", title: "Model", copy: "Metrics layer and warehouse design you can trust." },
    { step: "03", title: "Visualize", copy: "Dashboards and alerts for the people who will use them." },
    { step: "04", title: "Operate", copy: "Ownership, refresh, and the next questions the data raises." },
  ],
  tech: [
    "PostgreSQL",
    "Analytics",
    "GA4",
    "HubSpot",
    "Python",
    "dbt",
    "Looker",
    "CI/CD",
  ],
  scene: "data" as const,
};

export default function DataAnalyticsPage() {
  return <ServiceDetailPage data={data} />;
}
