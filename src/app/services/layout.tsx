import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cybersecurity, software and apps, AI automations, and data analytics—delivered as one stack.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
