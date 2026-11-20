"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/about";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutSanctuary({ compact = false }: { compact?: boolean }) {
  const { locale } = useLocale();
  const copy = locale === "fa" ? ABOUT.fa : ABOUT.en;
  const isFa = locale === "fa";

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-alabaster px-5 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 temple-veil opacity-40" />
      <div className="relative mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="font-sans text-xs uppercase tracking-[0.28em] text-sage"
        >
          Mashriqu’l-Adhkár
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.08, ease }}
          className="mt-3 font-display text-3xl text-indigo md:text-4xl"
          dir={isFa ? "rtl" : "ltr"}
        >
          {copy.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="mt-4 font-display text-lg text-gold-deep md:text-xl"
          dir={isFa ? "rtl" : "ltr"}
        >
          {copy.subtitle}
        </motion.p>

        <div
          className={cn(
            "mt-10 space-y-5 text-base text-stone",
            isFa
              ? "prose-fa text-right text-[1.05rem] md:text-[1.125rem]"
              : "font-sans leading-relaxed"
          )}
          dir={isFa ? "rtl" : "ltr"}
        >
          {(compact ? copy.manifesto.slice(0, 2) : copy.manifesto).map(
            (para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.08 * i, ease }}
              >
                {para}
              </motion.p>
            )
          )}
        </div>

        {!compact && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              className={cn(
                "mt-14 font-display text-2xl text-indigo",
                isFa && "text-right"
              )}
              dir={isFa ? "rtl" : "ltr"}
            >
              {copy.pillarsHeading}
            </motion.h3>
            <ol className="mt-8 space-y-6">
              {copy.pillars.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.06 * i, ease }}
                  className="border-t border-gold/25 pt-5"
                  dir={isFa ? "rtl" : "ltr"}
                >
                  <p className="font-display text-lg text-indigo">
                    <span className="me-2 font-sans text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.title}
                  </p>
                  <p
                    className={cn(
                      "mt-2 text-stone",
                      isFa
                        ? "prose-fa text-[0.98rem]"
                        : "font-sans text-sm leading-relaxed"
                    )}
                  >
                    {p.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </>
        )}

        {compact && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-10"
          >
            <Link
              href="/about"
              className="border-b border-gold/40 pb-1 font-sans text-sm tracking-wide text-gold transition hover:border-gold"
            >
              {isFa ? "ادامهٔ بیانیه" : "Read the full manifesto"}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
