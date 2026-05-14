"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { HouseholdSpread, HouseholdUniverse } from "@/content/types";
import { EditorialStillLife } from "@/components/visual/EditorialStillLife";
import { ChromeSpark } from "@/components/visual/ChromeSpark";

function SpreadVisual({ spread, seed }: { spread: HouseholdSpread; seed: number }) {
  const [imgError, setImgError] = useState(false);
  const src = spread.imageSrc?.trim();

  if (src && !imgError) {
    return (
      <div className="polaroid-frame relative overflow-hidden bg-[#fffcf7] p-2.5 pb-8 shadow-[0_28px_60px_rgba(42,38,34,0.14)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1px] bg-[#ebe4dc]">
          <Image
            src={src}
            alt={spread.imageAlt ?? spread.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 40vw"
            onError={() => setImgError(true)}
            unoptimized
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(42,38,34,0.12)] via-transparent to-[rgba(255,252,248,0.15)]" />
        </div>
        {spread.stamp?.trim() ? (
          <p className="absolute bottom-2 left-0 right-0 text-center font-display text-[7px] font-semibold uppercase tracking-[0.34em] text-[#8a8076]">
            {spread.stamp}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <EditorialStillLife
      seed={seed}
      variant="polaroid"
      caption="Add imageSrc in site.ts"
    />
  );
}

function CharacterSpread({ spread, index }: { spread: HouseholdSpread; index: number }) {
  const reduce = useReducedMotion();
  const layout = spread.layout ?? (index % 2 === 0 ? "left" : "right");
  const isCenter = layout === "center";

  const feeling =
    spread.currentlyFeeling.length > 0 ? (
      <div>
        <p className="font-display text-[8px] font-semibold uppercase tracking-[0.36em] text-[#7a1528]/80">Currently feeling</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {spread.currentlyFeeling.map((m) => (
            <li
              key={m}
              className="rounded-full border border-[rgba(122,21,40,0.15)] bg-[rgba(255,252,248,0.65)] px-3 py-1 font-serif text-[0.78rem] font-light italic text-[#5c534c]"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    ) : null;

  const diary =
    spread.diaryFragments.length > 0 ? (
      <div className="space-y-4">
        {spread.diaryFragments.map((d, i) => (
          <motion.p
            key={i}
            className="ripped-tape-red relative bg-[rgba(255,252,248,0.88)] px-4 py-3 font-serif text-[0.92rem] font-light leading-[1.65] text-[#4a433c] shadow-[0_10px_28px_rgba(42,38,34,0.05)]"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.75, delay: reduce ? 0 : i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {d}
          </motion.p>
        ))}
      </div>
    ) : null;

  const meta = (
    <div className="mt-8 space-y-3 border-t border-[rgba(90,82,74,0.1)] pt-6">
      {spread.timestamps?.length ? (
        <div className="flex flex-wrap gap-2">
          {spread.timestamps.map((t) => (
            <span key={t} className="font-display text-[7px] font-semibold uppercase tracking-[0.28em] text-[#8a8076]">
              {t}
            </span>
          ))}
        </div>
      ) : null}
      {spread.relationshipHints?.map((h) => (
        <p key={h} className="flex items-start gap-2 font-[var(--font-caveat),cursive] text-[1.05rem] leading-snug text-[#7a1528]/72">
          <ChromeSpark size={9} className="mt-1 shrink-0 opacity-50" />
          {h}
        </p>
      ))}
      {spread.playlistMood ? (
        <p className="max-w-md font-display text-[8px] font-semibold uppercase leading-relaxed tracking-[0.3em] text-[#7a6f66]">
          Tonight’s playlist mood: <span className="font-serif font-normal normal-case tracking-normal text-[#5c534c]"> {spread.playlistMood}</span>
        </p>
      ) : null}
    </div>
  );

  const titleBlock = (
    <div className="relative">
      {spread.stamp ? (
        <span className="inline-block rotate-[-8deg] border border-[rgba(122,21,40,0.25)] bg-[rgba(243,217,228,0.35)] px-2 py-1 font-display text-[8px] font-semibold uppercase tracking-[0.28em] text-[#7a1528]">
          {spread.stamp}
        </span>
      ) : null}
      <h3 className="mt-4 font-display text-[clamp(2.4rem,8vw,5rem)] font-medium leading-[0.92] tracking-[-0.03em] text-[#1f1b18]">
        {spread.name}
      </h3>
    </div>
  );

  if (isCenter) {
    return (
      <motion.article
        id={`household-${spread.id}`}
        className="relative border-b border-[rgba(90,82,74,0.12)] py-12 md:py-16"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute left-1/2 top-8 hidden w-[min(88vw,52rem)] -translate-x-1/2 md:block">
          <div className="absolute -left-[8%] top-[20%] w-[38%] opacity-90">
            <EditorialStillLife seed={index + 20} variant="collage" caption="collage atmosphere" />
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          {titleBlock}
          {feeling ? <div className="mt-10">{feeling}</div> : null}
        </div>
        <div className="relative z-10 mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2 md:items-start">
          <div className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
            <SpreadVisual spread={spread} seed={index + 3} />
          </div>
          <div>
            {diary}
            {meta}
          </div>
        </div>
      </motion.article>
    );
  }

  const imgFirst = layout === "left";

  const visual = (
    <div className={imgFirst ? "md:rotate-[0.5deg]" : "md:-rotate-[0.6deg]"}>
      <SpreadVisual spread={spread} seed={index + 7} />
    </div>
  );

  const copy = (
    <div className={imgFirst ? "" : "md:ml-auto md:max-w-xl md:text-right"}>
      {titleBlock}
      {feeling ? <div className={`mt-8 ${imgFirst ? "" : "md:flex md:flex-col md:items-end"}`}>{feeling}</div> : null}
      {diary ? <div className={`mt-10 ${imgFirst ? "" : "md:text-left"}`}>{diary}</div> : null}
      <div className={imgFirst ? "" : "md:flex md:flex-col md:items-end"}>{meta}</div>
    </div>
  );

  return (
    <motion.article
      id={`household-${spread.id}`}
      className="relative overflow-hidden border-b border-[rgba(90,82,74,0.12)] py-11 md:py-16"
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 md:grid-cols-12 md:gap-12 md:px-10">
        <div
          className={`md:col-span-5 md:row-start-1 md:translate-y-3 ${imgFirst ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-8 md:-translate-y-2"}`}
        >
          {visual}
        </div>
        <div
          className={`md:col-span-7 md:row-start-1 md:pt-8 ${imgFirst ? "md:order-2 md:col-start-6" : "md:order-1 md:col-start-1"}`}
        >
          {copy}
        </div>
      </div>
    </motion.article>
  );
}

export function CurrentHouseholdSection({ data }: { data: HouseholdUniverse }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="household"
      className="relative scroll-mt-28 border-y border-[rgba(122,21,40,0.12)] bg-[linear-gradient(185deg,#fffdf9_0%,#f3e8ec_38%,#ebe3d8_100%)] py-12 editorial-section-floor md:py-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.header
          className="max-w-4xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#7a6f66]">{data.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(2.8rem,12vw,7.5rem)] font-medium leading-[0.82] tracking-[-0.04em] text-[#1f1b18]">
            {data.title}
          </h2>
          <p className="mt-3 max-w-xl font-[var(--font-caveat),cursive] text-2xl text-[#7a1528]/85 md:text-[1.85rem]">{data.subtitle}</p>
          <p className="mt-8 max-w-2xl font-serif text-[1.05rem] font-light leading-[1.7] text-[#5c534c] md:text-[1.12rem]">{data.intro}</p>
        </motion.header>

        <motion.div
          className="mt-7 flex gap-2 overflow-x-auto pb-2 md:mt-10 md:flex-wrap md:overflow-visible"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {data.archiveFolders.map((f) => (
            <motion.a
              key={f.id}
              href={f.href ?? `#household-${f.id}`}
              className="group shrink-0 rounded-full border border-[rgba(90,82,74,0.18)] bg-[rgba(255,252,248,0.75)] px-4 py-2.5 shadow-[0_8px_22px_rgba(42,38,34,0.05)] transition hover:border-[#7a1528]/35 hover:bg-white"
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ duration: 0.35 }}
            >
              <span className="block font-display text-[9px] font-semibold uppercase tracking-[0.28em] text-[#7a1528]/85">{f.label}</span>
              {f.note ? (
                <span className="mt-1 block max-w-[14rem] font-serif text-[0.72rem] font-light italic text-[#8a8076]">{f.note}</span>
              ) : null}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mt-4">
        {data.characters.map((c, i) => (
          <CharacterSpread key={c.id} spread={c} index={i} />
        ))}
      </div>
    </section>
  );
}
