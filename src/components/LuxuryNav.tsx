"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { NavItem } from "@/content/types";
import { ChromeSpark } from "@/components/visual/ChromeSpark";

export function LuxuryNav({ items, brand }: { items: NavItem[]; brand: string }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-5 md:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-5 py-3 transition-[background,border-color,box-shadow] duration-300 ease-out md:px-8 ${
          scrolled
            ? "border-[rgba(90,82,74,0.22)] bg-[rgba(255,252,248,0.94)] shadow-[0_12px_40px_rgba(42,38,34,0.08)]"
            : "border-[rgba(90,82,74,0.14)] bg-[rgba(255,252,248,0.88)] shadow-[0_8px_28px_rgba(42,38,34,0.04)]"
        }`}
      >
        <a
          href="#home"
          className="group relative inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-[0.28em] text-[#2a2622] md:text-[0.82rem]"
        >
          {brand.replace(" ", "")}
          <ChromeSpark
            size={10}
            className="-mt-0.5 opacity-35 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-90 group-hover:drop-shadow-[0_0_8px_rgba(122,21,40,0.15)]"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {items.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={reduce ? undefined : { y: -2, opacity: 0.92 }}
              transition={{ duration: 0.12, ease: [0.28, 0.12, 0.22, 1] }}
              className="nav-editorial-link text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5c534c]"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(90,82,74,0.18)] text-[#2a2622] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: reduce ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: reduce ? 0.15 : 0.35 }}
            className="mt-4 rounded-3xl border border-[rgba(90,82,74,0.14)] bg-[rgba(255,252,248,0.97)] p-6 shadow-[0_24px_70px_rgba(42,38,34,0.1)] lg:hidden"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile primary">
              {items.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  whileTap={reduce ? undefined : { opacity: 0.88 }}
                  transition={{ duration: 0.2 }}
                  className="nav-editorial-link text-xs font-semibold uppercase tracking-[0.28em] text-[#3a3530]"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
