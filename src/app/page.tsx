import type { Metadata } from "next";
import { Hero } from "@/components/threshold/Hero";
import { AboutSanctuary } from "@/components/threshold/AboutSanctuary";
import { NineDoorsPortal } from "@/components/threshold/NineDoorsPortal";
import { DailyQuote } from "@/components/threshold/DailyQuote";
import { SITE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Bahá'í Soul — Virtual Bahá'í Temple | روح بهائی | Bahai Center Online",
  },
  description:
    "Bahá'í Soul (روح بهائی): Virtual Temple for deep Bahá'í Faith study — mysticism, Houses of Worship, Hidden Words, prayer. Arash Mamdouh · Shoja Ashari · Bahá'í Sweden · بهائی سوئد · مرکز بهائی.",
  keywords: [...SITE_KEYWORDS],
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "Bahá'í Soul — Virtual Bahá'í Temple | روح بهائی",
    description:
      "Deep Bahá'í contemplation online. Founded by Arash Mamdouh · Steward Shoja Ashari · Bahá'í Sweden.",
  },
};

export default function ThresholdPage() {
  return (
    <>
      <Hero />
      <AboutSanctuary compact />
      <NineDoorsPortal />
      <DailyQuote />
    </>
  );
}
