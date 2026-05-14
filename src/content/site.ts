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
      editorialNote: "Girlhood rendered in pixels.",
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
      "Zesira is not a loud room—it’s a frequency. I build slow, sensual systems for players who care about light, fabric, and the story between loading screens.",
      "Everything here is photographed in words: chrome breath on charcoal, cream type on silence, silver constellations that never beg for attention.",
      "This is work for night owls with taste—for the ones who style their saves like closet doors swinging open to another city.",
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
        title: "After Nine",
        season: "Vol. I",
        mood: "Cigarette ash pearl, mirror steam, bass from another floor.",
      },
      {
        id: "vol-02",
        title: "Willow Noir",
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
        id: "willow",
        title: "Building Willow Creek",
        kicker: "Field notes",
        excerpt:
          "How a world becomes a moodboard—porch light, distance, the sound of a screen door that never quite closes.",
        whisper: "Velvet noise & loading screens.",
      },
      {
        id: "inside",
        title: "Inside Zesira Studio",
        kicker: "Studio letter",
        excerpt:
          "The rituals behind the gloss: reference stacks, midnight color tests, and why restraint is the ultimate flex.",
      },
      {
        id: "girls",
        title: "The making of Girls After 9",
        kicker: "Long exposure",
        excerpt:
          "From first silhouette to final render—a timeline written in fabric swatches and borrowed moonlight.",
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
        title: "After Nine — full capsule drop",
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
        title: "Willow noir starter save",
        type: "save-file",
        note: "Hand-styled lots, curated wardrobe hooks, quiet story beats baked in.",
        membersOnly: true,
        href: "/members",
      },
    ],
  },
  household: {
    eyebrow: "Active save / living fiction",
    title: "Current household",
    subtitle: "A folder that kept growing after midnight.",
    intro:
      "This is not a gallery. It is an inhabited archive—screenshots, moods, fake timestamps, and the girls who live rent-free in my Documents. Drop your own renders into /public/household/ and wire imageSrc in site.ts.",
    archiveFolders: [
      { id: "tartosa", label: "Tartosa weekends", note: "uploaded during a thunderstorm", href: "#household-summer" },
      { id: "voice", label: "Saved voice notes", note: "never sent", href: "#household-amanda" },
      { id: "midnight", label: "After midnight looks", note: "issue no.04", href: "#household-amanda" },
      { id: "willow", label: "Rainy Willow Creek", note: "found in fog", href: "#household-leila" },
      { id: "screens", label: "Forgotten screenshots", note: "archive recovered", href: "#household-leila" },
    ],
    characters: [
      {
        id: "amanda",
        name: "Amanda",
        stamp: "issue no.04",
        currentlyFeeling: [
          "soft exhaustion",
          "cherry gloss",
          "silver heels",
          "unread texts",
          "perfume still on the coat collar",
        ],
        diaryFragments: [
          "Returned from Tartosa at 1:43 AM. The taxi UI never loaded—only rain.",
          "Saved but never posted. The caption lived in my head for three days.",
          "She keeps renaming the save: Amanda_Final / Amanda_Final2 / Amanda_actually_final.",
        ],
        timestamps: ["last edited 3 min ago", "render still processing", "recorded after midnight"],
        relationshipHints: ["Summer left a lipstick on her dresser. Still there."],
        playlistMood: "silver jewelry, wet asphalt, pink motel sign humming",
        layout: "left",
      },
      {
        id: "summer",
        name: "Summer",
        stamp: "vol. II — tartosa",
        currentlyFeeling: ["salt on skin", "cheap champagne", "voicemail silence", "tan lines as proof"],
        diaryFragments: [
          "Found in Tartosa. The ocean shader looked like nail polish—she cried a little.",
          "Voice note 00:41 — only waves. I kept it.",
        ],
        timestamps: ["saved at 2:14 AM", "currently rendering…"],
        relationshipHints: ["Texts Amanda when the world feels too sharp."],
        playlistMood: "disco ball heartbreak, balcony smoke, stolen towels",
        layout: "right",
      },
      {
        id: "leila",
        name: "Leila",
        stamp: "willow creek / rain",
        currentlyFeeling: ["fleece socks", "library light", "secret Pinterest board", "warm tea, cold hands"],
        diaryFragments: [
          "Rainy Willow Creek. She built a porch nobody uses because the sound is enough.",
          "Brindleton Bay fog.psd — last opened before the update broke her shaders.",
        ],
        timestamps: ["uploaded during a thunderstorm", "archive recovered"],
        relationshipHints: ["Keeps Leila’s room darker than the rest of the house."],
        playlistMood: "lo-fi rain loop, dog tags clinking, unread study notes",
        layout: "center",
      },
    ],
  },
  ambientStickers: [
    { id: "s1", text: "saved at 2:14 AM", className: "top-[14%] right-[4%] hidden lg:block", rotate: -6 },
    { id: "s2", text: "currently rendering…", className: "top-[38%] left-[2%] hidden xl:block", rotate: 4 },
    { id: "s3", text: "girlhood rendered in pixels", className: "bottom-[28%] right-[6%] hidden md:block", rotate: 5 },
    { id: "s4", text: "late night archive", className: "top-[52%] right-[12%] hidden 2xl:block", rotate: -3 },
    { id: "s5", text: "from Amanda’s folder", className: "bottom-[18%] left-[5%] hidden lg:block", rotate: -8 },
    { id: "s6", text: "recently obsession-worthy", className: "top-[22%] left-[8%] hidden xl:block", rotate: 7 },
    { id: "s7", text: "issue no.04 — not for the timeline", className: "bottom-[40%] left-[3%] hidden 2xl:block", rotate: -4 },
  ],
  floatingSystems: {
    renderingLabel: "Willow Creek — porch light / rain pass",
    renderingPercent: 74,
    tonightTitle: "Tonight’s folder",
    tonightItems: [
      "Rain week — kept the grain",
      "Reshade test (quiet fail, still beautiful)",
      "Broken mods again — 300 packages removed",
      "Brindleton fog looked cinematic",
      "Tartosa taxi UI never loaded — only rain",
    ],
    recentlySaved: [
      "Amanda_FINAL_v2_reallyfinal.png",
      "WillowCreek_porchlight_only.rar",
      "voice_note_unsent.m4a",
      "CC_tryon_session_04.package",
      "loading_screen_at_2am.png",
    ],
    lastOpened: "BrindletonBay_Fog.psd",
    archiveRecoveredLine: "Archive recovered — forgotten screenshots, 2014 Tumblr saves",
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
        text: "Current save rotation · Willow → Tartosa drift",
        className: "bottom-[32%] right-[8%] hidden xl:block",
        rotate: 4,
      },
      {
        id: "m3",
        text: "Lighting test looked like perfume ads",
        className: "top-[48%] left-[1%] hidden lg:block",
        rotate: -7,
      },
      {
        id: "m4",
        text: "Saved but never posted",
        className: "bottom-[22%] left-[6%] hidden md:block",
        rotate: 6,
      },
      {
        id: "m5",
        text: "Midnight CAS — ribbon still wrong, kept the screenshot",
        className: "top-[62%] right-[18%] hidden xl:block",
        rotate: -3,
      },
      {
        id: "m6",
        text: "Old Tumblr era saves — emotional file names intact",
        className: "bottom-[48%] left-[2%] hidden 2xl:block",
        rotate: -6,
      },
      {
        id: "m-mobile",
        text: "Studio still open — porch light in Willow Creek",
        className: "bottom-20 left-4 right-4 text-center md:hidden",
        rotate: -1,
      },
    ],
    cards: [
      {
        id: "tonight-folder",
        title: "Tonight’s folder",
        lines: [
          "Moodboard drift — satin + chrome",
          "CC try-on pile (unfinished)",
          "One more Willow rain test before sleep",
        ],
      },
      {
        id: "studio-notes",
        title: "Studio notes",
        lines: [
          "The taxi UI never loaded — only rain",
          "Kept the grain; deleted the rest",
          "Recorded after midnight",
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
          "Brindleton Bay fog.psd — last opened before shaders complained",
          "Tartosa weekends — salt on skin, cheap champagne",
        ],
      },
    ],
  },
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
    loaderLine: "Dreaming in gloss and grain.",
    heroAside: "For girls who romanticize loading screens.",
    betweenProjectsAndAbout: "Made slowly, like favorite outfits.",
    betweenAboutAndApps: "Saved somewhere between chrome and stardust.",
    betweenAppsAndMods: "Where digital worlds dress beautifully.",
    betweenModsAndCc: "Soft chaos, carefully archived.",
    betweenCcAndJournal: "After midnight, everything feels editorial.",
    betweenJournalAndMembership: "Curated under silver light.",
    contactFootnote: "Girlhood rendered in pixels — gloss, grain & quiet obsession.",
    archiveMicroNotes: [
      "filed under moonlight",
      "rendered between loading screens",
      "too pretty to optimize",
      "archived from a girl’s desktop",
      "saved at 2:14 AM",
      "pinned in silver light",
      "reblogged in my head",
      "not for the timeline",
      "Vogue in the UI",
      "girlhood rendered like a fashion issue",
      "last opened — never closed",
      "render queue: emotional",
      "found in Tartosa (again)",
    ],
  },
  audio: {
    src: "/audio/ambient.mp3",
    volume: 0.12,
    label: "Atmosphere",
  },
};
