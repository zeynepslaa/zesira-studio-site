"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { UniverseRibbon } from "@/content/types";
import { EDITORIAL_REEL_SPRING } from "@/lib/editorial-motion";

function slideFromForRibbon(className: string, index: number): number {
  const c = className.toLowerCase();
  const fromRight = c.includes("right-");
  const fromLeft = c.includes("left-");
  const magnitude = 160 + (index % 5) * 20;
  if (fromRight && !fromLeft) return magnitude;
  if (fromLeft && !fromRight) return -magnitude;
  return index % 2 === 0 ? -magnitude : magnitude;
}

export function UniverseRibbonLayer({ ribbons }: { ribbons: UniverseRibbon[] }) {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[32] overflow-hidden">
      {ribbons.map((r, i) => {
        const fromX = slideFromForRibbon(r.className, i);
        return (
          <span
            key={r.id}
            className={`hand-placed-nudge universe-ribbon absolute max-w-[14rem] ${r.className}`}
            style={{ ["--hand-rotate" as string]: `${r.rotate ?? (i % 2 === 0 ? -5 : 4)}deg` }}
          >
            <motion.span
              className="inline-flex max-w-[14rem] will-change-transform"
              initial={reduce ? false : { x: fromX, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: reduce ? 0 : 0.04 + (i % 7) * 0.05,
                opacity: { duration: reduce ? 0 : 0.3, ease: "easeOut" },
                x: reduce ? { duration: 0 } : EDITORIAL_REEL_SPRING,
              }}
            >
              <motion.span
                className="inline-flex will-change-transform"
                animate={reduce ? undefined : { x: [0, 7, -5, 5, 0] }}
                transition={{
                  duration: 19 + (i % 6) * 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: reduce ? 0 : 0.9 + i * 0.04,
                }}
              >
                <span className="universe-ribbon__tape" />
                <span className="universe-ribbon__body">{r.text}</span>
              </motion.span>
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
