import Link from "next/link";
import { NinePointedStar } from "@/components/ui/NinePointedStar";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="min-h-[100svh] bg-alabaster pt-28">
      <div className="mx-auto max-w-4xl px-5 pb-24">
        <div className="flex items-center gap-4">
          <NinePointedStar size={40} animated={false} className="text-gold" />
          <div>
            <h1 className="font-display text-3xl text-indigo">Your Path</h1>
            <p className="font-sans text-sm text-stone">
              Profile, journal, bookmarks, and scholar tools.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Private Journal",
              body: "Quiet reflections tied to readings across the Nine Doors.",
            },
            {
              title: "Bookmarked Writings",
              body: "Highlights and sacred passages you have set aside.",
            },
            {
              title: "Door Progress",
              body: "Track your journey through each thematic pillar.",
            },
            {
              title: "Scholar Studio",
              body: "Markdown editor with citation blocks — for verified Scholars.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border-t border-gold/25 pt-5"
            >
              <h2 className="font-display text-xl text-indigo">{item.title}</h2>
              <p className="mt-2 font-sans text-sm leading-relaxed text-stone">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/auth/signin"
          className="mt-12 inline-block bg-indigo px-5 py-3 font-sans text-sm text-alabaster"
        >
          Sign in to continue
        </Link>
      </div>
    </div>
  );
}
