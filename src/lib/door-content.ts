import type { DoorSlug } from "./doors";
import { HIDDEN_WORDS, type HiddenWord } from "./hidden-words";
import {
  getDoorSourceSections,
  type DoorSourceSection,
} from "./door-source-sections";

export type { DoorSourceSection };

export type DoorSource = { label: string; url: string };

export type DoorLocaleContent = {
  quote: string;
  citation: string;
  articleTitle: string;
  /** Multi-paragraph essay body */
  articleParagraphs: string[];
  /** Paraphrased commentary blocks; each ends with a source link */
  sourceSections: DoorSourceSection[];
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

/** Research / encyclopedia links for the Cosmos door (BT essays live in sourceSections). */
const COSMOS_REF_SOURCES_EN: DoorSource[] = [
  {
    label: "Extraterrestrial life — Bahaipedia (encyclopedia survey of quotes)",
    url: "https://bahaipedia.org/Extraterrestrial_life",
  },
  {
    label: "Extraterrestrial Life — Bahá’í Library compilation (Troxel)",
    url: "https://bahai-library.com/compilation_extraterrestrial_life/",
  },
  {
    label: "Ernie Jones (comp.), Bahá’í Teachings on The Universe — Bahá’í Library",
    url: "https://bahai-library.com/jones_bahai_teachings_universe",
  },
  {
    label:
      "Duane Troxel, Intelligent Life in the Universe & Exotheology — Bahá’í Library",
    url: "https://bahai-library.com/troxel_extraterrestrials_exotheology",
  },
  {
    label: "Cosmology of the Báb — ObeisanceBaha (essay)",
    url: "https://www.obeisancebaha.org/cosmology-of-the-bab/",
  },
];

const COSMOS_REF_SOURCES_FA: DoorSource[] = [
  {
    label: "حیات فرازمینی — Bahaipedia (گردآوری نقل‌قول‌های معتبر)",
    url: "https://bahaipedia.org/Extraterrestrial_life",
  },
  {
    label: "حیات فرازمینی — مجموعهٔ Bahá’í Library (تروکسل)",
    url: "https://bahai-library.com/compilation_extraterrestrial_life/",
  },
  {
    label: "ارنی جونز، تعالیم بهائی دربارهٔ کیهان — Bahá’í Library",
    url: "https://bahai-library.com/jones_bahai_teachings_universe",
  },
  {
    label: "دوئین تروکسل، حیات هوشمند در کیهان و الهیات فرازمینی — Bahá’í Library",
    url: "https://bahai-library.com/troxel_extraterrestrials_exotheology",
  },
  {
    label: "کیهان‌شناسی حضرت باب — ObeisanceBaha (مقاله)",
    url: "https://www.obeisancebaha.org/cosmology-of-the-bab/",
  },
];

const BRL = "https://www.bahai.org/library";
const BAHAI = "https://www.bahai.org";
const GLEANINGS = `${BRL}/authoritative-texts/bahaullah/gleanings-writings-bahaullah/`;

/** Authoritative / compilation links for the Arts door (BT essays live in sourceSections). */
const ARTS_REF_SOURCES_EN: DoorSource[] = [
  {
    label:
      "Compilation of Extracts from the Bahá’í Writings on Music — Bahá’í Reference Library",
    url: `${BRL}/authoritative-texts/compilations/music/`,
  },
  {
    label:
      "The Importance of the Arts in Promoting the Faith — Bahá’í Reference Library",
    url: `${BRL}/authoritative-texts/compilations/importance-art/`,
  },
  {
    label:
      "The Institution of the Mashriqu’l-Adhkár — Bahá’í Reference Library",
    url: `${BRL}/authoritative-texts/compilations/institution-mashriqul-adhkar/`,
  },
  {
    label: "Bahá’u’lláh, The Kitáb-i-Aqdas — music as a ladder for the soul (§51)",
    url: `${BRL}/authoritative-texts/bahaullah/kitab-i-aqdas/`,
  },
  {
    label: "Music — Bahá’í Library compilation (UHJ Research Department)",
    url: "https://bahai-library.com/compilation_music",
  },
];

const ARTS_REF_SOURCES_FA: DoorSource[] = [
  {
    label: "مجموعهٔ منتخبات آثار دربارهٔ موسیقی — کتابخانهٔ مرجع بهائی",
    url: `${BRL}/authoritative-texts/compilations/music/`,
  },
  {
    label: "اهمیت هنرها در ترویج امر — کتابخانهٔ مرجع بهائی",
    url: `${BRL}/authoritative-texts/compilations/importance-art/`,
  },
  {
    label: "مؤسسهٔ مشرق‌الاذکار — کتابخانهٔ مرجع بهائی",
    url: `${BRL}/authoritative-texts/compilations/institution-mashriqul-adhkar/`,
  },
  {
    label: "حضرت بهاءالله، کتاب اقدس — موسیقی چون نردبان روح (بند ۵۱)",
    url: `${BRL}/authoritative-texts/bahaullah/kitab-i-aqdas/`,
  },
  {
    label: "موسیقی — مجموعهٔ Bahá’í Library (دپارتمان تحقیق بیت‌العدل)",
    url: "https://bahai-library.com/compilation_music",
  },
];

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
      title: "The Immortal Soul and the Hidden Nature of Life After Death",
      paragraphs: [
        "In the Bahá’í Writings, physical life is likened to an embryonic stage. The soul—immortal, conscious, and capable of endless progress—continues after the body’s dissolution toward the presence of God. Bahá’u’lláh teaches that this ascent is neither extinguished by death nor frozen in a static heaven; rather, the soul advances through infinite worlds of God (‘Álam-i-Malakút and beyond) according to its capacity, deeds, and divine grace.",
        "The immortal soul is not a ghost of the body but a distinct reality—rational, spiritual, and undying. ‘Abdu’l-Bahá explains that faculties cultivated here—love, justice, detachment, and knowledge—become the wings of that journey. Just as eyes and ears form in the womb for a world the child has not yet entered, spiritual virtues prepare the soul for realms the senses cannot measure. The “veil” is not a wall of fear, but the limit of material perception; prayer, meditation, and service thin that veil while we yet walk the earth.",
        "A deeper teaching follows: eternal life has already begun. Death does not invent the soul’s capacities; it unveils them. What seemed dormant in the cage of the senses—perception without eyes, travel without feet, communion without sound—becomes freer when the body is laid aside. Bahá’u’lláh’s mystical tablets speak of worlds of God beyond counting, and of the soul’s progress as light upon light. Grief for the departed is natural; despair is not. The beloved continue; our prayers accompany them; reunion is promised in the mercy of God.",
        "This door invites contemplation of the architecture of the unseen: the immortal nature of the spirit, the continuity of consciousness, the hidden powers released at death’s threshold, and the solemn joy of knowing that no sincere aspiration is lost. Death, in this vision, is a birth into wider awareness—an opening, not an end.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, Gleanings from the Writings of Bahá’u’lláh — the soul’s immortality",
          url: GLEANINGS,
        },
        {
          label: "‘Abdu’l-Bahá, Some Answered Questions — immortality of the spirit",
          url: `${BRL}/authoritative-texts/abdul-baha/some-answered-questions/`,
        },
        {
          label: "Bahá’í Reference Library — Life, Death and the Soul",
          url: `${BAHAI}/beliefs/life-spirit/human-soul/`,
        }
      ],
    },
    fa: {
      title: "روح جاودان و ماهیت پنهان حیات پس از مرگ",
      paragraphs: [
        "در آثار بهائی، حیات جسمانی چون دوران جنینی توصیف شده است. روح—جاودان، آگاه و توانا به ترقی بی‌پایان—پس از انحلال جسم به‌سوی حضور الهی ادامه می‌یابد. حضرت بهاءالله می‌فرمایند این عروج با مرگ خاموش نمی‌شود و در بهشتی ایستا منجمد نمی‌گردد؛ بلکه روح بر وفق استعداد، اعمال و فضل الهی در عوالم بی‌کران خداوند (عالم ملکوت و فراتر) سیر می‌کند.",
        "روح جاودان شبح جسم نیست؛ حقیقتی متمایز است—عاقل، روحانی و ناپایدارنشدنی. حضرت عبدالبهاء تبیین می‌فرمایند که فضایل پروریده‌شده در این عالم—عشق، عدالت، انقطاع و معرفت—بال‌های آن سفرند. همان‌گونه که چشم و گوش در رحم برای جهانی شکل می‌گیرند که هنوز درک نشده، فضایل روحانی روح را برای اقالیمی آماده می‌کنند که حواس ظاهری اندازه نمی‌گیرند. «پرده» دیوار بیم نیست، بلکه حد ادراک مادی است؛ دعا، مراقبه و خدمت این پرده را در همین جهان نازک می‌سازند.",
        "آموزه‌ای ژرف‌تر نیز هست: حیات ابدی همین اکنون آغاز شده است. مرگ قوای روح را نمی‌آفریند؛ پرده از آن‌ها برمی‌دارد. آنچه در قفس حواس خفته می‌نمود—ادراک بی‌چشم، سفر بی‌پا، الفت بی‌صدا—با کنار رفتن جسم آزادتر می‌شود. الواح عرفانی حضرت بهاءالله از عوالم بی‌شمار خدا و از ترقی روح چون نور علی نور سخن می‌گویند. اندوه برای متصاعدان طبیعی است؛ نومیدی نه. محبوبان ادامه می‌یابند؛ دعاهای ما همراهشان است؛ وصال در رحمت الهی وعده داده شده است.",
        "این دروازه به تأمل در هندسهٔ غیب فرامی‌خواند: ماهیت جاودانهٔ روح، پیوستگی آگاهی، قوای پنهانی که بر آستانهٔ مرگ گشوده می‌شوند، و شادی سنگین این یقین که هیچ آرزوی صادقی تباه نمی‌شود. مرگ در این نگاه، تولدی در آگاهی وسیع‌تر است—گشایش، نه پایان.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، منتخباتی از آثار — بقای روح",
          url: GLEANINGS,
        },
        {
          label: "حضرت عبدالبهاء، مفاوضات — بقای روح",
          url: `${BRL}/authoritative-texts/abdul-baha/some-answered-questions/`,
        },
        {
          label: "کتابخانهٔ مرجع بهائی — روح انسانی",
          url: `${BAHAI}/beliefs/life-spirit/human-soul/`,
        }
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
      title: "Self-Knowledge: Foundation of Awareness, Cosmos, and Knowing God",
      paragraphs: [
        "A well-known tradition treasured in Bahá’í discourse affirms: “He who knoweth his own self hath known his Lord.” Self-knowledge is not a side practice—it is the foundation of true awareness. Bahá’u’lláh turns the seeker inward toward the noble essence deposited in every soul, described as a mine of gems; education and discipline exist to bring those gems to light.",
        "Bahá’u’lláh teaches that the primary purpose of creation is that humanity may know and love God. Upon every created thing He shed the light of one Name; upon the human reality He focused the radiance of all His names and attributes, making it a mirror of His own Self. To know that mirror—honestly, daily—is the first portal to knowing the Creator.",
        "Human beings carry two natures: material and spiritual. Distinguishing them, serving others, and bringing oneself to account each day (an hour of reflection preferred to decades of unreflective worship) polish the mirror. Self-knowledge here is neither narcissism nor withdrawal; it is recognition of station and of the veils that cloud it.",
        "Once the self is known, vision must become world-embracing. The soul that recognizes itself as a conscious participant in creation can read the book of the universe—nature, fellow beings, the vast cosmos—as signs of God. Awareness expands from inner reckoning to kinship with all that exists, without confusing ego with Lord.",
        "This door gathers that arc: know thyself → know thy Lord → awaken to the cosmos as a field of divine signs → serve. Practices of prayer, reflection, independent investigation of truth, and deeds of love make self-knowledge the living root of spiritual science.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, The Hidden Words",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "Bahá’u’lláh, Gleanings — purpose of creation: to know and love God",
          url: GLEANINGS,
        },
        {
          label: "Bahá’u’lláh, The Kitáb-i-Íqán",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-iqan/`,
        },
        {
          label: "Bahá’u’lláh, Tablets of Bahá’u’lláh — know thine own self",
          url: `${BRL}/authoritative-texts/bahaullah/tablets-bahaullah/`,
        },
        {
          label: "The human soul — bahai.org",
          url: `${BAHAI}/beliefs/life-spirit/human-soul/`,
        },
      ],
    },
    fa: {
      title: "خودشناسی: پایهٔ آگاهی، کیهان و عرفان خدا",
      paragraphs: [
        "حدیث «مَن عَرَفَ نَفسَهُ فَقَد عَرَفَ رَبَّه» در گفتمان بهائی گرامی است. خودشناسی تمرین فرعی نیست—پایهٔ آگاهی راستین است. حضرت بهاءالله جوینده را به‌سوی جوهر شریف هر روح می‌خوانند؛ روح معدن جواهر است و تربیت برای آشکار ساختن آن گوهرها.",
        "حضرت بهاءالله می‌فرمایند غایت اصلی خلقت آن است که انسان خدا را بشناسد و دوست بدارد. بر هر چیز پرتو یکی از اسماء را افشاند؛ بر حقیقت انسان شعاع همهٔ اسماء و صفات را متمرکز ساخت و آن را آیینهٔ نفس خویش کرد. شناخت صادقانه و روزانهٔ آن آیینه، نخستین دروازهٔ عرفان خالق است.",
        "انسان دو طبیعت دارد: مادی و روحانی. تمایز آن دو، خدمت به دیگران، و محاسبهٔ نفس هر روز (ساعتی تفکر بر هفتاد سال عبادت بی‌تفکر) آیینه را صیقل می‌دهد. خودشناسی اینجا نه خودشیفتگی است و نه گوشه‌نشینی؛ شناخت مقام است و پرده‌هایی که آن را تیره می‌کند.",
        "چون نفس شناخته شد، چشم‌انداز باید جهان‌شمول شود. روحی که خود را شرکت‌کنندهٔ آگاه در خلقت می‌بیند، کتاب کیهان—طبیعت، همنوعان، فضای بی‌کران—را چون آیات خدا می‌خواند. آگاهی از محاسبهٔ درون به خویشاوندی با همهٔ هستی می‌گسترد، بی‌آنکه نفس با رب خلط شود.",
        "این دروازه آن قوس را گرد می‌آورد: خود را بشناس → پروردگارت را بشناس → کیهان را میدان آیات ببین → خدمت کن. دعا، تفکر، تحری حقیقت و اعمال عشق، خودشناسی را ریشهٔ زندهٔ علم روحانی می‌سازند.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، کلمات مکنونه",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "حضرت بهاءالله، منتخباتی از آثار — غایت خلقت: عرفان و محبت خدا",
          url: GLEANINGS,
        },
        {
          label: "حضرت بهاءالله، کتاب ایقان",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-iqan/`,
        },
        {
          label: "حضرت بهاءالله، الواح — شناخت نفس خویش",
          url: `${BRL}/authoritative-texts/bahaullah/tablets-bahaullah/`,
        },
        {
          label: "روح انسانی — bahai.org",
          url: `${BAHAI}/beliefs/life-spirit/human-soul/`,
        },
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
      title: "Bahá’u’lláh’s Seven Valleys: The Mystical Journey Toward the Light",
      paragraphs: [
        "Revealed by Bahá’u’lláh in Baghdad, The Seven Valleys (Haft-Vádí) traces the inner path of the seeker through Search, Love, Knowledge, Unity, Contentment, Wonderment, and True Poverty and Absolute Nothingness. It stands among the most luminous mystical tablets of the Faith—speaking the language of Persian Sufi heritage while disclosing a new horizon of divine love.",
        "The Valley of Search kindles longing; Love consumes the seeker in the fire of the Beloved; Knowledge unveils meanings in every atom; Unity dissolves the many into the One; Contentment frees the heart from craving; Wonderment leaves the soul speechless before infinite signs; and True Poverty and Absolute Nothingness—faná and true faqr—strip away the last claim of self so that only God remains. This is not annihilation of being, but liberation from the illusion that the self is its own lord.",
        "Unlike paths that demand flight from the world, Bahá’u’lláh shows that the true journey unfolds in the heart. Ego dissolves in love; every atom reflects the Beloved; stations of wonder and poverty free the soul from attachment without extinguishing service to humanity. The companion tablet, The Four Valleys, further explores modes of approach to the Divine. The goal of Bahá’í wayfaring is not escape from civilization but a heart so empty of self that it can pour love into the world.",
        "Spiritual growth through these seven stages is lifelong. One may revisit Search after years of service; Love may deepen after grief; Poverty may arrive as a quiet gift. The valleys are not a ladder of pride but a map of transformation—each station reshaping how we love, how we know, how we release, and how we serve.",
        "This door is for those who wish to walk the valleys with both intellect and heart—reading slowly, praying deeply, and letting Haft-Vádí become a companion for the long journey toward the Light.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, The Seven Valleys and The Four Valleys",
          url: `${BRL}/authoritative-texts/bahaullah/seven-valleys-four-valleys/`,
        },
        {
          label: "Bahá’í Reference Library — Mysticism and the Spiritual Journey",
          url: `${BAHAI}/beliefs/god-his-creation/revelation/`,
        }
      ],
    },
    fa: {
      title: "هفت وادی بهاءالله: سفر عرفانی به‌سوی نور",
      paragraphs: [
        "کتاب «هفت وادی» که در بغداد از قلم حضرت بهاءالله نازل شد، سیر درونی سالک را در وادی‌های طلب، عشق، معرفت، توحید، استغنا، حیرت و فقر حقیقی و فنا ترسیم می‌کند. این لوح از درخشان‌ترین آثار عرفانی آیین است—به زبان میراث تصوف فارسی سخن می‌گوید و افقی نو از عشق الهی می‌گشاید.",
        "وادی طلب شوق می‌افروزد؛ عشق سالک را در آتش محبوب می‌سوزاند؛ معرفت معنا را در هر ذره می‌گشاید؛ توحید کثرت را در وحدت حل می‌کند؛ استغنا قلب را از حرص می‌رهاند؛ حیرت روح را در برابر آیات بی‌کران خاموش می‌سازد؛ و فقر حقیقی و فنا—فنای فی‌الله و فقر راستین—آخرین دعوی نفس را می‌سترد تا تنها خدا بماند. این نابودی هستی نیست؛ رهایی از این توهم است که نفس خداوندگار خویش است.",
        "برخلاف راه‌هایی که گریز از دنیا می‌طلبند، حضرت بهاءالله نشان می‌دهند که سفر حقیقی در قلب رخ می‌دهد. نفس در عشق ذوب می‌شود؛ هر ذره آیینه‌دار محبوب است؛ منازل حیرت و فقر روح را از تعلق آزاد می‌کنند بی‌آنکه خدمت به عالم انسانی خاموش شود. لوح همراه، چهار وادی، شیوه‌های تقرب به حق را بیش‌تر می‌گشاید. غایت سلوک بهائی گریز از تمدن نیست؛ قلبی است چنان خالی از خود که بتواند عشق را در جهان بریزد.",
        "رشد روحانی از این هفت منزل، عمری است. شاید پس از سال‌ها خدمت دوباره به طلب بازگردی؛ عشق پس از اندوه ژرف‌تر شود؛ فقر چون هدیه‌ای آرام برسد. وادی‌ها نردبان غرور نیستند؛ نقشهٔ تحول‌اند—هر منزل بازمی‌سازد چگونه عشق می‌ورزیم، چگونه می‌دانیم، چگونه رها می‌کنیم و چگونه خدمت می‌کنیم.",
        "این دروازه برای کسانی است که می‌خواهند با خرد و قلب در وادی‌ها گام بردارند—آهسته بخوانند، ژرف دعا کنند، و هفت وادی را هم‌سفر دراز راه به‌سوی نور سازند.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، هفت وادی و چهار وادی",
          url: `${BRL}/authoritative-texts/bahaullah/seven-valleys-four-valleys/`,
        },
        {
          label: "کتابخانهٔ مرجع بهائی — عرفان و سیر روحانی",
          url: `${BAHAI}/beliefs/god-his-creation/revelation/`,
        }
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
      title: "Sacred Symbols, Stars, and How to Read Celestial Signs",
      paragraphs: [
        "Bahá’í sacred culture is rich in symbols that point beyond themselves. The nine-pointed star recalls the numerical value of “Bahá” and the completeness of a new cycle; nine-sided Houses of Worship embody that wholeness. Calligraphy of the Greatest Name and the ringstone—God, Manifestation, and creation joined by the Holy Spirit, with twin stars for the Báb and Bahá’u’lláh—turn remembrance into visible form.",
        "Scripture speaks in metaphor as often as in plain speech: sun and moon may mean Manifestations and their mirrors; stars, religious leaders; heavens, religions themselves. The Manifestation of God unlocks the Book; independent investigation, prayer, and consultation keep interpretation humble.",
        "What of astrology and the influence of the stars? In Some Answered Questions, ‘Abdu’l-Bahá affirms real material effects of celestial bodies (the sun above all) and a deep interconnection of the universe like a living body—yet He rejects the predictive decrees of ancient astrologers as imagination and myth. Shoghi Effendi distinguishes astronomy (a science) from astrology (largely superstition) and asks that horoscopes be given no importance.",
        "Zodiac language may still appear as allegory of progressive revelation: the Sun of Reality rising from a new spiritual point, as from a new sign. Lovers of the sun seek the light itself—not fortune written in charts. Reading the heavens as sacred symbol and cosmic kinship, not as fate, keeps celestial wisdom aligned with reason and revelation.",
        "This door explores how form becomes prayer: Bahá’í emblems, scriptural cipher, and a clear Bahá’í reading of stars—companions to contemplation, never substitutes for justice, love, and deeds.",
      ],
      sources: [
        {
          label: "‘Abdu’l-Bahá, Some Answered Questions — Influence of the Stars",
          url: `${BRL}/authoritative-texts/abdul-baha/some-answered-questions/`,
        },
        {
          label: "Bahá’í World — Houses of Worship and sacred architecture",
          url: `${BAHAI}/action/houses-worship/`,
        },
        {
          label: "Bahá’u’lláh, The Kitáb-i-Aqdas and Notes",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-aqdas/`,
        },
        {
          label: "Bahá’u’lláh, The Kitáb-i-Íqán — symbolic language of scripture",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-iqan/`,
        },
        {
          label: "The Greatest Name / progressive revelation — bahai.org",
          url: `${BAHAI}/beliefs/god-his-creation/revelation/`,
        },
      ],
    },
    fa: {
      title: "رموز قدسی، ستارگان و چگونه آیات آسمانی را بخوانیم",
      paragraphs: [
        "فرهنگ قدسی بهائی از رموزی سرشار است که فراتر از ظاهر اشاره می‌کنند. ستارهٔ نُه‌پر ارزش «بهاء» و کمال دور جدید را به یاد می‌آورد؛ مشارق‌الاذکار نُه‌ضلعی همان کمال را مجسم می‌کنند. خوشنویسی اسم اعظم و نماد نگین—حق، ظهور و خلق پیوندخورده با روح‌القدس، با دو ستاره برای حضرت باب و حضرت بهاءالله—ذکر را به صورت مرئی بدل می‌کنند.",
        "کتاب به اندازهٔ کلام صریح، به استعاره سخن می‌گوید: خورشید و ماه ممکن است مظاهر و آیینه‌هایشان باشند؛ ستارگان، رهبران دینی؛ آسمان‌ها، خود ادیان. مظهر الهی کتاب را می‌گشاید؛ تحری حقیقت، دعا و مشورت تفسیر را فروتن نگه می‌دارند.",
        "نجوم احکامی و تأثیر ستارگان چه می‌شود؟ در مفاوضات، حضرت عبدالبهاء اثر مادی اجرام (به‌ویژه خورشید) و همبستگی ژرف کیهان چون پیکر زنده را تصدیق می‌فرمایند—اما احکام پیش‌گویانهٔ منجمان قدیم را خیال و افسانه می‌دانند. حضرت شوقی افندی اخترشناسی را علم و نجوم احکامی را اغلب خرافه می‌شمارند و می‌فرمایند به طالع اهمیت ندهیم.",
        "زبان منطقة‌البروج هنوز می‌تواند تمثیل ظهور تدریجی باشد: شمس حقیقت از نقطه‌ای نو در افق روحانی—چون از برجی نو—طلوع می‌کند. عاشقان خورشید خود نور را می‌جویند—نه سرنوشت نوشته در زایجه. خواندن آسمان چون رمز قدسی و خویشاوندی کیهانی، نه چون تقدیر، حکمت سماوی را با عقل و وحی هم‌راستا نگه می‌دارد.",
        "این دروازه می‌کاود که چگونه صورت به دعا بدل می‌شود: نشانه‌های بهائی، رمز کتاب، و خوانش روشن بهائی از ستارگان—همراهان تأمل، هرگز جایگزین عدالت، عشق و عمل نیستند.",
      ],
      sources: [
        {
          label: "حضرت عبدالبهاء، مفاوضات — تأثیر ستارگان",
          url: `${BRL}/authoritative-texts/abdul-baha/some-answered-questions/`,
        },
        {
          label: "مشارق‌الاذکار و معماری قدسی — bahai.org",
          url: `${BAHAI}/action/houses-worship/`,
        },
        {
          label: "حضرت بهاءالله، کتاب اقدس و حواشی",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-aqdas/`,
        },
        {
          label: "حضرت بهاءالله، کتاب ایقان — زبان رمزی کتاب",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-iqan/`,
        },
        {
          label: "اسم اعظم / ظهور تدریجی — bahai.org",
          url: `${BAHAI}/beliefs/god-his-creation/revelation/`,
        },
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
      title: "Dreams and Visions of the Soul—and the Mystery of Sleep",
      paragraphs: [
        "In The Seven Valleys, Bahá’u’lláh opens a window onto the mystery of sleep: in dreams the soul travels without the body’s senses, beholds wonders, and returns with news the waking mind cannot always explain. This is not fantasy for its own sake; it is evidence that the spirit is not imprisoned in flesh—that consciousness can move in realms the eye does not see.",
        "Bahá’í Writings acknowledge that the soul may receive impressions beyond waking reason—true dreams (ru’yá ṣádiqah), intuitions, and confirmations that accompany sincere prayer. ‘Abdu’l-Bahá distinguishes wholesome spiritual perception from superstition and idle fancy; the measure is coherence with the revealed Word, reason, and moral fruit. Not every dream is a message; many are echoes of the day. Yet some dreams console the grieving, warn the heedless, or unveil meanings that later prove true.",
        "Sleep itself is a daily parable of death and awakening. Each night the senses quiet; each morning they return. The Writings invite us to see in this rhythm a rehearsal of the soul’s longer journey—and a call to keep the heart’s lamp lit. Bahá’u’lláh’s Hidden Words speak of that candle kindled by divine power and healed by remembrance. Contemplative practice—morning prayer, meditation on the Writings, stillness before sleep—tunes inner hearing.",
        "Yet no private vision outweighs the Covenant, consultation, or justice owed to others. Inspiration that breeds pride, division, or neglect of duty is not from the Light. Healthy dream-life walks beside science and common sense: we honor mystery without making idols of our nights.",
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
        }
      ],
    },
    fa: {
      title: "رؤیاها و الهامات روح—و راز عمیق خواب",
      paragraphs: [
        "در هفت وادی، حضرت بهاءالله دریچه‌ای به راز خواب می‌گشایند: در رؤیا روح بی‌نیاز از حواس جسمانی سفر می‌کند، عجایب می‌بیند و با خبری بازمی‌گردد که ذهن بیدار همیشه نمی‌تواند تبیین کند. این خیال‌پردازی برای خود نیست؛ گواهی است که روح در گوشت زندانی نیست—که آگاهی می‌تواند در اقالیمی سیر کند که چشم نمی‌بیند.",
        "آثار بهائی می‌پذیرند که روح ممکن است فراتر از عقل بیداری تأثیراتی دریافت کند—خواب‌های صادقه، الهامات و تأییداتی که با دعای خالص همراهند. حضرت عبدالبهاء ادراک روحانی سالم را از خرافات و اوهام جدا می‌سازند؛ معیار، هماهنگی با کلام منزل، عقل و ثمر اخلاقی است. هر خوابی پیام نیست؛ بسیاری پژواک روزند. با این‌همه برخی خواب‌ها سوگواران را تسلی می‌دهند، غافلان را هشدار می‌دهند، یا معانی‌ای می‌گشایند که بعد راست درمی‌آید.",
        "خود خواب مثلی روزانه از مرگ و بیداری است. هر شب حواس آرام می‌گیرند؛ هر صبح بازمی‌گردند. آثار ما را می‌خوانند در این ریتم تمرین سفر بلندتر روح را ببینیم—و شمع دل را روشن نگه داریم. کلمات مکنونه از آن شمع سخن می‌گوید که به دست قدرت الهی افروخته و به ذکر شفا می‌یابد. عمل عبادی—نماز صبح، تأمل در آثار، سکوت پیش از خواب—شنوایی باطن را تنظیم می‌کند.",
        "با این‌همه هیچ رؤیای خصوصی بر عهد و میثاق، مشورت یا عدالت نسبت به دیگران چیره نیست. الهامی که غرور، تفرقه یا ترک وظیفه آورد از نور نیست. حیات رؤیایی سالم کنار علم و عقل سلیم گام برمی‌دارد: راز را حرمت می‌نهیم بی‌آنکه از شب‌هایمان بت بسازیم.",
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
        }
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
      title: "Life Beyond Earth—and a Cosmos Where Science Meets Spirit",
      paragraphs: [
        "‘Abdu’l-Bahá famously teaches that science and religion are as two wings of one bird—both required for ascent. Bahá’í cosmology affirms a universe of purpose: progressive revelation, the essential harmony of truth, and a human consciousness capable of knowing both material law and spiritual meaning.",
        "What do the Writings say about life on other planets? Bahá’u’lláh writes that every fixed star hath its own planets, and every planet its own creatures, whose number no man can compute. ‘Abdu’l-Bahá affirms worlds inhabited by beings capable of knowing God. Shoghi Effendi notes that the nature of those creatures remains for science to discover—inviting awe rather than fear.",
        "Far from opposing empirical inquiry, the Writings celebrate knowledge as wings for humanity’s flight. Superstition is rejected; today’s search for exoplanets, astrobiology, and open study of unknown aerial phenomena can proceed without panic myths. Planetary unity on Earth remains the first task; wonder at a living cosmos is its companion.",
        "The parts of this infinite universe are connected and influence one another—materially and spiritually—yet that kinship is not fate written in horoscopes (see the Symbols door for the Bahá’í reading of astrology and celestial signs). Here the focus stays on inhabited worlds, scientific honesty, and one Creator of a vast creation.",
        "This chamber gathers that vision: two wings in flight, creatures beyond count, and quiet confidence that creation is wide enough for countless beings—and one God.",
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
        ...COSMOS_REF_SOURCES_EN,
      ],
    },
    fa: {
      title: "حیات فراتر از زمین—و کیهانی که علم در آن با روح دیدار می‌کند",
      paragraphs: [
        "حضرت عبدالبهاء می‌فرمایند علم و دین چون دو بال یک پرنده‌اند—هر دو برای عروج لازم است. کیهان‌شناسی بهائی جهانی هدفمند را تصدیق می‌کند: ظهور تدریجی، هماهنگی ذاتی حقیقت، و آگاهی انسانی که هم قانون مادی و هم معنای روحانی را می‌تواند شناخت.",
        "آثار دربارهٔ حیات در سیارات دیگر چه می‌گویند؟ حضرت بهاءالله می‌فرمایند هر ستارهٔ ثابتی سیارات خود و هر سیاره‌ای مخلوقات خود را دارد—که شمارهٔ آنان را هیچ انسانی نمی‌تواند شمرد. حضرت عبدالبهاء از عوالمی سخن می‌گویند که باشندگانی قادر به عرفان حق در آن‌ها ساکن‌اند. حضرت شوقی افندی می‌فرمایند ماهیت این مخلوقات را علم روزی کشف خواهد کرد—شگفتی می‌طلبد، نه ترس.",
        "آثار علم را بال پرواز بشر می‌ستایند. خرافات رد می‌شود؛ جستجوی سیارات فراخورشیدی، اخترزیست‌شناسی و پژوهش پدیده‌های ناشناخته می‌تواند بی‌افسانه‌های هراس پیش رود. وحدت سیاره‌ای روی زمین نخستین تکلیف است؛ شگفتی در برابر کیهان زنده، هم‌سفر آن.",
        "اجزای این کیهان بی‌کران به هم پیوسته‌اند و بر یکدیگر اثر می‌گذارند—مادی و روحانی—اما این خویشاوندی سرنوشت نوشته در طالع نیست (خوانش بهائی از نجوم احکامی و آیات آسمانی را در درب رموز ببینید). اینجا تمرکز بر عوالم مسکون، صداقت علمی، و یک آفریدگار خلقتی وسیع است.",
        "این حجره آن چشم‌انداز را گرد می‌آورد: دو بال در پرواز، مخلوقات بی‌شمار، و اطمینان آرام که خلقت برای باشندگان بی‌شمار—و یک خدا—وسعت دارد.",
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
        ...COSMOS_REF_SOURCES_FA,
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
      title: "Drawing on the Spiritual Power of the Arts—Why Civilization Needs Artists",
      paragraphs: [
        "Bahá’u’lláh elevates arts, crafts, and sciences as means of exalting the world of being. In the Kitáb-i-Aqdas He makes music lawful and names it a ladder for the soul—lifted toward the realm on high when purified of passion that degrades. Calligraphy and the visual arts render the Word visible; crafts perfected with utmost care rebuild earth; architecture of the Mashriqu’l-Adhkár gathers humanity under one luminous roof. Art, in this vision, is a gift of the Holy Spirit—a form of worship that draws the human spirit nearer to God.",
        "Why do we need artists to perfect civilization? Because laws and factories alone cannot remake the inner world. Beauty softens hardened hearts; story and song carry truths that argument cannot; design shapes spaces where unity feels possible. ‘Abdu’l-Bahá and Shoghi Effendi encouraged beauty in worship and culture without reducing devotion to spectacle—and in the House of Worship, sacred texts are sung a cappella so melody serves the Word. A civilization worthy of the name needs creators who translate the ineffable into forms every soul can approach.",
        "Sacred art in the Bahá’í view is not ornament for leisure alone—it is a language of the spirit. The artist who creates in a spirit of service becomes a channel; the audience who receives with an open heart becomes a co-worshipper. When beauty is wedded to truth and justice, it becomes a ladder for the soul’s ascent—and a force that transforms both the private self and the public square.",
        "This door listens for the nightingale of meaning in melody and silence alike: how craft becomes prayer, how culture becomes covenant, and how the arts help build a world that is not only efficient, but luminous.",
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
        ...ARTS_REF_SOURCES_EN,
      ],
    },
    fa: {
      title: "نیروی روحانی هنرها—چرا تمدن به هنرمند نیاز دارد",
      paragraphs: [
        "حضرت بهاءالله صنایع و علوم را سبب علوّ عالم وجود می‌دانند. در کتاب اقدس موسیقی را حلال می‌فرمایند و نردبان روح می‌نامند—که چون از هوایی پست‌کننده پاک شود، به‌سوی عوالم عالیه برکشد. خوشنویسی و هنرهای بصری کلام را مرئی می‌سازند؛ صنایع با نهایت اتقان زمین را نو می‌سازند؛ معماری مشرق‌الاذکار بشریت را زیر یک سقف نورانی گرد می‌آورد. هنر در این نگاه موهبتی از روح‌القدس است—عبادتی که روح انسان را به خداوند نزدیک می‌کند.",
        "چرا برای کمال تمدن به هنرمندان نیاز داریم؟ زیرا قانون و کارخانه به‌تنهایی دنیای درون را باز نمی‌سازند. زیبایی دل‌های سخت را نرم می‌کند؛ داستان و نغمه حقایقی را می‌برند که استدلال نمی‌تواند؛ طراحی فضاهایی می‌سازد که وحدت در آن‌ها ممکن به نظر می‌رسد. حضرت عبدالبهاء و حضرت شوقی افندی زیبایی در عبادت و فرهنگ را تشویق فرمودند بی‌آنکه عبادت به تماشا فروکاهد—و در معبد، نصوص مقدس بی‌ساز سروده می‌شوند تا نغمه در خدمت کلام باشد. تمدنی شایستهٔ نام، نیازمند آفرینندگانی است که ناگفتنی را به صورتی درآورند که هر نفسی بتواند نزدیک شود.",
        "هنر قدسی در نگاه بهائی آرایهٔ تفنن تنها نیست—زبانی از روح است. هنرمندی که به روح خدمت بیافریند مجرا می‌شود؛ مخاطبی که با قلب باز دریافت کند هم‌نیایش می‌گردد. وقتی زیبایی با حقیقت و عدالت پیوند خورد، نردبان عروج روح می‌شود—و نیرویی که هم خود خصوصی و هم میدان عمومی را دگرگون می‌کند.",
        "این دروازه به بلبل معنا در نغمه و سکوت گوش می‌سپارد: چگونه صنعت به دعا بدل می‌شود، چگونه فرهنگ به عهد می‌پیوندد، و چگونه هنرها جهانی می‌سازند که نه‌تنها کارآمد، بلکه نورانی است.",
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
        ...ARTS_REF_SOURCES_FA,
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
      title: "Defining the Four Different Types of Love",
      paragraphs: [
        "‘Abdu’l-Bahá famously distinguishes four kinds of love that together describe the architecture of the heart. The first is the love of God for humanity—the outpouring of divine grace that creates, sustains, and guides every soul. Without this love, existence itself would have no spring; it is the fire that kindles every lesser flame.",
        "The second is the love of humanity for God—the soul’s longing to know and worship its Creator. Prayer, remembrance, and obedience are its language. Bahá’u’lláh plants the rose of love in the garden of the heart and warns against fellowship with that which deadens the spirit; this upward love is the seeker’s true treasure.",
        "The third is the love of God for His own Essence—a mystery beyond human measure, the eternal self-sufficiency of the Divine. Contemplating it keeps the soul humble: God needs nothing from us, yet invites us into relationship out of pure bounty.",
        "The fourth is the love of human beings for one another—friendship, family, community, and the oneness of humanity. Mystical love and social love converge here: to love God is to love His mirrors among humankind. Marriage, consultation, and service become laboratories of this alchemy when equality and faithfulness prevail.",
        "This door contemplates how these four loves interpenetrate: divine grace descending, human devotion ascending, the mystery of God’s self-love, and the horizontal bond that builds peace. A heart that has chosen love as its treasure becomes a force that makes and binds—within the home, the neighborhood, and the world.",
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
        }
      ],
    },
    fa: {
      title: "تعریف چهار گونهٔ محبت",
      paragraphs: [
        "حضرت عبدالبهاء چهار نوع محبت را از هم بازمی‌شناسند که با هم معماری قلب را وصف می‌کنند. نخستین، عشق خدا به انسان است—ریزش فضل الهی که هر نفسی را می‌آفریند، نگاه می‌دارد و هدایت می‌کند. بی‌این عشق، هستی چشمه‌ای ندارد؛ آتشی است که هر شعلهٔ فروتر را می‌افروزد.",
        "دوم، عشق انسان به خداست—شوق روح به عرفان و عبادت پروردگارش. دعا، ذکر و اطاعت زبان آن‌اند. حضرت بهاءالله گل عشق را در روضهٔ قلب می‌کارند و از معاشرت آنچه روح را می‌میراند بازمی‌دارند؛ این عشق صعودی گنج راستین سالک است.",
        "سوم، عشق خدا به ذات خویش است—سری فراتر از اندازهٔ بشر، استغنای ابدی حق. تأمل در آن روح را فروتن نگه می‌دارد: خدا به چیزی از ما نیازمند نیست، با این‌همه از محض جود ما را به رابطه فرامی‌خواند.",
        "چهارم، عشق انسان به انسان است—دوستی، خانواده، جامعه و وحدت نوع بشر. عشق عرفانی و حب اجتماعی اینجا به هم می‌رسند: دوست داشتن خدا، دوست داشتن آیینه‌های او در میان بشر است. ازدواج، مشورت و خدمت آزمایشگاه این کیمیاست وقتی برابری و وفا حاکم باشد.",
        "این دروازه می‌کاود که این چهار محبت چگونه در هم می‌تنند: فضل نازل، عبودیت صاعد، راز حب ذاتی حق، و پیوند افقی که صلح می‌سازد. قلبی که عشق را گنج خویش ساخته، نیرویی می‌شود که می‌آفریند و پیوند می‌دهد—در خانه، محله و جهان.",
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
        {
          label: "عشق و وحدت — bahai.org",
          url: `${BAHAI}/beliefs/essential-relationships/god/`,
        }
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
      title: "The Eternal Rule: Concentrating Our Hearts on Love and Unity",
      paragraphs: [
        "‘Abdu’l-Bahá teaches that unity is the binding force of the universe and the foundation of lasting peace. The eternal rule is simple and demanding: concentrate the heart on love and unity. Where hearts are divided by prejudice, nation, race, or creed, civilization frays; where love gathers them, the world can be remade.",
        "Unity begins among human beings themselves. Bahá’u’lláh’s revelation rebuilds society on the oneness of humanity—“fruits of one tree, leaves of one branch”—with equality of women and men, the elimination of extremes of wealth and poverty, universal education, and governance by consultation. Unity is not uniformity; it is harmony among diverse notes.",
        "The same law widens to all living beings. ‘Abdu’l-Bahá describes creation as a chain of reciprocal help: every part of the universe is tied to every other. Kindness is owed not only to fellow humans but to every creature; the earth itself is likened to one living body. Stewardship of nature is devotion, and environmental care is inseparable from social justice.",
        "A still wider circle opens in the Writings: every fixed star hath its planets, and every planet its creatures. Practiced unity on Earth—peace instead of fear, friendship instead of otherness—becomes the apprenticeship for any encounter beyond our sky. Planetary oneness first; then, if contact comes, a universal family under one Creator.",
        "“Guidance hath ever been given by words, and now it is given by deeds,” declare the Hidden Words. Concentrating the heart on love and unity is daily practice that spiritualizes neighborhoods, nations, the living Earth, and—prospectively—the wider cosmos. This door closes the circle of the Nine.",
      ],
      sources: [
        {
          label: "Bahá’u’lláh, The Hidden Words — deeds",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "Bahá’u’lláh, Gleanings — every planet its creatures",
          url: GLEANINGS,
        },
        {
          label: "‘Abdu’l-Bahá, Selections — loving-kindness to every living creature",
          url: `${BRL}/authoritative-texts/abdul-baha/selections-writings-abdul-baha/`,
        },
        {
          label: "Nature and the environment — bahai.org",
          url: `${BAHAI}/beliefs/god-his-creation/nature/`,
        },
        {
          label: "Universal House of Justice — social action and community building",
          url: `${BRL}/authoritative-texts/the-universal-house-of-justice/`,
        },
      ],
    },
    fa: {
      title: "قانون ابدی: تمرکز قلوب بر عشق و وحدت",
      paragraphs: [
        "حضرت عبدالبهاء می‌فرمایند وحدت نیروی پیونددهندهٔ عالم هستی و اساس صلح پایدار است. قانون ابدی ساده و سخت است: قلب را بر عشق و وحدت متمرکز کن. آنجا که قلوب با تعصب، ملت، نژاد یا کیش پراکنده شده‌اند، تمدن می‌گسلد؛ آنجا که عشق آنان را گرد آورد، جهان بازساخته می‌شود.",
        "وحدت نخست میان خود انسان‌هاست. ظهور حضرت بهاءالله جامعه را بر وحدت نوع انسان بازمی‌سازد—«میوه‌های یک درخت و برگ‌های یک شاخه»—با برابری زن و مرد، رفع تضادهای ثروت و فقر، تعليم عمومی، و حکمرانی بر پایهٔ مشورت. وحدت یک‌شکلی نیست؛ هماهنگی میان نغمه‌های گوناگون است.",
        "همان قانون به همهٔ موجودات زنده گسترش می‌یابد. حضرت عبدالبهاء خلقت را زنجیرهٔ کمک متقابل می‌دانند: هر جزء کیهان به جزء دیگر بسته است. مهر نه فقط به انسان که به هر مخلوقی واجب است؛ خود زمین چون یک پیکر زنده تشبیه شده. امانت‌داری طبیعت عبادت است، و مراقبت محیط‌زیست از عدالت اجتماعی جدایی‌ناپذیر.",
        "دایره‌ای وسیع‌تر در آثار گشوده می‌شود: هر ستارهٔ ثابت سیارات خود و هر سیاره مخلوقات خود را دارد. وحدت تمرین‌شده روی زمین—صلح به‌جای ترس، دوستی به‌جای بیگانگی—کارآموزی هر دیداری فراتر از آسمان ماست. نخست یگانگی سیاره‌ای؛ آن‌گاه، اگر تماسی آید، خانوادهٔ کیهانی زیر یک آفریدگار.",
        "کلمات مکنونه می‌فرماید هدایت پیش‌تر به کلام بود و اکنون به اعمال است. تمرکز قلب بر عشق و وحدت تمرین روزانه‌ای است که محله‌ها، ملت‌ها، زمین زنده و—در افق—کیهان وسیع‌تر را روحانی می‌سازد. این دروازه دایرهٔ نُه را می‌بندد.",
      ],
      sources: [
        {
          label: "حضرت بهاءالله، کلمات مکنونه — اعمال",
          url: `${BRL}/authoritative-texts/bahaullah/hidden-words/`,
        },
        {
          label: "حضرت بهاءالله، منتخباتی از آثار — هر سیاره مخلوقات خود",
          url: GLEANINGS,
        },
        {
          label: "حضرت عبدالبهاء، منتخبات آثار — محبت به هر موجود زنده",
          url: `${BRL}/authoritative-texts/abdul-baha/selections-writings-abdul-baha/`,
        },
        {
          label: "طبیعت و محیط‌زیست — bahai.org",
          url: `${BAHAI}/beliefs/god-his-creation/nature/`,
        },
        {
          label: "بیت‌العدل اعظم — عمل اجتماعی و بنای جامعه",
          url: `${BRL}/authoritative-texts/the-universal-house-of-justice/`,
        },
      ],
    },
  },
};

function buildDoor(slug: DoorSlug): DoorChamber {
  const n = DOOR_HIDDEN_WORD[slug];
  const w = hwByNumber(n);
  const c = citations(n);
  const a = ARTICLES[slug];
  const sections = getDoorSourceSections(slug);
  return {
    image: a.image,
    imageAlt: a.imageAlt,
    imagePosition: a.imagePosition,
    en: {
      quote: w.en,
      citation: c.en,
      articleTitle: a.en.title,
      articleParagraphs: a.en.paragraphs,
      sourceSections: sections.en,
      sources: a.en.sources,
    },
    fa: {
      quote: w.fa,
      citation: c.fa,
      articleTitle: a.fa.title,
      articleParagraphs: a.fa.paragraphs,
      sourceSections: sections.fa,
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
