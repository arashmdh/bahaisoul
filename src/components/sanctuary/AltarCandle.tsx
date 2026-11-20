"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/lib/i18n/dictionaries";
import {
  formatRemaining,
  remainingRatio,
  type SanctuaryCandle,
} from "@/lib/sanctuary/candles";
import { cn } from "@/lib/utils";

type Props = {
  candle: SanctuaryCandle;
  locale: Locale;
  now: number;
  onAmen: (id: string) => void;
  labels: { seeker: string; amen: string };
};

export function AltarCandle({ candle, locale, now, onAmen, labels }: Props) {
  const [open, setOpen] = useState(false);
  const ratio = remainingRatio(candle, now);
  const height = Math.round(28 + ratio * 78);
  const width = 11 + (candle.id.length % 3);
  const displayName =
    candle.anonymous || !candle.name ? labels.seeker : candle.name;

  return (
    <div className="relative flex flex-col items-center self-end">
      <button
        type="button"
        className="group relative flex flex-col items-center outline-none"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        aria-label={candle.intention}
      >
        <span
          className="candle-flame relative z-10 mb-[-3px] block h-[18px] w-[9px] rounded-[50%_50%_45%_45%/60%_60%_40%_40%] bg-gradient-to-t from-orange-500 via-amber-200 to-white"
          style={{
            boxShadow: "0 0 22px 7px rgba(251, 191, 36, 0.7)",
            animationDelay: `${(candle.id.length % 6) * 0.11}s`,
          }}
        />
        <span className="z-[1] h-2 w-[1.5px] rounded-full bg-stone-900/90" />
        <span
          className="relative overflow-hidden rounded-t-[3px] rounded-b-[2px] bg-gradient-to-b from-white via-[#f4efe6] to-[#e8dfd0]"
          style={{
            height,
            width,
            boxShadow:
              "inset -2px 0 4px rgba(0,0,0,0.08), inset 2px 0 4px rgba(255,255,255,0.5), 0 0 16px rgba(251,191,36,0.2)",
          }}
        >
          <span className="absolute inset-x-0 top-0 h-[3px] bg-white/95" />
          {/* Melt drips */}
          <span className="absolute left-[15%] top-[18%] h-[28%] w-[28%] rounded-b-full bg-gradient-to-b from-white/80 to-[#ebe3d6]/40" />
          <span className="absolute right-[10%] top-[40%] h-[22%] w-[22%] rounded-b-full bg-gradient-to-b from-white/50 to-transparent" />
        </span>
        <span className="mt-0.5 h-[2px] w-[140%] rounded-full bg-amber-300/35 blur-[1.5px]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[calc(100%+12px)] left-1/2 z-30 w-52 -translate-x-1/2 rounded-xl border border-amber-400/35 bg-slate-950/88 p-3 shadow-[0_0_30px_rgba(197,160,89,0.28)] backdrop-blur-xl"
            dir={locale === "fa" ? "rtl" : "ltr"}
          >
            <p className="font-display text-sm text-amber-200">{displayName}</p>
            <p
              className={cn(
                "mt-1 line-clamp-3 text-xs text-alabaster/75",
                locale === "fa" && "prose-fa"
              )}
            >
              {candle.intention || "—"}
            </p>
            <p className="mt-2 font-sans text-[10px] tracking-wide text-amber-400/80">
              {formatRemaining(
                candle,
                now,
                locale === "sv" ? "sv" : locale === "fa" ? "fa" : "en"
              )}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onAmen(candle.id);
              }}
              className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/15 px-2.5 py-1 font-sans text-[11px] text-amber-100 transition hover:bg-amber-500/25"
            >
              <Heart size={12} className="fill-amber-300/80 text-amber-300" />
              {labels.amen}
              <span className="text-amber-300/70">{candle.amens}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
