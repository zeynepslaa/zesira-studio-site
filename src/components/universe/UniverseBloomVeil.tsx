"use client";

/**
 * Soft silver–rose atmospheric veils — sits under stars, above base wash.
 * No interaction; pure mood.
 */
export function UniverseBloomVeil() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div
        className="absolute -left-[20%] top-[-10%] h-[85%] w-[70%] rounded-full opacity-[0.55] blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse at 40% 40%, rgba(216,221,232,0.45) 0%, rgba(243,217,228,0.22) 42%, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-[15%] bottom-[-5%] h-[75%] w-[65%] rounded-full opacity-[0.5] blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(255,252,248,0.9) 0%, rgba(245,228,232,0.35) 38%, transparent 68%)",
        }}
      />
      <div
        className="absolute left-1/2 top-[30%] h-[40%] w-[min(120vw,80rem)] opacity-[0.12]"
        style={{
          transform: "translateX(-50%) rotate(-2deg)",
          background:
            "linear-gradient(105deg, transparent 0%, rgba(122,21,40,0.08) 48%, rgba(216,221,232,0.15) 52%, transparent 100%)",
        }}
      />
      <div className="editorial-grain-drift-slow absolute inset-0 opacity-[0.04] mix-blend-soft-light" />
    </div>
  );
}
