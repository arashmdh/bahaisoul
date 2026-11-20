import Link from "next/link";
import { notFound } from "next/navigation";
import { getDoor, DOORS } from "@/lib/doors";
import { NinePointedStar } from "@/components/ui/NinePointedStar";

export function generateStaticParams() {
  return DOORS.map((d) => ({ slug: d.slug }));
}

export default function DoorPage({ params }: { params: { slug: string } }) {
  const door = getDoor(params.slug);
  if (!door) notFound();

  return (
    <div className="min-h-[100svh] bg-alabaster pt-28">
      <div className="mx-auto max-w-3xl px-5 pb-24 text-center">
        <NinePointedStar size={64} className="mx-auto text-gold" />
        <p className="mt-6 font-sans text-xs uppercase tracking-[0.3em] text-sage">
          Door {door.number}
        </p>
        <h1 className="mt-3 font-display text-4xl text-indigo md:text-5xl">
          {door.title.en}
        </h1>
        <p className="mt-4 font-sans text-stone">{door.subtitle.en}</p>
        <p className="mx-auto mt-10 max-w-lg font-sans text-sm leading-relaxed text-stone/80">
          This chamber is being prepared. Writings, guided paths, and scholar
          contributions for this door will open here.
        </p>
        <Link
          href="/#doors"
          className="mt-12 inline-block border-b border-gold/40 pb-1 font-sans text-sm text-gold"
        >
          Return to the Nine Doors
        </Link>
      </div>
    </div>
  );
}
