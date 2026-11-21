import type { DoorSlug } from "./doors";
import { HIDDEN_WORDS, type HiddenWord } from "./hidden-words";

export type DoorSource = { label: string; url: string };

export type DoorLocaleContent = {
  quote: string;
  citation: string;
  articleTitle: string;
  /** Multi-paragraph essay body */
  articleParagraphs: string[];
  sources: DoorSource[];
};

export type DoorChamber = {
  en: DoorLocaleContent;
  fa: DoorLocaleContent;
  image: string;
  imageAlt: { en: string; sv: string; fa: string };
  /** CSS object-position for banner crop (e.g. "center top") */
  imagePosition?: string;
};

/** Persian Hidden Word number for each mystical door. */
export const DOOR_HIDDEN_WORD: Record<DoorSlug, number> = {
  "worlds-beyond": 2, // eternal nest / soul’s journey
  "self-knowledge": 72, // sword in sheath — know thy worth
  "seven-valleys": 1, // mystic nightingale
  "sacred-symbols": 9, // eye of truth / Beauty
  "dreams-intuition": 32, // candle of the heart / remembrance
  "cosmic-harmony": 33, // seeds of wisdom & knowledge
  "sacred-arts": 16, // mystic tongues / melody
  "love-alchemy": 3, // rose of love
  "spiritualizing-world": 76, // guidance by deeds
};

/** Scholars page opening Word (service & fruit) — not a door. */
export const SCHOLARS_HIDDEN_WORD = 80;

function hwByNumber(n: number): HiddenWord {
  const w = HIDDEN_WORDS.find((h) => h.number === n);
  if (!w) throw new Error(`Hidden Word Persian №${n} not found`);
  return w;
}

function citations(n: number) {
  return {
    en: `Bahá’u’lláh, The Hidden Words (Persian), №${n}`,
    fa: `حضرت بهاءالله، کلمات مکنونهٔ فارسی، شمارهٔ ${n}`,
  };
}

type ArticleBundle = {
  en: { title: string; paragraphs: string[]; sources: DoorSource[] };
  fa: { title: string; paragraphs: string[]; sources: DoorSource[] };
  image: string;
  imageAlt: { en: string; sv: string; fa: string };
  imagePosition?: string;
};

const BRL = "https://www.bahai.org/library";
const BAHAI = "https://www.bahai.org";
const GLEANINGS = `${BRL}/authoritative-texts/bahaullah/gleanings-writings-bahaullah/`;

/** BahaiTeachings.org & research links on cosmos / extraterrestrial life (commentary unless noted). */
const COSMOS_LINKS = {
  btSomethingElse: "https://bahaiteachings.org/is-there-something-else-out-there/",
  btCaseLife: "https://bahaiteachings.org/case-life-beyond-earth/",
  btScienceSpace: "https://bahaiteachings.org/science-space-spirituality/",
  btUfoThreat: "https://bahaiteachings.org/why-do-we-see-ufos-threat/",
  btLifePlanets: "https://bahaiteachings.org/bahai-writings-life-planets/",
  btEveryPlanet: "https://bahaiteachings.org/every-planet-its-own-creatures/",
  bahaipediaET: "https://bahaipedia.org/Extraterrestrial_life",
  libraryET: "https://bahai-library.com/compilation_extraterrestrial_life/",
  libraryUniverse: "https://bahai-library.com/jones_bahai_teachings_universe",
  libraryTroxel: "https://bahai-library.com/troxel_extraterrestrials_exotheology",
  babCosmology: "https://www.obeisancebaha.org/cosmology-of-the-bab/",
} as const;

const COSMOS_SOURCES_EN: DoorSource[] = [
  {
    label:
      "Mateen Taghizadeh, “Is There Something Else Out There?,” BahaiTeachings.org (commentary)",
    url: COSMOS_LINKS.btSomethingElse,
  },
  {
    label:
      "David Langness, “The Case for Life Beyond Earth,” BahaiTeachings.org (commentary)",
    url: COSMOS_LINKS.btCaseLife,
  },
  {
    label:
      "“Science, Space and Spirituality,” BahaiTeachings.org (commentary)",
    url: COSMOS_LINKS.btScienceSpace,
  },
  {
    label:
      "Susan Gammage, “Why Do We See UFOs as a Threat?,” BahaiTeachings.org (commentary)",
    url: COSMOS_LINKS.btUfoThreat,
  },
  {
    label:
      "Sagar Bhatia, “What the Bahá’í Writings Say About Life On Other Planets,” BahaiTeachings.org (commentary)",
    url: COSMOS_LINKS.btLifePlanets,
  },
  {
    label:
      "“Every Planet its Own Creatures,” BahaiTeachings.org (commentary)",
    url: COSMOS_LINKS.btEveryPlanet,
  },
  {
    label: "Extraterrestrial life — Bahaipedia (encyclopedia survey of quotes)",
    url: COSMOS_LINKS.bahaipediaET,
  },
  {
    label:
      "Extraterrestrial Life — Bahá’í Library compilation (Troxel)",
    url: COSMOS_LINKS.libraryET,
  },
  {
    label:
      "Ernie Jones (comp.), Bahá’í Teachings on The Universe — Bahá’í Library",
    url: COSMOS_LINKS.libraryUniverse,
  },
  {
    label:
      "Duane Troxel, Intelligent Life in the Universe & Exotheology — Bahá’í Library",
    url: COSMOS_LINKS.libraryTroxel,
  },
  {
    label: "Cosmology of the Báb — ObeisanceBaha (essay)",
    url: COSMOS_LINKS.babCosmology,
  },
];

const COSMOS_SOURCES_FA: DoorSource[] = [
  {
    label:
      "متین تقی‌زاده، «آیا چیزی دیگر آن‌جا هست؟»، BahaiTeachings.org (تفسیر شخصی)",
    url: COSMOS_LINKS.btSomethingElse,
  },
  {
    label:
      "دیوید لانگنس، «دلیل حیات فراتر از زمین»، BahaiTeachings.org (تفسیر شخصی)",
    url: COSMOS_LINKS.btCaseLife,
  },
  {
    label: "«علم، فضا و روحانیت»، BahaiTeachings.org (تفسیر شخصی)",
    url: COSMOS_LINKS.btScienceSpace,
  },
  {
    label:
      "سوزان گَمِج، «چرا یوفوها را تهدید می‌بینیم؟»، BahaiTeachings.org (تفسیر شخصی)",
    url: COSMOS_LINKS.btUfoThreat,
  },
  {
    label:
      "ساگار باتیا، «آثار بهائی دربارهٔ حیات در سیارات دیگر»، BahaiTeachings.org (تفسیر شخصی)",
    url: COSMOS_LINKS.btLifePlanets,
  },
  {
    label: "«هر سیاره مخلوقات خود را دارد»، BahaiTeachings.org (تفسیر شخصی)",
    url: COSMOS_LINKS.btEveryPlanet,
  },
  {
    label: "حیات فرازمینی — Bahaipedia (گردآوری نقل‌قول‌های معتبر)",
    url: COSMOS_LINKS.bahaipediaET,
  },
  {
    label: "حیات فرازمینی — مجموعهٔ Bahá’í Library (تروکسل)",
    url: COSMOS_LINKS.libraryET,
  },
  {
    label: "ارنی جونز، تعالیم بهائی دربارهٔ کیهان — Bahá’í Library",
    url: COSMOS_LINKS.libraryUniverse,
  },
  {
    label: "دوئین تروکسل، حیات هوشمند در کیهان و الهیات فرازمینی — Bahá’í Library",
    url: COSMOS_LINKS.libraryTroxel,
  },
  {
    label: "کیهان‌شناسی حضرت باب — ObeisanceBaha (مقاله)",
    url: COSMOS_LINKS.babCosmology,
  },
];

/** Per-door BahaiTeachings.org essays (commentary) mapped to the Nine Doors. */
function btSrc(enTitle: string, faTitle: string, url: string): {
  en: DoorSource;
  fa: DoorSource;
} {
  return {
    en: {
      label: `${enTitle}, BahaiTeachings.org (commentary)`,
      url,
    },
    fa: {
      label: `${faTitle}، BahaiTeachings.org (تفسیر شخصی)`,
      url,
    },
  };
}

const DOOR_BT = {
  "worlds-beyond": [
    btSrc(
      "“The Immortal Soul and the Afterlife”",
      "«روح جاودان و حیات پس از مرگ»",
      "https://bahaiteachings.org/immortal-soul-and-afterlife/"
    ),
    btSrc(
      "“The Hidden Nature of Life After Death”",
      "«ماهیت پنهان حیات پس از مرگ»",
      "https://bahaiteachings.org/hidden-nature-life-after-death/"
    ),
  ],
  "self-knowledge": [
    btSrc(
      "Makeena Rivers, “Seeking Self-Knowledge”",
      "مکینا ریورز، «در طلب خودشناسی»",
      "https://bahaiteachings.org/seeking-self-knowledge/"
    ),
    btSrc(
      "“What Is Self-Reflection and Why Is it Important?”",
      "«خوداندیشی چیست و چرا مهم است؟»",
      "https://bahaiteachings.org/what-is-self-reflection-why-important/"
    ),
  ],
  "seven-valleys": [
    btSrc(
      "“Baha’u’llah’s Seven Valleys: the Mystical Journey Towards the Light”",
      "«هفت وادی حضرت بهاءالله: سفر عرفانی به‌سوی نور»",
      "https://bahaiteachings.org/bahaullahs-seven-valleys-mystical-journey-light/"
    ),
    btSrc(
      "“Seven Valleys of Spiritual Growth and Development”",
      "«هفت وادی رشد و تکامل روحانی»",
      "https://bahaiteachings.org/seven-valleys-spiritual-growth-development/"
    ),
  ],
  "sacred-symbols": [
    btSrc(
      "“What Do the Baha’i Symbols Mean?”",
      "«نمادهای بهائی چه معنایی دارند؟»",
      "https://bahaiteachings.org/what-do-the-bahai-symbols-mean/"
    ),
    btSrc(
      "“How to Understand the Spiritual Symbols in Divine Scriptures”",
      "«چگونه نمادهای روحانی کتب آسمانی را بفهمیم»",
      "https://bahaiteachings.org/seeing-nature-and-the-world-symbolically/"
    ),
  ],
  "dreams-intuition": [
    btSrc(
      "“Dreams and Visions of the Soul”",
      "«رؤیاها و مکاشفات روح»",
      "https://bahaiteachings.org/dreams-and-visions-of-the-soul/"
    ),
    btSrc(
      "“Exploring the Deep Mystery of Sleep and Dreams”",
      "«کاوش راز ژرف خواب و رؤیا»",
      "https://bahaiteachings.org/exploring-the-deep-mystery-of-sleep-and-dreams/"
    ),
  ],
  "sacred-arts": [
    btSrc(
      "“Drawing on the Spiritual Power of the Arts”",
      "«بهره‌گیری از نیروی روحانی هنرها»",
      "https://bahaiteachings.org/drawing-on-the-spiritual-power-of-the-arts/"
    ),
    btSrc(
      "Mike Solomon, “Why We Need Artists to Perfect Civilization”",
      "مایک سولومون، «چرا برای کمال تمدن به هنرمندان نیاز داریم»",
      "https://bahaiteachings.org/why-we-need-artists-to-perfect-civilization/"
    ),
  ],
  "love-alchemy": [
    btSrc(
      "Radiance Talley, “Defining the 4 Different Types of Love”",
      "رِیدیِنس تَلی، «تعریف چهار گونهٔ محبت»",
      "https://bahaiteachings.org/defining-four-different-types-of-love/"
    ),
  ],
  "spiritualizing-world": [
    btSrc(
      "“The Eternal Rule: Concentrating Our Hearts on Love and Unity”",
      "«قانون ابدی: تمرکز قلوب بر عشق و وحدت»",
      "https://bahaiteachings.org/eternal-rule-concentrating-our-hearts-on-love-and-unity/"
    ),
  ],
} as const;

function doorBtEn(slug: keyof typeof DOOR_BT): DoorSource[] {
  return DOOR_BT[slug].map((s) => s.en);
}
function doorBtFa(slug: keyof typeof DOOR_BT): DoorSource[] {
  return DOOR_BT[slug].map((s) => s.fa);
}

const ARTICLES: Record<DoorSlug, ArticleBundle> = {
  "worlds-beyond": {
    image: "/images/doors/worlds-beyond-v3.jpg",
    imagePosition: "center top",
    imageAlt: {
      en: "Soul ascending toward the nine-pointed star — beyond the veil",
      sv: "Själen stiger mot den niouddiga stjärnan — bortom slöjan",
      fa: "عروج روح به‌سوی ستارهٔ نه‌پر — آن‌سوی پرده",
    },
    en: {
      title: "Beyond the Veil: Malakút and the Soul’s Eternal Flight",
      paragraphs: [
        "In the Bahá’í Writings, physical life is likened to an embryonic stage. The soul—immortal, conscious, and capable of endless progress—continues after the body’s dissolution toward the presence of God. Bahá’u’lláh teaches that this ascent is neither extinguished by death nor frozen in a static heaven; rather, the soul advances through infinite worlds of God (‘Álam-i-Malakút and beyond) according to its capacity, deeds, and divine grace.",
        "‘Abdu’l-Bahá explains that faculties cultivated here—love, justice, detachment, and knowledge—become the wings of that journey. Just as eyes and ears form in the womb for a world the child has not yet entered, spiritual virtues prepare the soul for realms the senses cannot measure. The “veil” is not a wall of fear, but the limit of material perception; prayer, meditation, and service thin that veil while we yet walk the earth.",
        "Those same Writings open a still wider horizon of creation. Bahá’u’lláh affirms that every fixed star hath its own planets, and every planet its own creatures, whose number no man can compute—a vision of inhabited worlds throughout the cosmos, inviting awe rather than idle speculation. Shoghi Effendi notes that the nature of those creatures remains for science to discover; ‘Abdu’l-Bahá affirms other worlds inhabited by beings capable of knowing God. The soul’s journey, then, unfolds within a universe already teeming with divine purpose beyond Earth alone.",
        "This door invites contemplation of the architecture of the unseen: progressive revelation as light upon light, the continuity of consciousness, reunion with the Beloved, and the solemn joy of knowing that no sincere aspiration is lost. Death, in this vision, is a birth into wider awareness—an opening, not an end. For further study, see the encyclopedia and research sources listed below.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, Gleanings — every star its planets, every planet its creatures",
          url: GLEANINGS,
        },
        {
          label: "‘Abdu’l-Bahá, Some Answered Questions — immortality of the spirit",
          url: `${BRL}/authoritative-texts/abdul-baha/some-answered-questions/`,
        },
        {
          label: "Bahá’í Reference Library — Life, Death and the Soul",
          url: `${BAHAI}/beliefs/life-spirit/human-soul/`,
        },
        ...COSMOS_SOURCES_EN,
        ...doorBtEn("worlds-beyond"),
      ],
    },
    fa: {
      title: "آن‌سوی پرده: ملکوت و پرواز جاودان روح",
      paragraphs: [
        "در آثار بهائی، حیات جسمانی چون دوران جنینی توصیف شده است. روح—جاودان، آگاه و توانا به ترقی بی‌پایان—پس از انحلال جسم به‌سوی حضور الهی ادامه می‌یابد. حضرت بهاءالله می‌فرمایند این عروج با مرگ خاموش نمی‌شود و در بهشتی ایستا منجمد نمی‌گردد؛ بلکه روح بر وفق استعداد، اعمال و فضل الهی در عوالم بی‌کران خداوند (عالم ملکوت و فراتر) سیر می‌کند.",
        "حضرت عبدالبهاء تبیین می‌فرمایند که فضایل پروریده‌شده در این عالم—عشق، عدالت، انقطاع و معرفت—بال‌های آن سفرند. همان‌گونه که چشم و گوش در رحم برای جهانی شکل می‌گیرند که هنوز درک نشده، فضایل روحانی روح را برای اقالیمی آماده می‌کنند که حواس ظاهری اندازه نمی‌گیرند. «پرده» دیوار بیم نیست، بلکه حد ادراک مادی است؛ دعا، مراقبه و خدمت این پرده را در همین جهان نازک می‌سازند.",
        "همان آثار افقی وسیع‌تر از خلقت می‌گشایند. حضرت بهاءالله می‌فرمایند هر ستارهٔ ثابتی سیارات خود را دارد و هر سیاره‌ای مخلوقات خود را—که شمارهٔ آنان را هیچ انسانی نمی‌تواند شمرد. حضرت شوقی افندی می‌فرمایند ماهیت این مخلوقات را علم روزی کشف خواهد کرد؛ و حضرت عبدالبهاء از عوالمی سخن می‌گویند که باشندگانی قادر به عرفان حق در آن‌ها ساکن‌اند. سفر روح در کیهانی است که مقصود الهی‌اش به زمین محدود نیست.",
        "این دروازه به تأمل در هندسهٔ غیب فرامی‌خواند: ظهور تدریجی چون نور علی نور، پیوستگی آگاهی، وصال محبوب، و شادی سنگین این یقین که هیچ آرزوی صادقی تباه نمی‌شود. مرگ در این نگاه، تولدی در آگاهی وسیع‌تر است—گشایش، نه پایان. برای مطالعهٔ بیشتر، منابع پژوهشی زیر را ببینید.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، منتخباتی از آثار — هر ستاره سیارات و هر سیاره مخلوقات دارد",
          url: GLEANINGS,
        },
        {
          label: "حضرت عبدالبهاء، مفاوضات — بقای روح",
          url: `${BRL}/authoritative-texts/abdul-baha/some-answered-questions/`,
        },
        {
          label: "کتابخانهٔ مرجع بهائی — روح انسانی",
          url: `${BAHAI}/beliefs/life-spirit/human-soul/`,
        },
        ...COSMOS_SOURCES_FA,
        ...doorBtFa("worlds-beyond"),
      ],
    },
  },

  "self-knowledge": {
    image: "/images/doors/self-knowledge.jpg",
    imageAlt: {
      en: "Tree of inner light — knowing the self before God",
      sv: "Det inre ljusets träd — att känna sig själv inför Gud",
      fa: "درخت نور درون — خودشناسی در پیشگاه حق",
    },
    en: {
      title: "Know Thyself: The Mine of Gems Within",
      paragraphs: [
        "A well-known Islamic tradition treasured in Bahá’í discourse affirms: “He who knoweth his own self hath known his Lord.” Bahá’u’lláh repeatedly turns the seeker inward—not toward ego, but toward the noble essence deposited in every human being. The soul is described as a mine rich in gems of inestimable value; education and spiritual discipline exist to bring those gems to light.",
        "Self-knowledge in the Bahá’í sense is neither narcissism nor withdrawal. It is recognition of one’s station as a conscious mirror of divine attributes—and honesty about the veils of desire, prejudice, and heedlessness that cloud that mirror. The Kitáb-i-Íqán and the Hidden Words urge cleansing of the heart so that the light of guidance may appear.",
        "This door gathers practices of reflection: examining motives, consulting conscience, reading the Sacred Writings as a mirror held to the soul, and walking the path of independent investigation of truth. To know oneself truly is to discover both humility before God and the creative power entrusted to every human spirit.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, The Hidden Words",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "Bahá’u’lláh, The Kitáb-i-Íqán",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-iqan/`,
        },
        {
          label: "‘Abdu’l-Bahá on education and the human soul as a mine of gems",
          url: `${BAHAI}/beliefs/life-spirit/human-soul/`,
        },
        {
          label: "Cosmology of the Báb — consciousness, self-knowledge, and cosmos (essay)",
          url: COSMOS_LINKS.babCosmology,
        },
        {
          label: "Ernie Jones (comp.), Bahá’í Teachings on The Universe — Bahá’í Library",
          url: COSMOS_LINKS.libraryUniverse,
        },
        ...doorBtEn("self-knowledge"),
      ],
    },
    fa: {
      title: "خود را بشناس: معدن جواهر درون",
      paragraphs: [
        "حدیث شریف «مَن عَرَفَ نَفسَهُ فَقَد عَرَفَ رَبَّه» در گفتمان بهائی گرامی داشته شده است. حضرت بهاءالله بارها جوینده را به‌سوی باطن می‌خوانند—نه به‌سوی نفس اماره، بلکه به‌سوی جوهر شریفی که در هر انسان به ودیعه نهاده شده. روح چون معدنی سرشار از جواهر بی‌بها وصف شده؛ تربیت و سلوک برای آشکار ساختن آن گوهرهاست.",
        "خودشناسی در معنای بهائی نه خودشیفتگی است و نه گوشه‌نشینی. شناخت مقام انسان به‌مثابه آیینهٔ صفات الهی است—و صداقت دربارهٔ پرده‌های هوی، تعصب و غفلت که این آیینه را تیره می‌کند. کتاب ایقان و کلمات مکنونه به تطهیر قلب فرامی‌خوانند تا نور هدایت پدیدار شود.",
        "این دروازه تمرین‌های تأمل را گرد می‌آورد: بررسی نیت‌ها، مشورت با وجدان، خواندن آثار مبارکه چون آیینه‌ای برابر روح، و گام نهادن در تحری حقیقت. خود را به راستی شناختن، هم فروتنی در برابر خداست و هم کشف نیروی خلاقی که به هر روح انسانی سپرده شده است.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، کلمات مکنونه",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "حضرت بهاءالله، کتاب ایقان",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-iqan/`,
        },
        {
          label: "حضرت عبدالبهاء — روح انسانی معدن جواهر",
          url: `${BAHAI}/beliefs/life-spirit/human-soul/`,
        },
        {
          label: "کیهان‌شناسی حضرت باب — آگاهی، خودشناسی و کیهان (مقاله)",
          url: COSMOS_LINKS.babCosmology,
        },
        {
          label: "ارنی جونز، تعالیم بهائی دربارهٔ کیهان — Bahá’í Library",
          url: COSMOS_LINKS.libraryUniverse,
        },
        ...doorBtFa("self-knowledge"),
      ],
    },
  },

  "seven-valleys": {
    image: "/images/doors/seven-valleys.jpg",
    imagePosition: "center top",
    imageAlt: {
      en: "Spiral path of light rising to a nine-pointed star — the Seven Valleys",
      sv: "Ljusspiral mot en niouddig stjärna — de sju dalarna",
      fa: "مسیر مارپیچ نور تا ستارهٔ نه‌پر — هفت وادی",
    },
    en: {
      title: "Haft-Vádí: A Map of Mystical Transformation",
      paragraphs: [
        "Revealed by Bahá’u’lláh in Baghdad, The Seven Valleys (Haft-Vádí) traces the inner path of the seeker through Search, Love, Knowledge, Unity, Contentment, Wonderment, and True Poverty and Absolute Nothingness. It stands among the most luminous mystical tablets of the Faith—speaking the language of Persian Sufi heritage while disclosing a new horizon of divine love.",
        "Unlike paths that demand flight from the world, Bahá’u’lláh shows that the true journey unfolds in the heart. Ego dissolves in love; every atom reflects the Beloved; stations of wonder and poverty free the soul from attachment without extinguishing service to humanity. The companion tablet, The Four Valleys, further explores modes of approach to the Divine.",
        "This door is for those who wish to walk the valleys with both intellect and heart—reading slowly, praying deeply, and allowing each station to reshape daily life: how we love, how we know, how we release, and how we serve.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, The Seven Valleys and The Four Valleys",
          url: `${BRL}/authoritative-texts/bahaullah/seven-valleys-four-valleys/`,
        },
        {
          label: "Bahá’í Reference Library — Mysticism and the Spiritual Journey",
          url: `${BAHAI}/beliefs/god-his-creation/revelation/`,
        },
        ...doorBtEn("seven-valleys"),
      ],
    },
    fa: {
      title: "هفت وادی: نقشهٔ تحول عرفانی",
      paragraphs: [
        "کتاب «هفت وادی» که در بغداد از قلم حضرت بهاءالله نازل شد، سیر درونی سالک را در وادی‌های طلب، عشق، معرفت، توحید، استغنا، حیرت و فقر حقیقی و فنا ترسیم می‌کند. این لوح از درخشان‌ترین آثار عرفانی آیین است—به زبان میراث تصوف فارسی سخن می‌گوید و افقی نو از عشق الهی می‌گشاید.",
        "برخلاف راه‌هایی که گریز از دنیا می‌طلبند، حضرت بهاءالله نشان می‌دهند که سفر حقیقی در قلب رخ می‌دهد. نفس در عشق ذوب می‌شود؛ هر ذره آیینه‌دار محبوب است؛ منازل حیرت و فقر روح را از تعلق آزاد می‌کنند بی‌آنکه خدمت به عالم انسانی خاموش شود. لوح همراه، چهار وادی، شیوه‌های تقرب به حق را بیش‌تر می‌گشاید.",
        "این دروازه برای کسانی است که می‌خواهند با خرد و قلب در وادی‌ها گام بردارند—آهسته بخوانند، ژرف دعا کنند، و بگذارند هر منزل زندگی روزانه را بازسازد: چگونه عشق می‌ورزیم، چگونه می‌دانیم، چگونه رها می‌کنیم و چگونه خدمت می‌کنیم.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، هفت وادی و چهار وادی",
          url: `${BRL}/authoritative-texts/bahaullah/seven-valleys-four-valleys/`,
        },
        {
          label: "کتابخانهٔ مرجع بهائی — عرفان و سیر روحانی",
          url: `${BAHAI}/beliefs/god-his-creation/revelation/`,
        },
        ...doorBtFa("seven-valleys"),
      ],
    },
  },

  "sacred-symbols": {
    image: "/images/doors/sacred-symbols-v4.jpg",
    imageAlt: {
      en: "Galaxy of geometry and number — sacred signs in cosmic order",
      sv: "Galax av geometri och tal — heliga tecken i kosmisk ordning",
      fa: "کهکشان هندسه و عدد — رموز قدسی در نظم کیهانی",
    },
    en: {
      title: "The Greatest Name, the Number Nine, and Hidden Allusions",
      paragraphs: [
        "Bahá’í sacred culture is rich in symbols that point beyond themselves. The nine-pointed star and nine-sided Houses of Worship echo the numerical value associated with “Bahá” and the completeness of a new cycle. Calligraphic forms of the Greatest Name (Yá Bahá’u’l-Abhá and related invocations) concentrate remembrance into visible beauty.",
        "The Writings themselves unfold layers of meaning—letters, numbers, and metaphors that reward patient study. Bahá’u’lláh and the Báb employ the language of signs without reducing faith to occult speculation; symbolism serves recognition of God, unity of humanity, and the dawning of a world civilization.",
        "This door explores how form becomes prayer: architecture, calligraphy, and sacred number as companions to contemplation—always subordinate to the spirit of the Writings and never a substitute for justice, love, and independent investigation of truth.",
      ],
      sources: [
        {
          label: "Bahá’í World — Houses of Worship and sacred architecture",
          url: `${BAHAI}/action/houses-worship/`,
        },
        {
          label: "Bahá’u’lláh, The Kitáb-i-Aqdas and Notes (on symbols and ordinances)",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-aqdas/`,
        },
        {
          label: "The Greatest Name — Bahá’í Reference Library / teachings",
          url: `${BAHAI}/beliefs/god-his-creation/revelation/`,
        },
        ...doorBtEn("sacred-symbols"),
      ],
    },
    fa: {
      title: "اسم اعظم، عدد نُه و اشارات باطنی",
      paragraphs: [
        "فرهنگ قدسی بهائی از رموزی سرشار است که فراتر از ظاهر خویش اشاره می‌کنند. ستارهٔ نُه‌پر و مشارق‌الاذکار نُه‌ضلعی با ارزش عددی مرتبط با «بهاء» و کمال دور جدید هم‌صداست. صورت‌های خوشنویسی اسم اعظم (یا بهاءالابهی و اذکار وابسته) ذکر را به زیبایی مرئی بدل می‌کنند.",
        "خود آثار مبارکه لایه‌های معنا می‌گشایند—حروف، اعداد و استعاراتی که مطالعهٔ صبورانه را پاداش می‌دهند. حضرت بهاءالله و حضرت باب زبان آیات را به‌کار می‌برند بی‌آنکه ایمان به گمانه‌زنی‌های غیبی فروکاسته شود؛ رمز در خدمت عرفان حق، وحدت بشر و طلوع تمدن جهانی است.",
        "این دروازه می‌کاود که چگونه صورت به دعا بدل می‌شود: معماری، خوشنویسی و عدد قدسی به‌مثابه همراهان تأمل—همواره تابع روح آثار، و هرگز جایگزین عدالت، عشق و تحری حقیقت نیستند.",
      ],
      sources: [
        {
          label: "مشارق‌الاذکار و معماری قدسی — bahai.org",
          url: `${BAHAI}/action/houses-worship/`,
        },
        {
          label: "حضرت بهاءالله، کتاب اقدس و حواشی",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-aqdas/`,
        },
        ...doorBtFa("sacred-symbols"),
      ],
    },
  },

  "dreams-intuition": {
    image: "/images/doors/dreams-intuition.jpg",
    imageAlt: {
      en: "Dreaming face among clouds and light — dreams and subtle intuition",
      sv: "Drömmande ansikte bland moln och ljus — drömmar och subtil intuition",
      fa: "چهره در رؤیا میان ابر و نور — رؤیا و شهود لطیف",
    },
    en: {
      title: "True Dreams, the Heart’s Lamp, and Subtle Guidance",
      paragraphs: [
        "Bahá’í Writings acknowledge that the soul may receive impressions beyond waking reason—true dreams, intuitions, and confirmations that accompany sincere prayer. ‘Abdu’l-Bahá distinguishes wholesome spiritual perception from superstition and idle fancy; the measure is coherence with the revealed Word, reason, and moral fruit.",
        "Bahá’u’lláh’s Hidden Words speak of the candle of the heart lit by divine power and healed by remembrance. Contemplative practice—morning prayer, meditation on the Writings, stillness before sleep—tunes inner hearing. Yet no private vision outweighs the Covenant, consultation, or justice owed to others.",
        "This door offers a calm space to honor subtle signs without fear or obsession: keeping a dream journal beside the Sacred Text, testing inspirations in the light of unity, and letting intuition mature into trustworthy service.",
      ],
      sources: [
        {
          label: "‘Abdu’l-Bahá, Some Answered Questions — dreams and visions",
          url: `${BRL}/authoritative-texts/abdul-baha/some-answered-questions/`,
        },
        {
          label: "Bahá’u’lláh, The Hidden Words",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "Prayer and meditation — bahai.org",
          url: `${BAHAI}/beliefs/life-spirit/devotion/`,
        },
        ...doorBtEn("dreams-intuition"),
      ],
    },
    fa: {
      title: "خواب‌های صادقه، شمع دل و هدایت لطیف",
      paragraphs: [
        "آثار بهائی می‌پذیرند که روح ممکن است فراتر از عقل بیداری، تأثیراتی دریافت کند—خواب‌های صادقه، الهامات و تأییداتی که با دعای خالص همراهند. حضرت عبدالبهاء ادراک روحانی سالم را از خرافات و اوهام جدا می‌سازند؛ معیار، هماهنگی با کلام منزل، عقل و ثمر اخلاقی است.",
        "کلمات مکنونه از شمع دل سخن می‌گوید که به دست قدرت الهی افروخته و به ذکر شفا می‌یابد. عمل عبادی—نماز صبح، تأمل در آثار، سکوت پیش از خواب—شنوایی باطن را تنظیم می‌کند. با این‌همه هیچ رؤیای خصوصی بر عهد و میثاق، مشورت یا عدالت نسبت به دیگران چیره نیست.",
        "این دروازه فضایی آرام برای حرمت نشانه‌های لطیف می‌گشاید—بی‌بیم و بی‌وسواس: دفتر رؤیا کنار کتاب مقدس، آزمودن الهامات در پرتو وحدت، و رشد شهود به‌سوی خدمتی قابل اعتماد.",
      ],
      sources: [
        {
          label: "حضرت عبدالبهاء، مفاوضات — خواب و رؤیا",
          url: `${BRL}/authoritative-texts/abdul-baha/some-answered-questions/`,
        },
        {
          label: "حضرت بهاءالله، کلمات مکنونه",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        ...doorBtFa("dreams-intuition"),
      ],
    },
  },

  "cosmic-harmony": {
    image: "/images/doors/cosmic-harmony.jpg",
    imageAlt: {
      en: "Meditation, DNA of light, and nine-pointed star — science with spirit",
      sv: "Meditation, ljusets DNA och niouddig stjärna — vetenskap med ande",
      fa: "مراقبه، دی‌ان‌ای نور و ستارهٔ نه‌پر — علم در کنار روح",
    },
    en: {
      title: "Two Wings: Reason, Revelation, and Conscious Cosmos",
      paragraphs: [
        "‘Abdu’l-Bahá famously teaches that science and religion are as two wings of one bird—both required for ascent. Bahá’í cosmology affirms a universe of purpose: progressive revelation, the essential harmony of truth, and a human consciousness capable of knowing both material law and spiritual meaning.",
        "Far from opposing empirical inquiry, the Writings celebrate knowledge as wings for humanity’s flight. Superstition is rejected; dogma that contradicts demonstrated truth is to be set aside; yet science without spiritual values risks becoming a cold instrument of power. Consciousness itself—self-aware, ethical, creative—bridges laboratory and sanctuary.",
        "That harmony shines when we ask whether life exists beyond Earth. Bahá’u’lláh writes that every fixed star hath its own planets, and every planet its own creatures, whose number no man can compute—words that meet today’s search for exoplanets, astrobiology, and open scientific inquiry into UAPs without fear or superstition. Science advances the evidence; revelation widens the horizon of meaning. Planetary unity on Earth remains the first task; wonder at a living cosmos is its companion.",
        "This door explores that harmony: reading nature as a book of divine signs, studying the cosmos without losing the soul, and cultivating a civilization where technology serves unity, justice, and the flourishing of every people. Analytical essays and research compilations are gathered in the sources below.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, Gleanings — stars, planets, and creatures beyond count",
          url: GLEANINGS,
        },
        {
          label: "‘Abdu’l-Bahá, Paris Talks — science and religion",
          url: `${BRL}/authoritative-texts/abdul-baha/paris-talks/`,
        },
        {
          label: "Harmony of science and religion — bahai.org",
          url: `${BAHAI}/beliefs/god-his-creation/nature/`,
        },
        ...COSMOS_SOURCES_EN,
      ],
    },
    fa: {
      title: "دو بال: عقل، وحی و کیهان آگاه",
      paragraphs: [
        "حضرت عبدالبهاء می‌فرمایند علم و دین چون دو بال یک پرنده‌اند—هر دو برای عروج لازم است. کیهان‌شناسی بهائی جهانی هدفمند را تصدیق می‌کند: ظهور تدریجی، هماهنگی ذاتی حقیقت، و آگاهی انسانی که هم قانون مادی و هم معنای روحانی را می‌تواند شناخت.",
        "آثار مبارکه نه‌تنها با پژوهش تجربی مخالف نیستند، بلکه علم را بال پرواز بشر می‌ستایند. خرافات رد می‌شود؛ جزم مخالف حقیقت مبرهن کنار نهاده می‌شود؛ اما علم بی‌ارزش‌های روحانی خطر ابزار سرد قدرت شدن دارد. خود آگاهی—اخلاقی، خلاق، خودآگاه—آزمایشگاه و حرم را پل می‌زند.",
        "این هماهنگی آن‌گاه می‌درخشد که بپرسیم آیا حیات فراتر از زمین هست. حضرت بهاءالله می‌فرمایند هر ستارهٔ ثابتی سیارات خود و هر سیاره‌ای مخلوقات خود را دارد—کلامی که جستجوی امروزِ سیارات فراخورشیدی، اخترزیست‌شناسی و پژوهش علمی پدیده‌های ناشناختهٔ هوایی را بی‌هراس و بی‌خرافه می‌پذیرد. وحدت سیاره‌ای روی زمین نخستین تکلیف است؛ شگفتی در برابر کیهان زنده، هم‌سفر آن.",
        "این دروازه آن هماهنگی را می‌کاود: خواندن طبیعت چون کتاب آیات، مطالعهٔ کیهان بی‌از‌دست‌دادن روح، و پرورش تمدنی که فناوری در خدمت وحدت، عدالت و شکوفایی همهٔ اقوام باشد. مقالات تحلیلی و منابع پژوهشی در فهرست زیر آمده است.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، منتخباتی از آثار — ستارگان، سیارات و مخلوقات بی‌شمار",
          url: GLEANINGS,
        },
        {
          label: "حضرت عبدالبهاء، خطابات پاریس — علم و دین",
          url: `${BRL}/authoritative-texts/abdul-baha/paris-talks/`,
        },
        {
          label: "هماهنگی علم و دین — bahai.org",
          url: `${BAHAI}/beliefs/god-his-creation/nature/`,
        },
        ...COSMOS_SOURCES_FA,
      ],
    },
  },

  "sacred-arts": {
    image: "/images/doors/sacred-arts.jpg",
    imageAlt: {
      en: "Cosmic mind of music, calligraphy, and light — sacred arts",
      sv: "Kosmiskt sinne av musik, kalligrafi och ljus — sakrala konster",
      fa: "ذهن کیهانیِ موسیقی و خط و نور — هنر قدسی",
    },
    en: {
      title: "Melody, Form, and the Ladder of Ascent",
      paragraphs: [
        "Bahá’u’lláh elevates arts, crafts, and sciences as means of exalting the world of being. Music, when purified of passion that degrades the soul, can draw hearts toward prayer; calligraphy renders the Word visible; architecture of the Mashriqu’l-Adhkár gathers humanity under one luminous roof.",
        "‘Abdu’l-Bahá and Shoghi Effendi encouraged beauty in worship and culture without reducing devotion to spectacle. Sacred art in the Bahá’í view is not ornament for leisure alone—it is a language of the spirit, translating the ineffable into forms every soul can approach.",
        "This door listens for the nightingale of meaning in melody and silence alike: how creators serve as channels, how audiences become co-worshippers, and how beauty, wedded to truth, becomes a ladder for the soul’s ascent.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, Epistle to the Son of the Wolf — arts and sciences",
          url: `${BRL}/authoritative-texts/bahaullah/epistle-son-wolf/`,
        },
        {
          label: "Houses of Worship — architecture of unity",
          url: `${BAHAI}/action/houses-worship/`,
        },
        ...doorBtEn("sacred-arts"),
      ],
    },
    fa: {
      title: "نغمه، صورت و نردبان عروج",
      paragraphs: [
        "حضرت بهاءالله صنایع و علوم را سبب علوّ عالم وجود می‌دانند. موسیقی، چون از هوایی که روح را پست می‌کند پاک شود، قلوب را به‌سوی دعا می‌کشد؛ خوشنویسی کلام را مرئی می‌سازد؛ معماری مشرق‌الاذکار بشریت را زیر یک سقف نورانی گرد می‌آورد.",
        "حضرت عبدالبهاء و حضرت شوقی افندی زیبایی در عبادت و فرهنگ را تشویق فرمودند بی‌آنکه عبادت به تماشا فروکاسته شود. هنر قدسی در نگاه بهائی آرایهٔ تفنن تنها نیست—زبانی از روح است که ناگفتنی را به صورتی درمی‌آورد که هر نفسی بتواند نزدیک شود.",
        "این دروازه به بلبل معنا در نغمه و سکوت گوش می‌سپارد: چگونه آفرینندگان مجرا می‌شوند، چگونه مخاطبان هم‌نیایش می‌گردند، و چگونه زیبایی پیوندخورده با حقیقت، نردبان عروج روح می‌شود.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، لوح ابن ذئب — صنایع و علوم",
          url: `${BRL}/authoritative-texts/bahaullah/epistle-son-wolf/`,
        },
        {
          label: "مشارق‌الاذکار — معماری وحدت",
          url: `${BAHAI}/action/houses-worship/`,
        },
        ...doorBtFa("sacred-arts"),
      ],
    },
  },

  "love-alchemy": {
    image: "/images/doors/love-alchemy.jpg",
    imageAlt: {
      en: "Two souls, one heart of light — the alchemy of love",
      sv: "Två själar, ett hjärta av ljus — kärlekens alkemi",
      fa: "دو روح، یک قلب نورانی — کیمیای عشق",
    },
    en: {
      title: "Divine Love: The Fire That Makes and Binds",
      paragraphs: [
        "Love, in the Bahá’í Writings, is not sentiment alone—it is the motive force of creation and the bond among souls. Bahá’u’lláh plants the rose of love in the garden of the heart and warns against fellowship with that which deadens the spirit. Mystical love (‘ishq) and the love of humanity converge: to love God is to love His mirrors among humankind.",
        "The alchemy of love transforms isolation into communion, grief into compassion, and difference into complementary beauty. Marriage, friendship, and community life become laboratories of this alchemy when consultation, equality, and faithfulness prevail.",
        "This door contemplates soul-ties that endure beyond the veil—prayer for the departed, loyalty to friends, and the creative power of a heart that has chosen love as its treasure.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, The Hidden Words — love and the heart",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "Bahá’u’lláh, The Seven Valleys — Valley of Love",
          url: `${BRL}/authoritative-texts/bahaullah/seven-valleys-four-valleys/`,
        },
        {
          label: "Love and unity — bahai.org",
          url: `${BAHAI}/beliefs/essential-relationships/god/`,
        },
        ...doorBtEn("love-alchemy"),
      ],
    },
    fa: {
      title: "عشق الهی: آتشی که می‌آفریند و پیوند می‌دهد",
      paragraphs: [
        "عشق در آثار بهائی احساس تنها نیست—نیروی محرک آفرینش و پیمان میان نفوس است. حضرت بهاءالله گل عشق را در روضهٔ قلب می‌کارند و از معاشرت آنچه روح را می‌میراند بازمی‌دارند. عشق عرفانی و حب عالم انسانی به هم می‌رسند: دوست داشتن خدا، دوست داشتن آیینه‌های او در میان بشر است.",
        "کیمیای عشق تنهایی را به الفت، اندوه را به شفقت، و تفاوت را به زیبایی مکمل بدل می‌کند. ازدواج، دوستی و حیات جامعه آزمایشگاه این کیمیاست وقتی مشورت، برابری و وفا حاکم باشد.",
        "این دروازه به پیوندهایی می‌اندیشد که از پرده فراتر می‌مانند—دعا برای متصاعدان، وفاداری به دوستان، و نیروی خلاق قلبی که عشق را گنج خویش ساخته است.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، کلمات مکنونه — عشق و قلب",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "حضرت بهاءالله، هفت وادی — وادی عشق",
          url: `${BRL}/authoritative-texts/bahaullah/seven-valleys-four-valleys/`,
        },
        ...doorBtFa("love-alchemy"),
      ],
    },
  },

  "spiritualizing-world": {
    image: "/images/doors/spiritualizing-world.jpg",
    imageAlt: {
      en: "Nine-pointed star uniting heaven, earth, and all beings — living unity",
      sv: "Niouddig stjärna som förenar himmel, jord och alla varelser — levande enhet",
      fa: "ستارهٔ نه‌پر پیوند آسمان و زمین و همهٔ موجودات — وحدت زنده",
    },
    en: {
      title: "From Inner Awakening to a World Remade",
      paragraphs: [
        "Bahá’í mysticism does not end in private ecstasy. Bahá’u’lláh’s revelation unites the transformation of the heart with the rebuilding of society: the oneness of humanity, the equality of women and men, the elimination of extremes of wealth and poverty, universal education, and governance by consultation.",
        "“Guidance hath ever been given by words, and now it is given by deeds,” declare the Hidden Words. Inner ‘irfán that never touches justice remains incomplete. Conversely, social action without spiritual roots withers. The Mashriqu’l-Adhkár itself is conceived as a dawning-place of praise surrounded by dependencies of service—education, healing, and care for the poor.",
        "This door closes the circle of the Nine: how the soul’s journey, self-knowledge, mystical wayfaring, symbols, intuition, cosmic reason, sacred art, and love become a living force that spiritualizes neighborhoods, nations, and the planet—quietly, steadily, and for all. The same ethic of oneness that heals Earth also reshapes how we imagine the unknown beyond it—replacing fear-driven myths with curiosity, justice, and scientific honesty.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, The Hidden Words — deeds",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "Universal House of Justice — letters on social action and community building",
          url: `${BRL}/authoritative-texts/the-universal-house-of-justice/`,
        },
        {
          label: "What Bahá’ís believe — society and oneness",
          url: `${BAHAI}/beliefs/essential-relationships/humanity/`,
        },
        {
          label:
            "Susan Gammage, “Why Do We See UFOs as a Threat?,” BahaiTeachings.org (commentary)",
          url: COSMOS_LINKS.btUfoThreat,
        },
        {
          label:
            "Mateen Taghizadeh, “Is There Something Else Out There?,” BahaiTeachings.org (commentary)",
          url: COSMOS_LINKS.btSomethingElse,
        },
        {
          label: "Extraterrestrial life — Bahaipedia",
          url: COSMOS_LINKS.bahaipediaET,
        },
        ...doorBtEn("spiritualizing-world"),
      ],
    },
    fa: {
      title: "از بیداری درون تا جهان بازساخته",
      paragraphs: [
        "عرفان بهائی در خلسهٔ خصوصی پایان نمی‌یابد. ظهور حضرت بهاءالله تحول قلب را با بنای جامعه پیوند می‌دهد: وحدت نوع انسان، برابری زن و مرد، رفع تضادهای ثروت و فقر، تعليم عمومی، و حکمرانی بر پایهٔ مشورت.",
        "کلمات مکنونه می‌فرماید هدایت پیش‌تر به کلام بود و اکنون به اعمال است. عرفانی که هرگز به عدالت نرسد ناتمام است. در مقابل، کنش اجتماعی بی‌ریشهٔ روحانی پژمرده می‌شود. خود مشرق‌الاذکار طلوع‌گاه ستایشی است که وابسته‌های خدمت—آموزش، شفا و حمایت فقرا—آن را احاطه می‌کنند.",
        "این دروازه دایرهٔ نُه را می‌بندد: چگونه سفر روح، خودشناسی، سلوک، رموز، شهود، خرد کیهانی، هنر قدسی و عشق به نیرویی زنده بدل می‌شوند که محله‌ها، ملت‌ها و کرهٔ زمین را—آرام، پایدار و برای همه—روحانی می‌سازند. همان اخلاق وحدت که زمین را شفا می‌دهد، شیوهٔ رویارویی با ناشناختهٔ کیهانی را نیز از ترس به کنجکاوی، عدالت و صداقت علمی بدل می‌کند.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، کلمات مکنونه — اعمال",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "بیت‌العدل اعظم — نامه‌ها دربارهٔ عمل اجتماعی",
          url: `${BRL}/authoritative-texts/the-universal-house-of-justice/`,
        },
        {
          label: "وحدت نوع انسان — bahai.org",
          url: `${BAHAI}/beliefs/essential-relationships/humanity/`,
        },
        {
          label:
            "سوزان گَمِج، «چرا یوفوها را تهدید می‌بینیم؟»، BahaiTeachings.org (تفسیر شخصی)",
          url: COSMOS_LINKS.btUfoThreat,
        },
        {
          label:
            "متین تقی‌زاده، «آیا چیزی دیگر آن‌جا هست؟»، BahaiTeachings.org (تفسیر شخصی)",
          url: COSMOS_LINKS.btSomethingElse,
        },
        {
          label: "حیات فرازمینی — Bahaipedia",
          url: COSMOS_LINKS.bahaipediaET,
        },
        ...doorBtFa("spiritualizing-world"),
      ],
    },
  },
};

function buildDoor(slug: DoorSlug): DoorChamber {
  const n = DOOR_HIDDEN_WORD[slug];
  const w = hwByNumber(n);
  const c = citations(n);
  const a = ARTICLES[slug];
  return {
    image: a.image,
    imageAlt: a.imageAlt,
    imagePosition: a.imagePosition,
    en: {
      quote: w.en,
      citation: c.en,
      articleTitle: a.en.title,
      articleParagraphs: a.en.paragraphs,
      sources: a.en.sources,
    },
    fa: {
      quote: w.fa,
      citation: c.fa,
      articleTitle: a.fa.title,
      articleParagraphs: a.fa.paragraphs,
      sources: a.fa.sources,
    },
  };
}

export const DOOR_CONTENT: Record<DoorSlug, DoorChamber> = {
  "worlds-beyond": buildDoor("worlds-beyond"),
  "self-knowledge": buildDoor("self-knowledge"),
  "seven-valleys": buildDoor("seven-valleys"),
  "sacred-symbols": buildDoor("sacred-symbols"),
  "dreams-intuition": buildDoor("dreams-intuition"),
  "cosmic-harmony": buildDoor("cosmic-harmony"),
  "sacred-arts": buildDoor("sacred-arts"),
  "love-alchemy": buildDoor("love-alchemy"),
  "spiritualizing-world": buildDoor("spiritualizing-world"),
};

export function getDoorContent(slug: string): DoorChamber | undefined {
  return DOOR_CONTENT[slug as DoorSlug];
}

export function getScholarsHiddenWord(): HiddenWord {
  return hwByNumber(SCHOLARS_HIDDEN_WORD);
}
