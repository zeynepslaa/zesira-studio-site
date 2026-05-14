/** Luxury editorial pacing — silk in low light, not product UI */
export const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;

/** Snappier hovers — fashion UI, not sluggish product */
export const HOVER_SNAP_EASE = [0.25, 0.1, 0.25, 1] as const;

/** Margin stickers / ribbons — “reel in from the side” */
export const EDITORIAL_REEL_SPRING = {
  type: "spring" as const,
  stiffness: 360,
  damping: 22,
  mass: 0.68,
};

export const editorialViewport = { once: true, margin: "-14% 0px" as const };
export const editorialViewportSoft = { once: true, margin: "-10% 0px" as const };
