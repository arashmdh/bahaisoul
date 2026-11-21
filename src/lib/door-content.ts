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
      title: "Seeking Self-Knowledge and the Practice of Daily Reflection",
      paragraphs: [
        "A well-known Islamic tradition treasured in Bahá’í discourse affirms: “He who knoweth his own self hath known his Lord.” Bahá’u’lláh repeatedly turns the seeker inward—not toward ego, but toward the noble essence deposited in every human being. The soul is described as a mine rich in gems of inestimable value; education and spiritual discipline exist to bring those gems to light.",
        "Human beings carry two dimensions at once: a material nature bound to need and habit, and a spiritual nature oriented toward the divine. Seeking self-knowledge means learning to distinguish these—not despising the body, but refusing to let appetite rule the mirror of the heart. True self-awareness, the Writings suggest, ripens through service: when we forget ourselves in love for others, the lower self loosens its grip and the higher self becomes visible.",
        "Self-reflection—muḥásabah, the daily reckoning of the soul—is central to Bahá’í spiritual life. A cherished tradition affirms that an hour of reflection is better than seventy years of unreflective worship. Bahá’u’lláh and ‘Abdu’l-Bahá urge examination of motives before sleep, honesty about failings, and resolve to improve. Reflection is not self-condemnation; it is the lamp that shows where the veil still hangs.",
        "Self-knowledge in the Bahá’í sense is neither narcissism nor withdrawal. It is recognition of one’s station as a conscious mirror of divine attributes—and honesty about the veils of desire, prejudice, and heedlessness that cloud that mirror. The Kitáb-i-Íqán and the Hidden Words urge cleansing of the heart so that the light of guidance may appear.",
        "This door gathers practices of reflection: examining motives, consulting conscience, reading the Sacred Writings as a mirror held to the soul, serving others as a path to self-awareness, and walking the path of independent investigation of truth. To know oneself truly is to discover both humility before God and the creative power entrusted to every human spirit.",
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
        }
      ],
    },
    fa: {
      title: "طلب خودشناسی و تمرین محاسبهٔ نفس روزانه",
      paragraphs: [
        "حدیث شریف «مَن عَرَفَ نَفسَهُ فَقَد عَرَفَ رَبَّه» در گفتمان بهائی گرامی داشته شده است. حضرت بهاءالله بارها جوینده را به‌سوی باطن می‌خوانند—نه به‌سوی نفس اماره، بلکه به‌سوی جوهر شریفی که در هر انسان به ودیعه نهاده شده. روح چون معدنی سرشار از جواهر بی‌بها وصف شده؛ تربیت و سلوک برای آشکار ساختن آن گوهرهاست.",
        "انسان دو بُعد دارد: طبیعت مادی وابسته به نیاز و عادت، و طبیعت روحانی متمایل به حق. طلب خودشناسی یعنی آموختن تمایز این دو—نه خوار داشتن جسم، بلکه نپذیرفتن آنکه شهوت بر آیینهٔ قلب حاکم شود. خودآگاهی حقیقی، چنان‌که آثار می‌آموزند، در خدمت می‌رسد: وقتی در عشق به دیگران خود را فراموش کنیم، نفس پست سست می‌شود و نفس برتر پدیدار می‌گردد.",
        "تفکر و محاسبهٔ نفس روزانه در حیات روحانی بهائی محوری است. حدیثی گرامی می‌گوید «تفکر ساعة خیر من عبادة سبعین سنة». حضرت بهاءالله و حضرت عبدالبهاء به بررسی نیت‌ها پیش از خواب، صداقت دربارهٔ قصور، و عزم اصلاح فرامی‌خوانند. محاسبه خودسرزنشی نیست؛ چراغی است که نشان می‌دهد پرده هنوز کجا آویخته است.",
        "خودشناسی در معنای بهائی نه خودشیفتگی است و نه گوشه‌نشینی. شناخت مقام انسان به‌مثابه آیینهٔ صفات الهی است—و صداقت دربارهٔ پرده‌های هوی، تعصب و غفلت که این آیینه را تیره می‌کند. کتاب ایقان و کلمات مکنونه به تطهیر قلب فرامی‌خوانند تا نور هدایت پدیدار شود.",
        "این دروازه تمرین‌های تأمل را گرد می‌آورد: بررسی نیت‌ها، مشورت با وجدان، خواندن آثار مبارکه چون آیینه‌ای برابر روح، خدمت به دیگران چون راه خودآگاهی، و گام نهادن در تحری حقیقت. خود را به راستی شناختن، هم فروتنی در برابر خداست و هم کشف نیروی خلاقی که به هر روح انسانی سپرده شده است.",
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
        }
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
      title: "What Bahá’í Symbols Mean—and How to Read the Language of Scripture",
      paragraphs: [
        "Bahá’í sacred culture is rich in symbols that point beyond themselves. The nine-pointed star recalls the numerical value of “Bahá” (glory) in the abjad system and the completeness of a new cycle of revelation; nine-sided Houses of Worship embody that same completeness in stone and light. Calligraphic forms of the Greatest Name—Yá Bahá’u’l-Abhá and related invocations—concentrate remembrance into visible beauty, a daily invitation to turn the heart toward God.",
        "The ringstone symbol, designed under ‘Abdu’l-Bahá’s guidance, gathers layered meaning into a single emblem: two five-pointed stars for the Báb and Bahá’u’lláh as Twin Manifestations; three horizontal lines suggesting the world of God, the world of Manifestation, and the world of creation; and a vertical line joining them—the Holy Spirit that links heaven and earth. Worn as a ring or seal, it is not a charm but a reminder of covenant and station.",
        "How, then, should we read spiritual symbols in the divine scriptures? The Writings teach that sacred texts speak in metaphor as often as in plain speech. Mountains may mean religions; sun and moon may mean Manifestations and their mirrors; gardens, veils, wine, and nightingales open inner meanings. Bahá’u’lláh and the Báb employ the language of signs without reducing faith to occult speculation. The key is the Manifestation of God Himself: He unlocks the Book. Independent investigation, prayer, and consultation keep interpretation humble and fruitful.",
        "Beyond letters and geometry, the whole of creation is a book of divine signs. Every atom, Bahá’u’lláh writes, can disclose the knowledge of God to the pure of heart. Symbolism thus serves recognition of God, unity of humanity, and the dawning of a world civilization—never a substitute for justice, love, and deeds.",
        "This door explores how form becomes prayer: star, Greatest Name, ringstone, architecture, and the living metaphors of scripture—companions to contemplation, always subordinate to the spirit of the Writings.",
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
        }
      ],
    },
    fa: {
      title: "معنای نمادهای بهائی—و چگونه زبان رمزی کتب آسمانی را بخوانیم",
      paragraphs: [
        "فرهنگ قدسی بهائی از رموزی سرشار است که فراتر از ظاهر خویش اشاره می‌کنند. ستارهٔ نُه‌پر ارزش عددی «بهاء» در حساب ابجد و کمال دور جدید را به یاد می‌آورد؛ مشارق‌الاذکار نُه‌ضلعی همان کمال را در سنگ و نور مجسم می‌کنند. صورت‌های خوشنویسی اسم اعظم—یا بهاءالابهی و اذکار وابسته—ذکر را به زیبایی مرئی بدل می‌کنند؛ دعوتی روزانه برای روی آوردن قلب به‌سوی خدا.",
        "نماد نگین انگشتری، به هدایت حضرت عبدالبهاء، معانی لایه‌لایه را در یک نشان گرد می‌آورد: دو ستارهٔ پنج‌پر برای حضرت باب و حضرت بهاءالله به‌مثابه مظاهر توأم؛ سه خط افقی اشاره به عالم حق، عالم امر (ظهور) و عالم خلق؛ و خط عمودی پیونددهنده—روح‌القدس که آسمان و زمین را می‌پیوندد. این طلسم نیست؛ یادآور عهد و مقام است.",
        "پس زبان استعاری کتب آسمانی را چگونه بفهمیم؟ آثار می‌آموزند که متون قدسی به اندازهٔ کلام صریح، به استعاره سخن می‌گویند. کوه ممکن است ادیان باشد؛ خورشید و ماه مظاهر و آیینه‌هایشان؛ باغ، پرده، باده و بلبل معانی باطنی می‌گشایند. حضرت بهاءالله و حضرت باب زبان آیات را به‌کار می‌برند بی‌آنکه ایمان به گمانه‌زنی غیبی فروکاهد. کلید، خود مظهر الهی است: او کتاب را می‌گشاید. تحری حقیقت، دعا و مشورت تفسیر را فروتن و ثمربخش نگه می‌دارند.",
        "فراتر از حروف و هندسه، تمام خلقت کتاب آیات الهی است. حضرت بهاءالله می‌فرمایند هر ذره‌ای می‌تواند معرفت خدا را بر قلب پاک بگشاید. رمز در خدمت عرفان حق، وحدت بشر و طلوع تمدن جهانی است—هرگز جایگزین عدالت، عشق و عمل نیست.",
        "این دروازه می‌کاود که چگونه صورت به دعا بدل می‌شود: ستاره، اسم اعظم، نگین، معماری و استعارات زندهٔ کتاب—همراهان تأمل، همواره تابع روح آثار.",
      ],
      sources: [
        {
          label: "مشارق‌الاذکار و معماری قدسی — bahai.org",
          url: `${BAHAI}/action/houses-worship/`,
        },
        {
          label: "حضرت بهاءالله، کتاب اقدس و حواشی",
          url: `${BRL}/authoritative-texts/bahaullah/kitab-i-aqdas/`,
        }
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
        "What do the Bahá’í Writings say about life on other planets? Bahá’u’lláh writes that every fixed star hath its own planets, and every planet its own creatures, whose number no man can compute. ‘Abdu’l-Bahá affirms worlds inhabited by beings capable of knowing God. Shoghi Effendi notes that the nature of those creatures remains for science to discover. The case for life beyond Earth, in this light, is not fringe speculation—it is woven into the fabric of revelation, inviting awe rather than fear.",
        "Far from opposing empirical inquiry, the Writings celebrate knowledge as wings for humanity’s flight. Superstition is rejected; dogma that contradicts demonstrated truth is to be set aside; yet science without spiritual values risks becoming a cold instrument of power. Today’s search for exoplanets, astrobiology, and open scientific inquiry into unknown aerial phenomena can proceed without panic myths: curiosity, justice, and honesty replace the reflex to see every mystery as a threat.",
        "Planetary unity on Earth remains the first task; wonder at a living cosmos is its companion. Reading nature as a book of divine signs, studying the stars without losing the soul, and building a civilization where technology serves unity—these are the twin labors of this door.",
        "This chamber gathers that vision: a conscious cosmos, two wings in flight, and the quiet confidence that creation is vast enough for countless creatures—and one God.",
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
        "آثار بهائی دربارهٔ حیات در سیارات دیگر چه می‌گویند؟ حضرت بهاءالله می‌فرمایند هر ستارهٔ ثابتی سیارات خود و هر سیاره‌ای مخلوقات خود را دارد—که شمارهٔ آنان را هیچ انسانی نمی‌تواند شمرد. حضرت عبدالبهاء از عوالمی سخن می‌گویند که باشندگانی قادر به عرفان حق در آن‌ها ساکن‌اند. حضرت شوقی افندی می‌فرمایند ماهیت این مخلوقات را علم روزی کشف خواهد کرد. دلیل حیات فراتر از زمین، در این نور، گمانه‌زنی حاشیه‌ای نیست—در تار و پود وحی تنیده است و شگفتی می‌طلبد، نه ترس.",
        "آثار مبارکه علم را بال پرواز بشر می‌ستایند. خرافات رد می‌شود؛ جزم مخالف حقیقت مبرهن کنار نهاده می‌شود؛ اما علم بی‌ارزش‌های روحانی خطر ابزار سرد قدرت شدن دارد. جستجوی امروزِ سیارات فراخورشیدی، اخترزیست‌شناسی و پژوهش پدیده‌های ناشناختهٔ هوایی می‌تواند بی‌افسانه‌های هراس پیش رود: کنجکاوی، عدالت و صداقت جای این بازتاب را می‌گیرند که هر رازی را تهدید ببینیم.",
        "وحدت سیاره‌ای روی زمین نخستین تکلیف است؛ شگفتی در برابر کیهان زنده، هم‌سفر آن. خواندن طبیعت چون کتاب آیات، مطالعهٔ ستارگان بی‌از‌دست‌دادن روح، و ساختن تمدنی که فناوری در خدمت وحدت باشد—این دو کار این دروازه‌اند.",
        "این حجره آن چشم‌انداز را گرد می‌آورد: کیهانی آگاه، دو بال در پرواز، و اطمینان آرام که خلقت برای مخلوقات بی‌شمار—و یک خدا—وسعت دارد.",
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
        "Bahá’u’lláh elevates arts, crafts, and sciences as means of exalting the world of being. Music, when purified of passion that degrades the soul, can draw hearts toward prayer; calligraphy renders the Word visible; architecture of the Mashriqu’l-Adhkár gathers humanity under one luminous roof. Art, in this vision, is a gift of the Holy Spirit—a form of worship that draws the human spirit nearer to God.",
        "Why do we need artists to perfect civilization? Because laws and factories alone cannot remake the inner world. Beauty softens hardened hearts; story and song carry truths that argument cannot; design shapes spaces where unity feels possible. ‘Abdu’l-Bahá and Shoghi Effendi encouraged beauty in worship and culture without reducing devotion to spectacle. A civilization worthy of the name needs creators who translate the ineffable into forms every soul can approach.",
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
        }
      ],
    },
    fa: {
      title: "نیروی روحانی هنرها—چرا تمدن به هنرمند نیاز دارد",
      paragraphs: [
        "حضرت بهاءالله صنایع و علوم را سبب علوّ عالم وجود می‌دانند. موسیقی، چون از هوایی که روح را پست می‌کند پاک شود، قلوب را به‌سوی دعا می‌کشد؛ خوشنویسی کلام را مرئی می‌سازد؛ معماری مشرق‌الاذکار بشریت را زیر یک سقف نورانی گرد می‌آورد. هنر در این نگاه موهبتی از روح‌القدس است—عبادتی که روح انسان را به خداوند نزدیک می‌کند.",
        "چرا برای کمال تمدن به هنرمندان نیاز داریم؟ زیرا قانون و کارخانه به‌تنهایی دنیای درون را باز نمی‌سازند. زیبایی دل‌های سخت را نرم می‌کند؛ داستان و نغمه حقایقی را می‌برند که استدلال نمی‌تواند؛ طراحی فضاهایی می‌سازد که وحدت در آن‌ها ممکن به نظر می‌رسد. حضرت عبدالبهاء و حضرت شوقی افندی زیبایی در عبادت و فرهنگ را تشویق فرمودند بی‌آنکه عبادت به تماشا فروکاهد. تمدنی شایستهٔ نام، نیازمند آفرینندگانی است که ناگفتنی را به صورتی درآورند که هر نفسی بتواند نزدیک شود.",
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
        }
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
        "Bahá’í mysticism does not end in private ecstasy. Bahá’u’lláh’s revelation unites the transformation of the heart with the rebuilding of society: the oneness of humanity, the equality of women and men, the elimination of extremes of wealth and poverty, universal education, and governance by consultation. Unity is not uniformity—it is harmony among diverse notes.",
        "“Guidance hath ever been given by words, and now it is given by deeds,” declare the Hidden Words. Inner awakening that never touches justice remains incomplete. Conversely, social action without spiritual roots withers. The Mashriqu’l-Adhkár itself is conceived as a dawning-place of praise surrounded by dependencies of service—education, healing, and care for the poor.",
        "Concentrating the heart on love and unity is daily practice: speaking with kindness, consulting instead of contending, refusing prejudice, and building communities where every soul belongs. This door closes the circle of the Nine—how the soul’s journey, self-knowledge, mystical wayfaring, symbols, intuition, cosmic wonder, sacred art, and love become a living force that spiritualizes neighborhoods, nations, and the planet—quietly, steadily, and for all.",
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
        }
      ],
    },
    fa: {
      title: "قانون ابدی: تمرکز قلوب بر عشق و وحدت",
      paragraphs: [
        "حضرت عبدالبهاء می‌فرمایند وحدت نیروی پیونددهندهٔ عالم هستی و اساس صلح پایدار است. قانون ابدی ساده و سخت است: قلب را بر عشق و وحدت متمرکز کن. آنجا که قلوب با تعصب، ملت، نژاد یا کیش پراکنده شده‌اند، تمدن می‌گسلد؛ آنجا که عشق آنان را گرد آورد، جهان بازساخته می‌شود.",
        "عرفان بهائی در خلسهٔ خصوصی پایان نمی‌یابد. ظهور حضرت بهاءالله تحول قلب را با بنای جامعه پیوند می‌دهد: وحدت نوع انسان، برابری زن و مرد، رفع تضادهای ثروت و فقر، تعليم عمومی، و حکمرانی بر پایهٔ مشورت. وحدت یک‌شکلی نیست—هماهنگی میان نغمه‌های گوناگون است.",
        "کلمات مکنونه می‌فرماید هدایت پیش‌تر به کلام بود و اکنون به اعمال است. بیداری درونی که هرگز به عدالت نرسد ناتمام است. در مقابل، کنش اجتماعی بی‌ریشهٔ روحانی پژمرده می‌شود. خود مشرق‌الاذکار طلوع‌گاه ستایشی است که وابسته‌های خدمت—آموزش، شفا و حمایت فقرا—آن را احاطه می‌کنند.",
        "تمرکز قلب بر عشق و وحدت تمرین روزانه است: سخن به مهربانی، مشورت به‌جای ستیز، نفی تعصب، و ساختن جوامعی که هر نفسی در آن جای دارد. این دروازه دایرهٔ نُه را می‌بندد—چگونه سفر روح، خودشناسی، سلوک، رموز، شهود، شگفتی کیهانی، هنر قدسی و عشق به نیرویی زنده بدل می‌شوند که محله‌ها، ملت‌ها و کرهٔ زمین را—آرام، پایدار و برای همه—روحانی می‌سازند.",
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
        }
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
