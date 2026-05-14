"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SocialLink } from "@/content/types";
import { SocialIconLink } from "@/components/SocialIconLink";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

export function ContactSection({
  line,
  email,
  socials,
  footnote,
}: {
  line: string;
  email: string;
  socials: SocialLink[];
  footnote?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="paper-section-3 editorial-section-floor relative scroll-mt-28 border-t border-[rgba(90,82,74,0.1)] py-16 pb-28 md:py-28 md:pb-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: reduce ? 0 : 1.05, ease: CINEMATIC_EASE }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#7a6f66]">Contact</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,8vw,5.25rem)] font-medium leading-[0.92] tracking-[-0.03em] text-[#1f1b18]">
            <span className="block">Whisper-only</span>
            <span className="mt-1 block pl-[min(10vw,5rem)] font-normal text-[#7a1528]/88">line</span>
          </h2>
          <p className="mt-8 max-w-xl font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:text-[1.12rem]">{line}</p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.08, ease: CINEMATIC_EASE }}
        >
          <a
            href={`mailto:${email}`}
            className="font-display text-2xl font-medium tracking-tight text-[#1f1b18] underline decoration-[rgba(122,21,40,0.25)] underline-offset-[10px] transition-[text-decoration-color,color] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[#7a1528]/55 md:text-3xl"
          >
            {email}
          </a>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <SocialIconLink key={s.id} link={s} />
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.12, ease: CINEMATIC_EASE }}
          className="mt-16 text-center font-serif text-[0.875rem] font-light italic leading-relaxed tracking-[0.03em] text-[#7a6f66]"
        >
          {footnote?.trim() || "Zesira Studio — crafted silence, loud vision"}
        </motion.p>
      </div>
    </section>
  );
}
