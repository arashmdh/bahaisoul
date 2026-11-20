"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type Props = {
  quote: string;
  source: string;
  author: string;
};

export function DailyQuote({ quote, source, author }: Props) {
  const { t } = useLocale();
  const [reflecting, setReflecting] = useState(false);

  return (
    <section className="relative bg-indigo px-5 py-24 text-alabaster md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40 dome-glow" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold/80">
          {t.quote.heading}
        </p>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-2xl leading-relaxed text-alabaster md:text-3xl md:leading-relaxed"
        >
          “{quote}”
        </motion.blockquote>
        <cite className="mt-8 block font-sans text-sm not-italic tracking-wide text-gold/75">
          — {author}, {source}
        </cite>

        <button
          type="button"
          onClick={() => setReflecting((v) => !v)}
          className="mt-10 border-b border-gold/40 pb-1 font-sans text-sm tracking-wide text-gold transition hover:border-gold"
        >
          {reflecting ? t.quote.reflecting : t.quote.reflect}
        </button>

        <AnimatePresence>
          {reflecting && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="mx-auto mt-8 max-w-md font-sans text-base leading-relaxed text-alabaster/70">
                {t.quote.prompt}
              </p>
              <textarea
                rows={4}
                className="mt-6 w-full resize-none border border-gold/20 bg-alabaster/5 px-4 py-3 font-sans text-sm text-alabaster placeholder:text-alabaster/35 focus:border-gold/50 focus:outline-none"
                placeholder="..."
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
