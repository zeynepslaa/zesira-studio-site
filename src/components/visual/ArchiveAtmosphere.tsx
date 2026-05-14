"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ChromeSpark } from "@/components/visual/ChromeSpark";
import { EDITORIAL_REEL_SPRING } from "@/lib/editorial-motion";

const MICRO_PLACEMENTS: readonly {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate: number;
  maxW: string;
}[] = [
  { top: "10%", left: "2%", rotate: -2.4, maxW: "9rem" },
  { top: "28%", right: "4%", rotate: 1.8, maxW: "8rem" },
  { top: "52%", left: "4%", rotate: -1.2, maxW: "10rem" },
  { top: "66%", right: "7%", rotate: 2.2, maxW: "8.5rem" },
  { bottom: "32%", left: "4%", rotate: -1.6, maxW: "9rem" },
  { bottom: "12%", right: "6%", rotate: 1.4, maxW: "8rem" },
  { top: "78%", left: "10%", rotate: -2.1, maxW: "7rem" },
  { top: "40%", left: "16%", rotate: 0.9, maxW: "7.5rem" },
];

const POLAROIDS: readonly {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate: number;
  delay: number;
  hue: number;
}[] = [
  { top: "11%", left: "1%", rotate: -9, delay: 0, hue: 0 },
  { top: "38%", right: "0%", rotate: 7, delay: 0.35, hue: 1 },
  { bottom: "18%", left: "2%", rotate: 5, delay: 0.7, hue: 2 },
  { top: "58%", left: "8%", rotate: -4, delay: 1.05, hue: 0 },
];

const STAMPS: readonly { text: string; top?: string; bottom?: string; left?: string; right?: string; rotate: number }[] = [
  { text: "ZESIRA — ARCHIVE", top: "22%", left: "8%", rotate: -14 },
  { text: "FILED", top: "55%", left: "3%", rotate: -8 },
  { text: "COLLECTIBLE", top: "31%", right: "12%", rotate: 11 },
  { text: "SCRAPBOOKED", bottom: "36%", right: "6%", rotate: -6 },
];

const SILVER_DUST: readonly { top: string; left: string; s: number; d: number }[] = Array.from({ length: 28 }, (_, i) => ({
  top: `${(i * 41 + 3) % 96}%`,
  left: `${(i * 59 + 11) % 97}%`,
  s: 3 + (i % 3),
  d: 2.4 + (i % 7) * 0.35,
}));

function CursorBloom() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 420, damping: 48, mass: 0.38 });
  const sy = useSpring(y, { stiffness: 420, damping: 48, mass: 0.38 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[4] h-[min(38vmin,300px)] w-[min(38vmin,300px)] rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(255,252,248,0.5)_0%,rgba(243,217,228,0.22)_38%,rgba(122,21,40,0.03)_55%,transparent_72%)] blur-2xl mix-blend-multiply"
        style={{ left: sx, top: sy, x: "-50%", y: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[4] h-20 w-20 rounded-full border border-[rgba(216,221,232,0.55)] bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,transparent_72%)] blur-[2px]"
        style={{ left: sx, top: sy, x: "-50%", y: "-50%", opacity: 0.42 }}
      />
    </>
  );
}

function MagazineGlossLayer() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[3] overflow-hidden">
      {!reduce ? <div className="archive-magazine-gloss" /> : <div className="archive-magazine-gloss opacity-[0.1]" />}
    </div>
  );
}

function FloatingPolaroids({ reduce }: { reduce: boolean }) {
  const hues = [
    "from-[#faf4ef] via-[#ebe0d8] to-[#dfd2ca]",
    "from-[#fff9fb] via-[#f0e4ea] to-[#e5d8e0]",
    "from-[#f8f7fb] via-[#e8eaf0] to-[#dcd8e2]",
  ] as const;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[2] overflow-hidden max-md:hidden">
      {POLAROIDS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-[5.5rem] md:w-[7rem]"
          style={{
            ...("top" in p && p.top ? { top: p.top } : {}),
            ...("bottom" in p && p.bottom ? { bottom: p.bottom } : {}),
            ...("left" in p && p.left ? { left: p.left } : {}),
            ...("right" in p && p.right ? { right: p.right } : {}),
            rotate: p.rotate,
          }}
          initial={false}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -10, 0],
                  rotate: [p.rotate, p.rotate + 1.2, p.rotate],
                }
          }
          transition={{
            duration: 11 + i * 1.4,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className={`relative overflow-hidden rounded-sm border-[0.45rem] border-[#fffcf7] bg-gradient-to-br shadow-[0_22px_50px_rgba(42,38,34,0.12),0_1px_0_rgba(255,252,248,0.9)_inset] ${hues[p.hue % hues.length]}`}
            style={{ filter: "blur(0.35px)" }}
          >
            <div className="aspect-[4/4.5] w-full opacity-95">
              <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,252,248,0.35)_0%,transparent_42%,rgba(122,21,40,0.04)_100%)]" />
              <div
                className="absolute inset-0 opacity-[0.14] mix-blend-multiply"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
            <div className="h-5 w-full bg-[#fffcf7]/95" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ArchiveWatermarkStamps() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[2] overflow-hidden max-md:hidden">
      {STAMPS.map((s, i) => (
        <span
          key={i}
          className="absolute font-display text-[10px] font-semibold uppercase tracking-[0.42em] text-[#c8c2b8]/[0.14] select-none"
          style={{
            ...(s.top ? { top: s.top } : {}),
            ...(s.bottom ? { bottom: s.bottom } : {}),
            ...(s.left ? { left: s.left } : {}),
            ...(s.right ? { right: s.right } : {}),
            transform: `rotate(${s.rotate}deg)`,
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
}

function RotatingIssueDial({ reduce }: { reduce: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-7 right-5 z-[6] hidden flex-col items-center gap-1 md:flex"
    >
      <div className="relative flex h-[3.35rem] w-[3.35rem] items-center justify-center">
        <motion.div
          className="archive-issue-ring absolute inset-0 rounded-full border border-dashed border-[rgba(200,195,188,0.45)]"
          style={{ willChange: "transform" }}
        />
        {!reduce ? (
          <motion.div
            className="absolute inset-[3px] rounded-full border border-[rgba(243,217,228,0.55)]"
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />
        ) : null}
        <span className="relative font-display text-[0.68rem] font-medium tabular-nums tracking-[0.12em] text-[#7a1528]/45">
          02
        </span>
      </div>
      <span className="font-display text-[8px] font-semibold uppercase tracking-[0.55em] text-[#b8b0a8]/80">Issue</span>
    </div>
  );
}

function SilverMicroSparkles({ reduce }: { reduce: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {SILVER_DUST.map((d, i) => (
        <span
          key={i}
          className={`absolute opacity-[0.55] ${reduce ? "" : "sparkle-twinkle"}`}
          style={
            {
              top: d.top,
              left: d.left,
              animationDelay: `${d.d}s`,
            } as CSSProperties
          }
        >
          <ChromeSpark size={d.s} className="text-[rgba(216,221,232,0.95)] drop-shadow-[0_0_6px_rgba(255,252,248,0.8)]" />
        </span>
      ))}
    </div>
  );
}

function ScatteredMicroNotes({ notes }: { notes: readonly string[] }) {
  const reduce = useReducedMotion();
  if (!notes.length) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[3] overflow-hidden max-md:hidden">
      {notes.slice(0, MICRO_PLACEMENTS.length).map((note, i) => {
        const slot = MICRO_PLACEMENTS[i];
        const fromLeft = Boolean(slot.left);
        const fromRight = Boolean(slot.right);
        const mag = 120 + (i % 3) * 28;
        const fromX = fromRight && !fromLeft ? mag : fromLeft && !fromRight ? -mag : i % 2 === 0 ? -mag : mag;
        return (
          <span
            key={i}
            className="hand-placed-nudge absolute max-w-[var(--mw,10rem)]"
            style={
              {
                ...(slot.top ? { top: slot.top } : {}),
                ...(slot.bottom ? { bottom: slot.bottom } : {}),
                ...(slot.left ? { left: slot.left } : {}),
                ...(slot.right ? { right: slot.right } : {}),
                "--hand-rotate": `${slot.rotate}deg`,
                "--mw": slot.maxW,
              } as CSSProperties
            }
          >
            <motion.span
              className="inline-block font-[var(--font-caveat),cursive] text-[1.05rem] leading-snug text-[#7a1528]/42 will-change-transform md:text-[1.12rem]"
              initial={reduce ? false : { x: fromX, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: reduce ? 0 : 0.18 + i * 0.07,
                opacity: { duration: reduce ? 0 : 0.36, ease: "easeOut" },
                x: reduce ? { duration: 0 } : EDITORIAL_REEL_SPRING,
              }}
            >
              <motion.span
                className="inline-block will-change-transform"
                animate={reduce ? undefined : { x: [0, 5, -4, 0] }}
                transition={{
                  duration: 18 + (i % 4) * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: reduce ? 0 : 1 + i * 0.08,
                }}
              >
                {note}
              </motion.span>
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}

type Props = { archiveMicroNotes: readonly string[] };

/** Vogue-meets-Tumblr atmosphere: gloss, polaroids, stamps, cursor bloom, silver dust, margin whispers */
export function ArchiveAtmosphere({ archiveMicroNotes }: Props) {
  const reduce = useReducedMotion();

  return (
    <>
      <MagazineGlossLayer />
      <FloatingPolaroids reduce={!!reduce} />
      <ArchiveWatermarkStamps />
      <SilverMicroSparkles reduce={!!reduce} />
      <ScatteredMicroNotes notes={archiveMicroNotes} />
      <CursorBloom />
      <RotatingIssueDial reduce={!!reduce} />
    </>
  );
}
