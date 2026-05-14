"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChromeSpark } from "@/components/visual/ChromeSpark";

type Star = {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  kind: "dot" | "spark";
};

export function FloatingStars({ count = 72 }: { count?: number }) {
  const reduce = useReducedMotion();

  const stars: Star[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${(i * 37 + 5) % 100}%`,
    left: `${(i * 53 + 9) % 100}%`,
    size: 1.5 + (i % 4) * 0.35,
    delay: (i % 11) * 0.26,
    duration: 6 + (i % 6),
    kind: i % 2 === 0 ? "spark" : "dot",
  }));

  const cssVars = (s: Star) => ({
    ["--star-delay" as string]: `${s.delay}s`,
    ["--star-dur" as string]: `${s.duration}s`,
  });

  if (reduce) {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
        {stars.map((s) =>
          s.kind === "spark" ? (
            <span key={s.id} className="absolute opacity-[0.55]" style={{ top: s.top, left: s.left }}>
              <ChromeSpark size={9 + (s.id % 3)} />
            </span>
          ) : (
            <span
              key={s.id}
              className="absolute rounded-full bg-[rgba(200,195,188,0.55)]"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                boxShadow: "0 0 10px rgba(255,252,248,0.55), 0 0 22px rgba(122,21,40,0.06)",
              }}
            />
          ),
        )}
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {stars.map((s) =>
        s.kind === "spark" ? (
          <motion.span
            key={s.id}
            className="editorial-star-chip absolute opacity-[0.62] transition duration-300 group-hover/editorial:scale-[1.16] group-hover/editorial:opacity-90"
            style={{ top: s.top, left: s.left, ...cssVars(s) }}
            animate={{ y: [0, -9, 0], rotate: [0, 5, 0] }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChromeSpark size={8 + (s.id % 4)} />
          </motion.span>
        ) : (
          <motion.span
            key={s.id}
            className="editorial-star-chip absolute rounded-full bg-[rgba(200,195,188,0.5)] transition duration-300 group-hover/editorial:scale-125 group-hover/editorial:opacity-95"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              boxShadow:
                "0 0 12px rgba(255,252,248,0.55), 0 0 24px rgba(182,175,168,0.25)",
              ...cssVars(s),
            }}
            animate={{
              y: [0, -11, 0],
              opacity: [0.32, 0.78, 0.32],
              filter: [
                "blur(0px) drop-shadow(0 0 4px rgba(255,252,248,0.35))",
                "blur(0.4px) drop-shadow(0 0 10px rgba(200,190,210,0.35))",
                "blur(0px) drop-shadow(0 0 4px rgba(255,252,248,0.35))",
              ],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ),
      )}
    </div>
  );
}
