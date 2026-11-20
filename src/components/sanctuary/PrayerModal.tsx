"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/lib/i18n/dictionaries";
import type { SanctuaryPrayer } from "@/lib/sanctuary/sanctuaryPrayers";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  prayer: SanctuaryPrayer;
  locale: Locale;
  title: string;
};

export function PrayerModal({ open, onClose, prayer, locale, title }: Props) {
  const primary = prayer[locale];
  const others = (["fa", "en", "sv"] as const).filter((l) => l !== locale);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            aria-label="Close"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 max-h-[85svh] w-full max-w-xl overflow-y-auto rounded-2xl border border-amber-400/30 bg-slate-950/90 p-6 shadow-2xl backdrop-blur-xl md:p-8"
            dir={locale === "fa" ? "rtl" : "ltr"}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute end-4 top-4 text-alabaster/60 transition hover:text-alabaster"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-amber-300/80">
              {title}
            </p>
            <blockquote
              className={cn(
                "mt-6 text-base leading-relaxed text-amber-50/95 md:text-lg",
                locale === "fa" ? "prose-fa leading-[2.1]" : "font-sans"
              )}
              dir={locale === "fa" ? "rtl" : "ltr"}
              lang={locale}
            >
              {primary}
            </blockquote>
            {others.map((l) => (
              <blockquote
                key={l}
                className={cn(
                  "mt-5 border-t border-amber-400/20 pt-5 text-sm leading-relaxed text-alabaster/75 md:text-base",
                  l === "fa" ? "prose-fa leading-[2]" : "font-sans"
                )}
                dir={l === "fa" ? "rtl" : "ltr"}
                lang={l}
              >
                {prayer[l]}
              </blockquote>
            ))}
            <p className="mt-5 font-sans text-xs text-amber-400/80">
              {prayer.attribution[locale]}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
