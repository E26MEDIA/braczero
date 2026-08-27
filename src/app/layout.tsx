import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BracZero — Cybersecurity, Software, AI & Data",
    template: "%s — BracZero",
  },
  description:
    "One qubit ahead. BracZero Tech Private Limited — cybersecurity, software, AI, and data from Mangalore.",
  keywords: [
    "BracZero",
    "cybersecurity",
    "VAPT",
    "software development",
    "AI automation",
    "data analytics",
    "Mangalore",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "BracZero",
    title: "BracZero — Cybersecurity, Software, AI & Data",
    description:
      "One qubit ahead. Cybersecurity, software, AI, and data from Mangalore.",
  },
  twitter: {
    card: "summary",
    title: "BracZero — Cybersecurity, Software, AI & Data",
    description:
      "One qubit ahead. Cybersecurity, software, AI, and data from Mangalore.",
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-48.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-fg">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
