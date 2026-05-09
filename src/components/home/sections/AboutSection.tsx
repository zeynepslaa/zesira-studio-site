"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AboutSection({ eyebrow, paragraphs }: { eyebrow: string; paragraphs: string[] }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="paper-section-1 relative scroll-mt-28 border-t border-[rgba(90,82,74,0.1)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-start md:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: reduce ? 0 : 0.75 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7a6f66]">{eyebrow}</p>
            <h2 className="mt-5 font-display text-[clamp(2.35rem,6.5vw,4.35rem)] font-medium leading-[1.02] tracking-[-0.025em] text-[#1f1b18]">
              <span className="block">A studio tuned</span>
              <span className="mt-1 block pl-[min(12vw,6rem)] font-normal text-[#7a1528]/88 md:pl-[min(16vw,9rem)]">
                to moonlight hours
              </span>
            </h2>
          </motion.div>
          <motion.div
            className="space-y-6 border-l border-[rgba(122,21,40,0.12)] pl-6 text-base leading-relaxed text-[#5c534c] md:pl-10 md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: reduce ? 0 : 0.75, delay: reduce ? 0 : 0.08 }}
          >
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
