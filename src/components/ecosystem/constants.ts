export type ServiceId = "web" | "apps" | "cyber";

export type ServiceModuleConfig = {
  id: ServiceId;
  label: string;
  secondary: string;
  href: "/services/website" | "/services/app" | "/services/cybersecurity";
  ariaLabel: string;
};

export const SERVICE_MODULES: ServiceModuleConfig[] = [
  {
    id: "web",
    label: "WEB",
    secondary: "Web Development",
    href: "/services/website",
    ariaLabel: "Explore Web Development services",
  },
  {
    id: "apps",
    label: "APPS",
    secondary: "App Development",
    href: "/services/app",
    ariaLabel: "Explore App Development services",
  },
  {
    id: "cyber",
    label: "CYBER",
    secondary: "Cybersecurity",
    href: "/services/cybersecurity",
    ariaLabel: "Explore Cybersecurity services",
  },
];

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;
