"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChromeSpark } from "@/components/visual/ChromeSpark";
import { EditorialPlumbobMark } from "@/components/visual/EditorialPlumbobMark";
import { EditorialChromeButterfly } from "@/components/visual/EditorialChromeButterfly";

/** Dense cover atmosphere — leopard plumbob, flash, tape, chrome, butterflies */
export function HeroSignatureLayer() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {/* Subtle leopard — fashion archive, very low contrast */}
      <EditorialPlumbobMark className="absolute right-[2%] top-[10%] z-[3] opacity-[0.92] md:right-[4%] md:top-[8%]" />

      <div className="absolute right-[14%] top-[38%] z-[3] hidden opacity-80 md:block">
        <EditorialChromeButterfly size={46} />
      </div>
      <div className="absolute bottom-[22%] left-[10%] z-[3] hidden opacity-70 lg:block">
        <EditorialChromeButterfly size={38} />
      </div>

      {/* Red tape — editorial label */}
      <div
        className="hand-placed-nudge absolute left-[8%] top-[48%] z-[3] hidden md:block"
        style={{ ["--hand-rotate" as string]: "-9deg" }}
      >
        <div className="rounded-sm border border-[rgba(90,15,28,0.35)] bg-[linear-gradient(180deg,#9b1b2f_0%,#6d0f1f_100%)] px-3 py-1.5 shadow-[0_10px_26px_rgba(42,38,34,0.18)]">
          <p className="font-display text-[6px] font-semibold uppercase tracking-[0.42em] text-[#fff5f0]/95">issue</p>
          <p className="mt-0.5 font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-white">no. 001</p>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 120% 80% at 50% 50%, transparent 40%, rgba(90,82,74,0.15) 100%),
            repeating-linear-gradient(
              -32deg,
              transparent,
              transparent 3px,
              rgba(42,38,34,0.06) 3px,
              rgba(42,38,34,0.06) 4px
            ),
            radial-gradient(circle at 20% 30%, rgba(122,21,40,0.08) 0.5px, transparent 1.2px),
            radial-gradient(circle at 60% 70%, rgba(42,38,34,0.07) 0.5px, transparent 1.2px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 14px 14px, 18px 18px",
        }}
      />

      {/* Flash / on-camera blowout */}
      <div
        className="absolute -left-[20%] -top-[25%] h-[85%] w-[70%] rounded-full opacity-[0.35]"
        style={{
          background: "radial-gradient(ellipse 55% 50% at 45% 42%, rgba(255,252,248,0.95) 0%, rgba(255,252,248,0.35) 35%, transparent 62%)",
          mixBlendMode: "soft-light",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Tape strips */}
      <div
        className="hand-placed-nudge absolute left-[6%] top-[18%] h-3 w-[min(42vw,18rem)] -rotate-[2.5deg] opacity-90 shadow-sm"
        style={{
          ["--hand-rotate" as string]: "-2deg",
          background:
            "linear-gradient(90deg, rgba(255,252,248,0.2) 0%, rgba(216,221,232,0.82) 18%, rgba(243,217,228,0.65) 50%, rgba(216,221,232,0.78) 82%, rgba(255,252,248,0.15) 100%)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.7) inset",
        }}
      />
      <div
        className="hand-placed-nudge absolute bottom-[26%] right-[4%] h-2.5 w-[min(36vw,14rem)] rotate-[3deg] opacity-85"
        style={{
          ["--hand-rotate" as string]: "4deg",
          background:
            "linear-gradient(90deg, rgba(243,217,228,0.3) 0%, rgba(255,252,248,0.75) 40%, rgba(216,221,232,0.7) 100%)",
        }}
      />

      {/* Chrome stars scatter */}
      <div className="absolute left-[12%] top-[32%] hidden opacity-80 md:block">
        <ChromeSpark size={14} className="text-[#e8e4df]" />
      </div>
      <div className="absolute right-[18%] top-[24%] hidden opacity-70 md:block">
        <ChromeSpark size={11} className="text-[#f3d9e4]" />
      </div>
      <div className="absolute right-[28%] bottom-[38%] hidden opacity-75 lg:block">
        <ChromeSpark size={13} className="text-[#d8dde8]" />
      </div>
      <div className="absolute left-[22%] bottom-[20%] hidden opacity-60 xl:block">
        <ChromeSpark size={9} className="text-[#c9c2bc]" />
      </div>

      {/* Handwritten symbols + stickers */}
      <span
        className="hand-placed-nudge absolute right-[10%] top-[40%] hidden font-[var(--font-caveat),cursive] text-[2.1rem] text-[#7a1528]/35 md:block"
        style={{ ["--hand-rotate" as string]: "-11deg" }}
      >
        ✧
      </span>
      <span
        className="hand-placed-nudge absolute left-[4%] bottom-[32%] hidden font-[var(--font-caveat),cursive] text-[1.85rem] text-[#7a1528]/30 lg:block"
        style={{ ["--hand-rotate" as string]: "8deg" }}
      >
        ✦
      </span>

      <div
        className="hand-placed-nudge absolute right-[6%] top-[52%] hidden rounded-sm border border-[rgba(122,21,40,0.22)] bg-[rgba(255,252,248,0.82)] px-2 py-1.5 shadow-[0_10px_28px_rgba(42,38,34,0.08)] md:block"
        style={{ ["--hand-rotate" as string]: "6deg" }}
      >
        <p className="font-display text-[6px] font-semibold uppercase tracking-[0.38em] text-[#7a1528]/80">cover story</p>
        <p className="mt-0.5 font-[var(--font-caveat),cursive] text-[0.95rem] leading-none text-[#5c534c]/80">not a template</p>
      </div>

      <div
        className="hand-placed-nudge absolute bottom-[14%] left-[8%] hidden rounded-full border border-dashed border-[rgba(122,21,40,0.28)] bg-[rgba(243,217,228,0.25)] px-3 py-1.5 md:block"
        style={{ ["--hand-rotate" as string]: "-5deg" }}
      >
        <p className="font-display text-[6px] font-semibold uppercase tracking-[0.34em] text-[#7a1528]/75">zesira sigil</p>
      </div>

      {!reduce ? (
        <motion.div
          className="absolute left-1/2 top-[8%] h-px w-[min(90vw,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(216,221,232,0.55)] to-transparent opacity-70"
          animate={{ opacity: [0.45, 0.85, 0.45], scaleX: [0.92, 1, 0.92] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
    </div>
  );
}
