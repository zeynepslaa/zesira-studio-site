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
      "A dreamy feminine digital universe—obsessive fashion archive, Sims-lit editorial, Tumblr-era luxury internet fantasy, stitched into software.",
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
      "Cinematic saves, chrome-light interfaces, and wardrobe systems—built for girls who romanticize loading screens, tabs, and the space between renders.",
    scrapPhrases: [
      "digital femininity",
      "currently rebuilding willow creek",
      "late nights in san myshuno",
      "for the girls who romanticize everything",
    ],
  },
  featuredProjects: [
    {
      id: "lookbook",
      title: "Lookbook App",
      tagline: "Curated installs, editorial pacing, midnight gloss.",
      status: "live",
      editorialNote: "Girlhood rendered in pixels — gloss first, plot later.",
    },
    {
      id: "mods-manager",
      title: "Mods Manager",
      tagline: "A composed workflow for a calmer Mods folder.",
      status: "live",
    },
    {
      id: "save-file",
      title: "Save File Tracker",
      tagline: "Hand-touched saves that feel like cinema — track, browse, breathe easier.",
      status: "live",
      editorialNote: "For cinematic save files.",
      href: "https://sims-save-file-tracker.vercel.app/",
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
      "Zesira is frequency, not a product room: slow tools for players who chase light, fabric, and the drama of a cursor hovering over “save”.",
      "This site is a layered scrapbook magazine—chrome dust, cherry tape, handwritten margins, and typography that behaves like couture.",
      "Amanda, Summer, and Leila are my current household rotation—every line about them is written here by hand, not generated. Edit `site.ts` when the story moves.",
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
        note: "Ambient hush, distant traffic, rooms that read expensive on the meter.",
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
        mood: "Dusk tones, wet pavement, window light on satin.",
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
        title: "Set-building notes",
        kicker: "Field notes",
        excerpt:
          "How a shot becomes a moodboard—light falloff, distance, and the quiet between UI states.",
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
    eyebrow: "Active save / living fiction",
    title: "Current household",
    subtitle: "A folder that keeps blooming after midnight.",
    intro:
      "Three girls, three moods, three tabs always open—this is my curated rotation, not a random generator. Swap copy and `imageSrc` in `site.ts` when your canon shifts; the layout loves density.",
    archiveFolders: [
      { id: "tartosa", label: "Tartosa romance pass", note: "salt + champagne shaders", href: "#household-summer" },
      { id: "myshuno", label: "San Myshuno nights", note: "balcony drafts", href: "#household-amanda" },
      { id: "willow", label: "Willow Creek rebuild", note: "rain + porch light", href: "#household-leila" },
      { id: "diary", label: "Creator diary clips", note: "handwritten only", href: "#household-amanda" },
    ],
    characters: [
      {
        id: "amanda",
        name: "Amanda",
        stamp: "issue no.001",
        currentlyFeeling: ["chrome tabs", "unread captions", "silver jewelry", "velvet noise"],
        diaryFragments: [
          "San Myshuno balcony drafts — saved the glow, deleted the rest.",
          "Rename the save again. The file name is part of the story.",
        ],
        timestamps: ["last touched 2m ago", "still rendering emotionally"],
        relationshipHints: ["Texts Summer when the UI feels too sharp."],
        playlistMood: "disco hush, pink neon, mascara still wet",
        layout: "left",
      },
      {
        id: "summer",
        name: "Summer",
        stamp: "tartosa — vol. II",
        currentlyFeeling: ["salt on skin", "cheap champagne", "ocean shader as nail polish", "voicemail silence"],
        diaryFragments: [
          "Tartosa romance: taxi UI optional, waves mandatory.",
          "Kept the screenshot where the shader cried first.",
        ],
        timestamps: ["saved at 2:14 AM"],
        relationshipHints: ["Sends Amanda voice notes with only background noise."],
        playlistMood: "balcony smoke, stolen towels, bass from another floor",
        layout: "right",
      },
      {
        id: "leila",
        name: "Leila",
        stamp: "willow creek / rain",
        currentlyFeeling: ["fleece socks", "library light", "secret Pinterest board", "warm tea, cold hands"],
        diaryFragments: [
          "Willow Creek rebuild — porch light test #09, still imperfect, still beautiful.",
          "Fog pass open in another tab like a love letter.",
        ],
        timestamps: ["uploaded during thunder", "archive mood: ON"],
        relationshipHints: ["Dims the house lights when everyone needs softness."],
        playlistMood: "lo-fi rain loop, dog tags, unread study tabs",
        layout: "center",
      },
    ],
  },
  ambientStickers: [
    { id: "s1", text: "girlhood archive", className: "top-[14%] right-[4%] hidden lg:block", rotate: -6 },
    { id: "s2", text: "saved from a late night build session", className: "top-[38%] left-[2%] hidden xl:block", rotate: 4 },
    { id: "s3", text: "digital femininity", className: "bottom-[16%] right-[8%] hidden lg:block", rotate: 5 },
    { id: "s4", text: "issue no.001 — not for the timeline", className: "top-[52%] right-[12%] hidden 2xl:block", rotate: -3 },
    { id: "s5", text: "tartosa romance pass", className: "bottom-[24%] left-[5%] hidden lg:block", rotate: -8 },
    { id: "s6", text: "silver tabs only", className: "top-[16%] left-[5%] hidden 2xl:block", rotate: 7 },
    { id: "s7", text: "editor’s notes", className: "bottom-[36%] left-[3%] hidden 2xl:block", rotate: -4 },
    { id: "s8", text: "currently rebuilding willow creek", className: "top-[10%] left-[2%] hidden 2xl:block", rotate: 3 },
    { id: "s9", text: "late nights in san myshuno", className: "bottom-[58%] right-[4%] hidden 2xl:block", rotate: -5 },
    { id: "s10", text: "for the girls who romanticize everything", className: "top-[78%] left-[4%] hidden 2xl:block", rotate: 6 },
  ],
  floatingSystems: {
    renderingLabel: "Willow Creek — porch light / rain pass",
    renderingPercent: 74,
    tonightTitle: "Tonight’s folder",
    tonightItems: [
      "Tartosa waves — romance shader on",
      "San Myshuno balcony LUT test",
      "Willow Creek rebuild — porch ribbon v09",
      "CC try-on pile (unfinished, still iconic)",
      "Rename save like a perfume launch",
    ],
    recentlySaved: [
      "Amanda_FINAL_v2_reallyfinal.png",
      "MyshunoBalconyDraft.exr",
      "WillowCreek_porchlight_only.rar",
      "voice_note_unsent.m4a",
      "loading_screen_at_2am.png",
    ],
    lastOpened: "TartosaRomancePass.psd",
    archiveRecoveredLine: "Archive recovered — Tumblr-era saves, emotional filenames intact",
  },
  livingArchive: {
    motes: [
      {
        id: "m1",
        text: "Rendering since 2AM — queue still emotional",
        className: "top-[24%] right-[3%] hidden 2xl:block",
        rotate: -5,
      },
      {
        id: "m2",
        text: "Current rotation · Amanda · Summer · Leila",
        className: "bottom-[32%] right-[8%] hidden xl:block",
        rotate: 4,
      },
      {
        id: "m3",
        text: "Lighting test looked like perfume ads",
        className: "top-[56%] left-[1%] hidden lg:block",
        rotate: -7,
      },
      {
        id: "m4",
        text: "Saved but never posted — caption lived in my head",
        className: "bottom-[18%] left-[6%] hidden md:block",
        rotate: 6,
      },
      {
        id: "m5",
        text: "Midnight CAS — ribbon wrong, screenshot right",
        className: "top-[68%] right-[14%] hidden xl:block",
        rotate: -3,
      },
      {
        id: "m6",
        text: "Tartosa salt still in the save name",
        className: "bottom-[48%] left-[2%] hidden 2xl:block",
        rotate: -6,
      },
      {
        id: "m-mobile",
        text: "Studio still open — San Myshuno glow in the tab bar",
        className: "bottom-20 left-4 right-4 text-center md:hidden",
        rotate: -1,
      },
    ],
    cards: [
      {
        id: "tonight-folder",
        title: "Tonight’s folder",
        lines: [
          "Moodboard drift — satin + chrome + chaos",
          "CC try-on pile (unfinished, still couture)",
          "One more Willow rain test before sleep",
        ],
      },
      {
        id: "studio-notes",
        title: "Studio notes",
        lines: [
          "Tartosa romance — taxi UI optional, waves mandatory",
          "Kept the grain; deleted the rest",
          "Recorded after midnight — always",
        ],
      },
      {
        id: "late-render",
        title: "Late render logs",
        lines: [
          "Reshade broke after update — saved the LUT anyway",
          "Loading screen lingered like a perfume ad",
          "Filed under: expensive melancholy",
        ],
      },
      {
        id: "archive-fragments",
        title: "Archive fragments",
        lines: [
          "Voice note unsent — waves only",
          "San Myshuno balcony drafts — silver haze",
          "Willow Creek porch — rain pass, still imperfect",
        ],
      },
    ],
  },
  universeRibbons: [
    { id: "r1", text: "late nights in san myshuno", className: "top-[18%] left-[14%] hidden 2xl:block", rotate: -8 },
    { id: "r2", text: "currently rebuilding willow creek", className: "top-[26%] right-[22%] hidden xl:block", rotate: 5 },
    { id: "r3", text: "girlhood archive", className: "top-[44%] left-[8%] hidden 2xl:block", rotate: -4 },
    { id: "r4", text: "for the girls who romanticize everything", className: "bottom-[38%] right-[10%] hidden 2xl:block", rotate: 7 },
    { id: "r5", text: "digital femininity", className: "top-[58%] right-[6%] hidden 2xl:block", rotate: -6 },
    { id: "r6", text: "tartosa romance pass", className: "bottom-[52%] left-[12%] hidden xl:block", rotate: 4 },
    { id: "r7", text: "editor's notes", className: "top-[72%] left-[18%] hidden 2xl:block", rotate: -3 },
    { id: "r8", text: "Amanda · Summer · Leila", className: "bottom-[24%] right-[18%] hidden 2xl:block", rotate: 6 },
    { id: "r9", text: "issue no.001", className: "top-[33%] right-[4%] hidden 2xl:block", rotate: -5 },
    { id: "r10", text: "saved from a late night build session", className: "bottom-[60%] right-[4%] hidden xl:block", rotate: 8 },
    { id: "r11", text: "scrapbook layer on", className: "top-[12%] right-[30%] hidden xl:block", rotate: -2 },
    { id: "r12", text: "pinterest fantasy draft", className: "bottom-[12%] left-[20%] hidden 2xl:block", rotate: -7 },
    { id: "r13", text: "silver tabs only", className: "top-[66%] left-[4%] hidden lg:block", rotate: 5 },
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
    loaderLine: "Dreaming in gloss, grain, girl-coded silver, and saves that feel like perfume.",
    heroAside:
      "Amanda, Summer, Leila — my household rotation, written by hand in `site.ts`. Tartosa romance in one tab, San Myshuno glow in another, Willow Creek rain on loop.",
    betweenProjectsAndAbout: "Made slowly, like outfits pinned twice before leaving — then worn in-game like runway.",
    betweenAboutAndApps: "Between chrome breath, stardust, and a San Myshuno balcony haze that never fully saves.",
    betweenAppsAndMods: "Digital worlds dressed like campaigns — soft chaos, couture pacing, UI as jewelry.",
    betweenModsAndCc: "CC folders named like perfume — each package a love letter to texture.",
    betweenCcAndJournal: "After midnight everything feels editorial — Tartosa waves in the tab bar, Willow mist in the margins.",
    betweenJournalAndMembership: "For patrons who collect feelings, filenames, and fog passes — not just files.",
    contactFootnote: "Girlhood rendered in pixels — gloss, grain, and the quiet obsession of a save file.",
    archiveMicroNotes: [
      "girlhood archive",
      "saved from a late night build session",
      "digital femininity",
      "currently rebuilding willow creek",
      "late nights in san myshuno",
      "for the girls who romanticize everything",
      "issue no.001",
      "editor’s notes",
      "render queue: emotional",
      "Vogue in the UI",
      "Tartosa salt still in the save name",
      "silver tabs only",
    ],
  },
  audio: {
    src: "/audio/ambient.mp3",
    volume: 0.12,
    label: "Atmosphere",
  },
};
