"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChromeSpark } from "@/components/visual/ChromeSpark";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

type Rhythm = 0 | 1 | 2;

export function EditorialInterlude({ text, rhythm = 0 }: { text?: string; rhythm?: Rhythm }) {
  const reduce = useReducedMotion();
  const t = text?.trim();
  if (!t) return null;

  const py = rhythm === 1 ? "py-8 md:py-10" : rhythm === 2 ? "py-10 md:py-14" : "py-7 md:py-11";
  const textWrap =
    rhythm === 1
      ? "max-w-xl px-2 text-left md:ml-[min(8vw,4rem)] md:max-w-lg"
      : rhythm === 2
        ? "max-w-md px-2 text-right md:ml-auto md:mr-[min(6vw,3rem)] md:max-w-lg"
        : "max-w-lg px-2 text-center md:max-w-2xl";

  const textRhythmClass =
    rhythm === 0
      ? "-rotate-[0.35deg] md:translate-x-[2px]"
      : rhythm === 1
        ? "rotate-[0.48deg] md:-translate-x-[4px]"
        : "-rotate-[0.32deg] md:translate-x-1";

  return (
    <div className={`relative ${py}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="hand-placed-nudge absolute -right-2 top-[18%] hidden font-[var(--font-caveat),cursive] text-[0.95rem] text-[#f3d9e4]/90 md:right-[6%] md:block lg:right-[10%]"
        >
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
        {rhythm === 1 ? (
          <span
            className="hand-placed-nudge absolute bottom-[12%] left-[8%] hidden max-w-[10rem] font-serif text-[0.72rem] font-light italic leading-snug text-[#7a6f66]/85 md:block"
            style={{ ["--hand-rotate" as string]: "-3deg" }}
          >
            perfume ad silence, but digital
          </span>
        ) : null}
        {rhythm === 2 ? (
          <span
            className="hand-placed-nudge absolute right-[12%] top-[12%] hidden font-display text-[clamp(2.5rem,8vw,4.5rem)] font-medium leading-none text-[#ebe4dc]/80 md:block"
            aria-hidden
          >
            ✶
          </span>
        ) : null}
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-6 md:px-10">
        <div className={`flex w-full items-center gap-3 md:gap-4 ${rhythm === 2 ? "flex-row-reverse" : ""}`}>
          <span className="font-[var(--font-caveat),cursive] text-lg text-[#7a1528]/50" aria-hidden>
            {rhythm === 2 ? "←" : "→"}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#d9d0c4] via-[#f3d9e4]/45 to-transparent" />
          <div className="flex items-center gap-2 opacity-75">
            <ChromeSpark size={8} className="text-[#d8dde8]" />
            <ChromeSpark size={6} className="text-[#c8c2b8]" />
            <ChromeSpark size={8} className="text-[#f3d9e4]" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-[#d9d0c4] via-[#7a1528]/22 to-transparent" />
          <span className="font-[var(--font-caveat),cursive] text-lg text-[#7a1528]/50" aria-hidden>
            {rhythm === 2 ? "→" : "←"}
          </span>
        </div>

        <motion.div
          className={`mx-auto w-full ${textWrap} ${textRhythmClass}`}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ duration: reduce ? 0 : 1, ease: CINEMATIC_EASE }}
        >
          <p className="font-serif text-[0.9rem] font-light italic leading-relaxed tracking-[0.03em] text-[#6e655c] md:text-[0.97rem]">
            {t}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
