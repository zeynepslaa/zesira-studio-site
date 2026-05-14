"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Subtle corner warmth / expired film edge — editorial, not VFX */
export function FilmEdgeBurn() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[4]">
      <motion.div
        className="absolute inset-0 opacity-[0.14] mix-blend-multiply"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 0% 100%, rgba(122, 21, 40, 0.09), transparent 62%), radial-gradient(ellipse 50% 40% at 100% 0%, rgba(90, 82, 74, 0.08), transparent 58%)",
        }}
        animate={reduce ? undefined : { opacity: [0.1, 0.16, 0.1] }}
        transition={reduce ? undefined : { duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
