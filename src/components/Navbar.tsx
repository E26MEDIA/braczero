"use client";

import { BrandLogo } from "@/components/BrandLogo";
import { MAIN_SERVICES } from "@/lib/services";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = MAIN_SERVICES.map((s) => ({ href: s.href, label: s.title }));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("nav-open");
    return () => {
      document.body.style.overflow = previous;
      document.documentElement.classList.remove("nav-open");
    };
  }, [open]);

  const servicesActive = pathname.startsWith("/services");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3.5 pt-[max(0.85rem,env(safe-area-inset-top))] sm:px-4 md:px-6">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3.5 py-2.5 transition-all duration-500 sm:px-4 md:px-5 md:py-3 ${
          scrolled
            ? "border-white/10 bg-[#0a0e14]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <BrandLogo compact className="text-fg" />

        <div className="hidden items-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`relative text-sm transition-colors ${
                servicesActive ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              Services
              {servicesActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                />
              )}
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute top-full left-0 pt-3"
                >
                  <div className="grid min-w-[380px] grid-cols-2 gap-0.5 rounded-2xl border border-white/10 bg-[#0a0e14]/95 p-2 shadow-xl backdrop-blur-xl">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block rounded-xl px-3 py-2 text-sm transition ${
                          pathname === link.href
                            ? "bg-white/5 text-accent"
                            : "text-muted hover:bg-white/5 hover:text-fg"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links
            .filter((l) => l.href !== "/services")
            .map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition-colors ${
                    active ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                    />
                  )}
                </Link>
              );
            })}
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
          >
            Book a call
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-fg transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-fg transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-fg transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="nav-scrim"
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/80 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="nav-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="relative z-50 mx-auto mt-2 max-h-[min(78dvh,calc(100dvh-5.5rem))] max-w-6xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0e14] p-3 sm:p-4 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-3 py-3 text-base ${
                      pathname === link.href ||
                      (link.href === "/services" && servicesActive)
                        ? "bg-white/5 text-fg"
                        : "text-muted hover:bg-white/5 hover:text-fg"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-white/10 pt-2">
                  <p className="px-3 pb-1 font-mono text-[10px] tracking-widest text-muted uppercase">
                    Service lines
                  </p>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-3 py-3 text-base text-muted hover:bg-white/5 hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-2 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-white"
                >
                  Book a call
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
