import type { Metadata } from "next";
import { SanctuaryRoom } from "@/components/sanctuary/SanctuaryRoom";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Virtual Sanctuary — Bahá'í Prayer & Candle | روح بهائی",
  description:
    "Enter the Bahá'í Soul Sanctuary — write a prayer intention in Persian, English, or Swedish, light the virtual candle, and receive a sacred blessing. مرکز بهائی مجازی · Bahá'í center online.",
  keywords: [
    "Bahá'í prayer",
    "Bahai sanctuary",
    "virtual candle",
    "مناجات بهائی",
    "حرم مجازی",
    "Bahá'í Soul",
    "روح بهائی",
  ],
  alternates: { canonical: absoluteUrl("/sanctuary") },
};

export default function SanctuaryPage() {
  return <SanctuaryRoom />;
}
