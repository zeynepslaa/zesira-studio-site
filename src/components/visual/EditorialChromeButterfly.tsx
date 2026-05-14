"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function EditorialChromeButterfly({
  className = "",
  size = 44,
}: {
  className?: string;
  /** Viewbox units — SVG scales with width/height style */
  size?: number;
}) {
  const reduce = useReducedMotion();
  const s = size;
  const gid = useId().replace(/:/g, "");

  return (
    <motion.div
      className={`pointer-events-none text-[#d8dde8] ${className}`}
      style={{ width: s, height: s * 0.72 }}
      animate={reduce ? undefined : { y: [0, -6, 0], rotate: [0, 6, -4, 0] }}
      transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      aria-hidden
    >
      <svg viewBox="0 0 64 46" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id={`bfly-chrome-${gid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f4ef" />
            <stop offset="40%" stopColor="#d8dde8" />
            <stop offset="100%" stopColor="#9a9faa" />
          </linearGradient>
        </defs>
        <ellipse
          cx="22"
          cy="24"
          rx="17"
          ry="12"
          fill={`url(#bfly-chrome-${gid})`}
          opacity="0.9"
          transform="rotate(-22 22 24)"
        />
        <ellipse
          cx="42"
          cy="24"
          rx="17"
          ry="12"
          fill={`url(#bfly-chrome-${gid})`}
          opacity="0.9"
          transform="rotate(22 42 24)"
        />
        <path d="M32 8v30" stroke="rgba(122,21,40,0.2)" strokeWidth="0.75" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
