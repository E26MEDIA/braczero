import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  eyebrow: "Services · AI & Automations",
  title: "AI and automations that actually finish the work.",
  description:
    "Contextual assistants, workflow automation, and copilots—wired to your site, CRM, and ops, with a human in the loop.",
  intro:
    "We design AI that sits inside real processes: qualifying leads, answering service questions, routing tickets, and removing repetitive ops. Guardrails, logs, and handoff are part of the build—not a demo that dies after launch.",
  outcomes: [
    "A chatbot that knows the page the visitor is on",
    "Lead capture with required fields your sales team can use",
    "Automations for intake, reporting, and follow-up",
    "Clear ownership: your data stays yours",
  ],
  deliverables: [
    {
      title: "Service chatbots",
      copy: "Contextual assistants for websites and apps—prompts, knowledge, and human takeover.",
    },
    {
      title: "Workflow automation",
      copy: "Connect forms, CRM, Slack, and internal tools so work moves without copy-paste.",
    },
    {
      title: "Internal copilots",
      copy: "Assistants for support, sales, or ops trained on your approved documents.",
    },
    {
      title: "Governance",
      copy: "Access, retention, evaluation, and fallbacks when the model shouldn’t answer.",
    },
  ],
  process: [
    { step: "01", title: "Map", copy: "The job, systems, and what must never be automated." },
    { step: "02", title: "Pilot", copy: "One flow live in weeks—with measurement from day one." },
    { step: "03", title: "Harden", copy: "Guardrails, logging, and handoff to humans." },
    { step: "04", title: "Scale", copy: "More workflows once the first one is trusted." },
  ],
  tech: [
    "Next.js",
    "TypeScript",
    "OpenAI",
    "n8n",
    "Zapier",
    "HubSpot",
    "Slack",
    "CI/CD",
  ],
  scene: "ai" as const,
};

export default function AiAutomationPage() {
  return <ServiceDetailPage data={data} />;
}
