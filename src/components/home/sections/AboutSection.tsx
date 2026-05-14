"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EditorialStillLife } from "@/components/visual/EditorialStillLife";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

export function AboutSection({ eyebrow, paragraphs }: { eyebrow: string; paragraphs: string[] }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="paper-section-1 editorial-section-floor relative scroll-mt-28 border-t border-[rgba(90,82,74,0.1)] py-14 md:py-22"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="hand-placed-nudge absolute bottom-[12%] left-[4%] hidden font-display text-[clamp(4rem,18vw,9rem)] font-medium leading-none text-[#ebe4dc]/80 md:block"
          style={{ ["--hand-rotate" as string]: "-6deg" }}
        >
          II
        </span>
        <span
          className="hand-placed-nudge absolute right-[8%] top-[14%] hidden max-w-[11rem] font-serif text-[0.78rem] font-light italic leading-relaxed text-[#7a1528]/35 md:block"
          style={{ ["--hand-rotate" as string]: "4deg" }}
        >
          gloss, grain, chrome butterflies — atmosphere before apology
        </span>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-4 lg:gap-6">
          <motion.div
            className="relative z-20 md:col-span-5 md:translate-y-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: reduce ? 0 : 1.05, ease: CINEMATIC_EASE }}
          >
            <p className="font-zesira-alt text-[clamp(1rem,2.2vw,1.35rem)] font-normal tracking-[0.07em] text-[#7a1528]/68">
              Digital femininity
            </p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7a6f66]">{eyebrow}</p>
            <h2 className="mt-5 font-display text-[clamp(2.35rem,6.5vw,4.35rem)] font-medium leading-[1.02] tracking-[-0.025em] text-[#1f1b18]">
              <span className="block">A studio tuned</span>
              <span className="mt-1 block pl-[min(12vw,6rem)] font-normal text-[#7a1528]/88 md:pl-[min(16vw,9rem)]">
                to moonlight hours
              </span>
            </h2>
            <p className="mt-8 max-w-xs font-display text-[9px] font-semibold uppercase leading-relaxed tracking-[0.36em] text-[#8a8076]">
              satin melancholy / perfume silence / tabs left open like altars
            </p>
          </motion.div>

          <motion.div
            className="relative z-10 space-y-6 border-l border-[rgba(122,21,40,0.12)] pl-6 text-base leading-relaxed text-[#5c534c] md:col-span-4 md:-ml-8 md:border-l md:pl-12 md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: reduce ? 0 : 1.05, delay: reduce ? 0 : 0.12, ease: CINEMATIC_EASE }}
          >
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: reduce ? 0 : 0.95, delay: reduce ? 0 : 0.14 + i * 0.1, ease: CINEMATIC_EASE }}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          <div className="relative z-[5] md:col-span-3 md:-ml-4 md:-translate-y-10 md:pt-0">
            <EditorialStillLife
              seed={4}
              variant="collage"
              caption="tear sheet — scanned edges kept"
              className="md:rotate-[0.6deg] md:shadow-[0_28px_60px_rgba(42,38,34,0.14)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
