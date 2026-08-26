"use client";

import { chatContextForPath } from "@/lib/serviceChat";
import { postEnquiry } from "@/lib/enquiryClient";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type Msg = { role: "bot" | "user"; text: string };

function matchReply(
  text: string,
  ctx: { promptReplies: Record<string, string>; replies: Record<string, string>; fallback: string },
) {
  if (ctx.promptReplies[text]) return ctx.promptReplies[text];
  const t = text.toLowerCase();
  const ranked = Object.entries(ctx.replies)
    .filter(([key]) => key.length > 3 && t.includes(key))
    .sort((a, b) => b[0].length - a[0].length);
  if (ranked[0]) return ranked[0][1];
  if (t.includes("price") || t.includes("cost") || t.includes("budget")) {
    return ctx.replies.price ?? ctx.fallback;
  }
  if (t.includes("timeline") || t.includes("how long") || t.includes("weeks")) {
    return ctx.replies.timeline ?? ctx.replies.mvp ?? ctx.replies.branding ?? ctx.fallback;
  }
  return ctx.fallback;
}

export function ServiceChatbot() {
  const pathname = usePathname();
  const ctx = useMemo(() => chatContextForPath(pathname), [pathname]);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: ctx.greeting }]);
  const [draft, setDraft] = useState("");
  const [lead, setLead] = useState(false);
  const [sent, setSent] = useState(false);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    setMessages([{ role: "bot", text: ctx.greeting }]);
    setDraft("");
    setLead(false);
    setSent(false);
  }, [ctx]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = matchReply(trimmed, ctx);
    setMessages((m) => [
      ...m,
      { role: "user", text: trimmed },
      { role: "bot", text: reply },
    ]);
    setDraft("");
    if (
      trimmed.toLowerCase().includes("call") ||
      trimmed.toLowerCase().includes("quote") ||
      reply.includes("leave")
    ) {
      setLead(true);
    }
  }

  async function onLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const payload = await postEnquiry({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          phone: data.get("phone"),
          service: data.get("service") || ctx.title,
          message: data.get("message"),
          honey: data.get("company_website"),
        });
      if (!payload.ok) {
        setMessages((m) => [
          ...m,
          { role: "bot", text: payload.error || "Could not send. Email braczerotech@gmail.com and we’ll pick it up." },
        ]);
        return;
      }
      setSent(true);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Could not send. Email braczerotech@gmail.com and we’ll pick it up." },
      ]);
    }
  }

  if (!ready) return null;

  return (
    <div
      data-chatbot
      className="fixed z-50 right-[max(0.75rem,env(safe-area-inset-right))] bottom-[max(0.75rem,env(safe-area-inset-bottom))] md:right-6 md:bottom-6"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="mb-3 flex h-[min(520px,calc(100dvh-7.5rem))] w-[min(calc(100vw-1.5rem),380px)] flex-col overflow-hidden rounded-3xl border border-white/12 bg-[#0a0e14]/95 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                  <span className="pulse-ring absolute inset-0 rounded-full bg-accent/30" />
                  <span className="relative h-2 w-2 rounded-full bg-accent" />
                </span>
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-accent uppercase">
                    AI automation
                  </p>
                  <p className="text-sm font-medium">{ctx.title}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-muted hover:text-fg"
                aria-label="Close chatbot"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={`${msg.role}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "bot"
                      ? "bg-white/5 text-fg"
                      : "ml-auto bg-accent/20 text-fg"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              <div className="flex flex-wrap gap-2 pt-1">
                {ctx.prompts.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => send(p)}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-muted transition hover:border-accent/40 hover:text-accent"
                  >
                    {p}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setLead(true)}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] text-accent"
                >
                  Leave details
                </button>
              </div>

              {lead && (
                <form onSubmit={onLead} className="mt-2 space-y-2 rounded-2xl border border-white/10 bg-black/30 p-3">
                  <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
                    Required to reach a specialist
                  </p>
                  <input type="hidden" name="service" value={ctx.title} />
                  <input name="company_website" tabIndex={-1} autoComplete="off" className="hidden" />
                  <input
                    required
                    name="name"
                    placeholder="Full name *"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent/50"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Work email *"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent/50"
                  />
                  <input
                    required
                    name="company"
                    placeholder="Company *"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent/50"
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent/50"
                  />
                  <textarea
                    required
                    name="message"
                    rows={3}
                    placeholder="What do you need? *"
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent/50"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-accent py-2 text-sm font-semibold text-white"
                  >
                    {sent ? "Received — we’ll reply shortly" : "Send to BracZero"}
                  </button>
                </form>
              )}
            </div>

            <form
              className="flex gap-2 border-t border-white/10 p-3"
              onSubmit={(e) => {
                e.preventDefault();
                send(draft);
              }}
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask about this service…"
                className="flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none focus:border-accent/50"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-3 py-2 text-sm font-medium text-white"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label="Open AI chatbot"
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_40px_rgba(183,28,40,0.35)] md:h-14 md:w-14"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="pulse-ring absolute inset-0 rounded-full bg-accent/50" />
        <svg viewBox="0 0 24 24" className="relative h-6 w-6" fill="none" aria-hidden>
          <path
            d="M5 12c0-3.9 3.6-7 8-7s8 3.1 8 7-3.6 7-8 7c-.7 0-1.4-.1-2-.2L6 20l1.2-3.4C5.8 15.4 5 13.8 5 12z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      </motion.button>
    </div>
  );
}
