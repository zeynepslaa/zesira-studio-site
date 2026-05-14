"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CinematicBackdrop } from "@/components/visual/CinematicBackdrop";
import { ChromeSpark } from "@/components/visual/ChromeSpark";
import { EditorialStillLife } from "@/components/visual/EditorialStillLife";
import { HeroSignatureLayer } from "@/components/visual/HeroSignatureLayer";
import { MagneticHover } from "@/components/interaction/MagneticHover";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

const SNAP = [0.28, 0.14, 0.22, 1] as const;

export function HeroSection({
  brand,
  subtitle,
  heroAside,
  scrapPhrases = [],
}: {
  brand: string;
  subtitle: string;
  heroAside?: string;
  /** Floating margin captions — editorial overload */
  scrapPhrases?: readonly string[];
}) {
  const reduce = useReducedMotion();
  const parts = brand.trim().split(/\s+/);
  const line1 = parts[0] ?? brand;
  const line2 = parts.slice(1).join(" ");

  return (
    <section
      id="home"
      className="paper-hero editorial-section-floor relative flex min-h-[min(100svh,62rem)] overflow-hidden pb-20 pt-28 md:min-h-[100svh] md:items-stretch md:pb-24 md:pt-24"
    >
      <CinematicBackdrop />
      <HeroSignatureLayer />

      {/* Extra grain + scan drift — hero-only density */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-multiply opacity-[0.14] md:opacity-[0.16]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
        }}
      />
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[3] opacity-[0.12] mix-blend-soft-light"
          animate={{ backgroundPosition: ["0% 0%", "100% 120%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 0%, rgba(255,252,248,0.55) 42%, transparent 62%, rgba(216,221,232,0.35) 100%)",
            backgroundSize: "220% 220%",
          }}
        />
      ) : null}

      <div className="pointer-events-none absolute left-[1%] top-[18%] z-[4] hidden select-none md:block" aria-hidden>
        <p className="editorial-watermark-xl text-[clamp(5rem,22vw,14rem)]">01</p>
        <p className="mt-3 max-w-[9rem] font-display text-[7px] font-semibold uppercase leading-relaxed tracking-[0.38em] text-[#8a8076]/55">
          cover tear — obsessive archive mode
        </p>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[min(100%,88rem)] border-t border-[rgba(216,221,232,0.5)] px-4 pt-5 md:px-8 md:pt-7 lg:px-12">
        <div className="relative grid gap-12 md:grid-cols-12 md:gap-6 md:pb-4 lg:gap-2">
          {/* Typography column — overlaps cover on desktop */}
          <div className="relative z-30 md:col-span-8 md:col-start-1 md:-mr-[min(8vw,4rem)] md:max-w-none">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-2 top-[10%] hidden h-[min(58%,26rem)] w-px bg-gradient-to-b from-transparent via-[rgba(216,221,232,0.95)] to-transparent opacity-90 md:block"
            />
            {!reduce ? (
              <div className="pointer-events-none absolute -left-1 top-1 flex gap-2 opacity-70 md:-left-2">
                <ChromeSpark size={11} className="text-[#b8b0a8]" />
                <ChromeSpark size={8} className="translate-y-3 text-[#c9c2bc]" />
                <ChromeSpark size={9} className="-translate-y-1 text-[#d8dde8]" />
              </div>
            ) : null}

            <motion.p
              className="mb-1 font-zesira-alt text-[clamp(1.2rem,3vw,1.75rem)] font-normal leading-none tracking-[0.07em] text-[#7a1528]/82"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.75, delay: reduce ? 0 : 0.02, ease: CINEMATIC_EASE }}
            >
              Editor&apos;s notes —
            </motion.p>
            <motion.p
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.42em] text-[#7a6f66]"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.82, delay: reduce ? 0 : 0.06, ease: CINEMATIC_EASE }}
            >
              Fashion issue / Sims world →
            </motion.p>

            <div className="relative -mx-1 overflow-visible px-1 md:-mx-2 md:flex md:items-start md:gap-2 md:px-2">
              <span
                aria-hidden
                className="mb-2 hidden shrink-0 pt-[0.2em] font-display text-[clamp(0.62rem,1vw,0.7rem)] font-semibold uppercase leading-[1.15] tracking-[0.44em] text-[#7a1528]/48 md:block"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                girlhood archive
              </span>
              <div className="relative min-w-0 flex-1">
                {/* Ghost headline layer */}
                {!reduce ? (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-[3px] top-[6px] z-0 hidden select-none md:block"
                  >
                    <p
                      className="font-display text-[clamp(3.6rem,14vw,9.5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-[#7a1528]/[0.07]"
                      style={{ transform: "translate(10px, 6px) rotate(-0.8deg)" }}
                    >
                      {line1}
                    </p>
                    {line2 ? (
                      <p
                        className="mt-1 font-display text-[clamp(2rem,7.5vw,4.6rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#7a1528]/[0.05] md:pl-[min(18vw,10rem)]"
                        style={{ transform: "translate(14px, 4px) rotate(0.6deg)" }}
                      >
                        {line2}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                <motion.h1
                  className="font-display relative z-10 text-[clamp(3.65rem,14.5vw,9.75rem)] font-medium leading-[0.86] tracking-[-0.042em] text-[#1f1b18]"
                  initial={reduce ? false : { opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduce ? 0 : 1.05, delay: reduce ? 0 : 0.1, ease: CINEMATIC_EASE }}
                  style={{ textShadow: "0 2px 48px rgba(255,252,248,0.9), 0 18px 60px rgba(122,21,40,0.06)" }}
                >
                  {line1}
                </motion.h1>
                {line2 ? (
                  <motion.h1
                    className="font-display relative z-20 mt-1 max-w-[98%] text-[clamp(2.05rem,7.8vw,4.85rem)] font-normal leading-[1.02] tracking-[-0.025em] text-[#2a2420]/94 md:mt-2 md:max-w-[90%] md:pl-[min(18vw,11rem)]"
                    initial={reduce ? false : { opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: reduce ? 0 : 1.12, delay: reduce ? 0 : 0.22, ease: CINEMATIC_EASE }}
                    style={{
                      textShadow: "0 14px 52px rgba(90, 82, 74, 0.08)",
                    }}
                  >
                    {line2}
                  </motion.h1>
                ) : null}

                <motion.p
                  className="font-[var(--font-caveat),cursive] absolute -right-1 top-[16%] z-30 hidden rotate-[-9deg] text-[1.45rem] text-[#7a1528] md:block"
                  initial={reduce ? false : { opacity: 0, rotate: -14 }}
                  animate={{ opacity: 1, rotate: -9 }}
                  transition={{ delay: reduce ? 0 : 0.45, duration: 0.62 }}
                >
                  Z — stitched to the moodboard
                </motion.p>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-2 left-[6%] z-[5] hidden h-12 w-28 opacity-[0.14] mix-blend-multiply md:block"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(42,38,34,0.45) 0.45px, transparent 0.45px), radial-gradient(circle, rgba(122,21,40,0.14) 0.35px, transparent 0.35px)",
                    backgroundSize: "10px 10px, 7px 7px",
                  }}
                />
              </div>
            </div>

            {/* Floating scraps from site.ts */}
            {scrapPhrases.length > 0 ? (
              <div className="relative mt-8 hidden min-h-[4.5rem] md:block" aria-hidden>
                {scrapPhrases.slice(0, 4).map((phrase, i) => {
                  const positions: { left: string; top: string }[] = [
                    { left: "0%", top: "0" },
                    { left: "22%", top: "18px" },
                    { left: "48%", top: "4px" },
                    { left: "68%", top: "26px" },
                  ];
                  const pos = positions[i] ?? positions[0];
                  return (
                    <motion.span
                      key={`${phrase}-${i}`}
                      className="hand-placed-nudge absolute inline-block max-w-[14rem] rounded-sm border border-[rgba(122,21,40,0.2)] bg-[rgba(255,252,248,0.78)] px-2 py-1.5 font-[var(--font-caveat),cursive] text-[0.92rem] leading-snug text-[#5c534c]/92 shadow-[0_12px_32px_rgba(42,38,34,0.08)]"
                      style={{
                        ["--hand-rotate" as string]: `${-7 + i * 6}deg`,
                        left: pos.left,
                        top: pos.top,
                      }}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduce ? 0 : 0.48 + i * 0.07, duration: 0.52, ease: SNAP }}
                    >
                      {phrase}
                    </motion.span>
                  );
                })}
              </div>
            ) : null}

            <motion.p
              className="pointer-events-none absolute left-[min(72%,28rem)] top-[36%] z-40 hidden max-w-[12rem] rotate-[-4deg] md:block"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: reduce ? 0 : 0.58, duration: 0.5, ease: SNAP }}
              aria-hidden
            >
              <span className="block rounded-sm border border-[rgba(122,21,40,0.24)] bg-[rgba(255,252,248,0.9)] px-2.5 py-2 font-[var(--font-caveat),cursive] text-[1.08rem] leading-snug text-[#7a1528]/88 shadow-[0_16px_40px_rgba(42,38,34,0.12)]">
                girlhood archive — open in another tab
              </span>
            </motion.p>

            <motion.p
              className="mt-10 max-w-xl text-base font-light leading-relaxed text-[#5c534c] md:mt-[4.5rem] md:max-w-lg md:text-lg"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.95, delay: reduce ? 0 : 0.32, ease: CINEMATIC_EASE }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4 md:mt-12"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.88, delay: reduce ? 0 : 0.42, ease: CINEMATIC_EASE }}
            >
              <MagneticHover>
                <a
                  href="#projects"
                  className="group/c inline-block rounded-full border border-[#7a1528]/35 bg-[#fffcf7]/95 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2a2622] shadow-[0_16px_44px_rgba(42,38,34,0.1)] transition-[border-color,background-color,color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:border-[#7a1528]/55 hover:bg-white hover:text-[#5c0f1f] hover:shadow-[0_22px_56px_rgba(122,21,40,0.14)] active:scale-[0.99]"
                >
                  Enter the spread
                </a>
              </MagneticHover>
              <motion.a
                href="#membership"
                whileHover={reduce ? undefined : { y: -2 }}
                transition={{ duration: 0.14, ease: SNAP }}
                className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7a6f66] underline decoration-[#d9d0c4] underline-offset-[10px] transition-colors duration-150 hover:text-[#7a1528] hover:decoration-[#7a1528]/35"
              >
                Patron desk
              </motion.a>
            </motion.div>
            <p className="mt-4 max-w-lg font-display text-[8px] font-semibold uppercase leading-relaxed tracking-[0.36em] text-[#8a8076]/88">
              Diary margins — silver tabs, saves named like perfume, loading screens treated like couture
            </p>

            {heroAside?.trim() ? (
              <motion.p
                className="mt-8 max-w-lg font-serif text-[0.95rem] font-light italic leading-relaxed tracking-[0.02em] text-[#6e655c] md:mt-10"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0 : 0.82, delay: reduce ? 0 : 0.52, ease: CINEMATIC_EASE }}
              >
                {heroAside}
              </motion.p>
            ) : null}
          </div>

          {/* Cover stack — overlaps type, tilted scrapbook */}
          <motion.div
            className="relative z-20 min-h-[340px] md:col-span-6 md:col-start-7 md:-ml-[min(10vw,5rem)] md:min-h-[min(58vh,540px)] md:translate-y-4"
            initial={reduce ? false : { opacity: 0, y: 36, rotate: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: 0.35 }}
            transition={{ duration: reduce ? 0 : 1.1, delay: reduce ? 0 : 0.12, ease: CINEMATIC_EASE }}
          >
            <p
              className="pointer-events-none absolute -left-[min(36%,9rem)] top-[8%] z-30 hidden max-w-[10rem] rotate-[8deg] font-display text-[7px] font-semibold uppercase leading-relaxed tracking-[0.38em] text-[#8a8076]/75 md:block"
              aria-hidden
            >
              saved from a late night build session
            </p>
            <div className="absolute -left-10 top-6 z-0 hidden w-[82%] md:block" aria-hidden>
              <EditorialStillLife
                seed={3}
                variant="polaroid"
                caption="reshade still warm — kept the grain"
                className="scale-[0.88] -rotate-[1.2deg] opacity-[0.88]"
              />
            </div>
            <motion.div
              className="paper-edge hero-cover-flash relative z-10 min-h-[300px] rounded-[1.35rem] border border-[rgba(90,82,74,0.14)] bg-[linear-gradient(148deg,rgba(255,252,248,0.96)_0%,rgba(240,228,232,0.42)_40%,rgba(235,226,214,0.92)_100%)] shadow-[0_36px_90px_rgba(42,38,34,0.14),0_2px_0_rgba(255,255,255,0.82)_inset] md:-translate-x-4 md:min-h-[min(54vh,520px)] md:translate-y-10 md:rotate-[1.1deg]"
              whileHover={reduce ? undefined : { y: -8, rotate: 0.2 }}
              transition={{ duration: 0.32, ease: CINEMATIC_EASE }}
              aria-hidden
            >
              <div className="absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(ellipse_82%_58%_at_28%_22%,rgba(255,252,248,0.95),transparent_62%),radial-gradient(ellipse_48%_42%_at_92%_78%,rgba(122,21,40,0.08),transparent_58%)]" />
              <div
                className="absolute right-0 top-0 z-[3] h-28 w-28 rounded-bl-[1.35rem] bg-[radial-gradient(circle_at_82%_18%,rgba(255,252,248,0.92),transparent_58%)] opacity-75 mix-blend-screen"
                aria-hidden
              />
              <div
                className="absolute inset-0 rounded-[1.35rem] opacity-[0.2] mix-blend-multiply"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="relative z-[4] p-5 md:p-8">
                <EditorialStillLife
                  seed={0}
                  variant="window"
                  caption="still from a save — lighting pass, no HUD"
                  embedded
                />
              </div>
              <span className="absolute bottom-5 left-7 hidden font-display text-[clamp(3rem,10vw,4.5rem)] font-medium leading-none text-[#1f1b18]/22 md:block">
                Z
              </span>
              <span className="absolute bottom-7 right-10 hidden font-[var(--font-caveat),cursive] text-[1.1rem] text-[#7a1528]/45 md:block">
                digital femininity
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
