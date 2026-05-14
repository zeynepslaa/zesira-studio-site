"use client";

import { createContext, useCallback, useContext, useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type ComingSoonContextValue = {
  openComingSoon: (label?: string) => void;
};

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function useComingSoon() {
  const ctx = useContext(ComingSoonContext);
  if (!ctx) {
    throw new Error("useComingSoon must be used within ComingSoonProvider");
  }
  return ctx;
}

export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState<string | undefined>();

  const openComingSoon = useCallback((nextLabel?: string) => {
    setLabel(nextLabel?.trim() || undefined);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <ComingSoonContext.Provider value={{ openComingSoon }}>
      {children}
      <AnimatePresence>
        {open ? (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
            <motion.button
              type="button"
              aria-label="Close dialog"
              className="absolute inset-0 bg-[rgba(42,38,34,0.35)] backdrop-blur-[2px]"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="relative max-w-md border border-[rgba(90,82,74,0.2)] bg-[rgba(255,252,248,0.97)] px-8 py-10 shadow-[0_28px_80px_rgba(42,38,34,0.18)]"
              initial={reduce ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p id={titleId} className="font-display text-[10px] font-semibold uppercase tracking-[0.42em] text-[#7a6f66]">
                Zesira studio
              </p>
              <p className="mt-4 font-display text-[clamp(1.75rem,5vw,2.35rem)] font-medium leading-tight tracking-[-0.02em] text-[#1f1b18]">
                Coming soon
              </p>
              {label ? (
                <p className="mt-3 font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7a1528]/85">
                  {label}
                </p>
              ) : (
                <p className="mt-3 font-serif text-[1rem] font-light leading-relaxed text-[#5c534c]">
                  This sequence is still being edited—check back after the next drop.
                </p>
              )}
              <button
                type="button"
                onClick={close}
                className="mt-8 border-b-2 border-[#7a1528] pb-1 font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7a1528] transition hover:border-[#5c0f1f] hover:text-[#5c0f1f]"
              >
                Close
              </button>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </ComingSoonContext.Provider>
  );
}
