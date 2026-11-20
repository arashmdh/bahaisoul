"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DOORS } from "@/lib/doors";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";

const RADIUS = 38; // % of container

export function NineDoorsPortal() {
  const { locale, t } = useLocale();

  return (
    <section
      id="doors"
      className="relative overflow-hidden bg-alabaster px-5 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 temple-veil opacity-60" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-sans text-xs uppercase tracking-[0.28em] text-sage"
          >
            {t.brandSub}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1 }}
            className="mt-3 font-display text-4xl text-indigo md:text-5xl"
          >
            {t.doors.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.25 }}
            className="mx-auto mt-4 max-w-lg font-sans text-stone"
          >
            {t.doors.sub}
          </motion.p>
        </div>

        {/* Desktop / tablet radial portal */}
        <div className="relative mx-auto hidden aspect-square max-w-3xl md:block">
          <div className="absolute inset-[18%] rounded-full border border-gold/25" />
          <div className="absolute inset-[28%] rounded-full border border-gold/15" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <NinePointedStar size={88} className="text-gold" />
          </div>

          {DOORS.map((door, i) => {
            const angle = (Math.PI * 2 * i) / 9 - Math.PI / 2;
            const x = 50 + RADIUS * Math.cos(angle);
            const y = 50 + RADIUS * Math.sin(angle);
            return (
              <motion.div
                key={door.slug}
                className="absolute w-36 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.08 * i }}
              >
                <Link
                  href={door.href}
                  className="group block text-center outline-none"
                >
                  <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 font-sans text-xs text-gold transition group-hover:bg-gold group-hover:text-indigo">
                    {door.number}
                  </span>
                  <span className="block font-display text-base text-indigo transition group-hover:text-gold-deep">
                    {door.title[locale]}
                  </span>
                  <span className="mt-1 block font-sans text-[11px] leading-snug text-stone">
                    {door.subtitle[locale]}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile stacked list */}
        <ul className="mx-auto flex max-w-md flex-col gap-3 md:hidden">
          {DOORS.map((door, i) => (
            <motion.li
              key={door.slug}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
            >
              <Link
                href={door.href}
                className="flex items-start gap-4 border-b border-gold/20 py-4"
              >
                <span className="mt-0.5 font-sans text-sm text-gold">
                  {String(door.number).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-xl text-indigo">
                    {door.title[locale]}
                  </span>
                  <span className="mt-1 block font-sans text-sm text-stone">
                    {door.subtitle[locale]}
                  </span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
