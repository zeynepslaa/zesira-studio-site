"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StatusPill } from "@/components/cards/StatusPill";
import type { AppPreview } from "@/content/types";

export function AppsSection({ apps }: { apps: AppPreview[] }) {
  const reduce = useReducedMotion();

  return (
    <section id="apps" className="paper-section-2 relative scroll-mt-28 border-t border-[rgba(90,82,74,0.08)] py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="hand-placed-nudge absolute right-[6%] top-[6rem] z-[1] font-[var(--font-caveat),cursive] text-[1.05rem] text-[#7a1528]/38 md:right-[10%] md:top-[5.5rem]"
          style={{ ["--hand-rotate" as string]: "7deg" }}
        >
          desktop feelings only
        </span>
        <span
          className="hand-placed-nudge absolute left-[3%] top-[42%] z-[1] font-display text-[8px] font-semibold uppercase tracking-[0.4em] text-[#d8dde8]"
          style={{ ["--hand-rotate" as string]: "-8deg" }}
        >
          shiny
        </span>
        <span
          className="hand-placed-nudge absolute bottom-[18%] right-[4%] z-[1] max-w-[6rem] rounded-sm border border-[rgba(243,217,228,0.65)] bg-[rgba(255,252,248,0.72)] px-2.5 py-1.5 font-[var(--font-caveat),cursive] text-[0.95rem] leading-tight text-[#7a1528]/45 shadow-[0_10px_28px_rgba(42,38,34,0.05)]"
          style={{ ["--hand-rotate" as string]: "-4deg" }}
        >
          queued @ 2am
        </span>
      </div>
      <div className="relative z-[2] mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
          <motion.div
            className="md:col-span-8"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: reduce ? 0 : 0.75 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#7a6f66]">Applications</p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,10vw,6.25rem)] font-medium leading-[0.88] tracking-[-0.03em] text-[#1f1b18]">
              Soft
              <br />
              <span className="pl-[min(8vw,4rem)] text-[#7a1528]/90">wardrobes</span>
            </h2>
            <p className="mt-8 max-w-xl font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:text-[1.12rem]">
              Interfaces imagined as wardrobes—private, precise, a little dangerous in their restraint.
            </p>
          </motion.div>
          <motion.p
            className="font-[var(--font-caveat),cursive] text-2xl leading-snug text-[#7a1528]/82 md:col-span-4 md:text-right md:text-[1.85rem]"
            initial={reduce ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 0.75, delay: reduce ? 0 : 0.12 }}
          >
            gloss &amp; grain — no chrome grid
          </motion.p>
        </div>

        <div className="mt-8 md:mt-6">
          {apps.map((app, i) => {
            const n = String(i + 1).padStart(2, "0");
            const flip = i % 2 === 1;
            return (
              <motion.article
                key={app.id}
                className="grid grid-cols-1 gap-8 border-b border-[rgba(90,82,74,0.12)] py-14 md:grid-cols-12 md:gap-6 md:py-20"
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: reduce ? 0 : 0.75, delay: reduce ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className={`flex items-start md:col-span-2 ${flip ? "md:order-3 md:justify-end" : "md:order-1"}`}
                >
                  <span
                    className="font-display text-[clamp(3rem,12vw,7rem)] font-medium leading-none text-[#e3dcd2] select-none"
                    aria-hidden
                  >
                    {n}
                  </span>
                </div>
                <div
                  className={`md:col-span-8 ${flip ? "md:order-2 md:text-right" : "md:order-2"}`}
                >
                  <div
                    className={`flex flex-wrap items-baseline gap-x-6 gap-y-3 ${flip ? "md:flex-row-reverse md:justify-end" : ""}`}
                  >
                    <h3 className="font-display text-[clamp(1.85rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#1f1b18]">
                      {app.title}
                    </h3>
                    <StatusPill status={app.status} />
                  </div>
                  <p className={`mt-6 max-w-2xl text-[1rem] leading-[1.65] text-[#5c534c] md:text-[1.05rem] ${flip ? "md:ml-auto" : ""}`}>
                    {app.description}
                  </p>
                  {app.editorialNote?.trim() ? (
                    <p
                      className={`mt-5 max-w-xl font-serif text-[0.95rem] font-light italic leading-relaxed text-[#7a1528]/78 md:text-[1rem] ${flip ? "md:ml-auto" : ""}`}
                    >
                      {app.editorialNote}
                    </p>
                  ) : null}
                  <p
                    className={`mt-10 font-display text-[10px] font-semibold uppercase tracking-[0.38em] text-[#8a8076] ${flip ? "md:text-right" : ""}`}
                  >
                    Atelier in progress
                  </p>
                </div>
                <div
                  className={`hidden min-h-full md:col-span-2 md:block ${flip ? "md:order-1" : "md:order-3"}`}
                  aria-hidden
                >
                  <div className="mx-auto h-full min-h-[120px] w-px bg-gradient-to-b from-transparent via-[rgba(122,21,40,0.18)] to-transparent md:min-h-[140px]" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
