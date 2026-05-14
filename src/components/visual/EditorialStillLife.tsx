"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Variant = "window" | "polaroid" | "collage";

function StillLayers({ seed }: { seed: number }) {
  const hues = [
    "from-[#fdf8f3] via-[#ebe2dc] to-[#d8cfc6]",
    "from-[#fffdf9] via-[#efe6ea] to-[#ddd4cc]",
    "from-[#faf6f0] via-[#e5dde8] to-[#d4ccc4]",
  ] as const;
  const h = hues[seed % hues.length];

  return (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${h} opacity-95`} aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_25%_30%,rgba(255,252,248,0.92),transparent_60%),radial-gradient(ellipse_50%_45%_at_90%_85%,rgba(122,21,40,0.08),transparent_58%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(90,82,74,0.12) 2px, rgba(90,82,74,0.12) 3px)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(216,221,232,0.65)] to-transparent opacity-70"
        aria-hidden
      />
      <div className="absolute inset-[14%] rounded-sm bg-[rgba(42,38,34,0.04)] blur-[1.5px]" aria-hidden />
      <div className="absolute bottom-[18%] left-[12%] right-[22%] h-[28%] rounded-sm bg-[rgba(122,21,40,0.05)] blur-[2px]" aria-hidden />
    </>
  );
}

export function EditorialStillLife({
  seed,
  variant = "window",
  caption,
  className = "",
  embedded = false,
}: {
  seed: number;
  variant?: Variant;
  caption?: string;
  className?: string;
  /** Inside another card — drop outer frame chrome */
  embedded?: boolean;
}) {
  const reduce = useReducedMotion();

  let frame: ReactNode;
  if (variant === "polaroid") {
    frame = (
      <div
        className={`polaroid-frame relative overflow-hidden rounded-[2px] bg-[#fffcf7] p-3 pb-10 shadow-[0_22px_50px_rgba(42,38,34,0.1),0_1px_0_rgba(255,255,255,0.9)_inset] ${className}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1px]">
          <StillLayers seed={seed} />
        </div>
        {caption ? (
          <p className="absolute bottom-2 left-3 right-3 text-center font-[var(--font-caveat),cursive] text-[0.95rem] text-[#7a1528]/55">
            {caption}
          </p>
        ) : null}
      </div>
    );
  } else if (variant === "collage") {
    frame = (
      <div className={`relative ${className}`}>
        <div className="absolute -right-3 top-4 z-0 min-h-[160px] w-[58%] rotate-[2.5deg] overflow-hidden rounded-sm border border-[rgba(90,82,74,0.12)] bg-[#fcf9f4] shadow-[0_16px_40px_rgba(42,38,34,0.08)] md:min-h-[220px] relative">
          <StillLayers seed={seed + 1} />
        </div>
        <div className="relative z-10 min-h-[200px] w-[78%] rotate-[-1deg] overflow-hidden rounded-sm border border-[rgba(90,82,74,0.14)] shadow-[0_24px_55px_rgba(42,38,34,0.1)] md:min-h-[min(38vh,360px)]">
          <StillLayers seed={seed} />
        </div>
        {caption ? (
          <p className="relative z-20 mt-5 max-w-[16rem] font-display text-[8px] font-semibold uppercase tracking-[0.32em] text-[#8a8076]">
            {caption}
          </p>
        ) : null}
      </div>
    );
  } else {
    frame = (
      <div
        className={`relative overflow-hidden rounded-[1.05rem] ${embedded ? "border-0 shadow-none" : "border border-[rgba(90,82,74,0.12)] shadow-[0_28px_70px_rgba(42,38,34,0.1)]"} ${className}`}
      >
        <div className="relative min-h-[200px] md:min-h-[min(42vh,380px)]">
          <StillLayers seed={seed} />
        </div>
        {caption ? (
          <p className="border-t border-[rgba(90,82,74,0.08)] bg-[rgba(255,252,248,0.72)] px-4 py-2 text-center font-display text-[8px] font-semibold uppercase tracking-[0.34em] text-[#7a6f66]">
            {caption}
          </p>
        ) : null}
      </div>
    );
  }

  if (reduce) return frame;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.006 }}
      className="will-change-transform"
    >
      {frame}
    </motion.div>
  );
}
