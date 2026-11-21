import type { Metadata } from "next";
import Link from "next/link";
import { DOORS } from "@/lib/doors";
import { HISTORY_TOPICS } from "@/lib/history";
import { allScholars } from "@/lib/scholarsData";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import { NinePointedStar } from "@/components/ui/NinePointedStar";

export const metadata: Metadata = {
  title: "Site Map — Bahá'í Soul | روح بهائی",
  description:
    "Complete site map of Bahá'í Soul (روح بهائی): Nine Doors, Temple Gallery, Sanctuary, History, Scholars — Arash Mamdouh, Shoja Ashari, and more.",
  alternates: { canonical: absoluteUrl("/site-map") },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Temple",
    titleFa: "معبد",
    links: [
      { href: "/", label: "Home · آستانه" },
      { href: "/about", label: "About · درباره روح بهائی" },
      { href: "/sanctuary", label: "Sanctuary · حرم" },
      { href: "/gallery", label: "Temple Gallery · گالری معابد" },
      { href: "/dashboard", label: "Dashboard · پیشخوان" },
    ],
  },
];

export default function SiteMapPage() {
  const featured = allScholars.filter((s) => s.founder || s.isFeatured);
  const others = allScholars.filter((s) => !s.founder && !s.isFeatured && s.active);

  return (
    <div className="min-h-[100svh] bg-alabaster pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <NinePointedStar size={40} animated={false} className="text-gold" />
        <h1 className="mt-5 font-display text-4xl text-indigo md:text-5xl">
          Site Map
        </h1>
        <p className="mt-3 font-sans text-base text-stone md:text-lg">
          Full index of {SITE_NAME} / روح بهائی — for seekers and search
          engines. XML sitemap:{" "}
          <a
            href="/sitemap.xml"
            className="text-gold-deep underline-offset-2 hover:underline"
          >
            /sitemap.xml
          </a>
        </p>

        {sections.map((sec) => (
          <section key={sec.title} className="mt-12">
            <h2 className="font-display text-2xl text-indigo">{sec.title}</h2>
            <ul className="mt-4 space-y-2 border-t border-gold/20 pt-4">
              {sec.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-base text-indigo/90 transition hover:text-gold-deep"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mt-12">
          <h2 className="font-display text-2xl text-indigo">Nine Doors · نُه در</h2>
          <ul className="mt-4 space-y-2 border-t border-gold/20 pt-4">
            {DOORS.map((d) => (
              <li key={d.slug}>
                <Link
                  href={d.href}
                  className="font-sans text-base text-indigo/90 transition hover:text-gold-deep"
                >
                  {d.number}. {d.title.en} / {d.title.fa}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-indigo">
            History · تاریخ
          </h2>
          <ul className="mt-4 space-y-2 border-t border-gold/20 pt-4">
            {HISTORY_TOPICS.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/history/${t.slug}`}
                  className="font-sans text-base text-indigo/90 transition hover:text-gold-deep"
                >
                  {t.title.en} / {t.title.fa}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-indigo">
            Scholars & Stewards · پژوهشگران و امینان
          </h2>
          <p className="mt-2 font-sans text-sm text-stone">
            Featured: Arash Mamdouh (آرش ممدوح), Shoja Ashari (شجاع اشعری)
          </p>
          <ul className="mt-4 space-y-2 border-t border-gold/20 pt-4">
            <li>
              <Link
                href="/scholars"
                className="font-sans text-base font-medium text-indigo transition hover:text-gold-deep"
              >
                All Scholars Directory
              </Link>
            </li>
            {[...featured, ...others].map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/scholars/${p.slug}`}
                  className="font-sans text-base text-indigo/90 transition hover:text-gold-deep"
                >
                  {p.name.en}
                  {p.name.fa !== p.name.en ? ` · ${p.name.fa}` : ""}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
