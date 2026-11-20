"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { ScholarPerson } from "@/lib/scholarsData";
import { StewardAvatar } from "./StewardAvatar";
import { AskScholarForm } from "./AskScholarForm";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    back: "Back to Scholars & Stewards",
    steward: "Temple Steward",
    researcher: "Contributing Scholar",
    journey: "Journey & Milestones",
    essays: "Published Essays & Reflections",
    comingSoon: "Profile Coming Soon",
    focus: "Focus",
    works: "Selected Works & Milestones",
  },
  sv: {
    back: "Tillbaka till forskare & förvaltare",
    steward: "Tempelförvaltare",
    researcher: "Bidragande forskare",
    journey: "Resa & milstolpar",
    essays: "Publicerade essäer & reflektioner",
    comingSoon: "Profil kommer snart",
    focus: "Fokus",
    works: "Utvalda verk & milstolpar",
  },
  fa: {
    back: "بازگشت به صفحه پژوهشگران",
    steward: "امین معبد",
    researcher: "پژوهشگر همکار",
    journey: "مسیر و نقاط عطف",
    essays: "جستارها و تأملات منتشرشده",
    comingSoon: "در حال تکمیل رزومه",
    focus: "حوزه‌ها",
    works: "آثار برگزیده و نقاط عطف",
  },
} as const;

export function ScholarProfileClient({ person }: { person: ScholarPerson }) {
  const { locale } = useLocale();
  const isFa = locale === "fa";
  const t = copy[locale];
  const kindLabel = person.kind === "steward" ? t.steward : t.researcher;

  return (
    <div className="min-h-[100svh] bg-[#060918] text-alabaster">
      <div className="mx-auto max-w-4xl px-5 pb-24 pt-28 md:px-8 md:pt-32">
        <Link
          href="/scholars"
          className={cn(
            "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold/80 transition hover:text-gold",
            isFa ? "prose-fa" : "font-sans"
          )}
          dir={isFa ? "rtl" : "ltr"}
        >
          {isFa ? `${t.back} →` : `← ${t.back}`}
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center text-center"
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -m-6 flex items-center justify-center opacity-40">
              <NinePointedStar size={220} animated={false} className="text-gold/30" />
            </div>
            {person.portrait ? (
              <div
                className={cn(
                  "relative z-10 overflow-hidden rounded-full",
                  person.founder || person.isFeatured
                    ? "ring-2 ring-amber-400/55 ring-offset-4 ring-offset-[#060918] shadow-[0_0_30px_rgba(197,160,89,0.25)]"
                    : "ring-1 ring-amber-400/30 ring-offset-4 ring-offset-[#060918]"
                )}
                style={{ width: 180, height: 180 }}
              >
                <Image
                  src={person.portrait}
                  alt={person.name[locale]}
                  fill
                  className="object-cover object-top"
                  sizes="180px"
                  priority
                />
              </div>
            ) : (
              <div className="relative z-10">
                <StewardAvatar
                  hue={person.avatarHue}
                  seat={person.stewardSeat}
                  size={180}
                />
              </div>
            )}
          </div>

          <span className="mt-8 inline-block rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-amber-200">
            {person.badge?.[locale] ?? kindLabel}
          </span>
          {person.comingSoon && (
            <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.18em] text-gold/70">
              {t.comingSoon}
            </span>
          )}

          <h1
            className={cn(
              "mt-4 font-display text-3xl text-alabaster md:text-5xl",
              isFa && "prose-fa"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {person.name[locale]}
          </h1>
          <p
            className={cn(
              "mt-3 max-w-xl text-sm text-gold/90 md:text-base",
              isFa ? "prose-fa" : "font-sans"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {person.role[locale]}
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {person.focus[locale].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-3 py-1 font-sans text-[10px] text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
          {person.pressBadge && (
            <p
              className={cn(
                "mt-5 max-w-lg rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-[11px] text-amber-100/90",
                isFa ? "prose-fa" : "font-sans"
              )}
              dir={isFa ? "rtl" : "ltr"}
            >
              {person.pressBadge[locale]}
            </p>
          )}
        </motion.header>

        {person.featuredQuote && (
          <blockquote
            className={cn(
              "mt-12 rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-500/10 via-slate-950/40 to-transparent px-6 py-7 text-center shadow-[0_0_40px_rgba(197,160,89,0.12)] md:px-10",
              isFa ? "prose-fa text-base leading-[2]" : "font-display text-lg leading-relaxed md:text-xl"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            <p className="text-amber-50/95">«{person.featuredQuote[locale]}»</p>
          </blockquote>
        )}

        {person.selectedWorks && person.selectedWorks.length > 0 && (
          <section className="mt-14" dir={isFa ? "rtl" : "ltr"}>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold">
              {t.works}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {person.selectedWorks.map((work) => (
                <div
                  key={work.id}
                  className="rounded-xl border border-amber-400/25 bg-slate-950/50 p-4 backdrop-blur-md"
                >
                  <h3
                    className={cn(
                      "font-display text-lg text-alabaster",
                      isFa && "prose-fa"
                    )}
                  >
                    {work.title[locale]}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed text-white/60",
                      isFa ? "prose-fa" : "font-sans"
                    )}
                  >
                    {work.body[locale]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14" dir={isFa ? "rtl" : "ltr"}>
          <h2 className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold">
            {t.focus}
          </h2>
          <div
            className={cn(
              "mt-5 space-y-5 text-[15px] leading-relaxed text-white/75 md:text-base md:leading-[1.85]",
              isFa ? "prose-fa" : "font-sans"
            )}
          >
            {person.bio[locale].split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {person.milestones && person.milestones.length > 0 && (
          <section className="mt-14" dir={isFa ? "rtl" : "ltr"}>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold">
              {t.journey}
            </h2>
            <ol className="mt-6 space-y-5 border-s border-amber-400/25 ps-5">
              {person.milestones.map((m, i) => (
                <li key={i} className="relative">
                  <span className="absolute -start-[1.4rem] top-1.5 h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  {m.year && (
                    <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-amber-300/70">
                      {m.year}
                    </p>
                  )}
                  <h3
                    className={cn(
                      "mt-1 font-display text-xl text-alabaster",
                      isFa && "prose-fa"
                    )}
                  >
                    {m.title[locale]}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 text-sm text-white/55",
                      isFa ? "prose-fa" : "font-sans"
                    )}
                  >
                    {m.body[locale]}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {person.articles && person.articles.length > 0 && (
          <section className="mt-14" dir={isFa ? "rtl" : "ltr"}>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold">
              {t.essays}
            </h2>
            <ul className="mt-5 space-y-3">
              {person.articles.map((a) => (
                <li key={a.id}>
                  <Link
                    href={a.href ?? (a.doorSlug ? `/doors/${a.doorSlug}` : "/scholars")}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-amber-400/20 bg-slate-950/40 px-4 py-3 transition hover:border-amber-400/40"
                  >
                    <span
                      className={cn(
                        "text-sm text-alabaster/90 group-hover:text-amber-100",
                        isFa ? "prose-fa" : "font-sans"
                      )}
                    >
                      {a.title[locale]}
                    </span>
                    <span className="shrink-0 font-sans text-gold">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-14">
          <AskScholarForm
            locale={locale}
            scholarSlug={person.slug}
            scholarName={person.name[locale]}
          />
        </section>
      </div>
    </div>
  );
}
