import { Hero } from "@/components/threshold/Hero";
import { NineDoorsPortal } from "@/components/threshold/NineDoorsPortal";
import { DailyQuote } from "@/components/threshold/DailyQuote";
import { prisma } from "@/lib/prisma";

const FALLBACK_QUOTE = {
  quote:
    "O Son of Spirit! My first counsel is this: Possess a pure, kindly and radiant heart, that thine may be a sovereignty ancient, imperishable and everlasting.",
  source: "The Hidden Words, Arabic 1",
  author: "Bahá'u'lláh",
};

async function getDailyQuote() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const writing = await prisma.dailySacredWriting.findUnique({
      where: { dateKey: today },
    });
    if (writing) {
      return {
        quote: writing.quote,
        source: writing.source,
        author: writing.author,
      };
    }
    const latest = await prisma.dailySacredWriting.findFirst({
      orderBy: { createdAt: "desc" },
    });
    if (latest) {
      return {
        quote: latest.quote,
        source: latest.source,
        author: latest.author,
      };
    }
  } catch {
    /* DB may be unready during first boot */
  }
  return FALLBACK_QUOTE;
}

export default async function ThresholdPage() {
  const daily = await getDailyQuote();

  return (
    <>
      <Hero />
      <NineDoorsPortal />
      <DailyQuote
        quote={daily.quote}
        source={daily.source}
        author={daily.author}
      />
    </>
  );
}
