"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { DOORS } from "@/lib/doors";
import { getDailyHiddenWordIndex, getHiddenWord } from "@/lib/hidden-words";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const copy = {
  en: {
    eyebrow: "Your path",
    title: "Dashboard",
    lead: "A quiet desk for your journey through Bahá’í Soul — readings, prayer, study, and the tools that grow with you.",
    wordHeading: "Today’s Hidden Word",
    wordCite: "The Hidden Words (Persian)",
    toolsHeading: "Your temple tools",
    tools: [
      {
        title: "Private journal",
        body: "Quiet reflections tied to readings across the Nine Doors. Notes stay with your account.",
        status: "After sign-in",
      },
      {
        title: "Bookmarked writings",
        body: "Sacred passages and door articles you set aside for return visits.",
        status: "After sign-in",
      },
      {
        title: "Door progress",
        body: "See which thematic pillars you have entered and where you may wish to go deeper.",
        status: "After sign-in",
      },
      {
        title: "Scholar studio",
        body: "A calm writing space with citation blocks — for verified Scholars and Stewards.",
        status: "By invitation",
      },
    ],
    pathsHeading: "Continue walking",
    paths: [
      {
        href: "/sanctuary",
        title: "Sanctuary",
        body: "Light a candle, choose a prayer, and sit in living remembrance.",
      },
      {
        href: "/#doors",
        title: "Nine Doors",
        body: "Enter the unseen worlds, Seven Valleys, sacred arts, and living unity.",
      },
      {
        href: "/scholars",
        title: "Scholars & Stewards",
        body: "Meet caretakers and researchers serving without clergy.",
      },
      {
        href: "/gallery",
        title: "Temple gallery",
        body: "Visit Houses of Worship around the world in stillness.",
      },
      {
        href: "/history",
        title: "Sacred history",
        body: "Walk the chronicle of the Faith from the Báb to this day.",
      },
      {
        href: "/about",
        title: "About the Temple",
        body: "Read the manifesto of this digital Mashriqu’l-Adhkár.",
      },
    ],
    doorsHeading: "The Nine Doors at a glance",
    signIn: "Sign in to continue",
    signInHint:
      "Enter as a Seeker. Scholar access is granted by Temple Stewards.",
    guestNote:
      "You can explore every public door freely. Sign in when you wish to keep a journal and bookmarks.",
  },
  sv: {
    eyebrow: "Din väg",
    title: "Översikt",
    lead: "Ett stilla skrivbord för din vandring genom Bahá’í Soul — läsning, bön, studier och verktyg som växer med dig.",
    wordHeading: "Dagens Dolda Ord",
    wordCite: "The Hidden Words (persiska)",
    toolsHeading: "Dina tempelverktyg",
    tools: [
      {
        title: "Privat dagbok",
        body: "Tysta reflektioner kopplade till läsning genom de nio dörrarna. Anteckningar sparas i ditt konto.",
        status: "Efter inloggning",
      },
      {
        title: "Bokmärkta skrifter",
        body: "Heliga passager och dörrartiklar du sparar för återbesök.",
        status: "Efter inloggning",
      },
      {
        title: "Dörrframsteg",
        body: "Se vilka tematiska pelare du har gått in i och var du kan fördjupa dig.",
        status: "Efter inloggning",
      },
      {
        title: "Forskarstudio",
        body: "En lugn skrivyta med citatblock — för verifierade forskare och förvaltare.",
        status: "På inbjudan",
      },
    ],
    pathsHeading: "Fortsätt vandringen",
    paths: [
      {
        href: "/sanctuary",
        title: "Helgedom",
        body: "Tänd ett ljus, välj en bön och sitt i levande åminnelse.",
      },
      {
        href: "/#doors",
        title: "Nio dörrar",
        body: "Gå in i de osynliga världarna, de sju dalarna, sakral konst och levande enhet.",
      },
      {
        href: "/scholars",
        title: "Forskare & förvaltare",
        body: "Möt vårdare och forskare som tjänar utan prästerskap.",
      },
      {
        href: "/gallery",
        title: "Tempellgalleri",
        body: "Besök tillbedjanshus världen över i stillhet.",
      },
      {
        href: "/history",
        title: "Helig historia",
        body: "Följ trons krönika från Báben till vår tid.",
      },
      {
        href: "/about",
        title: "Om templet",
        body: "Läs manifestet för detta digitala Mashriqu’l-Adhkár.",
      },
    ],
    doorsHeading: "De nio dörrarna i korthet",
    signIn: "Logga in för att fortsätta",
    signInHint:
      "Stig in som sökare. Forskaråtkomst beviljas av tempelförvaltare.",
    guestNote:
      "Du kan fritt utforska varje publik dörr. Logga in när du vill spara dagbok och bokmärken.",
  },
  fa: {
    eyebrow: "مسیر شما",
    title: "پیشخوان",
    lead: "میز آرامی برای سفر شما در روح بهائی — مطالعه، دعا، پژوهش و ابزارهایی که همراه شما رشد می‌کنند.",
    wordHeading: "کلام مکنونۀ امروز",
    wordCite: "کلمات مکنونۀ فارسی",
    toolsHeading: "ابزارهای معبد شما",
    tools: [
      {
        title: "دفتر تأمل خصوصی",
        body: "یادداشت‌های آرام پیوندخورده با خوانش‌های نُه در. تأمل‌ها در حساب شما می‌مانند.",
        status: "پس از ورود",
      },
      {
        title: "آثار نشان‌شده",
        body: "آیات و مقالات درها که برای بازگشت کنار گذاشته‌اید.",
        status: "پس از ورود",
      },
      {
        title: "پیشرفت درها",
        body: "ببینید کدام ارکان موضوعی را گشوده‌اید و کجا می‌توانید ژرف‌تر بروید.",
        status: "پس از ورود",
      },
      {
        title: "استودیوی پژوهش",
        body: "فضایی آرام برای نوشتن با بلوک‌های استناد — ویژهٔ پژوهشگران و امینان تأییدشده.",
        status: "با دعوت",
      },
    ],
    pathsHeading: "ادامهٔ مسیر",
    paths: [
      {
        href: "/sanctuary",
        title: "حرم",
        body: "شمعی بیفروزید، دعایی برگزینید و در ذکر زنده بنشینید.",
      },
      {
        href: "/#doors",
        title: "نُه در",
        body: "وارد عوالم غیب، هفت وادی، هنر قدسی و وحدت زنده شوید.",
      },
      {
        href: "/scholars",
        title: "پژوهشگران و امینان",
        body: "با نگاهبانان و پژوهشگرانی آشنا شوید که بدون روحانیون خدمت می‌کنند.",
      },
      {
        href: "/gallery",
        title: "گالری معابد",
        body: "مشرق‌الاذکارهای جهان را در سکوت زیارت کنید.",
      },
      {
        href: "/history",
        title: "تاریخ مقدس",
        body: "سیرهٔ آیین را از حضرت باب تا امروز بخوانید.",
      },
      {
        href: "/about",
        title: "دربارهٔ معبد",
        body: "بیانیهٔ این مشرق‌الاذکار مجازی را بخوانید.",
      },
    ],
    doorsHeading: "نُه در در یک نگاه",
    signIn: "برای ادامه وارد شوید",
    signInHint:
      "به‌عنوان جوینده وارد شوید. دسترسی پژوهشی را امینان معبد می‌بخشند.",
    guestNote:
      "همهٔ درهای عمومی آزادند. هرگاه خواستید دفتر تأمل و نشان‌ها داشته باشید، وارد شوید.",
  },
} as const;

export function DashboardView() {
  const { locale } = useLocale();
  const isFa = locale === "fa";
  const t = copy[locale];
  const lang = isFa ? "fa" : "en";
  const word = getHiddenWord(getDailyHiddenWordIndex());
  const wordText = isFa ? word.fa : word.en;

  return (
    <div
      className="min-h-[100svh]"
      style={{
        background:
          "linear-gradient(180deg, #050814 0%, #0B1126 38%, #FAF8F5 38%)",
      }}
    >
      <section className="relative overflow-hidden px-5 pb-14 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 dome-glow opacity-45" />
        <div className="relative mx-auto max-w-4xl text-center">
          <NinePointedStar size={48} className="mx-auto text-gold" />
          <p className="mt-5 font-sans text-[11px] uppercase tracking-[0.32em] text-gold/80">
            {t.eyebrow}
          </p>
          <h1
            className={cn(
              "mt-3 font-display text-3xl text-alabaster md:text-5xl",
              isFa && "prose-fa"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.title}
          </h1>
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-alabaster/65 md:text-base",
              isFa ? "prose-fa" : "font-sans"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.lead}
          </p>
        </div>
      </section>

      <section className="relative bg-alabaster px-5 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Daily word */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className={cn(
              "-mt-8 border border-gold/25 bg-white/80 px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm md:px-9",
              isFa && "text-right"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-deep">
              {t.wordHeading}
            </p>
            <p
              className={cn(
                "mt-4 text-indigo",
                isFa
                  ? "prose-fa text-lg font-medium leading-relaxed md:text-xl"
                  : "font-display text-lg leading-relaxed md:text-xl"
              )}
            >
              “{wordText}”
            </p>
            <cite
              className={cn(
                "mt-4 block not-italic text-gold-deep",
                isFa ? "prose-fa text-sm" : "font-sans text-sm"
              )}
            >
              — {t.wordCite} · №{word.number}
            </cite>
          </motion.blockquote>

          <p
            className={cn(
              "mt-8 text-sm leading-relaxed text-stone",
              isFa ? "prose-fa text-center" : "font-sans text-center"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.guestNote}
          </p>

          {/* Tools */}
          <h2
            className={cn(
              "mt-14 font-display text-2xl text-indigo md:text-3xl",
              isFa && "prose-fa text-center"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.toolsHeading}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {t.tools.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05, ease }}
                className="border-t border-gold/30 pt-5"
                dir={isFa ? "rtl" : "ltr"}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className={cn(
                      "font-display text-xl text-indigo",
                      isFa && "prose-fa"
                    )}
                  >
                    {item.title}
                  </h3>
                  <span className="shrink-0 font-sans text-[10px] uppercase tracking-[0.16em] text-gold-deep/80">
                    {item.status}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed text-stone",
                    isFa ? "prose-fa" : "font-sans"
                  )}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Paths */}
          <h2
            className={cn(
              "mt-16 font-display text-2xl text-indigo md:text-3xl",
              isFa && "prose-fa text-center"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.pathsHeading}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.paths.map((path, i) => (
              <motion.div
                key={path.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04, ease }}
              >
                <Link
                  href={path.href}
                  className={cn(
                    "group flex h-full flex-col border border-gold/20 bg-white/60 p-5 transition hover:border-gold/45",
                    isFa && "text-right"
                  )}
                  dir={isFa ? "rtl" : "ltr"}
                >
                  <h3
                    className={cn(
                      "font-display text-lg text-indigo transition group-hover:text-gold-deep",
                      isFa && "prose-fa"
                    )}
                  >
                    {path.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 flex-1 text-sm leading-relaxed text-stone",
                      isFa ? "prose-fa" : "font-sans"
                    )}
                  >
                    {path.body}
                  </p>
                  <span className="mt-4 font-sans text-[10px] uppercase tracking-[0.18em] text-gold-deep opacity-70 transition group-hover:opacity-100">
                    {isFa ? "گشودن ←" : locale === "sv" ? "Öppna →" : "Open →"}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Doors glance */}
          <h2
            className={cn(
              "mt-16 font-display text-2xl text-indigo md:text-3xl",
              isFa && "prose-fa text-center"
            )}
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.doorsHeading}
          </h2>
          <ul className="mt-6 divide-y divide-gold/20 border-y border-gold/20">
            {DOORS.map((door) => (
              <li key={door.slug}>
                <Link
                  href={door.href}
                  className={cn(
                    "flex items-baseline justify-between gap-4 py-3.5 transition hover:bg-gold/5",
                    isFa && "flex-row-reverse text-right"
                  )}
                  dir={isFa ? "rtl" : "ltr"}
                >
                  <span className="font-sans text-xs tabular-nums text-gold-deep">
                    {String(door.number).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "min-w-0 flex-1 font-display text-base text-indigo md:text-lg",
                      isFa && "prose-fa"
                    )}
                  >
                    {door.title[lang === "fa" ? "fa" : locale === "sv" ? "sv" : "en"]}
                  </span>
                  <span
                    className={cn(
                      "hidden max-w-[14rem] truncate text-xs text-stone sm:block",
                      isFa ? "prose-fa" : "font-sans"
                    )}
                  >
                    {
                      door.subtitle[
                        lang === "fa" ? "fa" : locale === "sv" ? "sv" : "en"
                      ]
                    }
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Sign in */}
          <div className="mt-14 text-center" dir={isFa ? "rtl" : "ltr"}>
            <p
              className={cn(
                "mx-auto max-w-md text-sm text-stone",
                isFa ? "prose-fa" : "font-sans"
              )}
            >
              {t.signInHint}
            </p>
            <Link
              href="/auth/signin"
              className="mt-5 inline-block bg-indigo px-6 py-3 font-sans text-sm text-alabaster transition hover:bg-indigo/90"
            >
              {t.signIn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
