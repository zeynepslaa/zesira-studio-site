"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProjectItem } from "@/content/types";
import { StatusPill } from "@/components/cards/StatusPill";

function CampaignField({ seed }: { seed: number }) {
  const hues = [
    "from-[#fdf8f3] via-[#f0e4e8] to-[#e5ddd4]",
    "from-[#fffdf9] via-[#ebe4dc] to-[#dccfc6]",
    "from-[#faf6f0] via-[#e8e0da] to-[#d4c8c2]",
  ] as const;
  const h = hues[seed % hues.length];
  return (
    <div
      className={`relative min-h-[260px] overflow-hidden bg-gradient-to-br ${h} md:min-h-[min(42vh,420px)]`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_20%,rgba(255,252,248,0.9),transparent_62%),radial-gradient(ellipse_45%_40%_at_85%_85%,rgba(122,21,40,0.07),transparent_58%)]" />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute bottom-6 left-6 font-display text-[clamp(3rem,14vw,7rem)] font-medium leading-none text-[#1f1b18]/[0.07]">
        ZS
      </div>
    </div>
  );
}

type Props = { project: ProjectItem; index: number };

/**
 * Fashion-campaign spread — not a SaaS card. Layout rotates for editorial rhythm.
 */
export function EditorialProjectSpread({ project, index }: Props) {
  const reduce = useReducedMotion();
  const v = index % 3;
  const n = String(index + 1).padStart(2, "0");

  const motionProps = {
    initial: reduce ? false : ({ opacity: 0, y: 28 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-8% 0px" as const },
    transition: { duration: reduce ? 0 : 0.85, delay: reduce ? 0 : index * 0.04, ease: [0.22, 1, 0.36, 1] as const },
  };

  const kicker = (
    <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#8a8076]">Campaign {n}</p>
  );

  const titleBlock = (
    <div className="relative">
      <h3 className="font-display text-[clamp(2.15rem,6.5vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.02em] text-[#1f1b18]">
        {project.title}
      </h3>
      <div className="mt-5 w-12 border-t border-[#7a1528]/35" aria-hidden />
    </div>
  );

  const body = (
    <>
      <p className="mt-6 max-w-[28rem] font-serif text-[1.05rem] font-light leading-[1.65] text-[#5c534c] md:text-[1.15rem]">
        {project.tagline}
      </p>
      {project.editorialNote?.trim() ? (
        <p className="mt-5 max-w-md font-[var(--font-caveat),cursive] text-[1.35rem] leading-snug text-[#7a1528]/85 md:text-[1.45rem]">
          {project.editorialNote}
        </p>
      ) : null}
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <span className="font-display text-[11px] font-semibold uppercase tracking-[0.38em] text-[#7a6f66]">
          {project.href ? "Enter sequence" : "Archive glance"} →
        </span>
      </div>
    </>
  );

  const tapeRow = (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      <StatusPill status={project.status} />
    </div>
  );

  if (v === 0) {
    const inner = (
      <>
        <span
          className="pointer-events-none absolute -left-2 top-6 font-display text-[clamp(5.5rem,24vw,13rem)] font-medium leading-none text-[#e2dad2]/90 select-none md:-left-6 md:top-10"
          aria-hidden
        >
          {n}
        </span>
        <div className="relative z-10 grid items-end gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-6 md:col-start-1 md:pt-10">
            {kicker}
            <div className="mt-5">{titleBlock}</div>
            {tapeRow}
            {body}
          </div>
          <div className="md:col-span-6 md:-mt-6 md:pb-4">
            <CampaignField seed={index} />
          </div>
        </div>
      </>
    );
    return project.href ? (
      <motion.a href={project.href} className="relative block border-b border-[rgba(90,82,74,0.12)] py-16 md:py-24" {...motionProps}>
        {inner}
      </motion.a>
    ) : (
      <motion.div className="relative border-b border-[rgba(90,82,74,0.12)] py-16 md:py-24" {...motionProps}>
        {inner}
      </motion.div>
    );
  }

  if (v === 1) {
    const inner = (
      <>
        <span
          className="pointer-events-none absolute right-0 top-0 font-display text-[clamp(4rem,18vw,9rem)] font-medium leading-none text-[#e8e0d8]/95 select-none md:right-4"
          aria-hidden
        >
          {n}
        </span>
        <div className="relative z-10 grid items-end gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 md:order-1 md:row-span-1">
            <div className="md:-rotate-[0.25deg]">
              <CampaignField seed={index + 1} />
            </div>
          </div>
          <div className="md:col-span-7 md:order-2 md:text-right">
            {kicker}
            <div className="mt-5 md:ml-auto md:max-w-2xl">{titleBlock}</div>
            <div className="mt-5 flex justify-end">{tapeRow}</div>
            <div className="mt-2 md:ml-auto md:max-w-lg">{body}</div>
          </div>
        </div>
      </>
    );
    return project.href ? (
      <motion.a href={project.href} className="relative block border-b border-[rgba(90,82,74,0.12)] py-16 md:py-28" {...motionProps}>
        {inner}
      </motion.a>
    ) : (
      <motion.div className="relative border-b border-[rgba(90,82,74,0.12)] py-16 md:py-28" {...motionProps}>
        {inner}
      </motion.div>
    );
  }

  const innerC = (
    <>
      <div className="relative z-10 md:ml-[4%] md:max-w-[88%]">
        <p className="font-display text-[clamp(3.5rem,11vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.03em] text-[#1f1b18]">
          {project.title}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-5">{tapeRow}</div>
      </div>
      <p className="relative z-10 mt-10 max-w-xl font-serif text-[1.1rem] font-light italic leading-relaxed text-[#5c534c] md:ml-[18%] md:text-[1.2rem]">
        {project.tagline}
      </p>
      {project.editorialNote?.trim() ? (
        <p className="relative z-10 mt-6 max-w-md font-[var(--font-caveat),cursive] text-[1.35rem] text-[#7a1528]/88 md:ml-[10%]">
          {project.editorialNote}
        </p>
      ) : null}
      <div className="relative z-10 mt-14 h-[min(28vw,200px)] w-full overflow-hidden md:mt-16 md:h-[min(22vw,240px)]">
        <CampaignField seed={index + 2} />
      </div>
      <span
        className="pointer-events-none absolute bottom-6 right-4 font-display text-[clamp(3rem,14vw,6rem)] font-medium text-[#ded5cd]/90 select-none md:bottom-10 md:right-10"
        aria-hidden
      >
        {n}
      </span>
    </>
  );

  return project.href ? (
    <motion.a href={project.href} className="relative block overflow-hidden border-b border-[rgba(90,82,74,0.12)] py-20 md:py-28" {...motionProps}>
      {innerC}
    </motion.a>
  ) : (
    <motion.div className="relative overflow-hidden border-b border-[rgba(90,82,74,0.12)] py-20 md:py-28" {...motionProps}>
      {innerC}
    </motion.div>
  );
}
