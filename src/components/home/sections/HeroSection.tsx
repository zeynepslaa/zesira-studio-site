"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CinematicBackdrop } from "@/components/visual/CinematicBackdrop";
import { ChromeSpark } from "@/components/visual/ChromeSpark";
import { EditorialStillLife } from "@/components/visual/EditorialStillLife";
import { MagneticHover } from "@/components/interaction/MagneticHover";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

export function HeroSection({
  brand,
  subtitle,
  heroAside,
}: {
  brand: string;
  subtitle: string;
  heroAside?: string;
}) {
  const reduce = useReducedMotion();
  const parts = brand.trim().split(/\s+/);
  const line1 = parts[0] ?? brand;
  const line2 = parts.slice(1).join(" ");

  return (
    <section
      id="home"
      className="paper-hero editorial-section-floor relative flex min-h-[min(100svh,56rem)] overflow-hidden pb-16 pt-24 md:items-center md:min-h-[100svh] md:pb-20 md:pt-20"
    >
      <CinematicBackdrop />

      <div className="pointer-events-none absolute left-[2%] top-[22%] hidden select-none md:block" aria-hidden>
        <p className="editorial-watermark-xl text-[clamp(5rem,22vw,14rem)]">01</p>
        <p className="mt-3 max-w-[8rem] font-display text-[7px] font-semibold uppercase leading-relaxed tracking-[0.38em] text-[#8a8076]/50">
          night issue — digital only
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8 md:pb-6">
          {/* Cover type — left rail */}
          <div className="relative md:col-span-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-3 top-[12%] hidden h-[min(52%,22rem)] w-px bg-gradient-to-b from-transparent via-[rgba(216,221,232,0.95)] to-transparent opacity-80 md:block"
            />
            {!reduce ? (
              <div className="pointer-events-none absolute -left-1 top-2 flex gap-2 opacity-60 md:-left-2">
                <ChromeSpark size={10} className="text-[#b8b0a8]" />
                <ChromeSpark size={7} className="translate-y-3 text-[#c9c2bc]" />
              </div>
            ) : null}

            <motion.p
              className="mb-2 font-zesira-alt text-[clamp(1.15rem,2.8vw,1.65rem)] font-normal leading-none tracking-[0.06em] text-[#7a1528]/75"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.95, delay: reduce ? 0 : 0.02, ease: CINEMATIC_EASE }}
            >
              Editor&apos;s notes —
            </motion.p>
            <motion.p
              className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#7a6f66]"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 1.05, delay: reduce ? 0 : 0.05, ease: CINEMATIC_EASE }}
            >
              Fashion issue / Sims world →
            </motion.p>

            <div className="relative -mx-1 overflow-hidden px-1 md:-mx-2 md:px-2">
              <motion.h1
                className="font-display relative z-10 text-[clamp(3.6rem,14vw,9.5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-[#1f1b18]"
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0 : 1.15, delay: reduce ? 0 : 0.12, ease: CINEMATIC_EASE }}
                style={{ textShadow: "0 2px 40px rgba(255,252,248,0.85)" }}
              >
                {line1}
              </motion.h1>
              {line2 ? (
                <motion.h1
                  className="font-display relative z-20 mt-1 max-w-[96%] text-[clamp(2rem,7.5vw,4.6rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#2a2420]/92 md:mt-2 md:max-w-[88%] md:pl-[min(20vw,12rem)]"
                  initial={reduce ? false : { opacity: 0, x: 22 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: reduce ? 0 : 1.2, delay: reduce ? 0 : 0.28, ease: CINEMATIC_EASE }}
                  style={{
                    textShadow: "0 12px 48px rgba(90, 82, 74, 0.06)",
                  }}
                >
                  {line2}
                </motion.h1>
              ) : null}

              <motion.p
                className="font-[var(--font-caveat),cursive] absolute -right-1 top-[18%] z-30 hidden rotate-[-7deg] text-[1.35rem] text-[#7a1528] md:block"
                initial={reduce ? false : { opacity: 0, rotate: -12 }}
                animate={{ opacity: 1, rotate: -7 }}
                transition={{ delay: reduce ? 0 : 0.55, duration: 0.7 }}
              >
                vol. I — digital
              </motion.p>
            </div>

            <motion.p
              className="mt-8 max-w-xl text-base font-light leading-relaxed text-[#5c534c] md:mt-10 md:max-w-lg md:text-lg"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 1.1, delay: reduce ? 0 : 0.4, ease: CINEMATIC_EASE }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4 md:mt-12"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 1.05, delay: reduce ? 0 : 0.52, ease: CINEMATIC_EASE }}
            >
              <MagneticHover>
                <a
                  href="#projects"
                  className="group/c inline-block rounded-full border border-[#7a1528]/35 bg-[#fffcf7]/95 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2a2622] shadow-[0_14px_40px_rgba(42,38,34,0.08)] transition-[border-color,background-color,color,box-shadow,transform] duration-200 ease-out hover:border-[#7a1528]/55 hover:bg-white hover:text-[#5c0f1f] hover:shadow-[0_20px_50px_rgba(122,21,40,0.12)] active:scale-[0.99]"
                >
                  Enter the spread
                </a>
              </MagneticHover>
              <motion.a
                href="#membership"
                whileHover={reduce ? undefined : { y: -1 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7a6f66] underline decoration-[#d9d0c4] underline-offset-[10px] transition-colors duration-200 hover:text-[#7a1528] hover:decoration-[#7a1528]/35"
              >
                Patron desk
              </motion.a>
            </motion.div>
            <p className="mt-4 max-w-md font-display text-[8px] font-semibold uppercase tracking-[0.34em] text-[#8a8076]/90">
              Issue notes — cursor linger, silver tabs, saves named like love letters
            </p>

            {heroAside?.trim() ? (
              <motion.p
                className="mt-9 max-w-md font-serif text-[0.9rem] font-light italic leading-relaxed tracking-[0.02em] text-[#6e655c] md:mt-11"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0 : 0.95, delay: reduce ? 0 : 0.62, ease: CINEMATIC_EASE }}
              >
                {heroAside}
              </motion.p>
            ) : null}
          </div>

          {/* “Cover” sheet — overlaps typography slightly on desktop */}
          <motion.div
            className="relative min-h-[320px] md:col-span-5 md:min-h-[min(56vh,520px)]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 1.25, delay: reduce ? 0 : 0.18, ease: CINEMATIC_EASE }}
          >
            <div className="absolute -left-4 top-10 z-0 hidden w-[72%] md:block" aria-hidden>
              <EditorialStillLife
                seed={2}
                variant="polaroid"
                caption="late render — kept blurry on purpose"
                className="scale-[0.92] opacity-[0.92]"
              />
            </div>
            <motion.div
              className="paper-edge relative z-10 min-h-[280px] rounded-[1.25rem] border border-[rgba(90,82,74,0.12)] bg-[linear-gradient(145deg,rgba(255,252,248,0.95)_0%,rgba(240,228,232,0.35)_42%,rgba(235,226,214,0.9)_100%)] shadow-[0_32px_80px_rgba(42,38,34,0.12),0_2px_0_rgba(255,255,255,0.8)_inset] md:-translate-x-4 md:min-h-[min(52vh,500px)] md:translate-y-6"
              whileHover={reduce ? undefined : { y: -5, rotate: -0.55 }}
              transition={{ duration: 0.42, ease: CINEMATIC_EASE }}
              aria-hidden
            >
              <div className="absolute inset-0 rounded-[1.25rem] bg-[radial-gradient(ellipse_80%_55%_at_30%_25%,rgba(255,252,248,0.95),transparent_62%),radial-gradient(ellipse_50%_40%_at_90%_80%,rgba(122,21,40,0.06),transparent_58%)]" />
              <div
                className="absolute inset-0 rounded-[1.25rem] opacity-[0.18] mix-blend-multiply"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="relative z-[1] p-5 md:p-7">
                <EditorialStillLife
                  seed={0}
                  variant="window"
                  caption="still from a save — lighting pass, no HUD"
                  embedded
                />
              </div>
              <span className="absolute bottom-6 left-8 hidden font-display text-5xl font-medium leading-none text-[#1f1b18]/25 md:block">
                ZS
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
