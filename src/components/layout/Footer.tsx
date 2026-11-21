"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import packageJson from "../../../package.json";

const discover = {
  en: [
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Temple Gallery" },
    { href: "/sanctuary", label: "Sanctuary" },
    { href: "/scholars", label: "Scholars" },
    { href: "/scholars/arash-mamdouh", label: "Arash Mamdouh" },
    { href: "/scholars/shoja-gheshmi", label: "Shoja Ashari" },
    { href: "/history/overview", label: "Bahá'í History" },
    { href: "/site-map", label: "Site Map" },
  ],
  sv: [
    { href: "/about", label: "Om" },
    { href: "/gallery", label: "Tempellgalleri" },
    { href: "/sanctuary", label: "Helgedom" },
    { href: "/scholars", label: "Forskare" },
    { href: "/scholars/arash-mamdouh", label: "Arash Mamdouh" },
    { href: "/scholars/shoja-gheshmi", label: "Shoja Ashari" },
    { href: "/history/overview", label: "Bahá'í-historia" },
    { href: "/site-map", label: "Webbkarta" },
  ],
  fa: [
    { href: "/about", label: "درباره" },
    { href: "/gallery", label: "گالری معابد" },
    { href: "/sanctuary", label: "حرم" },
    { href: "/scholars", label: "پژوهشگران" },
    { href: "/scholars/arash-mamdouh", label: "آرش ممدوح" },
    { href: "/scholars/shoja-gheshmi", label: "شجاع اشعری" },
    { href: "/history/overview", label: "تاریخ آیین بهائی" },
    { href: "/site-map", label: "نقشهٔ سایت" },
  ],
} as const;

export function Footer() {
  const { t, locale } = useLocale();
  const isFa = locale === "fa";
  const links = discover[locale];

  return (
    <footer className="border-t border-gold/15 bg-indigo px-5 py-12 text-alabaster/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
        <NinePointedStar size={36} animated={false} className="text-gold/70" />
        <p className="font-display text-lg text-alabaster/90 md:text-xl">
          {t.brand}
        </p>
        <p
          className={
            isFa
              ? "prose-fa max-w-md text-sm text-alabaster/70 md:text-base"
              : "max-w-md font-sans text-sm leading-relaxed md:text-base"
          }
          dir={isFa ? "rtl" : "ltr"}
        >
          {t.footer.reverence}
        </p>

        <nav
          aria-label="Discover"
          className="flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2"
          dir={isFa ? "rtl" : "ltr"}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-alabaster/65 transition hover:text-gold md:text-[15px]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="max-w-xl font-sans text-xs leading-relaxed text-alabaster/40">
          Bahá&apos;í Soul · روح بهائی · Bahá&apos;í Sweden · بهائی سوئد ·
          Bahai center · مرکز بهائی
        </p>

        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-alabaster/35">
          {t.footer.version} {packageJson.version}
        </p>
      </div>
    </footer>
  );
}
