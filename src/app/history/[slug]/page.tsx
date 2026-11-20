import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HistoryView } from "@/components/history/HistoryView";
import { HISTORY_SLUGS, getHistoryTopic } from "@/lib/history";

export function generateStaticParams() {
  return HISTORY_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const topic = getHistoryTopic(params.slug);
  if (!topic) return { title: "History" };
  return {
    title: topic.title.en,
    description: topic.subtitle.en,
  };
}

export default function HistoryTopicPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic = getHistoryTopic(params.slug);
  if (!topic) notFound();
  return <HistoryView topic={topic} />;
}
