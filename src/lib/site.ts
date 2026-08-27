export const SITE_URL = "https://www.braczero.com";

export const INDEX_PAGES = [
  { path: "/", title: "BracZero — Cybersecurity, Software, AI & Data", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services", title: "Services — BracZero", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/services/cybersecurity", title: "Cybersecurity — BracZero", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/software-apps", title: "Software & Apps — BracZero", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/ai-automation", title: "AI & Automations — BracZero", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/data-analytics", title: "Data Analytics — BracZero", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/process", title: "Process — BracZero", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/work", title: "Work — BracZero", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", title: "About Us — BracZero", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", title: "Contact Us — BracZero", priority: 0.8, changeFrequency: "monthly" as const },
] as const;
