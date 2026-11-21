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
  const lang = locale === "fa" ? "fa" : "en";
  const copy = content[lang];
  const title = door.title[locale];
  const subtitle = door.subtitle[locale];
  const imageAlt = content.imageAlt[locale];

  /** Authoritative list + per-section source URLs, deduped by URL. */
  const allSources = (() => {
    const seen = new Set<string>();
    const out: { label: string; url: string }[] = [];
    for (const s of [
      ...copy.sources,
      ...copy.sourceSections.map((sec) => sec.source),
    ]) {
      if (seen.has(s.url)) continue;
      seen.add(s.url);
      out.push(s);
    }
    return out;
  })();

  return (
    <div className="min-h-[100svh] bg-alabaster">
      {/* Header with door image as full-bleed background */}
      <section className="relative min-h-[52vh] overflow-hidden px-5 pb-20 pt-28 md:min-h-[58vh] md:pb-24 md:pt-32">
        <div className="absolute inset-0 overflow-hidden bg-[#050814]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={content.image}
            src={content.image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: content.imagePosition ?? "center center",
            }}
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-b to-alabaster",
              content.imagePosition?.includes("top")
                ? "from-[#050814]/35 via-[#0B1126]/45"
                : "from-[#050814]/65 via-[#0B1126]/50"
            )}
          />
          <div className="pointer-events-none absolute inset-0 dome-glow opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <NinePointedStar size={56} className="mx-auto text-gold" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease }}
            className="mt-6 font-sans text-xs uppercase tracking-[0.3em] text-gold/85"
          >
            {isFa
              ? `دروازه ${door.number}`
              : locale === "sv"
                ? `Dörr ${door.number}`
                : `Door ${door.number}`}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className={cn(
              "mt-3 break-words font-display text-3xl text-alabaster drop-shadow-[0_2px_20px_rgba(5,8,20,0.55)] sm:text-4xl md:text-5xl",
              isFa && "prose-fa"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className={cn(
              "mt-4 text-alabaster/85 drop-shadow-[0_1px_12px_rgba(5,8,20,0.5)]",
              isFa
                ? "prose-fa text-base md:text-lg"
                : "font-sans text-sm md:text-base"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {subtitle}
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
              "-mt-8 border border-gold/25 bg-white/80 px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm md:px-10",
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
              {isFa
                ? "مقالهٔ ژرف"
                : locale === "sv"
                  ? "Fördjupande essä"
                  : "Deep essay"}
            </p>
            <h2
              className={cn(
                "mt-3 font-display text-3xl text-indigo md:text-4xl",
                isFa && "prose-fa"
              )}
            >
              {copy.articleTitle}
            </h2>
            <div className="mt-6 space-y-5">
              {copy.articleParagraphs.map((para, i) => (
                <p
                  key={i}
                  className={cn(
                    "text-stone",
                    isFa
                      ? "prose-fa text-[1.08rem] md:text-[1.2rem]"
                      : "font-sans text-base leading-relaxed md:text-lg"
                  )}
                >
                  {para}
                </p>
              ))}
            </div>

            {copy.sourceSections.length > 0 && (
              <div className="mt-14 space-y-12">
                <p className="font-sans text-xs uppercase tracking-[0.25em] text-sage">
                  {isFa
                    ? "خلاصه‌ها از منابع مرتبط"
                    : locale === "sv"
                      ? "Sammanfattningar från källor"
                      : "From related sources"}
                </p>
                {copy.sourceSections.map((section) => (
                  <section
                    key={section.source.url + section.title}
                    className="border-t border-gold/20 pt-8"
                  >
                    <h3
                      className={cn(
                        "font-display text-2xl text-indigo md:text-[1.65rem]",
                        isFa && "prose-fa"
                      )}
                    >
                      {section.title}
                    </h3>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((para, i) => (
                        <p
                          key={i}
                          className={cn(
                            "text-stone",
                            isFa
                              ? "prose-fa text-[1.05rem] md:text-[1.15rem]"
                              : "font-sans text-base leading-relaxed md:text-lg"
                          )}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}

            {allSources.length > 0 && (
              <aside className="mt-10 border-t border-gold/25 pt-6">
                <h3
                  className={cn(
                    "font-display text-lg text-indigo",
                    isFa && "prose-fa"
                  )}
                >
                  {isFa
                    ? "منابع معتبر"
                    : locale === "sv"
                      ? "Auktoritativa källor"
                      : "Authoritative sources"}
                </h3>
                <ul className="mt-3 space-y-2">
                  {allSources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "text-gold-deep underline-offset-2 transition hover:underline",
                          isFa ? "prose-fa text-sm" : "font-sans text-sm"
                        )}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </motion.article>

          <Link
            href="/#doors"
            className="mt-14 inline-block border-b border-gold/40 pb-1 font-sans text-sm text-gold"
          >
            {isFa
              ? "بازگشت به نُه درب"
              : locale === "sv"
                ? "Tillbaka till de nio dörrarna"
                : "Return to the Nine Doors"}
          </Link>
        </div>
      </section>
    </div>
  );
}
