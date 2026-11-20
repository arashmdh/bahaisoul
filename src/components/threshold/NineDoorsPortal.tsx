"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DOORS } from "@/lib/doors";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { Starfield } from "./Starfield";

const ease = [0.22, 1, 0.36, 1] as const;

export function NineDoorsPortal() {
  const { locale, t } = useLocale();

  return (
    <section
      id="doors"
      className="relative overflow-hidden px-5 py-24 md:py-32"
      style={{
        background: "linear-gradient(180deg, #050814 0%, #0B1126 55%, #0F172A 100%)",
      }}
    >
      <Starfield />

      {/* Faint geometric web behind the grid */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <NinePointedStar size={520} animated={false} className="text-gold max-md:hidden" />
        <NinePointedStar size={280} animated={false} className="text-gold md:hidden" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-14 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="font-sans text-xs uppercase tracking-[0.28em] text-gold/70"
          >
            {t.brandSub}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
            className="mt-3 font-display text-4xl text-alabaster md:text-5xl"
          >
            {t.doors.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
            className="mx-auto mt-4 max-w-lg font-sans text-alabaster/60"
          >
            {t.doors.sub}
          </motion.p>
        </div>

        {/* Unified 3×3 portal grid — no duplicate list */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {DOORS.map((door, i) => (
            <motion.div
              key={door.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.06 * i, ease }}
            >
              <Link
                href={door.href}
                className="group relative block h-full overflow-hidden rounded-sm border border-amber-400/20 bg-slate-900/50 p-6 backdrop-blur-md transition duration-700 ease-serene hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_0_40px_rgba(197,160,89,0.18)]"
              >
                <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(197,160,89,0.18), transparent 60%)",
                  }}
                />
                <span className="font-sans text-[11px] tracking-[0.22em] text-gold/80">
                  {String(door.number).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-alabaster transition group-hover:text-gold md:text-2xl">
                  {door.title[locale]}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-alabaster/55">
                  {door.subtitle[locale]}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
