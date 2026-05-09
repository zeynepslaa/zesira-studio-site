"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ContentStatus } from "@/content/types";
import { tapeLabel } from "@/lib/status";

function tiltForStatus(status: ContentStatus): number {
  switch (status) {
    case "coming-soon":
      return -3.4;
    case "in-development":
      return 2.3;
    case "beta":
      return -1.8;
    default:
      return 2.2;
  }
}

type Props = { status: ContentStatus };

/** Archival tape — cherry “COMING SOON” sticker reads taped-on; other statuses stay warm paper tape */
export function EditorialTapeLabel({ status }: Props) {
  const reduce = useReducedMotion();
  const text = tapeLabel(status);
  const tilt = tiltForStatus(status);
  const isCherrySticker = status === "coming-soon";

  return (
    <motion.span
      className="relative isolate inline-flex shrink-0 select-none"
      style={{ transform: `rotate(${tilt}deg)` }}
      initial={false}
      whileHover={reduce ? undefined : { rotate: tilt * 0.92, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
    >
      <span aria-hidden className="absolute -bottom-1.5 left-0 right-0 h-4 rounded-[40%] bg-[rgba(42,38,34,0.14)] blur-md" />

      {/* Silver “tape” strips — corners feel physically stuck */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -left-1 top-1 h-2 w-7 -rotate-[18deg] rounded-[1px] shadow-[0_1px_0_rgba(255,252,248,0.5)_inset] ${
          isCherrySticker ? "bg-[rgba(255,252,248,0.55)]" : "bg-[rgba(255,252,248,0.42)]"
        }`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-1.5 bottom-1 h-2 w-8 rotate-[14deg] rounded-[1px] shadow-[0_1px_0_rgba(255,252,248,0.45)_inset] ${
          isCherrySticker ? "bg-[rgba(216,221,232,0.5)]" : "bg-[rgba(255,252,248,0.38)]"
        }`}
      />

      <span
        className={`relative block overflow-visible px-[13px] py-[7px] font-display text-[0.65rem] font-semibold uppercase leading-none tracking-[0.28em] sm:text-[0.68rem] sm:tracking-[0.32em] ${
          isCherrySticker
            ? "ripped-tape-red text-[#fffcf7]"
            : "font-[var(--font-caveat),cursive] text-[1.08rem] font-bold tracking-[0.08em] text-[#5c0f1f] sm:text-[1.18rem]"
        }`}
        style={
          isCherrySticker
            ? {
                background: "linear-gradient(168deg, #8a1e32 0%, #7a1528 40%, #5c0f1f 100%)",
                textShadow: "0 1px 0 rgba(42, 38, 34, 0.25)",
                border: "1px solid rgba(255, 252, 248, 0.22)",
                boxShadow:
                  "0 16px 28px rgba(122, 21, 40, 0.22), 0 1px 0 rgba(255,252,248,0.12) inset, 0 0 0 1px rgba(42,38,34,0.06) inset",
              }
            : {
                background:
                  "linear-gradient(168deg, rgba(255,250,242,0.78) 0%, rgba(235,220,200,0.62) 46%, rgba(222,202,182,0.58) 100%)",
                clipPath:
                  "polygon(0% 24%, 6% 0%, 50% 5%, 93% 0%, 100% 20%, 100% 80%, 95% 100%, 47% 97%, 5% 100%, 0% 78%)",
                textShadow: "0 1px 0 rgba(255, 252, 248, 0.65)",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                boxShadow:
                  "0 14px 26px rgba(42, 38, 34, 0.12), 0 2px 0 rgba(255,252,248,0.65) inset, 0 0 0 1px rgba(90, 82, 74, 0.06) inset",
              }
        }
      >
        {!isCherrySticker ? (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.32] mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23t)' opacity='0.55'/%3E%3C/svg%3E")`,
            }}
          />
        ) : (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23t)' opacity='0.55'/%3E%3C/svg%3E")`,
            }}
          />
        )}
        <span className={`relative ${isCherrySticker ? "" : "uppercase"}`}>{text}</span>
      </span>
    </motion.span>
  );
}
