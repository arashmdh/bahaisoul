"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { VisitorPresence } from "./VisitorPresence";

export function Hero() {
  const { t, locale } = useLocale();
  const isFa = locale === "fa";

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-indigo">
      {/* Full-bleed atmospheric plane */}
      <div className="absolute inset-0 mountain-temple" aria-hidden />
      <div className="absolute inset-0 dome-glow opacity-70" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo via-indigo/55 to-indigo/20" />

      {/* Geometry overlay — architectural light */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <NinePointedStar size={420} className="text-gold/40 max-md:hidden" />
          <NinePointedStar size={260} className="text-gold/45 md:hidden" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <VisitorPresence />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.15 }}
          className="mt-8 font-display text-5xl leading-none tracking-[0.02em] text-alabaster md:text-7xl lg:text-8xl"
        >
          {t.brand}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="mt-3 font-sans text-xs uppercase tracking-[0.35em] text-gold md:text-sm"
        >
          {t.brandSub}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.55 }}
          className="mt-8 max-w-xl font-display text-2xl font-normal leading-snug text-alabaster/90 md:text-3xl"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.75 }}
          className={
            isFa
              ? "prose-fa mt-4 max-w-md text-[0.95rem] text-alabaster/70 md:text-base"
              : "mt-4 max-w-md font-sans text-sm leading-relaxed text-alabaster/65 md:text-base"
          }
          dir={isFa ? "rtl" : "ltr"}
        >
          {t.hero.support}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.95 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#doors"
            className="bg-gold px-6 py-3 font-sans text-sm tracking-wide text-indigo transition hover:bg-gold-soft"
          >
            {t.hero.ctaPrimary}
          </Link>
          <Link
            href="/sanctuary"
            className="border border-alabaster/30 px-6 py-3 font-sans text-sm tracking-wide text-alabaster/85 transition hover:border-gold hover:text-gold"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
