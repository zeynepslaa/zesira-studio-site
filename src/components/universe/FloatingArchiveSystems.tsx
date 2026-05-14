"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { FloatingSystems } from "@/content/types";
import { EDITORIAL_REEL_SPRING } from "@/lib/editorial-motion";

const PANEL_SHIFT = 300;

export function FloatingArchiveSystems({ data }: { data: FloatingSystems }) {
  const reduce = useReducedMotion();
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [pct, setPct] = useState(data.renderingPercent);

  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(() => {
      setPct(() => {
        const target = data.renderingPercent;
        const drift = Math.sin(Date.now() / 4000) * 2;
        return Math.min(99, Math.max(61, Math.round(target + drift)));
      });
    }, 1400);
    return () => window.clearInterval(t);
  }, [data.renderingPercent, reduce]);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const card =
    "rounded-xl border border-[rgba(90,82,74,0.18)] bg-[rgba(255,252,248,0.96)] px-3 py-2.5 shadow-[0_14px_36px_rgba(42,38,34,0.08)]";

  return (
    <div className="hidden md:contents">
      {open ? (
        <button
          type="button"
          aria-label="Close studio desk"
          className="pointer-events-auto fixed inset-0 z-[37] bg-[rgba(42,38,34,0.04)] backdrop-blur-[1px] md:block"
          onClick={close}
        />
      ) : null}

      <button
        type="button"
        id={`${panelId}-tab`}
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="pointer-events-auto fixed bottom-[5.5rem] left-0 z-[40] hidden h-[8.5rem] w-9 flex-col items-center justify-center gap-1 rounded-r-lg border border-l-0 border-[rgba(90,82,74,0.2)] bg-[rgba(255,252,248,0.94)] py-2 font-display text-[7px] font-semibold uppercase leading-tight tracking-[0.22em] text-[#7a1528]/85 shadow-[4px_0_24px_rgba(42,38,34,0.08)] transition-[color,background-color] duration-150 hover:bg-white hover:text-[#5c0f1f] md:flex"
      >
        <span className="text-[10px] leading-none text-[#8a8076]" aria-hidden>
          ⟩
        </span>
        <span className="max-w-[1.1rem] text-center [writing-mode:vertical-rl] [text-orientation:mixed]">desk</span>
      </button>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={`${panelId}-tab`}
        className={`fixed bottom-8 left-3 z-[38] w-[min(18rem,calc(100vw-2.5rem))] max-w-[min(18rem,calc(100vw-2rem))] space-y-2.5 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        initial={false}
        animate={{ x: open ? 0 : -PANEL_SHIFT }}
        transition={reduce ? { duration: 0 } : EDITORIAL_REEL_SPRING}
      >
        <div className="flex items-center justify-end border-b border-[rgba(90,82,74,0.1)] pb-2">
          <button
            type="button"
            onClick={close}
            className="font-display text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a8076] underline decoration-[rgba(90,82,74,0.25)] underline-offset-4 transition-colors hover:text-[#7a1528]"
          >
            Close
          </button>
        </div>

        <motion.div
          className={card}
          initial={false}
          animate={{ opacity: open ? 1 : 0.92 }}
          transition={{ duration: 0.2 }}
        >
          <p className="font-display text-[8px] font-semibold uppercase tracking-[0.32em] text-[#7a6f66]">Currently rendering</p>
          <p className="mt-1.5 truncate font-serif text-[0.82rem] font-light italic text-[#5c534c]">{data.renderingLabel}</p>
          <div className="mt-2 h-px w-full bg-[rgba(90,82,74,0.12)]" />
          <div className="mt-2 flex items-baseline justify-between gap-2">
            <span className="font-display text-2xl font-medium tabular-nums text-[#7a1528]/90">{pct}%</span>
            <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#8a8076]">queue: emotional</span>
          </div>
        </motion.div>

        <motion.div className={card} initial={false} animate={{ opacity: open ? 1 : 0.92 }} transition={{ duration: 0.2 }}>
          <p className="font-display text-[8px] font-semibold uppercase tracking-[0.32em] text-[#7a6f66]">{data.tonightTitle}</p>
          <ul className="mt-2 space-y-1 font-serif text-[0.78rem] font-light leading-snug text-[#5c534c]">
            {data.tonightItems.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-[0.55em] h-px w-4 shrink-0 bg-[rgba(122,21,40,0.22)]" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className={card} initial={false} animate={{ opacity: open ? 1 : 0.92 }} transition={{ duration: 0.2 }}>
          <p className="font-display text-[8px] font-semibold uppercase tracking-[0.32em] text-[#7a6f66]">Recently saved</p>
          <ul className="mt-1.5 space-y-0.5 font-[var(--font-caveat),cursive] text-[0.95rem] text-[#7a1528]/78">
            {data.recentlySaved.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="mt-2 border-t border-[rgba(90,82,74,0.08)] pt-2 font-display text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a8076]">
            Last opened <span className="font-serif font-normal normal-case text-[#5c534c]"> — {data.lastOpened}</span>
          </p>
          {data.archiveRecoveredLine ? (
            <p className="mt-1.5 font-serif text-[0.72rem] font-light italic text-[#7a1528]/55">{data.archiveRecoveredLine}</p>
          ) : null}
        </motion.div>
      </motion.div>
    </div>
  );
}
