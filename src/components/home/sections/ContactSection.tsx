"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SocialLink } from "@/content/types";
import { SocialIconLink } from "@/components/SocialIconLink";

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
      className="paper-section-3 relative scroll-mt-28 border-t border-[rgba(90,82,74,0.1)] py-28 pb-36 md:py-40 md:pb-48"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: reduce ? 0 : 0.75 }}
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
          transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.05 }}
        >
          <a
            href={`mailto:${email}`}
            className="font-display text-2xl font-medium tracking-tight text-[#1f1b18] underline decoration-[rgba(122,21,40,0.25)] underline-offset-[10px] transition hover:decoration-[#7a1528]/45 md:text-3xl"
          >
            {email}
          </a>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <SocialIconLink key={s.id} link={s} />
            ))}
          </div>
        </motion.div>

        <p className="mt-16 text-center font-serif text-[0.875rem] font-light italic leading-relaxed tracking-[0.03em] text-[#7a6f66]">
          {footnote?.trim() || "Zesira Studio — crafted silence, loud vision"}
        </p>
      </div>
    </section>
  );
}
