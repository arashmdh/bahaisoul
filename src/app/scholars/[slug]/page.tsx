import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScholarBySlug, allScholars } from "@/lib/scholarsData";
import { ScholarProfileClient } from "@/components/scholars/ScholarProfileClient";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export function generateStaticParams() {
  return allScholars.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const person = getScholarBySlug(params.slug);
  if (!person) return { title: "Scholar" };

  const url = absoluteUrl(`/scholars/${person.slug}`);
  const title =
    person.slug === "arash-mamdouh"
      ? "Arash Mamdouh (آرش ممدوح) — Founder of Bahá'í Soul | روح بهائی"
      : person.slug === "shoja-gheshmi"
        ? "Shoja Ashari / Shojaeddin Ashari Gheshmi — Temple Steward | Bahá'í Soul"
        : `${person.name.en} · Scholars & Stewards`;

  const description =
    person.slug === "arash-mamdouh"
      ? "Arash Mamdouh (آرش ممدوح) — founder of Bahá'í Soul (روح بهائی), musician, inventor, and mystical researcher. Virtual Bahá'í Temple · Bahá'í Sweden · آیین بهائی."
      : person.slug === "shoja-gheshmi"
        ? "Shojaeddin Ashari Gheshmi (Shoja Ashari / شجاع اشعری) — Temple Steward of Bahá'í Soul, master musician, oud maker, and scholar of mysticism in Örebro, Sweden."
        : person.bioShort.en;

  const keywords = [
    person.name.en,
    person.name.fa,
    person.name.sv,
    SITE_NAME,
    "روح بهائی",
    "Bahá'í",
    "Bahai",
    "Bahá'í Sweden",
    "بهائی",
    ...(person.focus?.en ?? []),
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      url,
      title,
      description,
      images: person.portrait
        ? [{ url: person.portrait, alt: person.name.en }]
        : undefined,
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: person.portrait ? [person.portrait] : undefined,
    },
  };
}

export default function ScholarProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const person = getScholarBySlug(params.slug);
  if (!person) notFound();
  return <ScholarProfileClient person={person} />;
}
