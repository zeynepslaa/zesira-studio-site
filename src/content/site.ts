import type { SiteContent } from "./types";

/**
 * ZESIRA STUDIO — single source of truth for copy & lists.
 * Edit this file to update the homepage: projects, journal posts, links, etc.
 */
export const siteContent: SiteContent = {
    brand: {
    name: "ZESIRA STUDIO",
    nameLoading: "ZESIRASTUDIO",
    tagline:
      "A quiet universe where fashion, narrative, and playable worlds meet—edited like a midnight editorial, built like a love letter to detail.",
    seoTitle: "ZESIRA STUDIO — Digital Creative Studio",
    seoDescription:
      "Editorial digital studio crafting immersive Sims experiences—lookbooks, mods, CC, and cinematic tools with an editorial, luminous aesthetic.",
  },
  nav: [
    { label: "HOME", href: "#home" },
    { label: "HOUSEHOLD", href: "#household" },
    { label: "PROJECTS", href: "#projects" },
    { label: "APPS", href: "#apps" },
    { label: "MODS", href: "#mods" },
    { label: "CC", href: "#cc" },
    { label: "JOURNAL", href: "#journal" },
    { label: "VAULT", href: "#vault" },
    { label: "MEMBERSHIP", href: "#membership" },
    { label: "CONTACT", href: "#contact" },
  ],
  hero: {
    subtitle:
      "Fashion, storytelling & digital worlds—reimagined under glass light and velvet noise.",
  },
  featuredProjects: [
    {
      id: "lookbook",
      title: "Lookbook App",
      tagline: "Curated installs, editorial pacing, midnight gloss.",
      status: "live",
      editorialNote: "Layout and pacing first.",
    },
    {
      id: "mods-manager",
      title: "Mods Manager",
      tagline: "A composed workflow for a calmer Mods folder.",
      status: "live",
    },
    {
      id: "save-file",
      title: "Save File Project",
      tagline: "Hand-touched saves that feel like cinema.",
      status: "coming-soon",
      editorialNote: "For cinematic save files.",
    },
    {
      id: "cc-collections",
      title: "CC Collections",
      tagline: "Wardrobe stories—archived, layered, wearable.",
      status: "live",
    },
    {
      id: "planner",
      title: "Planner System",
      tagline: "Soft structure for ambitious creative seasons.",
      status: "coming-soon",
    },
    {
      id: "ui-hacks",
      title: "UI Hacks",
      tagline: "Interface whispers—premium minimal, quietly powerful.",
      status: "coming-soon",
    },
  ],
  about: {
    eyebrow: "About the studio",
    paragraphs: [
      "Zesira is not a loud room—it’s a frequency. I build slow, sensual tools for players who care about light, fabric, and how a screen holds attention.",
      "Everything here is composed like an editorial: chrome breath on charcoal, cream type on silence, detail that never begs for attention.",
      "Households, saves, and narrative copy on this site are written by hand in `site.ts`—nothing is auto-filled or implied to be real save data.",
    ],
  },
  apps: [
    {
      id: "atelier",
      title: "Atelier Board",
      description: "Mood-first planning for drops, outfits, and narrative arcs.",
      status: "in-development",
    },
    {
      id: "archive",
      title: "Archive Reader",
      description: "CC as editorial spreads—searchable, tactile, composed.",
      status: "beta",
      editorialNote: "Designed like a memory.",
    },
    {
      id: "nocturne",
      title: "Nocturne Player",
      description: "Ambient layers for building, decorating, and dreaming.",
      status: "coming-soon",
    },
  ],
  mods: {
    intro:
      "Realism and atmosphere—tuned for cinematic play without losing the fantasy. Each mod notes reads like a whispered brief: restraint, depth, beauty.",
    items: [
      {
        id: "lighting",
        title: "Lighting & grade",
        note: "Shadows that fall like silk; interiors that hold their breath.",
      },
      {
        id: "animation",
        title: "Movement language",
        note: "Subtle idle shifts and gestures—less arcade, more film.",
      },
      {
        id: "audio",
        title: "World ambience",
        note: "Neighborhood hush, distant trains, rooms that sound expensive.",
      },
      {
        id: "gameplay",
        title: "Paced gameplay",
        note: "Systems that respect time—slower, richer, more intentional days.",
      },
    ],
  },
  cc: {
    intro:
      "Collections assembled like fashion editorials—texture-first, narrative-second. Replace images in /public when you’re ready; the layout stays.",
    collections: [
      {
        id: "vol-01",
        title: "Evening still",
        season: "Vol. I",
        mood: "Cigarette ash pearl, mirror steam, bass from another floor.",
      },
      {
        id: "vol-02",
        title: "Noir dusk",
        season: "Vol. II",
        mood: "Suburban dusk, wet pavement, window light on satin.",
      },
      {
        id: "vol-03",
        title: "Glass Rose",
        season: "Vol. III",
        mood: "Cold florals, sheer blacks, studio fog and chrome heels.",
      },
      {
        id: "vol-04",
        title: "Lunar Capsule",
        season: "Capsule",
        mood: "Limited run—silver thread, orbit jewelry, quiet power.",
      },
    ],
  },
  journal: {
    intro:
      "Notes from the edge of the build—fragments, process, atmosphere. Intimate, never loud.",
    posts: [
      {
        id: "world-building",
        title: "World-building notes",
        kicker: "Field notes",
        excerpt:
          "How a neighborhood becomes a moodboard—light falloff, distance, and the quiet between UI states.",
        whisper: "Process, not plot.",
      },
      {
        id: "inside",
        title: "Inside Zesira Studio",
        kicker: "Studio letter",
        excerpt:
          "The rituals behind the gloss: reference stacks, midnight color tests, and why restraint reads as luxury.",
      },
      {
        id: "capsule",
        title: "Capsule projects",
        kicker: "Long exposure",
        excerpt:
          "From first silhouette to final render—a timeline in fabric swatches, LUT tests, and layout drafts.",
      },
    ],
  },
  vault: {
    intro:
      "A living shelf of CC, mods, and save files—some open to every visitor, some reserved for members who signed in. Replace placeholder links in this file when files go live.",
    items: [
      {
        id: "vault-cc-public",
        title: "Velvet lighting preset (preview)",
        type: "cc",
        note: "A small taste of the capsule—public so you can feel the grade before you commit.",
        membersOnly: false,
      },
      {
        id: "vault-cc-member",
        title: "Vol. I — full capsule (members)",
        type: "cc",
        note: "Full set + install notes. Members only until the wide release window opens.",
        membersOnly: true,
        href: "/members",
      },
      {
        id: "vault-mod-member",
        title: "Cinematic idle pack (WIP)",
        type: "mod",
        note: "Experimental tuning build—member feedback shapes the final cut.",
        membersOnly: true,
        href: "/members",
      },
      {
        id: "vault-save-member",
        title: "Starter save (reserved)",
        type: "save-file",
        note: "Placeholder listing—replace title and note when a save file is ready to ship.",
        membersOnly: true,
        href: "/members",
      },
    ],
  },
  household: {
    eyebrow: "Household",
    title: "Current household",
    subtitle: "Reserved for curated save presentation.",
    intro:
      "This block is layout only. Add folder chips, spreads, `imageSrc` paths under `/public/household/`, and copy here when you want it live—no characters or storylines are implied until you author them.",
    archiveFolders: [],
    characters: [
      {
        id: "household-slot",
        name: "Household",
        currentlyFeeling: [],
        diaryFragments: [
          "Narrative copy intentionally blank—this frame is ready for your direction in `src/content/site.ts`.",
        ],
        layout: "left",
      },
    ],
  },
  ambientStickers: [
    { id: "s1", text: "grain on gloss", className: "top-[14%] right-[4%] hidden lg:block", rotate: -6 },
    { id: "s2", text: "soft bloom pass", className: "top-[38%] left-[2%] hidden xl:block", rotate: 4 },
    { id: "s3", text: "type as texture", className: "bottom-[28%] right-[6%] hidden md:block", rotate: 5 },
    { id: "s4", text: "midnight color test", className: "top-[52%] right-[12%] hidden 2xl:block", rotate: -3 },
    { id: "s5", text: "margin discipline", className: "bottom-[18%] left-[5%] hidden lg:block", rotate: -8 },
    { id: "s6", text: "composition first", className: "top-[22%] left-[8%] hidden xl:block", rotate: 7 },
    { id: "s7", text: "editorial pacing", className: "bottom-[40%] left-[3%] hidden 2xl:block", rotate: -4 },
    { id: "s8", text: "light as material", className: "top-[8%] left-[12%] hidden 2xl:block", rotate: 3 },
    { id: "s9", text: "quiet chrome accents", className: "bottom-[52%] right-[3%] hidden xl:block", rotate: -5 },
    { id: "s10", text: "stitched to the moodboard", className: "top-[70%] left-[6%] hidden lg:block", rotate: 6 },
  ],
  floatingSystems: {
    renderingLabel: "Presentation frame",
    renderingPercent: 0,
    tonightTitle: "Queue",
    tonightItems: [
      "Replace these lines in site.ts when you want a real task list.",
      "—",
      "—",
    ],
    recentlySaved: ["placeholder_render.png", "layout_sketch.png", "grade_lut.cube"],
    lastOpened: "untitled_layout.psd",
  },
  livingArchive: {
    motes: [
      {
        id: "m1",
        text: "Render queue — editorial only",
        className: "top-[24%] right-[3%] hidden 2xl:block",
        rotate: -5,
      },
      {
        id: "m2",
        text: "Save-file copy ships from site.ts",
        className: "bottom-[32%] right-[8%] hidden xl:block",
        rotate: 4,
      },
      {
        id: "m3",
        text: "Lighting reads like a still life",
        className: "top-[48%] left-[1%] hidden lg:block",
        rotate: -7,
      },
      {
        id: "m4",
        text: "Atmosphere before narrative",
        className: "bottom-[22%] left-[6%] hidden md:block",
        rotate: 6,
      },
      {
        id: "m5",
        text: "CAS ribbon tests — layout held",
        className: "top-[62%] right-[18%] hidden xl:block",
        rotate: -3,
      },
      {
        id: "m6",
        text: "Folder names are yours to write",
        className: "bottom-[48%] left-[2%] hidden 2xl:block",
        rotate: -6,
      },
      {
        id: "m-mobile",
        text: "Studio layout — curated in content",
        className: "bottom-20 left-4 right-4 text-center md:hidden",
        rotate: -1,
      },
    ],
    cards: [
      {
        id: "tonight-folder",
        title: "Tonight’s folder",
        lines: ["Moodboard drift — satin + chrome", "CC try-on pile (unfinished)", "Swap for real notes when ready"],
      },
      {
        id: "studio-notes",
        title: "Studio notes",
        lines: ["Placeholder lines — edit in site.ts", "Kept the grain; deleted the rest", "Recorded after midnight"],
      },
      {
        id: "late-render",
        title: "Late render logs",
        lines: [
          "Reshade broke after update — saved the LUT anyway",
          "Loading screen lingered — kept the frame",
          "Filed under: presentation tests",
        ],
      },
      {
        id: "archive-fragments",
        title: "Archive fragments",
        lines: [
          "No invented save lore here",
          "Replace filenames and beats when you publish",
          "Capsule mood only until copy ships",
        ],
      },
    ],
  },
  universeRibbons: [
    { id: "r1", text: "late nights in the studio", className: "top-[18%] left-[14%] hidden 2xl:block", rotate: -8 },
    { id: "r2", text: "currently obsessing over", className: "top-[26%] right-[22%] hidden xl:block", rotate: 5 },
    { id: "r3", text: "curated presentation", className: "top-[44%] left-[8%] hidden lg:block", rotate: -4 },
    { id: "r4", text: "for players who edit the light", className: "bottom-[38%] right-[10%] hidden 2xl:block", rotate: 7 },
    { id: "r5", text: "digital femininity", className: "top-[58%] right-[6%] hidden xl:block", rotate: -6 },
    { id: "r6", text: "saved from a dream", className: "bottom-[52%] left-[12%] hidden lg:block", rotate: 4 },
    { id: "r7", text: "editor's notes", className: "top-[72%] left-[18%] hidden 2xl:block", rotate: -3 },
    { id: "r8", text: "household copy reserved", className: "bottom-[24%] right-[18%] hidden xl:block", rotate: 6 },
    { id: "r9", text: "author your own filenames", className: "top-[33%] right-[4%] hidden 2xl:block", rotate: -5 },
    { id: "r10", text: "romance pass — when you say so", className: "bottom-[60%] right-[4%] hidden lg:block", rotate: 8 },
    { id: "r11", text: "scrapbook layer on", className: "top-[12%] right-[30%] hidden xl:block", rotate: -2 },
    { id: "r12", text: "pinterest fantasy draft", className: "bottom-[12%] left-[20%] hidden 2xl:block", rotate: -7 },
    { id: "r13", text: "silver tabs only", className: "top-[66%] left-[4%] hidden md:block", rotate: 5 },
    { id: "r14", text: "Vogue in the loading screen", className: "bottom-[8%] right-[8%] hidden lg:block", rotate: -4 },
  ],
  membership: {
    intro:
      "A closeness reserved for patrons who want the first breath of new work—early files, private previews, and the occasional love letter in your inbox.",
    tiers: [
      {
        id: "orbit",
        name: "Orbit",
        price: "Entry",
        perks: ["Monthly drops digest", "Wallpapers & mood stills", "Name on the studio ledger"],
        cta: "Join the orbit",
      },
      {
        id: "silver",
        name: "Silver Ledger",
        price: "Core",
        highlighted: true,
        perks: [
          "Early access to CC capsules",
          "WIP builds & alternate cuts",
          "Voting on capsule themes",
        ],
        cta: "Unlock early access",
      },
      {
        id: "nocturne-tier",
        name: "Nocturne",
        price: "Inner circle",
        perks: [
          "Private briefings on apps & tools",
          "Experimental mods & UI tests",
          "Direct line for requests",
        ],
        cta: "Request invitation",
      },
    ],
  },
  contact: {
    line: "For collaborations, press, or slow, careful hellos:",
    email: "zesira777@gmail.com",
    socials: [
      {
        id: "patreon",
        label: "Patreon",
        href: "https://www.patreon.com/c/silasims777?vanity=user",
        icon: "patreon",
      },
      {
        id: "pinterest",
        label: "Pinterest",
        href: "https://tr.pinterest.com/zesirasims",
        icon: "pinterest",
      },
      {
        id: "tumblr",
        label: "Tumblr",
        href: "https://www.tumblr.com/zesira",
        icon: "tumblr",
      },
      {
        id: "tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/@zesirastudio",
        icon: "tiktok",
      },
    ],
  },
  whispers: {
    loaderLine: "Dreaming in gloss, grain, and quiet silver light.",
    heroAside: "Household and save copy stay empty until you write it in site.ts.",
    betweenProjectsAndAbout: "Made slowly, like favorite outfits pinned twice before leaving the house.",
    betweenAboutAndApps: "Between chrome breath, stardust, and the next layout pass.",
    betweenAppsAndMods: "Where digital worlds dress like campaigns — soft chaos, couture pacing.",
    betweenModsAndCc: "Soft chaos, carefully archived — CC folders named like perfume.",
    betweenCcAndJournal: "After midnight, everything feels editorial — tabs as proofs, not plot.",
    betweenJournalAndMembership: "Curated under silver light — for patrons who collect feelings, not files.",
    contactFootnote: "Gloss, grain, and type — presentation before invented save lore.",
    archiveMicroNotes: [
      "filed under moonlight",
      "rendered between quiet passes",
      "too pretty to optimize",
      "pinned in silver light",
      "margin notes only",
      "not for the timeline",
      "Vogue in the UI",
      "layout reads like a fashion issue",
      "last opened — never closed",
      "render queue: editorial",
      "balcony drafts — replace when real",
      "save names belong to you",
    ],
  },
  audio: {
    src: "/audio/ambient.mp3",
    volume: 0.12,
    label: "Atmosphere",
  },
};
