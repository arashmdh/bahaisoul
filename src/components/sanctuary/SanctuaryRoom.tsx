"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, UserRound } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  PRAYER_CATEGORIES,
  detectCategoryFromText,
  getPrayerById,
  pickPrayer,
  type PrayerCategory,
  type SanctuaryPrayer,
} from "@/lib/sanctuary/sanctuaryPrayers";
import {
  CANDLE_TTL_MS,
  clearSession,
  formatCountdown,
  loadSession,
  saveSession,
  type SanctuarySession,
} from "@/lib/sanctuary/session";
import { useSoundPreference } from "@/components/providers/SoundProvider";
import { useTempleAmbiance } from "@/hooks/useTempleAmbiance";
import { SanctuaryFX } from "./SanctuaryFX";
import { IncenseSmokeCanvas } from "./IncenseSmokeCanvas";
import { PrayerModal } from "./PrayerModal";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    intention: "Prayer Intention",
    light: "Light a Candle",
    lightBtn: "Light a Candle",
    burning: "Your candle is burning in the Sanctuary",
    extinguish: "Extinguish / Reset",
    blessing: "Sacred Blessing",
    blessingEmpty:
      "Light a candle to receive a matching Bahá'í prayer for your intention.",
    readFull: "Read Full Prayer",
    readAnother: "Read Another Prayer",
    placeholder:
      "Write your prayer intention or spiritual wish for the world or a loved one…",
    namePh: "Name (optional)",
    anonymous: "Anonymous",
    named: "Named",
    litToast: "The candle is lit — may this light endure.",
  },
  sv: {
    intention: "Böneavsikt",
    light: "Tänd ett ljus",
    lightBtn: "Tänd ett ljus",
    burning: "Ditt ljus brinner i Helgedomen",
    extinguish: "Släck / Återställ",
    blessing: "Helig välsignelse",
    blessingEmpty:
      "Tänd ett ljus för att ta emot en matchande bahá'íbön för din avsikt.",
    readFull: "Läs hela bönen",
    readAnother: "Läs en annan bön",
    placeholder:
      "Skriv din böneavsikt eller andliga önskan för världen eller en älskad…",
    namePh: "Namn (valfritt)",
    anonymous: "Anonym",
    named: "Namngiven",
    litToast: "Ljuset är tänt — må detta ljus bestå.",
  },
  fa: {
    intention: "نیت دعا و نیایش",
    light: "روشن کردن شمع",
    lightBtn: "افروختن شمع",
    burning: "شمع شما در حرم روشن است",
    extinguish: "خاموش کردن / آغاز دوباره",
    blessing: "دعای خیر و مناجات",
    blessingEmpty:
      "شمع را بیافروزید تا دعایی از آثار بهائی متناسب با نیت شما پدیدار شود.",
    readFull: "مطالعه کامل",
    readAnother: "مناجات دیگر",
    placeholder: "«نیت قلبی یا دعای خود را برای عزیزان یا عالم انسانی بنویسید...»",
    namePh: "نام (اختیاری)",
    anonymous: "ناشناس",
    named: "با نام",
    litToast: "شمع افروخته شد — باشد که این نور بماند.",
  },
} as const;

const glass =
  "rounded-2xl border border-amber-400/25 bg-slate-950/55 p-3.5 shadow-2xl backdrop-blur-md sm:bg-slate-950/45 sm:p-4 md:p-5";

export function SanctuaryRoom() {
  const { locale } = useLocale();
  const isFa = locale === "fa";
  const t = copy[locale];
  const { setEnabled: setSoundEnabled } = useSoundPreference();

  const [ready, setReady] = useState(false);
  const [session, setSession] = useState<SanctuarySession | null>(null);
  const [prayer, setPrayer] = useState<SanctuaryPrayer | null>(null);
  const [category, setCategory] = useState<PrayerCategory>("healing");
  const [intention, setIntention] = useState("");
  const [name, setName] = useState("");
  const [anonymous, setAnonymous] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  const isLit = Boolean(session && session.expiresAt > now);
  useTempleAmbiance(isLit);

  const resetToDefault = useCallback(() => {
    clearSession();
    setSession(null);
    setPrayer(null);
    setModalOpen(false);
    setCategory("healing");
    setIntention("");
    setName("");
    setAnonymous(true);
  }, []);

  useEffect(() => {
    const s = loadSession();
    if (s) {
      setSession(s);
      setCategory(s.category);
      setIntention(s.intention);
      setAnonymous(s.anonymous);
      setName(s.name ?? "");
      const existing = s.prayerId ? getPrayerById(s.prayerId) : undefined;
      if (existing) {
        setPrayer(existing);
      } else {
        const picked = pickPrayer(s.category);
        setPrayer(picked);
        const patched = { ...s, prayerId: picked.id };
        setSession(patched);
        saveSession(patched);
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      const n = Date.now();
      setNow(n);
      setSession((prev) => {
        if (prev && prev.expiresAt <= n) {
          clearSession();
          setPrayer(null);
          setModalOpen(false);
          setCategory("healing");
          setIntention("");
          setName("");
          setAnonymous(true);
          return null;
        }
        return prev;
      });
    }, 500);
    return () => window.clearInterval(id);
  }, []);

  const playChime = useCallback(() => {
    try {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(392, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(523.25, ctx.currentTime + 0.35);
      gain.gain.value = 0.0001;
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.1);
      osc.start();
      osc.stop(ctx.currentTime + 1.15);
    } catch {
      /* ignore */
    }
  }, []);

  const ignite = useCallback(() => {
    const text = intention.trim();
    if (!text) return;
    const matched = detectCategoryFromText(text, category);
    const picked = pickPrayer(matched);
    const createdAt = Date.now();
    const next: SanctuarySession = {
      isLit: true,
      createdAt,
      expiresAt: createdAt + CANDLE_TTL_MS,
      intention: text,
      category: matched,
      prayerId: picked.id,
      name: anonymous ? null : name.trim() || null,
      anonymous,
    };
    setCategory(matched);
    setPrayer(picked);
    setSession(next);
    saveSession(next);
    setSoundEnabled(true);
    playChime();
    setToast(true);
    window.setTimeout(() => setToast(false), 3200);
  }, [anonymous, category, intention, name, playChime, setSoundEnabled]);

  const anotherPrayer = useCallback(() => {
    if (!session) return;
    const picked = pickPrayer(session.category, session.prayerId);
    const next = { ...session, prayerId: picked.id };
    setPrayer(picked);
    setSession(next);
    saveSession(next);
  }, [session]);

  if (!ready) {
    return (
      <div className="relative min-h-[100svh] bg-[#050814]">
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#050814]">
          <div className="relative h-full min-h-[56.25vw] w-full min-w-[177.78vh]">
            <Image
              src="/images/sanctuary-unlit.jpg"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    );
  }

  const secondaryLocale = locale === "fa" ? "en" : "fa";

  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      {/* 16:9 locked stage — images + smoke + flame share one coordinate space */}
      <div className="fixed inset-0 -z-10 flex items-center justify-center overflow-hidden bg-[#050814]">
        <div className="relative h-full min-h-[56.25vw] w-full min-w-[177.78vh]">
          <Image
            src="/images/sanctuary-unlit.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <AnimatePresence>
            {isLit && (
              <motion.div
                key="lit"
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              >
                <Image
                  src="/images/sanctuary-lit.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
          <IncenseSmokeCanvas isLit={isLit} />
          {isLit && <SanctuaryFX />}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/40" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-3 pb-6 pt-20 sm:px-4 sm:pb-8 sm:pt-24 md:px-6 md:pt-28">
        <div className="grid max-h-[none] grid-cols-1 items-start gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {/* Panel 1 — Intention */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={glass}
            dir={isFa ? "rtl" : "ltr"}
          >
            <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-amber-100/95 md:text-xs">
              {t.intention}
            </h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {PRAYER_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategory(c.id)}
                  disabled={isLit}
                  className={cn(
                    "rounded-full px-2.5 py-1 font-sans text-[10px] transition md:text-[11px]",
                    category === c.id
                      ? "bg-amber-400/25 text-amber-50 ring-1 ring-amber-300/50"
                      : "bg-white/5 text-white/55 hover:bg-white/10",
                    isLit && "opacity-70"
                  )}
                >
                  {c[locale]}
                </button>
              ))}
            </div>
            <textarea
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              rows={4}
              disabled={isLit}
              placeholder={t.placeholder}
              className={cn(
                "mt-3 w-full resize-none rounded-xl border border-white/10 bg-black/25 px-3 py-2.5 text-[13px] leading-relaxed text-white/90 outline-none placeholder:text-white/35 focus:border-amber-300/40 disabled:opacity-70",
                isFa ? "prose-fa" : "font-sans"
              )}
            />
            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                disabled={isLit}
                onClick={() => setAnonymous((v) => !v)}
                className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2.5 py-1 font-sans text-[10px] text-white/65 disabled:opacity-60"
              >
                <UserRound size={11} />
                {anonymous ? t.anonymous : t.named}
              </button>
              {!anonymous && (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLit}
                  placeholder={t.namePh}
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/25 px-2.5 py-1 font-sans text-[12px] text-white outline-none focus:border-amber-300/35 disabled:opacity-60"
                />
              )}
            </div>
          </motion.section>

          {/* Panel 2 — Ignite */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className={cn(glass, "ring-1 ring-amber-400/20")}
            dir={isFa ? "rtl" : "ltr"}
          >
            <div className="flex flex-col items-center text-center">
              <Flame
                size={30}
                strokeWidth={1.35}
                className={cn(
                  "text-amber-200 transition",
                  isLit && "drop-shadow-[0_0_16px_rgba(251,191,36,0.85)]"
                )}
              />
              <h2 className="mt-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-amber-50 md:text-xs">
                {t.light}
              </h2>

              <AnimatePresence mode="wait">
                {!isLit ? (
                  <motion.button
                    key="ignite"
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={ignite}
                    disabled={!intention.trim()}
                    className="candle-shimmer mt-6 w-full rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-slate-950 transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    {t.lightBtn}
                  </motion.button>
                ) : (
                  <motion.div
                    key="burning"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 w-full"
                  >
                    <p
                      className={cn(
                        "text-[13px] leading-relaxed text-amber-50/90",
                        isFa ? "prose-fa" : "font-sans"
                      )}
                    >
                      {t.burning}
                    </p>
                    <p className="mt-2 font-sans text-sm tracking-wide text-amber-300">
                      {session
                        ? formatCountdown(
                            session.expiresAt,
                            now,
                            locale === "sv" ? "sv" : locale === "fa" ? "fa" : "en"
                          )
                        : ""}
                    </p>
                    <button
                      type="button"
                      onClick={resetToDefault}
                      className="mt-5 w-full rounded-xl border border-white/20 px-4 py-2.5 font-sans text-[11px] uppercase tracking-wider text-white/70 transition hover:border-amber-300/40 hover:text-amber-100"
                    >
                      {t.extinguish}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>

          {/* Panel 3 — Blessing */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className={glass}
            dir={isFa ? "rtl" : "ltr"}
          >
            <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-amber-100/95 md:text-xs">
              {t.blessing}
            </h2>
            <AnimatePresence mode="wait">
              {!prayer || !isLit ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={cn(
                    "mt-4 text-[13px] leading-relaxed text-white/55",
                    isFa ? "prose-fa" : "font-sans"
                  )}
                >
                  {t.blessingEmpty}
                </motion.p>
              ) : (
                <motion.div
                  key={prayer.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55 }}
                  className="mt-4 space-y-3"
                >
                  <p
                    className={cn(
                      "line-clamp-4 text-[13px] text-amber-50/95",
                      locale === "fa"
                        ? "prose-fa leading-[1.95]"
                        : "font-sans leading-relaxed"
                    )}
                    dir={locale === "fa" ? "rtl" : "ltr"}
                    lang={locale}
                  >
                    {prayer[locale]}
                  </p>
                  <p
                    className={cn(
                      "line-clamp-3 text-[12px] text-white/70",
                      secondaryLocale === "fa"
                        ? "prose-fa leading-[1.9]"
                        : "font-sans leading-relaxed"
                    )}
                    dir={secondaryLocale === "fa" ? "rtl" : "ltr"}
                    lang={secondaryLocale}
                  >
                    {prayer[secondaryLocale]}
                  </p>
                  <p className="font-sans text-[10px] text-amber-400/75">
                    {prayer.attribution[locale]}
                  </p>
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="mt-1 w-full rounded-xl border border-amber-400/35 bg-amber-500/10 px-3 py-2 font-sans text-[11px] uppercase tracking-wider text-amber-100 transition hover:bg-amber-500/20"
                  >
                    {t.readFull}
                  </button>
                  <button
                    type="button"
                    onClick={anotherPrayer}
                    className="w-full rounded-xl border border-white/15 px-3 py-2 font-sans text-[11px] uppercase tracking-wider text-white/70 transition hover:border-amber-300/35 hover:text-amber-100"
                  >
                    {t.readAnother}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </div>

        <div
          className="min-h-[38svh] sm:min-h-[48svh] md:min-h-[58svh]"
          aria-hidden
        />
      </div>

      {prayer && isLit && (
        <PrayerModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          prayer={prayer}
          locale={locale}
          title={t.blessing}
        />
      )}

      <AnimatePresence>
        {toast && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-amber-400/40 bg-slate-950/85 px-5 py-2 font-sans text-sm text-amber-100 shadow-lg backdrop-blur-md"
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.litToast}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
