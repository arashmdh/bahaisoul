export type DoorSlug =
  | "worlds-beyond"
  | "self-knowledge"
  | "seven-valleys"
  | "sacred-symbols"
  | "dreams-intuition"
  | "cosmic-harmony"
  | "sacred-arts"
  | "love-alchemy"
  | "spiritualizing-world";

export type Door = {
  slug: DoorSlug;
  number: number;
  /** Full title — door chamber pages */
  title: { en: string; sv: string; fa: string };
  /** Full subtitle — door chamber pages */
  subtitle: { en: string; sv: string; fa: string };
  /** Ultra-short label for homepage constellation (no overlap) */
  shortTitle: { en: string; sv: string; fa: string };
  href: string;
};

export const DOORS: Door[] = [
  {
    slug: "worlds-beyond",
    number: 1,
    title: {
      fa: "عوالم غیب و سفر روح",
      en: "The Unseen Worlds & Soul's Journey",
      sv: "De osynliga världarna & själens resa",
    },
    subtitle: {
      fa: "ملکوت، بقای روح، و عوالم بی‌کران الهی",
      en: "Malakút, the immortal soul, and the infinite worlds of God",
      sv: "Malakút, den odödliga själen och Guds oändliga världar",
    },
    shortTitle: { fa: "غیب", en: "Unseen", sv: "Osynligt" },
    href: "/doors/worlds-beyond",
  },
  {
    slug: "self-knowledge",
    number: 2,
    title: {
      fa: "خودشناسی و حقیقتِ وجود",
      en: "Self-Knowledge & The Inner Reality",
      sv: "Självkännedom & den inre verkligheten",
    },
    subtitle: {
      fa: "«مَن عَرَفَ نَفسَهُ فَقَد عَرَفَ رَبَّه»؛ کشف گنج پنهان درون",
      en: "Discovering the divine mystery hidden within the soul",
      sv: "Att upptäcka det gudomliga mysteriet inom själen",
    },
    shortTitle: { fa: "خودشناسی", en: "Self", sv: "Självet" },
    href: "/doors/self-knowledge",
  },
  {
    slug: "seven-valleys",
    number: 3,
    title: {
      fa: "هفت وادی و سلوک عرفانی",
      en: "The Seven Valleys & Mystical Wayfaring",
      sv: "De sju dalarna & mystikens vandring",
    },
    subtitle: {
      fa: "منازل عشق، معرفت، حیرت و فنا در آثار بهائی",
      en: "Stations of love, knowledge, wonderment, and unity",
      sv: "Stadier av kärlek, kunskap, förundran och enhet",
    },
    shortTitle: { fa: "هفت وادی", en: "Valleys", sv: "Dalarna" },
    href: "/doors/seven-valleys",
  },
  {
    slug: "sacred-symbols",
    number: 4,
    title: {
      fa: "رموز، حروف و هندسه قدسی",
      en: "Sacred Symbols, Letters & Geometry",
      sv: "Heliga symboler, bokstäver & geometri",
    },
    subtitle: {
      fa: "اسرار اسم اعظم، عدد ۹ و اشارات باطنی در آثار مبارکه",
      en: "Mysteries of the Greatest Name, the number 9, and hidden allusions",
      sv: "Mysterierna kring det Största Namnet, talet 9 och dolda tecken",
    },
    shortTitle: { fa: "رموز", en: "Symbols", sv: "Symboler" },
    href: "/doors/sacred-symbols",
  },
  {
    slug: "dreams-intuition",
    number: 5,
    title: {
      fa: "رؤیا، شهود و ادراک باطنی",
      en: "Dreams, Intuition & Spiritual Perception",
      sv: "Drömmar, intuition & andlig varseblivning",
    },
    subtitle: {
      fa: "خواب‌های صادقه، الهامات قلبی و نشانه‌های عالم بالا",
      en: "True dreams, inner intuition, and subtle signs from on high",
      sv: "Sanna drömmar, inre intuition och tecken från ovan",
    },
    shortTitle: { fa: "رؤیا", en: "Dreams", sv: "Drömmar" },
    href: "/doors/dreams-intuition",
  },
  {
    slug: "cosmic-harmony",
    number: 6,
    title: {
      fa: "نظم کیهانی، علم و آگاهی",
      en: "Cosmic Order, Science & Consciousness",
      sv: "Kosmisk ordning, vetenskap & medvetande",
    },
    subtitle: {
      fa: "علم و دین، کیهان زنده، و جستجوی حیات در سیارات",
      en: "Science with faith, a living cosmos, and life on other worlds",
      sv: "Vetenskap med tro, en levande kosmos och liv på andra världar",
    },
    shortTitle: { fa: "کیهان", en: "Cosmos", sv: "Kosmos" },
    href: "/doors/cosmic-harmony",
  },
  {
    slug: "sacred-arts",
    number: 7,
    title: {
      fa: "موسیقی، هنر و نردبان عروج",
      en: "Sacred Music, Art & Ascent of the Soul",
      sv: "Sakral musik, konst & själens uppstigande",
    },
    subtitle: {
      fa: "نغمه‌های قدسی، خوشنویسی و زیبایی به مثابه دریچه غیب",
      en: "Sacred melody, calligraphy, and beauty as a portal to the unseen",
      sv: "Sakral melodi, kalligrafi och skönhet som en port till det osynliga",
    },
    shortTitle: { fa: "هنر", en: "Arts", sv: "Konst" },
    href: "/doors/sacred-arts",
  },
  {
    slug: "love-alchemy",
    number: 8,
    title: {
      fa: "کیمیای عشق و پیوند ارواح",
      en: "The Alchemy of Love & Soul Bonds",
      sv: "Kärlekens alkemi & själarnas band",
    },
    subtitle: {
      fa: "عشق روحانی به مثابه نیروی آفرینش و پیوند جاودان نفوس",
      en: "Spiritual love as the creative force of existence and eternal soul-ties",
      sv: "Andlig kärlek som skapelsens kraft och själarnas eviga band",
    },
    shortTitle: { fa: "عشق", en: "Love", sv: "Kärlek" },
    href: "/doors/love-alchemy",
  },
  {
    slug: "spiritualizing-world",
    number: 9,
    title: {
      fa: "کیمیاگریِ عمل و تجلی روح در جهان",
      en: "Spiritualizing the World & Living Unity",
      sv: "Världens förandligande & levande enhet",
    },
    subtitle: {
      fa: "وحدت انسان با انسان، با موجودات زنده، و افق خانوادهٔ کیهانی",
      en: "Oneness among humans, with all beings, and toward a universal family",
      sv: "Enhet mellan människor, med allt liv, och mot en universell familj",
    },
    shortTitle: { fa: "وحدت", en: "Unity", sv: "Enhet" },
    href: "/doors/spiritualizing-world",
  },
];

export function getDoor(slug: string): Door | undefined {
  return DOORS.find((d) => d.slug === slug);
}

/** Old slugs → new mystical doors (SEO / bookmarks). */
export const DOOR_SLUG_REDIRECTS: Record<string, DoorSlug> = {
  metaphysics: "worlds-beyond",
  mysticism: "seven-valleys",
  family: "self-knowledge",
  arts: "sacred-arts",
  society: "spiritualizing-world",
  "science-religion": "cosmic-harmony",
  devotional: "dreams-intuition",
  "seekers-path": "self-knowledge",
  scholars: "seven-valleys",
};
