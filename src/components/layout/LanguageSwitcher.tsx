"use client";

import { LOCALES, type Locale } from "@/lib/i18n/dictionaries";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-sm border border-alabaster/15 p-0.5",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLocale(l.code as Locale)}
          className={cn(
            "px-2.5 py-1.5 font-sans text-xs uppercase tracking-[0.12em] transition md:text-sm",
            locale === l.code
              ? "bg-gold/20 text-gold"
              : "text-alabaster/55 hover:text-alabaster"
          )}
        >
          {l.code}
        </button>
      ))}
    </div>
  );
}
