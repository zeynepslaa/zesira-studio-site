"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { FloatingSystems } from "@/content/types";

export function FloatingArchiveSystems({ data }: { data: FloatingSystems }) {
  const reduce = useReducedMotion();
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

  const card =
    "rounded-xl border border-[rgba(90,82,74,0.18)] bg-[rgba(255,252,248,0.96)] px-3 py-2.5 shadow-[0_14px_36px_rgba(42,38,34,0.08)]";

  return (
    <div className="pointer-events-none hidden max-w-[min(18rem,calc(100vw-2rem))] space-y-2.5 md:fixed md:bottom-8 md:left-6 md:block md:z-[38]">
      <motion.div
        className={card}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="font-display text-[8px] font-semibold uppercase tracking-[0.32em] text-[#7a6f66]">Currently rendering</p>
        <p className="mt-1.5 truncate font-serif text-[0.82rem] font-light italic text-[#5c534c]">{data.renderingLabel}</p>
        <div className="mt-2 h-px w-full bg-[rgba(90,82,74,0.12)]" />
        <div className="mt-2 flex items-baseline justify-between gap-2">
          <span className="font-display text-2xl font-medium tabular-nums text-[#7a1528]/90">{pct}%</span>
          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#8a8076]">queue: emotional</span>
        </div>
      </motion.div>

      <motion.div
        className={card}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
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

      <motion.div
        className={card}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
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
    </div>
  );
}
