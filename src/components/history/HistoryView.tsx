"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { HISTORY_TOPICS, type HistoryTopic } from "@/lib/history";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function HistoryView({ topic }: { topic: HistoryTopic }) {
  const { locale, t } = useLocale();
  const isFa = locale === "fa";
  const title = topic.title[locale];
  const subtitle = topic.subtitle[locale];
  const intro = topic.intro[locale];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [topic.slug]);

  return (
    <div className="min-h-[100svh] bg-alabaster">
      <section
        className="relative overflow-hidden px-5 pb-12 pt-28 md:pb-14 md:pt-32"
        style={{
          background:
            "linear-gradient(180deg, #050814 0%, #0B1126 70%, #0F172A 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 dome-glow opacity-45" />
        <div className="relative mx-auto max-w-6xl text-center">
          <NinePointedStar size={48} className="mx-auto text-gold" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease }}
            className="mt-5 font-sans text-xs uppercase tracking-[0.3em] text-gold/75"
          >
            {t.history.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="mt-3 font-display text-3xl text-alabaster md:text-5xl"
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.nav.history}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className={cn(
              "mx-auto mt-4 max-w-2xl text-alabaster/65",
              isFa ? "prose-fa text-base" : "font-sans"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.history.choose}
          </motion.p>
        </div>
      </section>

      {/* Topic titles — horizontal on mobile, sidebar on desktop */}
      <div className="border-b border-gold/20 bg-alabaster-warm/60">
        <nav
          className="mx-auto flex max-w-6xl gap-1 overflow-x-auto overscroll-x-contain px-4 py-3 [-webkit-overflow-scrolling:touch] sm:px-5 sm:py-4 md:flex-wrap md:justify-center md:gap-2 md:overflow-visible md:px-8 md:py-6"
          aria-label={t.history.menu}
          dir={isFa ? "rtl" : "ltr"}
        >
          {HISTORY_TOPICS.map((item) => {
            const active = item.slug === topic.slug;
            return (
              <Link
                key={item.slug}
                href={`/history/${item.slug}`}
                scroll={false}
                className={cn(
                  "shrink-0 px-3 py-2 font-display text-base transition md:px-4 md:text-lg",
                  active
                    ? "border-b-2 border-gold text-indigo"
                    : "border-b-2 border-transparent text-stone hover:text-indigo"
                )}
              >
                {item.title[locale]}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <motion.article
          key={topic.slug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          dir={isFa ? "rtl" : "ltr"}
        >
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-sage">
            {t.history.menu}
          </p>
          <h2 className="mt-3 font-display text-3xl text-indigo md:text-4xl">
            {title}
          </h2>
          <p
            className={cn(
              "mt-3 text-gold-deep",
              isFa ? "prose-fa text-base" : "font-sans text-base md:text-lg"
            )}
          >
            {subtitle}
          </p>

          <div
            className={cn(
              "mt-10 space-y-5 text-stone",
              isFa
                ? "prose-fa text-[1.05rem] md:text-[1.125rem]"
                : "font-sans text-base leading-relaxed md:text-lg"
            )}
          >
            {intro.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          {topic.milestones && topic.milestones.length > 0 && (
            <div className="mt-14">
              <h3 className="font-display text-2xl text-indigo md:text-3xl">
                {t.history.milestones}
              </h3>
              <ol className="mt-8 space-y-8">
                {topic.milestones.map((m, i) => (
                  <li
                    key={m.title.en}
                    className="border-t border-gold/25 pt-6"
                    style={{ animationDelay: `${0.04 * i}s` }}
                  >
                    <p className="font-sans text-xs tracking-[0.2em] text-gold">
                      {m.period[locale]}
                    </p>
                    <h4 className="mt-2 font-display text-xl text-indigo">
                      {m.title[locale]}
                    </h4>
                    <p
                      className={cn(
                        "mt-3 text-stone",
                        isFa
                          ? "prose-fa text-[0.98rem]"
                          : "font-sans text-sm leading-relaxed md:text-base"
                      )}
                    >
                      {m.body[locale]}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {topic.sections.map((section) => (
            <section key={section.heading.en} className="mt-14">
              <h3 className="font-display text-2xl text-indigo md:text-3xl">
                {section.heading[locale]}
              </h3>
              <div
                className={cn(
                  "mt-6 space-y-5 text-stone",
                  isFa
                    ? "prose-fa text-[1.05rem] md:text-[1.125rem]"
                    : "font-sans text-base leading-relaxed md:text-lg"
                )}
              >
                {section.paragraphs[locale].map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-16 border-t border-gold/20 pt-8 pb-8">
            <h3 className="font-display text-xl text-indigo">
              {t.history.sources}
            </h3>
            <ul className="mt-4 space-y-2">
              {topic.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-gold-deep underline-offset-4 transition hover:text-indigo hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
