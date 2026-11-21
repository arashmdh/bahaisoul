import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDoor, DOORS } from "@/lib/doors";
import { getDoorContent } from "@/lib/door-content";
import { DoorChamberView } from "@/components/doors/DoorChamber";
import { absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return DOORS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const door = getDoor(params.slug);
  if (!door) return { title: "Door" };
  const content = getDoorContent(params.slug);
  const url = absoluteUrl(`/doors/${door.slug}`);
  const title = `${door.title.en} / ${door.title.fa} — Nine Doors | Bahá'í Soul`;
  const excerpt = content?.en.articleBody
    ?.slice(0, 155)
    .replace(/\s+/g, " ")
    .trim();
  const description = excerpt
    ? `${excerpt}…`
    : `${door.subtitle.en} · ${door.subtitle.fa} · Bahá'í Soul Virtual Temple`;

  return {
    title,
    description,
    keywords: [
      door.title.en,
      door.title.fa,
      door.title.sv,
      "Bahá'í Soul",
      "روح بهائی",
      "Nine Doors",
      "نُه در",
      "Bahá'í",
      "بهائی",
    ],
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default function DoorPage({ params }: { params: { slug: string } }) {
  const door = getDoor(params.slug);
  const content = getDoorContent(params.slug);
  if (!door || !content) notFound();

  return <DoorChamberView door={door} content={content} />;
}
