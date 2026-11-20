"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGrid, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  getDailyHiddenWordIndex,
  getHiddenWord,
  HIDDEN_WORDS,
  HIDDEN_WORDS_PREFACE,
  type HiddenWord,
} from "@/lib/hidden-words";
import { cn } from "@/lib/utils";

type ReflectionItem = {
  id: string;
  name: string;
  content: string;
  wordNumber: number;
  locale: string;
  createdAt: string;
};

function textFor(word: HiddenWord, locale: "en" | "sv" | "fa") {
  if (locale === "fa") return word.fa;
  if (locale === "sv") return word.sv;
  return word.en;
}

export function DailyQuote() {
  const { locale, t, dir } = useLocale();
  const dailyIndex = useMemo(() => getDailyHiddenWordIndex(), []);
  const [index, setIndex] = useState(dailyIndex);
  const [reflecting, setReflecting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [recent, setRecent] = useState<ReflectionItem[]>([]);

  const word = getHiddenWord(index);
  const body = textFor(word, locale);
  const isDaily = index === dailyIndex;

  const loadRecent = useCallback(async () => {
    try {
      const res = await fetch("/api/reflections");
      const data = (await res.json()) as { items?: ReflectionItem[] };
      setRecent(data.items ?? []);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    void loadRecent();
  }, [loadRecent]);

  const go = (delta: number) => {
    setIndex((i) => (i + delta + HIDDEN_WORDS.length) % HIDDEN_WORDS.length);
    setReflecting(false);
    setStatus("idle");
  };

  const submit = async () => {
    if (!name.trim() || !note.trim() || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/reflections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          content: note.trim(),
          wordNumber: word.number,
          locale,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setNote("");
      setStatus("sent");
      void loadRecent();
    } catch {
      setStatus("error");
    }
  };

  const PrevIcon = dir === "rtl" ? ChevronRight : ChevronLeft;
  const NextIcon = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <section className="relative bg-indigo px-5 py-24 text-alabaster md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40 dome-glow" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold/80">
          {t.quote.heading}
        </p>
        <p className="mt-3 font-display text-sm text-alabaster/50">
          {HIDDEN_WORDS_PREFACE[locale === "fa" ? "fa" : locale === "sv" ? "sv" : "en"]}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={word.number}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-8 font-sans text-[11px] tracking-[0.2em] text-gold/70">
              {t.quote.persian} · {word.number} / {HIDDEN_WORDS.length}
              {isDaily ? ` · ${t.quote.today}` : ""}
            </p>
            <blockquote
              className={cn(
                "mt-5 text-alabaster",
                locale === "fa"
                  ? "prose-fa text-right text-xl font-medium md:text-[1.65rem]"
                  : "font-display text-xl leading-relaxed md:text-2xl md:leading-relaxed"
              )}
              dir={locale === "fa" ? "rtl" : "ltr"}
              lang={locale === "fa" ? "fa" : "en"}
            >
              {body}
            </blockquote>
          </motion.div>
        </AnimatePresence>

        <cite className="mt-8 block font-sans text-sm not-italic tracking-wide text-gold/75">
          — {t.quote.author}, {t.quote.source}
        </cite>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex items-center gap-1 border border-gold/30 px-4 py-2 font-sans text-xs tracking-wide text-gold transition hover:border-gold/60"
            aria-label={t.quote.prev}
          >
            <PrevIcon size={16} />
            {t.quote.prev}
          </button>
          <button
            type="button"
            onClick={() => setIndex(dailyIndex)}
            className={cn(
              "px-4 py-2 font-sans text-xs tracking-wide transition",
              isDaily
                ? "bg-gold/20 text-gold"
                : "border border-alabaster/20 text-alabaster/70 hover:border-gold/40 hover:text-gold"
            )}
          >
            {t.quote.today}
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex items-center gap-1 border border-gold/30 px-4 py-2 font-sans text-xs tracking-wide text-gold transition hover:border-gold/60"
            aria-label={t.quote.next}
          >
            {t.quote.next}
            <NextIcon size={16} />
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 font-sans text-sm tracking-wide text-alabaster/70 transition hover:text-gold"
          >
            <LayoutGrid size={14} />
            {t.quote.viewAll}
          </button>
          <button
            type="button"
            onClick={() => setReflecting((v) => !v)}
            className="border-b border-gold/40 pb-0.5 font-sans text-sm tracking-wide text-gold transition hover:border-gold"
          >
            {reflecting ? t.quote.reflecting : t.quote.reflect}
          </button>
        </div>

        <AnimatePresence>
          {reflecting && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
              dir={locale === "fa" ? "rtl" : "ltr"}
            >
              <p className="mx-auto mt-8 max-w-md font-sans text-base leading-relaxed text-alabaster/70">
                {t.quote.prompt}
              </p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.quote.namePh}
                className={cn(
                  "mt-6 w-full border border-gold/20 bg-alabaster/5 px-4 py-3 text-sm text-alabaster placeholder:text-alabaster/35 focus:border-gold/50 focus:outline-none",
                  locale === "fa" ? "prose-fa text-right" : "font-sans"
                )}
              />
              <textarea
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className={cn(
                  "mt-3 w-full resize-none border border-gold/20 bg-alabaster/5 px-4 py-3 text-sm text-alabaster placeholder:text-alabaster/35 focus:border-gold/50 focus:outline-none",
                  locale === "fa" ? "prose-fa text-right" : "font-sans"
                )}
                placeholder="..."
              />
              <button
                type="button"
                onClick={() => void submit()}
                disabled={!name.trim() || !note.trim() || status === "sending"}
                className="mt-4 border border-gold/40 bg-gold/15 px-5 py-2.5 font-sans text-xs uppercase tracking-wider text-gold transition hover:bg-gold/25 disabled:opacity-40"
              >
                {status === "sending" ? t.quote.sending : t.quote.send}
              </button>
              {status === "sent" && (
                <p className="mt-3 font-sans text-sm text-gold/80">{t.quote.sent}</p>
              )}
              {status === "error" && (
                <p className="mt-3 font-sans text-sm text-red-300/90">
                  {t.quote.sendError}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {recent.length > 0 && (
          <div className="mt-14 border-t border-gold/15 pt-10 text-start" dir={locale === "fa" ? "rtl" : "ltr"}>
            <p className="text-center font-sans text-xs uppercase tracking-[0.24em] text-gold/70">
              {t.quote.recent}
            </p>
            <ul className="mt-6 space-y-4">
              {recent.slice(0, 6).map((r) => (
                <li
                  key={r.id}
                  className="border border-gold/10 bg-alabaster/[0.03] px-4 py-3"
                >
                  <p className="font-sans text-[11px] tracking-wide text-gold/75">
                    {r.name}
                    <span className="text-alabaster/35"> · #{r.wordNumber}</span>
                  </p>
                  <p
                    className={cn(
                      "mt-1.5 text-sm leading-relaxed text-alabaster/75",
                      r.locale === "fa" ? "prose-fa" : "font-sans"
                    )}
                  >
                    {r.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showAll && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-indigo/90 p-4 backdrop-blur-sm md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAll(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex max-h-[88vh] w-full max-w-3xl flex-col border border-gold/20 bg-indigo"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gold/15 px-5 py-4">
                <div>
                  <p className="font-display text-xl text-alabaster">
                    {t.quote.viewAll}
                  </p>
                  <p className="font-sans text-xs text-alabaster/50">
                    {HIDDEN_WORDS.length} · {t.quote.source}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAll(false)}
                  className="text-alabaster/70 hover:text-gold"
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
              </div>
              <ul className="flex-1 space-y-1 overflow-y-auto px-3 py-3">
                {HIDDEN_WORDS.map((w, i) => (
                  <li key={w.number}>
                    <button
                      type="button"
                      onClick={() => {
                        setIndex(i);
                        setShowAll(false);
                        setReflecting(false);
                      }}
                      className={cn(
                        "w-full border-b border-gold/10 px-3 py-4 text-start transition hover:bg-alabaster/5",
                        i === index && "bg-gold/10"
                      )}
                    >
                      <span className="font-sans text-[10px] tracking-widest text-gold">
                        {w.number}
                        {i === dailyIndex ? ` · ${t.quote.today}` : ""}
                      </span>
                      <span
                        className={cn(
                          "mt-1 line-clamp-2 block text-sm text-alabaster/85",
                          locale === "fa"
                            ? "prose-fa text-right"
                            : "font-display"
                        )}
                        dir={locale === "fa" ? "rtl" : "ltr"}
                      >
                        {textFor(w, locale)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
