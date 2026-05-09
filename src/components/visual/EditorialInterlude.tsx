"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChromeSpark } from "@/components/visual/ChromeSpark";

export function EditorialInterlude({ text }: { text?: string }) {
  const reduce = useReducedMotion();
  const t = text?.trim();
  if (!t) return null;

  return (
    <div className="relative py-10 md:py-16">
      {/* Collage-adjacent density: soft stickers + ballet wash — still one column rhythm */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="hand-placed-nudge absolute -right-2 top-[18%] hidden font-[var(--font-caveat),cursive] text-[0.95rem] text-[#f3d9e4]/90 md:right-[6%] md:block lg:right-[10%]">
          saved to camera roll ♡
        </span>
        <span
          className="hand-placed-nudge absolute left-[4%] top-1/3 font-display text-[8px] font-semibold uppercase tracking-[0.42em] text-[#7a1528]/30 md:left-[8%]"
          style={{ ["--hand-rotate" as string]: "-11deg" }}
        >
          tumblr-coded
        </span>
        <span
          className="hand-placed-nudge absolute bottom-[22%] right-[5%] rounded-sm border border-[rgba(216,221,232,0.55)] bg-[rgba(255,252,248,0.65)] px-2 py-1 font-display text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8a8076]/70 shadow-[0_6px_18px_rgba(42,38,34,0.06)]"
          style={{ ["--hand-rotate" as string]: "5deg" }}
        >
          pin → keep
        </span>
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 md:max-w-4xl md:px-10">
        <div className="flex w-full items-center gap-3 md:gap-4">
          <span className="font-[var(--font-caveat),cursive] text-lg text-[#7a1528]/50" aria-hidden>
            →
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#d9d0c4] via-[#f3d9e4]/45 to-transparent" />
          <div className="flex items-center gap-2 opacity-75">
            <ChromeSpark size={8} className="text-[#d8dde8]" />
            <ChromeSpark size={6} className="text-[#c8c2b8]" />
            <ChromeSpark size={8} className="text-[#f3d9e4]" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-[#d9d0c4] via-[#7a1528]/22 to-transparent" />
          <span className="font-[var(--font-caveat),cursive] text-lg text-[#7a1528]/50" aria-hidden>
            ←
          </span>
        </div>

        <motion.div
          className="max-w-lg px-2 text-center md:max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ duration: reduce ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-serif text-[0.9rem] font-light italic leading-relaxed tracking-[0.03em] text-[#6e655c] md:text-[0.97rem]">
            {t}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
