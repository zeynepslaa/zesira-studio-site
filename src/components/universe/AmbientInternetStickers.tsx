"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { AmbientSticker } from "@/content/types";

export function AmbientInternetStickers({ stickers }: { stickers: AmbientSticker[] }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[32] hidden overflow-hidden lg:block">
      {stickers.map((s, i) => (
        <motion.span
          key={s.id}
          className={`hand-placed-nudge absolute max-w-[11rem] rounded-sm border border-[rgba(122,21,40,0.12)] bg-[rgba(255,252,248,0.78)] px-2.5 py-1.5 font-display text-[8px] font-semibold uppercase leading-snug tracking-[0.26em] text-[#7a1528]/70 shadow-[0_8px_22px_rgba(42,38,34,0.06)] ${s.className}`}
          style={{ ["--hand-rotate" as string]: `${s.rotate ?? (i % 2 === 0 ? -5 : 4)}deg` }}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.15 + i * 0.06 }}
        >
          {s.text}
        </motion.span>
      ))}
    </div>
  );
}
