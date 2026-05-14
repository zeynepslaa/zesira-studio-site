"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { LivingArchive } from "@/content/types";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

export function LivingArchiveSurface({ data }: { data: LivingArchive }) {
  const reduce = useReducedMotion();
  const plates = (data.plates ?? []).filter((p) => p.src?.trim());

  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[33] overflow-hidden">
        {data.motes.map((m, i) => (
          <motion.span
            key={m.id}
            className={`hand-placed-nudge absolute max-w-[13rem] rounded-sm border border-[rgba(90,82,74,0.1)] bg-[rgba(255,252,248,0.72)] px-2 py-1.5 font-display text-[7px] font-semibold uppercase leading-snug tracking-[0.24em] text-[#6a625a]/88 shadow-[0_6px_16px_rgba(42,38,34,0.05)] ${m.className}`}
            style={{ ["--hand-rotate" as string]: `${m.rotate ?? (i % 2 === 0 ? -4 : 3)}deg` }}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 1.1, delay: reduce ? 0 : 0.22 + i * 0.05, ease: CINEMATIC_EASE }}
          >
            {m.text}
          </motion.span>
        ))}
      </div>

      {plates.length > 0 ? (
        <div className="pointer-events-none fixed bottom-28 left-1/2 z-[33] hidden w-[min(90vw,36rem)] -translate-x-1/2 xl:block">
          <div className="flex gap-2 overflow-hidden rounded-md border border-[rgba(90,82,74,0.12)] bg-[rgba(255,252,248,0.5)] p-1.5 backdrop-blur-sm">
            {plates.map((p) => (
              <div key={p.src} className="relative h-16 w-24 shrink-0 overflow-hidden rounded-sm opacity-[0.92]">
                <Image src={p.src} alt={p.alt} fill className="object-cover blur-[0.5px]" sizes="96px" unoptimized />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="pointer-events-none fixed bottom-6 right-6 z-[36] hidden max-h-[min(70vh,32rem)] w-[min(15rem,calc(100vw-3rem))] flex-col gap-2.5 overflow-y-auto overscroll-contain xl:flex">
        {data.cards.map((c, i) => (
          <motion.article
            key={c.id}
            className="archive-trace-paper rounded-lg border border-[rgba(90,82,74,0.13)] bg-[rgba(255,252,248,0.88)] px-3 py-2.5 shadow-[0_12px_28px_rgba(42,38,34,0.07)]"
            style={{ transform: `rotate(${i % 2 === 0 ? -0.65 : 0.5}deg)` }}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.28 + i * 0.09, ease: CINEMATIC_EASE }}
          >
            <p className="font-display text-[7px] font-semibold uppercase tracking-[0.32em] text-[#7a1528]/78">{c.title}</p>
            <ul className="mt-1.5 space-y-1 font-serif text-[0.68rem] font-light leading-snug text-[#5c534c]/92">
              {c.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </>
  );
}
