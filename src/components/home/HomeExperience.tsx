"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { SiteContent } from "@/content/types";
import { LoadingScreen } from "@/components/LoadingScreen";
import { LuxuryNav } from "@/components/LuxuryNav";
import { AmbientAudio } from "@/components/AmbientAudio";
import { GrainOverlay } from "@/components/visual/GrainOverlay";
import { LightLeakVeil } from "@/components/visual/LightLeakVeil";
import { FilmEdgeBurn } from "@/components/visual/FilmEdgeBurn";
import { FloatingStars } from "@/components/visual/FloatingStars";
import { ArchiveAtmosphere } from "@/components/visual/ArchiveAtmosphere";
import { EditorialInterlude } from "@/components/visual/EditorialInterlude";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { FeaturedProjectsSection } from "@/components/home/sections/FeaturedProjectsSection";
import { AboutSection } from "@/components/home/sections/AboutSection";
import { AppsSection } from "@/components/home/sections/AppsSection";
import { ModsSection } from "@/components/home/sections/ModsSection";
import { CcSection } from "@/components/home/sections/CcSection";
import { JournalSection } from "@/components/home/sections/JournalSection";
import { VaultSection } from "@/components/home/sections/VaultSection";
import { MembershipSection } from "@/components/home/sections/MembershipSection";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { CurrentHouseholdSection } from "@/components/home/sections/CurrentHouseholdSection";
import { AmbientInternetStickers } from "@/components/universe/AmbientInternetStickers";
import { FloatingArchiveSystems } from "@/components/universe/FloatingArchiveSystems";
import { LivingArchiveSurface } from "@/components/universe/LivingArchiveSurface";
import { UniverseBloomVeil } from "@/components/universe/UniverseBloomVeil";
import { UniverseRibbonLayer } from "@/components/universe/UniverseRibbonLayer";
import { ComingSoonProvider } from "@/components/ui/ComingSoonProvider";

export function HomeExperience({ content }: { content: SiteContent }) {
  const [introDone, setIntroDone] = useState(false);
  const w = content.whispers;

  return (
    <ComingSoonProvider>
    <div className="group/editorial relative min-h-svh text-[#2a2622]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-25%,rgba(255,252,248,0.98),transparent_55%),radial-gradient(ellipse_55%_40%_at_100%_40%,rgba(245,228,232,0.16),transparent_50%)]"
      />
      <UniverseBloomVeil />
      {!introDone ? (
        <LoadingScreen
          wordmark={content.brand.nameLoading}
          loaderLine={w.loaderLine}
          minMs={2900}
          onDone={() => setIntroDone(true)}
        />
      ) : null}

      <GrainOverlay />
      <LightLeakVeil />
      <FilmEdgeBurn />
      <FloatingStars count={118} />
      {introDone ? <ArchiveAtmosphere archiveMicroNotes={w.archiveMicroNotes} /> : null}

      {introDone ? <AmbientInternetStickers stickers={content.ambientStickers} /> : null}
      {introDone ? <UniverseRibbonLayer ribbons={content.universeRibbons} /> : null}
      {introDone ? <LivingArchiveSurface data={content.livingArchive} /> : null}
      {introDone ? <FloatingArchiveSystems data={content.floatingSystems} /> : null}

      <LuxuryNav items={content.nav} brand={content.brand.name} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!introDone}
        className={!introDone ? "pointer-events-none relative z-10" : "relative z-10"}
      >
        <main id="main">
          <HeroSection
            brand={content.brand.name}
            subtitle={content.hero.subtitle}
            heroAside={w.heroAside}
            scrapPhrases={content.hero.scrapPhrases}
          />
          <CurrentHouseholdSection data={content.household} />
          <FeaturedProjectsSection projects={content.featuredProjects} />
          <EditorialInterlude text={w.betweenProjectsAndAbout} rhythm={0} />
          <AboutSection eyebrow={content.about.eyebrow} paragraphs={content.about.paragraphs} />
          <EditorialInterlude text={w.betweenAboutAndApps} rhythm={1} />
          <AppsSection apps={content.apps} />
          <EditorialInterlude text={w.betweenAppsAndMods} rhythm={2} />
          <ModsSection intro={content.mods.intro} items={content.mods.items} />
          <EditorialInterlude text={w.betweenModsAndCc} rhythm={0} />
          <CcSection intro={content.cc.intro} collections={content.cc.collections} />
          <EditorialInterlude text={w.betweenCcAndJournal} rhythm={1} />
          <JournalSection intro={content.journal.intro} posts={content.journal.posts} />
          <EditorialInterlude text={w.betweenJournalAndMembership} rhythm={2} />
          <VaultSection intro={content.vault.intro} items={content.vault.items} />
          <MembershipSection intro={content.membership.intro} tiers={content.membership.tiers} />
          <ContactSection
            line={content.contact.line}
            email={content.contact.email}
            socials={content.contact.socials}
            footnote={w.contactFootnote}
          />
        </main>
      </motion.div>

      {introDone ? (
        <AmbientAudio src={content.audio.src} volume={content.audio.volume} label={content.audio.label} />
      ) : null}
    </div>
    </ComingSoonProvider>
  );
}
