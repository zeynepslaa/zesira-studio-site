"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { JournalPost } from "@/content/types";
import { ChromeSpark } from "@/components/visual/ChromeSpark";
import { useComingSoon } from "@/components/ui/ComingSoonProvider";
import { CINEMATIC_EASE } from "@/lib/editorial-motion";

export function JournalSection({ intro, posts }: { intro: string; posts: JournalPost[] }) {
  const reduce = useReducedMotion();
  const { openComingSoon } = useComingSoon();

  return (
    <section
      id="journal"
      className="paper-section-1 editorial-section-floor relative scroll-mt-28 border-t border-[rgba(90,82,74,0.08)] py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <p
          className="pointer-events-none absolute left-[6%] top-[8rem] hidden font-display text-[7px] font-semibold uppercase tracking-[0.42em] text-[#d8d0c8] md:block"
          aria-hidden
        >
          field notes — slow exposures
        </p>
        <motion.header
          className="relative"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: reduce ? 0 : 1.05, ease: CINEMATIC_EASE }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#7a6f66]">Journal</p>
          <h2 className="mt-4 font-display text-[clamp(3rem,11vw,7.2rem)] font-medium leading-[0.86] tracking-[-0.035em] text-[#1f1b18]">
            Slow
            <span className="block pl-[min(11vw,7rem)] text-[#2a2420]/90">exposures</span>
          </h2>
          <p className="mt-7 max-w-xl font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:mt-9 md:max-w-2xl md:text-[1.12rem]">
            {intro}
          </p>
        </motion.header>

        <div className="mt-4 md:mt-7">
          {posts.map((post, i) => {
            const flip = i % 2 === 1;
            const n = String(i + 1).padStart(2, "0");
            const hasHref = Boolean(post.href?.trim());
            return (
              <motion.article
                key={post.id}
                role={hasHref ? undefined : "button"}
                tabIndex={hasHref ? undefined : 0}
                className={`relative border-b border-[rgba(90,82,74,0.12)] py-10 md:grid md:grid-cols-12 md:items-start md:gap-x-8 md:py-14 ${
                  hasHref ? "" : "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a1528]/40"
                }`}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: reduce ? 0 : 1.05, delay: reduce ? 0 : i * 0.07, ease: CINEMATIC_EASE }}
                onClick={hasHref ? undefined : () => openComingSoon(post.title)}
                onKeyDown={
                  hasHref
                    ? undefined
                    : (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openComingSoon(post.title);
                        }
                      }
                }
              >
                <span
                  className={`pointer-events-none absolute top-0 font-display text-[clamp(4rem,22vw,12rem)] font-medium leading-none text-[#ebe4dc] select-none md:top-6 ${flip ? "right-0 md:right-6" : "left-0 md:left-2"}`}
                  aria-hidden
                >
                  {n}
                </span>
                <div className={`relative z-10 md:col-span-5 ${flip ? "md:col-start-8 md:text-right" : ""}`}>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.36em] text-[#8a8076]">{post.kicker}</p>
                  <h3 className="mt-4 font-display text-[clamp(1.85rem,5vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.02em] text-[#1f1b18]">
                    {post.title}
                  </h3>
                </div>
                <div
                  className={`relative z-10 mt-10 md:col-span-6 md:mt-0 ${flip ? "md:col-start-1 md:row-start-1" : "md:col-start-6"}`}
                >
                  <p className="max-w-prose text-[1rem] leading-[1.7] text-[#5c534c] md:text-[1.05rem]">{post.excerpt}</p>
                  {post.whisper?.trim() ? (
                    <p className="mt-6 flex items-start gap-2 font-serif text-[0.95rem] font-light italic leading-relaxed text-[#7a1528]/80 md:text-[0.98rem]">
                      <ChromeSpark className="mt-0.5 shrink-0 opacity-60" size={10} />
                      <span>{post.whisper}</span>
                    </p>
                  ) : null}
                  <div
                    className={`mt-10 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#8a8076] transition hover:text-[#7a1528] ${flip ? "md:text-right" : ""}`}
                  >
                    {post.href?.trim() ? (
                      <motion.a
                        href={post.href}
                        className="inline-flex items-center gap-2"
                        whileHover={reduce ? undefined : { x: 2 }}
                        transition={{ duration: 0.55, ease: CINEMATIC_EASE }}
                      >
                        Turn the page
                        <span aria-hidden>↗</span>
                      </motion.a>
                    ) : (
                      <span className="pointer-events-none">Coming soon</span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
