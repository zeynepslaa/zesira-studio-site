"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Original campaign plumbob — leopard panel + emerald facets + chrome gloss (not EA asset). */
export function EditorialPlumbobMark({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");

  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      style={{ filter: "drop-shadow(0 20px 40px rgba(42,38,34,0.22))" }}
      animate={reduce ? undefined : { y: [0, -14, 0], rotate: [-2.5, 4, -1.5, -2.5] }}
      transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <svg viewBox="0 0 88 118" className="h-[7.25rem] w-[5.1rem] md:h-[9.25rem] md:w-[6.6rem]" fill="none">
        <defs>
          <linearGradient id={`plumb-chrome-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffdf9" />
            <stop offset="38%" stopColor="#d8d2cc" />
            <stop offset="100%" stopColor="#8f8a84" />
          </linearGradient>
          <linearGradient id={`plumb-emerald-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8fbc93" />
            <stop offset="55%" stopColor="#3d6b42" />
            <stop offset="100%" stopColor="#1f3a24" />
          </linearGradient>
          <pattern id={`plumb-leopard-${uid}`} patternUnits="userSpaceOnUse" width="10" height="10">
            <rect width="10" height="10" fill="#c49a6c" />
            <ellipse cx="3.2" cy="3.8" rx="2.1" ry="1.25" fill="#2a1810" opacity="0.44" transform="rotate(-18 3.2 3.8)" />
            <ellipse cx="7.4" cy="6.2" rx="1.7" ry="1.05" fill="#2a1810" opacity="0.36" transform="rotate(22 7.4 6.2)" />
            <ellipse cx="6.1" cy="2.2" rx="1.1" ry="0.85" fill="#2a1810" opacity="0.32" />
          </pattern>
          <linearGradient id={`plumb-flash-${uid}`} x1="20%" y1="0%" x2="80%" y2="40%">
            <stop offset="0%" stopColor="rgba(255,252,248,0)" />
            <stop offset="45%" stopColor="rgba(255,252,248,0.55)" />
            <stop offset="100%" stopColor="rgba(255,252,248,0)" />
          </linearGradient>
        </defs>
        <path d="M44 3 L79 44 L44 115 L9 44 Z" fill={`url(#plumb-emerald-${uid})`} />
        <path d="M44 3 L79 44 L44 70 Z" fill={`url(#plumb-chrome-${uid})`} opacity="0.42" />
        <path d="M9 44 L44 115 L44 70 Z" fill="#1a3220" opacity="0.58" />
        <path
          d="M29 46 L44 53 L59 46 L53 84 L44 96 L35 84 Z"
          fill={`url(#plumb-leopard-${uid})`}
          stroke="rgba(255,252,248,0.4)"
          strokeWidth="0.4"
        />
        <path d="M44 14 L66 40 L44 52 L22 40 Z" fill={`url(#plumb-flash-${uid})`} opacity="0.9" />
      </svg>
    </motion.div>
  );
}
