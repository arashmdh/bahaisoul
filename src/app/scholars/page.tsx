import type { Metadata } from "next";
import { ScholarsDirectory } from "@/components/scholars/ScholarsDirectory";
import { ScholarsAccessGate } from "@/components/scholars/ScholarsAccessGate";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Scholars & Stewards — Arash Mamdouh, Shoja Ashari | Bahá'í Soul",
  description:
    "Nine Temple Stewards and Bahá'í scholars — Arash Mamdouh (آرش ممدوح), Shoja Ashari (شجاع اشعری), and contributing researchers. Clergy-free learning at Bahá'í Soul · روح بهائی · Bahá'í Sweden.",
  keywords: [
    "Arash Mamdouh",
    "آرش ممدوح",
    "Shoja Ashari",
    "Shojaeddin Ashari Gheshmi",
    "شجاع اشعری",
    "Bahá'í scholars",
    "Temple Stewards",
    "Bahá'í Soul",
    "روح بهائی",
    "Bahá'í Sweden",
  ],
  alternates: { canonical: absoluteUrl("/scholars") },
  robots: { index: false, follow: false },
};

export default function ScholarsPage() {
  return (
    <ScholarsAccessGate>
      <ScholarsDirectory />
    </ScholarsAccessGate>
  );
}
