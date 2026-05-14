"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { AmbientSticker } from "@/content/types";
import { EDITORIAL_REEL_SPRING } from "@/lib/editorial-motion";

function slideFromForSticker(className: string, index: number): number {
  const c = className.toLowerCase();
  const fromRight = c.includes("right-");
  const fromLeft = c.includes("left-");
  const magnitude = 150 + (index % 4) * 22;
  if (fromRight && !fromLeft) return magnitude;
  if (fromLeft && !fromRight) return -magnitude;
  return index % 2 === 0 ? -magnitude : magnitude;
}

export function AmbientInternetStickers({ stickers }: { stickers: AmbientSticker[] }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[32] hidden overflow-hidden lg:block">
      {stickers.map((s, i) => {
        const fromX = slideFromForSticker(s.className, i);
        return (
          <span
            key={s.id}
            className={`hand-placed-nudge absolute max-w-[11rem] ${s.className}`}
            style={{ ["--hand-rotate" as string]: `${s.rotate ?? (i % 2 === 0 ? -5 : 4)}deg` }}
          >
            <motion.span
              className="inline-block rounded-sm border border-[rgba(122,21,40,0.12)] bg-[rgba(255,252,248,0.78)] px-2.5 py-1.5 font-display text-[8px] font-semibold uppercase leading-snug tracking-[0.26em] text-[#7a1528]/70 shadow-[0_8px_22px_rgba(42,38,34,0.06)] will-change-transform"
              initial={reduce ? false : { x: fromX, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: reduce ? 0 : 0.08 + i * 0.06,
                opacity: { duration: reduce ? 0 : 0.32, ease: "easeOut" },
                x: reduce ? { duration: 0 } : EDITORIAL_REEL_SPRING,
              }}
            >
              <motion.span
                className="inline-block will-change-transform"
                animate={reduce ? undefined : { x: [0, 6, -5, 4, 0] }}
                transition={{
                  duration: 17 + (i % 5) * 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: reduce ? 0 : 0.85 + i * 0.05,
                }}
              >
                {s.text}
              </motion.span>
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
