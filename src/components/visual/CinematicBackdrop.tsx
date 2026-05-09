"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Soft cream “studio window” light — magazine cover mood */
export function CinematicBackdrop() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_18%_15%,rgba(255,252,248,0.92),transparent_58%),radial-gradient(ellipse_70%_55%_at_92%_8%,rgba(245,228,232,0.26),transparent_52%),radial-gradient(ellipse_90%_60%_at_60%_100%,rgba(235,226,214,0.55),transparent_52%),linear-gradient(180deg,#fffdf9_0%,#f3ece3_50%,#e8dfd3_100%)]" />
      {!reduce && (
        <>
          <motion.div
            className="absolute -right-16 top-1/4 h-[420px] w-[420px] rounded-full bg-[rgba(255,248,242,0.55)] blur-[70px]"
            animate={{ x: [0, -12, 0], opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-[rgba(230,210,218,0.14)] blur-[56px]"
            animate={{ y: [0, -14, 0], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/3 top-0 h-48 w-[140%] -translate-x-1/2 rounded-[100%] bg-[rgba(255,252,248,0.35)] blur-[48px]"
            animate={{ opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(122,21,40,0.03),transparent_38%,rgba(90,80,74,0.04))]" />
    </div>
  );
}
