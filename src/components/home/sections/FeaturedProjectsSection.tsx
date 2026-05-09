"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EditorialProjectSpread } from "@/components/editorial/EditorialProjectSpread";
import type { ProjectItem } from "@/content/types";

export function FeaturedProjectsSection({ projects }: { projects: ProjectItem[] }) {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="paper-section-0 relative scroll-mt-28 border-t border-[rgba(90,82,74,0.1)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative">
          <motion.span
            className="pointer-events-none absolute -left-4 -top-6 font-display text-[clamp(4.5rem,28vw,16rem)] font-medium leading-none text-[#e6ddd4]/95 select-none md:-left-8 md:-top-10"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: reduce ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            01
          </motion.span>
          <motion.div
            className="relative z-10 pt-[clamp(2.5rem,8vw,5rem)] md:ml-[min(18vw,9rem)]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#7a6f66]">Featured</p>
            <h2 className="mt-5 font-display text-[clamp(3.25rem,12vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.035em] text-[#1f1b18]">
              <span className="block">Selected</span>
              <span className="mt-1 block pl-[min(10vw,6.5rem)] text-[#7a1528]/[0.92] md:pl-[min(14vw,10rem)]">works</span>
            </h2>
            <p className="mt-10 max-w-lg font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:mt-14 md:max-w-xl md:text-[1.15rem]">
              A living archive—apps, systems, and experiments released with editorial patience. Each spread is its own
              campaign, not a product tile.
            </p>
          </motion.div>
        </div>

        <div className="mt-6 md:mt-10">
          {projects.map((p, i) => (
            <EditorialProjectSpread key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
