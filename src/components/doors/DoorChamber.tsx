"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Door } from "@/lib/doors";
import type { DoorChamber as Chamber } from "@/lib/door-content";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function DoorChamberView({
  door,
  content,
}: {
  door: Door;
  content: Chamber;
}) {
  const { locale } = useLocale();
  const isFa = locale === "fa";
  const copy = isFa ? content.fa : content.en;

  return (
    <div
      className="min-h-[100svh]"
      style={{
        background: "linear-gradient(180deg, #050814 0%, #0B1126 40%, #FAF8F5 40%)",
      }}
    >
      <section className="relative overflow-hidden px-5 pb-16 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 dome-glow opacity-50" />
        <div className="relative mx-auto max-w-3xl text-center">
          <NinePointedStar size={56} className="mx-auto text-gold" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease }}
            className="mt-6 font-sans text-xs uppercase tracking-[0.3em] text-gold/75"
          >
            {isFa ? `دروازه ${door.number}` : `Door ${door.number}`}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="mt-3 font-display text-4xl text-alabaster md:text-5xl"
            dir={isFa ? "rtl" : "ltr"}
          >
            {door.title[isFa ? "fa" : "en"]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className={cn(
              "mt-4 text-alabaster/60",
              isFa ? "prose-fa text-base" : "font-sans"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {door.subtitle[isFa ? "fa" : "en"]}
          </motion.p>
        </div>
      </section>

      <section className="relative bg-alabaster px-5 pb-24">
        <div className="mx-auto max-w-3xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className={cn(
              "-mt-8 border border-gold/25 bg-white/70 px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm md:px-10",
              isFa && "text-right"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            <p
              className={cn(
                "text-indigo",
                isFa
                  ? "prose-fa text-xl font-medium md:text-[1.65rem]"
                  : "font-display text-xl leading-relaxed md:text-2xl"
              )}
            >
              “{copy.quote}”
            </p>
            <cite
              className={cn(
                "mt-6 block not-italic text-gold-deep",
                isFa ? "prose-fa text-sm" : "font-sans text-sm"
              )}
            >
              — {copy.citation}
            </cite>
          </motion.blockquote>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="mt-14"
            dir={isFa ? "rtl" : "ltr"}
          >
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-sage">
              {isFa ? "مقالهٔ آغازین" : "Starter essay"}
            </p>
            <h2 className="mt-3 font-display text-3xl text-indigo">
              {copy.articleTitle}
            </h2>
            <p
              className={cn(
                "mt-6 text-stone",
                isFa
                  ? "prose-fa text-[1.08rem] md:text-[1.2rem]"
                  : "font-sans text-base leading-relaxed md:text-lg"
              )}
            >
              {copy.articleBody}
            </p>
          </motion.article>

          <Link
            href="/#doors"
            className="mt-14 inline-block border-b border-gold/40 pb-1 font-sans text-sm text-gold"
          >
            {isFa ? "بازگشت به نه در" : "Return to the Nine Doors"}
          </Link>
        </div>
      </section>
    </div>
  );
}
