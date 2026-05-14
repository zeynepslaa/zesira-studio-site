"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { UniverseRibbon } from "@/content/types";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

export function UniverseRibbonLayer({ ribbons }: { ribbons: UniverseRibbon[] }) {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[32] overflow-hidden">
      {ribbons.map((r, i) => (
        <motion.span
          key={r.id}
          className={`hand-placed-nudge universe-ribbon absolute max-w-[14rem] ${r.className}`}
          style={{ ["--hand-rotate" as string]: `${r.rotate ?? (i % 2 === 0 ? -5 : 4)}deg` }}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.72,
            delay: reduce ? 0 : 0.05 + (i % 7) * 0.04,
            ease: CINEMATIC_EASE,
          }}
        >
          <span className="universe-ribbon__tape" />
          <span className="universe-ribbon__body">{r.text}</span>
        </motion.span>
      ))}
    </div>
  );
}
