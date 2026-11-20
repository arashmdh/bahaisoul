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
      {/* Cinematic intro */}
      <section className="relative min-h-[72svh] overflow-hidden bg-indigo">
        <Image
          src="/temples/the_bahai_temple_in_haifa_israel-web.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo via-indigo/55 to-indigo/30" />
        <div className="absolute inset-0 dome-glow opacity-40" />

        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <NinePointedStar size={40} animated={false} className="text-gold/80" />
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.35em] text-gold">
            Houses of Worship
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-alabaster md:text-6xl">
            Temple Gallery
          </h1>
          <p className="mt-5 max-w-lg font-sans text-sm leading-relaxed text-alabaster/70 md:text-base">
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
