import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How BracZero takes products from brief to production—without trading speed for security.",
  alternates: { canonical: "/process" },
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
