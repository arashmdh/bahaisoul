import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { NinePointedStar } from "@/components/ui/NinePointedStar";

export default async function ScholarPage({
  params,
}: {
  params: { username: string };
}) {
  let profile = null;
  try {
    profile = await prisma.scholarProfile.findUnique({
      where: { username: params.username },
      include: { user: true },
    });
  } catch {
    /* DB unavailable */
  }

  if (!profile) {
    if (params.username !== "leyla-rostami") notFound();
    return (
      <ScholarShell
        name="Leyla Rostami"
        title="Researcher & Facilitator"
        bio="Researcher of mystical texts and the Seven Valleys."
        specialties={["Mysticism", "Sacred Writings", "Persian Literature"]}
      />
    );
  }

  const specialties = JSON.parse(profile.specialties || "[]") as string[];

  return (
    <ScholarShell
      name={profile.user.name ?? profile.username}
      title={profile.title ?? "Scholar"}
      bio={profile.user.bio ?? ""}
      specialties={specialties}
      verified={profile.verified}
    />
  );
}

function ScholarShell({
  name,
  title,
  bio,
  specialties,
  verified = true,
}: {
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  verified?: boolean;
}) {
  return (
    <div className="min-h-[100svh] bg-alabaster pt-28">
      <div className="mx-auto max-w-3xl px-5 pb-24">
        <NinePointedStar size={48} className="text-gold" />
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-4xl text-indigo">{name}</h1>
          {verified && (
            <span className="border border-gold/40 px-2 py-0.5 font-sans text-[10px] uppercase tracking-widest text-gold">
              Verified Scholar
            </span>
          )}
        </div>
        <p className="mt-2 font-sans text-sm text-sage">{title}</p>
        <p className="mt-6 font-sans leading-relaxed text-stone">{bio}</p>

        <h2 className="mt-12 font-display text-2xl text-indigo">Expertise</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {specialties.map((s) => (
            <li
              key={s}
              className="border border-gold/25 px-3 py-1 font-sans text-xs text-stone"
            >
              {s}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-display text-2xl text-indigo">Ask a Question</h2>
        <p className="mt-2 font-sans text-sm text-stone">
          Direct Q&amp;A will connect Seekers with this Scholar.
        </p>
        <textarea
          rows={4}
          disabled
          className="mt-4 w-full border border-gold/20 bg-white/50 px-4 py-3 font-sans text-sm text-stone opacity-70"
          placeholder="Sign in to submit a question…"
        />

        <Link
          href="/doors/scholars"
          className="mt-10 inline-block border-b border-gold/40 pb-1 font-sans text-sm text-gold"
        >
          All Scholars
        </Link>
      </div>
    </div>
  );
}
