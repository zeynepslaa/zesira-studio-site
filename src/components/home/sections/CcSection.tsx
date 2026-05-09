"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CcCollection } from "@/content/types";

function ArchiveField({ seed }: { seed: number }) {
  const hues = [
    "from-[#faf6f0] via-[#ebe3dc] to-[#d9cfc6]",
    "from-[#fdf9f5] via-[#e8e0da] to-[#cfc4bc]",
    "from-[#fffdf9] via-[#efe8e2] to-[#e0d5ce]",
  ] as const;
  const h = hues[seed % hues.length];
  return (
    <div
      className={`relative h-[min(36vw,280px)] overflow-hidden bg-gradient-to-br ${h} md:h-[min(28vw,320px)]`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_30%,rgba(255,252,248,0.85),transparent_60%),radial-gradient(ellipse_40%_35%_at_90%_75%,rgba(122,21,40,0.06),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.11] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

export function CcSection({ intro, collections }: { intro: string; collections: CcCollection[] }) {
  const reduce = useReducedMotion();

  return (
    <section id="cc" className="paper-section-0 relative scroll-mt-28 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="grid gap-8 md:grid-cols-12 md:items-end"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: reduce ? 0 : 0.75 }}
        >
          <div className="md:col-span-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#7a6f66]">CC collections</p>
            <h2 className="mt-5 font-display text-[clamp(2.75rem,10vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.03em] text-[#1f1b18]">
              Fashion
              <span className="mt-1 block pl-[min(10vw,6rem)] text-[#7a1528]/88">archive</span>
            </h2>
            <p className="mt-8 max-w-2xl font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:text-[1.1rem]">{intro}</p>
          </div>
          <p className="font-[var(--font-caveat),cursive] text-2xl leading-snug text-[#7a1528]/85 md:col-span-4 md:text-right md:text-[1.85rem]">
            collage moodboard — still life
          </p>
        </motion.div>

        <div className="mt-10 md:mt-14">
          {collections.map((c, i) => {
            const flip = i % 2 === 1;
            const n = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={c.id}
                className="border-b border-[rgba(90,82,74,0.1)] py-16 md:grid md:grid-cols-12 md:gap-8 md:py-22"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: reduce ? 0 : 0.72, delay: reduce ? 0 : i * 0.04 }}
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
                <figure className={`relative mt-10 md:col-span-7 md:mt-0 ${flip ? "md:order-1 md:-translate-y-4" : "md:translate-y-2"}`}>
                  <span
                    className={`pointer-events-none absolute -top-4 font-display text-[clamp(2.5rem,12vw,6rem)] font-medium leading-none text-[#ebe4dc]/95 select-none ${flip ? "right-2" : "left-0"}`}
                    aria-hidden
                  >
                    {n}
                  </span>
                  <ArchiveField seed={i} />
                </figure>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
