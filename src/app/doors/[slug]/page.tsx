import { notFound } from "next/navigation";
import { getDoor, DOORS } from "@/lib/doors";
import { getDoorContent } from "@/lib/door-content";
import { DoorChamberView } from "@/components/doors/DoorChamber";

export function generateStaticParams() {
  return DOORS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const door = getDoor(params.slug);
  if (!door) return { title: "Door" };
  return {
    title: door.title.en,
    description: door.subtitle.en,
  };
}

export default function DoorPage({ params }: { params: { slug: string } }) {
  const door = getDoor(params.slug);
  const content = getDoorContent(params.slug);
  if (!door || !content) notFound();

  return <DoorChamberView door={door} content={content} />;
}
