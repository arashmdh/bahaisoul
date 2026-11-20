"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DOORS } from "@/lib/doors";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { Starfield } from "./Starfield";

const RADIUS = 38;
const ease = [0.22, 1, 0.36, 1] as const;

export function NineDoorsPortal() {
  const { locale, t } = useLocale();

  return (
    <section
      id="doors"
      className="relative overflow-hidden px-5 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #050814 0%, #0B1126 55%, #0F172A 100%)",
      }}
    >
      <Starfield />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
            className="font-sans text-xs uppercase tracking-[0.28em] text-gold/70"
          >
            {t.brandSub}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1, ease }}
            className="mt-3 font-display text-4xl text-alabaster md:text-5xl"
          >
            {t.doors.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.25, ease }}
            className="mx-auto mt-4 max-w-lg font-sans text-alabaster/60"
          >
            {t.doors.sub}
          </motion.p>
        </div>

        {/* Circular portal — original geometry */}
        <div className="relative mx-auto aspect-square max-w-3xl max-md:max-w-[min(100%,420px)]">
          <div className="absolute inset-[18%] rounded-full border border-gold/25" />
          <div className="absolute inset-[28%] rounded-full border border-gold/15" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <NinePointedStar size={88} className="text-gold max-md:hidden" />
            <NinePointedStar size={56} className="text-gold md:hidden" />
          </div>

          {DOORS.map((door, i) => {
            const angle = (Math.PI * 2 * i) / 9 - Math.PI / 2;
            const x = 50 + RADIUS * Math.cos(angle);
            const y = 50 + RADIUS * Math.sin(angle);
            return (
              <motion.div
                key={door.slug}
                className="absolute w-28 -translate-x-1/2 -translate-y-1/2 md:w-36"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.08 * i, ease }}
              >
                <Link
                  href={door.href}
                  className="group block text-center outline-none"
                >
                  <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 font-sans text-xs text-gold transition group-hover:bg-gold group-hover:text-indigo">
                    {door.number}
                  </span>
                  <span className="block font-display text-sm text-alabaster transition group-hover:text-gold md:text-base">
                    {door.title[locale]}
                  </span>
                  <span className="mt-1 block font-sans text-[10px] leading-snug text-alabaster/50 md:text-[11px]">
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
