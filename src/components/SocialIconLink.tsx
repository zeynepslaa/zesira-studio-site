import type { SocialLink } from "@/content/types";

function Icon({ kind, className }: { kind: SocialLink["icon"]; className?: string }) {
  const cn = className ?? "h-5 w-5";
  switch (kind) {
    case "patreon":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            fill="currentColor"
            d="M15.15 8.35c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75 1.68-3.75 3.75-3.75Zm-9.15 8.4V7.25h2.85v9.5H6Z"
          />
        </svg>
      );
    case "pinterest":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.16 8.94 7.54 10.38-.1-.9-.2-2.28.04-3.26.22-.95 1.42-6.06 1.42-6.06s-.36-.72-.36-1.79c0-1.67.97-2.92 2.18-2.92 1.03 0 1.53.77 1.53 1.7 0 1.04-.66 2.6-1 4.05-.28 1.21.6 2.2 1.78 2.2 2.14 0 3.78-2.26 3.78-5.52 0-2.89-2.08-4.91-5.05-4.91-3.44 0-5.46 2.58-5.46 5.25 0 1.04.4 2.16.9 2.77.1.12.11.22.08.34l-.33 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.44-2.9-2.44-4.67 0-3.8 2.76-7.29 7.96-7.29 4.18 0 7.43 2.98 7.43 6.96 0 4.15-2.62 7.5-6.26 7.5-1.22 0-2.37-.63-2.76-1.38l-.75 2.85c-.27 1.06-1 2.39-1.49 3.2 1.12.34 2.3.52 3.54.52 5.52 0 10-4.48 10-10S17.52 2 12 2Z"
          />
        </svg>
      );
    case "tumblr":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            fill="currentColor"
            d="M9.5 21v-6.2H7V9.9h2.5V7.1c0-2.45 1.55-4.7 5.1-4.7 1.45 0 2.52.1 2.52.1l-.09 3.1h-1.73c-1.7 0-2 .84-2 2.2V9.9H17l-.28 4.9h-3.78V21H9.5Z"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            fill="currentColor"
            d="M16.6 5.82s1.35-.09 2.4-.9v3.84a6.22 6.22 0 0 1-2.4-.12v7.74A5.62 5.62 0 1 1 7.5 14.5h.38V18a2.26 2.26 0 1 0 2.26-2.26V8.05a5.65 5.65 0 0 0-3.2.99l-.04-.07A5.62 5.62 0 0 1 16.6 8.5v-2.7Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function SocialIconLink({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(90,82,74,0.14)] bg-[#fffcf7]/95 text-[#4a433d] shadow-[0_10px_28px_rgba(42,38,34,0.06)] backdrop-blur-sm transition duration-500 hover:border-[rgba(122,21,40,0.28)] hover:bg-white hover:text-[#7a1528] hover:shadow-[0_14px_36px_rgba(122,21,40,0.1)]"
      aria-label={link.label}
    >
      <Icon
        kind={link.icon}
        className="h-5 w-5 transition duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_6px_rgba(122,21,40,0.2)]"
      />
    </a>
  );
}
