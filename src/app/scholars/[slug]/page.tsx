import { notFound } from "next/navigation";
import { getScholarBySlug, allScholars } from "@/lib/scholarsData";
import { ScholarProfileClient } from "@/components/scholars/ScholarProfileClient";

export function generateStaticParams() {
  return allScholars.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const person = getScholarBySlug(params.slug);
  if (!person) return { title: "Scholar" };
  return {
    title: `${person.name.en} · Scholars & Stewards`,
    description: person.bioShort.en,
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
