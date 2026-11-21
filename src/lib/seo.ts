import { DOORS } from "@/lib/doors";
import { HISTORY_SLUGS } from "@/lib/history";
import { allScholars } from "@/lib/scholarsData";

export const SITE_URL = "https://bahaisoul.com";
export const SITE_NAME = "Bahá'í Soul";
export const SITE_NAME_FA = "روح بهائی";

/** Multilingual discovery keywords (EN / SV / FA / common spellings). */
export const SITE_KEYWORDS = [
  // Brand & people
  "Bahá'í Soul",
  "Bahai Soul",
  "روح بهائی",
  "Arash Mamdouh",
  "آرش ممدوح",
  "Shoja Ashari",
  "Shojaeddin Ashari Gheshmi",
  "شجاع اشعری",
  "شجاع‌الدین اشعری قشمی",
  // Faith — English spellings
  "Bahá'í",
  "Bahai",
  "Baha'i",
  "Bahá'í Faith",
  "Bahai Faith",
  "Bahá'í center",
  "Bahai center",
  "Bahá'í centre",
  "Bahai temple",
  "Bahá'í House of Worship",
  "Mashriqu'l-Adhkar",
  "Hidden Words",
  "Bahá'u'lláh",
  // Sweden / Nordics
  "Bahá'í Sweden",
  "Bahai Sweden",
  "Bahá'í Sverige",
  "Bahai Sverige",
  "Bahá'í center Sweden",
  "Bahai Stockholm",
  "Bahá'í Örebro",
  // Persian
  "بهائی",
  "آیین بهائی",
  "مرکز بهائی",
  "بهائی سوئد",
  "مرکز بهائی سوئد",
  "معبد بهائی",
  "مشرق‌الاذکار",
  "کلمات مکنونه",
  "حضرت بهاءالله",
  // Swedish faith terms
  "bahá'í-tron",
  "bahai tempel",
  "virtuellt tempel",
  "andlig helgedom",
] as const;

export const CORE_PATHS = [
  "/",
  "/about",
  "/gallery",
  "/sanctuary",
  "/scholars",
  "/history",
  "/dashboard",
  "/auth/signin",
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function allPublicPaths(): { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] {
  const paths: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "daily" },
    { path: "/about", priority: 0.95, changeFrequency: "monthly" },
    { path: "/scholars", priority: 0.95, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.9, changeFrequency: "weekly" },
    { path: "/sanctuary", priority: 0.9, changeFrequency: "weekly" },
    { path: "/history", priority: 0.85, changeFrequency: "monthly" },
    { path: "/site-map", priority: 0.6, changeFrequency: "weekly" },
  ];

  for (const door of DOORS) {
    paths.push({
      path: `/doors/${door.slug}`,
      priority: 0.8,
      changeFrequency: "monthly",
    });
  }

  for (const slug of HISTORY_SLUGS) {
    paths.push({
      path: `/history/${slug}`,
      priority: slug === "overview" ? 0.85 : 0.75,
      changeFrequency: "monthly",
    });
  }

  for (const person of allScholars) {
    const featured = Boolean(person.founder || person.isFeatured);
    paths.push({
      path: `/scholars/${person.slug}`,
      priority: featured ? 0.95 : person.active ? 0.7 : 0.4,
      changeFrequency: featured ? "weekly" : "monthly",
    });
  }

  return paths;
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_FA, "Bahai Soul", "روح بهائی Virtual Temple"],
    url: SITE_URL,
    description:
      "Virtual Bahá'í Temple exploring mystical, cultural, and communal dimensions of the Bahá'í Faith — Bahá'í Soul / روح بهائی.",
    inLanguage: ["en", "sv", "fa"],
    keywords: SITE_KEYWORDS.join(", "),
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/scholars?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_FA, "Bahai Soul Virtual Temple"],
    url: SITE_URL,
    logo: absoluteUrl("/images/about-cosmos.jpg"),
    description:
      "A digital Mashriqu'l-Adhkár — Virtual Temple for deep Bahá'í contemplation, scholarship, and devotion. Founded by Arash Mamdouh.",
    foundingDate: "2024",
    founder: { "@id": `${SITE_URL}/scholars/arash-mamdouh#person` },
    sameAs: [SITE_URL],
    areaServed: ["SE", "IR", "World"],
    knowsAbout: [
      "Bahá'í Faith",
      "Bahá'í mysticism",
      "Hidden Words",
      "Mashriqu'l-Adhkár",
      "Bahá'í Sweden",
      "Spiritual education",
    ],
  };
}

export function buildPersonJsonLd(opts: {
  slug: string;
  name: string;
  alternateName?: string[];
  jobTitle: string;
  description: string;
  image?: string;
  knowsAbout?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/scholars/${opts.slug}#person`,
    name: opts.name,
    alternateName: opts.alternateName ?? [],
    url: absoluteUrl(`/scholars/${opts.slug}`),
    image: opts.image ? absoluteUrl(opts.image) : undefined,
    jobTitle: opts.jobTitle,
    description: opts.description,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: opts.knowsAbout ?? [],
    nationality: undefined,
  };
}

export function buildFeaturedPeopleJsonLd() {
  return [
    buildPersonJsonLd({
      slug: "arash-mamdouh",
      name: "Arash Mamdouh",
      alternateName: ["آرش ممدوح", "Arash Mamdouh Bahá'í Soul", "Arash Mamdouh Sweden"],
      jobTitle: "Founder of Bahá'í Soul · Musician, Inventor & Mystical Researcher",
      description:
        "Arash Mamdouh is the founder of Bahá'í Soul (روح بهائی), a Virtual Temple exploring deep Bahá'í mysticism, sacred art, and technology. Based in Sweden.",
      image: "/images/scholars/founder.jpg",
      knowsAbout: [
        "Bahá'í Faith",
        "Mysticism",
        "Sacred music",
        "Bahá'í Sweden",
        "Virtual Temple",
        "Information technology",
      ],
    }),
    buildPersonJsonLd({
      slug: "shoja-gheshmi",
      name: "Shojaeddin Ashari Gheshmi",
      alternateName: [
        "Shoja Ashari",
        "Shoja",
        "شجاع اشعری",
        "شجاع‌الدین اشعری قشمی",
        "Shojaeddin Ashari",
      ],
      jobTitle: "Temple Steward · Master Musician, Luthier & Scholar of Mysticism",
      description:
        "Shojaeddin Ashari Gheshmi (Shoja Ashari) is a Temple Steward of Bahá'í Soul — acclaimed musician, oud maker, and scholar of mysticism, astrology, and sacred sound, living in Örebro, Sweden.",
      image: "/images/scholars/shoja.jpg",
      knowsAbout: [
        "Bahá'í Faith",
        "Oud",
        "Persian music",
        "Mysticism",
        "Astrology",
        "Bahá'í Sweden",
        "Örebro",
      ],
    }),
  ];
}
