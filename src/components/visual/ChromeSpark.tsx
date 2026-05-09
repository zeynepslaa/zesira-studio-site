import { useId } from "react";

type Props = {
  size?: number;
  className?: string;
};

/** Slim editorial “chrome dust” sparkle — not a playful star shape */
export function ChromeSpark({ size = 14, className = "" }: Props) {
  const gid = useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id={`cs-${gid}`} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,252,248,0.98)" />
          <stop offset="0.4" stopColor="rgba(210,200,215,0.55)" />
          <stop offset="1" stopColor="rgba(122,21,40,0.2)" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#cs-${gid})`}
        d="M12 1.25L13.35 9.65 21.75 12 13.35 14.35 12 22.75 10.65 14.35 2.25 12 10.65 9.65z"
        style={{ filter: "drop-shadow(0 0 4px rgba(122,21,40,0.12))" }}
      />
      <path
        fill="rgba(255,255,255,0.14)"
        d="M12 5.5L12.55 11.45 18.5 12 12.55 12.55 12 18.5 11.45 12.55 5.5 12 11.45 11.45z"
      />
    </svg>
  );
}
