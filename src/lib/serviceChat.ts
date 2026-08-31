export type ServiceSceneId =
  | "website"
  | "app"
  | "cyber"
  | "marketing"
  | "branding"
  | "uiux"
  | "cloud"
  | "consulting"
  | "ai";

export type ChatContext = {
  path: string;
  title: string;
  greeting: string;
  prompts: string[];
  promptReplies: Record<string, string>;
  replies: Record<string, string>;
  fallback: string;
};

export const SERVICE_CHAT: Record<string, ChatContext> = {
  "/services/website": {
    path: "/services/website",
    title: "Web specialist",
    greeting:
      "I can help scope a site—stack, pages, CMS, and timeline. What are you launching?",
    prompts: ["How long does a site take?", "What stack do you use?", "Can you rebuild our current site?"],
    promptReplies: {
      "How long does a site take?":
        "Most marketing sites land in 4–8 weeks. Product platforms take longer depending on auth, CMS, and integrations.",
      "What stack do you use?":
        "We typically ship Next.js, TypeScript, and a headless CMS—with performance, SEO, and security in the build.",
      "Can you rebuild our current site?":
        "Yes. We migrate content, preserve SEO, and harden forms, auth, and third-party scripts as we go.",
    },
    replies: {
      timeline:
        "Most marketing sites land in 4–8 weeks. Product platforms take longer depending on auth, CMS, and integrations.",
      stack:
        "We typically ship Next.js, TypeScript, and a headless CMS—with performance, SEO, and security in the build.",
      rebuild:
        "Yes. We migrate content, preserve SEO, and harden forms, auth, and third-party scripts as we go.",
      price:
        "Scope drives cost. Share pages, integrations, and timeline and we’ll send a clear range.",
    },
    fallback:
      "Share your page count, CMS needs, and deadline—I’ll point you to the right next step. Or leave your details and a specialist will reply.",
  },
  "/services/app": {
    path: "/services/app",
    title: "App specialist",
    greeting: "Planning an iOS, Android, or PWA? Tell me the core job the app must do.",
    prompts: ["MVP timeline?", "Native or cross-platform?", "Do you build backends?"],
    promptReplies: {
      "MVP timeline?":
        "A focused MVP is often 8–12 weeks: discovery, prototype, build, and store-ready QA.",
      "Native or cross-platform?":
        "We choose native or cross-platform (React Native / Flutter) based on UX depth, team, and time-to-market.",
      "Do you build backends?":
        "Yes—APIs, auth, realtime, and cloud. The app and backend are designed together.",
    },
    replies: {
      mvp: "A focused MVP is often 8–12 weeks: discovery, prototype, build, and store-ready QA.",
      native:
        "We choose native or cross-platform (React Native / Flutter) based on UX depth, team, and time-to-market.",
      backend:
        "Yes—APIs, auth, realtime, and cloud. The app and backend are designed together.",
      price:
        "Share platforms, features, and whether you need a backend. We’ll map a realistic MVP vs v1.",
    },
    fallback:
      "Tell me platforms, must-have features, and whether you need a backend. Or drop your details and we’ll follow up.",
  },
  "/services/cybersecurity": {
    path: "/services/cybersecurity",
    title: "Security specialist",
    greeting:
      "Assess, harden, or monitor? I can outline VAPT, secure SDLC, or managed defense for your stack.",
    prompts: ["What’s included in VAPT?", "Do you work with our developers?", "Cloud hardening?"],
    promptReplies: {
      "What’s included in VAPT?":
        "Web, API, mobile, and network testing with an executive summary plus engineer-ready fixes—and a retest.",
      "Do you work with our developers?":
        "Yes. We pair with your engineering team so findings become tickets, not a PDF that sits idle.",
      "Cloud hardening?":
        "We baseline identity, network, and config on AWS, GCP, and Azure—then verify with testing.",
    },
    replies: {
      vapt: "Web, API, mobile, and network testing with an executive summary plus engineer-ready fixes—and a retest.",
      developers:
        "Yes. We pair with your engineering team so findings become tickets, not a PDF that sits idle.",
      cloud:
        "We baseline identity, network, and config on AWS, GCP, and Azure—then verify with testing.",
      price:
        "Surface area drives effort. Share apps, cloud, and compliance needs for a scoped estimate.",
    },
    fallback:
      "Tell me what you need protected—web, API, cloud, or compliance. Leave your details for a security lead.",
  },
  "/services/digital-marketing": {
    path: "/services/digital-marketing",
    title: "Growth specialist",
    greeting:
      "SEO, paid, content, or full funnel? I’ll help map a 90-day plan around your offer.",
    prompts: ["SEO or ads first?", "How do you report?", "Landing pages included?"],
    promptReplies: {
      "SEO or ads first?":
        "If the site isn’t converting, we fix that first. Then we split budget between SEO (compounding) and paid (speed).",
      "How do you report?":
        "GA4 dashboards tied to leads and revenue—not vanity traffic. Weekly notes on what we changed.",
      "Landing pages included?":
        "Yes. Campaigns ship with aligned landing pages so spend isn’t wasted on a weak site.",
    },
    replies: {
      seo: "If the site isn’t converting, we fix that first. Then we split budget between SEO (compounding) and paid (speed).",
      report:
        "GA4 dashboards tied to leads and revenue—not vanity traffic. Weekly notes on what we changed.",
      landing:
        "Yes. Campaigns ship with aligned landing pages so spend isn’t wasted on a weak site.",
      price:
        "Share channels, monthly budget, and offer. We’ll recommend a mix and a trial window.",
    },
    fallback:
      "Share your offer, channels, and budget. Or leave details and a growth lead will reply.",
  },
  "/services/branding": {
    path: "/services/branding",
    title: "Brand specialist",
    greeting:
      "New identity or a refresh? I can walk through positioning, visual system, and launch kits.",
    prompts: ["What’s in a brand system?", "How long does branding take?", "Do you design the website too?"],
    promptReplies: {
      "What’s in a brand system?":
        "Positioning, voice, logo, type, color, and guidelines—plus files your designers and developers can use.",
      "How long does branding take?":
        "A focused identity is typically 4–8 weeks, including direction reviews and a handoff session.",
      "Do you design the website too?":
        "Yes. Brand and site are stronger together so the homepage matches the identity you just launched.",
    },
    replies: {
      system:
        "Positioning, voice, logo, type, color, and guidelines—plus files your designers and developers can use.",
      branding:
        "A focused identity is typically 4–8 weeks, including direction reviews and a handoff session.",
      website:
        "Yes. Brand and site are stronger together so the homepage matches the identity you just launched.",
      price:
        "Tell us if you need strategy only, full identity, or brand + website. We’ll scope accordingly.",
    },
    fallback:
      "Are you launching, renaming, or refreshing? Leave your details and a brand lead will follow up.",
  },
  "/services/ui-ux": {
    path: "/services/ui-ux",
    title: "Design specialist",
    greeting:
      "Flows, UI, or a full design system? Tell me the product and the job users must finish.",
    prompts: ["Do you research first?", "Handoff to engineers?", "App and web together?"],
    promptReplies: {
      "Do you research first?":
        "Yes—light discovery, then flows and prototypes before high-fidelity UI. We test before code locks in.",
      "Handoff to engineers?":
        "Tokens, components, and pairing with engineering so the shipped product matches the prototype.",
      "App and web together?":
        "We design web and mobile as one system when both exist—shared language, platform-native patterns.",
    },
    replies: {
      research:
        "Yes—light discovery, then flows and prototypes before high-fidelity UI. We test before code locks in.",
      handoff:
        "Tokens, components, and pairing with engineering so the shipped product matches the prototype.",
      together:
        "We design web and mobile as one system when both exist—shared language, platform-native patterns.",
      price:
        "Share screens, platforms, and whether you need research + a kit. We’ll propose a phase plan.",
    },
    fallback:
      "Tell me the product, platforms, and the one flow that matters most. Or leave your details below.",
  },
  "/services/cloud-devops": {
    path: "/services/cloud-devops",
    title: "Cloud specialist",
    greeting:
      "New cloud, CI/CD, or a reliability cleanup? I can outline architecture, IaC, and observability.",
    prompts: ["Do you use Terraform?", "Kubernetes required?", "Can you take over our pipelines?"],
    promptReplies: {
      "Do you use Terraform?":
        "Yes. Infrastructure as code is default so environments are reviewable and recoverable.",
      "Kubernetes required?":
        "Only when it earns its complexity. Many products start with containers and managed services first.",
      "Can you take over our pipelines?":
        "We can rebuild or take over CI/CD: test, scan, deploy, and alert without heroics.",
    },
    replies: {
      terraform:
        "Yes. Infrastructure as code is default so environments are reviewable and recoverable.",
      kubernetes:
        "Only when it earns its complexity. Many products start with containers and managed services first.",
      pipelines:
        "We can rebuild or take over CI/CD: test, scan, deploy, and alert without heroics.",
      price:
        "Share cloud, current pain (cost, downtime, deploys), and team size. We’ll propose a slice of work.",
    },
    fallback:
      "AWS, GCP, or Azure—and what’s breaking: deploys, cost, or uptime? Leave details for a cloud lead.",
  },
  "/services/it-consulting": {
    path: "/services/it-consulting",
    title: "Advisory specialist",
    greeting:
      "Roadmap, stack choice, or fractional leadership? I’ll help you frame the decision.",
    prompts: ["vCTO vs project?", "Vendor selection?", "How do engagements start?"],
    promptReplies: {
      "vCTO vs project?":
        "Projects have a defined output. Retained vCTO/vCISO is a cadence: hiring, vendors, board-ready updates.",
      "Vendor selection?":
        "We run shortlists and RFPs for cloud, CRM, and security tools—with trade-offs, not a logo dump.",
      "How do engagements start?":
        "A short diagnostic first: goals, constraints, bottlenecks. Then a recommendation with cost and wait-cost.",
    },
    replies: {
      vcto: "Projects have a defined output. Retained vCTO/vCISO is a cadence: hiring, vendors, board-ready updates.",
      vendor:
        "We run shortlists and RFPs for cloud, CRM, and security tools—with trade-offs, not a logo dump.",
      start:
        "A short diagnostic first: goals, constraints, bottlenecks. Then a recommendation with cost and wait-cost.",
      price:
        "Tell us whether you need a review, a roadmap, or ongoing advisory. We’ll suggest the lightest useful format.",
    },
    fallback:
      "What’s the decision you’re stuck on—stack, vendor, or org? Leave your details and an advisor will reply.",
  },
  "/services/ai-automation": {
    path: "/services/ai-automation",
    title: "AI specialist",
    greeting:
      "Chatbots, workflow automation, or internal copilots? Tell me the repetitive work you want to remove.",
    prompts: ["Website chatbot?", "Internal automation?", "Is our data used to train models?"],
    promptReplies: {
      "Website chatbot?":
        "Yes—contextual assistants for sites and apps, with lead capture, handoff to humans, and your knowledge base.",
      "Internal automation?":
        "We automate intake, reporting, and ops workflows with guardrails, logs, and a human in the loop.",
      "Is our data used to train models?":
        "Your data stays yours. We don’t use client content to train public models. Access and retention are documented.",
    },
    replies: {
      chatbot:
        "Yes—contextual assistants for sites and apps, with lead capture, handoff to humans, and your knowledge base.",
      automation:
        "We automate intake, reporting, and ops workflows with guardrails, logs, and a human in the loop.",
      data: "Your data stays yours. We don’t use client content to train public models. Access and retention are documented.",
      price:
        "Share the process to automate, volume, and systems involved (CRM, site, Slack). We’ll propose a pilot.",
    },
    fallback:
      "What should the bot or automation do in the first 30 days? Leave your details and an AI lead will follow up.",
  },
  "/services/software-apps": {
    path: "/services/software-apps",
    title: "Software specialist",
    greeting:
      "Web platform, mobile app, or both? Tell me what you need to ship and I’ll outline stack, timeline, and security.",
    prompts: ["MVP timeline?", "Web and mobile together?", "Is security included?"],
    promptReplies: {
      "MVP timeline?":
        "A focused product MVP is often 8–12 weeks: discovery, build, QA, and a secure launch path.",
      "Web and mobile together?":
        "Yes. We design one product system—web, iOS, Android, or PWA—so APIs and auth stay consistent.",
      "Is security included?":
        "Yes. Auth, roles, and hardening sit in the same plan as the product—not a bolt-on after launch.",
    },
    replies: {
      mvp: "A focused product MVP is often 8–12 weeks: discovery, build, QA, and a secure launch path.",
      mobile:
        "Yes. We design one product system—web, iOS, Android, or PWA—so APIs and auth stay consistent.",
      security:
        "Auth, roles, and hardening sit in the same plan as the product—not a bolt-on after launch.",
      price:
        "Share platforms, features, and whether you need a backend. We’ll map MVP vs v1.",
    },
    fallback:
      "Tell me platforms, must-have features, and deadline. Or leave your details and a product lead will follow up.",
  },
  "/services/data-analytics": {
    path: "/services/data-analytics",
    title: "Data specialist",
    greeting:
      "Pipelines, dashboards, or forecasting? Tell me which numbers leadership needs to see.",
    prompts: ["What do you build first?", "Can you use our existing data?", "How long for a dashboard?"],
    promptReplies: {
      "What do you build first?":
        "A trusted source of truth: clean pipelines, then the two or three dashboards people will actually open.",
      "Can you use our existing data?":
        "Yes. We connect product, sales, and ops sources without a rip-and-replace unless the current stack is broken.",
      "How long for a dashboard?":
        "A first leadership view is often 3–6 weeks once sources and metrics are agreed.",
    },
    replies: {
      dashboard:
        "A first leadership view is often 3–6 weeks once sources and metrics are agreed.",
      pipeline:
        "We start with a trusted source of truth, then the dashboards people will actually open.",
      price:
        "Share sources, the decisions you need to make, and how often numbers must refresh.",
    },
    fallback:
      "Which decision is blocked by missing numbers? Leave your details and a data lead will follow up.",
  },
  "/services": {
    path: "/services",
    title: "BracZero assistant",
    greeting:
      "We build, brand, grow, and secure. Which line are you exploring—software, marketing, or AI?",
    prompts: ["What do you offer?", "How do we start?", "Can you combine services?"],
    promptReplies: {
      "What do you offer?":
        "Web, apps, cybersecurity, digital marketing, branding, UI/UX, cloud/DevOps, IT consulting, and AI automation.",
      "How do we start?":
        "A short brief is enough. We’ll reply with clarifying questions and a proposed next step.",
      "Can you combine services?":
        "Yes—that’s the point. Brand + site, app + security, marketing + chatbot—are scoped as one engagement when it helps.",
    },
    replies: {
      offer:
        "We offer websites, apps, cybersecurity, digital marketing, branding, UI/UX, cloud/DevOps, IT consulting, and AI automation.",
      start:
        "A short brief is enough. We’ll reply with clarifying questions and a proposed next step.",
      combine:
        "Yes—that’s the point. Brand + site, app + security, marketing + chatbot—are scoped as one engagement when it helps.",
      price:
        "Pick a service page or tell me the outcome you need. We’ll scope from there.",
    },
    fallback:
      "Tell me what you’re trying to ship or protect. Or leave your details and we’ll route you to the right lead.",
  },
};

export const DEFAULT_CHAT: ChatContext = {
  path: "/",
  title: "BracZero assistant",
  greeting: "Hi—how can we help? Software, security, growth, or AI automation.",
  prompts: ["See services", "Book a call", "What is BracZero?"],
  promptReplies: {
    "See services":
      "We offer websites, apps, cybersecurity, digital marketing, branding, UI/UX, cloud/DevOps, IT consulting, and AI chatbots.",
    "Book a call":
      "Leave your details here and we’ll reply within one business day—or use Contact Us.",
    "What is BracZero?":
      "BracZero builds and secures digital products: code that ships, threats that don’t.",
  },
  replies: {
    services:
      "We offer websites, apps, cybersecurity, digital marketing, branding, UI/UX, cloud/DevOps, IT consulting, and AI chatbots.",
    book: "Use Contact Us or leave your name and work email here—someone replies within one business day.",
    braczero: "BracZero builds and secures digital products: code that ships, threats that don’t.",
  },
  fallback: "Ask about a service, or leave your details and we’ll get back to you.",
};

export function chatContextForPath(pathname: string): ChatContext {
  if (SERVICE_CHAT[pathname]) return SERVICE_CHAT[pathname];
  const match = Object.keys(SERVICE_CHAT).find(
    (key) => key !== "/services" && pathname.startsWith(key),
  );
  if (match) return SERVICE_CHAT[match];
  if (pathname.startsWith("/services")) return SERVICE_CHAT["/services"];
  return DEFAULT_CHAT;
}
