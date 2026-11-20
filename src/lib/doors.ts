export type DoorSlug =
  | "metaphysics"
  | "mysticism"
  | "family"
  | "arts"
  | "society"
  | "science-religion"
  | "devotional"
  | "scholars"
  | "seekers-path";

export type Door = {
  slug: DoorSlug;
  number: number;
  title: { en: string; sv: string; fa: string };
  subtitle: { en: string; sv: string; fa: string };
  href: string;
};

export const DOORS: Door[] = [
  {
    slug: "metaphysics",
    number: 1,
    title: {
      en: "Metaphysics",
      sv: "Metafysik",
      fa: "ماوراءالطبیعه",
    },
    subtitle: {
      en: "The Unseen & Soul's Journey",
      sv: "Det osynliga & själens resa",
      fa: "غیب و سیر روح",
    },
    href: "/doors/metaphysics",
  },
  {
    slug: "mysticism",
    number: 2,
    title: {
      en: "Mysticism",
      sv: "Mystik",
      fa: "عرفان",
    },
    subtitle: {
      en: "Sacred Writings & Seven Valleys",
      sv: "Heliga skrifter & de sju dalarna",
      fa: "آثار مقدس و هفت وادی",
    },
    href: "/doors/mysticism",
  },
  {
    slug: "family",
    number: 3,
    title: {
      en: "Family",
      sv: "Familj",
      fa: "خانواده",
    },
    subtitle: {
      en: "Family & Spiritual Education",
      sv: "Familj & andlig fostran",
      fa: "خانواده و تربیت روحانی",
    },
    href: "/doors/family",
  },
  {
    slug: "arts",
    number: 4,
    title: {
      en: "Arts",
      sv: "Konst",
      fa: "هنر",
    },
    subtitle: {
      en: "Arts, Music & Culture",
      sv: "Konst, musik & kultur",
      fa: "هنر، موسیقی و فرهنگ",
    },
    href: "/doors/arts",
  },
  {
    slug: "society",
    number: 5,
    title: {
      en: "Society",
      sv: "Samhälle",
      fa: "جامعه",
    },
    subtitle: {
      en: "Social Transformation & Unity",
      sv: "Social förvandling & enhet",
      fa: "تحول اجتماعی و وحدت",
    },
    href: "/doors/society",
  },
  {
    slug: "science-religion",
    number: 6,
    title: {
      en: "Science & Religion",
      sv: "Vetenskap & religion",
      fa: "علم و دین",
    },
    subtitle: {
      en: "Harmony of Science & Religion",
      sv: "Harmoni mellan vetenskap & religion",
      fa: "هماهنگی علم و دین",
    },
    href: "/doors/science-religion",
  },
  {
    slug: "devotional",
    number: 7,
    title: {
      en: "Devotional",
      sv: "Andakt",
      fa: "عبادت",
    },
    subtitle: {
      en: "Prayer Wall & Audio Meditations",
      sv: "Bönvägg & ljudmeditationer",
      fa: "دیوار دعا و مراقبه صوتی",
    },
    href: "/doors/devotional",
  },
  {
    slug: "scholars",
    number: 8,
    title: {
      en: "Scholars",
      sv: "Forskare",
      fa: "پژوهشگران",
    },
    subtitle: {
      en: "Directory of Scholars & Resumes",
      sv: "Förteckning över forskare",
      fa: "فهرست پژوهشگران و سوابق",
    },
    href: "/scholars",
  },
  {
    slug: "seekers-path",
    number: 9,
    title: {
      en: "Seeker's Path",
      sv: "Sökarens väg",
      fa: "راه جوینده",
    },
    subtitle: {
      en: "Guided Study Paths",
      sv: "Vägledda studievägar",
      fa: "مسیرهای مطالعهٔ هدایت‌شده",
    },
    href: "/doors/seekers-path",
  },
];

export function getDoor(slug: string): Door | undefined {
  return DOORS.find((d) => d.slug === slug);
}
