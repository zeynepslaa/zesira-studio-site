"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChromeSpark } from "@/components/visual/ChromeSpark";

type Props = { wordmark: string; loaderLine?: string; minMs?: number; onDone: () => void };

export function LoadingScreen({ wordmark, loaderLine, minMs = 2900, onDone }: Props) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), minMs);
    return () => window.clearTimeout(t);
  }, [minMs]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onDone}>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f7f2ea]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: reduce ? "none" : "blur(14px)" }}
          transition={{ duration: reduce ? 0.35 : 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_20%,rgba(255,252,248,0.9),transparent_60%),radial-gradient(ellipse_50%_40%_at_90%_80%,rgba(122,21,40,0.06),transparent_55%)]"
          />

          <div className="relative flex flex-col items-center px-6">
            {!reduce ? (
              <>
                <ChromeSpark className="absolute -left-14 top-1/2 opacity-55" size={11} />
                <ChromeSpark className="absolute -right-12 top-[20%] opacity-50" size={9} />
                <ChromeSpark className="absolute -left-8 -top-8 opacity-45" size={8} />
              </>
            ) : null}

            <motion.p
              className="font-display relative text-center text-[clamp(2.6rem,10vw,6.8rem)] font-medium tracking-[0.14em] text-[#1f1b18]"
              initial={{ opacity: 0.12, letterSpacing: "0.45em", filter: "blur(12px)" }}
              animate={
                reduce
                  ? { opacity: 1, letterSpacing: "0.14em", filter: "blur(0px)" }
                  : {
                      opacity: [0.12, 1, 0.92],
                      letterSpacing: ["0.45em", "0.14em", "0.16em"],
                      filter: ["blur(12px)", "blur(1px)", "blur(0px)"],
                    }
              }
              transition={
                reduce
                  ? { duration: 0.45 }
                  : { duration: 2.25, times: [0, 0.55, 1], ease: "easeInOut" }
              }
              style={{ textShadow: "0 12px 48px rgba(255,252,248,0.85)" }}
            >
              {wordmark}
            </motion.p>

            {loaderLine?.trim() ? (
              <motion.p
                className="relative mt-7 max-w-md text-center font-serif text-[0.875rem] font-light italic leading-relaxed tracking-[0.02em] text-[#7a1528]/85"
                initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.8, ease: "easeOut" }}
              >
                {loaderLine}
              </motion.p>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
