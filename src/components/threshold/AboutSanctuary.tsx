"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/about";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const EDGE_MOTES = [
  { left: "3%", top: "18%", delay: "0s", size: 2 },
  { left: "5%", top: "55%", delay: "1.4s", size: 3 },
  { left: "94%", top: "22%", delay: "0.7s", size: 3 },
  { left: "96%", top: "62%", delay: "2.1s", size: 2 },
  { left: "20%", top: "8%", delay: "1.1s", size: 2 },
  { left: "80%", top: "90%", delay: "2.5s", size: 2 },
];

const SOUL_STREAMS = [
  { left: "4%", delay: "0s" },
  { left: "96%", delay: "2.8s" },
];

function CornerGeometry({
  className,
  size = 72,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={cn("absolute opacity-60", className)} aria-hidden>
      <div className="about-orbit relative">
        <div className="absolute inset-[-16%] rounded-full border border-amber-200/20" />
        <NinePointedStar
          size={size}
          animated={false}
          className="about-star-breathe text-amber-200/85"
        />
      </div>
    </div>
  );
}

function AboutStageFX() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#050814]" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 70% 40%, rgba(30,42,72,0.55) 0%, transparent 70%), radial-gradient(ellipse 40% 35% at 20% 70%, rgba(25,36,60,0.4) 0%, transparent 65%)",
        }}
      />

      <CornerGeometry className="left-3 top-20 md:left-6" size={64} />
      <CornerGeometry className="right-3 top-20 md:right-6" size={64} />
      <CornerGeometry className="bottom-10 left-3 md:left-6" size={56} />
      <CornerGeometry className="bottom-10 right-3 md:right-6" size={56} />

      {SOUL_STREAMS.map((s, i) => (
        <span
          key={i}
          className="about-soul-ascend absolute bottom-[10%] h-8 w-[2px] rounded-full"
          style={{
            left: s.left,
            animationDelay: s.delay,
            background:
              "linear-gradient(to top, transparent, rgba(255,236,190,0.8), transparent)",
            boxShadow: "0 0 10px rgba(255,230,170,0.45)",
          }}
        />
      ))}

      {EDGE_MOTES.map((m, i) => (
        <span
          key={i}
          className="about-mote absolute rounded-full bg-amber-50"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            animationDelay: m.delay,
            boxShadow: "0 0 8px rgba(255,240,200,0.7)",
          }}
        />
      ))}
    </div>
  );
}

/** Circular solar-system orbits (percent of square plane) */
const PLANETS = [
  {
    name: "mercury",
    orbit: 28,
    duration: "12s",
    size: 5,
    color: "radial-gradient(circle at 30% 28%, #f0e6d8, #a89880 55%, #6a5c48)",
    glow: "0 0 8px rgba(210,190,160,0.55)",
    reverse: false,
    delay: "0s",
  },
  {
    name: "venus",
    orbit: 40,
    duration: "19s",
    size: 7,
    color: "radial-gradient(circle at 32% 28%, #fff2c8, #d4a84a 50%, #8a6a28)",
    glow: "0 0 10px rgba(212,168,74,0.55)",
    reverse: false,
    delay: "-3s",
  },
  {
    name: "earth",
    orbit: 52,
    duration: "28s",
    size: 8,
    color: "radial-gradient(circle at 34% 28%, #c8e8ff, #4a8ec8 45%, #1e4a78)",
    glow: "0 0 12px rgba(100,170,230,0.5)",
    reverse: false,
    delay: "-7s",
  },
  {
    name: "mars",
    orbit: 64,
    duration: "36s",
    size: 6,
    color: "radial-gradient(circle at 30% 30%, #ffc8a8, #c45a3a 50%, #6e2e1e)",
    glow: "0 0 10px rgba(200,90,60,0.45)",
    reverse: false,
    delay: "-11s",
  },
  {
    name: "jupiter",
    orbit: 78,
    duration: "52s",
    size: 12,
    color: "radial-gradient(circle at 32% 28%, #fff0d0, #d4a06a 40%, #8a5a30 70%, #5a3820)",
    glow: "0 0 14px rgba(212,160,100,0.45)",
    reverse: false,
    delay: "-16s",
  },
  {
    name: "saturn",
    orbit: 90,
    duration: "68s",
    size: 10,
    color: "radial-gradient(circle at 30% 28%, #fff6e0, #e0c888 50%, #9a8048)",
    glow: "0 0 12px rgba(224,200,136,0.4)",
    reverse: false,
    delay: "-22s",
    ring: true,
  },
] as const;

const ART_MOTES = [
  { left: "8%", top: "18%", delay: "0s", size: 2 },
  { left: "18%", top: "78%", delay: "1.3s", size: 3 },
  { left: "82%", top: "22%", delay: "0.6s", size: 2 },
  { left: "88%", top: "70%", delay: "2.2s", size: 3 },
  { left: "48%", top: "8%", delay: "1.8s", size: 2 },
  { left: "52%", top: "90%", delay: "3s", size: 2 },
  { left: "4%", top: "48%", delay: "2.5s", size: 2 },
  { left: "96%", top: "52%", delay: "0.9s", size: 2 },
];

function CosmosArtBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease }}
      className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none"
    >
      {/* Circular solar system — square plane keeps orbits round */}
      <div className="about-solar-system z-[2]" aria-hidden>
        {/* Soft sun / soul core */}
        <div
          className="about-glow-pulse absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,248,220,0.85) 0%, rgba(197,160,89,0.35) 45%, transparent 72%)",
            boxShadow: "0 0 28px rgba(255,220,140,0.45)",
          }}
        />

        {PLANETS.map((p) => (
          <div
            key={p.name}
            className="about-planet-orbit"
            style={{
              width: `${p.orbit}%`,
              height: `${p.orbit}%`,
              marginLeft: `calc(${p.orbit}% / -2)`,
              marginTop: `calc(${p.orbit}% / -2)`,
              animationDuration: p.duration,
              animationDirection: p.reverse ? "reverse" : "normal",
              animationDelay: p.delay,
            }}
          >
            <span
              className="about-planet"
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: p.glow,
              }}
            >
              {"ring" in p && p.ring ? (
                <span
                  className="absolute left-1/2 top-1/2 block h-[3px] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(230,210,150,0.75), transparent)",
                    boxShadow: "0 0 4px rgba(230,210,150,0.35)",
                  }}
                />
              ) : null}
            </span>
          </div>
        ))}
      </div>

      {/* Floating transparent motes around edges */}
      {ART_MOTES.map((m, i) => (
        <span
          key={i}
          className="about-mote pointer-events-none absolute rounded-full bg-amber-50/70"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            animationDelay: m.delay,
            boxShadow: "0 0 12px rgba(255,240,200,0.55)",
          }}
          aria-hidden
        />
      ))}

      {/* Soft ascending wisps at art sides */}
      <span
        className="about-soul-ascend pointer-events-none absolute bottom-[12%] left-[6%] h-12 w-px bg-gradient-to-t from-transparent via-amber-100/50 to-transparent"
        aria-hidden
      />
      <span
        className="about-soul-ascend pointer-events-none absolute bottom-[12%] right-[8%] h-12 w-px bg-gradient-to-t from-transparent via-amber-100/45 to-transparent"
        style={{ animationDelay: "2.4s" }}
        aria-hidden
      />

      <div className="about-cosmos-dissolve relative z-[1]">
        <Image
          src="/images/about-cosmos.jpg"
          alt=""
          width={1024}
          height={558}
          priority
          quality={100}
          unoptimized
          className="h-auto w-full object-contain"
        />
      </div>
    </motion.div>
  );
}

export function AboutSanctuary({ compact = false }: { compact?: boolean }) {
  const { locale } = useLocale();
  const copy = locale === "fa" ? ABOUT.fa : ABOUT.en;
  const isFa = locale === "fa";

  return (
    <section
      id="about"
      className={cn(
        "relative overflow-hidden",
        compact
          ? "px-5 py-20 md:py-24"
          : "px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-32"
      )}
    >
      <AboutStageFX />

      <div
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16"
        dir={isFa ? "rtl" : "ltr"}
      >
        {/* Text column */}
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="font-sans text-[10px] uppercase tracking-[0.32em] text-amber-200/85 sm:text-xs"
          >
            Mashriqu’l-Adhkár
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.05, delay: 0.06, ease }}
            className={cn(
              "mt-4 font-display text-alabaster",
              compact
                ? "text-3xl md:text-4xl"
                : "text-3xl leading-tight sm:text-4xl md:text-[2.65rem]"
            )}
          >
            {copy.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.14, ease }}
            className="mt-5 font-display text-lg text-amber-100/95 md:text-xl"
          >
            {copy.subtitle}
          </motion.p>

          <div
            className={cn(
              "mt-8 space-y-5 text-base",
              isFa
                ? "prose-fa text-[1.05rem] md:text-[1.1rem]"
                : "font-sans leading-relaxed"
            )}
          >
            {(compact ? copy.manifesto.slice(0, 2) : copy.manifesto).map(
              (para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.08 * i, ease }}
                  className="text-balance text-[#F4F0E6]"
                >
                  {para}
                </motion.p>
              )
            )}
          </div>

          {!compact && (
            <>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease }}
                className="mt-14 font-display text-2xl text-amber-50 md:text-3xl"
              >
                {copy.pillarsHeading}
              </motion.h3>

              <ol className="mt-8 space-y-7">
                {copy.pillars.map((p, i) => (
                  <motion.li
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.07 * i, ease }}
                    className="border-t border-amber-200/25 pt-5"
                  >
                    <p className="font-display text-lg text-alabaster md:text-xl">
                      <span className="me-2 font-sans text-sm tracking-widest text-amber-200/90">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p.title}
                    </p>
                    <p
                      className={cn(
                        "mt-2 text-[#EDE6D6]",
                        isFa
                          ? "prose-fa text-[0.98rem]"
                          : "font-sans text-sm leading-relaxed md:text-[15px]"
                      )}
                    >
                      {p.body}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </>
          )}

          {compact && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="inline-flex border-b border-amber-300/50 pb-1 font-sans text-sm tracking-wide text-amber-50 transition hover:border-amber-100 hover:text-white"
              >
                {isFa ? "ادامهٔ بیانیه" : "Read the full manifesto"}
              </Link>
            </motion.div>
          )}
        </div>

        {/* Dissolved art box beside text */}
        <div
          className={cn(
            "relative",
            compact ? "order-first lg:order-none" : "order-first lg:order-none",
            "lg:sticky lg:top-28"
          )}
        >
          <CosmosArtBox />
        </div>
      </div>
    </section>
  );
}
