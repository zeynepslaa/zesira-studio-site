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
    { label: "PROJECTS", href: "#projects" },
    { label: "APPS", href: "#apps" },
    { label: "MODS", href: "#mods" },
    { label: "CC", href: "#cc" },
    { label: "JOURNAL", href: "#journal" },
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
    email: "hello@zesirastudio.com",
    socials: [
      {
        id: "patreon",
        label: "Patreon",
        href: "https://www.patreon.com/",
        icon: "patreon",
      },
      {
        id: "pinterest",
        label: "Pinterest",
        href: "https://www.pinterest.com/",
        icon: "pinterest",
      },
      {
        id: "tumblr",
        label: "Tumblr",
        href: "https://www.tumblr.com/",
        icon: "tumblr",
      },
      {
        id: "tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/",
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
    ],
  },
  audio: {
    src: "/audio/ambient.mp3",
    volume: 0.12,
    label: "Atmosphere",
  },
};
