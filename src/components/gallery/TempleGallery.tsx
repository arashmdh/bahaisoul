"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import {
  TEMPLE_IMAGES,
  TEMPLE_REGIONS,
  type TempleImage,
  type TempleRegion,
} from "@/lib/temples";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

function copyFor(img: TempleImage, locale: "en" | "sv" | "fa") {
  return img[locale];
}

export function TempleGallery() {
  const { locale, t } = useLocale();
  const [region, setRegion] = useState<TempleRegion>("all");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      region === "all"
        ? TEMPLE_IMAGES
        : TEMPLE_IMAGES.filter((img) => img.region === region),
    [region]
  );

  const openIndex = active;
  const openItem = openIndex !== null ? filtered[openIndex] : null;

  useEffect(() => {
    if (openItem === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? i : (i - 1 + filtered.length) % filtered.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openItem, filtered.length]);

  // Reset lightbox index when filter changes
  useEffect(() => {
    setActive(null);
  }, [region]);

  return (
    <div>
      {/* Filters */}
      <div className="sticky top-[72px] z-30 border-b border-gold/15 bg-alabaster/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 scrollbar-none md:px-8">
          {TEMPLE_REGIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRegion(r.id)}
              className={cn(
                "shrink-0 px-4 py-2 font-sans text-xs uppercase tracking-[0.18em] transition",
                region === r.id
                  ? "bg-indigo text-alabaster"
                  : "text-stone hover:text-indigo"
              )}
            >
              {r.label[locale]}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-8">
        <p className="mb-5 font-sans text-sm text-stone">
          {t.gallery.count.replace("{n}", String(filtered.length))}
        </p>

        {/* Even mosaic — no oversized empty hero spans */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {filtered.map((img, index) => {
            const copy = copyFor(img, locale);

            return (
              <motion.button
                key={img.id}
                type="button"
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(index)}
                className={cn(
                  "group relative overflow-hidden text-start outline-none",
                  "focus-visible:ring-2 focus-visible:ring-gold"
                )}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-indigo/5">
                  <Image
                    src={img.src}
                    alt={copy.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-[1.4s] ease-serene group-hover:scale-[1.04]"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo/75 via-indigo/10 to-transparent opacity-80 transition duration-700 group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
                      {copy.location}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl text-alabaster md:text-2xl">
                      {copy.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 max-w-md font-sans text-xs leading-relaxed text-alabaster/70 md:text-sm">
                      {copy.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openItem && openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-indigo/92 p-4 backdrop-blur-sm md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute end-5 top-5 z-10 text-alabaster/80 transition hover:text-gold"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              <X size={28} />
            </button>

            <button
              type="button"
              className="absolute start-3 top-1/2 z-10 hidden -translate-y-1/2 text-alabaster/70 transition hover:text-gold md:block"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) =>
                  i === null ? i : (i - 1 + filtered.length) % filtered.length
                );
              }}
            >
              <ChevronLeft size={36} />
            </button>
            <button
              type="button"
              className="absolute end-3 top-1/2 z-10 hidden -translate-y-1/2 text-alabaster/70 transition hover:text-gold md:block"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) => (i === null ? i : (i + 1) % filtered.length));
              }}
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={openItem.id}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid max-h-[92vh] w-full max-w-6xl overflow-hidden bg-indigo md:grid-cols-[1.35fr_1fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] bg-black md:aspect-auto md:min-h-[70vh]">
                <Image
                  src={openItem.src}
                  alt={copyFor(openItem, locale).title}
                  fill
                  className="object-contain md:object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  quality={90}
                  priority
                />
              </div>
              <div className="flex flex-col justify-center overflow-y-auto px-6 py-8 text-alabaster md:px-10">
                <p className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-gold">
                  <MapPin size={12} />
                  {copyFor(openItem, locale).location}
                  {openItem.year ? ` · ${openItem.year}` : ""}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                  {copyFor(openItem, locale).title}
                </h2>
                <p className="mt-6 font-sans text-sm leading-relaxed text-alabaster/70 md:text-base">
                  {copyFor(openItem, locale).description}
                </p>
                <p className="mt-10 font-sans text-xs tracking-wide text-alabaster/40">
                  {openIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
