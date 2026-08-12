import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  eyebrow: "Services · Cybersecurity",
  title: "Cybersecurity that finds gaps before attackers do.",
  description:
    "Assessments, hardening, and managed defense for teams that ship software and can’t afford fragile systems.",
  intro:
    "Our security practice is offense-informed. We probe like real adversaries, report in plain language, and help engineering close what matters—then keep watch as your surface grows.",
  outcomes: [
    "Clear risk ranking—not noise",
    "Hardened apps, APIs, and cloud configs",
    "Secure SDLC embedded in delivery",
    "Ongoing monitoring and advisory support",
  ],
  deliverables: [
    {
      title: "VAPT & assessments",
      copy: "Web, API, mobile, and network testing with actionable remediation plans.",
    },
    {
      title: "Secure SDLC",
      copy: "Code review, threat modeling, and pipeline checks that fit how you ship.",
    },
    {
      title: "Cloud hardening",
      copy: "Identity, network, and configuration baselines for AWS, GCP, and Azure.",
    },
    {
      title: "Managed defense",
      copy: "Monitoring, incident readiness, and vCISO-style advisory when you need depth.",
    },
  ],
  process: [
    { step: "01", title: "Assess", copy: "Map assets, attack surface, and priorities." },
    { step: "02", title: "Probe", copy: "Controlled exploitation to prove real impact." },
    { step: "03", title: "Report", copy: "Executive summary plus engineer-ready fixes." },
    { step: "04", title: "Harden", copy: "Remediate, retest, and set continuous controls." },
  ],
  tech: [
    "OWASP",
    "NIST / ISO aligned",
    "Burp Suite",
    "Nmap",
    "Cloud security posture",
    "SIEM / SOC",
    "Zero-trust",
    "DevSecOps",
  ],
};

export default function CyberServicePage() {
  return <ServiceDetailPage data={data} />;
}
