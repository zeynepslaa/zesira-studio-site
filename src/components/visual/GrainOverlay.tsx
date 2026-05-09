export function GrainOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[5] mix-blend-multiply opacity-[0.12] ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
