import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getDoor, DOORS, DOOR_SLUG_REDIRECTS } from "@/lib/doors";
import { getDoorContent } from "@/lib/door-content";
import { DoorChamberView } from "@/components/doors/DoorChamber";
import { absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  const current = DOORS.map((d) => ({ slug: d.slug }));
  const legacy = Object.keys(DOOR_SLUG_REDIRECTS).map((slug) => ({ slug }));
  return [...current, ...legacy];
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const redirected = DOOR_SLUG_REDIRECTS[params.slug];
  const door = getDoor(redirected ?? params.slug);
  if (!door) return { title: "Door" };
  const content = getDoorContent(door.slug);
  const url = absoluteUrl(`/doors/${door.slug}`);
  const title = `${door.title.en} / ${door.title.fa} — Nine Doors | Bahá'í Soul`;
  const excerpt = content?.en.articleParagraphs[0]
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
      "Bahá'í mysticism",
      "عرفان بهائی",
      "بهائی",
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: content?.image
        ? [{ url: content.image, alt: content.imageAlt.en }]
        : undefined,
    },
  };
}

export default function DoorPage({ params }: { params: { slug: string } }) {
  const redirected = DOOR_SLUG_REDIRECTS[params.slug];
  if (redirected) {
    redirect(`/doors/${redirected}`);
  }

  const door = getDoor(params.slug);
  const content = getDoorContent(params.slug);
  if (!door || !content) notFound();

  return <DoorChamberView door={door} content={content} />;
}
