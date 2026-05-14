export type ContentStatus = "live" | "beta" | "coming-soon" | "in-development";

export type NavItem = {
  label: string;
  href: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  tagline: string;
  status: ContentStatus;
  /** Optional tiny line — “internet girl editorial” tone, use rarely */
  editorialNote?: string;
  /** Optional: set when you add a real link */
  href?: string;
};

export type AppPreview = {
  id: string;
  title: string;
  description: string;
  status: ContentStatus;
  editorialNote?: string;
};

export type ModHighlight = {
  id: string;
  title: string;
  note: string;
};

export type CcCollection = {
  id: string;
  title: string;
  season: string;
  mood: string;
};

export type JournalPost = {
  id: string;
  title: string;
  kicker: string;
  excerpt: string;
  /** One-line margin whisper; omit on most posts */
  whisper?: string;
  href?: string;
};

export type MembershipTier = {
  id: string;
  name: string;
  price: string;
  perks: string[];
  cta: string;
  highlighted?: boolean;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: "patreon" | "pinterest" | "tumblr" | "tiktok";
};

export type VaultItem = {
  id: string;
  title: string;
  type: "cc" | "mod" | "save-file";
  note: string;
  membersOnly: boolean;
  href?: string;
};

/** Fixed / corner internet-life captions — `className` = Tailwind position utilities */
export type AmbientSticker = {
  id: string;
  text: string;
  className: string;
  /** subtle rotate in degrees, applied via style */
  rotate?: number;
};

/** Fixed margin fragments — “living archive” human traces */
export type LivingArchiveMote = {
  id: string;
  text: string;
  className: string;
  rotate?: number;
};

export type LivingArchiveCard = {
  id: string;
  title: string;
  lines: string[];
};

/** Optional stills — drop files under `public/editorial/` and list here */
export type LivingArchivePlate = {
  src: string;
  alt: string;
};

export type LivingArchive = {
  motes: LivingArchiveMote[];
  cards: LivingArchiveCard[];
  plates?: LivingArchivePlate[];
};

/** Editorial “desktop” frame — copy only; wire real data when you have it */
export type FloatingSystems = {
  renderingLabel: string;
  renderingPercent: number;
  tonightTitle: string;
  tonightItems: string[];
  recentlySaved: string[];
  lastOpened: string;
  archiveRecoveredLine?: string;
};

/** One household spread in Current Household — add `imageSrc` when assets live in /public */
export type HouseholdSpread = {
  id: string;
  name: string;
  stamp?: string;
  /** e.g. `/household/render.png` in `public/household/` */
  imageSrc?: string;
  imageAlt?: string;
  currentlyFeeling: string[];
  diaryFragments: string[];
  timestamps?: string[];
  relationshipHints?: string[];
  playlistMood?: string;
  /** Visual rhythm: alternate compositions */
  layout?: "left" | "right" | "center";
};

export type HouseholdUniverse = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  /** Folder tabs — optional `href` (e.g. #household-slot) */
  archiveFolders: { id: string; label: string; note?: string; href?: string }[];
  characters: HouseholdSpread[];
};

/** Fixed-position editorial ribbons — scrapbook captions, Tumblr-era whispers */
export type UniverseRibbon = {
  id: string;
  text: string;
  className: string;
  rotate?: number;
};

/** Sparse micro-copy placed between sections & moments — edit in `site.ts` */
export type EditorialWhispers = {
  loaderLine: string;
  heroAside: string;
  betweenProjectsAndAbout: string;
  betweenAboutAndApps: string;
  betweenAppsAndMods: string;
  betweenModsAndCc: string;
  betweenCcAndJournal: string;
  betweenJournalAndMembership: string;
  /** Shown under main contact block */
  contactFootnote: string;
  /**
   * Hand-hidden margin whispers (fixed positions on wide screens).
   * Keep short; empty array hides the layer.
   */
  archiveMicroNotes: string[];
};

export type SiteContent = {
  brand: {
    name: string;
    nameLoading: string;
    tagline: string;
    seoTitle: string;
    seoDescription: string;
  };
  nav: NavItem[];
  hero: {
    subtitle: string;
    /** Floating hero margin phrases — short, tilted scraps */
    scrapPhrases?: string[];
  };
  featuredProjects: ProjectItem[];
  about: {
    eyebrow: string;
    paragraphs: string[];
  };
  apps: AppPreview[];
  mods: {
    intro: string;
    items: ModHighlight[];
  };
  cc: {
    intro: string;
    collections: CcCollection[];
  };
  journal: {
    intro: string;
    posts: JournalPost[];
  };
  membership: {
    intro: string;
    tiers: MembershipTier[];
  };
  vault: {
    intro: string;
    items: VaultItem[];
  };
  /** Living archive — current saves, girls, moods (expand with your screenshots) */
  household: HouseholdUniverse;
  /** Corner stickers + timestamps */
  ambientStickers: AmbientSticker[];
  /** Fake render / file / tonight lists */
  floatingSystems: FloatingSystems;
  /** Human traces, studio logs, margin fragments — living archive layer */
  livingArchive: LivingArchive;
  /** Extra floating captions — feminine universe layer (wide screens) */
  universeRibbons: UniverseRibbon[];
  contact: {
    line: string;
    email: string;
    socials: SocialLink[];
  };
  /** Short editorial phrases — keep sparse; empty string hides that slot */
  whispers: EditorialWhispers;
  audio: {
    /** Place `public/audio/ambient.mp3` (or change path). Empty hides the player. */
    src: string;
    volume: number;
    label: string;
  };
};
