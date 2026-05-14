"use client";

import { createContext, useCallback, useContext, useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChromeSpark } from "@/components/visual/ChromeSpark";
import { EDITORIAL_REEL_SPRING, HOVER_SNAP_EASE } from "@/lib/editorial-motion";

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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.button
              type="button"
              aria-label="Close dialog"
              className="absolute inset-0 bg-[rgba(42,38,34,0.42)] backdrop-blur-[3px]"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.18, ease: HOVER_SNAP_EASE }}
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="zesira-stitched-border pointer-events-auto relative max-w-lg rotate-[-1.1deg] px-7 pb-9 pt-10 md:px-10 md:pb-10 md:pt-11"
              style={{
                clipPath: "polygon(0 3%, 4% 0%, 52% 2%, 96% 0%, 100% 5%, 100% 96%, 96% 100%, 48% 98%, 3% 100%, 0 94%)",
                background:
                  "linear-gradient(168deg, rgba(255,252,248,0.98) 0%, rgba(245,236,240,0.96) 45%, rgba(235,226,218,0.94) 100%)",
              }}
              initial={reduce ? undefined : { opacity: 0, x: "min(42vw, 22rem)", rotate: -1.8, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, rotate: -1.1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, x: "min(28vw, 14rem)", rotate: -0.4, scale: 0.98 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      opacity: { duration: 0.34, ease: "easeOut" },
                      x: EDITORIAL_REEL_SPRING,
                      rotate: { type: "spring", stiffness: 280, damping: 26, mass: 0.65 },
                      scale: { type: "spring", stiffness: 280, damping: 26, mass: 0.65 },
                    }
              }
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1 -top-3 rotate-[8deg] border border-[rgba(122,21,40,0.35)] bg-[rgba(243,217,228,0.55)] px-2.5 py-1 font-[var(--font-caveat),cursive] text-[1.05rem] leading-none text-[#7a1528] shadow-[0_8px_20px_rgba(42,38,34,0.08)]"
              >
                not yet ♡
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute -left-2 top-[38%] hidden h-16 w-5 rotate-[-6deg] border border-dashed border-[rgba(122,21,40,0.2)] bg-[rgba(255,252,248,0.55)] md:block"
              />
              <div className="pointer-events-none absolute left-6 right-6 top-0 flex justify-center" aria-hidden>
                <span className="h-3 w-[min(72%,18rem)] -translate-y-1 rounded-sm bg-[linear-gradient(90deg,rgba(216,221,232,0.2)_0%,rgba(216,221,232,0.85)_22%,rgba(243,217,228,0.65)_50%,rgba(216,221,232,0.82)_78%,rgba(216,221,232,0.15)_100%)] opacity-90 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset]" />
              </div>

              <div className="flex items-center gap-2 opacity-80">
                <ChromeSpark size={9} className="text-[#d8dde8]" />
                <ChromeSpark size={7} className="text-[#f3d9e4]" />
                <ChromeSpark size={8} className="text-[#c8c2b8]" />
              </div>

              <p id={titleId} className="mt-3 font-zesira-alt text-[clamp(2.1rem,6vw,3.1rem)] font-normal leading-[0.95] tracking-[0.02em] text-[#1f1b18]">
                Still in the archive
              </p>
              <p className="mt-2 font-display text-[9px] font-semibold uppercase tracking-[0.42em] text-[#7a6f66]">Zesira studio — editor holds the scissors</p>

              <p className="mt-5 font-display text-[clamp(1.35rem,4.2vw,1.85rem)] font-medium leading-tight tracking-[-0.02em] text-[#2a2420]/95">
                Coming soon
              </p>

              {label ? (
                <p className="mt-3 font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7a1528]/88">{label}</p>
              ) : (
                <p className="mt-3 max-w-md font-serif text-[1.02rem] font-light leading-relaxed text-[#5c534c]">
                  This sequence is still being edited—taped to the wall, not ready for the timeline. Check back after the next drop.
                </p>
              )}

              <p className="mt-5 max-w-sm font-[var(--font-caveat),cursive] text-[1.2rem] leading-snug text-[#9b1c2e]/90">
                do not open until the gloss dries — seriously
              </p>

              <button
                type="button"
                onClick={close}
                className="mt-9 border-b-2 border-[#7a1528] pb-1 font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7a1528] transition-[border-color,color,transform] duration-200 ease-out hover:border-[#5c0f1f] hover:text-[#5c0f1f] active:scale-[0.98]"
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
