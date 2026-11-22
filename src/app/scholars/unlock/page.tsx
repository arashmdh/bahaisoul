import type { Metadata } from "next";
import { ScholarsUnlockForm } from "@/components/scholars/ScholarsUnlockForm";

export const metadata: Metadata = {
  title: "Scholars preview — Bahá'í Soul",
  robots: { index: false, follow: false },
};

export default function ScholarsUnlockPage({
  searchParams,
}: {
  searchParams?: { next?: string };
}) {
  const next =
    typeof searchParams?.next === "string" &&
    searchParams.next.startsWith("/scholars")
      ? searchParams.next
      : "/scholars";

  return <ScholarsUnlockForm next={next} />;
}
