import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  eyebrow: "Services · Cybersecurity",
  title: "Cybersecurity that finds gaps before attackers do.",
  description:
    "Assessments, compliance, training, and managed defense for teams that cannot afford fragile systems.",
  intro:
    "Our security practice is offense-informed. We probe like real adversaries, report in plain language, and help engineering close what matters—then keep watch as your surface grows.",
  outcomes: [
    "Clear risk ranking—not a dump of scanner noise",
    "Hardened apps, APIs, cloud, and networks",
    "Compliance mapped to how you actually operate",
    "People trained, data protected, leadership advised",
  ],
  offerings: [
    {
      heading: "Security assessment",
      items: [
        "Vulnerability assessment & penetration testing (VAPT)",
        "Web, mobile, API, and thick-client testing",
        "Network, wireless, and cloud security reviews",
        "Source-code review and secure SDLC checks",
        "Red team / adversary simulation where it fits",
      ],
    },
    {
      heading: "Governance, risk & compliance",
      items: [
        "ISO 27001 and information-security programs",
        "SOC 2, PCI DSS, NIST, and GDPR readiness",
        "Policies, risk registers, and control mapping",
        "Audit support your team can actually use",
      ],
    },
    {
      heading: "Training & awareness",
      items: [
        "Phishing simulations and staff awareness",
        "Developer secure-coding workshops",
        "Leadership briefings on real residual risk",
      ],
    },
    {
      heading: "Regulatory compliance",
      items: [
        "RBI, IRDAI, SEBI, UIDAI, and CERT-In alignment",
        "DPDP and data-protection readiness",
        "Evidence packs for regulators and boards",
      ],
    },
    {
      heading: "Strategic consulting",
      items: [
        "Virtual CISO / security leadership on retainer",
        "Vendor and third-party risk reviews",
        "Security architecture and zero-trust roadmaps",
      ],
    },
    {
      heading: "Data loss prevention",
      items: [
        "Where sensitive data lives and how it moves",
        "Controls for email, endpoints, and cloud apps",
        "Response playbooks when data is at risk",
      ],
    },
  ],
  deliverables: [
    {
      title: "Findings you can fix",
      copy: "Ranked issues with proof, impact, and engineer-ready remediation—not a 200-page PDF dump.",
    },
    {
      title: "Controls that stick",
      copy: "Hardening, pipelines, and cloud baselines that match how your team already works.",
    },
    {
      title: "Proof for auditors",
      copy: "Mapped controls and evidence so ISO, SOC, PCI, or Indian regulators are not a scramble.",
    },
    {
      title: "Ongoing cover",
      copy: "Retests, monitoring, and vCISO-style advisory as the product and threat surface grow.",
    },
  ],
  process: [
    { step: "01", title: "Assess", copy: "Map assets, attack surface, and compliance priorities." },
    { step: "02", title: "Probe", copy: "Controlled testing to prove what an attacker could actually do." },
    { step: "03", title: "Report", copy: "A short brief for leadership plus a fix list for engineering." },
    { step: "04", title: "Harden", copy: "Remediate, retest, train people, and set continuous controls." },
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
  scene: "cyber" as const,
};

export default function CyberServicePage() {
  return <ServiceDetailPage data={data} />;
}
