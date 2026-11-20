import Link from "next/link";
import { NinePointedStar } from "@/components/ui/NinePointedStar";

export const metadata = {
  title: "Sanctuary",
};

export default function SanctuaryPage() {
  return (
    <div className="min-h-[100svh] bg-indigo pt-28 text-alabaster">
      <div className="mx-auto max-w-3xl px-5 pb-24 text-center">
        <NinePointedStar size={72} className="mx-auto text-gold/80" />
        <h1 className="mt-8 font-display text-4xl md:text-5xl">Sanctuary</h1>
        <p className="mt-4 font-sans text-alabaster/65">
          The prayer wall, virtual candles, and curated audio meditations will
          live in this quiet room.
        </p>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 border border-gold/20 px-4 py-8"
            >
              <span className="h-3 w-3 rounded-full bg-gold/70 shadow-[0_0_18px_rgba(197,160,89,0.55)]" />
              <p className="font-sans text-xs text-alabaster/50">Candle {i}</p>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="mt-14 inline-block border-b border-gold/40 pb-1 font-sans text-sm text-gold"
        >
          Back to the Threshold
        </Link>
      </div>
    </div>
  );
}
