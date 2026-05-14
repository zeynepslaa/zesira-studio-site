"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { VaultItem } from "@/content/types";
import { useComingSoon } from "@/components/ui/ComingSoonProvider";

const typeLabel: Record<VaultItem["type"], string> = {
  cc: "CC",
  mod: "Mod",
  "save-file": "Save",
};

export function VaultSection({ intro, items }: { intro: string; items: VaultItem[] }) {
  const reduce = useReducedMotion();
  const { openComingSoon } = useComingSoon();
  const [isMember, setIsMember] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        const data = (await res.json()) as { user: { email: string } | null };
        if (!cancelled) setIsMember(Boolean(data.user));
      } catch {
        if (!cancelled) setIsMember(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="vault"
      className="paper-section-1 editorial-section-floor relative scroll-mt-28 border-t border-[rgba(90,82,74,0.1)] py-16 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: reduce ? 0 : 0.75 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#7a6f66]">Vault</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,9vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.03em] text-[#1f1b18]">
            Drops
            <span className="mt-1 block pl-[min(9vw,4.5rem)] font-normal text-[#7a1528]/90">&amp; files</span>
          </h2>
          <p className="mt-8 font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:text-[1.1rem]">
            {intro}
          </p>
        </motion.div>

        <ul className="mt-10 space-y-5 md:mt-12">
          {items.map((item, i) => {
            const locked = item.membersOnly && isMember === false;
            const unlocked = item.membersOnly && isMember === true;
            const publicItem = !item.membersOnly;

            return (
              <motion.li
                key={item.id}
                className="group editorial-card-sheen relative overflow-hidden border border-[rgba(90,82,74,0.14)] bg-[rgba(255,252,248,0.55)] p-6 md:grid md:grid-cols-12 md:gap-8 md:p-8"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : i * 0.04 }}
              >
                <div className="md:col-span-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#7a1528]/85">
                    {typeLabel[item.type]}
                  </span>
                  {item.membersOnly ? (
                    <span className="ml-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#7a6f66]">
                      Members
                    </span>
                  ) : (
                    <span className="ml-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#7a6f66]">
                      Open
                    </span>
                  )}
                  <h3 className="mt-3 font-display text-[clamp(1.35rem,3vw,2rem)] font-medium leading-tight tracking-[-0.02em] text-[#1f1b18]">
                    {item.title}
                  </h3>
                </div>
                <div className="relative mt-5 md:col-span-6 md:mt-0">
                  <p className="font-serif text-[0.98rem] font-light leading-[1.65] text-[#5c534c] md:text-[1.02rem]">
                    {item.note}
                  </p>
                  {locked ? (
                    <div
                      className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[rgba(255,252,248,0.72)] backdrop-blur-[2px]"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className="mt-6 flex flex-col items-start justify-center gap-3 md:col-span-3 md:mt-0 md:items-end">
                  {isMember === null ? (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8a8076]">
                      …
                    </span>
                  ) : locked ? (
                    <a
                      href="#membership"
                      className="inline-flex border-b-2 border-[#7a1528] py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7a1528] transition hover:border-[#5c0f1f] hover:text-[#5c0f1f]"
                    >
                      Sign in to unlock
                    </a>
                  ) : publicItem && item.href ? (
                    <a
                      href={item.href}
                      className="inline-flex border-b border-[rgba(90,82,74,0.28)] py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2a2622] transition hover:border-[#7a1528]/40 hover:text-[#7a1528]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get file
                    </a>
                  ) : unlocked && item.href ? (
                    <a
                      href={item.href}
                      className="inline-flex border-b-2 border-[#7a1528] py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7a1528] transition hover:border-[#5c0f1f] hover:text-[#5c0f1f]"
                    >
                      Open
                    </a>
                  ) : unlocked ? (
                    <button
                      type="button"
                      onClick={() => openComingSoon(item.title)}
                      className="inline-flex border-b border-dashed border-[rgba(90,82,74,0.35)] py-2 text-left text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8a8076] transition hover:border-[#7a1528]/40 hover:text-[#7a1528]"
                    >
                      Linked soon
                    </button>
                  ) : publicItem ? (
                    <button
                      type="button"
                      onClick={() => openComingSoon(item.title)}
                      className="inline-flex border-b border-dashed border-[rgba(90,82,74,0.35)] py-2 text-left text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8a8076] transition hover:border-[#7a1528]/40 hover:text-[#7a1528]"
                    >
                      Preview only
                    </button>
                  ) : null}
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
