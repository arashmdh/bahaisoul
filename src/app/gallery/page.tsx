import Image from "next/image";
import { TempleGallery } from "@/components/gallery/TempleGallery";
import { NinePointedStar } from "@/components/ui/NinePointedStar";

export const metadata = {
  title: "Temple Gallery",
  description:
    "A curated gallery of Bahá'í Houses of Worship and sacred sites — architecture of light, unity, and devotion across the continents.",
};

export default function GalleryPage() {
  return (
    <div className="bg-alabaster">
      {/* Compact intro — no empty void above the photos */}
      <section className="relative overflow-hidden bg-indigo pt-24 md:pt-28">
        <div className="absolute inset-0">
          <Image
            src="/temples/thumbs/the_bahai_temple_in_haifa_israel-web.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
            quality={55}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo/70 via-indigo/55 to-alabaster" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-8 pt-4 md:px-8 md:pb-10">
          <NinePointedStar size={36} animated={false} className="text-gold/80" />
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.35em] text-gold">
            Houses of Worship
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl leading-tight text-alabaster md:text-5xl">
            Temple Gallery
          </h1>
          <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-alabaster/75 md:text-base">
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
