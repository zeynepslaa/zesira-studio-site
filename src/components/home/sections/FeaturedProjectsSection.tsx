"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EditorialProjectSpread } from "@/components/editorial/EditorialProjectSpread";
import type { ProjectItem } from "@/content/types";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

export function FeaturedProjectsSection({ projects }: { projects: ProjectItem[] }) {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="paper-section-0 editorial-section-floor relative scroll-mt-28 border-t border-[rgba(90,82,74,0.1)] py-14 md:py-22">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative overflow-visible">
          <span
            aria-hidden
            className="hand-placed-nudge pointer-events-none absolute -top-2 left-[8%] z-[2] hidden rounded-sm border border-[rgba(216,221,232,0.65)] bg-[rgba(255,252,248,0.82)] px-2 py-1 font-display text-[7px] font-semibold uppercase tracking-[0.34em] text-[#7a1528]/70 shadow-sm md:block"
            style={{ ["--hand-rotate" as string]: "-7deg" }}
          >
            scrapbook mode on
          </span>
          <p
            className="pointer-events-none absolute right-[2%] top-[8%] z-[1] hidden max-w-[10rem] font-[var(--font-caveat),cursive] text-[1.1rem] leading-snug text-[#7a1528]/55 lg:block"
            aria-hidden
          >
            too many tabs, all of them pretty
          </p>
          <p
            className="pointer-events-none absolute right-[12%] top-[58%] z-[1] hidden max-w-[8rem] rotate-[6deg] font-serif text-[0.68rem] font-light italic leading-relaxed text-[#8a8076]/50 xl:block"
            aria-hidden
          >
            ignore safe margins
          </p>
          <p
            className="pointer-events-none absolute right-0 top-[40%] hidden max-w-[9rem] text-right font-serif text-[0.72rem] font-light italic leading-relaxed text-[#8a8076]/40 md:block"
            aria-hidden
          >
            archived sequences — pacing over polish
          </p>
          <motion.span
            className="pointer-events-none absolute -left-4 -top-6 font-display text-[clamp(4.5rem,28vw,16rem)] font-medium leading-none text-[#e6ddd4]/95 select-none md:-left-8 md:-top-10"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: reduce ? 0 : 1.1, ease: CINEMATIC_EASE }}
            aria-hidden
          >
            01
          </motion.span>
          <motion.div
            className="relative z-10 rotate-[-0.35deg] pt-[clamp(1.25rem,5vw,3.25rem)] md:ml-[min(14vw,7rem)]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: reduce ? 0 : 1.05, delay: reduce ? 0 : 0.06, ease: CINEMATIC_EASE }}
          >
            <div className="mb-3 h-2.5 w-[min(40%,12rem)] bg-[linear-gradient(90deg,rgba(216,221,232,0.25)_0%,rgba(243,217,228,0.85)_40%,rgba(216,221,232,0.35)_100%)] opacity-90 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset]" aria-hidden />
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#7a6f66]">Featured</p>
            <h2 className="mt-5 font-display text-[clamp(3.25rem,12vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.035em] text-[#1f1b18]">
              <span className="block">Selected</span>
              <span className="mt-1 block pl-[min(10vw,6.5rem)] text-[#7a1528]/[0.92] md:pl-[min(14vw,10rem)]">works</span>
            </h2>
            <p className="mt-10 max-w-lg font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:mt-12 md:max-w-xl md:text-[1.15rem]">
              Apps, systems, and experiments released with editorial patience. Each spread is pacing and composition—not a
              product tile.
            </p>
            <p className="mt-5 max-w-sm font-display text-[8px] font-semibold uppercase tracking-[0.38em] text-[#8a8076]/90">
              Type rhythm carries the frame
            </p>
          </motion.div>
        </div>

        <div className="mt-4 md:mt-7">
          {projects.map((p, i) => (
            <EditorialProjectSpread key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
