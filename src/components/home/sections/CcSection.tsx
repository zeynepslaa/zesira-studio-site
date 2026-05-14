"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CcCollection } from "@/content/types";
import { useComingSoon } from "@/components/ui/ComingSoonProvider";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

function ArchiveField({ seed }: { seed: number }) {
  const reduce = useReducedMotion();
  const hues = [
    "from-[#faf6f0] via-[#ebe3dc] to-[#d9cfc6]",
    "from-[#fdf9f5] via-[#e8e0da] to-[#cfc4bc]",
    "from-[#fffdf9] via-[#efe8e2] to-[#e0d5ce]",
  ] as const;
  const h = hues[seed % hues.length];
  return (
    <motion.div
      className={`group/af relative h-[min(36vw,280px)] overflow-hidden bg-gradient-to-br ${h} md:h-[min(28vw,320px)]`}
      aria-hidden
      initial={reduce ? undefined : { opacity: 0.9, scale: 1.02 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 1.25, ease: CINEMATIC_EASE }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_52%_at_22%_28%,rgba(255,252,248,0.88),transparent_58%),radial-gradient(ellipse_44%_38%_at_92%_78%,rgba(122,21,40,0.07),transparent_56%),radial-gradient(ellipse_100%_80%_at_50%_100%,rgba(220,210,200,0.25),transparent_55%)]" />
      <div
        className="editorial-rain-sheen absolute inset-0 opacity-[0.18] mix-blend-soft-light"
        style={{
          backgroundImage:
            "linear-gradient(118deg, transparent 0%, rgba(255,252,248,0.14) 45%, rgba(180,170,185,0.06) 52%, transparent 65%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.11] mix-blend-multiply transition-opacity duration-[1.1s] group-hover/af:opacity-[0.14]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(90,82,74,0.14) 2px, rgba(90,82,74,0.14) 3px)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(42,38,34,0.06)] via-transparent to-[rgba(255,252,248,0.2)]" />
    </motion.div>
  );
}

export function CcSection({ intro, collections }: { intro: string; collections: CcCollection[] }) {
  const reduce = useReducedMotion();
  const { openComingSoon } = useComingSoon();

  return (
    <section id="cc" className="paper-section-0 editorial-section-floor relative scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="grid gap-8 md:grid-cols-12 md:items-end"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: reduce ? 0 : 1.05, ease: CINEMATIC_EASE }}
        >
          <div className="relative md:col-span-8 md:-rotate-[0.35deg]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#7a6f66]">CC collections</p>
            <h2 className="mt-5 font-display text-[clamp(2.75rem,10vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.03em] text-[#1f1b18]">
              Fashion
              <span className="relative mt-1 block pl-[min(10vw,6rem)] text-[#7a1528]/88">
                archive
                <span
                  aria-hidden
                  className="hand-placed-nudge pointer-events-none absolute -right-2 top-1/2 z-10 hidden max-w-[9rem] translate-y-[-40%] md:block"
                  style={{ ["--hand-rotate" as string]: "8deg" }}
                >
                  <span className="block rounded-sm border border-[rgba(122,21,40,0.2)] bg-[rgba(255,252,248,0.9)] px-2 py-1.5 font-display text-[6px] font-semibold uppercase leading-relaxed tracking-[0.34em] text-[#7a1528]/75 shadow-md">
                    too many swatches — keep all
                  </span>
                </span>
              </span>
            </h2>
            <p className="mt-8 max-w-2xl font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:text-[1.1rem]">{intro}</p>
          </div>
          <p className="font-[var(--font-caveat),cursive] text-2xl leading-snug text-[#7a1528]/85 md:col-span-4 md:text-right md:text-[1.85rem]">
            collage moodboard — still life
          </p>
        </motion.div>

        <div className="mt-8 md:mt-10">
          {collections.map((c, i) => {
            const flip = i % 2 === 1;
            const n = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={c.id}
                role="button"
                tabIndex={0}
                className="cursor-pointer border-b border-[rgba(90,82,74,0.1)] py-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a1528]/40 md:grid md:grid-cols-12 md:gap-8 md:py-14"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : i * 0.07, ease: CINEMATIC_EASE }}
                onClick={() => openComingSoon(`${c.title} — ${c.season}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openComingSoon(`${c.title} — ${c.season}`);
                  }
                }}
              >
                <div className={`relative z-10 md:col-span-5 ${flip ? "md:order-2 md:text-right" : ""}`}>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.36em] text-[#7a6f66]">{c.season}</p>
                  <h3 className="mt-3 font-display text-[clamp(1.9rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#1f1b18]">
                    {c.title}
                  </h3>
                  <p className={`mt-5 max-w-md font-serif text-[1.02rem] leading-[1.65] text-[#5c534c] md:text-[1.08rem] ${flip ? "md:ml-auto" : ""}`}>
                    {c.mood}
                  </p>
                </div>
                <figure
                  className={`polaroid-frame relative mt-10 bg-[#fffcf7] p-3 pb-8 shadow-[0_22px_55px_rgba(42,38,34,0.08)] md:col-span-7 md:mt-0 ${flip ? "md:order-1 md:-translate-y-4 md:rotate-[0.4deg]" : "md:translate-y-2 md:-rotate-[0.35deg]"}`}
                >
                  <span
                    className={`pointer-events-none absolute -top-2 font-display text-[clamp(2.5rem,12vw,6rem)] font-medium leading-none text-[#ebe4dc]/95 select-none ${flip ? "right-4" : "left-2"}`}
                    aria-hidden
                  >
                    {n}
                  </span>
                  <div className="overflow-hidden rounded-[1px]">
                    <ArchiveField seed={i} />
                  </div>
                  <figcaption className="mt-3 text-center font-display text-[8px] font-semibold uppercase tracking-[0.32em] text-[#8a8076]/85">
                    polaroid proof — fabric test strip {n}
                  </figcaption>
                </figure>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
