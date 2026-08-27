import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected BracZero work across software, apps, and cybersecurity.",
  alternates: { canonical: "/work" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
