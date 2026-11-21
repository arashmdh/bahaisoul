"use client";

import Link from "next/link";
import { DOORS } from "@/lib/doors";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { Starfield } from "./Starfield";
import { StarCluster } from "./StarCluster";
import { ShootingStarCanvas } from "./ShootingStarCanvas";
import { cn } from "@/lib/utils";

/**
 * Unique solar-system orbit radius (%) for each door-planet.
 * Inner → outer: each door has its own circular path.
 */
const ORBIT_RADII = [18, 22, 26, 29, 32, 35, 38, 41, 44] as const;

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
      <ShootingStarCanvas />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold/70 sm:text-xs">
            {t.brandSub}
          </p>
          <h2 className="mt-3 font-display text-3xl text-alabaster sm:text-4xl md:text-5xl">
            {t.doors.heading}
          </h2>
          <p
            className={
              isFa
                ? "prose-fa mx-auto mt-4 max-w-lg px-1 text-sm text-alabaster/80 sm:text-base"
                : "mx-auto mt-4 max-w-lg px-1 font-sans text-sm text-alabaster/75 sm:text-base"
            }
            dir={isFa ? "rtl" : "ltr"}
          >
            {t.doors.sub}
          </p>
        </div>

        <div
          className={cn(
            "relative mx-auto aspect-square overflow-visible",
            "w-[min(100%,20.5rem)]",
            "sm:w-[min(100%,26rem)]",
            "md:w-[min(100%,34rem)]",
            "lg:w-[min(100%,42rem)]"
          )}
          data-no-star
        >
          <StarCluster />

          {/* One faint orbit ring per door — solar system */}
          {ORBIT_RADII.map((r) => (
            <div
              key={r}
              className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20"
              style={{ width: `${r * 2}%`, height: `${r * 2}%` }}
              aria-hidden
            />
          ))}

          <button
            type="button"
            data-spawn-star
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold/50"
            aria-label={isFa ? "ستارهٔ دنباله‌دار" : "Launch a shooting star"}
          >
            <NinePointedStar size={48} className="text-gold sm:hidden" />
            <NinePointedStar
              size={64}
              className="hidden text-gold sm:block md:hidden"
            />
            <NinePointedStar
              size={88}
              className="hidden text-gold md:block"
            />
          </button>

          {DOORS.map((door, i) => {
            const radius = ORBIT_RADII[i] ?? 34;
            const angle = (Math.PI * 2 * i) / 9 - Math.PI / 2;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={door.slug}
                className={cn(
                  "absolute z-30 -translate-x-1/2 -translate-y-1/2",
                  "w-[3.6rem] sm:w-[4.5rem] md:w-[5.25rem] lg:w-24"
                )}
                style={{ left: `${x}%`, top: `${y}%` }}
                data-no-star
              >
                <div
                  className="pointer-events-none absolute left-1/2 top-[0.9rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30 sm:top-[1.05rem] md:top-[1.2rem]"
                  style={{ width: "2.85rem", height: "2.85rem" }}
                  aria-hidden
                />

                <Link
                  href={door.href}
                  className="group relative z-10 block touch-manipulation text-center outline-none"
                  title={`${door.title[locale]} — ${door.subtitle[locale]}`}
                >
                  <span
                    className={cn(
                      "mx-auto mb-0.5 flex items-center justify-center rounded-full border border-gold/45 bg-[#0B1126]/80 font-sans text-gold shadow-[0_0_14px_rgba(197,160,89,0.25)] transition",
                      "h-6 w-6 text-[9px]",
                      "sm:mb-1 sm:h-7 sm:w-7 sm:text-[10px]",
                      "md:h-8 md:w-8 md:text-[11px]",
                      "group-hover:bg-gold group-hover:text-indigo",
                      "group-active:bg-gold group-active:text-indigo"
                    )}
                  >
                    {door.number}
                  </span>
                  {/* Compact label only — full title lives on /doors/[slug] */}
                  <span
                    className={cn(
                      "mx-auto block max-w-[4.2rem] truncate font-display leading-none text-alabaster drop-shadow-[0_1px_8px_rgba(5,8,20,0.95)] transition group-hover:text-gold sm:max-w-[5rem] md:max-w-[5.5rem]",
                      "text-[10px] sm:text-[11px] md:text-xs",
                      isFa && "prose-fa"
                    )}
                    dir={isFa ? "rtl" : "ltr"}
                  >
                    {door.shortTitle[locale]}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
