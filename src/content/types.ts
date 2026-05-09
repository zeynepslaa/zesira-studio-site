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
