"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Soft photographic light leak — not glass, not neon */
export function LightLeakVeil() {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[4] mix-blend-soft-light opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 0% 20%, rgba(243, 217, 228, 0.5), transparent 55%), radial-gradient(ellipse 60% 45% at 100% 80%, rgba(216, 221, 232, 0.35), transparent 50%)",
        }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[4] mix-blend-soft-light opacity-[0.07]"
      style={{
        background:
          "radial-gradient(ellipse 85% 55% at 0% 25%, rgba(243, 217, 228, 0.55), transparent 58%), radial-gradient(ellipse 70% 50% at 100% 75%, rgba(216, 221, 232, 0.4), transparent 52%), radial-gradient(ellipse 50% 35% at 70% 10%, rgba(255, 252, 248, 0.35), transparent 45%)",
      }}
      animate={{ opacity: [0.055, 0.09, 0.055], x: ["0%", "0.8%", "0%"], y: ["0%", "-0.5%", "0%"] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
