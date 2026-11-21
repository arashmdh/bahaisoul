import type { Metadata } from "next";
import Image from "next/image";
import { TempleGallery } from "@/components/gallery/TempleGallery";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bahá'í Temple Gallery — Houses of Worship Worldwide | روح بهائی",
  description:
    "Gallery of Bahá'í Houses of Worship across Americas, Asia, Africa, Europe, Oceania, and the Holy Land — Mashriqu'l-Adhkár architecture of light. Bahá'í Soul · روح بهائی · Bahai temples.",
  keywords: [
    "Bahá'í temple",
    "Bahai House of Worship",
    "Mashriqu'l-Adhkár",
    "مشرق‌الاذکار",
    "Bahá'í gallery",
    "Lotus Temple",
    "Wilmette temple",
    "معبد بهائی",
  ],
  alternates: { canonical: absoluteUrl("/gallery") },
};

export default function GalleryPage() {
  return (
    <div className="bg-alabaster">
      {/* Compact intro — no empty void above the photos */}
      <section className="relative overflow-hidden bg-indigo pt-24 md:pt-28">
        <div className="absolute inset-0">
          <Image
            src="/temples/thumbs/the_bahai_temple_in_haifa_israel-web.jpg"
            alt="Bahá'í House of Worship on Mount Carmel, Haifa — Holy Land"
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
            quality={55}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo/70 via-indigo/55 to-alabaster" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-8 pt-4 md:px-8 md:pb-10">
          <NinePointedStar size={40} animated={false} className="text-gold/80" />
          <p className="mt-4 font-sans text-sm uppercase tracking-[0.28em] text-gold md:text-base">
            Houses of Worship
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl leading-tight text-alabaster md:text-5xl lg:text-6xl">
            Temple Gallery
          </h1>
          <p className="mt-3 max-w-lg font-sans text-base leading-relaxed text-alabaster/75 md:text-lg">
            From the golden dome on Mount Carmel to lotus petals in Delhi and
            glass wings in the Andes — sacred architecture that gathers all
            humanity under one roof.
          </p>
        </div>
      </section>

      <TempleGallery />
    </div>
  );
}
