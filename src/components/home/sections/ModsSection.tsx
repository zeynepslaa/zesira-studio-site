"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EditorialStillLife } from "@/components/visual/EditorialStillLife";
import type { ModHighlight } from "@/content/types";
import { useComingSoon } from "@/components/ui/ComingSoonProvider";

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function ModsSection({ intro, items }: { intro: string; items: ModHighlight[] }) {
  const reduce = useReducedMotion();
  const { openComingSoon } = useComingSoon();

  return (
    <section id="mods" className="paper-section-3 editorial-section-floor relative scroll-mt-28 border-t border-[rgba(90,82,74,0.08)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative">
          <motion.p
            className="relative z-10 max-w-2xl font-serif text-[1.08rem] font-light leading-[1.7] text-[#5c534c] md:max-w-[34rem] md:text-[1.15rem]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: reduce ? 0 : 0.75 }}
          >
            <span className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.4em] text-[#7a6f66]">Mods</span>
            <span className="font-display text-[clamp(2.6rem,9vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.03em] text-[#1f1b18]">
              Gameplay,
            </span>
            <span className="mt-2 block font-display text-[clamp(2rem,7vw,4.2rem)] font-normal leading-[0.95] text-[#7a1528]/88 md:pl-[12%]">
              distilled
            </span>
            <span className="mt-10 block border-l-2 border-[#7a1528]/25 pl-7">{intro}</span>
          </motion.p>
        </div>

        <div className="mt-10 md:mt-14">
          {items.map((item, i) => {
            const r = ROMAN[i + 1] ?? String(i + 1);
            const stagger = i % 3;
            const offsetClass = stagger === 1 ? "md:ml-[8%]" : stagger === 2 ? "md:-ml-[4%] md:mr-[6%]" : "";
            return (
              <div key={item.id}>
                <motion.div
                  role="button"
                  tabIndex={0}
                  className={`relative cursor-pointer border-t border-[rgba(90,82,74,0.1)] py-9 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a1528]/40 md:grid md:grid-cols-12 md:items-end md:gap-10 md:py-12 ${offsetClass}`}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: reduce ? 0 : 0.75, delay: reduce ? 0 : i * 0.04 }}
                  onClick={() => openComingSoon(item.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openComingSoon(item.title);
                    }
                  }}
                >
                  <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
                    <span
                      className="font-display text-[clamp(3.5rem,14vw,9rem)] font-medium leading-none text-[#ded5cd] select-none"
                      aria-hidden
                    >
                      {r}
                    </span>
                    {i === items.length - 1 ? (
                      <p className="mt-6 hidden font-[var(--font-caveat),cursive] text-xl text-[#7a1528]/75 md:block">
                        torn notes from playtests
                      </p>
                    ) : null}
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-[clamp(1.75rem,4.2vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[#1f1b18]">
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-prose border-l border-[rgba(122,21,40,0.2)] pl-6 text-[1rem] leading-[1.7] text-[#5c534c] md:text-[1.05rem]">
                      {item.note}
                    </p>
                  </div>
                </motion.div>
                {i === 1 ? (
                  <div className="border-t border-[rgba(90,82,74,0.08)] py-8 md:py-11">
                    <div className="mx-auto max-w-md md:ml-[min(12vw,6rem)] md:max-w-sm">
                      <EditorialStillLife
                        seed={11}
                        variant="polaroid"
                        caption="WIP render — kept as texture, not a feature grid"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
