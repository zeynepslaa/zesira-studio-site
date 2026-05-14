"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/**
 * Glossy crystal “plumbob” silhouette — original vector, editorial palette.
 * Reads as playful universe marker without copying game marketing assets.
 */
export function EditorialPlumbobMark({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const id = useId().replace(/:/g, "");

  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden
      initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <motion.div
        className="relative drop-shadow-[0_22px_48px_rgba(42,38,34,0.18),0_0_40px_rgba(122,21,40,0.12)]"
        animate={reduce ? undefined : { y: [0, -6, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 140" className="h-[min(28vw,9.5rem)] w-auto md:h-[min(22vw,11rem)]" fill="none">
          <defs>
            <linearGradient id={`pb-body-${id}`} x1="50" y1="0" x2="50" y2="140" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ecfdf5" />
              <stop offset="0.35" stopColor="#a7f3d0" />
              <stop offset="0.55" stopColor="#6ee7b7" />
              <stop offset="0.72" stopColor="#34d399" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <linearGradient id={`pb-gloss-${id}`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255,252,248,0.95)" />
              <stop offset="0.45" stopColor="rgba(255,252,248,0.08)" />
              <stop offset="1" stopColor="rgba(255,252,248,0)" />
            </linearGradient>
            <linearGradient id={`pb-chrome-${id}`} x1="100" y1="0" x2="0" y2="140" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(216,221,232,0.9)" />
              <stop offset="0.5" stopColor="rgba(255,252,248,0.75)" />
              <stop offset="1" stopColor="rgba(243,217,228,0.35)" />
            </linearGradient>
            <filter id={`pb-soft-${id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Main crystal */}
          <path
            d="M50 4 L92 52 L50 136 L8 52 Z"
            fill={`url(#pb-body-${id})`}
            stroke="rgba(255,252,248,0.65)"
            strokeWidth="1.2"
          />
          {/* Facet lines */}
          <path d="M50 4 L50 136" stroke="rgba(255,252,248,0.22)" strokeWidth="0.9" />
          <path d="M8 52 L92 52" stroke="rgba(4,120,87,0.12)" strokeWidth="0.9" />
          <path d="M50 4 L8 52" stroke="rgba(255,252,248,0.18)" strokeWidth="0.7" />
          <path d="M50 4 L92 52" stroke="rgba(255,252,248,0.15)" strokeWidth="0.7" />
          {/* Upper chrome facet */}
          <path d="M50 4 L72 38 L50 52 L28 38 Z" fill={`url(#pb-chrome-${id})`} opacity={0.85} />
          {/* Gloss sweep */}
          <path d="M22 18 L58 12 L68 48 L24 56 Z" fill={`url(#pb-gloss-${id})`} opacity={0.92} filter={`url(#pb-soft-${id})`} />
          {/* Core glint */}
          <ellipse cx="44" cy="38" rx="8" ry="14" fill="rgba(255,252,248,0.55)" transform="rotate(-18 44 38)" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
