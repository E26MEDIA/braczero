import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BracZero Tech Private Limited builds software and cybersecurity together—from Mangalore.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
