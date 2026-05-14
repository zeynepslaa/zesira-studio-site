"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { ProjectItem } from "@/content/types";
import { StatusPill } from "@/components/cards/StatusPill";
import { useComingSoon } from "@/components/ui/ComingSoonProvider";
import { CINEMATIC_EASE, editorialViewport } from "@/lib/editorial-motion";

function CampaignField({
  seed,
  caption,
  issueMark,
  storyCaption,
}: {
  seed: number;
  caption?: string;
  issueMark?: string;
  storyCaption?: string;
}) {
  const reduce = useReducedMotion();
  const hues = [
    "from-[#fdf8f3] via-[#f0e4e8] to-[#e5ddd4]",
    "from-[#fffdf9] via-[#ebe4dc] to-[#dccfc6]",
    "from-[#faf6f0] via-[#e8e0da] to-[#d4c8c2]",
  ] as const;
  const h = hues[seed % hues.length];
  return (
    <div className="group/cf relative">
      <motion.div
        className={`relative min-h-[220px] overflow-hidden bg-gradient-to-br ${h} transition-[filter] duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cf:brightness-[1.03] md:min-h-[min(36vh,360px)]`}
        aria-hidden
        initial={reduce ? undefined : { opacity: 0.88, scale: 1.03 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-6% 0px" }}
        transition={{ duration: 1.35, ease: CINEMATIC_EASE }}
      >
        <div className="archive-magazine-gloss absolute inset-0 z-[2]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_72%_58%_at_28%_18%,rgba(255,252,248,0.92),transparent_60%),radial-gradient(ellipse_48%_42%_at_88%_82%,rgba(122,21,40,0.08),transparent_58%),radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(235,226,214,0.35),transparent_55%)]" />
        <div
          className="editorial-rain-sheen absolute inset-0 z-[1] opacity-[0.22] mix-blend-soft-light"
          style={{
            backgroundImage:
              "linear-gradient(112deg, transparent 0%, rgba(255,252,248,0.12) 42%, rgba(200,195,210,0.08) 50%, transparent 62%)",
            backgroundSize: "220% 220%",
          }}
        />
        <div
          className="absolute inset-0 z-[1] opacity-[0.11] mix-blend-multiply transition-opacity duration-[1.2s] group-hover/cf:opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
          }}
        />
        {issueMark ? (
          <span className="editorial-watermark-xl pointer-events-none absolute right-[6%] top-[8%] z-[3] text-[clamp(3.5rem,16vw,9rem)]">
            {issueMark}
          </span>
        ) : null}
        <div className="absolute bottom-5 left-5 z-[3] font-display text-[clamp(2.5rem,12vw,6rem)] font-medium leading-none text-[#1f1b18]/[0.06]">
          ZS
        </div>
        {storyCaption ? (
          <p className="pointer-events-none absolute bottom-6 right-6 z-[3] hidden max-w-[12rem] font-serif text-[0.72rem] font-light italic leading-snug text-[#5c534c]/45 md:block">
            {storyCaption}
          </p>
        ) : null}
      </motion.div>
      {caption ? (
        <p className="mt-3 font-display text-[8px] font-semibold uppercase tracking-[0.34em] text-[#8a8076]/90">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

type Props = { project: ProjectItem; index: number };

function SpreadShell({
  href,
  title,
  blockPad,
  overflowHidden,
  inner,
  motionProps,
}: {
  href?: string;
  title: string;
  blockPad: string;
  overflowHidden?: boolean;
  inner: ReactNode;
  motionProps: Pick<MotionProps, "initial" | "whileInView" | "viewport" | "transition">;
}) {
  const { openComingSoon } = useComingSoon();
  const ov = overflowHidden ? "overflow-hidden " : "";
  const base = `${ov}relative block border-b border-[rgba(90,82,74,0.12)] ${blockPad}`;
  const trimmed = href?.trim();
  const { initial, whileInView, viewport, transition } = motionProps;

  if (trimmed) {
    return (
      <motion.a href={trimmed} className={base} initial={initial} whileInView={whileInView} viewport={viewport} transition={transition}>
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      role="button"
      tabIndex={0}
      className={`${base} cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a1528]/40`}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      onClick={() => openComingSoon(title)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openComingSoon(title);
        }
      }}
    >
      {inner}
    </motion.div>
  );
}

const STILL_CAPTIONS = [
  "Paused CAS — chrome on the eyelash curve",
  "Build mode — ribbon tucked, bloom soft",
  "Live mode hush — HUD off, vignette on",
  "Neighborhood dusk — draw distance as mood",
  "Wardrobe test — fabric reads before gameplay",
  "Save thumbnail — cropped like a tear sheet",
];

/**
 * Fashion-campaign spread — not a SaaS card. Layout rotates for editorial rhythm.
 */
export function EditorialProjectSpread({ project, index }: Props) {
  const reduce = useReducedMotion();
  const v = index % 3;
  const n = String(index + 1).padStart(2, "0");
  const stillCaption = STILL_CAPTIONS[index % STILL_CAPTIONS.length];
  const blockPad = v === 0 ? "py-10 md:py-14" : v === 1 ? "py-12 md:py-16" : "py-14 md:py-20";

  const motionProps = {
    initial: reduce ? false : ({ opacity: 0, y: 32 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: editorialViewport,
    transition: { duration: reduce ? 0 : 1.12, delay: reduce ? 0 : 0.06 + index * 0.07, ease: CINEMATIC_EASE },
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
          {project.href?.trim() ? "Enter sequence" : "Coming soon — tap"} →
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
          <div className="md:col-span-6 md:col-start-1 md:pt-6">
            {kicker}
            <div className="mt-5">{titleBlock}</div>
            {tapeRow}
            {body}
          </div>
          <div className="md:col-span-6 md:-mt-6 md:pb-4">
            <CampaignField
              seed={index}
              caption={stillCaption}
              issueMark={n}
              storyCaption={STILL_CAPTIONS[(index + 2) % STILL_CAPTIONS.length]}
            />
          </div>
        </div>
      </>
    );
    return (
      <SpreadShell href={project.href} title={project.title} blockPad={blockPad} inner={inner} motionProps={motionProps} />
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
              <CampaignField
                seed={index + 1}
                caption={stillCaption}
                issueMark={n}
                storyCaption={STILL_CAPTIONS[(index + 1) % STILL_CAPTIONS.length]}
              />
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
    return (
      <SpreadShell href={project.href} title={project.title} blockPad={blockPad} inner={inner} motionProps={motionProps} />
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
        <CampaignField
          seed={index + 2}
          caption={stillCaption}
          issueMark={n}
          storyCaption={STILL_CAPTIONS[index % STILL_CAPTIONS.length]}
        />
      </div>
      <span
        className="pointer-events-none absolute bottom-6 right-4 font-display text-[clamp(3rem,14vw,6rem)] font-medium text-[#ded5cd]/90 select-none md:bottom-10 md:right-10"
        aria-hidden
      >
        {n}
      </span>
    </>
  );

  return (
    <SpreadShell
      href={project.href}
      title={project.title}
      blockPad={blockPad}
      overflowHidden
      inner={innerC}
      motionProps={motionProps}
    />
  );
}
