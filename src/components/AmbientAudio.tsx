"use client";

import { useEffect, useRef, useMemo, useState } from "react";

type Props = { src: string; volume: number; label: string };

export function AmbientAudio({ src, volume, label }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const canShow = useMemo(() => Boolean(src?.trim()), [src]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (!on) {
      el.pause();
      return;
    }
    el.volume = Math.min(0.35, Math.max(0.02, volume));
    void el.play().catch(() => {
      setOn(false);
      setUnavailable(true);
    });
  }, [on, volume]);

  if (!canShow || unavailable) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="metadata"
        onError={() => setUnavailable(true)}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        className="fixed bottom-6 left-6 z-50 rounded-full border border-[rgba(90,82,74,0.16)] bg-[rgba(255,252,248,0.88)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5c534c] shadow-[0_12px_32px_rgba(42,38,34,0.08)] backdrop-blur-md transition hover:border-[rgba(122,21,40,0.28)] hover:text-[#7a1528]"
      >
        {on ? `${label} — on` : `${label} — off`}
      </button>
    </>
  );
}
