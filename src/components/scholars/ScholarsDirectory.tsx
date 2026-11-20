"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  SCHOLAR_CATEGORIES,
  researchers,
  stewards,
  type ScholarCategory,
  type ScholarPerson,
} from "@/lib/scholarsData";
import { getScholarsHiddenWord } from "@/lib/door-content";
import { StewardAvatar } from "./StewardAvatar";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { cn } from "@/lib/utils";

const SCHOLARS_HW = getScholarsHiddenWord();

const pageCopy = {
  en: {
    eyebrow: "Scholars & Stewards",
    title: "A clergy-free circle of learning",
    lead: "In the Bahá’í spirit there is no priesthood—nine Temple Stewards care for this Virtual Sanctuary, while researchers and educators share knowledge in humble service.",
    citation: `Bahá’u’lláh, The Hidden Words (Persian), №${SCHOLARS_HW.number}`,
    stewards: "The Nine Temple Stewards",
    stewardsFaHint: "Nine caretakers of the Virtual Temple",
    viewBio: "View Full Bio",
    seat: "Steward Seat Available",
    researchers: "Contributing Scholars & Researchers",
    articles: "{n} reflections",
  },
  sv: {
    eyebrow: "Forskare & förvaltare",
    title: "En cirkel av lärande utan prästerskap",
    lead: "I bahá’í-andan finns ingen prästerskap — nio tempelförvaltare vårdar denna virtuella helgedom, medan forskare och pedagoger delar kunskap i ödmjuk tjänst.",
    citation: `Bahá’u’lláh, The Hidden Words (Persian), №${SCHOLARS_HW.number}`,
    stewards: "De nio tempelförvaltarna",
    stewardsFaHint: "Nio vårdare av det virtuella templet",
    viewBio: "Läs hela biografin",
    seat: "Förvaltarsäte ledigt",
    researchers: "Bidragande forskare & tänkare",
    articles: "{n} texter",
  },
  fa: {
    eyebrow: "پژوهشگران و امینان",
    title: "حلقه‌ای از دانایی بدون روحانیون",
    lead: "در آیین بهائی طبقهٔ روحانیون نیست—نُه امین معبد از این حرمگاه مجازی مراقبت می‌کنند و پژوهشگران و مربیان دانش را با تواضع خدمت می‌کنند.",
    citation: `حضرت بهاءالله، کلمات مکنونهٔ فارسی، شمارهٔ ${SCHOLARS_HW.number}`,
    stewards: "نُه امین معبد",
    stewardsFaHint: "نگاهبانان معبد مجازی",
    viewBio: "مشاهده بیوگرافی",
    seat: "جایگاه امین معبد",
    researchers: "پژوهشگران و اندیشمندان",
    articles: "{n} جستار",
  },
} as const;

function Portrait({ person, size = 120 }: { person: ScholarPerson; size?: number }) {
  if (person.portrait) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-full",
          (person.founder || person.isFeatured) &&
            "ring-2 ring-amber-400/50 ring-offset-2 ring-offset-[#060918]"
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src={person.portrait}
          alt={person.name.en}
          fill
          className="object-cover object-top"
          sizes={`${size}px`}
          priority={Boolean(person.founder || person.isFeatured)}
        />
      </div>
    );
  }
  return (
    <StewardAvatar
      hue={person.avatarHue}
      seat={person.stewardSeat}
      size={size}
    />
  );
}

export function ScholarsDirectory() {
  const { locale } = useLocale();
  const isFa = locale === "fa";
  const t = pageCopy[locale];
  const [cat, setCat] = useState<ScholarCategory | "all">("all");

  const filtered = useMemo(() => {
    if (cat === "all") return researchers;
    return researchers.filter((r) => r.categories.includes(cat));
  }, [cat]);

  return (
    <div className="min-h-[100svh] bg-[#060918] text-alabaster">
      {/* Cosmic header */}
      <section className="relative overflow-hidden border-b border-amber-400/15 pt-28 pb-16 md:pt-32 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 20% 30%, rgba(197,160,89,0.55) 0%, transparent 100%), radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.35) 0%, transparent 100%), radial-gradient(1.2px 1.2px at 40% 70%, rgba(197,160,89,0.35) 0%, transparent 100%), radial-gradient(1px 1px at 85% 60%, rgba(255,255,255,0.25) 0%, transparent 100%), radial-gradient(ellipse at 50% 0%, rgba(26,39,68,0.9) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">
          <NinePointedStar size={44} animated={false} className="mx-auto text-gold/80" />
          <p className="mt-5 font-sans text-[11px] uppercase tracking-[0.35em] text-gold">
            {t.eyebrow}
          </p>

          {/* Hidden Word first — service, education, fruit for others */}
          <blockquote
            className={cn(
              "mx-auto mt-8 max-w-3xl border border-amber-400/25 bg-slate-900/55 px-6 py-7 backdrop-blur-sm md:px-10 md:py-8",
              isFa && "text-right"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            <p
              className={cn(
                "text-alabaster/95",
                isFa
                  ? "prose-fa text-lg font-medium leading-relaxed md:text-xl"
                  : "font-display text-lg leading-relaxed md:text-xl"
              )}
            >
              “{isFa ? SCHOLARS_HW.fa : SCHOLARS_HW.en}”
            </p>
            <cite
              className={cn(
                "mt-5 block not-italic text-gold/85",
                isFa ? "prose-fa text-sm" : "font-sans text-sm"
              )}
            >
              — {t.citation}
            </cite>
          </blockquote>

          <h1
            className={cn(
              "mt-10 font-display text-3xl text-alabaster md:text-5xl",
              isFa && "prose-fa"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.title}
          </h1>
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base",
              isFa ? "prose-fa" : "font-sans"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.lead}
          </p>
        </div>
      </section>

      {/* Nine Stewards */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="mb-8 text-center" dir={isFa ? "rtl" : "ltr"}>
          <h2
            className={cn(
              "font-display text-2xl text-alabaster md:text-3xl",
              isFa && "prose-fa"
            )}
          >
            {t.stewards}
          </h2>
          <p className="mt-2 font-sans text-xs uppercase tracking-[0.22em] text-gold/80">
            {t.stewardsFaHint}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {stewards.map((person, i) => (
            <StewardCard
              key={person.slug}
              person={person}
              locale={locale}
              viewBio={t.viewBio}
              seatLabel={t.seat}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Researchers */}
      <section className="border-t border-amber-400/15 bg-slate-950/40 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2
            className={cn(
              "text-center font-display text-2xl text-alabaster md:text-3xl",
              isFa && "prose-fa"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.researchers}
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {SCHOLAR_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCat(c.id)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 font-sans text-[11px] uppercase tracking-[0.14em] transition",
                  cat === c.id
                    ? "bg-amber-400/20 text-amber-100 ring-1 ring-amber-400/45"
                    : "text-white/50 hover:text-amber-100/90"
                )}
              >
                {c.label[locale]}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {filtered.map((person, i) => (
              <ResearcherCard
                key={person.slug}
                person={person}
                locale={locale}
                articlesLabel={t.articles}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function StewardCard({
  person,
  locale,
  viewBio,
  seatLabel,
  index,
}: {
  person: ScholarPerson;
  locale: "en" | "sv" | "fa";
  viewBio: string;
  seatLabel: string;
  index: number;
}) {
  const isFa = locale === "fa";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
    >
      <Link
        href={`/scholars/${person.slug}`}
        className={cn(
          "group flex h-full flex-col items-center rounded-2xl border bg-slate-900/50 p-6 text-center backdrop-blur-md transition hover:border-amber-400/40",
          person.isFeatured || person.founder
            ? "border-amber-400/60 shadow-[0_0_30px_rgba(197,160,89,0.2)]"
            : "border-amber-400/15"
        )}
      >
        <Portrait person={person} size={112} />
        {person.badge && (
          <span className="mt-4 inline-block rounded-full border border-amber-400/40 bg-amber-500/10 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-[0.16em] text-amber-200/95">
            {person.badge[locale]}
          </span>
        )}
        {person.pressBadge && (
          <span
            className={cn(
              "mt-2 max-w-[16rem] text-[10px] leading-snug text-amber-200/70",
              isFa ? "prose-fa" : "font-sans"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {person.pressBadge[locale]}
          </span>
        )}
        <h3
          className={cn(
            "mt-3 font-display text-xl text-alabaster",
            isFa && "prose-fa"
          )}
          dir={isFa ? "rtl" : "ltr"}
        >
          {person.name[locale]}
        </h3>
        <p
          className={cn(
            "mt-2 line-clamp-2 text-xs leading-relaxed text-white/55",
            isFa ? "prose-fa" : "font-sans"
          )}
          dir={isFa ? "rtl" : "ltr"}
        >
          {person.role[locale]}
        </p>
        {!person.active && (
          <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.18em] text-gold/70">
            {seatLabel}
          </p>
        )}
        <span className="mt-4 font-sans text-[10px] uppercase tracking-[0.2em] text-gold opacity-0 transition group-hover:opacity-100">
          {viewBio} →
        </span>
      </Link>
    </motion.div>
  );
}

function ResearcherCard({
  person,
  locale,
  articlesLabel,
  index,
}: {
  person: ScholarPerson;
  locale: "en" | "sv" | "fa";
  articlesLabel: string;
  index: number;
}) {
  const isFa = locale === "fa";
  const count = person.articles?.length ?? 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        href={`/scholars/${person.slug}`}
        className="group flex h-full gap-4 rounded-2xl border border-amber-400/20 bg-slate-900/50 p-4 backdrop-blur-md transition hover:border-amber-400/40 md:p-5"
      >
        <Portrait person={person} size={72} />
        <div className="min-w-0 flex-1 text-start" dir={isFa ? "rtl" : "ltr"}>
          <h3
            className={cn(
              "font-display text-lg text-alabaster",
              isFa && "prose-fa"
            )}
          >
            {person.name[locale]}
          </h3>
          <p className="mt-0.5 font-sans text-[11px] text-gold/85">
            {person.role[locale]}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {person.focus[locale].slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2 py-0.5 font-sans text-[9px] text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <p
            className={cn(
              "mt-2 line-clamp-2 text-xs leading-relaxed text-white/50",
              isFa ? "prose-fa" : "font-sans"
            )}
          >
            {person.bioShort[locale]}
          </p>
          <p className="mt-2 font-sans text-[10px] text-amber-200/60">
            {articlesLabel.replace("{n}", String(count))}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
