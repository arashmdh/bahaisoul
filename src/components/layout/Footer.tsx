"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";

export function Footer() {
  const { t, locale } = useLocale();
  const isFa = locale === "fa";

  return (
    <footer className="border-t border-gold/15 bg-indigo px-5 py-12 text-alabaster/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <NinePointedStar size={36} animated={false} className="text-gold/70" />
        <p className="font-display text-lg text-alabaster/90">{t.brand}</p>
        <p
          className={
            isFa
              ? "prose-fa max-w-md text-sm text-alabaster/70"
              : "max-w-md font-sans text-sm leading-relaxed"
          }
          dir={isFa ? "rtl" : "ltr"}
        >
          {t.footer.reverence}
        </p>
      </div>
    </footer>
  );
}
