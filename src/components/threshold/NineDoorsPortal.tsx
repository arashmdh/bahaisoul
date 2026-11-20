"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DOORS } from "@/lib/doors";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { Starfield } from "./Starfield";
import { cn } from "@/lib/utils";

/** Circle radius as % of container — keeps doors inset from edges */
const RADIUS = 36;
const ease = [0.22, 1, 0.36, 1] as const;

export function NineDoorsPortal() {
  const { locale, t } = useLocale();
  const isFa = locale === "fa";

  return (
    <section
      id="doors"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-8 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #050814 0%, #0B1126 55%, #0F172A 100%)",
      }}
    >
      <Starfield />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
            className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold/70 sm:text-xs"
          >
            {t.brandSub}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1, ease }}
            className="mt-3 font-display text-3xl text-alabaster sm:text-4xl md:text-5xl"
          >
            {t.doors.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.25, ease }}
            className={
              isFa
                ? "prose-fa mx-auto mt-4 max-w-lg px-1 text-sm text-alabaster/65 sm:text-base"
                : "mx-auto mt-4 max-w-lg px-1 font-sans text-sm text-alabaster/60 sm:text-base"
            }
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.doors.sub}
          </motion.p>
        </div>

        {/* Astrological circle — same layout phone → desktop; sized to fit viewport */}
        <div
          className={cn(
            "relative mx-auto aspect-square",
            /* phone: leave edge margin, never oversized */
            "w-[min(100%,20.5rem)]",
            "sm:w-[min(100%,26rem)]",
            "md:w-[min(100%,34rem)]",
            "lg:w-[min(100%,42rem)]"
          )}
        >
          <div className="absolute inset-[16%] rounded-full border border-gold/25 sm:inset-[18%]" />
          <div className="absolute inset-[26%] rounded-full border border-gold/15 sm:inset-[28%]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <NinePointedStar
              size={48}
              className="text-gold sm:hidden"
            />
            <NinePointedStar
              size={64}
              className="hidden text-gold sm:block md:hidden"
            />
            <NinePointedStar
              size={88}
              className="hidden text-gold md:block"
            />
          </div>

          {DOORS.map((door, i) => {
            const angle = (Math.PI * 2 * i) / 9 - Math.PI / 2;
            const x = 50 + RADIUS * Math.cos(angle);
            const y = 50 + RADIUS * Math.sin(angle);
            return (
              <motion.div
                key={door.slug}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2",
                  "w-[4.25rem] sm:w-[5.5rem] md:w-32 lg:w-36"
                )}
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.08 * i, ease }}
              >
                <Link
                  href={door.href}
                  className="group block touch-manipulation text-center outline-none"
                >
                  <span
                    className={cn(
                      "mx-auto mb-1 flex items-center justify-center rounded-full border border-gold/40 font-sans text-gold transition",
                      "h-7 w-7 text-[10px]",
                      "sm:mb-1.5 sm:h-8 sm:w-8 sm:text-[11px]",
                      "md:mb-2 md:h-9 md:w-9 md:text-xs",
                      "group-hover:bg-gold group-hover:text-indigo",
                      "group-active:bg-gold group-active:text-indigo"
                    )}
                  >
                    {door.number}
                  </span>
                  <span
                    className={cn(
                      "block font-display leading-tight text-alabaster transition group-hover:text-gold",
                      "text-[10px] sm:text-xs md:text-sm lg:text-base"
                    )}
                  >
                    {door.title[locale]}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block leading-snug text-alabaster/50",
                      "hidden text-[9px] sm:block sm:text-[10px] md:text-[11px] lg:text-xs",
                      isFa ? "prose-fa" : "font-sans"
                    )}
                    dir={isFa ? "rtl" : "ltr"}
                  >
                    {door.subtitle[locale]}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
