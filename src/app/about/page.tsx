import type { Metadata } from "next";
import { AboutSanctuary } from "@/components/threshold/AboutSanctuary";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Bahá'í Soul — Digital Mashriqu'l-Adhkár | روح بهائی",
  description:
    "About Bahá'í Soul (روح بهائی): a Virtual Temple exploring rarely opened mystical and contemplative depths of the Bahá'í Faith. Founded by Arash Mamdouh — Bahá'í center online · Bahá'í Sweden.",
  keywords: [
    "About Bahá'í Soul",
    "روح بهائی",
    "Mashriqu'l-Adhkár",
    "Bahá'í mysticism",
    "Arash Mamdouh",
    "Bahai temple virtual",
    "مرکز بهائی",
    "بهائی سوئد",
  ],
  alternates: { canonical: absoluteUrl("/about") },
};

export default function AboutPage() {
  return <AboutSanctuary />;
}
